import { F as attr } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/Footer.js";
const email = "/_app/immutable/assets/mail.B1MmeS03.png";
function _page($$payload) {
  $$payload.out += `<div class="spacer svelte-155unth"></div> <div class="frontpage svelte-155unth"><div class="section_1 svelte-155unth"><h1 class="svelte-155unth">Would you like to contact me?</h1> <h3 class="svelte-155unth">Fill out the form on the right side to automatically send me an email</h3> <h3 class="svelte-155unth">Or send a mail to the e-mail down below</h3> <div class="email svelte-155unth"><img class="mail_logo svelte-155unth"${attr("src", email)} alt="E-mail"> <h3 class="svelte-155unth">contact@kavinlokeswaran.no</h3></div></div> <div class="section_2 svelte-155unth"><h1 class="contactform svelte-155unth">Contact form</h1> <form method="POST" action="https://formsubmit.co/Kavin_Lokeswaran1407@outlook.com" class="svelte-155unth"><h3 class="name svelte-155unth">Your name</h3> <input name="Name" type="text" class="placeholder svelte-155unth" placeholder="Enter your name" required> <h3 class="name svelte-155unth">Your e-mail</h3> <input name="Email" type="email" class="placeholder svelte-155unth" placeholder="Enter your e-mail" required> <h3 class="name svelte-155unth">Topic</h3> <input name="Topic" type="text" class="placeholder svelte-155unth" placeholder="Enter your topic"> <h3 class="name svelte-155unth">Message</h3> <textarea name="Message" placeholder="Enter message" class="svelte-155unth"></textarea> <button class="submit svelte-155unth" type="submit">Send in</button></form></div></div> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
