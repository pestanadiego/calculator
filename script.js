let buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
let completed = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttonContent = button.innerText;
        if(!completed) {
            if(buttonContent == '=') {
                doOperation(input);
            } else if(!(buttonContent == 'C')) {
                input.value += buttonContent;
            } else {
                input.value = ' ';
            };
        } else {
            input.value = ' ';
            completed = false;
        };
    }); 
});

function doOperation(input) {
    operation = input.value;
    result = eval(operation);
    input.value = result;
    completed = true;
}

