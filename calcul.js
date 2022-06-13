function add(a, b){
    return a+b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(operator, a, b){
    
    a = parseFloat(a);
    b = parseFloat(b);

    if (operator === "+"){
        return add(a, b);
    }

    else if (operator === "-"){
        return substract(a, b);
    }

    else if (operator === "*"){
        return multiply(a, b);
    }

    else if (operator === "/"){
        return divide(a, b);
    }
}

function populate(){
    
    const buttons = document.querySelectorAll('button');
    let displayValue = "0";
    let operator="";
    let number="";
    let oldNumber = "";
    let firstNumber = 1;
    
    buttons.forEach((button) => {
        button.addEventListener('click', ()=>{
            
            if(button.innerHTML === "CLEAR"){
                displayValue = "0";
                number = "";
                oldNumber = "";
                operator = "";
                firstNumber = 1;
                
                const screen = document.querySelector('.screen');
                screen.textContent = displayValue;
            }

            else if(button.innerHTML === "+"){

                if(number !== ""){

                
                    if(operator ==="/" && number === "0"){ //a rajouter partour pour la division par 0
                        const screen = document.querySelector('.screen');
                        screen.textContent = "Interdit Error";
                        
                        displayValue = "0";
                        number = "";
                        oldNumber = "";
                        operator = "";
                        firstNumber = 1;
                    }
    
                    else if(firstNumber === 1){
                        oldNumber = number;
                        number = "";
                        firstNumber = 0;
                        operator="+";
                    }
                    
                    else{
    
                        result = operate(operator, oldNumber, number);
                    
                        console.log("resultat :", result, "old", oldNumber, "number: ",  number);
                        
                        oldNumber = result;
                        number = "";
                        operator="+";
                        
                        console.log("resultat2 :", result, "old", oldNumber, "number: ",  number);
                        
                        displayValue = result;
                        const screen = document.querySelector('.screen');
                        screen.textContent = displayValue;
    
                    }
                }
                
                
                

            }

            else if(button.innerHTML === "-"){

                if(number !== ""){

                    if(firstNumber === 1){
                        oldNumber = number;
                        number = "";
                        firstNumber = 0;
                        operator="-";
                    }
                    
                    else{
    
                        result = operate(operator, oldNumber, number);
                    
                        console.log("resultat :", result, "old", oldNumber, "number: ",  number);
                        
                        oldNumber = result;
                        number = "";
                        
                        console.log("resultat2 :", result, "old", oldNumber, "number: ",  number);
                        
                        displayValue = result;
                        const screen = document.querySelector('.screen');
                        screen.textContent = displayValue;
                        operator="-";
    
                    }

                }
                
                
                
            }

            else if(button.innerHTML === "*"){
                
                if(number !== ""){

                    if(firstNumber === 1){
                        oldNumber = number;
                        number = "";
                        firstNumber = 0;
                        operator="*";
                    }
                    
                    else{
    
                        result = operate(operator, oldNumber, number);
                    
                        console.log("resultat :", result, "old", oldNumber, "number: ",  number);
                        
                        oldNumber = result;
                        number = "";
                        
                        console.log("resultat2 :", result, "old", oldNumber, "number: ",  number);
                        
                        displayValue = result;
                        const screen = document.querySelector('.screen');
                        screen.textContent = displayValue;
                        operator="*";
    
                    }

                }  
                
            }

            else if(button.innerHTML === "/"){

                
                if(number !== ""){

                    if(firstNumber === 1){
                        oldNumber = number;
                        number = "";
                        firstNumber = 0;
                        operator="/";
                    }
                    
                    else{
    
                        result = operate(operator, oldNumber, number);
                    
                        console.log("resultat :", result, "old", oldNumber, "number: ",  number);
                        
                        oldNumber = result;
                        number = "";
                        
                        console.log("resultat2 :", result, "old", oldNumber, "number: ",  number);
                        
                        displayValue = result;
                        const screen = document.querySelector('.screen');
                        screen.textContent = displayValue;
                        operator="/";
    
                    }

                }
                
                
            }



            else if(button.innerHTML === "="){

                if(number !== "" && firstNumber === 0){

                    result = operate(operator, oldNumber, number);
                
                    number = result;
                    operator = "";
                    firstNumber = 1;

                    console.log("resultat2 :", result, "old", oldNumber, "number: ",  number);
                    
                    displayValue = Math.round(result *100)/100;
                    const screen = document.querySelector('.screen');
                    screen.textContent = displayValue;

                }

                

            }
            
            else{
                                                
                number = number + button.innerHTML;
                displayValue = number;
                const screen = document.querySelector('.screen');
                screen.textContent = displayValue;
                console.log("number ", number)

            }
        });
    });


}

populate();