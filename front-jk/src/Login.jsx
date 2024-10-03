import React from 'react';
import styled from 'styled-components';
import imagem from './img/logo.png'


const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  position: relative; /* Adicionado para posicionar a logo */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 120px; /* Tamanho da logo */
  height: auto;
  cursor: pointer;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
`;

const Title = styled.h2`
  color: #1f2c5c;
  margin-bottom: 20px;
`;

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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  &:focus {
    border-color: #2c5cc5;
    outline: none;
  }
`;

const ForgotPasswordLink = styled.a`
  color: #2c5cc5;
  font-size: 0.9rem;
  text-align: right;
  display: block;
  margin-top: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2c5cc5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #244aa6;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  background-image: url('https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2018/06/bruna-marquezine-neymar.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const ExitButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #2c5cc5;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #244aa6;
  }
`;

const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Logo src={imagem} alt="Logo" />
        <Title>LOGIN</Title>
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
          <Button type="submit">Entrar</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <ExitButton>Sair</ExitButton>
      </ImageContainer>
    </Container>
  );
};

export default Login;
