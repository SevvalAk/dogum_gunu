const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
let colors = ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd"];

function Confetto() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.size = Math.random() * 8 + 4;
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.speed = Math.random() * 3 + 2;
}

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push(new Confetto());
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.size, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.y += c.speed;
    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateConfetti);
}
