/* Variables y tipo de datos */
function typeOfNumber() {
    let numero = 12;
    console.log(numero, typeof numero);
  }
  
  function typeOfString() {
    let texto = "Hola";
    console.log(texto, typeof texto);
  }
  
  function typeOfBooleanTrue() {
    let verdadero = true;
    console.log(verdadero, typeof verdadero);
  }
  
  function typeOfBooleanFalse() {
    let falso = false;
    console.log(falso, typeof falso);
  }
  
  function typeOfNull() {
    let nulo = null;
    console.log(nulo, typeof nulo);
  }
  
  function typeOfUndefined() {
    let indefinido = undefined;
    console.log(indefinido, typeof indefinido);
  }
  
  function typeOfArray() {
    let arreglo = [1, "dos", true];
    console.log(arreglo, typeof arreglo);
  }
  
  /* Decisiones en javascript (if,if else, switch) */
  
  function mayorMenorIgual(num) {
    if (num > 10) {
      console.log("mayor");
    } else if (num < 10) {
      console.log("menor");
    } else {
      console.log("igual");
    }
  }
  
  function isPar(num) {
    if (num % 2 === 0) {
      console.log("par");
    } else {
      console.log("impar");
    }
  }
  
  function isVocal(letra) {
    const vocales = ["a", "e", "i", "o", "u"];
    if (vocales.includes(letra.toLowerCase())) {
      console.log("vocal");
    } else {
      console.log("consonante");
    }
  }
  
  function mayorMenorEdad(edad) {
    if (edad >= 18) {
      console.log("mayor de edad");
    } else {
      console.log("menor de edad");
    }
  }
  
  function diaDeLaSemana(num) {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    if (num >= 1 && num <= 7) {
      console.log(dias[num - 1]);
    } else {
      console.log("Número de día inválido");
    }
  }
  
  /* Funciones */
  
  function suma(num1, num2) {
    return num1 + num2;
  }
  
  function isParBolean(num) {
    return num % 2 === 0;
  }
  
  function sumaArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  
  function longitudMasLargo(array) {
    return Math.max(...array.map(str => str.length));
  }
  
  function objetToArray(objeto) {
    return Object.values(objeto);
  }
  
  function numeroMasGrande(array) {
    return Math.max(...array);
  }
  
  function ordenarArray(array) {
    return array.sort((a, b) => a - b);
  }
  
  function elementosComunes(array1, array2) {
    return array1.filter(value => array2.includes(value));
  }
  
  function stringsMayusculas(array) {
    return array.map(str => str.toUpperCase());
  }
  
  function sumaAcumulativa(array) {
    let sum = 0;
    return array.map(num => sum += num);
  }
  
  /* Bucles */
  
  function imprimirFor() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  
  function imprimirWhile() {
    let i = 1;
    while (i <= 5) {
      console.log(i);
      i++;
    }
  }
  
  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  
  function sumaAcumulada(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log(sum);
  }
  
  function sumaWhile(array) {
    let sum = 0;
    let i = 0;
    while (i < array.length) {
      sum += array[i];
      i++;
    }
    console.log(sum);
  }
  
  module.exports = {
    typeOfNumber,
    typeOfString,
    typeOfBooleanTrue,
    typeOfBooleanFalse,
    typeOfNull,
    typeOfUndefined,
    typeOfArray,
    mayorMenorIgual,
    isPar,
    isVocal,
    mayorMenorEdad,
    diaDeLaSemana,
    suma,
    isParBolean,
    sumaArray,
    longitudMasLargo,
    objetToArray,
    numeroMasGrande,
    ordenarArray,
    elementosComunes,
    stringsMayusculas,
    sumaAcumulativa,
    imprimirFor,
    imprimirWhile,
    imprimirArray,
    sumaAcumulada,
    sumaWhile,
  };
  