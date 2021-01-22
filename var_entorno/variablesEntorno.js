//require('.env')
//require('dotenv').config();
//console.log(process.env.NOMBRE)


//enviar por consola variable de entorno = $env:NOMBRE="Carlos"
let nombre = process.env.NOMBRE || 'sin nombre';

console.log('hola '+nombre);


