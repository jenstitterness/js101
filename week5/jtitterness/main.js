$(document).ready(function() {

    var state = $('#stateSelector');
    var city = $('#cityInput');

    $('#submitButton').on('click', function() {
        $.ajax('http://api.wunderground.com/api/c6dc8e785d943109/conditions/q/' +
        state.val() + '/' +city.val() + '.json').done(function(response) {
            console.log(response);

            $('#results').empty().append(response.current_observation.temp_f);
            $('#results').append("<img src='"+response.current_observation.icon_url+"' />");

        })
    });
});


// USE THIS URL FOR THE FORECAST
//http://api.wunderground.com/api/c6dc8e785d943109/forecast/q/CA/San_Francisco.json
