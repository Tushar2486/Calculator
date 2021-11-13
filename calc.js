let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let evaluate = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='x'){
            buttonText = '*';
            evaluate += buttonText;
            screen.value = evaluate; 
        }
        else if(buttonText=='÷') {
            buttonText = '/';
            evaluate += buttonText;
            screen.value = evaluate;
        }
        else if(buttonText == `AC`) {
            evaluate = "";
            screen.value = evaluate;
        }
        else if(buttonText == '=') {
            screen.value = eval(evaluate);
        }
        else if(buttonText == 'π') {
            buttonText = Math.PI;
            evaluate += buttonText;
            screen.value = evaluate; 
        }
        else {
            evaluate += buttonText;
            screen.value = evaluate; 
        }

    })
}
