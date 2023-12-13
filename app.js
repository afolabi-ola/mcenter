let items = document.querySelectorAll("#item");
let bars = document.querySelector('#bars')
let nav = document.querySelector('.nav')

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },{ threshold: 1 });

items.forEach((item) => {
  observer.observe(item);
});

bars.addEventListener('click', () => {
  nav.classList.toggle('active')
})
