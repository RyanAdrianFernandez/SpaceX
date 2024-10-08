/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CIrWgrVV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LMzUNJeQ.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About the project</h1> <p>This project is a demo for the SpaceX</p> ` })}`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/about.astro", void 0);

const $$file = "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
