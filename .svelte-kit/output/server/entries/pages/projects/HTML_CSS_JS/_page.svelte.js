import { F as attr } from "../../../../chunks/index.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { g as goback } from "../../../../chunks/Goback.js";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-15cv5y"></div> <div class="projectspage svelte-15cv5y"><div class="overskrift svelte-15cv5y"><div class="tekst svelte-15cv5y"><h1 class="svelte-15cv5y">HTML, CSS, JS</h1></div> <div class="backbutton svelte-15cv5y"><img class="goback svelte-15cv5y"${attr("src", goback)} alt="Go Back"> <a href="/projects" class="svelte-15cv5y">Go Back</a></div></div> <div class="undertext svelte-15cv5y"><h3>Click on file to download</h3></div> <div class="mini_spacer svelte-15cv5y"></div> <div class="projects svelte-15cv5y"><div class="section_1 svelte-15cv5y"><button class="svelte-15cv5y"><a href="/My_projects/html,css,js/Vikingtokt.zip" download="Vikingtokt" class="svelte-15cv5y">Vikingtokt</a></button></div></div></div> <div class="mini_spacer1 svelte-15cv5y"></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
