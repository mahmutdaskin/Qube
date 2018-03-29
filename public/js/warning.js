//////////////////////////////////
//
// Button clicks for warning page
//
//////////////////////////////////

// Go back
$("#exit").on("click", function(){
    window.location = "http://127.0.0.1:3000/menu";
});

// Forwards to enter info for measurement
$("#continue").on("click", function(){
    window.location = "http://127.0.0.1:3000/basicInfo";
});