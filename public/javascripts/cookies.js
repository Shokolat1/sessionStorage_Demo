let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let del = document.getElementById('delete')
let inp = document.getElementById('see')

window.addEventListener('load', () => {
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
    sessionStorage.clear()
    actualizaCosas()
})

function actualizaCosas() {
    let arr = []

    if(sessionStorage.getItem('c1')){
        arr.push('Cosa 1')
    }
    if(sessionStorage.getItem('c2')){
        arr.push('Cosa 2')
    }
    if(sessionStorage.getItem('c3')){
        arr.push('Cosa 3')
    }
    if(sessionStorage.getItem('c4')){
        arr.push('Cosa 4')
    }
    if(arr.length == 0){
        arr = 'No hay elementos agregados'
    }

    inp.value = `(${sessionStorage.length}) ${arr.toLocaleString()}`
}