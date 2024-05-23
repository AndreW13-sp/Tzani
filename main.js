document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img.has--observer");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          entry.target.classList.add("is--visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1.0 }
  );

  images.forEach((image) => {
    observer.observe(image);
  });
});

document.getElementById("toggleNavBtn").addEventListener("click", function () {
  var navLinks = document.querySelector(".md\\:hidden");
  navLinks.classList.toggle("hidden");
});

document.getElementById("view-more").addEventListener("click", function () {
  var moreContent = document.getElementById("more-content");
  var viewLessButton = document.getElementById("view-less");
  var viewMoreButton = document.getElementById("view-more");

  if (moreContent.classList.contains("hidden")) {
    moreContent.classList.remove("hidden");
    viewLessButton.style.display = "inline-block"; 
    viewMoreButton.style.display = "none"; 
  }
});

document.getElementById("view-less").addEventListener("click", function () {
  var moreContent = document.getElementById("more-content");
  var viewLessButton = document.getElementById("view-less");
  var viewMoreButton = document.getElementById("view-more");

  if (!moreContent.classList.contains("hidden")) {
    moreContent.classList.add("hidden");
    viewMoreButton.style.display = "inline-block"; 
    viewLessButton.style.display = "none"; 
  }
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}