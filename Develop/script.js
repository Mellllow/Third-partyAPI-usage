// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

//jquery
$(document).ready(function(){


// TODO: Add a listener for click events on the save button. 
// This code should use the id in the containing time-block as a key to save the user input in
//local storage. 
//function saveUserimput(){
$(".saveBtn").on('click', function(){
  var key = $(this).parent().attr("id");
  var values = $(this).parent().find(".description").val;
  localStorage.setItem(key,values)
});


  
  
  // TODO: Add code to display the current date in the header of the page.
  function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
  }

setInterval(updateTime, 1000);
})