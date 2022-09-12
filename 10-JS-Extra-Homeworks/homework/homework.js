// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let clave=Object.keys(objeto)
  let valor=Object.values(objeto)
  let newarray=[];
 

  for (var i = 0; i < clave.length; i++) {
  newarray[i]=(clave[i]+"."+valor[i]).split(".")
  }
  for (var i = 0; i < newarray.length; i++) {
 
  newarray[i][1]=Number(newarray[i][1])


  }


  return newarray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj={};
  let abc="abcdefghjiklmnñopqrstuvwxyz"
  let contador=0;
  
  //recorre el abecedario
  for (var i = 0; i < abc.length; i++) {
  //se pregunta si existe letra en abecedario
    if(string.includes(abc[i])){
      contador=0;
  //recorre las letras de string y cuenta las repetidas usando acumulador
  //si no hay coincidencia saltea la letra seleccionada y pasa a otra.
  for (var e = 0; e < string.length; e++) {
 
      if(string[e]===abc[i]){
        contador++;
      }
    }

    }else{
      continue;
    }
  //carga los resultados/propiedades en el objeto donde clave=coincidencia y
  //valor=nº de repeticiones
    obj[abc[i]]=contador;  
  }
//devuelve el objeto
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let strings=Array.from(s);
  let mayus=[];
  let minus=[];  

   for (var i = 0; i < strings.length; i++) {
      if (strings[i]===strings[i].toUpperCase()){
      mayus.push(strings[i]);
     
      }else{
      minus.push(strings[i])
      }
     
   }
   return mayus.join("")+minus.join("")
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str=str.split("").reverse().join("").split(" ").reverse().join(" ");

  return str;


} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let compare=numero+"";
  let reverso=Array.from(numero+"").reverse().join("");

  if(compare===reverso){
  return "Es capicua";
  }else{
 
  return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let target="abc";
  let eliminadas="";
 	


  for (let i = 0; i < cadena.length; i++) {
 
  if (target.includes(cadena[i])==false){

  eliminadas=eliminadas+cadena[i];

 
  }
  }
  return eliminadas;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
   
  arr.sort(function(a, b) {
    return a.length - b.length;
  });
      return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let intersec=[];
 

  for (var i = 0; i < arreglo1.length; i++) {
  if(arreglo2.includes(arreglo1[i]) && intersec.includes(arreglo1[i])===false){
  intersec.push(arreglo1[i]);
 
  }
  }
  return intersec;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

