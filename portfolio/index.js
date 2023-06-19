$(".burger").click(function(){
    if ($(".list_item").hasClass("hide")) {
      $("ul").removeClass("hide");
    } else {
      $("ul").addClass("hide");
    }

    $(".burger").toggleClass("toggle");
  });

 
  