import Layout from "../../components/MyLayout";
// import fetch from "isomorphic-unfetch";
import Axios from "axios";
import Link from "next/link";

const Post = props => (
  <Layout>
    <div className="index">
      <h1 className="index__h1">{props.pelicula.Title}</h1>
      <p>{props.pelicula.Plot}</p>
      <p>
        <strong>▫ Country:</strong> {props.pelicula.Country}
      </p>
      <p>
        <strong>▫ Rating IMDB:</strong> {props.pelicula.imdbRating}
      </p>
      <p>
        <strong>▫ Actors:</strong> {props.pelicula.Actors}
      </p>
      <p>
        <strong>▫ Director:</strong> {props.pelicula.Director}
      </p>
      <p>
        <strong>▫ Year:</strong> {props.pelicula.Year}
      </p>
      <p>
        <strong>▫ Actores:</strong> {props.pelicula.Actors}
      </p>
      <p>
        <strong>▫ Production: </strong> {props.pelicula.Production}
      </p>

      {/* si existe la imagen retornala caso contrario nada */}
      {props.pelicula.Poster ? (
        <div className="Post__imagenContenedor">
          <img src={props.pelicula.Poster} className="Post__imagen" />
        </div>
      ) : (
        ""
      )}
    </div>

    <style jsx>{`
      .index {
        border: 1px gray solid;
        padding: 20px;
        margin: 20px;
      }

      .index__h1 {
        margin-bottom: 10px;
        text-align: center;
      }

      .Post__imagenContenedor {
        display: flex;
        justify-content: center;
      }

      .Post__imagen {
        max-width: 320px;
        width: 100%;
      }

      p {
        margin: 10px 0;
      }
    `}</style>
  </Layout>
);

// si venimos de la ruta / y abrimos este enlace vemos el console.log() solo en el navegador porque cuando le dimos click a link la navegacion sucede en el cliente pero la primera llamada sucede en el servidor
// al componente Post El primer argumento de la función es el objeto de contexto. Tiene un query objeto que podemos usar para obtener información DE la URL (obtenemos el id). y hacemos una peticion a la api directamente a ese id
Post.getInitialProps = async function(context) {
  // destructuramos el id del parametro realizamos la peticion y la pasamos como props al componente
  const { id } = context.query;
  const respuesta = await Axios.get(
    `http://www.omdbapi.com/?apikey=fda41336&i=${id}`
  );
  const pelicula = respuesta.data; //de la respuesta saca la busqueda de la pelicula

  return { pelicula };
};

export default Post;
