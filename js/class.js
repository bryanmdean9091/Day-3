// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday
function bday() {
    let birthday = prompt("When is your birthday?");
    console.log(birthday);
    let bdayComf = confirm(`Are you sure ${birthday} is your birthday?`);
    if (bdayComf == true) {
        alert(`Your birthday is ${birthday}!`)
    } else {
        bday()
    }
};

bday();