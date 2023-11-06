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
//g = "Hi";

//escopo, variaveis declaradas fora do escopo possuem acesso global no código, mas quando sao declaradas dentro
//estas são acessíveis apenas dentro deste escopo

let altura = 180;
{
    let peso = 70;
    console.log(altura); // -> 180
    console.log(peso); // -> 70
}
console.log(altura); // -> 180
//console.log(peso); // -> Uncaught ReferenceError: weight is not defined -> "peso" so pode ser acessada dentro do
                  //escopo ou das chaves

var n = 175;
{
    var n = 50;
    console.log(n); // -> 50
}
console.log(n); // -> 50

//no caso do tipo var, nao há problema com a declaracao dentro do escopo, pois mesmo dentro do escopo, ela acaba
//sendo acessada globalmente, já que var ignora os escopos, tratando-os como se nao existissem 
//para isso este tipo acaba sendo indicado para ser usado nas functions

//functions ou funções servem para realizar pequenas tarefas a fim de solucionar problemas específicos
//o nome da função vem logo após o termo function e pode conter parâmetro ou não, sendo passado no paranteses

let value = 3;

function testFunction(){
    let value = 18;
    console.log(value)//->embora haja uma variavel global acima da function com o mesmo nome desta, ele apresentara
                      //o valor da variavel local e isso nao resulta em erros, pois as variaveis globais e locais
                      //podem ter o mesmo name, além disso, poderia usar para variaveis do tipo var também
    console.log("Hello")
    console.log("World")
}
console.log(value);//aqui será apresentado o valor da variavel acessível, no caso, a variavel global com o valor
                  //18

testFunction();

var globalGreeting = "Good"

function greetingFunction(){
    var localGreeting = "Morning";
    console.log("function:");
    console.log(globalGreeting)
    console.log(localGreeting)

}

greetingFunction();//chamada da função

console.log("main program:");
console.log(globalGreeting);
//console.log(localGreeting);//-> Uncaught ReferenceError: localGreeting is not defined, a variavel do escopo
                            //local nao pode ser acessada fora deste escopo

                            
let rosePrice = 8;
let roseQty = 70;
let totalRosePrice = rosePrice * roseQty;

console.log("Rose - unit Price: " +rosePrice + ", quantity: " +roseQty + ", value: " +totalRosePrice);

let lilyPrice = 10;
let lilyQty = 50;
let totalLilyPrice = lilyPrice * lilyQty;

console.log("Lily - unit Price: " +lilyPrice + ", quantity: " +lilyQty + ", value: " +totalLilyPrice);


let tulipPrice = 2;
let tulipQty = 120;
let totalTulipPrice = tulipPrice * tulipQty;

console.log("Tulip - unit Price: " +tulipPrice + ", quantity: " +tulipQty + ", value: " +totalTulipPrice);

console.log("----------------------------------------------------------")

const priceOfRose = 8;
const qttyOfRose =  50;;
const totalRoseValue = priceOfRose * qttyOfRose;

console.log("Rose - unit Price: " +priceOfRose + ", quantity: " +qttyOfRose + ", value: " +totalRoseValue);

const priceOfLily = 8;
const qttyOfLily =  20;
const totalLilyValue = priceOfLily * qttyOfLily;

console.log("Lily - unit Price: " +priceOfLily + ", quantity: " +qttyOfLily + ", value: " +totalLilyValue);

const priceOfTulip = 8;
const qttyOfTulip =  50;
const totalTulipValue = priceOfTulip * qttyOfTulip;

console.log("Tulip - unit Price: " +priceOfTulip + ", quantity: " +qttyOfTulip + ", value: " +totalTulipValue);






