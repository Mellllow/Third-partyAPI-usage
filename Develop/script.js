// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. 
document.getElementById('btn saveBtn col-2 col-md-1').addEventListener('click',saveUserimput());
// This code should use the id in the containing time-block as a key to save the user input in
//local storage. 
//function saveUserimput(){
 localStorage.getItem()
  //};
  function saveUserimput(){
    addEventListener('click', true)
  }
 
  // HINT: What does `this` reference in the click listener function?
  // How can DOM traversal be used to get the "hour-x" id of the
 function hourX(){
  localStorage.setItem("hour-9");
  localStorage.setItem("hour-10");
  localStorage.setItem("hour-11");
  };

  function hourx(){
    console.log("hourx function")
  }
  hourx()
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 // localStorage.getItem("hour-9")
  //localStorage.getItem("hour-10")
  //localStorage.getItem("hour-11")
  //
  // TODO: Add code to display the current date in the header of the page.
  
  //document.getElementById("currentDay") dayjs().format() 
////});
  