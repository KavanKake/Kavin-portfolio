import { F as attr } from "../../../../chunks/index.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { g as goback } from "../../../../chunks/Goback.js";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-1v76fyx"></div> <div class="projectspage svelte-1v76fyx"><div class="overskrift svelte-1v76fyx"><div class="tekst"><h1 class="svelte-1v76fyx">Python</h1></div> <div class="backbutton svelte-1v76fyx"><img${attr("src", goback)} class="goback_logo svelte-1v76fyx" alt="Go back"> <a class="goback svelte-1v76fyx" href="/projects">Go Back</a></div></div> <div class="mini_spacer svelte-1v76fyx"></div> <div class="projects svelte-1v76fyx"><div class="Python"><button class="svelte-1v76fyx"><a href="/projects/python/basic_python" class="svelte-1v76fyx">Basic Python</a></button></div> <div class="html"><button class="svelte-1v76fyx"><a href="/projects/python/python_games" class="svelte-1v76fyx">Python games</a></button></div></div></div> <div class="mini_spacer svelte-1v76fyx"></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
