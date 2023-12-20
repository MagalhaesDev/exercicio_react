import React, { useState } from 'react';
import styles from './App.module.css';
import alertStyles from './Alert.module.css';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        setMensagem('Magreza');
      } else if (imcCalculado < 24.9) {
        setMensagem('Normal');
      } else if (imcCalculado < 29.9) {
        setMensagem('Sobrepeso');
      } else if (imcCalculado < 34.9) {
        setMensagem('Obesidade Grau I');
      } else if (imcCalculado < 39.9) {
        setMensagem('Obesidade Grau II');
      } else {
        setMensagem('Obesidade Grau III');
      }
    } else {
      setImc(null);
      setMensagem('Por favor, preencha altura e peso.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <label className={styles.label} htmlFor="altura">Altura (cm)</label>
        <input
          type="number"
          id="altura"
          placeholder="Digite a altura em centímetros"
          className={styles.input}
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <label className={styles.label}  htmlFor="peso">Peso (kg)</label>
        <input
          type="number"
          id="peso"
          placeholder="Digite o peso em quilogramas"
          value={peso}
          className={styles.input}
          onChange={(e) => setPeso(e.target.value)}
        />

        <button className={styles.button} onClick={calcularIMC}>Calcular</button>
      </div>

      {imc !== null && (
        <div className={`${alertStyles.alert} ${alertStyles['alert-info']}`}>
          Seu IMC é {imc} - Classificação: {mensagem}
        </div>
      )}
    </div>
  );
};

export default App;
