function calcularJuros() {
  const capital = parseFloat(document.getElementById("capital").value);
  const taxa = parseFloat(document.getElementById("taxa").value) / 100;
  const tempo = parseInt(document.getElementById("tempo").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
    resultadoDiv.innerText = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  // Fórmula de Juros Compostos: M = C * (1 + i)^t
  const montante = capital * Math.pow((1 + taxa), tempo);
  const juros = montante - capital;

  resultadoDiv.innerHTML = `
    <p><strong>Valor Total:</strong> R$ ${montante.toFixed(2)}</p>
    <p><strong>Total em Juros:</strong> R$ ${juros.toFixed(2)}</p>
  `;
}
