function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            console.log(` hola ${nombre}`);
            resolve(nombre);
        }, 3000)
    });
   
}

function hablar(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('bla bla bla');
            //resolve(nombre);
            reject('hay un error')
        },1000);
    });
    
}

function adios(nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(function (){
            console.log(` adios ${nombre}`);
            resolve();
        }, 3000)
    });
    
}



//______________EJECUCION___________________//
console.log('Iniciado el proceso')
hola('Jonathan')
    .then(hablar)
    //  PRIMERA FORMA DE HACERLO
    // .then(nombre => {
    //     return adios(nombre);
    // })
    //SEGUNDA FORMA DE HACERLO
    .then(adios)
    .then((nombre)=> {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.log('hay un error ' + error)
    })