window.ElisaApp = {
  version: "0.1.0",
  status: "base-loaded",
  modules: {},

  init() {
    console.log("Elisa App base pronta");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.ElisaApp) {
    window.ElisaApp.init();
  }
});
