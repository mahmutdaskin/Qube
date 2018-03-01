/*********************************
/ THIS FILE IS USED FOR BOTH
/   bloodPressure.ejs
/         AND
/   bloodPressureResults.ejs 
/*********************************/


$("#back").on("click", function(){
    window.location = "http://127.0.0.1:3000/menu";
});

$("#next").on("click", function(){
    window.location = "http://127.0.0.1:3000/bloodPressureResults";
});

$("#return").on("click", function(){
    window.location = "http://127.0.0.1:3000/bloodPressure";
});

$("#finish").on("click", function(){
    window.location = "http://127.0.0.1:3000/";
});