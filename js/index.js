function pegaValores() {
	var campoValorDistancia = document.getElementById("distancia");
	var campoValorLitros = document.getElementById("litros");

	var resposta = document.getElementById("respostaConsumoGasolina");

	var distancia = campoValorDistancia.value;
	var litros = campoValorLitros.value;

	calculaConsumo(distancia, litros, resposta);
}

function calculaConsumo(distancia, litros, resposta) {
	var consumoGasolina = distancia / litros;

	resposta.textContent = "O consumo da gasolina foi de " + consumoGasolina + " litros.";
}