import Link from "next/link";


export default function Header() {
  return (
    <div className="header">
      <img
        src="/logo.png"
        alt="imagen de ejemplo logo"
        className="header__logo"
      />
      <Link href="/">
        <a className="header__boton">Inicio</a>
      </Link>
      <Link href="/about">
        <a className="header__boton">Información</a>
      </Link>

      <style jsx>{`
        .header {
          background: #142850;
          height: 70px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: relative;

          -webkit-box-shadow: 0px 21px 27px -12px rgba(0, 0, 0, 0.34);
          -moz-box-shadow: 0px 21px 27px -12px rgba(0, 0, 0, 0.34);
          box-shadow: 0px 20px 27px -12px rgba(0, 0, 0, 0.34);
        }

        .header__boton {
          display: flex;
          align-items: center;
          height: inherit;
          padding: 0 15px;
          color: white;
          text-decoration: none;
        }

        .header__boton:hover {
          background: white;
          color: #142850;
          transition: 0.45s;
        }

        .header__logo {
          height: 70px;
        }
      `}</style>
    </div>
  );
}
