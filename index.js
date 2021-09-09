
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
var s=' ';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText=='x'){
            buttonText='*';
            s+=buttonText
            screenValue += buttonText;
            screen.value=s;
            // console.log(screen.value)
        }
        else if(buttonText=='sin'){
            s ="sin"
            buttonText='Math.sin';
            screenValue += buttonText;
            screen.value=s;
            
        }
        else if(buttonText=='cos'){
            s ="cos"
            buttonText='Math.cos';
            screenValue += buttonText;
            screen.value=s;
            
        }
        else if(buttonText=='tan'){
            s ="tan"
            buttonText='Math.tan';
            screenValue += buttonText;
            screen.value=s;
            
        }
        else if(buttonText=='sqrt'){
            s +=buttonText;
            buttonText='Math.sqrt';
            screenValue += buttonText;
            screen.value=s;
            
        }
        else if(buttonText=='pi'){
            
            s+=buttonText;
            buttonText='Math.PI';
            screenValue += buttonText;
            screen.value=s;
            
        }
        else if(buttonText=='C')
        {    screenValue = " ";
             s=" ";
            screen.value = screenValue;
        }
        else if(buttonText=="="){
            console.log(screenValue)
            screen.value=eval(screenValue)  // eval is function

        }
        else{
            s+=buttonText;
            screenValue += buttonText;
            screen.value=s
        }
    })
}
