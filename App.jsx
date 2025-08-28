import React, { useState } from "react";

export default function App() {
  const [inovacao, setInovacao] = useState(false);
  const [trabalhoEquipe, setTrabalhoEquipe] = useState(false);
  const [diversaoAtivar, setDiversaoAtivar] = useState(false);
  const [diversaoRoleta, setDiversaoRoleta] = useState(false);
  const [descoberta, setDescoberta] = useState(false);

  const [impactoVermelho, setImpactoVermelho] = useState(0);
  const [impactoAzul, setImpactoAzul] = useState(0);
  const [impactoAmarelo, setImpactoAmarelo] = useState(0);

  const [containers, setContainers] = useState(0);
  const [penalidades, setPenalidades] = useState(0);

  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    let pontos = 0;

    if (inovacao) pontos += 100;
    if (trabalhoEquipe) pontos += 85;
    if (diversaoAtivar) pontos += 65;
    if (diversaoRoleta) pontos += 35;
    if (descoberta) pontos += 85;

    pontos += impactoVermelho * 15;
    pontos += impactoAzul * 18;
    pontos += impactoAmarelo * 16;

    pontos += containers * 5;

    // Penalidades
    let desconto = 0;
    if (penalidades === 1) desconto = 50;
    else if (penalidades === 2) desconto = 50;
    else if (penalidades === 3) desconto = 40;
    else if (penalidades === 4) desconto = 30;
    else if (penalidades === 5) desconto = 20;
    else if (penalidades >= 6) desconto = 10;

    setResultado(pontos - desconto);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Calculadora de Pontos FLL</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-4 space-y-4">
        <h2 className="text-xl font-semibold">Missões</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" checked={inovacao} onChange={() => setInovacao(!inovacao)} />
            <span className="ml-2">Inovação (100)</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={trabalhoEquipe} onChange={() => setTrabalhoEquipe(!trabalhoEquipe)} />
            <span className="ml-2">Trabalho em Equipe (85)</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={diversaoAtivar} onChange={() => setDiversaoAtivar(!diversaoAtivar)} />
            <span className="ml-2">Diversão - Ativar (65)</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={diversaoRoleta} onChange={() => setDiversaoRoleta(!diversaoRoleta)} />
            <span className="ml-2">Diversão - Roleta (35)</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={descoberta} onChange={() => setDescoberta(!descoberta)} />
            <span className="ml-2">Descoberta (85)</span>
          </label>
        </div>

        <h2 className="text-xl font-semibold">Impacto</h2>
        <div className="space-y-2">
          <input type="number" value={impactoVermelho} onChange={e => setImpactoVermelho(parseInt(e.target.value) || 0)} className="w-full p-2 border rounded" placeholder="Vermelho (15 cada)" />
          <input type="number" value={impactoAzul} onChange={e => setImpactoAzul(parseInt(e.target.value) || 0)} className="w-full p-2 border rounded" placeholder="Azul (18 cada)" />
          <input type="number" value={impactoAmarelo} onChange={e => setImpactoAmarelo(parseInt(e.target.value) || 0)} className="w-full p-2 border rounded" placeholder="Amarelo (16 cada)" />
        </div>

        <h2 className="text-xl font-semibold">Inclusão</h2>
        <input type="number" value={containers} onChange={e => setContainers(parseInt(e.target.value) || 0)} className="w-full p-2 border rounded" placeholder="Containers (5 cada)" />

        <h2 className="text-xl font-semibold">Penalidades</h2>
        <input type="number" value={penalidades} onChange={e => setPenalidades(parseInt(e.target.value) || 0)} className="w-full p-2 border rounded" placeholder="Nº de discos" />

        <button onClick={calcular} className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold mt-4">Calcular</button>

        <div className="text-center text-2xl font-bold mt-4">
          Pontuação: {resultado}
        </div>
      </div>
    </div>
  );
}
