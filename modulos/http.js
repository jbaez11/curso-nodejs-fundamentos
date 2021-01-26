const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('nueva peticion');
    console.log(req.url);

    switch(req.url){
        case  '/hola' : res.write('Hola quetal');
                        res.end();
                        break;
        default       : res.write('Error 404');
                        res.end();


    }
    // res.writeHead(201,{'Content-Type' : 'text/plain'})
    // //escribir respuesta al usuario
    // res.write('hola, ya se usar http');

    // res.end();
}

console.log('Escuchando http en el puerto 3000');