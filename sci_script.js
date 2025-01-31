// constant declaration
const output = document.querySelector(".value");
const buttons = document.querySelectorAll("button");
const menuItem = document.querySelector('.navbar ul li');
const liItem = document.querySelector(".navbar ul ul li")
const dropdown = document.querySelector('.navbar ul ul');
const menu = document.getElementsByClassName("menu-toggle");
const deg_rad = document.getElementById("deg_rad");

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
                    output.value = Math.evaluate(output.value);
                }
            }
            else if (elem.dataset.button == "!") {
                output.value = Math.factorial(output.value);
            }
            else if (elem.dataset.button == "ln") {
                calculate_natural_log();
            }
            else if (elem.dataset.button == "log") {
                calculate_log_base10();
            }
            else if (elem.dataset.button == "sq") {
                output.value = parseFloat(output.value);
                output.value = Math.square(output.value);
            }
            else if (elem.dataset.button == "root") {
                let value = Math.sqrt(output.value);
                output.value = value.toFixed(5);
            }
            else if (elem.dataset.button == "^") {
                output.value = Math.square(output.value)
            }
            else if (elem.dataset.button == "+/-") {
                let value = parseFloat(output.value);
                value = -value;
                output.value = value.toFixed(3);
            }
            else if (elem.dataset.button == "deg/rad") {
                degree_radian_convertor();
            }
            else if (elem.dataset.button == "sin") {
                let value = Math.sin(output.value);
                output.value = value.toFixed(5);
            }
            else if (elem.dataset.button == "cos") {
                let value = Math.cos(output.value);
                output.value = value.toFixed(5);
            }
            else if (elem.dataset.button == "tan") {
                let value = Mlet (output.value);
                output.value = value.toFixed(5);
            }
            else {
                output.value += elem.dataset.button;
            }
            // for invalid input or evaluation error.
        } catch (err) {
            console.log(err)
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

// Show dropdown when deg/rad button is clicked
deg_rad.addEventListener("click", function() {
    const container = document.getElementById("angleTypeContainer");
    container.style.display = container.style.display == "none" ? "block" : "none";
});

// function to calculate natural log.
function calculate_natural_log() {
    let value = parseFloat(output.value);
    value = Math.log(value);
    output.value = value.toFixed(5);
}

// function to calculate log in base 10.
function calculate_log_base10() {
    let value = parseFloat(output.value);
    value = Math.log(value, 10);
    output.value = value.toFixed(5);
}

// function to convert degree to radian and vice versa.
function degree_radian_convertor() {
    const angleType = document.getElementById("angleType").value; // Get selected value
    if (angleType == "degrees") {
        let value = output.value * (Math.PI / 180);
        output.value = value.toFixed(5);
        
    } else if (angleType == "radians") {
        let value = output.value * (180 / Math.PI);
        output.value = value.toFixed(5);
    }
}

