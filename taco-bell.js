const para = document.querySelector('button');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('What is your favorite taco bell item?');
  para.textContent = name;
}
//Function is meant to allow the user to type in their favorite item in a button. The text in the button will change to reflect their input.