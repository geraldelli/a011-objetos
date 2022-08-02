// # Exercício 3

// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

const pokemon2 = {...pokemon1,
    nome: "Squirtle",
    tipo: "Àgua"    
}

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

const ataques = [{
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
    } ,
    {
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100
    },
    {
    nome: "Jato de Àgua",
    dano: 40,
    tipo: "Àgua",
    precisao: 100
    }]
pokemon1.ataques =[]
pokemon1.ataques.push(ataques[0])

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;

pokemon2.ataques =[]
pokemon2.ataques.push(ataques[0])

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
pokemon1.ataques.push(ataques[1])

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
pokemon2.ataques.push(ataques[2])

// f) Imprima os dois objetos no console.

console.log("Pokemon 1: ", pokemon1)
console.log("Pokemon 2: ", pokemon2)