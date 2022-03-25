$(document).ready(function () {
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
      $("error").removeClass("hidden");
      $("#error-message").text(
        "Please answer every question before submitting."
      );
    } else {
      let answer = "";
      let img = "";
    }
  });
});
