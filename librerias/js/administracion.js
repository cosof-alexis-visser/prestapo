var Publicacion = {
	programar : function(id_noticia){
		url   = "../app/adm/pub";	
		Cargar.modal(url,{'id_noticia': id_noticia},"modal_programador",30,"PROGRAMAR PUBLICACION");
	},
	publicar : function(){
		var id_noticia = $("#id_noticia").val();
		var fc_desde   = $("#fc_desde").val();
		var fc_hasta   = $("#fc_hasta").val();
		var mensaje    = "";

		if($("#fc_desde").val().length == 0 || $("#fc_hasta").val().length == 0){
		    $("#fc_desde").addClass("error");
		    mensaje += "* Debe indicar fecha de publicación</br>";
		}else{
		    $("#fc_desde").removeClass("error");
		}

	    if($("#fc_hasta").val().length == 0){    
	        $("#fc_hasta").addClass("error");
	        mensaje += "* Debe indicar fecha de expiración de la publicación</br>";
	    }else{
	        $("#fc_hasta").removeClass("error");
	    }
	    if(mensaje == ""){	    
	    	$("#modal_programador").modal("hide");
			$.post("../app/adm/ctrl/procesar",{"id_noticia":id_noticia,"fc_desde":fc_desde,"fc_hasta":fc_hasta,"accion":"publicar"},function(response){
				if(response.error == true){
					url   = "../app/error";
					Cargar.modal(url,{msg:response.mensaje},"modal_error",25,"ERROR AL INTENTAR PUBLICAR...");				
				}else{
					url   = "../app/exito";
					Cargar.modal(url,{msg:response.mensaje},"modal_exito",25,"EXITO!!!!");
					setTimeout(function(){
	   					$("#modal_exito").modal("hide");
	   					location.reload();
	   					url   = "../app/procesar";
	   					Cargar.modal(url,{msg:"Un momento por favor"},"modal_proceso",25,"ACTUALIZANDO...");
	   				},5000)
				}
			},'json');
	    }		
	},
	expirar : function(id_noticia){
		$.post("../app/adm/ctrl/procesar",{"id_noticia":id_noticia,"accion":"expirar"},function(response){
			if(response.error == true){
				url   = "../app/error";
				Cargar.modal(url,{msg:response.mensaje},"modal_error",25,"ERROR AL INTENTAR EXPIRAR...");				
			}else{
				url   = "../app/exito";
				Cargar.modal(url,{msg:response.mensaje},"modal_exito",25,"EXITO!!!!");
				setTimeout(function(){
   					$("#modal_exito").modal("hide");
   					location.reload();
   					url   = "../app/procesar";
   					Cargar.modal(url,{msg:"Un momento por favor"},"modal_proceso",25,"ACTUALIZANDO...");
   				},5000)
			}
		},'json');
	},
	eliminar : function(id_noticia){
		$.post("../app/adm/ctrl/procesar",{"id_noticia":id_noticia,"accion":"eliminar"},function(response){
			if(response.error == true){
				url   = "../app/error";
				Cargar.modal(url,{msg:response.mensaje},"modal_error",25,"ERROR AL INTENTAR ELIMINAR...");				
			}else{
				url   = "../app/exito";
				Cargar.modal(url,{msg:response.mensaje},"modal_exito",25,"EXITO!!!!");
				setTimeout(function(){
   					$("#modal_exito").modal("hide");
   					location.reload();
   					url   = "../app/procesar";
   					Cargar.modal(url,{msg:"Un momento por favor"},"modal_proceso",25,"ACTUALIZANDO...");
   				},5000)
			}
		},'json');
	}
}



