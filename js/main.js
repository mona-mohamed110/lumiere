const header = document.getElementById("header");
const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
const marquee = document.getElementById("marquee");
const form = document.getElementById("form");
const statusEl = document.getElementById("status");

function onScroll() {
  header.classList.toggle("s", window.scrollY > 20);
}

function setMenu(open) {
  menu.classList.toggle("o", open);
  burger.setAttribute("aria-expanded", open);
  burger.innerHTML = icon(open ? "x" : "menu", 24);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

burger.addEventListener("click", function () {
  setMenu(!menu.classList.contains("o"));
});

menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});

marquee.innerHTML += marquee.innerHTML;

const items = document.querySelectorAll(".rv");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) {
    observer.observe(el);
  });
} else {
  items.forEach(function (el) {
    el.classList.add("in");
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  statusEl.textContent = "شكرًا — هذا نموذج تجريبي ولم يُرسل شيء.";
});