
$(document).ready(function(){
 	
 	$.each(pint,function(i, item){
 		var element = ("<a>" + "<img src=img/" + pint[i].image_url + "> <br>" + pint[i].title + "</a>" );
 		//var elementos = $("<div>" + pint[1].title "</div>")
 		//	document.write("<br>"+i+" - "+miJSON[i].valor+" - "+miJSON[i].color+" - "+miJSON[i].caracteristica.tipo+" - "+miJSON[i].caracteristica.ref);
 		// var pokeimg = $("<a type='button'  data-toggle='modal' data-target='#myModal'> <img src=https://pokeapi.co/media/img/" + i + ".png id=" + i + "> </a>");
 		$("div.base").append(element);
 	})


})

/*
document.write("<h2 style='color:green;' >Busqueda de usuarios</h2>");
res.forEach(function(el){
   document.write( 
    "<div>" + 
      "<p> <strong>Name</strong>: " + el.name  + "</p>" +
      "<p>Street: " + el.address.street + "<br>" + el.address.suite + "<br>" + el.address.city + "<br>" + el.address.zipcode + "</p>" +
    "</div>"
    )})
*/