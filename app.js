const board = document.querySelector('#board')
const colors = ['#a84632','#eb9e1a','#e7eb1a','#51eb1a','#1addeb','#1a2beb','#9e1aeb','#f7f2fa','#21fce3','#0c0d0d','#fa021f','#eefa02','#2cfa02']
const squaresNumber = 400

for (let i = 0; i < squaresNumber; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() =>
    setColor(square))  

    square.addEventListener('mouseleave',() =>
    removeColor(square))  

    board.append(square)
    }

 function setColor(element){
     const color = getRandomColor()
     element.style.backgroundColor = color
     element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
 }

 function removeColor(element){
     element.style.backgroundColor = '#1d1d1d'
     element.style.boxShadow = `0 0 2px #000`
 }

 function getRandomColor(){
     const index = Math.floor(Math.random() * colors.length)
     return colors[index]
 }