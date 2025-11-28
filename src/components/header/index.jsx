import './style.css'
import {Link} from "react-router-dom"

function Header (){
    return (
        <>
        <header className="Header">
            <nav>
                <Link to="/">Página Inicial</Link>
                <Link to="/adocao">Adote um amigo!</Link>
                <Link to="/ongs">Outras ONG's</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
        </header>
        </>
    );
}

export default Header