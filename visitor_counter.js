fetch('https://ih7vyih0t5.execute-api.us-east-1.amazonaws.com/Prod')
.then((response) => response.text())
.then((data) => {
  document.getElementById("number").innerHTML = data;
})