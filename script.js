const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const li = document.createElement('div');
  li.classList.add('grid');
  li.setAttribute('id', `square-${i+1}`);
  container.appendChild(li);
}

