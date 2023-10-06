// função para ativar estilo no cabeçalho ao rolar o mouse
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50) {
    nav.classList.add("active-header");
  } else {
    nav.classList.remove("active-header");
  }
}

window.addEventListener("scroll", scrollHeader);
