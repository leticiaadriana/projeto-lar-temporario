import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Home from "./pages/HomePage.jsx";
import Adoption from "./pages/AdoptionPage.jsx";
import History from "./pages/AboutPage.jsx";
import Ong from "./pages/OngsPage.jsx";
import LoginAdmPage from "./pages/LoginPage.jsx";
import Footer from './components/footer';
import DashboardPage from "./pages/DashboardPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  const appStyle = {
    backgroundColor: '#FFF7DD'
  }

  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/adocao" element={<Adoption/>}/>
          <Route path="/sobre" element={<History/>}/>
          <Route path="/ongs" element={<Ong/>}/>
          <Route path="/login" element={<LoginAdmPage/>}/>

          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage/>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
