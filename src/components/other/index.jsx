import imgDoar from '../../assets/doar.png'
import imgEncontrei from '../../assets/encontrei_gatinho.png'
import imgHistoria from '../../assets/historia.png'
import imgONG from '../../assets/botao_ong.png'
import './style.css'
import { Link } from 'react-router-dom'

function OtherInfo () {
    return(
        <div className='contribua_info'>
            <div className='contribua'>
                <h2>Contribua Conosco!</h2>
                <a href='https://www.paypal.com/br/home'>
                    <img src={imgDoar}></img>
                </a>
                <a href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://web.whatsapp.com/&ved=2ahUKEwjw_7KY8vmQAxWYCrkGHcdJAhAQFnoECBsQAQ&usg=AOvVaw1V09js0t2A_u6GXzP1jPsR'>
                    <img src={imgEncontrei}></img>
                </a>
            </div>
            <div className='outrasInfos'>
                <h2>Outras informações:</h2>
                <Link to="/ongs">
                    <img src={imgONG}></img>
                </Link>
                <Link to="/about">
                    <img src={imgHistoria}></img>
                </Link>
            </div>
        </div>
    );
} 

export default OtherInfo;