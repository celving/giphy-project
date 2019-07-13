var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hntKDD7xWMfeGx2a1zprRXvz8whJ8mSA&limit=10"


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });