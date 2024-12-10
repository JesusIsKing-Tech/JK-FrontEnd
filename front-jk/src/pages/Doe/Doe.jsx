import { useEffect, useState } from 'react';
import styles from './Doe.module.css';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import Titulo from '../../components/Titulo/Titulo';
import FormContainer from '../../components/FormContainer/FormContainer';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Botao from '../../components/TelaCadastro/botao/Botao';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import Container from '../../components/Container/Container';
import axios from 'axios';
import Swal from 'sweetalert2';
import lateral from '../../img/doe.png';

const Doe = () => {
    const [verificado, setVerificado] = useState(false); // Inicialmente não verificado
    const [linhaSelecionada, setLinhaSelecionada] = useState(null);
    const [formData, setFormData] = useState({
        endereco: {
            cep: '',
            logradouro: '',
            numero: '',
            complemento: '',
            bairro: '',
            localidade: '',
            uf: ''
        }
    });

    const familia = {
        nomeFamilia: "Família Silva",
        membros: [
            { nome: "Robert Silva", dataNascimento: "20/02/1986", telefone: "teste endereco", },
            { nome: "Andressa Silva", dataNascimento: "20/02/1986", telefone: "11933736363" },
            { nome: "Anderson Silva", dataNascimento: "20/02/1986", telefone: "11933736363" }
        ]
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name in formData.endereco) {
            setFormData((prevState) => ({
                ...prevState,
                endereco: {
                    ...prevState.endereco,
                    [name]: value
                }
            }));
        }
    };

    useEffect(() => {
        const fetchAddress = async () => {
            if (formData.endereco.cep.length === 8) {
                try {
                    const response = await axios.get(`https://viacep.com.br/ws/${formData.endereco.cep}/json/`);
                    if (response && response.data) {
                        const { logradouro, bairro, localidade, uf } = response.data;
                        setFormData((prevState) => ({
                            ...prevState,
                            endereco: {
                                ...prevState.endereco,
                                logradouro,
                                bairro,
                                localidade,
                                uf
                            }
                        }));
                    } else {
                        console.error('Response incorreta', response);
                    }
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Não foi possível encontrar o endereço para o CEP informado.',
                        confirmButtonText: 'OK',
                    });
                }
            }
        };
        fetchAddress();
    }, [formData.endereco.cep]);

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
                <ImageContainer image={lateral} />
                <FormContainer>
                    {verificado ? (
                        <>
                            <Titulo>Selecione o Responsável</Titulo>
                            <div className={styles.cardFamilia}>
                                <div className={styles.boxTitulo}>
                                    <h2>{familia.nomeFamilia}</h2>
                                </div>
                                <div className={styles.dados}>
                                    <table className={styles.tabela}>
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Dt Nasc.</th>
                                                <th>Telefone</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {familia.membros.map((membro, index) => (
                                                <tr
                                                    key={index}
                                                    className={`${styles.linha} ${linhaSelecionada === index ? styles.linhaSelecionada : ''}`}
                                                    onClick={() => selecionarLinha(index)}
                                                >
                                                    <td>{membro.nome}</td>
                                                    <td>{membro.dataNascimento}</td>
                                                    <td>{membro.telefone}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div style={{ width: "98%" }}>
                                        <Botao onClick={() => alert("Doação realizada!")}>
                                            Doar
                                        </Botao>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Titulo>Retirar Doação</Titulo>
                            <Form onSubmit={handleVerificar}>
                                <Input label="CEP" type="text" name="cep" value={formData.endereco.cep} onChange={handleChange} />
                                <Input readOnly label="Rua" type="text" name="logradouro" value={formData.endereco.logradouro} />
                                <Input label="Número" type="text" name="numero" value={formData.endereco.numero} onChange={handleChange} />
                                <Input label="Complemento" type="text" name="complemento" value={formData.endereco.complemento} onChange={handleChange} />
                                <Input readOnly label="Bairro" type="text" name="bairro" value={formData.endereco.bairro} />
                                <Input readOnly label="Cidade" type="text" name="localidade" value={formData.endereco.localidade} />
                                <Input readOnly label="UF" type="text" name="uf" value={formData.endereco.uf} />
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
