$(document).ready(function () {
  $("#design_pic").click(function () {
    $(this).hide();
    $("#design").toggle().show();
  });
  $("#design").click(function () {
    $(this).hide();
    $("#design_pic").toggle().show();
  });

  $("#development_pic").click(function () {
    $(this).hide();
    $("#development").toggle().show();
  });
  $("#development").click(function () {
    $(this).hide();
    $("#development_pic").toggle().show();
  });

  $("#product_pic").click(function () {
    $(this).hide();
    $("#product").toggle().show();
  });
  $("#product").click(function () {
    $(this).hide();
    $("#product_pic").toggle().show();
  });
  $("#work1").hover(
    function () {
      $("#project1").show();
      $(this).css({ cursor: "pointer" });
    },
    function () {
      $("#project1").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work2").hover(
    function () {
      $("#project2").show();
      $(this).css({ cursor: "pointer" });
    },
    function () {
      $("#project2").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work3").hover(
    function () {
      $("#project3").show();
      $(this).css({ cursor: "pointer" });
    },
    function () {
      $("#project3").hide();
      $(this).css({ opacity: "1" });
    }
  );
  $("#work4").hover(
    function () {
      $("#project4").show();
      $(this).css({ cursor: "pointer" });
    },
    function () {
      $("#project4").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work5").hover(
    function () {
      $("#project5").show();
      $(this).css({ cursor: "pointer" });
    },
    function () {
      $("#project5").hide();

      $(this).css({ opacity: "1" });
    }
  );

  $("#work6").hover(
    function () {
      $("#project6").show();

      $(this).css({ cursor: "pointer" });
    },
    function () {
      $("#project6").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work7").hover(
    function () {
      $("#project7").show();
      $(this).css({ cursor: "pointer" });
    },
    function () {
      $("#project7").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#work8").hover(
    function () {
      $("#project8").show();
      $(this).css({ cursor: "pointer"});
    },
    function () {
      $("#project8").hide();
      $(this).css({ opacity: "1" });
    }
  );

  $("#the_form").submit(function () {
    alert("Hello!,Message well received.We shall revert shortly. Thank you .");
  });
});
