import "./style.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <h3 className="footer-title">Contato e informações:</h3>

        <div className="footer-info">
          <div className="footer-left">
            <p>contato@lartemporario.com</p>
            <p>(15) 99695-2586</p>
          </div>

          <div className="divider"></div>

          <div className="footer-right">
            <p>Rua Sólon Borges dos Reis, Nº 251</p>
            <p>Segunda a Sábado, 9h às 16h</p>
          </div>
        </div>

        <center>
            <p className="footer-copy">© 2025  - Projeto Lar Temporário</p>
        </center>
    </footer>
    </>
  );
}

export default Footer;
