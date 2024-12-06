import { B as push, F as attr, G as stringify, I as bind_props, E as pop, J as copy_payload, K as assign_payload, L as css_props, M as slot } from "../../chunks/index.js";
const img = "/_app/immutable/assets/Logo_portfolio.CgoxYn6N.png";
function Hamburger($$payload, $$props) {
  push();
  let {
    open = false,
    type = "spin",
    title = "Hamburger menu",
    ariaControls,
    ariaLabel = title,
    onclick
  } = $$props;
  $$payload.out += `<button${attr("title", title)}${attr("aria-label", ariaLabel)}${attr("aria-controls", ariaControls)}${attr("aria-expanded", open)}${attr("class", `hamburger hamburger--${stringify(type)} svelte-jas1sv ${stringify([open ? "is-active" : ""].filter(Boolean).join(" "))}`)}><span class="hamburger-box svelte-jas1sv"><span class="hamburger-inner svelte-jas1sv"></span></span></button>`;
  bind_props($$props, { open });
  pop();
}
function _layout($$payload, $$props) {
  let open = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<nav class="svelte-vuck7u"><img class="logo-navbar svelte-vuck7u"${attr("src", img)} alt="logo"> <ul class="links svelte-vuck7u"><li class="knapper svelte-vuck7u"><a href="/" class="svelte-vuck7u">Home</a></li> <li class="knapper svelte-vuck7u"><a href="/projects" class="svelte-vuck7u">Projects</a></li> <li class="knapper svelte-vuck7u"><a href="/aboutme" class="svelte-vuck7u">About me</a></li> <li class="blå_knapp svelte-vuck7u"><a class="contactme svelte-vuck7u" href="/contactme">Contact me</a></li></ul> <div class="hamburger svelte-vuck7u">`;
    css_props($$payload2, true, { "--color": "#024D98" }, () => {
      Hamburger($$payload2, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        type: "collapse",
        title: "Toggle nav links",
        ariaControls: "nav"
      });
    });
    $$payload2.out += ` `;
    if (open) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<ul id="nav" class="menu svelte-vuck7u"><li class="svelte-vuck7u"><a href="/" class="svelte-vuck7u">Home</a></li> <li class="svelte-vuck7u"><a href="/projects" class="svelte-vuck7u">projects</a></li> <li class="svelte-vuck7u"><a class="contactme svelte-vuck7u" href="/contactme">Contactme</a></li></ul>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div></nav> <!---->`;
    slot($$payload2, $$props, "default", {});
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _layout as default
};
