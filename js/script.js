function myFunction() {
  const navList = document.getElementById("navList");

  if (navList.classList.contains('nav__list--hidden')) {
    navList.classList.remove('nav__list--hidden');
  } else {
    navList.classList.add('nav__list--hidden');
  }
}

document.querySelectorAll(".navbar__styling").forEach(function (linkElement) {
  linkElement.addEventListener("click", function () {
    navList.classList.add('nav__list--hidden');
  })
});