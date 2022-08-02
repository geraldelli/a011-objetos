const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

console.log("Nome do primeiro ator: ",filme.elenco[0])

// b) Qual o código para imprimir o nome do **último** ator/atriz?

console.log("Nome do útimo ator: ",filme.elenco[3])

// c) Qual o código para exibir o array com **todas** as transmissões de hoje?

console.log("Transmissões de Hoje: ",filme.transmissoesHoje)

// d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?

console.log("Horario de Transmissão do filme no Canal Brasil: ",filme.transmissoesHoje[1].horario)