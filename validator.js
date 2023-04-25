const validator = {

  isValid: function validar(number){

    //convertir el number de input en un array
    const arrayNumber = number.toString().split('').map(number => parseInt(number));
    //console.log(arrayNumber);// [1,2,3,4,5,6,7,8,9]
    const inverso=arrayNumber.reverse();
    //console.log(inverso);// [9,8,7,6,5,4,3,2,1]
    //hacer que se multipliquen por 2 los numeros que estan en ubicacion par en array (1,3,7,.....)
    for (let i = 0; i < inverso.length; i++) {
      if (i % 2 !== 0) {
        inverso[i] *= 2;
      }
    }
    //console.log(inverso);//[9, 16, 7, 12, 5, 8, 3, 4, 1]
    // sumar numeros de array, separando los >10 (1+0=1)
    let suma = 0;
    for (let i = 0; i < inverso.length; i++) {
      let valor = inverso[i];
      while (valor >= 10) {
        const digitos = valor.toString().split('').map(Number);
        valor = 0;
        for (let j = 0; j < digitos.length; j++) {
          valor += digitos[j];
        }
      }
      suma += valor;
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
