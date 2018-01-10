$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?apikey=3a181f1c&s=type",
    dataType: "xml",
    success: function(data) {

        console.log(data);


/*
      $("ul").children().remove();
        $(data).find("MenuCompleto").each( function() {
          var info = '<li>Fecha: ' + $(this).find("FechaString").text() + '</li>';
            $("ul").append(info);
        });
    }
  });
*/
};
});

/**
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
 /**
  * Fin Función para Carrusel
  */

});
