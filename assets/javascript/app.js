var topics = ["cats"];

var searchTerm = topics[0];

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hntKDD7xWMfeGx2a1zprRXvz8whJ8mSA&q=" + searchTerm + "&limit=10";

$(document).ready(function() {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i <10; i ++){

        // Creating and storing an image tag with attributes that hold the still and animated urls
        var image = $("<img>");
        
        image.addClass("gif");

        image.attr("img-state", "still");

        image.attr("img-still", response.data[i].images.fixed_height_still.url);

        image.attr("img-animate", response.data[i].images.fixed_height.url);

        image.attr("src", response.data[i].images.fixed_height_still.url);

        $("#image-area").prepend(image);
    }

    $(".gif").click(function() {
        var state = $(this).attr("img-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("img-animate"));
          $(this).attr("img-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("img-still"));
          $(this).attr("img-state", "still");
        }
      });
    });
    

});