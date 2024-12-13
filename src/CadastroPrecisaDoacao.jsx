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
import { CadastroContext } from './CadastroContext';
import { useContext } from 'react';
import api from './api';
import lateral from './img/cadastro3.jpeg'
import { useNavigate } from 'react-router-dom';


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

  const { formData, setFormData } = useContext(CadastroContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData((prevStep) => ({
      ...prevStep,
      receber_doacoes: value
    })
    )
  }

  const handleClick = async (e) => {
    console.log(formData);
    e.preventDefault();
    
      const response = 
      await api.post('/usuarios/cadastrar', formData).then((response) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Cadastro realizado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
        navigate('/login');
        });
      }).catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Erro ao realizar o cadastro',
          confirmButtonText: 'OK',
        });
      }, []);
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
              value="true"
              onChange={handleChange}
              />
            Sim
          </RadioLabel>
          <RadioLabel>
            <InputRadio 
              type="radio" 
              id="contactChoice2" 
              name="contact" 
              value="false"
              onAbort={handleChange}
              />
            Não
          </RadioLabel>
        </RadioBox>
        <Form>
          <BotaoEstilizado funcao={handleClick}>Cadastrar</BotaoEstilizado>
            </Form>
        
      </FormContainer>
      <ImageContainer image={lateral}>
        <BotaoSair to={"/"} />
      </ImageContainer>
    </Container>
  );
}

export default DoacaoAlimentos;
