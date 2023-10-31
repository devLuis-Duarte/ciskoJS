//variaveis
//var ou let sao variaveis e podem ter seus valores alterados, var pode ter mais de uma variavel com mesmo nome
// enquanto let nao possui esse problema, por isso let acaba sendo mais recomendado para ser usado em vez de var
//variaveis do tipo const possuem valores constantes, por isso deixam de ser variaveis

let height;

console.log(height)

//inicializacao de variaveis, é atribuido um valor a ela(s)

let h = 180;
let anotherheight = h;
let weight;

console.log(h)
console.log(anotherheight)
weight = 70
console.log(weight)

//Alterando valor de variaveis
let steps = 100;
console.log(steps)
steps = 120;
console.log(steps)
steps = steps+200;
console.log(steps)

let greeting = "Hello World";
let counter = 100;

console.log(greeting)
greeting = 1;
console.log(greeting)

greeting = "Hello World"
greeting = greeting + counter;
console.log(greeting) 

//tipos de variaveis com valores constantes, ou seja, tipo const

const g = "Hello";
g = "Hi";

//escopo, variaveis declaradas fora do escopo possuem acesso global no código, mas quando sao declaradas dentro
//estas são acessíveis apenas dentro deste escopo

let altura = 180;
{
    let peso = 70;
    console.log(altura); // -> 180
    console.log(peso); // -> 70
}
console.log(altura); // -> 180
console.log(peso); // -> Uncaught ReferenceError: weight is not defined -> "peso" so pode ser acessada dentro do
                  //escopo ou das chaves

var n = 180;
{
    var n = 70;
    console.log(n); // -> 180
    console.log(t); // -> 70
}
console.log(n); // -> 180
console.log(t); // -> 70

//no caso do tipo var, nao há problema com a declaracao dentro do escopo, pois mesmo dentro do escopo, ela acaba
//sendo acessadas globalmente, já que var ignora os escopos, tratando-os como se nao existissem 
//para isso este tipo acaba sendo indicado para ser usado nas functions