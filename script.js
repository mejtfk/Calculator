/*
 *This was created by Abdulraheem 
*/
//This is a function that displays the text input
const input = args => { 

    let display = document.querySelector('.view');
    display.value += args;
    console.log(display.value)
};
// This is a function that clears the display
const clearDisplay = () =>{
	document.querySelector('.view').value = '';
	console.clear(document.querySelector('.view').value)
};
//This is a function that deletes a number 
const del = () =>{
	let delNum = document.querySelector('.view').value;
	document.querySelector('.view').value = delNum.slice(0, delNum.length - 1);
};
//This is a funtion that does the calculation
const calc = () => {

	let equal = document.querySelector('.view');
	equal.value = eval(equal.value);
};