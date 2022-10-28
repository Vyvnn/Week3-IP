// $( "design" ).hover(
//     function() {
//       $( this ).addClass( "hover" );
//     }, function() {
//       $( this ).removeClass( "hover" );
//     }
//   );


  $(document.ready(function() {
    $("#design-text").css('display','none');
    
    $("#design.jpg").hover(function() {
       
       $("#design-text",this).fadeIn();
             
       }, function() { $('#design-text').fadeOut();
    });
 }))
 