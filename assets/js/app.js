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

      var liMovie = $('<li class="list-group-item id="lista"></li>');
      var posterImg = $('<img src="' + poster + '" width="70px"/>');
      liMovie.append(posterImg);
      liMovie.append(title);
      resultsUl.append(liMovie);
      liMovie.click(function renderDetails(){
        console.log('render');
        /* aqui debiese ir a otra pagina para ver el thriller */
      });
    }

  }
  function renderError (error){
    console.log(error);
  }
<<<<<<< HEAD
});
=======


/*funcion cambio de login a registro*/

  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });


/**


});

*/

var login = document.getElementById('login-submit');
login.addEventListener('click', function(){
  /*
  *console.log('diste un click');
  */
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
  console.log(username);
  console.log(pasword);
});

>>>>>>> 18723459571093cae23f2a5195e6205152de7493

/*

 * Función para Carrusel
 */
 (function(){
   $('#carousel123').carousel({ interval: 2000 });

   $('.carousel-showsixmoveone .item').each(function(){
     var itemToClone = $(this);

     for (var i=1;i<6;i++) {
       itemToClone = itemToClone.next();

       // wrap around if at end of item collection
       if (!itemToClone.length) {
         itemToClone = $(this).siblings(':first');
       }

       // grab item, clone, add marker class, add to collection
       itemToClone.children(':first-child').clone()
         .addClass("cloneditem-"+(i))
         .appendTo($(this));
     }
   });
 }());
 /*
  * Fin de Función para Carrusel
  */

/*
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?apikey=3a181f1c&s=type",
    dataType: "xml",
    success: function(data) {

        console.log(data);

*/
/*
      $("ul").children().remove();
        $(data).find("MenuCompleto").each( function() {
          var info = '<li>Fecha: ' + $(this).find("FechaString").text() + '</li>';
            $("ul").append(info);
        });
    }
  });
*/



/*
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?apikey=3a181f1c&s=type",
    dataType: "xml",
    success: function(data) {

        console.log(data);

*/
/*
      $("ul").children().remove();
        $(data).find("MenuCompleto").each( function() {
          var info = '<li>Fecha: ' + $(this).find("FechaString").text() + '</li>';
            $("ul").append(info);
        });
    }
  });
*/





/*
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?apikey=3a181f1c&s=type",
    dataType: "xml",
    success: function(data) {

        console.log(data);

*/
/*
      $("ul").children().remove();
        $(data).find("MenuCompleto").each( function() {
          var info = '<li>Fecha: ' + $(this).find("FechaString").text() + '</li>';
            $("ul").append(info);
        });
    }
  });
*/
