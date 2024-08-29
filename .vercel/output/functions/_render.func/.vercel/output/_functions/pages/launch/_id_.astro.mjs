/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CIrWgrVV.mjs';
import 'kleur/colors';
import { g as getLaunchBy, a as getLatestLaunches } from '../../chunks/spacex_C05eruYN.mjs';
import { $ as $$Layout } from '../../chunks/Layout_LMzUNJeQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const launches = await getLatestLaunches();
  return launches.map((launch) => ({
    params: { id: launch.id }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch = null;
  if (id) {
    launch = await getLaunchBy({ id });
  }
  console.log(launch);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex gap-y-4 flex-col"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-bold">Launch #${launch?.flight_number}</h2> <p class="text-lg">${launch?.details}</p> </article> ` })}`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/launch/[id].astro", void 0);

const $$file = "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
