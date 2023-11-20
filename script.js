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
//no qual se pode colocar valores em locais selecionados com o uso de crase, $ e {}
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

console.log("-------------------------------------------------------")

//O tipo undefined retorna esse valor para váriaveis com valores não atribuídos

let declaredVar;
console.log(typeof declaredVar); // -> undefined
   
declaredVar = 5;
console.log(typeof declaredVar); // -> number
   
declaredVar = undefined;
console.log(typeof declaredVar); // -> undefined
   
console.log(typeof notDeclaredVar); // -> undefined
//console.log(notDeclaredVar); // -> Uncaught ReferenceError: notDeclared is not defined

console.log("-------------------------------------------------------")

//O tipo null retorna esse valor para váriaveis com valores null, ou seja, nulo podem ser interpretados como object

let someResource;
console.log(someResource); // -> undefined
console.log(typeof someResource); // -> undefined
   
someResource = null;
console.log(someResource); // -> null
console.log(typeof someResource); // -> object

console.log("-------------------------------------------------------")

//a function String vai por padrão criar e retornar uma string vazia - primitiva ""
//a function Number vai por padrão criar e retornar o valor 0
//a function Boolean vai por padrão criar e retornar o valor false
//a function BigInt precisa de um valor inicial para ser passado que é um valor inteiro


const stri = String();
const num = Number();
const bool = Boolean();
   
console.log(str); // ->
console.log(num); // -> 0
console.log(bool); // -> false
   
const big1 = BigInt(42);
console.log(big1); // -> 42n

//conversão de number para string
let nr = 42;
let numberToString = String(nr);
console.log(`tipo: ${typeof nr}, valor: ${nr}.`)

//conversão de boolean para string
let bl = true;
let booleanToString = String(bl);
console.log(`tipo: ${typeof booleanToString}, valor:${bl}`)

//conversão de bigInt para string
let bnr = 123n;
let bigIntToString  = String(bnr);
console.log(`tipo: ${typeof bigIntToString}, valor: ${bnr}`)

//conversão de undefined para string
let un = undefined;
let undefinedToString = String(un);
console.log(`tipo: ${typeof undefinedToString}, valor: ${un}`)

//conversão de null para string
let nll = null;
let nullToString = String(nll);
console.log(`tipo: ${typeof nullToString}, valor: ${nll}`)

console.log("-------------------------------------------------------")

//conversão de string para number, a partir do 3 exemplo, os números estão em notação científica 
console.log(Number("11")); // -> 11
console.log(Number("0x11")); // -> 17
console.log(Number("0o11")); // -> 9
console.log(Number("0b11")); // -> 3
console.log(Number("12e3")); // -> 12000

//conversão de Infinity e Nan(not a number) para number
console.log(Number("Infinity"));// -> Infinity
console.log(Number("text")); // -> NaN, incapaz de converter esta string para number

//conversão de bigInt para number
console.log(Number(14n)); // -> 14
console.log(Number(123456789123456789123n)); // - > 123456789123
456800000

//conversão de boolean para number, onde true retorna 1 e false 0
console.log(Number(true))//->1
console.log(Number(false))//->0

//conversão de undefined(indefinido) para number, onde o retorno para este é que não é um número, pois não é possível convertê-lo para um
console.log(Number(undefined));//-> Nan(not a number)

//conversão de null para number que retorna 0
console.log(Number(null));//-> 0

console.log("-------------------------------------------------------")

//conversão de number para boolean
console.log(Boolean(42)); //para variavéis com valores atribuídos, sempre o retorno será true
console.log(Boolean(0)) //para variáveis com valores nulos ou não atribuídos, sempre o retorno será false
console.log(Boolean(NaN)); // -> retorna false pelo valor passado não ser um número

//conversão de string para boolean
console.log(Boolean("text")); // -> true por ter um texto atribuído
console.log(Boolean("")); // -> false por não ter nada atribuído
   
//conversão de undefined para boolean
console.log(Boolean(undefined)); // -> false por o valor não ter um valor definido
   
//conversão de null para boolean
console.log(Boolean(null)); // -> false por ser um valor nulo

console.log("-------------------------------------------------------")

//conversão de number, alguns em notação científica, para bigInt
console.log(BigInt(11)); // -> 11n
console.log(BigInt(0x11)); // -> 17n
console.log(BigInt(11e2)); // -> 1100n

//conversão de boolean para bigInt
console.log(BigInt(true)); // -> 1n
   
//conversão de string para bigInt
console.log(BigInt("11")); // -> 11n
console.log(BigInt("0x11")); // -> 17n
   
//a conversão de null para bigInt resultará em erro, pois esse valor não é possível converter 
//console.log(BigInt(null)); // -> Uncaught TypeError: Cannot convert null to a BigInt
   
//a conversão de undefined para bigInt resultará em erro, pois esse valor não é possível converter 
//console.log(BigInt(undefined)); // -> Uncaught TypeError: Cannot convert undefined to a BigInt

