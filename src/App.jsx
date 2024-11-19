import React, { useState } from "react";
import "./App.css";


function App() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState("");
    const [classificacao, setClassificacao] = useState("");

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaEmMetros = parseFloat(altura) / 100; 
            const imc = parseFloat(peso) / (alturaEmMetros ** 2); 
            setResultado(imc.toFixed(2)); 

            if (imc < 18.5) {
                setClassificacao("Abaixo do peso");
            } else if (imc >= 18.5 && imc < 24.9) {
                setClassificacao("Peso normal");
            } else if (imc >= 25 && imc < 29.9) {
                setClassificacao("Sobrepeso");
            } else if (imc >= 30 && imc < 34.9) {
                setClassificacao("Obesidade grau I");
            } else if (imc >= 35 && imc < 39.9) {
                setClassificacao("Obesidade grau II");
            } else {
                setClassificacao("Obesidade grau III");
            }
        } else {
            alert("Por favor, preencha todos os campos!");
        }
    };

    return (
        <div className="app">
            <h1>Calculadora de IMC</h1>
            <div className="form-container">
                <label>
                    Altura (cm):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        placeholder="Digite sua altura em cm"
                    />
                </label>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        placeholder="Digite seu peso em kg"
                    />
                </label>
                <button onClick={calcularIMC}>Calcular IMC</button>
            </div>
            {resultado && (
                <div className="resultado">
                    <h2>Seu IMC é: {resultado}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            )}
        </div>
    );
}



export default App
