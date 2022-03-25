$(document).ready(function () {
  // function for when the start quiz button is pressed
  $("button#start-quiz").click(function () {
    $("form").removeClass("hidden");
    $("#start-quiz").addClass("hidden");
    $(".line").removeClass("hidden");
  });

  // function that runs when form is submitted
  $("#submit-btn").click(function () {
    $("form").submit(function (event) {
      event.preventDefault();
      // Hides results after every submission
      $("#result").addClass("hidden");
      $("#error").addClass("hidden");
      //defining variables for question answers
      const end = $("select#which-end").val();
      const reason = $("select#why").val();
      const gopher = $("select#gopher").val();
      const mobile = $("select#mobile").val();
      const apple = $("select#apple").val();

      // checks that all questions are answered
      if (!end || !reason || !gopher || !mobile || !apple) {
        $("#error").removeClass("hidden");
        $("#error-message").text(
          "Please answer every question before submitting."
        );
      } else {
        // if all fields have answers
        let answer = "";
        let img = "";
        if (end === "front") {
          answer = "JavaScript";
          img = "img/javascript.jpg";
        } else if (reason === "fun") {
          answer = "Python";
          img = "img/python.jpg";
        } else if (gopher === "cute") {
          answer = "Go";
          img = "img/go.jpg";
        } else if (mobile === "web") {
          answer = "C#";
          img = "img/c-sharp.jpg";
        } else if (apple === "mac") {
          answer = "Swift";
          img = "img/swift.jpg";
        } else {
          answer = "Java";
          img = "img/java.jpg";
        }
        // display results
        $("#result h2").text(answer);
        $("#result img").attr("src", img);
        $("#result").removeClass("hidden");
      }
    });
  });
});
