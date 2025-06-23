const canvas = document.getElementById('canvasBurbujas');
const ctx = canvas.getContext('2d');
let burbujas = [];

function redimensionarCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', redimensionarCanvas);
redimensionarCanvas();

class Burbuja {
  constructor() {
    this.reiniciar();
  }

  reiniciar() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.radius = Math.random() * 8 + 2;
    this.speed = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.3;
    this.color = `rgba(244, 0, 9, ${this.alpha})`;
  }

  actualizar() {
    this.y -= this.speed;
    if (this.y < -this.radius) {
      this.reiniciar();
    }
  }

  dibujar() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function generarBurbujas() {
  burbujas = [];
  const cantidad = 100;
  for (let i = 0; i < cantidad; i++) {
    burbujas.push(new Burbuja());
  }
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  burbujas.forEach((b) => {
    b.actualizar();
    b.dibujar();
  });
  requestAnimationFrame(animar);
}

generarBurbujas();
animar();
