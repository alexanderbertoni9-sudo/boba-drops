const img = document.getElementById("cursor-follower");

document.addEventListener("mousemove", function (e) {
  img.style.left = e.clientX + "px";
  img.style.top = e.clientY + "px";
});

const button = document.getElementById("addButton");
const counterText = document.getElementById("counter");

let count = 0;

if (button && counterText) {
  button.addEventListener('click', () => {
    count++;
    counterText.textContent = count;
  });
}