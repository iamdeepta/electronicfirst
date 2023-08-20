const toggleSearchbar = () => {
  document
    .querySelector(".nav-main-menu")
    .classList.toggle("nav-main-menu-searchbar-active");

  closeSubmenu();
};

const openSubmenu = () => {
  document.querySelector(".nav-submenu").classList.add("nav-submenu-active");
  document.querySelector(".blur-bg").classList.add("blur-bg-active");
};

const closeSubmenu = () => {
  document.querySelector(".nav-submenu").classList.remove("nav-submenu-active");
  document.querySelector(".blur-bg").classList.remove("blur-bg-active");
};

document
  .querySelector(".fa-magnifying-glass")
  .addEventListener("click", toggleSearchbar);
document.querySelector(".fa-xmark").addEventListener("click", toggleSearchbar);

const navMenuList = document.querySelectorAll(".nav-menu-list");

for (let i = 0; i < navMenuList.length; i++) {
  navMenuList[i].addEventListener("click", openSubmenu);
}

document.querySelector(".blur-bg").addEventListener("click", closeSubmenu);
