let a = true;
let b = false;
let c = true;
let d = false;

console.log("Resultado de a b: " + (a && b)); //False
console.log(a && true); //true
console.log("Resultado de a c: " + (a && c)); //true
console.log("Resultado de b c: " + (b && c)); //false
console.log("Resultado de a d: " + (a && d)); //false
console.log("Resultado de b d: " + (b && d)); //false
console.log("Resultado de c d: " + (c && d)); //false


//Operador logica OU (||)
let e = true;
let f = false;
let g = false;
let h = true;

console.log("Resultado de e || f: " + (e || f)); //verdadeiro
console.log("Resultado de f || g: " + (f || g)); //falso
console.log("Resultado de g || h: " + (g || h)); //verdadeiro
console.log("Resultado de e || h: " + (e || h)); //Verdadeiro
console.log("Resultado de f || h: " + (f || h)); //Verdadeiro

//Operador Logico NOT (!)

let i = true;
let j = false;
let k = true;
let l = false;

console.log("Resultado de !i: " + !i); //falso
console.log("Resultado de !j: " + !j); //true
console.log("Resultado de !k: " + !k); //falso
console.log("Resultado de !l: " + !l); //true

//Operador Logico XOR (^)

let m = true;
let n = false;
let o = true;
let p = false;
console.log("Resultado de m ^ n: " + (m ^ n)); //verdadeiro

let ab = true;
let bc = false;

//Operador E (&&)
let eResultado = ab && bc;
console.log("Resultado de ab && bc: " + eResultado); //false

//Operador OU (||)
let ouResultado = ab || bc;
console.log("Resultado de ab || bc: " + ouResultado); //true

//Operador Não (!)
let naoResultado = !ab;
console.log("Resultado de !ab: " + naoResultado); //false

//Combinação de operadores lógicos
let combinados = (ab && bc) || (ab || bc);
console.log("Resultado de (ab && bc) || (ab || bc): " + combinados); //true

//Exemplos de operadores lógicos com valores numericos

let x = 10;
let y = 5;
let z = 0;

//Operador E (&&) com valores numericos
let eResultadoNumerico = (x > y) && (y > z);
console.log("Resultado de (x > y) && (y > z): " + eResultadoNumerico);
console.log("Resultado de (z < y) && (y < x): " + (z < y) && (x > z)); //true

// Operador OU (||) com valores númericos
let ResultadoOu = (x < y) || (y > z);
console.log("Resultado de (x < y) || (y > z): " + ResultadoOu); //true

//Operador Não (!) com valores númericos
let ResultadoNao = !(x < y);
console.log("Resultado de !(x < y): " + ResultadoNao); //true

//Combinação de operadores lógicos com valores númericos
let ResultadoC = ((x > y) && (y > z)) || ((x < y) && (z > y));
console.log("Resultado de ((x > y) && (y > z)) || ((x < y) && (z > y)): " + ResultadoC); //true

//