let count = 0;

function updateCountDisplay() {
  document.getElementById("count").innerText = count;
}

updateCountDisplay();

function increment() {
  count++;
  updateCountDisplay();
}

function decrement() {
  count--;
  updateCountDisplay();
}
