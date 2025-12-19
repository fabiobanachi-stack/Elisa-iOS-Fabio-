// app.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Elisa OS iniciado");

  // Render inicial
  ElisaOS.render("home");

  // Botões da Tab Bar
  const buttons = document.querySelectorAll(".tab-bar button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      if (!view) return;

      ElisaOS.render(view);
    });
  });
});
