let container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  let li = document.createElement('div');
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

function remakeGrid() {
  let sideLengthString = prompt('How many squares per side?', '');
  let sideLength = Number(sideLengthString);
  let row;
  let column;
  if (Number.isInteger(sideLength) && 0 < sideLength <= 100) {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    for (let i = 0; i < sideLength; i++) {
      row = document.createElement('div');
      row.classList.add('row');
      row.setAttribute('id', sideLength * i);
      container.appendChild(row);
    }
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
      for (let i = 0; i < sideLength; i++) {
        column = document.createElement('div');
        column.classList.add('grid');
        column.classList.add('whiteOne');
        column.setAttribute('id', `square-${i+1+Number(row.id)}`)
        row.appendChild(column);
      }
    })
  } else {
    return alert(`Please try again with an integer between 1 and 100.\nOtherwise, the game might not work.`)
  }
}

function square(x) {
    return (x * x);
  }