// ------------ MENU DESKTOP ------------

// Função para ativar estilo no cabeçalho ao rolar o mouse (Scroll)
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 50) {
    nav.classList.add("active-header");
  } else {
    nav.classList.remove("active-header");
  }
}

window.addEventListener("scroll", scrollHeader);

// Função para mostrar Menu Dropdown ao clicar na seta
const dropdownMenu1 = document.getElementById("dropdown-item-1");
const dropdownMenu2 = document.getElementById("dropdown-item-2");
const dropdownMenu3 = document.getElementById("dropdown-item-3");

const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");

function ShowDropdown1(event) {
  event.preventDefault();
  dropdownMenu1.classList.toggle("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

function ShowDropdown2(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.toggle("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

function ShowDropdown3(event) {
  event.preventDefault();
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.toggle("active-dropdown-menu");
}

function RemoveDropdown() {
  dropdownMenu1.classList.remove("active-dropdown-menu");
  dropdownMenu2.classList.remove("active-dropdown-menu");
  dropdownMenu3.classList.remove("active-dropdown-menu");
}

// Chamando as funções (ShowDropdown1, 2 e 3) para esconder o Menu Dropdown ao passar mause fora dele.
menuItem1.addEventListener("click", ShowDropdown1);
menuItem2.addEventListener("click", ShowDropdown2);
menuItem3.addEventListener("click", ShowDropdown3);

// Chamando função (RemoveDropdown) para esconder o Menu Dropdown ao passar mause fora dele.
dropdownMenu1.addEventListener("mouseleave", RemoveDropdown);
dropdownMenu2.addEventListener("mouseleave", RemoveDropdown);
dropdownMenu3.addEventListener("mouseleave", RemoveDropdown);

// ------------ MENU MOBILE ------------

// Função para animar Menu Hamburguer ao clicar nele.
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active-menu-mobile");
      toggle.classList.toggle("active-bx");
    });
  }
};
showMenu("bx", "menu-mobile");
