import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // Importando o CSS
import Home from './pages/LandingPage/Home.jsx';
import Login from './Login';
import Home2 from './pages/Home/Home2.jsx';
import RecuperarSenha from './RecuperarSenha';
import RecuperarSenha2 from './RecuperarSenha2';
import RecuperarSenha3 from './RecuperarSenha3';
import Cadastro from './Cadastro';
import Estoque from './Estoque';
import Perfil from './Perfil.jsx';
import { Toast } from './components/Toast.jsx'; // Importa o componente Toast
import { CadastroProvider } from './CadastroContext.jsx';
import { RecuperacaoProvider } from './RecuperacaoContext.jsx';
import { AuthProvider } from './AuthContext.js';
import ProtectedRoute from './ProtectedRoute.js';
import Recuperacao from './Recuperacao.jsx';


function App() {
  return (
    <AuthProvider>

    <CadastroProvider>
    <RecuperacaoProvider>

    <BrowserRouter>
          <Toast />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/noticias'  element={<Home2/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/rec' element={<RecuperarSenha />} />
        <Route path='/rec2' element={<RecuperarSenha2 />} />
        <Route path='/rec3' element={<RecuperarSenha3 />} />

        <Route path='/recuperacao' element={<Recuperacao />} />'
        
        <Route path='/cadastro' element={<Cadastro />} />

        <Route path='/estoque' element={<ProtectedRoute element={<Estoque />}/>} />
        <Route path='/perfil' element={<ProtectedRoute element={<Perfil />}/>} />
        <Route path='*' element={<h1 className="notFound">Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
    </RecuperacaoProvider>
    </CadastroProvider>
    </AuthProvider>
  );
}

export default App;
