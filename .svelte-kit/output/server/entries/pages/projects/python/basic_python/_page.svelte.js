import { F as attr } from "../../../../../chunks/index.js";
import { F as Footer } from "../../../../../chunks/Footer.js";
import { g as goback } from "../../../../../chunks/Goback.js";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-191b4r1"></div> <div class="projectspage svelte-191b4r1"><div class="overskrift svelte-191b4r1"><div class="tekst svelte-191b4r1"><h1 class="svelte-191b4r1">Basic Python</h1></div> <div class="backbutton svelte-191b4r1"><img class="goback svelte-191b4r1"${attr("src", goback)} alt="Go Back"> <a href="/projects/python" class="svelte-191b4r1">Go Back</a></div></div> <div class="undertext svelte-191b4r1"><h3>Click on file to download</h3></div> <div class="mini_spacer svelte-191b4r1"></div> <div class="projects svelte-191b4r1"><div class="section_1 svelte-191b4r1"><button class="svelte-191b4r1"><a href="/My_projects/Python/Calculator.py" download="Advanced Calculator" class="svelte-191b4r1">Advanced calculator</a></button> <button class="svelte-191b4r1"><a href="/My_projects/Python/bankkonto.py" download="Bank account code" class="svelte-191b4r1">Bank account code</a></button> <button class="svelte-191b4r1"><a href="/My_projects/Python/krytpert_kode.py" download="Encryption code" class="svelte-191b4r1">Encryption code</a></button> <button class="svelte-191b4r1"><a href="/My_projects/Python/Gjett_tallet.py" download="Guess the number " class="svelte-191b4r1">Guess the number</a></button></div> <div class="section_2 svelte-191b4r1"><button class="svelte-191b4r1"><a href="/My_projects/Python/Stein, saks, papir-kopi.py" download="Rock, paper, scissors " class="svelte-191b4r1">Rock, paper, scissors</a></button> <button class="svelte-191b4r1"><a href="/My_projects/Python/Dekryptert_melding.py" download="Crypted code" class="svelte-191b4r1">Crypted message</a></button> <button class="svelte-191b4r1"><a href="/My_projects/Python/ordsjekk-kopi.py" download="Word checker" class="svelte-191b4r1">Word checker</a></button> <button class="svelte-191b4r1"><a href="/My_projects/Python/Primtallsjekk-kopi.py" download="Prime number checker" class="svelte-191b4r1">Prime number checker</a></button></div></div></div> <div class="mini_spacer1 svelte-191b4r1"></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};