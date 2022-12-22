const display = document.querySelector(".display");
const digits = [...document.querySelectorAll(".digit")];
const clearBtn = document.querySelector(".clear-btn");
const decimalBtn = document.querySelector(".decimal-btn");
const operators = [...document.querySelectorAll(".operator")];
const equalBtn = document.querySelector(".equal-btn");
const del = document.querySelector(".delete");
let currentDisplayValue = "0";
let decimalCount = 0;
let currentOperator;
let firstNum = "";
let secondNum = "";

operators.forEach((el) => {
	switch (true) {
		case el.textContent === "+":
			el.addEventListener("click", () => {
				switch (true) {
					case !firstNum:
						currentOperator = sum;
						firstNum = +currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						break;
					case !isNaN(firstNum):
						secondNum = +currentDisplayValue;
						currentDisplayValue = operate(currentOperator, firstNum, secondNum);
						firstNum = +currentDisplayValue;
						display.textContent = currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						secondNum = "";
						break;
				}
				currentOperator = sum;
				currentDisplayValue = "";
				decimalCount = 0;
			});
			break;
		case el.textContent === "-":
			el.addEventListener("click", () => {
				switch (true) {
					case !firstNum:
						currentOperator = subtract;
						firstNum = +currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						break;
					case !isNaN(firstNum):
						secondNum = +currentDisplayValue;
						currentDisplayValue = operate(currentOperator, firstNum, secondNum);
						firstNum = +currentDisplayValue;
						display.textContent = currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						secondNum = "";
						break;
				}
				currentOperator = subtract;
				currentDisplayValue = "";
				decimalCount = 0;
			});
			break;
		case el.textContent === "x":
			el.addEventListener("click", () => {
				switch (true) {
					case !firstNum:
						currentOperator = multiply;
						firstNum = +currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						break;
					case !isNaN(firstNum):
						secondNum = +currentDisplayValue;
						currentDisplayValue = operate(currentOperator, firstNum, secondNum);
						firstNum = +currentDisplayValue;
						display.textContent = currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						secondNum = "";
						break;
				}
				currentOperator = multiply;
				currentDisplayValue = "";
				decimalCount = 0;
			});
			break;
		case el.textContent === "÷":
			el.addEventListener("click", () => {
				switch (true) {
					case !firstNum:
						currentOperator = divide;
						firstNum = +currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						break;
					case !isNaN(firstNum):
						secondNum = +currentDisplayValue;
						currentDisplayValue = operate(currentOperator, firstNum, secondNum);
						firstNum = +currentDisplayValue;
						display.textContent = currentDisplayValue;
						console.log(
							`current value:${currentDisplayValue}, firstNum:${firstNum}, secondNum:${secondNum}`
						);
						secondNum = "";
						break;
				}
				currentOperator = divide;
				currentDisplayValue = "";
				decimalCount = 0;
			});
			break;
	}
});

digits.forEach((el) => {
	el.addEventListener("click", (e) => {
		switch (true) {
			case decimalCount > 0 && e.target.textContent === ".":
				break;
			case currentDisplayValue.length < 10:
				currentDisplayValue += e.target.textContent;
				display.textContent = +currentDisplayValue;
				console.log(`currentDisplayValue is ${currentDisplayValue}`);
		}
	});
});

decimalBtn.addEventListener("click", () => {
	decimalCount++;
});

clearBtn.addEventListener("click", () => {
	currentDisplayValue = "0";
	firstNum = "";
	secondNum = "";
	display.textContent = 0;
	decimalCount = 0;
	currentOperator = "";
	currentOperator = undefined;
});

del.addEventListener("click", () => {
	currentDisplayValue = currentDisplayValue.slice(0, -1);
	display.textContent = +currentDisplayValue;
});

equalBtn.addEventListener("click", () => {
	secondNum = +currentDisplayValue;
	display.textContent = operate(currentOperator, firstNum, secondNum);
	console.log(`secondNum now is ${secondNum}`);
});

function sum(num1, num2) {
	let result = num1 + num2;
	return result.toFixed();
}

function subtract(num1, num2) {
	let result = num1 - num2;
	return result.toFixed();
}

function multiply(num1, num2) {
	let result = num1 * num2;
	return result.toFixed();
}

function divide(num1, num2) {
	let result = num1 / num2;
	return result.toFixed();
}

// function makeOppositeSign(num) {
//     return num * (-1);
// };

// function percent() {
//     display.textContent = +currentDisplayValue / 100;
// };

function operate(operator, num1, num2) {
	return operator(num1, num2);
}

// fix del button!