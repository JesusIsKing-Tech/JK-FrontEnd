import React from 'react';
import styled from 'styled-components';
import BotaoSair from './components/BotaoSair/BotaoSair';
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Input from './components/Input/Input';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Botao from './components/TelaCadastro/botao/Botao';
import Titulo from './components/Titulo/Titulo';
import lateral from './img/rec3.png';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
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

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CustomTitulo = styled(Titulo)`
  font-size: 2rem;
  color: #3b5998;
  text-align: center;
  margin-bottom: 30px;
`;

const BotaoCustomizado = styled(Botao)`
  width: 100%;
  background-color: #3b5998;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;



const RedefinirSenha = () => {
  return (
    <Wrapper>
      <FormContainer>
        <CustomTitulo>Redefinição de senha</CustomTitulo>
        <Form>
          <InputGroup>
            <Label>Nova senha:</Label>
            <Input type="password" placeholder="" />
          </InputGroup>
          <InputGroup>
            <Label>Confirmar nova senha:</Label>
            <Input type="password" placeholder="" />
          </InputGroup>
          <BotaoCustomizado type="submit">Alterar senha</BotaoCustomizado>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
        <BotaoSair></BotaoSair>
      </ImageContainer>
    </Wrapper>
  );
};

export default RedefinirSenha;
