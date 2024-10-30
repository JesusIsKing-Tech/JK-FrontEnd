import React, { useState } from 'react';
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Step from './components/TelaCadastro/step/Step';
import StepContainer from './components/StepContainer/StepContainer';
import BotaoSair from './components/BotaoSair/BotaoSair';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Form from './components/Form/Form';
import Botao from './components/TelaCadastro/botao/Botao';
import Input from './components/Input/Input';
import SelectOpt from './components/TelaCadastro/selectOpt/SelectOpt'; 
import Titulo from './components/Titulo/Titulo';
import lateral from './img/cadastro2.png'


function CadastroDadosPessoais({ nextStep }) {
  const [gender, setGender] = useState(''); // Estado para o gênero

  const onSubmit = (data) => {
    console.log(data);
    nextStep(); // Avançar para a próxima etapa
  };

  const genderOptions = [
    { value: '', label: 'Selecione o gênero' },
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outro', label: 'Outro' },
  ];

  return (
    <Container>
      <FormContainer>
        <StepContainer>
          <Step active />
          <Step active />
          <Step />
        </StepContainer>
        <Titulo>Cadastro Dados Pessoais</Titulo>
        <Form onSubmit={onSubmit}>
          <Input label="Nome Completo" type="text" placeholder="" />
          <SelectOpt label="Gênero" options={genderOptions} onChange={(e) => setGender(e.target.value)} value={gender} />
          <Input label="Data de Nascimento" type="text" placeholder="Dia/Mês/Ano" />
          <Input label="CEP" type="text" placeholder="" />
          <Input label="Rua" type="text" placeholder="" />
          <Input label="Número" type="text" placeholder="" />
          <Input label="Bairro" type="text" placeholder="" />
          <Input label="Cidade" type="text" placeholder="" />
          <Input label="UF" type="text" placeholder="" />
          <Botao type="submit" to={'/cadastro3'}>Próxima</Botao>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
        <BotaoSair to={"/"} />
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosPessoais;
