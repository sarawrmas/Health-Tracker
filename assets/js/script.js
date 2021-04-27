fetch("https://api.spoonacular.com/recipes/716429/information?apiKey=1010f29a2c0f4171829f1658db29e313&includeNutrition=true.")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });

    fetch("https://wger.de/api/v2/")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    });


// WGER KEY: 73eea4d476af12b2b7d850f419ca2acbf0a6c2c6
// spoonacular key: 1010f29a2c0f4171829f1658db29e313

// https://wger.de/en/user/api-key