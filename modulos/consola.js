var table = [
    {
        a:1,
        b:'z'
    },
    {
        a:2,
        b:'otra'
    }
    
]

console.table(table)

console.group('Conversacion');
console.count('veces');
console.log('Hola');
console.log('bla bla');
console.count('veces');
console.log('adios');
console.count('veces');
console.groupEnd('Conversacion');
console.countReset('veces');

console.log('Otra cosa');

console.count('veces');
/*
console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.
*/