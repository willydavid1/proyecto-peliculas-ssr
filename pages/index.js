import Layout from "../components/MyLayout.js";
import Error from "../components/Error";

// importamos el link y fetch
import Link from "next/link";
// import fetch from 'isomorphic-unfetch'

import axios from "axios";

const Index = props => {
  // si hubo un error al hacer la solicitud a la API retorna el error
  if (props.error) {
    return (
      <Layout>
        <Error mensajeError={props.error} />
      </Layout>
    );
  }

  // si no existe la busqueda al endpoint de la API
  if (props.respuestaEstado === "False") {
    return (
      <Layout>
        <div className="index">

        <div className="index__paginaNumeroContainer">
          <p className="index__paginaNumero"> <strong> Página #{props.pagina} </strong> </p>
        </div>

          <h1 className="index__h1">
            Parece que haz llegado al final de la lista de Peliculas!
          </h1>
          <Link
            href={{ pathname: "/", query: { pagina: `${props.pagina - 1}` } }}
          >
            <a className="paginacion__enlace">Anterior</a>
          </Link>
        </div>

        <style jsx>{`
          .index {
            border: 1px gray solid;
            padding: 20px;
            margin: 20px;
            position: relative;
          }

          .index__h1 {
            margin-bottom: 50px;
            text-align: center;
          }

          .index__paginaNumero {
            position: absolute;
            right: 0px;
            top: 0px;
            background: #4d80e4;
            color: white;
            padding: 3px 12px;
          }

          .paginacion__enlace {
            margin: 0 10px;
            padding: 7px;
            color: white;
            background: #142850;
            border-radius: 28px;
  
            -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.7);
            -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.7);
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.7);
          }
  
          .paginacion__enlace:hover {
            transition: 0.8s;
            -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
          }
        `}</style>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="index">
        <h1 className="index__h1">Batman peliculas</h1>

        <div className="index__paginaNumeroContainer">
          <p className="index__paginaNumero"> <strong> Página #{props.pagina} </strong> </p>
        </div>

        <ul className="ul__container">
          {props.peliculas.map((pelicula, index) => (
            <li key={index}>
              <Link href="/p/[id]" as={`/p/${pelicula.imdbID}`}>
                <a className="index__boton">▫ {pelicula.Title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="paginacion">
          {/* si estamos en la pagina 1 no muestres el boton anterior caso contrario muestralo */}
          {props.pagina === 1 ? null : (
            <Link
              href={{ pathname: "/", query: { pagina: `${props.pagina - 1}` } }}
            >
              <a className="paginacion__enlace">Anterior</a>
            </Link>
          )}

          <Link
            href={{ pathname: "/", query: { pagina: `${props.pagina + 1}` } }}
          >
            <a className="paginacion__enlace">Siguiente</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .index {
          border: 1px gray solid;
          padding: 20px;
          margin: 20px;
          position: relative;
        }

        .index__h1 {
          margin-bottom: 10px;
          text-align: center;
        }

        .index__boton:hover {
          opacity: 0.6;
        }

        .paginacion {
          margin-top: 23px;
          text-align: center;
        }

        .ul__container{
          max-width: 870px;
          margin: 0 auto;
        }

        li {
          margin: 6px 0;
        }

        @media screen and (max-width: 425px){
          li {
            margin: 20px 0;
          }
        }

        .index__paginaNumero {
          position: absolute;
          right: 0px;
          top: 0px;
          background: #4d80e4;
          color: white;
          padding: 3px 12px;
        }

        .paginacion__enlace {
          margin: 0 10px;
          padding: 7px;
          color: white;
          background: #142850;
          border-radius: 28px;

          -webkit-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.7);
          -moz-box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.7);
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.7);
        }

        .paginacion__enlace:hover {
          transition: 0.8s;
          -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </Layout>
  );
};

// es una función asíncrona estática que puede agregar a cualquier página de su aplicación. Con eso, podemos obtener datos y enviarlos como props a nuestra página.
Index.getInitialProps = async function({ query }) {
  // console.log(query)

  // el query.pagina nos indica la pagina que estamos viendo | si query.pagina existe en la URL pasalo a numero caso contrario sera 1 | http://localhost:3000/?pagina=2 pagina vale 2
  const pagina = query.pagina ? Number(query.pagina) : 1;

  // intenta realizar la busqueda a la API pero si hay un error retorna un error al componente
  try {
    const respuesta = await axios.get(
      `http://www.omdbapi.com/?apikey=fda41336&s=batman&page=${pagina}`
    );
    const peliculas = respuesta.data.Search; //de la respuesta saca la busqueda
    const respuestaEstado = respuesta.data.Response; // si el endpoint de la api no existe la busqueda que estamos haciendo retorna false pero si el endpoint es correcto respuestaEstado vale true

    // retorna un objeto con las peliculas de la api, la pagina donde estamos y la respuesta si existe o no la busqueda al endpoint de la API. Esto llega por props al componente
    return { peliculas, pagina, respuestaEstado };
  } catch (error) {
    // console.log(error)
    return {
      error: "Tenemos problemas al buscar datos intenta mas tarde"
    };
  }
};

export default Index;
