import React from "react";

// componente de error que recibe por props el error
export default function Error(props) {
//   console.log(props);
  return (
    <React.Fragment>
      <div className="error">
        <p>{props.mensajeError} ❌🙊</p>
      </div>

      <style jsx>{`
        .error {
          color: red;
          font-size: 20px;
          text-align: center;
          margin: 70px auto;
          border: 1px solid red;
          padding: 5px;
          max-width: 500px;
        }
      `}</style>
    </React.Fragment>
  );
}
