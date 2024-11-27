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
const banner_height = document.querySelector("body > main > section.banner");
const image_height = document.querySelector(
  "body > main > section.banner > a > img"
);
console.log(`banner height ${banner_height.offsetHeight}`);
console.log(`image height ${image_height.offsetHeight}`);
const close_icon = document.querySelector(".close_icon");
const side_menubar = document.querySelector("div.side_menubar");
const sidebar_cover = document.querySelector("div.sidebar_cover");
const menu = document.querySelector("a.menu");

menu.addEventListener("click", () => {
  if (window.innerWidth > 1032) {
    side_menubar.style.transform = "translateX(0)";
    sidebar_cover.style.display = "block";
    close_icon.style.display = "block";
    document.body.style.overflow = "hidden";
  }
});

const toggleSidebar = () => {
  side_menubar.style.transform = "translateX(-400px)";
  sidebar_cover.style.display = "none";
  document.body.style.overflow = "auto";
};
close_icon.addEventListener("click", toggleSidebar);
sidebar_cover.addEventListener("click", toggleSidebar);

//side menubar in mobile-view
const menu_bar = document.querySelector(".menu_bar");
const small_sidebar = document.querySelector(".small_sidebar");
const mobileSide_menubar = document.querySelector(".mobileSide_menubar");
const mobileSidebar_cover = document.querySelector(".mobileSidebar_cover");
const mobile_close_icon = document.querySelector(".mobile_close_icon");
const see_all = document.querySelector(".see_all");
const all_menubar = document.querySelector(".all_menubar");
const black_friday = document.querySelector("#black_friday");
const other_options = document.querySelector("#other_options");
const gift_cards = document.querySelector("#gift_cards");
const see_less = document.querySelector(".see_less");

menu_bar.addEventListener("click", () => {
  small_sidebar.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});
const toggleMobile_Sidebar = () => {
  small_sidebar.style.transform = "translateX(-100%)";
  document.body.style.overflow = "auto";
};
mobile_close_icon.addEventListener("click", toggleMobile_Sidebar);
mobileSidebar_cover.addEventListener("click", toggleMobile_Sidebar);

const black_friday_Deals = [
  "Amazon Music",
  "Prime Video",
  "Books",
  "Echo & Alexa",
  "Fire Tablets",
  "Fire TV",
  "Kindle",
  "Audible Books & Originals",
  "Clothing, Shoes,Jewelry & Watches",
  "Electronics",
  "Pffice & School Supplies",
];
const Gift_Cards = [
  "Amazon Appstore",
  "Movies, Music & Games",
  "Computers",
  "Home, Garden & Pets",
  "Handmade",
  "Beauty, Health & Personal Care",
  "Food & Grocery",
  "Toys, Kids & Baby",
  "Sports & Outdoors",
  "Automative",
  "Home Services",
];
const Others_Deals = [
  "Shop By Interest",
  "Premium Fashion",
  "Amazon Business",
  "Amazon Custom",
  "Amazon Haul",
  "Amazon Live",
  "Amazon Music",
  "Amazon Outlet",
  "Medical Care & Pharmacy",
  "Amazon Physical Stores",
  "Amazon Trade-in",
  "Your Product Support",
  "Amazon Second Chance",
  "Amazon Resale",
  "Audible",
  "Baby Registry",
  "Climate Pledge Friendly",
  "Credit & Payment Products",
  "Customers' Most-Loved Styles",
  "Your Essentials",
  "Find a Gift",
  "Gift Cards",
  "Home Services",
  "Luxury Stores",
  "Our Brands",
  "Pet Profile",
  "Prime",
  "Amazon Photos",
  "Prime Video",
  "Purchase Reminders",
  "Sell products on Amazon",
  "Add Prime to your site",
  "Subscribe & Save",
  "The Drop",
  "Black Friday Deals",
  "Wedding Registry",
];

black_friday_Deals.map((value) => {
  black_friday.innerHTML += `<li><a href="#" class="sidebar_list"><span>${value}</span>
      <i class="fa-solid fa-angle-right custom_edit"></i>
    </a></li>`;
});

Gift_Cards.map((value) => {
  gift_cards.innerHTML += `<li><a href="#" class="sidebar_list"><span>${value}</span>
      <i class="fa-solid fa-angle-right custom_edit"></i>
    </a></li>`;
});

Others_Deals.map((value) => {
  other_options.innerHTML += `<li>
      <a href="#" class="sidebar_option_list">
       ${value}
    </a>
  </li>`;
});

see_all.addEventListener("click", () => {
  all_menubar.classList.add("show");
  see_all.style.display = "none";
});

see_less.addEventListener("click", () => {
  all_menubar.classList.remove("show");
  see_all.style.display = "block";
});

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
const mobBanner_path = "./image/mobile/";
const mobBanner_Slider = [
  {
    banner_name: "beauty_banner",
    banner_src: mobBanner_path + "beauty_banner.jpg",
  },
  {
    banner_name: "toys_banner",
    banner_src: mobBanner_path + "toys_banner.jpg",
  },
  {
    banner_name: "kitchen_banner",
    banner_src: mobBanner_path + "kitchen_banner.jpg",
  },
  {
    banner_name: "homeDecore_banner",
    banner_src: mobBanner_path + "homeDecore_banner.jpg",
  },
  {
    banner_name: "game_banner",
    banner_src: mobBanner_path + "game_banner.jpg",
  },
];

let banner_section = document.querySelector("a.slides img");

let screen_width = window.innerWidth;
if (screen_width <= 972) {
  banner_section.src = `${
    mobBanner_Slider[mobBanner_Slider.length - 1].banner_src
  }`;
  banner_section.alt = `${
    mobBanner_Slider[mobBanner_Slider.length - 1].banner_name
  }`;
  let i = 0;
  setInterval(() => {
    while (i < mobBanner_Slider.length) {
      banner_section.src = `${mobBanner_Slider[i].banner_src}`;
      banner_section.alt = `${mobBanner_Slider[i].banner_name}`;
      i++;
      if (i === mobBanner_Slider.length) {
        i = 0;
      }
      break;
    }
  }, 3000);
  console.log(`Width: ${screen_width}`);
} else {
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
}

// When the user clicks back to top the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
