$(function () {
  // Display of day and time at the top of the page
  $("#currentDay").text(dayjs().format("HH:mm on dddd, MMMM DD, YYYY"));

// Time comparison between current time and event time
    $(".time-block").each(function () {
      var compareTime = parseInt($(this).attr("id").split("-")[1]);
      var time = dayjs().hour();
      if (compareTime < time) {
        $(this).addClass("past");
      } else if (compareTime > time) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var hours = $(event.target).parent().attr("id").split("-")[1];
    var text = $(event.target).siblings(".description").val();
    var lsGet = localStorage.getItem(hours);
    localStorage.setItem(hours, lsGet + text);
    console.log(hours, text);
  });

  function returnInput() {
    var lastInput=$("textarea").text(localStorage.getItem(hours));
    return lastInput
}});