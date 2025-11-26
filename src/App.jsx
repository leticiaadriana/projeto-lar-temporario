import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/header'
import Home from "./pages/HomePage.jsx"
import Adoption from "./pages/AdoptionPage.jsx"
import History from "./pages/AboutPage.jsx"
import Ong from "./pages/OngsPage.jsx"
import LoginAdmPage from "./pages/LoginPage.jsx"
import Footer from './components/footer'

function App () {
    const appStyle = {
       backgroundColor: '#FFF7DD'
    }
    
    return (
        <BrowserRouter>
            <div style={appStyle}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/adoption" element={<Adoption/>}/>
                    <Route path="/about" element={<History/>}/>
                    <Route path="/ongs" element={<Ong/>}/>
                    <Route path="/login" element={<LoginAdmPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;