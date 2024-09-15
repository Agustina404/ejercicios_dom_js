document.addEventListener('DOMContentLoaded', () => {
  const btnToClick = document.getElementById('btnToClick')
  if (btnToClick) {
    btnToClick.addEventListener('click', (event) => {
      console.log('button clicked!')
      console.log('event object: ', event)
    })
  } else {
    console.log('button not found')
  }
})
console.log(btnToClick)

document.addEventListener('DOMContentLoaded', () => {
  const focusInput = document.querySelector('.focus')
  if (focusInput) {
    focusInput.addEventListener('focus', (event) => {
      console.log('Input focused!')
      console.log('Input value: ', event.target.value)
    })
  } else {
    console.log('Input with class .focus not found')
  }
})

const valueInput = document.querySelector('.value')
if (valueInput) {
  valueInput.addEventListener('input', (event) => {
    console.log('Input value changed!')
    console.log('Current input value: ', event.target.value)
  })
} else {
  console.log('Input with class .value not found')
}

document.addEventListener('DOMContentLoaded', () => {
  const albums = [
    'De Mysteriis Dom Sathanas',
    'Reign of Blood',
    'Ride the Lightning',
    'Painkiller',
    'Iron Fist'
  ]
  const ul3 = document.createElement('ul')
  albums.forEach((album) => {
    const li = document.createElement('li')
    li.textContent = album
    ul3.appendChild(li)
  })
  document.body.appendChild(ul3)
  console.log('Album list: ', ul3)
})
