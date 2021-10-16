 //this for show diffrent carousel sliders function
$(document).ready(function () {
  $(".slider_menu_item").on( 'click',function () {
    
    var number = $(this).attr("data-number");
    $(".carousel").addClass("hide");
    $(".carousel"+number).removeClass("hide");
    $(".carousel"+number).addClass("show");
  });
});






