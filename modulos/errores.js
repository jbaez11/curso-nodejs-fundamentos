function otraFuncion(){
    return seRompe();
}

function seRompe(){
    return 3+z;
}
function seRompeAsincrona(cb){
    setTimeout(function(){
        try{
            return 3+z;
        }catch(err){
            console.error('Error en funcion asincrona')
            cb(err)
        }
        
    },2000)
}

try{
    seRompeAsincrona(function(){
        console.log('')
    });
}catch(err){
    console.log('Valla algo se daño');
    console.log(err.message);
}

console.log('esto esta al final ');