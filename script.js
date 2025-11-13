document.querySelector(".myButton").onclick =function() {
    myButton();
} // when button is pressed it starts the function below to run the event 


function myButton () {
    document.querySelector(".myButton").innerHTML = "Please do not press";
    console.log(myButton);
}

