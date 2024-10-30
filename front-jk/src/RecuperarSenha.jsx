import React from 'react';
import styled from 'styled-components';
import BotaoSair from './components/BotaoSair/BotaoSair';
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Input from './components/Input/Input';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Botao from './components/TelaCadastro/botao/Botao';
import Titulo from './components/Titulo/Titulo';
import lateral from './img/rec1.png'


const SubTitle = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const ImportantText = styled.p`
  font-size: 0.9rem;
  color: black;
  text-align: center;
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



const RecuperarSenha = () => {
  return (
    <Container>
      <FormContainer>
        <Titulo>Recuperar senha</Titulo>
        <SubTitle>Informe o email que deseja receber o código de recuperação de senha</SubTitle>
        <ImportantText>IMPORTANTE: Deve ser o mesmo email da conta</ImportantText>
        <Form>
          <InputGroup>
            <Label>Email:</Label>
            <Input type="email" placeholder="exemplo@email.com" />
          </InputGroup>
          <Botao type="submit">Enviar código</Botao>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
        <BotaoSair></BotaoSair>
      </ImageContainer>
    </Container>
  );
};

export default RecuperarSenha;
