let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value == 'C') {
            string = "";
            input.value = string;
        } else if (value == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else {
            string += value;
            input.value = string;
        }
    });
});
