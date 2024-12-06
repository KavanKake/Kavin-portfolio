import { F as attr } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/Footer.js";
const picture = "/_app/immutable/assets/aboutme.CcVgl0gD.jpg";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-1tqll96"></div> <div class="aboutme svelte-1tqll96"><div class="section_1 svelte-1tqll96"><div class="conteiner svelte-1tqll96"><img${attr("src", picture)} alt="Kavin Lokeswaran"></div></div> <div class="section_2 svelte-1tqll96"><div class="overskrift svelte-1tqll96"><h1 class="svelte-1tqll96">About me</h1></div> <div class="underoverskrift svelte-1tqll96"><h3 class="svelte-1tqll96">Kavin Lokeswaran - IT student</h3></div> <div class="tekst svelte-1tqll96"><p>Hello, my name is Kavin Lokeswaran. I am a passionate IT student with a strong interest in technology, programming, at Elvebakken VGS in Oslo, Norway. I am currently studying IT, because I enjoy understanding how technology work and how it could improve our daily lives. I have worked with many projects, for example this website. When I’m not working on IT related projects, I enjoy playing games or play football. My dream is to became an IT engineer.</p></div></div></div> <div class="mini_spacer svelte-1tqll96"></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
