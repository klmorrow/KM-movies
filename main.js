console.log('connected');
$('#search').click(fetchMovie)

function fetchMovie() {
  event.preventDefault();
  var movieName = $('#movie-name').val()
  $.ajax({
    method: "get",
    url: "http://www.omdbapi.com",
    data: { s: movieName, apikey: '2f6435d9' }
  }).done(function(data) {
    $('#results').text('');
    var movies = data.Search
    movies.forEach(function(movie) {
      var $h2 = $('<h2>').text(movie.Title)
      var $img = $('<img>').attr('src', movie.Poster)
      var $li = $('<li>').append($h2).append($img)
      $('#results').append($li)
    })
  })
}
