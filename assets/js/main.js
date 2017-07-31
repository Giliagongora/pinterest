
$(document).ready(function(){
 	
	$.each(pint, function(i, item){
		var element = ("<a class='modal'  type='button' >" + "<img src=img/" + pint[i].image_url + ">" + "<h2>"
			+pint[i].title + "</h2><h3>" + pint[i].description +"</h3><h5>"+ pint[i].user +"</h5><p>"+ pint[i].hashtag +"</p></a>");
		$("div.conten").append(element);

//		modal();
	})

//var contenido = element;
//var modal = $("a").append($contenido)

});


//type='button'  data-toggle='modal' data-target='#myModal'

/*	//solucionar tema con las imagenes
	
	var container = document.querySelector("conten");
	var msnry = new Masonry(container,{
		itemSelector: ".base"
	});
	
	var $conten = $('.conten'); 
            $conten.imagesLoaded( function() {
            $conten.masonry();
        });
*/

/*$.each(pint,function(i, item){
 		var element = ("<a>" + "<img src=img/" + pint[i].image_url + ">" + "<h3>" +pint[i].title + "</h3></a>");

 		$("div.base").append(element);
 	});


document.write("<h2 style='color:green;' >Busqueda de usuarios</h2>");
res.forEach(function(el){
   document.write( 
    "<div>" + 
      "<p> <strong>Name</strong>: " + el.name  + "</p>" +
      "<p>Street: " + el.address.street + "<br>" + el.address.suite + "<br>" + el.address.city + "<br>" + el.address.zipcode + "</p>" +
    "</div>"
    )})
*/