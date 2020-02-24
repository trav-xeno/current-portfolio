const btn = $("button");
const derp = $("#derp");
const project = $("#project");
let playing = false;
const cards = $(".card");
console.log(cards);
var card = document.querySelector(".card");
var flipcard = document.querySelector(".card");
cards.on("click", function() {
  if (playing) return;
  playing = true;
  console.log(this);
  anime({
    targets: this,
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 200 },
    easing: "easeInOutSine",
    duration: 300,
    complete: function(anim) {
      playing = false;
    }
  });
});
/*
card.addEventListener("click", function(event) {
  if (playing) return;
  playing = true;
  console.log(card);
  anime({
    targets: card,
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 200 },
    easing: "easeInOutSine",
    duration: 400,
    complete: function(anim) {
      playing = false;
    }
  });
});
$(window).bind("scroll", function() {
  var currentTop = $(window).scrollTop();
  var elems = $(".scrollspy");
  elems.each(function(index) {
    var elemTop = $(this).offset().top;
    var elemBottom = elemTop + $(this).height();
    if (currentTop >= elemTop && currentTop <= elemBottom) {
      var id = $(this).attr("id");
      var navElem = $('a[href="#' + id + '"]');
      navElem
        .parent()
        .addClass("active")
        .siblings()
        .removeClass("active");
    }
  });
});*/
$(function() {
  M.AutoInit();

  /*
  var morphing = anime({
    targets: "svg path",
    d:
      "m-2,-110.30547c213.92539,-164.88947 427.85073,164.88946 641.77607,0l0,296.80101c-139.92534,-24.11052 -264.85068,196.11055 -641.77607,0l0,-296.80101z",
    easing: "easeOutQuad",
    duration: 3000,
    loop: true,
    direction: "alternate"
  });*/
  //------------anime JS -----------------------------------------
  /*
  const staggerVisualizerEl = document.querySelector(".stagger-visualizer");
  const fragment = document.createDocumentFragment();
  const grid = [17, 17];
  const col = grid[0];
  const row = grid[1];
  const numberOfElements = col * row;

  for (let i = 0; i < numberOfElements; i++) {
    fragment.appendChild(document.createElement("div"));
  }

  staggerVisualizerEl.appendChild(fragment);

  const staggersAnimation = anime
    .timeline({
      targets: ".stagger-visualizer div",
      easing: "easeInOutSine",
      delay: anime.stagger(50),
      loop: true,
      autoplay: false
    })
    .add({
      translateX: [
        {
          value: anime.stagger("-.1rem", {
            grid: grid,
            from: "center",
            axis: "x"
          })
        },
        {
          value: anime.stagger(".1rem", {
            grid: grid,
            from: "center",
            axis: "x"
          })
        }
      ],
      translateY: [
        {
          value: anime.stagger("-.1rem", {
            grid: grid,
            from: "center",
            axis: "y"
          })
        },
        {
          value: anime.stagger(".1rem", {
            grid: grid,
            from: "center",
            axis: "y"
          })
        }
      ],
      duration: 1000,
      scale: 0.5,
      delay: anime.stagger(100, { grid: grid, from: "center" })
    })
    .add({
      translateX: () => anime.random(-10, 10),
      translateY: () => anime.random(-10, 10),
      delay: anime.stagger(8, { from: "last" })
    })
    .add({
      translateX: anime.stagger(".25rem", {
        grid: grid,
        from: "center",
        axis: "x"
      }),
      translateY: anime.stagger(".25rem", {
        grid: grid,
        from: "center",
        axis: "y"
      }),
      rotate: 0,
      scaleX: 2.5,
      scaleY: 0.25,
      delay: anime.stagger(4, { from: "center" })
    })
    .add({
      rotate: anime.stagger([90, 0], { grid: grid, from: "center" }),
      delay: anime.stagger(50, { grid: grid, from: "center" })
    })
    .add({
      translateX: 0,
      translateY: 0,
      scale: 0.5,
      scaleX: 1,
      rotate: 180,
      duration: 1000,
      delay: anime.stagger(100, { grid: grid, from: "center" })
    })
    .add({
      scaleY: 1,
      scale: 1,
      delay: anime.stagger(20, { grid: grid, from: "center" })
    });

  staggersAnimation.play();
  */
  /*
  var app = angular.module("myApp", []);
  app.controller("myCtrl", function($scope, $http) {
    $http
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Nsmf53ds9gfwqY58keTMyCpsAlRotfeHJs8aNbfV"
      )
      .then(function(response) {
        $scope.imageUrl = response.hdurl;
      });
  }); 

  let bg = $("#nasaimg");
  $.get(
    "https://api.nasa.gov/planetary/apod?api_key=Nsmf53ds9gfwqY58keTMyCpsAlRotfeHJs8aNbfV",
    function(response) {
      console.log(response);

      bg.attr("src", response.hdurl);
    }
  ); */
});
var app = new Vue({
  el: "#app",
  data: {
    start: true
  },
  methods: {}
});

function popUp() {
  alert("thsi form will be implemented soon!");
}
//or travisnevins@outlook.com is:
//Nsmf53ds9gfwqY58keTMyCpsAlRotfeHJs8aNbfV
