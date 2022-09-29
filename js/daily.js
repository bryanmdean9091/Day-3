// //Day 3 daily challenge
// let userName = prompt("Please enter you name");//prompt user for thier name
// //store name to input
// alert(userName.split('').reverse().join(''));//alert name reversed 

// Challenge 2
// Prompt for a number value (provide a default of 10)
// let num1 = prompt('Please enter a number', 10);
// // Prompt for a second number value (provide a default of 10)
// let num2 = prompt('Please enter a second number', 10);
// // Convert the prompted values into integers using parseInt()
// let addResult = parseInt(num1)+ parseInt(num2);
// // Add the numbers together and alert the user with the result
// alert(`The total of your numbers is: ${addResult}`);

//Take home Day 3
// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

let callOne = true;

function one() {
    let firstName = document.getElementById('name');
    console.log(firstName.value);
    document.getElementById('whatName').style.display = "none";
    document.getElementById('whatLast').style.display = "block";
    document.getElementById('name').value = '';
};

function two() {
    let lastName = document.getElementById('name');
    console.log(lastName.value);
    document.getElementById('first').innerText = `Your last name is ${lastName.value}`;
    document.getElementById('name').value = '';
    setTimeout(reset, 6000);    
};

function call() {
    if (callOne) one();
    else two();
    callOne = !callOne;
};

function reset() {
    window.location.reload()
};











