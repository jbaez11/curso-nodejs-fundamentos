async function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function (){
            console.log(` hola ${nombre}`);
            resolve(nombre);
        }, 3000)
    });
   
}

async function hablar(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('bla bla bla');
            resolve(nombre);
            //reject('hay un error')
        },1000);
    });
    
}

async function adios(nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(function (){
            console.log(` adios ${nombre}`);
            resolve();
        }, 3000)
    });
    
}

async function main(){
    let nombre = await hola('Jonathan');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
}
console.log('Empezamos el proceso');
main();
console.log('Termina el proceso')
