const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
let displayData = "";
let memoryNumber, memoryMathNumber, memoryMath;
let needToRewriteMemory = false;
let needPoint = true;
let whatSign = false;
//let clearFieldSymbol = "";




buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('value');
        console.log(buttonValue, " was clicked!!");
        if(isNumber(buttonValue)) {}
        else if(isPoint(buttonValue)) {}
        else if(isSign(buttonValue)) {}
        else if(isBackspace(buttonValue)) {}
        else if(isMath(buttonValue)) {}
        else if(isSolve(buttonValue)) {}
        else if(isCE(buttonValue)) {}
        else if(isC(buttonValue)) {}
        
    })
})

function isNumber(buttonValue) {
    if(!isNaN(parseFloat(buttonValue)) && !isNaN(buttonValue)) {
        displayData += buttonValue;
        display.textContent = displayData;
        //memoryNumber = display.textContent;
        needToRewriteMemory = true;
        return true;
    } 
    else return false;
}
function isPoint(buttonValue) {
    if(buttonValue == "." && needPoint) {
        if(display.textContent == "") {
            displayData = "0.";
        } else displayData += buttonValue;
        display.textContent = displayData;
        needPoint = false;
        return true;
    } else return false;
}

function isSign(buttonValue) {
    if(buttonValue == "+/-") {
        if(!whatSign) display.textContent = "-" + display.textContent;
        else display.textContent = display.textContent.substring(1, display.textContent.length);
        displayData = display.textContent;
        whatSign = !whatSign;
        return true;
    } else return false;
}
function isBackspace(buttonValue) {
    if(buttonValue == "←") {
        if(display.textContent != "") {
            if(!(display.textContent.length == 2 && display.textContent[0] == "-"))
                display.textContent = display.textContent.substring(0, display.textContent.length - 1);
            else display.textContent = "";
        } displayData = display.textContent;
        return true;
    } else return false;
}

function isMath(buttonValue) {
    if(buttonValue == "+" ||
        buttonValue == "-" ||
        buttonValue == "x" ||
        buttonValue == "/") 
        {
        memoryNumber = display.textContent;
        clearFiled();
        memoryMath = buttonValue;
        return true;
    } else if(buttonValue == "1/x") {
        if(display.textContent == "0") {
            display.textContent = "Деление на 0!";
            return true;
        } else {
            display.textContent = 1 / parseFloat(display.textContent);
            //console.log("1 / ", memoryNumber, " = ", display.textContent);
            memoryNumber = display.textContent;
            console.log("Память: ", memoryNumber);
            return true;
        }
    } else if(buttonValue == "x^2") {
        display.textContent = Math.pow(parseFloat(display.textContent), 2);
        memoryNumber = display.textContent;
        console.log("Память: ", memoryNumber);
        return true;
    } else if(buttonValue == "√") {
        if(parseFloat(display.textContent) < 0) {
            display.textContent = "Из отрицательных чисел корень найти нельзя!";
            return true;
        } else {
            display.textContent = Math.sqrt(parseFloat(display.textContent));
            //console.log("1 / ", memoryNumber, " = ", display.textContent);
            memoryNumber = display.textContent;
            console.log("Память: ", memoryNumber);
            return true;
        }
    } else if(buttonValue == "%") {
        display.textContent = memoryNumber * parseFloat(display.textContent) / 100;
        console.log(display.textContent);
        return true;
    }
    else return false;
}

function isSolve(buttonValue) {
    if(buttonValue == "=") {
        let result;
        if(memoryMath == "+") { 
            if(needToRewriteMemory) memoryMathNumber = display.textContent;
            result = parseFloat(memoryNumber) + parseFloat(display.textContent);
            console.log("Выражение: ", memoryNumber, " + ", display.textContent, "=", result);
            memoryNumber = memoryMathNumber;
            display.textContent = result;
            needToRewriteMemory = false;
            console.log("Память: ", memoryNumber)   
        } else if(memoryMath == "-") {
            if(needToRewriteMemory) {
                memoryMathNumber = display.textContent;
                result = parseFloat(memoryNumber) - parseFloat(display.textContent);
                console.log("Выражение: ", memoryNumber, " - ", display.textContent, "=", result);
            } else {
                result = parseFloat(display.textContent) - parseFloat(memoryNumber);
                console.log("Выражение: ",display.textContent, " - ",  memoryNumber, "=", result);
            }
            memoryNumber = memoryMathNumber;
            display.textContent = result;
            needToRewriteMemory = false;
            console.log("Память: ", memoryNumber)  
        } else if(memoryMath == "x") {
            if(needToRewriteMemory) memoryMathNumber = display.textContent;
            let result = parseFloat(memoryNumber) * parseFloat(display.textContent);
            console.log("Выражение: ", memoryNumber, " * ", display.textContent, "=", result);
            memoryNumber = memoryMathNumber;
            display.textContent = result;
            needToRewriteMemory = false;
            console.log("Память: ", memoryNumber)   
        } else if(memoryMath == "/") {
            if(needToRewriteMemory) {
                memoryMathNumber = display.textContent;
                if(display.textContent == "0") {
                    display.textContent = "Деление на 0!";
                    return true;
                }
                result = parseFloat(memoryNumber) / parseFloat(display.textContent);
                console.log("Выражение: ", memoryNumber, " / ", display.textContent, "=", result);
            } else {
                if(memoryNumber == "0") {
                    display.textContent = "Деление на 0!";
                    return true;
                }
                result = parseFloat(display.textContent) / parseFloat(memoryNumber);
                console.log("Выражение: ",display.textContent, " / ",  memoryNumber, "=", result);
            }
            memoryNumber = memoryMathNumber;
            display.textContent = result;
            needToRewriteMemory = false;
            console.log("Память: ", memoryNumber)  
        }
        return true;
    } else return false;
}

function isCE(buttonValue) {
    if(buttonValue == "CE") {
        memoryNumber = null;
        display.textContent = "";
        memoryMath = null;
        displayData = "";
        return true;
    } else return false;
}
function isC(buttonValue) {
    if(buttonValue == "C") {
        clearFiled();
        return true;
    } return false;
}

function clearFiled() {
    display.textContent = "";
    displayData = "";
    needPoint = true;
}




