import React from 'react';
import styled from 'styled-components';
import BotaoSair from './components/BotaoSair/BotaoSair';
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Input from './components/Input/Input';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Botao from './components/TelaCadastro/botao/Botao';
import Titulo from './components/Titulo/Titulo';

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


const ForgotPasswordLink = styled.a`
  color: #2c5cc5;
  font-size: 0.9rem;
  text-align: right;
  display: block;
  margin-top: 5px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <FormContainer>
        {/* <Logo src={imagem} alt="Logo" /> */}
        <Titulo>LOGIN</Titulo>
        <Form>
          <InputGroup>
            <Label>Email:</Label>
            <Input type="email" placeholder="" />
          </InputGroup>
          <InputGroup>
            <Label>Senha:</Label>
            <Input type="password" placeholder="" />
            <ForgotPasswordLink href="#">Esqueceu a senha?</ForgotPasswordLink>
          </InputGroup>
          <Botao type="submit">Entrar</Botao>
        </Form>
      </FormContainer>
      <ImageContainer>
<BotaoSair/>
      </ImageContainer>
    </Container>
  );
};

export default Login;
