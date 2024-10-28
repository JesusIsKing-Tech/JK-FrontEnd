import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Importando o CSS
import Home from './Home';
import Login from './Login';
import Home2 from './Home2';
import RecuperarSenha from './RecuperarSenha';
import RecuperarSenha2 from './RecuperarSenha2';
import Cadastro from './Cadastro';
import Cadastro1 from './CadastroDadosCredenciais';
import Cadastro2 from './CadastroDadosPessoais';
import Cadastro3 from './CadastroPrecisaDoacao';
import Estoque from './Estoque';
import { Toast } from './components/Toast.jsx'; // Importa o componente Toast
import { CadastroProvider } from './CadastroContext.jsx';


function App() {
  return (
    <CadastroProvider>
    <BrowserRouter>
          <Toast />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/rec' element={<RecuperarSenha />} />
        <Route path='/rec2' element={<RecuperarSenha2 />} />

        <Route path='/cadastro' element={<Cadastro />} />

        <Route path='/estoque' element={<Estoque />} />
        <Route path='*' element={<h1 className="notFound">Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
    </CadastroProvider>
  );
}

export default App;
