/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(tStr) {
  const fulTime = tStr.split(":")
  const hr = parseInt(fulTime[0])
  if (hr < 12) {
    return "Good Morning"
  } else if (hr >= 12 && hr <=17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  const header = document.getElementById('greeting')
  header.innerText = msg;
}
