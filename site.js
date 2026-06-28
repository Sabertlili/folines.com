const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d", { alpha: true });
const pointer = { x: 0.68, y: 0.34 };
let points = [];

function resize() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  points = Array.from({ length: Math.max(34, Math.floor(window.innerWidth / 34)) }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00045,
    vy: (Math.random() - 0.5) * 0.00045,
    hue: Math.random()
  }));
}

function draw() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "rgba(247,241,229,0.018)";
  for (let x = 0; x < w; x += 64) ctx.fillRect(x, 0, 1, h);
  for (let y = 0; y < h; y += 64) ctx.fillRect(0, y, w, 1);

  for (const p of points) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < -0.05) p.x = 1.05;
    if (p.x > 1.05) p.x = -0.05;
    if (p.y < -0.05) p.y = 1.05;
    if (p.y > 1.05) p.y = -0.05;
  }

  points.forEach((a, index) => {
    const ax = a.x * w;
    const ay = a.y * h;
    const pull = Math.hypot(a.x - pointer.x, a.y - pointer.y);
    const colors = ["229,192,111", "159,213,198", "223,120,137"];
    ctx.fillStyle = `rgba(${colors[index % colors.length]}, ${pull < 0.2 ? 0.72 : 0.36})`;
    ctx.fillRect(ax, ay, 4, 4);

    for (let j = index + 1; j < points.length; j += 1) {
      const b = points[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 0.15) {
        ctx.strokeStyle = `rgba(247,241,229,${0.1 - distance * 0.52})`;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(b.x * w, b.y * h);
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);
window.addEventListener("pointermove", event => {
  pointer.x = event.clientX / window.innerWidth;
  pointer.y = event.clientY / window.innerHeight;
});

resize();
draw();
