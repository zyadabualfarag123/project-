
const menuItems = [
  { name: "Section 1", link: "#section1" },
  { name: "Section 2", link: "#section2" },
  { name: "Section 3", link: "#section3" },
  { name: "Section 4", link: "#section4" }
];


const navbar = document.getElementById("navbar");

menuItems.forEach(item => {
  const a = document.createElement("a");
  a.textContent = item.name;
  a.href = item.link;
  a.setAttribute("data-target", item.link.replace("#", "")); 

  
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(item.link).scrollIntoView({ behavior: "smooth" });
  });

  navbar.appendChild(a);
});


window.addEventListener("scroll", () => {
  let currentSection = "";

  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      currentSection = section.id;
    }
  });

  document.querySelectorAll("nav a").forEach(link => {
    if (link.dataset.target === currentSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


const form = document.getElementById("commentForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value;
  const comment = form.comment.value;
  const email = form.email.value;

  alert(`Thank you, ${name}! Your comment: "${comment}" has been submitted.`);
  form.reset();
});
