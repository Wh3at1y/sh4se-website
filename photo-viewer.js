const viewer = document.querySelector(".photo-viewer");
const photo = viewer.querySelector("img");

for (const link of document.querySelectorAll("a.enlarge")) {
  link.setAttribute("aria-haspopup", "dialog");
  link.addEventListener("click", event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    photo.src = link.href;
    photo.alt = link.querySelector("img").alt;
    viewer.showModal();
  });
}

viewer.addEventListener("click", event => {
  if (event.target === viewer) viewer.close();
});
