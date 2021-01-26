//const process = require('process');

process.on('beforeExit', () => {
    console.log('Ale, el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabo');
    //todo lo que se ejecute en el exit debe ser sincrono sino no se va a ejecutar
    setTimeout(() => {
        console.log('este mensaje es invisible');
    }, 500);
})

setTimeout(() => {
    console.log('este mensaje es totalmente visible');
}, 500);


process.on('uncaughtException', (err,origen) => {
    console.error('valla se olvido acpturar el error');
    console.error(err);
});

//funcionquenoexiste();

console.log('Esto sigue funcionando')
//process.on('uncaughtRejection');