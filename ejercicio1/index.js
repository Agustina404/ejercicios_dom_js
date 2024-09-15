const button = document.querySelector('.showme')
console.log(button)

const header = document.querySelector('#pillado')
console.log(header)

const paragraph = document.querySelectorAll('p')
parrafos.forEach((parrafo) => {
  console.log(parrafo)
})

const element = document.querySelectorAll('.pokemon')
console.log(element)

const functions = document.querySelectorAll('[data-function="testMe"]')
functions.forEach((element) => {
  console.log(element)
})

const personajes = document.querySelectorAll('[data-function="testMe"]')

if (personajes.length >= 3) {
  console.log(personajes[2])
} else {
  console.log(
    'No hay suficientes elementos con el atributo data-function="testMe"'
  )
}
