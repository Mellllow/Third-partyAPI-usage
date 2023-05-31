//jquery
$(document).ready(function(){


//save button into local storage
$(".saveBtn").on('click', function(){
  const key = $(this).parent().attr("id");
  const values = $(this).parent().find(".description").val();
  localStorage.setItem(key,values);
});

// to get from local storage
$('.time-block').each(function(){
  const key = $(this).attr('id');
  const value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});
  
  
 //header time
  function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
  }
  function colorChange(){
    $(".time-block").each(function(){
      const blockHour = parseInt(this.class);
      if (blockHour === hourPresent) {
        $(this).removeClass('future past').addClass('present');
      } else if (blockHour < hourPresent) {
        $(this).removeClass('present future').addClass('past');
      } else {
        $(this).removeClass('present past').addClass('future');
      }
    });
  }
currentDate();
currentTime();
colorChange();
setInterval(updateTime, 1000);
})