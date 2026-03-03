import './assets/css/App.css';
import Footer from './Footer.jsx';
import Header from './Header';
import HomeContainer from './home/HomeContainer.jsx';
import { Routes, Route } from 'react-router-dom';
import { Artigo } from './pages/artigo/Artigo.jsx';
import { Container } from './components/layout/Container/Container.jsx';

function App() {
 return (
  <>
    <Header/>
    <Container>
      <Routes>
        <Route path="/" element={<HomeContainer/>} />
        <Route path="/artigo/:id" element={<Artigo />}/>
      </Routes>
    </Container>
    <Footer/>
  </>
 );
}

export default App
