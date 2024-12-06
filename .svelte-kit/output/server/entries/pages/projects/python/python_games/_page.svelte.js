import { F as attr } from "../../../../../chunks/index.js";
import { F as Footer } from "../../../../../chunks/Footer.js";
import { g as goback } from "../../../../../chunks/Goback.js";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-1n8ib8"></div> <div class="projectspage svelte-1n8ib8"><div class="overskrift svelte-1n8ib8"><div class="tekst svelte-1n8ib8"><h1 class="svelte-1n8ib8">Python games</h1></div> <div class="backbutton svelte-1n8ib8"><img class="goback svelte-1n8ib8"${attr("src", goback)} alt="Go Back"> <a href="/projects/python" class="svelte-1n8ib8">Go Back</a></div></div> <div class="undertext svelte-1n8ib8"><h3>Click on file to download</h3></div> <div class="mini_spacer svelte-1n8ib8"></div> <div class="projects svelte-1n8ib8"><div class="section_1 svelte-1n8ib8"><button class="svelte-1n8ib8"><a href="/My_projects/Ecopant - game/Ecopant.zip" download="EcoPant" class="svelte-1n8ib8">EcoPant</a></button></div> <div class="section_2 svelte-1n8ib8"><button class="svelte-1n8ib8"><a href="/My_projects/Quizgame/WhoWantsToBeAMillionaire.zip" download="Who wants to be a millionaire?" class="svelte-1n8ib8">Who wants to be a millionaire?</a></button></div></div></div> <div class="mini_spacer1 svelte-1n8ib8"></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
