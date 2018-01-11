$(document).ready(function() {
  /* llamo al id del button y lo guardo en una variable */
  var searchBtn = $('#searchBtn');
  /* llamo al id del input y lo guardo en una variable */
  var titleFilm = $('#title');

  /* creo el evento de click en el boton */
  searchBtn.click(function searchMovie() {
    /* creo una variable que guardara los datos del input */
    var titleText = titleFilm.val();
    /* alert('searchMovie ' + titleText); */
    /* creo variable en donde guarda la informacion de la data */
    /* que en este caso seria los titulos de peliculas */
    /*comienzo a consumir la api */
    var url = 'http://www.omdbapi.com/?apikey=3a181f1c&s=' + titleText;
    console.log(url);
    $.ajax({
      type: 'GET',
      url: url,
      success: renderMovies,
      error: renderError
    })
  })

  function renderMovies(response) {
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
      liMovie.click(function renderDetails() {
        console.log('render');
        /* aqui debiese ir a otra pagina para ver el thriller */
      });
    }

  }

  function renderError(error) {
    console.log(error);
  }

  /**
   * Función para filtrar eventos
   *
   */
   $('#btn-prox-events').click(function() {
       $('#prox-events').fadeIn(1000).show();
       $('#my-events').hide();
     });

   $('#btn-my-events').click(function() {
       $('#my-events').fadeIn(1000).show();
       $('#prox-events').hide();
     });

   /**
    * Fin de función para filtrar eventos
    *
    */
observador();
});

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

//api key
 // Initialize Firebase
var config = {
    apiKey: "AIzaSyBdsh0qxbd0g-ktxGCjbYrzI1Ekku7mkHw",
    authDomain: "septimo-arte.firebaseapp.com",
    databaseURL: "https://septimo-arte.firebaseio.com",
    projectId: "septimo-arte",
    storageBucket: "septimo-arte.appspot.com",
    messagingSenderId: "558914481754"
  };
  firebase.initializeApp(config);

  function registrar() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password1').value;
  console.log(email);
  console.log(password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(){
    verificar();
  })
  .catch(function(error) {//si no resulta la creacion de usuario, se captura el error que produce
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  });
};

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification()
  .then(function() {
    // Email sent.
    console.log('enviando correo...');
  }).catch(function(error) {
  // An error happened.
  console.log(error);
  });
};


function ingresar(){
  var email = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {//si no funciona el ingreso de usuario, arroja error existente

  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  console.log(email);
  console.log(password);

  $('body').append('<div id="container1">' + '<a href="profile.html"></a>' + '</div>');
  var url = $('profile.html');
  $(location).attr('href', url);
  });
}

function observador(){
  //observa los cambios de estado de usuario en la página
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('existe usario activo');
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log('****************');
      console.log(user.emailVerified);
      console.log('****************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
    // User is signed out.
    console.log('no existe usuario activo');
    // ...
    }
  });
}


/**


});

*/
/*
var login = document.getElementById('login-submit');
login.addEventListener('click', function() {
  /*
   *console.log('diste un click');
   */
   /*
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  console.log(username);
  console.log(password);
});
*/
/*

 * Función para Carrusel
 */
(function() {
  $('#carousel123').carousel({
    interval: 2000
  });

  $('.carousel-showsixmoveone .item').each(function() {
    var itemToClone = $(this);

    for (var i = 1; i < 6; i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-" + (i))
        .appendTo($(this));
    }
  });
});

/**
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
