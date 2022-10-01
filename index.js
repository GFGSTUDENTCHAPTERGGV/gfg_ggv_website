// working on navlink
allNavLinks = document.querySelectorAll(".nav-link");

allNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    
    allNavLinks.forEach(l => {
      l.classList.remove("active");
    })
    link.classList.add("active");
  });
});