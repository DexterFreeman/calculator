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
// =
/*
const calculationsString = "10-9"
//need to go from string to this array
const convertString = (stringToConvert) => {
    let convertedArr = []
    let currentString = ""
    let pushCount = 0;
    for (let index = 0; index < stringToConvert.length; index++) {
        const element = stringToConvert[index];

        //If it is the last item to add then:
        if (index == stringToConvert.length-1){
            //Push any previous item
            convertedArr.push(currentString)
            //If the last item pushed was a number then:
            if (parseInt(convertedArr[pushCount]) || convertedArr[pushCount] == 0){
                //Concat the current element to it e.g in string +22 this will result in the interaction of
                //[+, 2] -> [+, 22]
                convertedArr[pushCount] =convertedArr[pushCount].concat(element)
            }
            else {
                //Otherwise push it. 
                convertedArr.push(element)
            }
        }
        else if (parseInt(element) || element == "0"){
            currentString = currentString.concat(element)
        }
        else if (element == "."){
            currentString = currentString.concat(element)
    
        }
        else{
            if (currentString){convertedArr.push(currentString); pushCount++}
            convertedArr.push(element)
            pushCount++
            currentString = ""
         } 
    }
    return convertedArr;
}


console.log(convertString(calculationsString));

*/
const calculations = ["4.874915326E7", "-", "1000",]
const addition = (firstNumber, secondNumber) => parseInt(firstNumber) + parseInt(secondNumber)
const substration = (firstNumber, secondNumber) => parseInt(firstNumber) - parseInt(secondNumber)
const multiplication = (firstNumber, secondNumber) => parseInt(firstNumber) * parseInt(secondNumber)
const division = (firstNumber, secondNumber) => parseInt(firstNumber) / parseInt(secondNumber)
const percentage = (firstnumber, secondNumber) => (100 * firstnumber) / secondNumber

//Will be called when user presses =
const calculate = (calculateArray) => {
    let totalValue = 0
    let currentOperative = ""

    for (let index = 0; index < calculateArray.length; index++) {
        let currentTask = calculateArray[index];
        if (currentTask.includes("E")){
            currentTask = new Number(currentTask)
        }
        console.log("Current Task " + currentTask)
        console.log("Total value " + totalValue)

        switch (currentTask){
            case "+":
                currentOperative = "+"
                break;

            case "*":
                currentOperative = "*"
                break;

            case "-": 
                currentOperative = "-"
                break;

            case "%":
                currentOperative = "%"
                break;

            case "/":
                currentOperative = "/"
                break;

            //OCCURS IF ITS A NUMBER
            default:
                if (totalValue > 0){
                    if (currentOperative == "+"){
                        totalValue = addition(totalValue, currentTask);
                        console.log(totalValue);
                    }

                    else if (currentOperative == "-"){
                        totalValue = substration(totalValue, currentTask);
                        console.log(totalValue);
                    }
                    else if (currentOperative == "%"){
                        totalValue = percentage(totalValue, currentTask);
                        console.log(totalValue);
                    }

                    else if (currentOperative == "*"){
                        totalValue = multiplication(totalValue, currentTask);
                        console.log(totalValue);
                    }

                    else if (currentOperative == "/") {
                        totalValue = division(totalValue, currentTask);
                        console.log(totalValue);
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