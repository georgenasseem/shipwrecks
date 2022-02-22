function myFunction() {
  if (window.pageYOffset >= 39) {
    document.getElementById("navbar11").classList.add("sticky")
  } else {
    document.getElementById("navbar11").classList.remove("sticky");
  }
}

window.onscroll = function() {myFunction()};

let mainNavLinks = document.querySelectorAll("nav ul li a");

mainNavLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    let target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});