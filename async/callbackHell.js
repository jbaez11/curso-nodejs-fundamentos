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

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla');
        callbackHablar();
    },1000);
}

function adios(nombre, callback){
    setTimeout(function (){
        console.log(` adios ${nombre}`);
        callback();
    }, 3000)
}

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        })  
    }else{
        adios(nombre, callback);
    }
    
}

//______________FUNCION PRINCIPAL______________________//
console.log('iniciando proceso...');
//___________BUENA PRACTICA______________//

hola('Jonathan', function(nombre){
  conversacion(nombre,3, function(){
      console.log('Terminando proceso')
  });
})










//___________MALA PRACTICA____________________//

// hola('Jonathan',function(nombre){

//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function(){
//                     console.log('Terminando proceso...');
//                 });
//             });   
           
//         });   
//     });
// });


