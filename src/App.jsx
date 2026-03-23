import './assets/css/App.css';
import Footer from './components/layout/Footer/Footer.jsx';
import Header from './components/layout/Header/Header.jsx';
import HomeContainer from './pages/home/HomeContainer.jsx';
import { Routes, Route } from 'react-router-dom';
import { Artigo } from './pages/artigo/Artigo.jsx';
import { Container } from './components/layout/Container/Container.jsx';
import { Busca } from './pages/Busca/Busca.jsx';
import { Login } from './pages/Login/Login.jsx';
import { Alert } from './components/Alert/Alert.jsx';

function App() {
 return (
  <>
    <Header/>
    <Alert />
    <Container>
      <Routes>
        <Route path="/" element={<HomeContainer/>} />
        <Route path="/artigo/:id" element={<Artigo />}/>
        <Route path="/busca" element={<Busca />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Container>
    <Footer/>
  </>
 );
}

export default App
