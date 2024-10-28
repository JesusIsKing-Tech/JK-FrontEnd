import React, { useContext, useState } from 'react';
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
import { CadastroContext } from './CadastroContext';

function CadastroDadosPessoais({ nextStep }) {
  const { formData, setFormData } = useContext(CadastroContext);
  const [gender, setGender] = useState(''); // Estado para o gênero

  const onSubmit = (data) => {
    console.log(data);
    nextStep(); // Avançar para a próxima etapa
  };

  const handleChange = (e)=>{
    const { name, value } = e.target

    if(name in formData.endereco){
      setFormData((prevState) => ({
         ...prevState,
          endereco: {
            ...prevState.endereco,
            [name]: value,
          },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }

  };

  const handleGenderChange = (e) =>{
    setGender(e.target.value);
    setFormData({ ...formData, genero: e.target.value})
  };

  const handleSubmit = (e) =>{
    console.log(formData);
    e.preventDefault();
    nextStep();
  };

  const genderOptions = [
    { value: '', label: 'Selecione o gênero' },
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' }
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
        <Form onSubmit={handleSubmit}>
          <Input label="Nome Completo" type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="" />
          <SelectOpt label="Gênero" options={genderOptions} value={formData.genero} onChange={handleGenderChange} />
          <Input label="Data de Nascimento" type="" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} placeholder="Dia/Mês/Ano" />
          <Input label="Telefone" type="" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="11912345678" />
          <Input label="CEP" type="text" name="cep" value={formData.endereco.cep} onChange={handleChange} placeholder="" />
          <Input label="Rua" type="text"name="logradouro" value={formData.endereco.logradouro} onChange={handleChange} placeholder="" />
          <Input label="Número" type="text" name="numero" value={formData.endereco.numero} onChange={handleChange} placeholder="" />
          <Input label="Bairro" type="text" name="bairro" value={formData.endereco.bairro} onChange={handleChange} placeholder="" />
          <Input label="Cidade" type="text" name="localidade" value={formData.endereco.cidade} onChange={handleChange} placeholder="" />
          <Input label="UF" type="text" name="uf" value={formData.endereco.uf} onChange={handleChange} placeholder="" />
          <Botao type="submit" to={'/cadastro3'}>Próxima</Botao>
        </Form>
      </FormContainer>
      <ImageContainer>
        <BotaoSair to={"/"} />
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosPessoais;
