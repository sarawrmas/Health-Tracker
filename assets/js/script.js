// fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=1010f29a2c0f4171829f1658db29e313&includeNutrition=true.")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     });



fetch("https://wger.de/api/v2/exerciseinfo/?language=2")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    for (var i = 0; i < data.results.length; i++) {
            // name of exercise
            var name = data.results[i].name;
            console.log(name);
            // lists muscle category
            var muscle = data.results[i].category.name;
            console.log(muscle);
            // description of the workout
            var description = data.results[i].description;
            console.log(description);
            // lists equipment needed
            if (data.results[i].equipment.length === 1) {
                console.log(data.results[i].equipment[0].name);
            }
            if (data.results[i].equipment.length === 2) {
                console.log(data.results[i].equipment[0].name + "&");
                console.log(data.results[i].equipment[1].name);
            }
            if (data.results[i].equipment.length === 0){
                console.log("No equipment necessary");
            }
    }
    
});


// WGER KEY: 73eea4d476af12b2b7d850f419ca2acbf0a6c2c6
// spoonacular key: 1010f29a2c0f4171829f1658db29e313

// https://wger.de/en/user/api-key

// const response = await fetch("https://wger.de/api/v2", {
//     method: 'GET',
//     headers: {
//         "73eea4d476af12b2b7d850f419ca2acbf0a6c2c6"
//     }
// });