import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

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
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #1f2c5c;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
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
  }
`;

// Estilos do ícone e tooltip
const InfoIcon = styled.span`
  display: inline-block;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #2c5cc5;
  color: white;
  text-align: center;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;

  &:hover .TooltipText {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipText = styled.div`
  visibility: hidden;
  width: 220px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Posição acima do ícone */
  left: 50%;
  margin-left: -110px; /* Para centralizar */
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Posição na parte inferior da tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  background-image: url('https://i.pinimg.com/736x/b1/03/11/b1031101568267b9552495c67947fa15.jpg');
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
const ProgressBar = styled.div`
  width: 100%;
  margin-bottom: 40px;
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

function DoacaoAlimentos({ prevStep }) {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };

  return (
    <Container>
      <FormContainer>
      <ProgressBar>
          <StepIndicator>
            <Step active></Step>
            <Step active></Step>
            <Step active></Step>
          </StepIndicator>
        </ProgressBar>
        <Title>Você precisa de doações de cestas básicas ?    
            <InfoIcon>
            i
            <TooltipText className="TooltipText">
              Entendemos que momentos difíceis podem acontecer na vida de qualquer pessoa. Se você ou sua família estão precisando de ajuda com alimentos, estamos aqui para oferecer suporte. Sua resposta será tratada com total confidencialidade.
            </TooltipText>
          </InfoIcon></Title>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
            <p>
            Responda com responsabilidade para que possamos oferecer a ajuda necessária a quem precisa.
            </p>
          <RadioGroup>
            <RadioLabel>
              <Input type="radio" value="sim" {...register('precisaDoacao')} /> Sim
            </RadioLabel>
            <RadioLabel>
              <Input type="radio" value="nao" {...register('precisaDoacao')} /> Não
            </RadioLabel>
          </RadioGroup>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <ExitButton>Sair</ExitButton>
      </ImageContainer>
    </Container>
  );
}

export default DoacaoAlimentos;
