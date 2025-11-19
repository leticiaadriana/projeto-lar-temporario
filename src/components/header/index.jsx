import './style.css'
import {Link} from "react-router-dom"

function Header (){
    return (
        <>
        <header className="Header">
            <nav>
                <Link to="/">Página Inicial</Link>
                <Link to="/adoption">Adote um amigo!</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/ongs">Outras ONG's</Link>
            </nav>
        </header>
        </>
    );
}

export default Header