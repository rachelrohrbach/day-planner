$(document).ready(function () {
    var now = moment();//.format('h:mm:ss A');
    var nowMoment = moment().format('dddd, MMMM Do, YYYY');

    var displayMoment = $('#today');
    displayMoment.text(nowMoment);

    //var hours = now.hours();
     var hours = 9;
    //var hours = 10;
    // var hours = 11;
    console.log(hours);

    if ( hours < 9 ) {
        $("#nineoclock").css("background-color", "#90EE90");
    } else if ( hours === 9 ) {
        $("#nineoclock").css("background-color", "#FF6347");
    } else {
        $("#nineoclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 10 ) {
        $("#tenoclock").css("background-color", "#90EE90");
    } else if ( hours === 10 ) {
        $("#tenoclock").css("background-color", "#FF6347");
    } else {
        $("#tenoclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 11 ) {
        $("#elevenoclock").css("background-color", "#90EE90");
    } else if ( hours === 11 ) {
        $("#elevenoclock").css("background-color", "#FF6347");
    } else {
        $("#elevenoclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 12) {
        $("#twelveoclock").css("background-color", "#90EE90");
    } else if ( hours === 12 ) {
        $("#twelveoclock").css("background-color", "#FF6347");
    } else {
        $("#twelveoclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 13) {
        $("#oneoclock").css("background-color", "#90EE90");
    } else if ( hours === 13 ) {
        $("#oneoclock").css("background-color", "#FF6347");
    } else {
        $("#oneoclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 14) {
        $("#twooclock").css("background-color", "#90EE90");
    } else if ( hours === 14 ) {
        $("#twooclock").css("background-color", "#FF6347");
    } else {
        $("#twooclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 15) {
        $("#threeoclock").css("background-color", "#90EE90");
    } else if ( hours === 15 ) {
        $("#threeoclock").css("background-color", "#FF6347");
    } else {
        $("#threeoclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 16) {
        $("#fouroclock").css("background-color", "#90EE90");
    } else if ( hours === 16 ) {
        $("#fouroclock").css("background-color", "#FF6347");
    } else {
        $("#fouroclock").css("background-color", "#D3D3D3");
    }

    if ( hours <= 17) {
        $("#fiveoclock").css("background-color", "#90EE90");
    } else if ( hours === 17 ) {
        $("#fiveoclock").css("background-color", "#FF6347");
    } else {
        $("#fiveoclock").css("background-color", "#D3D3D3");
    }

    // restrict save button click until something is entered in input field
    $('button').on('click', function () {
        var newActivity = $('#nineoclock').text();
        if (newActivity != null &&
            newActivity != undefined &&
            newActivity.length != 0) {

            var addActivity = JSON.parse(localStorage.getItem('addActivity'));

        // first check if there are any existing activity entries
        if (addActivity == null) {
            addActivity = [ 
                {
                    hourOfTheDay: activity
                }
            ];
        } else {
            if (addActivity.length <= 2) {
                var activityEntry = {
                    hourOfTheDay: activity
                
                };

                addActivity.push(activityEntry);
            }
        }
        localStorage.setItem('addActivity', JSON.stringify(addActivity));

    }
});

});