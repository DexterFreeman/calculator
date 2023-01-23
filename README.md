# Calculator App
This is a calculator app which was a project I built between weeks 2-3 of my _nology course. 
You can view my portfolio via github pages using this link: [https://dexterfreeman.github.io/calculator/](https://dexterfreeman.github.io/calculator/). 


## Stack: 

HTML, CSS, Vanilla JS

## Functionality: 
- Numbers 0-9 with decimals.
- Addition, Subtraction, Multiplication, Division
-Scientific notation
-Square root
- PI
- Percentages
- Rounds to whole number

## Logic: 

In order to calculate the total, first the calculations are moved into an array so that:
"19+54-2/6" for example, would be changed to [19, +, 54, -, 2, /, 6]
This allows me to use a for loop for each element in the array to go through each number/operator to correctly calculate the sum. 

Each sum is comprised of 3 parts: A number, an operative and then another number. For example 1 + 2. 

Within my code, the first number is always "currentTotal" because the calculations are always done from left to right. The operative is tracked by the "currentOperative" variable and for the last part of the sum, I simply use the current element of the for loop ("currentTask").


![image of project](https://i.ibb.co/802zfWs/frontend-image.jpg)
