import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, d as addAttribute, b as createAstro, f as renderHead } from './astro/server_CIrWgrVV.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex items-center cursor-pointer gap-2 rounded-lg text-white px-3 py-[10px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-midu-primary/40 bg-[#121226] hover:bg-[#1A1A2E] hover:border-midu-primary/60" href=""> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/components/HeaderButton.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  console.log("Javascript");
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:p-16 lg:px-6"> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX launches
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX launches
</p> </div> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`, "default": ($$result2) => renderTemplate` 
Últimos lanzamientos
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/about" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>`, "default": ($$result2) => renderTemplate` 
Sobre el proyecto
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-white", "href": "/oldest" }, { "before": ($$result2) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-alarm"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 13m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M12 10l0 3l2 0"></path><path d="M7 4l-2.75 2"></path><path d="M17 4l2.75 2"></path></svg>`, "default": ($$result2) => renderTemplate` 
Los más viejos
` })} </nav> </header>`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Programacion/Proyectos de Front/Astro/Astro_prueba/astro_prueba/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