//a conversão de null para bigInt resultará em erro, pois esse valor não é um valor inteiro
//console.log(BigInt(NaN)); // -> Uncaught RangeError: The number NaN cannot be converted to a BigInt because it is not an integer

console.log("-------------------------------------------------------")

//conversão implícita
const str1 = 42 + "1";// o "+" concatena os valores por isso retornará 421
console.log(str1); // -> 421
console.log(typeof str1); // -> string
   
const str2 = 42 - "1"; // já aqui ocorrerá de fato a operação de subtração, pois o "-" é entendido como subtração
console.log(str2); // -> 41
console.log(typeof str2); // -> number

console.log("-------------------------------------------------------")


let v1 = true;
let v1f = Boolean(true);
let v2 = 34;
let v2f = Number(32);
let v3 = 111112222222222223333335555555n;
let v3f = BigInt(1111122222222222233333355555333n);
let v4 = "Olá";
let v4f = String("Hello");
let v5 = undefined;

console.log(`tipo: ${typeof v1}, valor: ${v1}`);
console.log(`tipo: ${typeof v1f}, valor: ${v1f}`);
console.log(`tipo: ${typeof v2}, valor: ${v2}`);
console.log(`tipo: ${typeof v2f}, valor: ${v2f}`);
console.log(`tipo: ${typeof v3}, valor: ${v3}`);
console.log(`tipo: ${typeof v3f}, valor: ${v3f}`);
console.log(`tipo: ${typeof v4}, valor: ${v4}`);
console.log(`tipo: ${typeof v4f}, valor: ${v4f}`);
console.log(`tipo: ${typeof v5}, valor: ${v5}`);

let st = "1234";
let nu = Number(st);
let bg = BigInt(nu);
let bol = Boolean(bg);

console.log(`${typeof st}, valor: ${st}`);
console.log(`${typeof nu}, valor: ${st}`);
console.log(`${typeof bg}, valor: ${nu}`);
console.log(`${typeof bol}, valor: ${bg}`);

conststr1 = 42 + + "1";
conststr2 = 44 - "1";
console.log(conststr1);
console.log(conststr2);

//os objects no javascript apresentam os "{}" e dentro delas são definidos os atributos deste objeto e seus valores como no exemplo abaixo
//let obj = {};
//console.log(typeof obj)

let testObj = {
    nr: 600,
    str: "text"
};

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
console.log(testObj.nr);//uma maneira de acessar um atributo de um objeto
console.log(testObj.str);
console.log(user1.name);
console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67

console.log(user1.email); // CalvinMHart@teleworm.us
delete user1.email;//comando que deleta o atributo do objeto
console.log(user1.email); // -> undefined

//os arrays armazenam uma coleção de valores, mas não possuem nomes associados a eles como no caso dos objetos, onde é definido um atributo e passado seu valor
//podemos acessar os elementos do array pelas "[]" onde dentro dele é indicado a posição do array que corresponde a um elemento, iniciando em 0
//há posições nos arrays que podem ser vazias por não terem valores atribuídos 
//arrays podem ter vários tipos dentro dos colchetes, além disso, também podem ter um array dentro de outro array
//eles são interpretados como object

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = "Sun";
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri
console.log(typeof days); // -> object
console.log(typeof day); // -> string
console.log(days instanceof Array); // -> true, pois a variável "days" é uma instância de um array
console.log(day instanceof Array); // -> false, pois a variável "day" não é uma instância de um array
//metodos do array
let ppl = ["Alex", "Alvin", "Alice"];
console.log(ppl);
console.log(ppl.length);//-> length retorna o tamanho do array, ou seja, quantos elementos tem o array
console.log(ppl.push("Alfred")); //-> Adiciona um novo elemento ao final do array
console.log(ppl);
console.log(ppl.length);
console.log(ppl.unshift("Agatha"));
console.log(ppl);
console.log(ppl.length);
console.log(ppl.pop()); //-> remove o último elemento do array
console.log(ppl);
console.log(ppl.length);
console.log(ppl.shift()); //-> remove o primeiro elemento do array
console.log(ppl);
console.log(ppl.length);
console.log(ppl.indexOf("Alvin")); //-> 1 que é a posição do elemento onde está "Mon" no array 
ppl.reverse(); //-> reverte a ordem dos elementos do array
console.log(ppl)
let newPpl = ppl.slice(-1); // -> cria uma cópia do array sem afetar o original e no parâmetro é passado o intervalo a ser removido
                        // o índice final não é excluído, ele apenas passa até ele, números negativos no começo do índice acessam o último elemento do array
console.log(newPpl);
let otherPpl = ["Barbara", "Bily", "Breno"];
let allPpl = ppl.concat(otherPpl);
console.log(allPpl);

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

let animals = [];
console.log(animals[0]); // -> undefined
animals[0] = "dog";
animals[2] = "cat";
console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined, ou seja, indefinido, pois não tem um elemento nesta posição com um valor atribuído
console.log(animals[2]); // -> cat

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"], a posição 0 são os nomes dentro dos primeiros colchetes
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James, a posição 1 são os nomes dos últimos colchetes

