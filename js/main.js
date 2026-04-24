function testDisplay(){
    alert("Hello World")
}

const button = document.getElementById("addButton");
const counterText = document.getElementById("counter")

let count = 0;

button.addEventListener('click', () => {
  count++; // Increment the number
  counterText.textContent = count; // Update the display
});