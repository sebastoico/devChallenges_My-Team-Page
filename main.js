const containers = document.querySelectorAll(".container");
const x = window.matchMedia("(min-width: 918px)")

responsiveOrder(x);
window.addEventListener('resize', () => responsiveOrder(x))

function responsiveOrder(x) {
  for (var i = 0; i < containers.length; i++) {
    if (((x.matches) && ((i-1)%3 == 0)) || (!(x.matches) && ((i)%2 == 1))) {
      containers[i].classList.add("container--impar")
    } else {
      containers[i].classList.remove("container--impar")
    }
  }
}