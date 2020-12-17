/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  
}
/* Write your implementation of displayMessage() */
function displayMessage(currTime){
  const greeting = document.getElementById("greeting")
  const hour = parseInt(currTime, 10);
  switch (time){
    case (time < 12): greeting.innerText = "Good Morning";
    case (time > 12 && time < 17): greeting.innerText = "Good Afternoon";
    case (time >  17): greeting.innerText = "Good Evening";
  }
}
