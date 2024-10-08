import React from 'react';
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Step from './components/TelaCadastro/step/Step';
import StepContainer from './components/StepContainer/StepContainer';
import BotaoSair from './components/BotaoSair/BotaoSair';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Form from './components/Form/Form';
import Botao from './components/TelaCadastro/botao/Botao';
import Titulo from './components/Titulo/Titulo';
import styled from 'styled-components';
import InfoIcone from './components/InfoIcone/InfoIcone';
import Swal from 'sweetalert2'; // Importa o SweetAlert2

const RadioBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  margin: 20px 0; 
`;

const RadioLabel = styled.label`
  font-size: 1.5rem;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 40px 40px;
`;

const InputRadio = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  accent-color: #007BFF;
  cursor: pointer;
`;

const BotaoEstilizado = styled(Botao)`
`;

function DoacaoAlimentos({ prevStep }) {

  const handleClick = () => {
    Swal.fire({
      title: 'Cadastro realizado!',
      text: 'Sua resposta foi registrada com sucesso.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <Container>
      <FormContainer>
        <StepContainer>
          <Step active />
          <Step active />
          <Step active />
        </StepContainer>
        <Titulo>
          Você precisa de doações de cestas básicas ?
          <InfoIcone texto="Entendemos que momentos difíceis podem acontecer na vida de qualquer pessoa. Se você ou sua família estão precisando de ajuda com alimentos, estamos aqui para oferecer suporte. Sua resposta será tratada com total confidencialidade.">
          </InfoIcone>
        </Titulo>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Responda com responsabilidade para que possamos oferecer a ajuda necessária a quem precisa.
        </p>
        
        <RadioBox>
          <RadioLabel>
            <InputRadio 
              type="radio" 
              id="contactChoice1" 
              name="contact" 
              value="sim"
              />
            Sim
          </RadioLabel>
          <RadioLabel>
            <InputRadio 
              type="radio" 
              id="contactChoice2" 
              name="contact" 
              value="nao"
              />
            Não
          </RadioLabel>
        </RadioBox>
        <Form>
          <BotaoEstilizado funcao={handleClick}>Cadastrar</BotaoEstilizado>
            </Form>
        
      </FormContainer>
      <ImageContainer>
        <BotaoSair />
      </ImageContainer>
    </Container>
  );
}

export default DoacaoAlimentos;
