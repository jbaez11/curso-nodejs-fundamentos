let suma = 0;
console.time('bucle');
for (let i=0; i<10000000; i++){
    suma +=1 ;
}

console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for (let i=0; i<1000000; i++){
    suma2 +=1 ;
}

console.timeEnd('bucle2');

console.time('asincrona');
asincrona()
            .then(() => {
                console.timeEnd('asincrona');
            })
//console.timeEnd('asincrona');


function asincrona(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('termino el proceso asincrono');
            resolve();
        })
    })
}