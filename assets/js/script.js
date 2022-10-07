
$(document).ready(function(){

    //obtains current date and appends it to the page
    var currentDate = new Date().toDateString();
    $("#currentDay").text(currentDate);

    var currentHour = new Date().getHours();

    for(var i=9; i <18; i++){
        //Var to control color of the time slot with if statements
        var colorKey = "";
        if(i<currentHour){
            colorKey = "past"
        };
        if(i>currentHour){
            colorKey = "future"
        };
        if(i == currentHour){
            colorKey = "present"
        };
        //end var and statements to control color of timeslot

        //Dynamically creates elements on the page
        var row = $("<div>").addClass("row time-block").attr("id", i);
        var hour = $("<div>").addClass("col-2 hour").text(i);
        var textArea = $("<textarea>").addClass("col-8 description " + colorKey).val(localStorage.getItem(i));
        var icon = $("<i>").addClass("fas fa-save");
        
        //var and function to save to local storage via the button
        var saveButton =$("<button>").attr("id",i).addClass("col-2 saveBtn btn btn-primary")
        .click(function(){
            var hourKey = $(this).attr("id");
            var activity = $(this).siblings(".description").val()
            localStorage.setItem(hourKey,activity);


        })


        //appends all elements of row to page
        $(".container").append(row.append(hour,textArea,saveButton.append(icon)));
    }



});