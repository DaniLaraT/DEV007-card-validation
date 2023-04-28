const validator = {

  isValid: function validar(number){

    //convertir el number de input en un array
    const arrayNumber = number.toString().split('').map(number => parseInt(number));
    //console.log(arrayNumber);// [1,2,3,4,5,6,7,8,9]
    const inverso=arrayNumber.reverse();
    //console.log(inverso);// [9,8,7,6,5,4,3,2,1]
    //hacer que se multipliquen por 2 los numeros que estan en ubicacion par en array (1,3,7,.....)
    for (let i = 1; i < inverso.length; i+=2) {
      inverso[i] *= 2;
    }
    //console.log(inverso);//[9, 16, 7, 12, 5, 8, 3, 4, 1]
    // sumar numeros de array, separando los >10 (1+0=1)
    let suma = 0; //Esta variable sumara lo acumulado.
    
    //se crea un contador que ira uno por uno. 
    for (let i = 0; i < inverso.length; i++) {
      let valor = inverso[i]; //se crea la variable valor para considerar e nuevo array
      while (valor >= 10) {  //si estos valores son mayores o iguales a 10 se pasaran. 
        const digitos = valor.toString().split('').map(Number);
        valor = 0; //se da valor cero a la variable 
        for (let j = 0; j < digitos.length; j++) {  //se recuperan los datos separados para sumarlos. abajo.
          valor += digitos[j]; //se entrega todo a la variable valor.
        }
      }
      suma += valor; //se entrega todo lo recaudado a suma
    }
    //indicar si la tarjeta es valida o no
    if (suma % 10 === 0) {
      return true;
    } else { return false;
    }
  },
  maskify: function(number){

    const stringNumber= String(number); //pasamos number a string
    // si el string numer tiene menos de 4 digitos se deja el string number. 
    if (stringNumber.length<=4){return stringNumber;}
    //variable para #####
    let cover="";
    for (let i=0; i<stringNumber.length-4;i++)
    {cover+="#";}
    // aqui arriba creamos que el numero -4 tenga # en todos y abajo lo agregaremos con los ultimos 4 de stringNumber

    //concatenar los ## mas el numero -4 o solo el numero si tiene menos de 4 .... 
    return cover+stringNumber.slice(-4);
  }}
export default validator;
