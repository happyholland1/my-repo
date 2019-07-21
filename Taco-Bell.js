const para = document.querySelector('button');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('What is your favorite taco bell item?');
  para.textContent = name;
}