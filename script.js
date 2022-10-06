const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const li = document.createElement('div');
  li.classList.add('grid');
  li.classList.add('whiteOne');
  li.setAttribute('id', `square-${i+1}`);
  container.appendChild(li);
}

const squares = document.querySelectorAll('.grid');

squares.forEach((div) => {
  div.addEventListener('mouseover', toggleColor)
})

function toggleColor() {
  let squareColor = this.classList;
  console.log(squareColor);
  if (squareColor.contains('whiteOne')) {
    squareColor.remove('whiteOne');
    return squareColor.add('whiteTwo');
  } else if (squareColor.contains('whiteTwo')) {
    squareColor.remove('whiteTwo');
    return squareColor.add('whiteThree');
  } else if (squareColor.contains('whiteThree')) {
    squareColor.remove('whiteThree');
    return squareColor.add('whiteFour');
  } else if (squareColor.contains('whiteFour')) {
    squareColor.remove('whiteFour');
    return squareColor.add('whiteFive');
  } else if (squareColor.contains('whiteFive')) {
    squareColor.remove('whiteFive');
    return squareColor.add('grey')
  } else if (squareColor.contains('grey')) {
    squareColor.remove('grey');
    return squareColor.add('blackFive');
  } else if (squareColor.contains('blackFive')) {
    squareColor.remove('blackFive');
    return squareColor.add('blackFour');
  } else if (squareColor.contains('blackFour')) {
    squareColor.remove('blackFour');
    return squareColor.add('blackThree');
  } else if (squareColor.contains('blackThree')) {
    squareColor.remove('blackThree');
    return squareColor.add('blackTwo');
  } else if (squareColor.contains('blackTwo')) {
    squareColor.remove('blackTwo');
    return squareColor.add('blackOne');
  } else {
    return;
  }
}