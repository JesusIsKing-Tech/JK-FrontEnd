import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BotaoSair from './components/BotaoSair/BotaoSair';
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Input from './components/Input/Input';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Botao from './components/TelaCadastro/botao/Botao';
import Titulo from './components/Titulo/Titulo';
import Swal from 'sweetalert2';
import lateral from './img/login.png';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;


const ForgotPasswordLink = styled(Link)`
  color: #2c5cc5;
  font-size: 0.9rem;
  text-align: right;
  display: block;
  margin-top: 5px;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {

    console.log("ENTREI NO SUBMIT", email, password);

    e.preventDefault();
    try {
      await login(email, password);
      Swal.fire({
        icon: 'success',
        title: 'Login efetuado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });

      navigate('/home');

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao fazer login',
        text: 'Email ou senha incorreto verifique suas credenciais e tente novamente!',
      });
    }
  };



  return (
    <Container>
      <FormContainer>
        {/* <Logo src={imagem} alt="Logo" /> */}
        <Titulo>LOGIN</Titulo>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email:</Label>
            <Input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="" />
          </InputGroup>
          <InputGroup>
            <Label>Senha:</Label>
            <Input type="password"  onChange={(e) => setPassword(e.target.value)}  placeholder="" />
            <ForgotPasswordLink to="/recuperacao">Esqueceu a senha?</ForgotPasswordLink>
          </InputGroup>
          <Botao type="submit">Entrar</Botao>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
      <BotaoSair/>
       
      </ImageContainer>
    </Container>
  );
};

export default Login;
