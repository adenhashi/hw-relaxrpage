$(document).ready(function () {

        var slideDuration = 400; // milliseconds

    $(".readmore").click(function(){
       	 $(this).nextAll('.slide:first').removeClass('hide');
       	 $(this).addClass('hide');
         $(this).nextAll('.readless:first').removeClass('hide');
         $(this).nextAll('.slide:first').slideDown();
    });
	
   $(".readless").click(function(){
         $(this).prevAll('.slide:first').addClass('hide');
         $(this).addClass('hide');
         $(this).prevAll('.readmore').removeClass('hide');
         $(this).prevAll('.slide:first').slideUp();
    }); 

   $(".learnmore").click(function(){
         $(this).next('.slide').removeClass('hide');
         $(this).addClass('hide');
         $(".learnless").removeClass('hide');
         $(this).find('.slide').slideDown();
    });
	
   $(".learnless").click(function(){
         $(this).prev('.slide').addClass('hide');
         $(".learnless").addClass('hide');
         $(".learnmore").removeClass('hide');
         $(this).find('.slide').slideUp();

      


    });
});