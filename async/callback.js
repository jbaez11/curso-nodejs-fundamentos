/*function soyAsincrona(callback){
    
    setTimeout(function (){
        console.log('estoy siendo asincrona');
        callback();
    }, 3000)
}
console.log('iniciando proceso...');
soyAsincrona(function(){
    console.log('Terminando proceso...');
});*/

function hola(nombre,callback){
    setTimeout(function (){
        console.log(` hola ${nombre}`);
        callback(nombre);
    }, 3000)
}

function adios(nombre, callback){
    setTimeout(function (){
        console.log(` adios ${nombre}`);
        callback();
    }, 3000)
}

console.log('iniciando proceso...');
hola('Jonathan',function(nombre){
    adios(nombre, function(){
        console.log('Terminando proceso...');
    })
   
});
