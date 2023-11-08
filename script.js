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

console.log("------------------------------------------------------")

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

//tipos primitivos: Boolean, Number, BigInt, String, Symbol

//boolean pode ser true ou false, ou seja, verdadeiro ou falso

console.log("------------------------------------------------------")

let isDataValid = true; 
let isStringTooLong = false; 
let isGameOver = false; 
continueLoop = true; 
console.log(false); // -> false 
console.log(typeof false); // -> boolean 
console.log(isDataValid); // -> true 
console.log(typeof isDataValid); // -> boolean

console.log("-------------------------------------------------------")

//number representa os tipos de valores inteiros e fracionarios, ou seja, nao precisa especificar int, float ou double
//este tipo permite operacoes como soma, adicao, subtracao e multiplicacao

//pode ser representado nas formas decimais, hexadecimal (0x…), octal (0o...) or binary (0b...) 
//ou exponencial onde ao inves de 9000, podemos escrever 9e3, e ao inves de 0.00123, pode escrever 123e-5

//alem disso, ha tres valores especiais para este tipo: Infinity e Nan(not a number)
//Nan retorna que uma operacao aritmetica nao pôde ser executada corretamente pq os valores nao sao do tipo number

const year = 1991; 
let delayInSeconds = 0.00016; 
let area = (16 * 3.14); 
let halfArea = area / 2; 
console.log(year); // -> 1991; 
console.log(typeof year); // -> number;

let a = 1 / 0; 
let b = -Infinity; 
console.log(a); // -> Infinity 
console.log(b); // -> -Infinity 
console.log(typeof a); // -> number 
console.log(typeof b); // -> number 
let s = "it's definitely not a number"; 
let numb = s * 10;
console.log(n); // -> NaN 
console.log(typeof n); // -> number

console.log("-------------------------------------------------------")

//BigInt serve para numeros inteiros muito extensos 
//o number também pode ser usado como inteiro, mas o BigInt pode lidar com numeros inteiros maiores
//no momento da divisao, por o BigInt ser um somente inteiro, o resultado acabara sendo um valor arredondado
//BigInt possuem o sufixo "n"
//nao pode realizar operacoes com BigInt e number, pois isso resultara em um erro como no exemplo comentado abaixo

//let big3 = 1000n + 20; // -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions


let big = 1234567890000000000000n; 
let big2 = 1n; 
console.log(big); // -> 1234567890000000000000n 
console.log(typeof big); // -> bigint 
console.log(big2); // -> 1n 
console.log(7n / 4n); // -> 1n

console.log("-------------------------------------------------------")

//String representa uma sequencia de caracteres que formam um pedaço de texto
//uma operacao comum em textos é a concatenaçao que junta dois textos separados com "+"
//Strings são imutaveis pois ao tentar alterar um valor estara criando outra String
//os textos podem ser atribuido com aspas simples ou duplas
//existem muitos metodos da classe String 

//a interpolação de String permite tratar uma sequência de caracteres como um template
//no qual se pode colocar valores em locais selecionados com o uso de aspas simples, $ e {}
//exatamente assim '${variavel}.'

let country = "Malawi";
let continent = 'Africa';
   
console.log(country); // -> Malawi
console.log(typeof country); // -> string
console.log(continent); // -> Africa
console.log(typeof continent); // -> string

let message1 = "The vessel 'Mars' called at the port.";
let message2 = 'Cyclone "Cilida" to pass close to Mauritius.';
   
console.log(message1); // -> The vessel 'Mars' called at the port.
console.log(message2); // -> Cyclone "Cilida" to pass close to Mauritius.

let test = "100" - "10";

console.log(test); // -> 90
console.log(typeof test); // -> number

//interpolação de String
let sentence = '${country} está localizado em ${continent}.'

console.log(sentence)

let river = "Mekong";
let character = river.charAt(2);//retorna letra do texto da variavel que chama o metodo passando a posicao desejada, sendo que comeca em 0, então a 1 letra estará na posição 0
let length = river.length;//retorna o tamanho da String
let str = river.slice(2,6)//retorna apenas as letras que estiverem dentro do intervalo informado
let data = "333.333.333";
let arr = ['javascript', 'c#', 'php'];//este tipo de dado é chamado array e permite armazenar muitos dados

console.log(character); // -> k
console.log(length);
console.log(str);
console.log(data.split('.'))//retorna um array onde é informado dentro de '' o que se deseja remover da variavel que chama o metodo "split"
console.log(arr)

