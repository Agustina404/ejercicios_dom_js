const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const newUl = document.createElement('ul')
countries.forEach((country) => {
  const newLi = document.createElement('li')
  newLi.textContent = country
  newUl.appendChild(newLi)
})
document.body.appendChild(newUl)
console.log(newUl)

const removeEl = document.querySelectorAll('.fn-remove-me')
removeEl.forEach((element) => {
  element.remove()
})
console.log(removeEl)

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const targetDiv = document.querySelector('div[data-function="printHere"]')
const ul2 = document.createElement('ul')
cars.forEach((car) => {
  const li1 = document.createElement('li')
  li1.textContent = car
  ul2.appendChild(li1)
})
targetDiv.appendChild(ul2)
console.log(ul2)

const countries8 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

const container = document.body
countries8.forEach((country) => {
  const div4 = document.createElement('div')
  const newH4 = document.createElement('h4')
  newH4.textContent = country.title
  const newImg2 = document.createElement('img')
  newImg2.src = country.imgUrl
  newImg2.alt = country.title
  div4.appendChild(newH4)
  div4.appendChild(newImg2)
  container.appendChild(div4)
})
console.log(container)

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed')
  const removeButton = document.getElementById('remove-last-div')
  if (removeButton) {
    console.log('Remove button found')
    removeButton.addEventListener('click', () => {
      console.log('Button clicked')
      const items = document.querySelectorAll('.item')
      if (items.length > 0) {
        const lastItem = items[items.length - 1]
        lastItem.remove()
        console.log('Last item removed')
      }
    })
  } else {
    console.log('Remove button not found')
  }
})
