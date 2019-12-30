$(document).ready(function () {
    moment().format();
    var now = moment().format('MMMM Do YYYY');

    $('#today').val(now);

});




// Looping through day of week array to display correct date at top of page 
// for (var i = 0; i < weekday.length; i++) {
//    moment().weekday(Number);
// }
