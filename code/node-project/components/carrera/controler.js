const storage = require('./storage')

function addCarrera(nombre, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.add( carrera )
        resolve( carrera )
    })
}

function getCarreras(filtroCarrera) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get(iltroCarrera) )
    } )
}

function updateCarrera(nombre, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
            nombre: nombre,
            descripcion: descripcion,
        }
        storage.update( carrera )
        resolve( carrera )
    })
}

function deleteCarrera(nombre) {
    return new Promise((resolve, reject) => {
        storage.delete( nombre )
        resolve( nombre )
    })
}

module.exports = {
    addCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
}