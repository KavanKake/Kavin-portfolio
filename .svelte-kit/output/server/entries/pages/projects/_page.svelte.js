import { F as Footer } from "../../../chunks/Footer.js";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-kg3kl5"></div> <div class="projectspage svelte-kg3kl5"><div class="overskrift svelte-kg3kl5"><h1 class="svelte-kg3kl5">My projects</h1></div> <div class="mini_spacer svelte-kg3kl5"></div> <div class="projects svelte-kg3kl5"><div class="Python"><button class="svelte-kg3kl5"><a href="/projects/python" class="svelte-kg3kl5">Python</a></button></div> <div class="html"><button class="svelte-kg3kl5"><a href="/projects/HTML,CSS,JS" class="svelte-kg3kl5">HTML, CSS, JS</a></button></div> <div class="Other"><button class="svelte-kg3kl5"><a href="/projects/other" class="svelte-kg3kl5">Others</a></button></div></div></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
