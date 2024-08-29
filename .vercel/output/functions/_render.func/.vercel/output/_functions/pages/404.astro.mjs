/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CSAqAdTi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LkJ9ZjdF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center"> <h1 class="text-white text-3xl text-center">Esta página no existe...</h1> </div> ` })}`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/404.astro", void 0);

const $$file = "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
