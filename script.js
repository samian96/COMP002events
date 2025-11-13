document.querySelector(".myButton").onclick =function() {
    myButton();
} // when button is pressed it starts the function below to run the event 


function myButton () {
    document.querySelector(".myButton").innerHTML = "Please do not press";
    console.log(myButton);
}

document.querySelector(".blocked").addEventListener("click" , function(event) {
    event.preventDefault();
}); // prevents the user from leaving the webpage from clicking on the link 

document.querySelector(".blocked").onclick =function() {
    myBlock();
}
function myBlock () {
    document.querySelector(".blocked").innerHTML = "No distractions! I am coding!";
    console.log(myBlock);
}