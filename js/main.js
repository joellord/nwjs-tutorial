//Because we have jQuery, we'll use jQuery events for this example
var moment = require("moment");

$(document).on("ready", function() {
    //Add an event listener to the main button
    $("#mainButton").on("click", function() {
        $("#mainDiv").html("Main Button clicked...  This message will go again in 3 seconds");
        setTimeout(function() {
            $("#mainDiv").html("");
        }, 3000);
    });

    $("#mainDiv").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
});