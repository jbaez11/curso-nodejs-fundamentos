const fs = require('fs');

function leer (ruta,cb){
    fs.readFile(ruta, (err, data)=>{
        //leido
        cb(data.toString())
    })
}
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err) {
        if(err){
            console.error('No se pudo escribir',err)
        }else{
            console.log('se escribio correctamente')
        }
        
    });
}

function borrar (ruta, cb){
    fs.unlink(ruta,cb);
}


//leer(__dirname + '/archivo.txt',console.log);

//escribir(__dirname + '/archivo1.txt', 'soy un archivo nuevo', console.log);
borrar(__dirname + '/archivo1.txt', console.log)
