let buttonSubmit= document.querySelector('#button-submit')
buttonSubmit.addEventListener('click', nuevaPantalla)
let firstComponent = document.querySelector('#first-component')
let secondComponent = document.querySelector('#second-component')
secondComponent.style.display = 'none'

function nuevaPantalla(){
    firstComponent.style.display = 'none'
    secondComponent.style.display = 'flex'
}