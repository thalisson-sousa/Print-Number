function cont() {
    let start = document.querySelector('#txts')
    let finish = document.querySelector('#txtf')
    let interval = document.querySelector('#txti')
    let result = document.querySelector('.result')

    if(start.value <= 0 || finish.value <= 0 || interval.value <= 0) {
        result.innerHTML = "Please write in all camps"
    } else {
        result.innerHTML = `Resultado: <br>`

        let s = Number(start.value)
        let f = Number(finish.value)
        let i = Number(interval.value)
        
        for(let c = s; c <= f; c += i){
            result.innerHTML += ` ${c}, `
        }

    }
}
