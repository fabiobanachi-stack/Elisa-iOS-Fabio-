document.addEventListener("DOMContentLoaded", () => {
  console.log("Elisa OS iniciado");

  const buttons = document.querySelectorAll(".tab-bar button");
  const mainView = document.querySelector(".main-view");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.innerText;

      mainView.innerHTML = `
        <h1>${section}</h1>
        <p>Seção ${section} carregada.</p>

        <div id="modules">
          Conteúdo em desenvolvimento.
        </div>
      `;
    });
  });
});
