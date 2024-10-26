import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Importando o CSS
import Home from './Home';
import Login from './Login';
import Home2 from './Home2';
import RecuperarSenha from './RecuperarSenha';
import RecuperarSenha2 from './RecuperarSenha2';
import Cadastro1 from './CadastroDadosCredenciais';
import Cadastro2 from './CadastroDadosPessoais';
import Cadastro3 from './CadastroPrecisaDoacao';
import Estoque from './Estoque';
import { Toast } from './components/Toast.jsx'; // Importa o componente Toast


function App() {
  return (
    <BrowserRouter>
          <Toast />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/rec' element={<RecuperarSenha />} />
        <Route path='/rec2' element={<RecuperarSenha2 />} />
        <Route path='/cadastro' element={<Cadastro1 />} />
        <Route path='/cadastro2' element={<Cadastro2 />} />
        <Route path='/cadastro3' element={<Cadastro3 />} />
        <Route path='/estoque' element={<Estoque />} />
        <Route path='*' element={<h1 className="notFound">Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
