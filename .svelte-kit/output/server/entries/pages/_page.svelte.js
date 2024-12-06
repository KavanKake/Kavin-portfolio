import { F as attr } from "../../chunks/index.js";
import { F as Footer } from "../../chunks/Footer.js";
const github_black = "/_app/immutable/assets/github_black.DnR4NS1Z.png";
const insta_black = "/_app/immutable/assets/instagram_logo.D79q7f9v.png";
const face = "/_app/immutable/assets/facebook_logo.COOlU6Uu.png";
const linkedin_black = "/_app/immutable/assets/linkedin_black.Od82K778.png";
const homepage_picture = "/_app/immutable/assets/Homepage_farge_transparent.DnSBGq-Z.png";
function _page($$payload) {
  $$payload.out += `<div class="space svelte-1ar9bh8"></div> <div class="frontpage svelte-1ar9bh8"><div class="section_1 svelte-1ar9bh8"><h6 class="hello svelte-1ar9bh8">Hello, my name is</h6> <h1 class="myname svelte-1ar9bh8">Kavin</h1> <h1 class="myname svelte-1ar9bh8">Lokeswaran</h1> <div class="btns svelte-1ar9bh8"><a class="button svelte-1ar9bh8" href="https://github.com/KavanKake"><img class="logo svelte-1ar9bh8"${attr("src", github_black)} alt="button"></a> <a class="button svelte-1ar9bh8" href="https://www.instagram.com/kavin_lokeswaran_/"><img class="logo svelte-1ar9bh8"${attr("src", insta_black)} alt="button"></a> <a class="button svelte-1ar9bh8" href="https://www.facebook.com/profile.php?id=61550619093513"><img class="logo svelte-1ar9bh8"${attr("src", face)} alt="button"></a> <a class="button svelte-1ar9bh8" href="https://www.linkedin.com/in/kavin-lokeswaran/"><img class="logo svelte-1ar9bh8"${attr("src", linkedin_black)} alt="button"></a></div></div> <div class="section_2 svelte-1ar9bh8"><img class="frontpage_picture svelte-1ar9bh8"${attr("src", homepage_picture)} alt=""></div></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
