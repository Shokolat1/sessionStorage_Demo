let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let del = document.getElementById('delete')
let inp = document.getElementById('see')

let save = document.getElementById('save')
let load = document.getElementById('load')
let logout = document.getElementById('logout')
let username = document.querySelector('.name')
let userSession = document.getElementById('userSession')

const params = new URLSearchParams(window.location.search)
const cosas = params.get('cosas')
const nombreSesion = params.get('nombre')

window.addEventListener('load', () => {
    if (cosas) {
        loadConfig()
    }
    actualizaCosas()
})

c1.addEventListener('click', async () => {
    let chC1 = sessionStorage.getItem('c1')

    if (chC1) {
        sessionStorage.removeItem('c1')
    } else {
        sessionStorage.setItem('c1', true)
    }

    actualizaCosas()
})

c2.addEventListener('click', () => {
    let chC2 = sessionStorage.getItem('c2')

    if (chC2) {
        sessionStorage.removeItem('c2')
    } else {
        sessionStorage.setItem('c2', true)
    }

    actualizaCosas()
})

c3.addEventListener('click', () => {
    let chC3 = sessionStorage.getItem('c3')

    if (chC3) {
        sessionStorage.removeItem('c3')
    } else {
        sessionStorage.setItem('c3', true)
    }

    actualizaCosas()
})

c4.addEventListener('click', () => {
    let chC4 = sessionStorage.getItem('c4')

    if (chC4) {
        sessionStorage.removeItem('c4')
    } else {
        sessionStorage.setItem('c4', true)
    }

    actualizaCosas()
})

del.addEventListener('click', () => {
    sessionStorage.removeItem('c1')
    sessionStorage.removeItem('c2')
    sessionStorage.removeItem('c3')
    sessionStorage.removeItem('c4')
    actualizaCosas()
})

save.addEventListener('click', () => {
    let arr = []

    if (sessionStorage.getItem('c1')) {
        arr.push('c1')
    }
    if (sessionStorage.getItem('c2')) {
        arr.push('c2')
    }
    if (sessionStorage.getItem('c3')) {
        arr.push('c3')
    }
    if (sessionStorage.getItem('c4')) {
        arr.push('c4')
    }

    sessionStorage.clear()

    window.location.href = `/save?cosas=${arr.toLocaleString()}&name=${username.value}`;
})

load.addEventListener('click', () => {
    sessionStorage.clear()
    window.location.href = `/load?name=${username.value}`;
})

logout.addEventListener('click', () =>{
    sessionStorage.clear()
    actualizaCosas()
})

function loadConfig() {
    if (cosas.includes('c1')) {
        sessionStorage.setItem('c1', true)
    }
    if (cosas.includes('c2')) {
        sessionStorage.setItem('c2', true)
    }
    if (cosas.includes('c3')) {
        sessionStorage.setItem('c3', true)
    }
    if (cosas.includes('c4')) {
        sessionStorage.setItem('c4', true)
    }
    if (cosas.includes('no')) {
        sessionStorage.clear()
    }

    sessionStorage.setItem('nombre', nombreSesion)

    window.location.href = `/`;
}

function actualizaCosas() {
    let arr = []

    if (sessionStorage.getItem('c1')) {
        arr.push('Cosa 1')
    }
    if (sessionStorage.getItem('c2')) {
        arr.push('Cosa 2')
    }
    if (sessionStorage.getItem('c3')) {
        arr.push('Cosa 3')
    }
    if (sessionStorage.getItem('c4')) {
        arr.push('Cosa 4')
    }
    if (arr.length == 0) {
        arr = 'No hay elementos agregados'
    }

    if (!sessionStorage.getItem('nombre')) {
        inp.value = `(${sessionStorage.length}) ${arr.toLocaleString()}`
        userSession.value = ''
        return
    }

    inp.value = `(${sessionStorage.length - 1}) ${arr.toLocaleString()}`
    userSession.value = `Sesión iniciada por: ${sessionStorage.nombre}`
}