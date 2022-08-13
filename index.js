let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e) =>{
        buttonText = e.target.innerHTML;
        console.log(buttonText);


        if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }

        // Del button creacted by NaheanTarik

        else if(buttonText == 'Del'){
            screenValue = screenValue.toString().slice(0, -1);
            screen.value = screenValue;
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }



    })
}