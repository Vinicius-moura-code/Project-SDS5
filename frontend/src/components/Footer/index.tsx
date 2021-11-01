import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/Vinicius-moura-code"
            target="_blank"
            rel="noreferrer"
          >
            Vinícius Moura
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Made with ❤️{" "}
            <a
              href="https://github.com/Vinicius-moura-code"
              target="_blank"
              rel="noreferrer"
            >
              @__mr.vini.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
