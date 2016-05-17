$(document).ready(function() {
    // custom code here

    var counter = 0;

    var clickTimes = [];

    $('#addTodoButton').on('click', function(event) {

        var timestamp = new Date();

        clickTimes.push(timestamp);

        counter += 1;

        console.log('clicks: ' + counter + " clickTimes:" + clickTimes);

    });



});
