const para = document.querySelector('button');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Type In Your Favorite Item');
  para.textContent = 'Type In Your Favorite Item: ' + name;
}
