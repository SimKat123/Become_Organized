$(function () {
  
  // Display of day and time at the top of the page
  $('#currentDay').text(dayjs().format("dddd, MMMM DD, YYYY. HH:mm"));
  
  $(".saveBtn").on('click', function (){
  var hours= $(this).attr('id').spilt('hour')[1];
  var trimmer= $(this).siblings('.input').val().trim();
  var lsGet= localStorage.getItem (hours);
  localStorage.setItem(hours, lsGet+ '' + trimmer);
  console.log(hours, trimmer);
});

function currentTime() {
  var time= dayjs().hour();
  console.log(time);
$('.time-block').each(function () {
  var compareTime= parseInt($(this).attr('id').spilt('hour')[1]);
  console.log('time-block', split, time)
if (time > compareTime) {
  $(this).addClass('past');
  $(this).removeClass("present");
  $(this).removeClass("future");
} else if (time < compareTime) {
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
} else {
  $(this).removeClass("past");
  $(this).addClass("present");
  $(this).removeClass("future");
}
})}});











//Comments
//  function saveInput(event) {
//   event.preventDefault();
//   var inputValue = event.target.previousElementSibling.value;
//   var inputKey = event.target.previousElementSibling.id;

//   console.log(inputKey);

//   localStorage.setItem(inputKey, inputValue);
//   textArea.textContent= localStorage.getItem (inputKey);
// }


// saveBtn.forEach
//   .addEventListener("click", saveInput)
// ;

// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//

// TODO: Add code to display the current date in the header of the page.

