import React from 'react';
import styled from 'styled-components'; 
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Step from './components/TelaCadastro/step/Step';
import StepContainer from './components/StepContainer/StepContainer';
import BotaoSair from './components/BotaoSair/BotaoSair';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Form from './components/Form/Form';
import Botao from './components/TelaCadastro/botao/Botao';
import Input from './components/Input/Input';
import Titulo from './components/Titulo/Titulo'





function CadastroDadosCredenciais({ nextStep, prevStep }) {

  const onSubmit = (data) => {
    console.log(data);
    nextStep(); // Avançar para a próxima etapa
  };
  
  return (
    <Container>
      <FormContainer>
        <StepContainer>
        <Step active />
        <Step/>
        <Step/>
        </StepContainer>
        <Titulo>Cadastro Credenciais</Titulo>
        <Form onSubmit={(onSubmit)}>
        <Input label="Email" type="email" placeholder="" />
        <Input label="Confirmar Email" type="email" placeholder="" />  
        <Input label="Senha" type="password" placeholder="" />
        <Input label="Confirmar Senha" type="password" placeholder="" />
        <Botao type="submit">Próxima Etapa </Botao>
        </Form>
      </FormContainer>
      <ImageContainer>
      <BotaoSair></BotaoSair>
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosCredenciais;
