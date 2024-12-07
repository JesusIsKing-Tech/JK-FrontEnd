import { useState } from 'react';
import styles from './Doe.module.css';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import Titulo from '../../components/Titulo/Titulo';
import FormContainer from '../../components/FormContainer/FormContainer';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Botao from '../../components/TelaCadastro/botao/Botao';
import ImageContainer from'../../components/ImageContainer/ImageContainer'
import lateral from '../../img/doe.png'
import Container from '../../components/Container/Container';

const Doe = () => {
    const [verificado, setVerificado] = useState(false); // Inicialmente não verificado
    const [linhaSelecionada, setLinhaSelecionada] = useState(null);

    const familia = {
        nomeFamilia: "Família Silva",
        membros: [
            { nome: "Robert Silva", dataNascimento: "20/02/1986", responsavel: false },
            { nome: "Andressa Silva", dataNascimento: "20/02/1986", responsavel: false },
            { nome: "Anderson Silva", dataNascimento: "20/02/1986", responsavel: false }
        ]
    };

    const handleVerificar = (event) => {
        event.preventDefault();
        setVerificado(true);
    };

    const selecionarLinha = (index) => {
        setLinhaSelecionada(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            <HeaderLogado />
            <div className={styles.container}>
            <ImageContainer image={lateral}>
            </ImageContainer>
            <FormContainer>
                {verificado ? (<>
                
                <Titulo>Selecione o Responsável</Titulo>
                    <div className={styles.cardFamilia}>
                        <div className={styles.boxTitulo}>
                            <h2>{familia.nomeFamilia}</h2>
                        </div>
                        <div className={styles.dados}>
                            <div className={styles.campo}>
                                <div className={styles.boxTitulo}>
                                <h3>Nome</h3>
                                </div>
                                <div className={styles.boxLinha}>
                                {familia.membros.map((membro, index) => (
                                    <p
                                        key={index}
                                        className={`${styles.linha} ${linhaSelecionada === index ? styles.linhaSelecionada : ''}`}
                                        onClick={() => selecionarLinha(index)}
                                    >
                                        {membro.nome}
                                    </p>
                                ))}
                            </div>
                            </div>

                            <div className={styles.campo}>
                            <div className={styles.boxTitulo}>
                                <h3>Dt Nasc.</h3>
                                </div>
                                <div className={styles.boxLinha}>

                                {familia.membros.map((membro, index) => (
                                    <p
                                        key={index}
                                        className={`${styles.linha} ${linhaSelecionada === index ? styles.linhaSelecionada : ''}`}
                                        onClick={() => selecionarLinha(index)}
                                    >
                                        {membro.dataNascimento}
                                    </p>
                                ))}
                                </div>
                            </div>

                            <div className={styles.campo}>
                            <div className={styles.boxTitulo}>
                                <h3>Responsável</h3>
                                </div>
                                <div className={styles.boxCheck}>                                

                                {familia.membros.map((membro, index) => (
                                    <div
                                        key={index}
>
                                        <div className={styles}>

                                        <input
                                            type="radio"
                                            name="responsavel"
                                            checked={linhaSelecionada === index}
                                            />
                                            </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <Botao onClick={() => alert("Doação realizada!")}>Doar</Botao>
                    </div>
                    </>
                ) : (
<>
<Titulo>Retirar Doação</Titulo>
<Form onSubmit={handleVerificar}>
                        <Input label="CEP" type="text" name="cep" />
                        <Input readOnly label="Rua" style={{ background: '#f0f0f0', border: 'none' }} type="text" name="logradouro" />
                        <Input label="Número" type="text" name="numero" />
                        <Input label="Complemento" type="text" name="complemento" />
                        <Input readOnly label="Bairro" type="text" name="bairro" style={{ backgroundColor: '#f0f0f0', border: 'none' }} />
                        <Input readOnly label="Cidade" type="text" name="localidade" style={{ backgroundColor: '#f0f0f0', border: 'none' }} />
                        <Input readOnly label="UF" type="text" name="uf" style={{ backgroundColor: '#f0f0f0', border: 'none' }} />
                        <Botao type="submit">Verificar</Botao>
                    </Form>
</>
                )}
            </FormContainer>
            
            </div>
        </>
    );
};

export default Doe;
