function pegaValores() {
	var campoValorDistancia = document.getElementById("distancia");
	var campoValorLitros = document.getElementById("litros");

	var resposta = document.getElementById("respostaConsumoGasolina");

	var distancia = campoValorDistancia.value;
	var litros = campoValorLitros.value;

	if (isNaN(distancia) || isNaN(litros)) {
		alert("Digite somente números nos campos!!");
	} else {
		if (distancia <= 0 || litros <= 0) {
			alert("Digite números válidos!!");
		} else {
			calculaConsumo(distancia, litros, resposta);
		}
	}
}

function calculaConsumo(distancia, litros, resposta) {
	var consumoGasolina = distancia / litros;
	var consumoGasolinaFormatada = consumoGasolina.toFixed(2);
	exibeConsumo(consumoGasolinaFormatada, resposta);
}

function exibeConsumo(consumoGasolinaFormatada, resposta) {
	resposta.textContent = "O consumo da gasolina foi de " + consumoGasolinaFormatada + " litros/km.";
}