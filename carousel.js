let carousel = document.getElementById("carousel");
let images = carousel.getElementsByTagName("img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let index = 0;
let interval;
function showNext() {
  images[index].style.opacity = 0;
  index++;
  if (index == images.length) {
    index = 0;
  }
  images[index].style.opacity = 1;
}

function showPrev() {
  images[index].style.opacity = 0;
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.opacity = 1;
}

function startAutoPlay() {
  interval = setInterval(showNext, 3000);
}

function stopAutoPlay() {
  clearInterval(interval);
}

next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);
carousel.addEventListener("mouseenter", startAutoPlay);
carousel.addEventListener("mouseleave", stopAutoPlay);
