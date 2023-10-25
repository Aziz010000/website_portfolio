const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const nav_links = document.getElementById("nav_links");

open_menu.addEventListener("click",menu);
close_menu.addEventListener("click",menu);


function menu(){
  open_menu.classList.toggle("hidden");
  close_menu.classList.toggle("hidden");
  nav_links.classList.toggle("left-[-70%]");
  nav_links.classList.toggle("left-0");
  nav_links.classList.toggle("font-bold");
  document.body.classList.toggle("overflow-hidden");
}