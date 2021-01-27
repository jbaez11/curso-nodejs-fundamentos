function asincrona(callback){
    setTimeout(function(){
        try {
            let a = 3+z;
            callback(null,a);
        }catch(e){
            callback(e);
        }
    },1000);
}

    asincrona(function(err,dato){
        if(err){
            console.error('Tenemos un error');
            //throw err; en funciones asincronas no funciona
            return false;
        }
    
        console.log('Todo ha ido bien');
    })
