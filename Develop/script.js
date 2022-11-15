$(function () {
  // Display of day and time at the top of the page
  $("#currentDay").text(dayjs().format("HH:mm on dddd, MMMM DD, YYYY"));

  function currentTime() {
    var currentTime = dayjs().hour('HH');
    console.log(time);
    $(".time-block").each(function () {
      var compareTime = parseInt($(this).attr("id").split("hour")[1]);
      if (currentTime > compareTime) {
        $(this).addClass(".past");
        $(this).removeClass(".present");
        $(this).removeClass(".future");
      } else if (currentTime < compareTime) {
        $(this).removeClass(".past");
        $(this).removeClass(".present");
        $(this).addClass(".future");
      } else {
        $(this).removeClass(".past");
        $(this).addClass(".present");
        $(this).removeClass(".future");
      }
    });
  }

  $(".saveBtn").on("click", function () {
    var hours = $(this).parent().attr("id").split("hour")[1];
    var trimmer = $(this).siblings(".description").val().trim();
    var lsGet = localStorage.getItem(hours);
    localStorage.setItem(hours, lsGet + "" + trimmer);
    console.log(hours, trimmer);
    $('.description').text(localStorage.getItem(trimmer));

    //function is not working
  });
});

//Comments
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. 
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

