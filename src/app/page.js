"use client"
import { useState } from "react";

export default function Home() {
  const [userChoice, setUserChoice] = useState("choix");
  const [computerChoice, setComputerChoice] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [result, setResult] = useState("Debut selectionner votre choix");

  const choices = ["Pierre", "Feuille", "Ciseaux"];

  const Submit = () => {
    
    if (userChoice === "choix"){
      setResult("SVP Choisir votre choix");
      return;
    }

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    
    if (userChoice === randomChoice) {
      setResult("Égalité !");
    } else if (
      (userChoice === "Pierre" && randomChoice === "Ciseaux") ||
      (userChoice === "Feuille" && randomChoice === "Pierre") ||
      (userChoice === "Ciseaux" && randomChoice === "Feuille")
    ) {
      setResult("Gagné !");
      setWins(wins + 1);
    } else {
      (userChoice === "Pierre" && randomChoice === "Ciseaux") ||
      (userChoice === "Feuille" && randomChoice === "Pierre") ||
      (userChoice === "Ciseaux" && randomChoice === "Feuille")
      setResult("Perdu !");
      setLosses(losses + 1);
    }
  };

  return (
    <div className="main-container" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Pierre Papier Ciseaux</h1>

      <select value={userChoice} onChange={(e) => setUserChoice(e.target.value)}>
        <option value='choix'>Selectionner votre choix</option>
        <option value='Pierre'>Pierre</option>
        <option value='Feuille'>Feuille</option>
        <option value='Ciseaux'>Ciseaux</option>
      </select>

      <button className="btn" onClick={Submit}>Jouée</button>

      <div>
        <p>Ordinateur a choisi : <strong>{computerChoice}</strong></p>
        <h2>{result}</h2>
      </div>

      <div className="result-container">
        <span className="result v"><strong>Victoires:</strong> {wins}</span>
        <span className="result d"><strong>Défaites:</strong> {losses}</span>
      </div>
    </div>
  );
}