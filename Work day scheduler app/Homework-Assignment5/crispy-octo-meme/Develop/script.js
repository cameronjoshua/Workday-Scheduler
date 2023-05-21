
$(document).ready(function() {
  $("currentDay").text(moment().format("MMMM DD YYYY, h:mm:ss a"));

  $(".saveBtn").on("click", function() {
    console.log(this);
    var userInput = $(this).siblings(".description").val();
    var timeStamp = $(this).parent().attr("id");
    localStorage.setItem(timeStamp, userInput);
  })
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));

  function timeComparison() {
    var timeBlocks = $(".time-block")
     console.log(timeBlocks);

     var currentHour = moment().hour();
    console.log(currentHour);

    timeBlocks.each(function () {
          var id = $(this).attr("id")
       console.log(id);
        
       var blockHour = id.split("-")[1];
      console.log(blockHour)

      if(currentHour < blockHour){
        $(this).addClass("future")
      }
      else if (currentHour === blockHour){
        $(this).addClass("present")
       }
       else {
        $(this).addClass("past")
      }
     })
  }
  timeComparison();
})
