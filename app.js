const panels = Array.from(document.getElementsByClassName('panel'));

panels.forEach((panel) => {
   panel.addEventListener('click', (e) => {
      removeActive();
      panel.classList.add("active");
   });
});

function removeActive() {
   panels.forEach((panel) => {
      panel.classList.remove("active");
   });
};