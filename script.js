document.addEventListener("mousemove", (e) => {
  const card = document.querySelector(".card");
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.background = `radial-gradient(circle at ${x}px ${y}px, #ffffff, #004990)`;
});

document.querySelector(".widget-container").addEventListener("mouseenter", () => {
  document.querySelector(".card").classList.add("hover");
});

document.querySelector(".widget-container").addEventListener("mouseleave", () => {
  document.querySelector(".card").classList.remove("hover");
});
