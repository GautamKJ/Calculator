console.log("MYCal");
let screen = document.getElementById('screen');
let screenValue = "";
// let buttonText = "";
let button = document.querySelectorAll('button');
let special = document.querySelectorAll('special');
for (item of button) {
    item.addEventListener('click', (e) => {
        // screenValue = item.innerText;
        buttonText = e.target.innerText;
        console.log(buttonText);

        console.log("length ", screenValue.length + "\n");

        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
            console.log(screen.value)
        }
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            screen.value = screenValue;
            console.log(screen.value)


        }
        else if (buttonText == 'X') {

            screenValue = screenValue.slice(0, - 1);
            console.log("del char");
            console.log(screenValue);
            screen.value = screenValue;
            console.log(screen.value)
        }
        else if (screenValue!="" && (screenValue.charAt(screenValue.length - 1) == '+' || screenValue.charAt(screenValue.length - 1) == '-' || screenValue.charAt(screenValue.length - 1) == '*' || screenValue.charAt(screenValue.length - 1) == '/' || screenValue.charAt(screenValue.length - 1) == '%') && ((buttonText == '+') || (buttonText == '-') || (buttonText == '*') || (buttonText == '/') || (buttonText == '%'))) {
            console.log("screenValue--> ", screenValue);
            screenValue = screenValue.slice(0, - 1);
            console.log("screenValue--> ", screenValue);
            screen.value = screenValue;
            screenValue += buttonText;
            screen.value = screenValue;
            console.log("screenValue--> ", screenValue);
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
            console.log(screen.value)

        }
        


    });
}
