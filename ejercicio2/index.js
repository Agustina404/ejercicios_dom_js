const box = document.createElement('div')
document.body.appendChild(box)
console.log(box)

const box2 = document.createElement('div')
const paragraph = document.createElement('p')
paragraph.textContent = 'Nuevo div con p dentro'
box2.appendChild(paragraph)
document.body.appendChild(box2)
console.log(box2)

const box3 = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const paragraph2 = document.createElement('p')
  paragraph2.textContent = 'Nuevo P con loop'
  box3.appendChild(paragraph2)
}
document.body.appendChild(box3)
console.log(box3)

const dynamicP = document.createElement('p')
dynamicP.textContent = 'Soy dinamico!'
document.body.appendChild(dynamicP)
console.log(dynamicP)

const modifiedH2 = document.querySelector('h2.fn-insert-here')
if (modifiedH2) {
  modifiedH2.textContent = 'Wubba Lubba dub dub'
} else {
  console.error('error')
}
console.log(modifiedH2)

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const newUl = document.createElement('ul')
apps.forEach((app) => {
  const newLi = document.createElement('li')
  newLi.textContent = app
  newUl.appendChild(newLi)
})
document.body.appendChild(newUl)
console.log(newUl)

const removeElements = document.querySelectorAll('.fn-remove-me')
removeElements.forEach((element) => {
  element.remove()
})
console.log(removeElements)

const newDivs = document.querySelectorAll('div')
if (newDivs.length >= 2) {
  const firstDiv = newDivs[0]
  const secondDiv = newDivs[1]
  const newP = document.createElement('p')
  newP.textContent = 'Voy en medio'
  firstDiv.parentNode.insertBefore(newP, secondDiv)
}
console.log(newDivs)

const insertInDivs = document.querySelectorAll('div.fn-insert-here')
insertInDivs.forEach((div) => {
  const newParagraph = document.createElement('p')
  newParagraph.textContent = 'Voy dentro!'
  div.appendChild(newParagraph)
})
console.log(insertInDivs)
