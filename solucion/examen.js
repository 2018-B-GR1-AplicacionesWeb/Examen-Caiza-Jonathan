var fs = require('fs');
var nombreArch = 'people.json';
//Leer Archivo data
function leerArchivo(nombreArchivo) {
    return new Promise(function (resolve, reject) {
        fs.readFile(nombreArchivo, 'utf-8', function (error, contenidoArchivoLeido) {
            if (error) {
                reject('\n\tError al leer');
            }
            else {
                resolve(contenidoArchivoLeido);
            }
        });
    });
}
//Obtener el data del archivo
function obtenerData() {
    return new Promise(function (resolve) {
        leerArchivo(nombreArch)
            .then(function (contenidoDelArchivo) {
            var respuesta = contenidoDelArchivo;
            resolve(respuesta);
        })
            .catch(function (resultadoError) {
            console.log('\n\t\tAlgo malo paso\n\n', resultadoError);
        });
    });
}
obtenerData().then(function (contenidoDelArchivo) {
    //## 1) Busque los tipos de "gender" en el arreglo `people.json`
    //utilizacion del map para la busqueda de gender
    console.log('\n\n1) Busque los tipos de "gender" en el arreglo `people.json`');
    var bbd = JSON.parse(contenidoDelArchivo);
    bbd.map(function (valor) {
        return valor.gender;
    }).forEach(function (valorNuevo) { return console.log(valorNuevo); });
});
// ## 2) Busque los tipos de "eye_color" en el arreglo `people.json`
obtenerData().then(function (contenidoDelArchivo) {
    //## 1) Busque los tipos de "gender" en el arreglo `people.json`
    //utilizacion del map para la busqueda de eye_color
    console.log('\n\n2) Busque los tipos de "eye_color" en el arreglo `people.json`');
    var bbd = JSON.parse(contenidoDelArchivo);
    bbd.map(function (valor) {
        return valor.eye_color;
    }).forEach(function (valorNuevo) { return console.log(valorNuevo); });
});
// ## 3) Busque los tipos de "skin_color" en el arreglo `people.json`
obtenerData().then(function (contenidoDelArchivo) {
    //## 1) Busque los tipos de "skin_color" en el arreglo `people.json`
    //utilizacion del map para la busqueda de skin_color
    console.log('\n\n3) Busque los tipos de "skin_color" en el arreglo `people.json`');
    var bbd = JSON.parse(contenidoDelArchivo);
    bbd.map(function (valor) {
        return valor.skin_color;
    }).forEach(function (valorNuevo) { return console.log(valorNuevo); });
});
// ## 4) Busque los tipos de "hair_color" en el arreglo `people.json`
obtenerData().then(function (contenidoDelArchivo) {
    //## 1) Busque los tipos de "gender" en el arreglo `people.json`
    //utilizacion del map para la busqueda de hair_color
    console.log('\n\n4) Busque los tipos de "hair_color" en el arreglo `people.json`');
    var bbd = JSON.parse(contenidoDelArchivo);
    bbd.map(function (valor) {
        return valor.hair_color;
    }).forEach(function (valorNuevo) { return console.log(valorNuevo); });
});
// ## 5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
//     EJ: Si hay gender `Male` y `Female`, existirian 2 arreglos, llenar esos arreglos con los caracteres que sean `Male` y `Female`
obtenerData().then(function (contenidoDelArchivo) {
    console.log('\n\n5) Clasifique y cree diferentes arreglos dependiendo del gender');
    var bbd = JSON.parse(contenidoDelArchivo);
    bbd.map(function (valor) {
        return valor.gender;
    }).forEach(function (valorNuevo) {
        //Se filtrara los cracteres del gender para gregarlos en el arreglo
        var resultadofilter = valorNuevo.forEach(function (caracterNombre) {
            return caracterNombre;
        });
        console.log(resultadofilter);
    });
});
// ## 6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario.
var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var arregloRes = [];
obtenerData().then(function (contenidoDelArchivo) {
    console.log('\n\n6) Rvisar si existe al menos un personaje con cada letra del abecedario.');
    var bbd = JSON.parse(contenidoDelArchivo);
    bbd.forEach(function (valorNuevo) {
        //Se filtrara los cracteres del gender para gregarlos en el arreglo
        var cont = 0;
        abecedario.forEach(function (value) {
            if (valorNuevo.name.substr(0, 1) === value) {
                arregloRes.push(value + ':' + true);
                cont = 1;
            }
            else if (cont === 0) {
                arregloRes.push(value + ':' + false);
            }
        });
    });
    console.log(arregloRes);
}).catch(function (resultadoError) {
    console.log('\n\tOcurrio un error al cargar el archivo\n\n');
});
// ## 7) Calcular la sumatoria de la propiedad "mass" y la propiedad "height".
//
//     EJ:
//
// ```typescript
// const respuesta = {
//     massTotal:1000,
//     heightTotal: 2000
// }
// ```
//
// ## 8)  Revisar si todos los personajes han usado vehicles.
obtenerData().then(function (contenidoDelArchivo) {
    console.log('\n\n8) Revisar si todos los personajes han usado vehicles.');
    var bbd = JSON.parse(contenidoDelArchivo);
    var todosPersnajesAuto = true;
    bbd.forEach(function (valorNuevo) {
        if (valorNuevo.vehicles !== undefined) {
            todosPersnajesAuto = false;
        }
    });
    if (todosPersnajesAuto) {
        console.log('Todos tiene auto');
    }
    else {
        console.log('No todos tiene auto');
    }
});
// ## 9) Revisar si todos los personajes han usado starships.
obtenerData().then(function (contenidoDelArchivo) {
    console.log('\n\n8) Revisar si todos los personajes han usado starships.');
    var bbd = JSON.parse(contenidoDelArchivo);
    var todosPersnajesAuto = true;
    bbd.forEach(function (valorNuevo) {
        if (valorNuevo.starships !== undefined) {
            todosPersnajesAuto = false;
        }
    });
    if (todosPersnajesAuto) {
        console.log('Todos tiene starships');
    }
    else {
        console.log('No todos tiene starships');
    }
});
// ## 10) Calcular en cuantos films han aparecido cada personaje:
//
//     Ej:
//
//         ```typescript
// const respuesta = [
//     ...,
//     {
//         nombre:"Cliegg Lars",
//         numeroPeliculas:5
//     },
//     ...
// ]
// ```
//
// ## 11) Realizar la operacion de crear nuevos `people` con la libreria `inquirer.js`
//
