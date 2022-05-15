(function() {
    $( document ).ready(function() {
        $(window).scroll(function () { 

            $('.eclo1').css({
               'top' : -($(this).scrollTop()/2) + "px",
               'right' : -3 - ($(this).scrollTop()/50) + "%"
            }); 

            $('.logo').css({
                'margin-top' : -($(this).scrollTop()/2) + "px",
                'margin-left' : -($(this).scrollTop()/3) + "px"
             }); 
        
         });
    });
})();