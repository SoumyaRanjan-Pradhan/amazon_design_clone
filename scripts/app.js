// banner section 
const banner_path = "./image/";
const banner_slider = [{ banner_name: "books_banner", banner_url: banner_path + "books_banner.jpg" }, { banner_name: "beauty_banner", banner_url: banner_path + "beauty_banner.jpg" }, { banner_name: "toys_banner", banner_url: banner_path + "toys_banner.jpg" }, { banner_name: "kitchen_banner", banner_url: banner_path + "kitchen_banner.jpg" }, { banner_name: "game_banner", banner_url: banner_path + "game_banner.jpg" }];
let banner_section = document.querySelector("section.banner");
let i = 0;
setInterval(() => {

  while (i < banner_slider.length) {
    banner_section.style.backgroundImage = `url(${banner_slider[i].banner_url})`;
    console.log(i);
    i++;
    if (i === banner_slider.length) {
      i = 0
    }
    break;
  }
}, 3000)
// When the user clicks back to top the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
