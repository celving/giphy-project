
var topics = ["cats", "dogs", "birds", "fish", "cows", "frogs", "lizards", "sheep", "camels", "snakes", "whales"];


function generateButtons() {


  for (var j = 0; j < topics.length; j++) {
    var button = $("<button class='btn btn-secondary m-1'>")

    button.text(topics[j]);

    button.attr("search-term", topics[j]);

    button.addClass("search-button");

    $("#button-area").append(button);

  };
};

function newButton() {
  var button = $("<button class='btn btn-secondary m-1'>")

  var newTerm = $("#button-input").val().trim().toLowerCase();

  button.text(newTerm);

  button.attr("search-term", newTerm);

  button.addClass("search-button");

  $("#button-area").append(button);
}

generateButtons();

$("#submit").on("click", function () {

  event.preventDefault();

  newButton();

  $("#button-input").val("");
});


$("#button-area").on("click", ".search-button", function () {

  console.log("hello")

  $("#image-area").empty();

  var searchTerm = $(this).attr("search-term")

  console.log(searchTerm);

  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hntKDD7xWMfeGx2a1zprRXvz8whJ8mSA&q=" + searchTerm + "&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {


    console.log(response);
    for (var i = 0; i < 10; i++) {

      if (response.data[i].rating !== "r" && response.data[i].rating !== "pg-13") {

        var gifArea = $("<div class='float-left p-2'>");

        var image = $("<img>");

        image.addClass("gif");

        image.attr("img-state", "still");

        image.attr("img-still", response.data[i].images.fixed_height_still.url);

        image.attr("img-animate", response.data[i].images.fixed_height.url);

        image.attr("src", response.data[i].images.fixed_height_still.url);

        var rating = response.data[i].rating;

        var title = response.data[i].title;

        var p = $("<p>").text(title + " | Rating: " + rating);

        gifArea.append(image);

        gifArea.append(p);

        $("#image-area").prepend(gifArea);
      };
    };

    //function to start/stop gifs//
    $(".gif").on("click", function () {
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