console.log("MYCal");
let screen = document.getElementById('screen');
let screenValue = "";
// let buttonText = "";
let button = document.querySelectorAll('button');
for (item of button) {
    item.addEventListener('click', (e) => {
        // screenValue = item.innerText;
        buttonText = e.target.innerText;
        console.log(buttonText);


        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
            console.log(screen.value)
        }
        else if (buttonText == '=') {
            screenValue =eval(screenValue);              
            screen.value =screenValue;
            console.log(screen.value)
            
            
        }
        else if (buttonText == 'X') {

            screenValue = screenValue.slice(0, - 1);
            console.log("del char");
            console.log(screenValue);
            screen.value = screenValue;
            console.log(screen.value)
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
            console.log(screen.value)
        }
    });
}