let users =[
    {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
    },
    {
    name: "Mateus",
    surname: "Silva",
    age: 21,
    email: "MateusSilva@dayrep.com"
    }
];// -> objeto dentro do array, com a criação de dois objetos dentro do array

console.log(users[1].name); // -> Matheus
console.log(users[1].age); // -> 21

let ticket = {
    stStation: "London",
    endStation: "Manchester",
    price: "$200.00",
};
console.log(`Starting Station:${ticket.stStation}, End Station:${ticket.endStation}, Price:${ticket.price}`)

let person = {

};

person.name = "Lukas",
person.surname = "Bittencourt"

console.log(`${person.name}, ${person.surname}`);

let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460,
    },
    
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        pages: 254,
    },

    {
        title: "Understanding ECMAScript",
        author: "Nicholas C",
        pages: 352
    }
]

let book = { // -> instanciando objeto para adicionar um novo livro
    title: "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 254
};

books.push(book); // -> adicionando o novo livro ao array

console.log(`${books.length}`);
console.log(`${books[0].title}, ${books[0].author}, ${books[0].pages}`);
console.log(`${books[1].title}, ${books[1].author}, ${books[1].pages}`);
console.log(`${books[2].title}, ${books[2].author}, ${books[2].pages}`);
console.log(`${books[3].title}, ${books[3].author}, ${books[3].pages}`);

let newArray = books.slice(2);
console.log(newArray);

let remove1st = books.shift();
//console.log(books)
console.log(`${books.length}`);
console.log(`${books[0].title}, ${books[0].author}, ${books[0].pages}`);
console.log(`${books[1].title}, ${books[1].author}, ${books[1].pages}`);
console.log(`${books[2].title}, ${books[2].author}, ${books[2].pages}`);

let sumPages = books[0].pages + books[1].pages + books[2].pages;
console.log(sumPages);

let contacts = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },

    {
      name: "Raja Villarreal",
      phone: "0866 398 2895",
      email: "posuere.vulputate@sed.com"
    },

    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu",
    },

    {
        name: prompt("Name?"),
        phone: prompt("phone?"),
        email: prompt("e-mail?")
    },

]



let newContact = {
     name: "Maisie Hayley", 
     phone: "0913 531 3030",
     email: "risus.Quisque@urna.ca"
    };

contacts.push(newContact);
console.log(`name:${contacts[0].name}, phone:${contacts[0].phone}, email:${contacts[0].email}`);
console.log(`name:${contacts[3].name}, phone:${contacts[3].phone}, email:${contacts[3].email}`);
console.log(contacts.length - 1);


"use strict";
   
const prefix = "username_";
   
let userName = "Jack";
//const userName = "Adam";
   
let prefixedUserName;
//const prefixedUserName;
   
userName = "John";
prefixedUserName = prefix + userName;
   
console.log(prefixedUserName /*+ prefixedUserName2*/);
//console.log(prefixedUserName2);

console.log(2 * 3 + 1);      // expected 7
console.log(2 ** 4);       // expected 16
console.log(5 * 1);       // expected 5
console.log(8 ** 2  - 5 ** 2); // expected 39

console.log(4 * 5 === 20); //"===" verifica se é do mesmo tipo e retorna true, caso contrário é false
console.log(6 * 5 == "30");
console.log(-17 != 0);
console.log(25 != 1);
console.log(2 + 2 * 2 != 4);

console.log(true || false);
console.log(false || !false);
console.log(false || false || true);
console.log(true || false || false && true);

//interagindo com o usuário
//caixas de diálogo: alert, confirm e prompt

//alert
// gera uma janela e passa nele apenas 1 parâmetro, podendo ser um number ou string 
//a janela ficará na tela até que o usuário marque a opção "OK"
//pode ser usado através do comando "window.alert" também

alert("Hello, World!")
window.alert(5 * 3)

//confirm
//gera uma janela e passa nele apenas 1 parâmetro, podendo ser um number ou string
//diferente do "alert", a janela do confirm têm as opções de "confirmar" ou "cancelar"
//dependendo da opção escolhida, o metódo retorna true quando for "Ok" ou false para "cancelar"
//é mais indicado a ser usado para ações condicionais do usuário em um sistema ou programa

let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled" //caso a opção escolhida seja "Ok" ele apresentará "Deleting Data", caso contrário "Cancelled"
console.log(message);

//prompt dialog box
//gera uma janela e passa nele apenas 1 parâmetro, podendo ser um number ou string
//é parecido com o confirm, mas diferente dele, a janela do promp pode ter mais de um parâmetro e o usuário pode inserir os valores na caixa de texto
//caso o usuário passe o segundo parâmetro, a caixa de texto já será preenchida com esse valor

let he = prompt("What is the box's height?");

let wi = prompt("What is the box's width?");

let le = prompt("What is the box's lenght?");

//conversão dos valores inseridos para Number, caso o valor não seja um numer, ele apresentará como Nan ou "not a number"
let heNumber = Number(he);
let wiNumber = Number(wi);
let leNumber = Number(le);
let vol = heNumber * wiNumber * wiNumber;
alert(vol);
