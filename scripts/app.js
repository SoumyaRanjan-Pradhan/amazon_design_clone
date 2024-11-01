// Header Section
const gift = document.querySelector("div.gift");
const dropdown = document.querySelector("div.gift .dropdown");
const drop_arrow = document.querySelector("#drop_arrow");
const toggleDropdown = () => {
  gift.style.outline = "3px solid #f90";
  if (dropdown.style.display == "none") dropdown.style.display = "block";
  else {
    dropdown.style.display = "none";
  }
};
gift.addEventListener("click", toggleDropdown);
drop_arrow.addEventListener("click", toggleDropdown);
document.addEventListener("click", () => {
  if (event.target !== gift && event.target !== drop_arrow) {
    gift.style.outline = "none";
    dropdown.style.display = "none";
  }
});
const input = document.querySelector("input");
const search = document.querySelector(".search");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const cover = document.querySelector(".cover");
let main_height = main.offsetHeight;
let footer_height = footer.offsetHeight;
let cover_height = main_height + footer_height;
console.log(cover_height);
input.addEventListener("focus", () => {
  search.style.outline = "3px solid #f90";
  cover.style.height = `${cover_height}px`;
});
input.addEventListener("blur", () => {
  search.style.outline = "none";
  cover.style.height = 0;
});

//sidebar section
const close_icon = document.querySelector(".close_icon");
const side_menubar = document.querySelector("div.side_menubar");
const sidebar_cover = document.querySelector("div.sidebar_cover");
const menu = document.querySelector("a.menu");

const toggleSidebar = () => {
  side_menubar.style.transform = "translateX(-400px)";
  sidebar_cover.style.display = "none";
  document.body.style.overflow = "auto";
};

menu.addEventListener("click", () => {
  side_menubar.style.transform = "translateX(0)";
  sidebar_cover.style.display = "block";
  close_icon.style.display = "block";
  document.body.style.overflow = "hidden";
});
close_icon.addEventListener("click", toggleSidebar);
sidebar_cover.addEventListener("click", toggleSidebar);
// banner section
const banner_path = "./image/";
const banner_slider = [
  { banner_name: "books_banner", banner_src: banner_path + "books_banner.jpg" },
  {
    banner_name: "beauty_banner",
    banner_src: banner_path + "beauty_banner.jpg",
  },
  { banner_name: "toys_banner", banner_src: banner_path + "toys_banner.jpg" },
  {
    banner_name: "kitchen_banner",
    banner_src: banner_path + "kitchen_banner.jpg",
  },
  {
    banner_name: "shop_catagories_banner.jpg",
    banner_src: banner_path + "shop_catagories_banner.jpg",
  },
  { banner_name: "game_banner", banner_src: banner_path + "game_banner.jpg" },
];

let banner_section = document.querySelector("a.slides img");
let i = 0;
setInterval(() => {
  while (i < banner_slider.length) {
    banner_section.src = `${banner_slider[i].banner_src}`;
    banner_section.alt = `${banner_slider[i].banner_name}`;
    // console.log(i);
    i++;
    if (i === banner_slider.length) {
      i = 0;
    }
    break;
  }
}, 3000);
// When the user clicks back to top the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
