const ICONS = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  leaf: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.7 5-7",
  shield: "M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z",
  ruler: "M21.3 15.3l-6-6a1 1 0 0 0-1.4 0L2.7 20.5a1 1 0 0 0 0 1.4l.4.4a1 1 0 0 0 1.4 0L21.3 16.7M7.5 10.5l2 2M10.5 7.5l2 2M13.5 4.5l2 2",
  truck: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.7a1 1 0 0 0-.2-.6l-3.4-4.3a1 1 0 0 0-.8-.4H14M7 18a2 2 0 1 0 0 .01M17 18a2 2 0 1 0 0 .01",
  ig: "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zM16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2M17.5 6.5h.01",
  pin: "M12 17v5M9 10.8a2 2 0 0 1-1.1 1.8l-1.8.9A2 2 0 0 0 5 15.2V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.8a2 2 0 0 0-1.1-1.8l-1.8-.9a2 2 0 0 1-1.1-1.8V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
  mail: "M22 7l-8.99 5.7a2 2 0 0 1-2.02 0L2 7M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M18 6L6 18M6 6l12 12"
};

function icon(name, size = 18) {
  return `<svg class="i" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[name]}"/></svg>`;
}

document.querySelectorAll("[data-icon]").forEach(function (el) {
  el.outerHTML = icon(el.dataset.icon, el.dataset.size || 18);
});