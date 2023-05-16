/*

----------------------------------- Null & Undefined -----------------------------------

Null & Undefined --> AS DUAS INFORMAÇÕES E A FALTA DE INFORMAÇÃO NO CODIGO ---> POREM UMA E  O NULL E DEFINIDA
                     JA A OUTRA UNDEFINED E UM ERRO DE FALTA DE INFORMAÇÃO NO CODIGO

1  --> STRING  ----> TEXTO
2  --> NUMBERS ----> NUMEROS
3  --> BOOLEAN ----> BOLEANO
4  --> OBJECT  ----> OBJETOS
5  --> NULL    ----> NADA
6  --> UNDEFINED --> ERRO ---> FALTA DE INFORMAÇÃO

---> NULL       ---> FALTA DE INFORMAÇÃO NO CODIGO DEFINIDA...
---> UNDEFINED  ---> FALTA DE INFORMAÇÃO NO CODIGO POR ERRO...

*/

const user = {
    nome: "Alex",
    idade: 39,
    nomeDoConjuge:null,
    id: null // definido como nulo no momento do codigo (vai ser definido depois...)
}

console.log(user) // ---> busca correta
console.log(user.abacate) // ---> busca de erro não tem a informação





