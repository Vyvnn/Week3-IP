
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
  $("#work1").hover(
    function () {
      $("#project1").show()
      $(this).css(
        { cursor: "pointer", opacity: "0.71" }
      )

    },
    function () {
      $("#project1").hide()
      $(this).css({ opacity: "1" })
    }
  )

  $("#work2").hover(
    function () {
      $("#project2").show()
      $(this).css(
        { cursor: "pointer", opacity: "0.71" }
      )

    },
    function () {
      $("#project2").hide()
      $(this).css({ opacity: "1" })
    }
  )

  $("#work3").hover(
    function () {
      $("#project3").show()
      $(this).css(
        { cursor: "pointer", opacity: "0.71" }
      )

    },
    function () {
      $("#project3").hide()
      $(this).css({ opacity: "1" })
    }
  )
  $("#work4").hover(
    function () {
      $("#project4").show()
      $(this).css(
        { cursor: "pointer", opacity: "0.71" }
      )

    },
    function () {
      $("#project4").hide()
      $(this).css({ opacity: "1" })
    }
  )

  $("#work5").hover(
    function () {
      $("#project5").show()
      $(this).css(
        { cursor: "pointer", opacity: "0.71" }
      )

    },
    function () {
      $("#project5").hide()

      $(this).css({ opacity: "1" })

    }
  )

  $("#work6").hover(
    function () {
      $("#project6").show()

      $(this).css(
        { cursor: "pointer", opacity: "0.71" })

    },
    function () {
      $("#project6").hide()
      $(this).css({ opacity: "1" })
    }
  )


  $("#work7").hover(
    function () {
      $("#project7").show()
      $(this).css(
        { cursor: "pointer", opacity: "0.71" }
      )

    },
    function () {
      $("#project7").hide()
      $(this).css({ opacity: "1" })
    }
  )

  $("#work8").hover(
    function () {
      $("#project8").show()
      $(this).css(
        { cursor: "pointer", opacity: "0.71" }
      )

    },
    function () {
      $("#project8").hide()
      $(this).css({ opacity: "1" })
    }
  )





});

