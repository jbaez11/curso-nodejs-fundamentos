console.log('Hola mundo');

let i=0;
setInterval(function(){
    console.log(i);
    i++;
    //forzar un error , en monohilo es peligroso porque un error 
    //pausa toda la ejecucion sino se tiene algo para validar errores
    if(i === 5){
        var a = 3+z;
    }
}, 1000)

console.log('segunda instruccion');