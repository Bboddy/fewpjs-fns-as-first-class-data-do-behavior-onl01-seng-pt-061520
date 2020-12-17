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
function displayMessage(time){
  const greeting = document.getElementById("greeting")
  time = parseInt(time);
  switch (time){
    case (time < 12): return "Good Morning";
    case (time > 12 && time < 17): return "Good Afternoon";
    case (time >  17): return "Good Evening";
  }
}
