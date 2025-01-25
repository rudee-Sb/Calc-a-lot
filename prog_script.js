// constant declaration
const output = document.querySelector(".value");
const buttons = document.querySelectorAll("button");
const menuItem = document.querySelector('.navbar ul li');
const liItem = document.querySelector(".navbar ul ul li")
const dropdown = document.querySelector('.navbar ul ul');

// adding click event listener and prevent default button behaviour(if any).
buttons.forEach((elem) => {
    elem.onclick = (event) => {
        event.preventDefault();
        try {
            // checking which button was clicked based on its data attribute and execute resp function.
            if (elem.dataset.button == "AC") {
                output.value = "";
            }
            else if (elem.dataset.button == "CE") {
                let string = output.value;
                output.value = string.substr(0, string.length - 1);
            }
            else if (elem.dataset.button == "=") {
                if (output.value != "") {
                    output.value = math.evaluate(output.value);
                }
            }
            else if (elem.dataset.button == "BIN") {
                let result = parseInt(output.value);
                output.value = result.toString(2);
            }
            else if (elem.dataset.button == "OCT") {
                let result = parseInt(output.value);
                output.value = result.toString(8);
            }
            else if (elem.dataset.button == "HEX") {
                let result = parseInt(output.value);
                output.value = result.toString(16);
            }
            else if (elem.dataset.button == "DEC") {
                result = decimal_convertor(output.value);
                output.value = result;
            }
            else {
                output.value += elem.dataset.button;
            }
            // for invalid input or evaluation error.
        } catch (err) {
            output.value = "Invalid Entry"
            // clear error message after 1 second.
            setTimeout(() => { output.value = "" }, 1000)
        }
    }
})

// function for decimal conversion using regular expression.
function decimal_convertor(input) {
    input = input.toUpperCase();

    // check for binary value
    if (/^[01]+$/.test(input)) {
        return parseInt(input, 2);
    }

    // check for octal value
    else if (/^[0-7]+$/.test(input)) {
        return parseInt(input, 8);
    }

    // check for hexadecimal value
    else if (/^[0-9A-F]+$/.test(input)) {
        return parseInt(input, 16);
    }

    // check for decimal value
    else if (/^[0-9]+$/.test(input)) {
        return parseInt(input, 10);
    }

    // for invalid format
    else {
        return "Invalid format";
    }
}

// event listener for toggling dropdown menu visibility when menu item is clicked.
menuItem.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display == "block" ? "none" : "block";
});

// event listener for hiding dropdown after mouse leaves with a delay.
liItem.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdown.style.display = 'none';
    }, 2000);
});

