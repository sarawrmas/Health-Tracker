fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=1010f29a2c0f4171829f1658db29e313&includeNutrition=true.")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });



    // WORKOUT DIV

var i = 0;

function displayWorkouts() {
    fetch("https://wger.de/api/v2/exercise/?language=2&" + $("#equipment").val() + "&" + $("#category").val())
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            i++;

            if (data.results.length === 0) {
                $("#exerciseDisplay").html("<p>No matches found. Try different criteria.</p>");
                return;
            }
            if (data.results.length === i) {
                $("#exerciseDisplay").html("<p>No more for this category</p>");
                return;
            }

            var equipVal = $("#equipment").val();
            var catVal = $("#category").val();
            console.log(equipVal);
            console.log(catVal);

            $("#muscleDisplay").html("<h3>Workout Type: </h3>" + data.results[i].category);
            $("#nameDisplay").html("<h2>" + data.results[i].name + "</h2>");
            $("#descriptionDisplay").html("<h3>Description: </h3>" + data.results[i].description);
            
            if (data.results[i].equipment.length === 0) {
                $("#equipmentDisplay").html("<h3>Equipment needed:</h3> N/A");
            }
            if (data.results[i].equipment.length === 1) {
            $("#equipmentDisplay").html("<h3>Equipment needed: </h3>" + data.results[i].equipment[0]);
            }
            if (data.results[i].equipment.length === 2) {
                $("#equipmentDisplay").html("<h3>Equipment needed: </h3>" + data.results[i].equipment[0] + " and " + data.results[i].equipment[1]);
            }
            
        })
}

$("#nextWorkout").click(function() {
    displayWorkouts();
})

    fetch("https://wger.de/api/v2/exercise")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    });


// WGER KEY: 73eea4d476af12b2b7d850f419ca2acbf0a6c2c6
// spoonacular key: 1010f29a2c0f4171829f1658db29e313


//, {
//     method: 'GET',
//     headers: {'Authorization': 'Token 73eea4d476af12b2b7d850f419ca2acbf0a6c2c6'}
// }