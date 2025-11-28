import imgDoar from "../../assets/doar.png";
import imgEncontrei from "../../assets/encontrei_gatinho.png";
import imgHistoria from "../../assets/historia.png";
import imgONG from "../../assets/botao_ong.png";
import "./style.css";
import { Link } from "react-router-dom";

function OtherInfo() {
  return (
    <div className="contribua_info">
      <h2>Contribua e Explore</h2>
      <p>Aqui estão alguns atalhos importantes para ajudar e conhecer mais!</p>

      <div className="info_container">
        <div className="left_info">
          <a onClick={() => window.open("https://www.paypal.com/br/home", "_blank")}>
            <img src={imgDoar} />
          </a>

          <a onClick={() => window.open("https://web.whatsapp.com", "_blank")}>
            <img src={imgEncontrei} />
          </a>
        </div>

        <div className="right_info">
          <Link to="/ongs">
            <img src={imgONG} />
          </Link>

          <Link to="/about">
            <img src={imgHistoria} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OtherInfo;
