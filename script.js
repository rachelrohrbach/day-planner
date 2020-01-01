function setHourColor(currentHour, rowHour) {
    if ( currentHour < rowHour ) {
        $("#time" + rowHour).css("background-color", "#90EE90");
    } else if ( currentHour === rowHour ) {
        $("#time" + rowHour).css("background-color", "#FF6347");
    } else {
        $("#time" + rowHour).css("background-color", "#D3D3D3");
    }
}

function setActivity(hoursOfTheDay, rowHour) {
    $("#time" + rowHour).text(hoursOfTheDay[rowHour]);
}

$(document).ready(function () {
    var hoursOfTheDayStringified = localStorage.getItem("hoursOfTheDay");
    
    var hoursOfTheDay = JSON.parse(hoursOfTheDayStringified);

    if (hoursOfTheDay == null) {
        hoursOfTheDay = {
            9: "", 
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: ""
        };
    }
    
    var keys = Object.keys(hoursOfTheDay);
    for (var i = 0; i < keys.length - 1; i++){
        setActivity(hoursOfTheDay, keys[i]);
    }

    var now = moment();
    var nowMoment = moment().format('dddd, MMMM Do, YYYY');

    var displayMoment = $('#today');
    displayMoment.text(nowMoment);

    var currentHour = now.hours();

    for (var i = 9; i <= 17; i++) {
        setHourColor(currentHour, i);
    }
    
    $('button').on('click', function () {
        var saveId = $(this).attr("id");

        var key = saveId.substring(4);

        var timeId = "time" + key;

        var textAreaInput = $("#" + timeId);

        var activity = textAreaInput.val();

        hoursOfTheDay[key] = activity;

        localStorage.setItem("hoursOfTheDay", JSON.stringify(hoursOfTheDay));
    });

});