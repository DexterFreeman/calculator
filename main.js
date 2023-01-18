//Calculations 

//operators: 
// %, +, *, -, /


//availble numbers are 0-9

//maybe use an array to store all the numbers + operators?

//    (-1)     1   2  3   4  5  6  7
// like this: [10, +, 24, -, 4, +, 19]
//use .push to add each item and then use a for loop to go through each item
//form the start. 


//need to check if inputs are valid, so check if previous item is a number, 
//then the current has to be an operator and vice versa. 

//can check with typeof()

//simply store the result in a public variable, so that if the user wants
//to do more, push that value to array once calculations are done after pressing
// =.


const calculations = [10, "+", 24];

const addition = (firstNumber, secondNumber) => firstNumber+secondNumber
const substration = (firstNumber, secondNumber) => firstNumber-secondNumber
const multiplication = (firstNumber, secondNumber) => firstNumber*secondNumber
const division = (firstNumber, secondNumber) => firstNumber/secondNumber


//Will be called when user presses =
const calculate = (calculateArray) => {
    let totalValue = 0
    for (let index = 0; index < calculateArray.length; index++) {
        let currentOperative = 0
        
        const currentTask = calculateArray[index];
        switch (currentTask){

            case "+":
                console.log("+")
                currentOperative = "+"
                break;

            case "*":
                console.log("*")
                currentOperative = "*"
                break;

            case "-":
                console.log("-")
                currentOperative = "-"
                break;

            case "/":
                console.log("/")
                currentOperative = "/"
                break;

            //OCCURS IF ITS A NUMBER
            default:
                if (totalValue !== 0){
                    console.log(currentOperative)
                    switch(currentOperative){
                        case "+":
                            console.log("AHA2")
                            totalValue = addition(totalValue, currentTask);
                            console.log(totalValue);
                            break;
            
                        case "*":
                            totalValue = multiplication(totalValue, currentTask);
                            console.log(totalValue);
                            break;
            
                        case "-":
                            totalValue = substration(totalValue, currentTask);
                            console.log(totalValue);
                            break;
            
                        case "/":
                            totalValue = division(totalValue, currentTask);
                            console.log(totalValue);
                            break;
                    }
                }
                else{
                    totalValue = currentTask; 
                }
        }
        
    }
    return totalValue;
}




console.log(calculate(calculations));