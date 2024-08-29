/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_CSAqAdTi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LkJ9ZjdF.mjs';
import 'clsx';
import { a as getLatestLaunches } from '../chunks/spacex_C05eruYN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardLaunch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { id, success, img, flightNumber, details } = Astro2.props;
  const launchStatus = success ? "success" : "failure";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/launch/" + id, "href")} class="rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition flex flex-col"> <picture class="flex justify-center p-4"> <img class="mb-5 rounded-lg"${addAttribute(img, "src")}${addAttribute("Patch for launch " + id, "alt")}> </picture> <header class="p-4 flex-grow"> <span${addAttribute([
    "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded",
    {
      "bg-green-400 text-green-900": success,
      "bg-red-400 text-red-900": !success
    }
  ], "class:list")}> ${launchStatus} </span> <h2 class="my-2 text-2xl font-bold tracking-tight text-white ">
Flight #${flightNumber} </h2> <p class="mb-4 font-light text-gray-400"> ${details !== null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/components/CardLaunch.astro", void 0);

const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const launches = await getLatestLaunches();
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${launches.map(
    (launch) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": launch.id, "img": launch.links.patch.small, "details": launch.details, "flightNumber": launch.flight_number, "success": launch.success })}`
  )} </div>`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/components/Launches.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bienvenido a SpaceX " }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Launches", $$Launches, {})} ` })}`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/index.astro", void 0);

const $$file = "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
