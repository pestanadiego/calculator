let buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonContent = button.innerText;
        if(buttonContent == '=') {
            doOperation(input);
        } else if(!(buttonContent == 'C')) {
            input.value += buttonContent;
        } else {
            input.value = ' ';
        };
    }); 
});

function doOperation(input) {
    operation = input.value;
    result = eval(operation);
    input.value = result;
}

