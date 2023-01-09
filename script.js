const frutas = ["laranja", "limão", "uva"];


const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]
console.log(fruta1.innerHTML)

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]
console.log(fruta2.innerHTML)

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]
console.log(fruta3.innerHTML)

const fruta4 = document.getElementById("fruta-4")

// const novaFruta = document.getElementById("novaFruta")
// console.log(novaFruta.innerHTML)

const adicionaFruta = () => {
    console.log("teste")
    const novaFruta = document.getElementById("novaFruta")
    console.log(novaFruta.value)
    fruta4.innerHTML = novaFruta.value

}