const PAL = [
  ["#A4573A", "#E8D5B7", "#6B3A28", "#C98A5E"],
  ["#E8DCC8", "#7A7A52", "#A4573A", "#3B2F27"],
  ["#3B2F27", "#C98A5E", "#E8DCC8", "#8A5A3C"],
  ["#D9C3A0", "#A4573A", "#F4EBDD", "#7A7A52"],
  ["#C98A5E", "#E8D5B7", "#A4573A", "#6B3A28"]
];

function rug(kind, colors) {
  const [b, a, d, e] = colors;
  let g = "";

  if (kind === 0) {
    g += `<rect x="30" y="30" width="340" height="440" fill="none" stroke="${a}" stroke-width="3"/>`;
    g += `<rect x="46" y="46" width="308" height="408" fill="none" stroke="${d}" stroke-width="1.5"/>`;
    [150, 122, 94, 66, 38].forEach(function (r, i) {
      const fill = i % 2 ? b : [a, d, e][i % 3];
      g += `<polygon points="200,${250 - r * 1.35} ${200 + r},250 200,${250 + r * 1.35} ${200 - r},250" fill="${fill}"/>`;
    });
    [[75, 75], [325, 75], [75, 425], [325, 425]].forEach(function (p) {
      const x = p[0];
      const y = p[1];
      g += `<polygon points="${x},${y - 22} ${x + 16},${y} ${x},${y + 22} ${x - 16},${y}" fill="${a}"/>`;
    });
  }

  if (kind === 1) {
    const widths = [34, 10, 52, 10, 22, 10, 64, 10, 22, 10, 52, 10, 34, 10, 34];
    const total = widths.reduce(function (p, q) { return p + q; }, 0);
    const gap = (400 - total) / widths.length;
    let x = 0;
    widths.forEach(function (w, i) {
      g += `<rect x="${x}" width="${w}" height="500" fill="${[a, b, d, e][i % 4]}"/>`;
      x += w + gap;
    });
  }

  if (kind === 2) {
    for (let r = 0; r < 7; r++) {
      for (let q = 0; q < 5; q++) {
        const x = 40 + q * 80 + (r % 2 ? 40 : 0);
        const y = 40 + r * 68;
        if (x > 370) continue;
        g += `<polygon points="${x},${y - 32} ${x + 34},${y} ${x},${y + 32} ${x - 34},${y}" fill="none" stroke="${a}" stroke-width="2"/>`;
        g += `<polygon points="${x},${y - 14} ${x + 15},${y} ${x},${y + 14} ${x - 15},${y}" fill="${(r + q) % 2 ? d : e}"/>`;
      }
    }
  }

  if (kind === 3) {
    [420, 350, 280, 210, 140, 70].forEach(function (r, i) {
      g += `<circle cx="200" cy="520" r="${r}" fill="${[a, b, d, e, a, b][i]}" stroke="${d}"/>`;
    });
    g += `<circle cx="300" cy="110" r="38" fill="${e}" opacity=".9"/>`;
  }

  return `<svg class="rg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="رسم سجادة"><rect width="400" height="500" fill="${b}"/>${g}</svg>`;
}

document.querySelectorAll("[data-rug]").forEach(function (el) {
  const src = PHOTOS[el.dataset.photo];
  const palette = PAL[el.dataset.pal || el.dataset.rug];
  if (src) {
    el.innerHTML = `<img class="rg" src="${src}" alt="سجادة من لومير" loading="lazy">`;
  } else {
    el.innerHTML = rug(Number(el.dataset.rug), palette);
  }
});