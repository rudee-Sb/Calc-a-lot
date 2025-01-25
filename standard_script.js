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

// event listener for toggling dropdown menu visibility when menu item is clicked. 
menuItem.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display == "block" ? "none" : "block";
});

// event listener for hiding dropdown when mouse leaves with a delay.
liItem.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdown.style.display = 'none';
    }, 2000); 
});
