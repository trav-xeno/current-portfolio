$(function() {
  M.AutoInit();
  let bg = $("#bg");
  $.get(
    "https://api.nasa.gov/planetary/apod?api_key=Nsmf53ds9gfwqY58keTMyCpsAlRotfeHJs8aNbfV",
    function(response) {
      console.log(response);

      //url("assets/images/landingpage.jpeg") no-repeat center center fixed
      //  sideimg.attr("src", response.url);
      bg.attr(
        "style",
        `background: url(${response.hdurl}) no-repeat center center fixed;`
      );
    }
  );
});
function popUp() {
  alert("thsi form will be implemented soon!");
}
//or travisnevins@outlook.com is:
//Nsmf53ds9gfwqY58keTMyCpsAlRotfeHJs8aNbfV
