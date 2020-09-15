    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    $("#child1,#child2,#child3,#child4,#child5,#child6").css("visibility","hidden");
    $("#parent1").hover(function(){
        $("#parent1").css({"filter":"brightness(60%)",});
        $("#child1").css("visibility","visible");
    },
    function(){
        $("#parent1").css({"filter":"brightness(100%)",});

        $("#child1").css("visibility","hidden");
    }); 
    $("#parent2").hover(function(){
        $("#parent2").css({"filter":"brightness(60%)",});

       $("#child2").css("visibility","visible");
   },
   function(){
    $("#parent2").css({"filter":"brightness(100%)",});

       $("#child2").css("visibility","hidden");
   }); 
   $("#parent3").hover(function(){
    $("#parent3").css({"filter":"brightness(60%)",});

       $("#child3").css("visibility","visible");
   },
   function(){
    $("#parent3").css({"filter":"brightness(100%)",});

       $("#child3").css("visibility","hidden");
   }); 
   $("#parent4").hover(function(){
    $("#parent4").css({"filter":"brightness(60%)",});

       $("#child4").css("visibility","visible");
   },
   function(){
    $("#parent4").css({"filter":"brightness(100%)",});

       $("#child4").css("visibility","hidden");
   }); 
   $("#parent5").hover(function(){
    $("#parent5").css({"filter":"brightness(60%)",});

       $("#child5").css("visibility","visible");
   },
   function(){
    $("#parent5").css({"filter":"brightness(100%)",});

       $("#child5").css("visibility","hidden");
   }); 
   $("#parent6").hover(function(){
    $("#parent6").css({"filter":"brightness(60%)",});

       $("#child6").css("visibility","visible");
   },
   function(){
    $("#parent6").css({"filter":"brightness(100%)",});

       $("#child6").css("visibility","hidden");
   }); 
   $("#parent1").click(function(){
        $("#downimage").attr("src","images/carousel/jamies_car.jpg");
    });
    $("#parent2").click(function(){
        $("#downimage").attr("src","images/carousel/bluginger_car.jpg");
    });
    $("#parent3").click(function(){
        $("#downimage").attr("src","images/carousel/chairman_car.jpeg");
    });
    $("#parent4").click(function(){
        $("#downimage").attr("src","images/carousel/itandsons_car.jpg ");
    });
    $("#parent5").click(function(){
        $("#downimage").attr("src","images/carousel/jewel_car.jpg");
    });
    $("#parent6").click(function(){
        $("#downimage").attr("src","images/carousel/dicksonnoodle_car.jpeg");
    });

