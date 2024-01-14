window.onload = function() {
   header.style.left = "-200px";
   header.style.display = "block";
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
       header.style.display = "block"; // change this line
   } else {
       header.style.transition = "left 0.5s";
       header.style.left = "-200px";
       header.style.display = "block";
   }
});

aboutBtn.addEventListener("click", function(event) {
   event.preventDefault();
   footer.scrollIntoView({behavior: "smooth"});
});

$(document).ready(function(){
   var contactBtn = $("#contact-btn");
   var modal = $("#modal");
   var closeBtn = $("#close-btn");

   contactBtn.click(function(event) {
       event.preventDefault();
       if (modal.css('display') === 'none') {
           // If modal is not visible, show and animate it
           modal.css({display: 'block', bottom: '-100%'}); // Make modal visible and start from bottom
           modal.animate({bottom: '0'}, 500); // Animate to the middle of the screen faster
       } else {
           // If modal is visible, hide it
           modal.animate({bottom: '-100%'}, 500, function() { // Animate to the bottom of the screen faster
               modal.css({display: 'none'}); // Hide modal after animation
           });
       }
   });

   closeBtn.click(function() {
       modal.animate({bottom: '-100%'}, 500, function() { // Animate to the bottom of the screen faster
           modal.css({display: 'none'}); // Hide modal after animation
       });
   });
});

function validateForm() {
   var name = document.getElementById("name").value;
   alert(`Form Submitted! Thank you, ${name}!`);
}
function submitForm() {
    let searchBox = document.getElementById('searchbox');
    if (searchBox.value) {
        // If the search box is not empty, redirect to searchresult.html with the search query as a URL parameter
        window.location.href = 'searchresult.html?query=' + encodeURIComponent(searchBox.value);
    } else {
        // If the search box is empty, set the focus to it
        searchBox.focus();
    }
}

document.querySelector('.logo img').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('jokeButton').addEventListener('click', function(event) {
    // Prevent the default action
    event.preventDefault();

    fetch('https://v2.jokeapi.dev/joke/Any?lang=en')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.setup && data.delivery) {
                // Show the joke box
                document.getElementById('jokeBox').style.display = 'block';

                // Update the joke text
                document.getElementById('jokeText').innerText = data.setup + ' ' + data.delivery;
            } else {
                console.log('Joke not found:', data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Add a click event listener to the close button
document.getElementById('CJ').addEventListener('click', function() {
    // Hide the joke box
    document.getElementById('jokeBox').style.display = 'none';
});
let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }