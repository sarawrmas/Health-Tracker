var i = 0;

$("#generateEquipment").click(function() {
    var equipmentValue = $("#equipment").val();
    console.log(equipmentValue);
    if (equipmentValue === "dumbbell") {
        displayWorkouts();
    }
})

var equipmentArray = [
    {1: "Barbell"},
    {2: "SZ Bar"},
    {3: "Dumbbell"},
    {4: "Gym Mat"},
    {5: "Swiss Ball"},
    {6: "Pull-Up Bar"},
    {7: "None"},
    {8: "Bench"},
    {9: "Incline Bench"},
    {10: "Kettlebell"}
]

var muscleArray = [
    {8: "Arms"},
    {9: "Legs"},
    {10: "Abs"},
    {11: "Chest"},
    {12: "Back"},
    {13: "Shoulders"},
    {14: "Calves"}
]

function displayWorkouts() {
    fetch("https://wger.de/api/v2/exercise/?language=2&equipment=3")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            i++;
            $("#nameDisplay").html("<h2>" + data.results[i].name + "</h2>");
            $("#muscleDisplay").html("Category: " + data.results[i].category);
            $("#equipmentDisplay").html("Equipment needed: " + data.results[i].equipment[0]);
            $("#descriptionDisplay").html("Description: " + data.results[i].description);
        })
}

$("#nextWorkout").click(function() {
    displayWorkouts();
})


$("#generateCategory").click(function() {
    console.log($("#category").val());
})

// fetch("https://wger.de/api/v2/exerciseinfo/?language=2")
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data.results);
    // document.getElementById("nameDisplay").innerHTML = "<h2>" + data.results[2].name + "</h2>";
    // document.getElementById("muscleDisplay").innerHTML = "Category: " + data.results[2].category.name;
    // document.getElementById("equipmentDisplay").innerHTML = "Equipment needed: " + data.results[2].equipment[0].name;
    // document.getElementById("descriptionDisplay").innerHTML = "Description: " + data.results[2].description;
    // for (var i = 0; i < data.results.length; i++) {
            // name of exercise
            // var name = data.results[i].name;
            // console.log(name);
            // // lists muscle category
            // var muscle = data.results[i].category.name;
            // console.log(muscle);
            // // description of the workout
            // var description = data.results[i].description;
            // console.log(description);
            // lists equipment needed
            // if (data.results[i].equipment.length === 0 ||
            //     data.results[i].equipment.length === 1 &&
            //     data.results[i].equipment[0].name === "none (bodyweight exercise)"){
            //     console.log("No equipment necessary");
            // }
            // if (data.results[i].equipment.length === 1) {
            //     console.log(data.results[i].equipment[0].name);
            // }
            // if (data.results[i].equipment.length === 2) {
            //     console.log(data.results[i].equipment[0].name + "&");
            //     console.log(data.results[i].equipment[1].name);
            // }
    // }
    
// })
// .catch((error) => {
//     console.error('Error:', error);
// });


// WGER KEY: 73eea4d476af12b2b7d850f419ca2acbf0a6c2c6
// spoonacular key: 1010f29a2c0f4171829f1658db29e313


//, {
//     method: 'GET',
//     headers: {'Authorization': 'Token 73eea4d476af12b2b7d850f419ca2acbf0a6c2c6'}
// }