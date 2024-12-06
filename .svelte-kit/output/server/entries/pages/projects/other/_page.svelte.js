import { F as attr } from "../../../../chunks/index.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { g as goback } from "../../../../chunks/Goback.js";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-1d8j52w"></div> <div class="projectspage svelte-1d8j52w"><div class="overskrift svelte-1d8j52w"><div class="tekst svelte-1d8j52w"><h1 class="svelte-1d8j52w">Other</h1></div> <div class="backbutton svelte-1d8j52w"><img class="goback svelte-1d8j52w"${attr("src", goback)} alt="Go Back"> <a href="/projects" class="svelte-1d8j52w">Go Back</a></div></div> <div class="mini_spacer svelte-1d8j52w"></div> <div class="projects svelte-1d8j52w"><div class="section_1 svelte-1d8j52w"><h2>Page coming soon</h2></div></div></div> <div class="mini_spacer1 svelte-1d8j52w"></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
