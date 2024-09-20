import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

// Estilização usando Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #f8f9fa;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const ProgressBar = styled.div`
  width: 50%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Step = styled.div`
  height: 10px;
  width: 100px;
  background-color: ${(props) => (props.active ? '#2c5cc5' : '#e0e0e0')};
  border-radius: 5px;
  margin-right: 10px;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  color: #1f2c5c;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

const BoxLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Button = styled.button`
  grid-column: span 2;
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

  @media (max-width: 768px) {
    width: 100%;
    grid-column: 1;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  background-image: url('https://odia.ig.com.br/_midias/jpg/2021/05/17/1200x1920/1_mc_kevin_2-21922532.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ExitButton = styled.button`
  background-color: #244aa6;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 20px;
  right: 20px;
`;

function CadastroDadosCredenciais({ nextStep, prevStep }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    nextStep(); // Avançar para a próxima etapa
  };
  
  return (
    <Container>
      <FormContainer>
        <ProgressBar>
          <StepIndicator>
            <Step active />
            <Step />
            <Step />
          </StepIndicator>
        </ProgressBar>
        <Title>Cadastro Credenciais</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <BoxLabels>
            <div>Email</div>
            <Input type="email" {...register('email')} />
          </BoxLabels>
          <BoxLabels>
            <div>Confirme seu email</div>
            <Input type="email" {...register('confirmeEmail')} />
          </BoxLabels>
          <BoxLabels>
            <div>Senha</div>
            <Input type="password" {...register('senha')} />
          </BoxLabels>
          <BoxLabels>
            <div>Confirme sua senha</div>
            <Input type="password" {...register('confirmeSenha')} />
          </BoxLabels>
          <Button type="submit">Próxima Etapa</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <ExitButton>Sair</ExitButton>
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosCredenciais;
