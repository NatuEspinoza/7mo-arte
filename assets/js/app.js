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