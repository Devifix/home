window.onload = function() {
   header.style.left = "-200px";
}
var homeBtn = document.getElementById("home-btn");
var header = document.getElementById("header");
var aboutBtn = document.getElementById("about-btn");
var footer = document.getElementById("footer");

homeBtn.addEventListener("click", function(event) {
   event.preventDefault();
   var style = window.getComputedStyle(header);
   var left = style.getPropertyValue('left');
   if (left == "-200px") {
       header.style.transition = "left 0.5s";
       header.style.left = "0px";
   } else {
       header.style.transition = "left 0.5s";
       header.style.left = "-200px";
   }
});

aboutBtn.addEventListener("click", function(event) {
   event.preventDefault();
   footer.scrollIntoView({behavior: "smooth"});
});
var contactBtn = document.getElementById("contact-btn");
var modal = document.getElementById("modal");
var closeBtn = document.getElementById("close-btn");

contactBtn.addEventListener("click", function(event) {
   event.preventDefault();
   modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
   modal.style.display = "none";
});
function validateForm() {
   {var name = document.getElementById("name").value;
   alert(`Form Submitted! Thank you, ${name}!`);
   }
  
}
// carousel thingy
let index = 0;

function move(n) {
    const items = document.querySelectorAll('.carousel-item');
    index += n;
    index = Math.max(0, Math.min(items.length - 1, index));
    
    items.forEach((item, i) => {
        item.style.transform = `translateX(${-index * 100}%)`;
    });
    
    document.querySelector('.arrow-left').style.visibility = index > 0 ? 'visible' : 'hidden';
    document.querySelector('.arrow-right').style.visibility = index < items.length - 1 ? 'visible' : 'hidden';
}

window.onload = () => move(0);

var logo = document.getElementsByClassName("logo")
logo[0].addEventListener("click",function(){
   window.location = "index.html";
})