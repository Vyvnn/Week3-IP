
//   $(document.ready(function() {


//   $(document.ready(function() {
//     $("#design-text").css('display','none');

//     $("#design.jpg").hover(function() {

//        $("#design-text",this).fadeIn();

//        }, function() { $('#design-text').fadeOut();
//     });
//  }))

$(document).ready(function () {
  $("#design_pic").click(function () {
    $("#design_pic").hide(1200);
    $("#design").toggle(1200);
    $("#design").show(1200);
  })
  $("#design").click(function () {
    $("#design").hide(1200);
    $("#design_pic").toggle(1200);
    $("#design_pic").show(1200);
  });
});

//$(document).ready(function(){
$("#development_pic").click(function () {
  $("#development_pic").hide(1200);
  $("#development").toggle(1200);
  $("#development").show(1200);
})
$("#development").click(function () {
  $("#development").hide(1200);
  $("#development_pic").toggle(1200);
  $("#development_pic").show(1200);
});
// });


//$(document).ready(function(){
$("#product_pic").click(function () {
  $("#product_pic").hide(1200);
  $("#product").toggle(1200);
  $("#product").show(1200);
})
$("#product").click(function () {
  $("#product").hide(1200);
  $("#product_pic").toggle(1200);
  $("#product_pic").show(1200);
});
//});


//   $(document).ready(function () {
//     $('#portfolios').hover(function () {
//         $(this).animate({ opacity: '1' });
//     },
//         function () {
//             $(this).animate({ opacity: '0' });
//         })
// });


// $(document).ready(function () {
//   $("#work1").hover(function () {
//     // $(this).css("background-color", "white");
//     // }, function(){
//     // $(this).css("background-color", "blank");
//     $(this).text("black");
//   },
//     function () {
//       $(this).last().remove();

//       $(this).show()
//     }

  //   );
  // });
       




// });

