const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("portfolio-theme") === "light") {
  document.body.classList.add("light");
  if (toggleButton) {
    toggleButton.textContent = "Dark";
  }
}

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");
    localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    toggleButton.textContent = isLight ? "Dark" : "Light";
  });
}