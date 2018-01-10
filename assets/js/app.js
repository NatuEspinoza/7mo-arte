$(document).ready(function() {
  /* llamo al id del button y lo guardo en una variable */
  var searchBtn = $('#searchBtn');
  /* llamo al id del input y lo guardo en una variable */
  var titleFilm = $('#title');

/* creo el evento de click en el boton */
  searchBtn.click(function searchMovie(){
    /* creo una variable que guardara los datos del input */
    var titleText = titleFilm.val();
    //alert('searchMovie ' + titleText);
    /* creo variable en donde guarda la informacion de la data */
    /* que en este caso seria los titulos de peliculas */
    var url = 'http://www.omdbapi.com/?apikey=3a181f1c&s=' + titleText;
    console.log(url);
    $.ajax({
      type: 'GET',
      url: url,
      success: renderMovies,
      error: renderError
    })
  })
  function renderMovies (response){
    //console.log(response);
    var movies = response.Search;
    var resultsUl = $('#results');
    resultsUl.empty();

    for (var i in movies) {
      var movie = movies[i];
      var title = movie.Title;
      var imdbID = movie.imdbID;
      var poster = movie.Poster;

      console.log([title, imdbID, poster]);

      var liMovie = $('<li class="list-group-item"></li>');
      var posterImg = $('<img src="' + poster + '" width="50px"/>');
      liMovie.append(posterImg);
      liMovie.append(title);
      resultsUl.append(liMovie);
      liMovie.click(function renderDetails(){
        console.log('render');
      });
    }

  }
  function renderError (error){
    console.log(error);
  }
})




