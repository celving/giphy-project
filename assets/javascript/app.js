var topics = ["cats"];

var searchTerm = topics[0];

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hntKDD7xWMfeGx2a1zprRXvz8whJ8mSA&q=" + searchTerm + "&limit=10";

$(document).ready(function() {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Saving the original_still property
        for (var i = 0; i <10; i ++){
        var imageUrl = response.data[i].images.fixed_height_still.url;

        // Creating and storing an image tag
        var image = $("<img>");

        // Setting the image src attribute to imageUrl
        image.attr("src", imageUrl);

        // Prepending the image to the images div
        $("#image-area").prepend(image);
    }

    });

});