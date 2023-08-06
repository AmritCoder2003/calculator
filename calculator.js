let inputField = document.querySelector('#input');
let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === "=") {
      inputField.value = eval(inputField.value);
    } else if (buttonText === "AC") {
      inputField.value = "";
    } else if (buttonText === "←") {
      inputField.value = inputField.value.slice(0, -1);
    } else {
      inputField.value += buttonText;
    }
  });
});
