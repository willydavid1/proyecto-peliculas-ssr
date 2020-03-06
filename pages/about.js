import Layout from "../components/MyLayout.js";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <p>
          Hola si estás aquí es porque te interesan las películas de Batman y si
          efectivamente aquí puedes encontrar un listado de todas las películas
          de Batman incluso puedes ver mas detalles de una película si te
          interesa y ver cosas como el año, el rating en IMDB, Actores,
          Production, el director, y un poster de la película.
        </p>
        <br />
        <p>
          Pronto estaré creando un buscador para que puedas filtrar por
          películas y así encuentres lo que buscas más fácil y pronto
          agregaremos mas películas, no solo películas de Batman, espero que te
          haya gustado este proyecto que pronto incluirá mejoras.
        </p>

        <div className="contacto">
          <h4>Quiero proponer una mejora o reportar un problema</h4>
          <a className="boton" href="mailto:willydavidlozada@gmail.com">
            Envíame un mail
          </a>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 870px;
          margin: 40px auto;
          padding: 0 20px;
        }

        .contacto {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .boton {
          margin-top: 10px;
          padding: 15px;
          border-radius: 10px;
          color: white;
          background: #142850;
        }
      `}</style>
    </Layout>
  );
}
