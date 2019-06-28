(function($){
    $(document).ready(function(){
        $('.parallax').parallax();
    });

  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

// $('.materialboxed').on("click", function(){

//     var imgSrc = $(this).prop("src");

//     var actualImg = new Image();

//     actualImg.src = imgSrc;

//     var colorThief = new ColorThief();
//     var newColor = colorThief.getColor(actualImg);
//     newColor = "rgb("+ newColor[0] + "," + newColor[1] + "," + newColor[2] + ")";
//     console.log("URL", imgSrc);

//     console.log("Waiting...");

//     setTimeout(function() {
//         $("div#materialbox-overlay").css("background-color", newColor);
//     }, 10);

// });
