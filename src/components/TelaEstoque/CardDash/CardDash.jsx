import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
import styles from './CardDash.module.css'

// Registrar os componentes do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const CardDash = ({quantidade}) => {
  // Dados fictícios
  const capacidadeTotal = 100; // Capacidade total
  const emUso = quantidade; // Quantidade em uso

  const percentualUso = (emUso / capacidadeTotal) * 100;

  // Dados do gráfico
  const data = {
    labels: ['Em Uso', 'Disponível'], // Labels do gráfico de pizza
    datasets: [
      {
        label: 'Capacidade',
        data: [emUso, capacidadeTotal - emUso], // Dados do gráfico
        backgroundColor: ['#2b4c7e', '#d3d3d3'], // Cores para as fatias
        borderColor: ['#1a375f', '#b1b1b1'], // Cor da borda das fatias
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={styles["card-musica"]}>
    <div style={{ width: '100%', height: '100%', margin: '0 auto' }}>
      <Pie data={data} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <h3>{percentualUso}% em uso</h3>
      </div>
    </div>
    </div>
  );
};

export default CardDash;
