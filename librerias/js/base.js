
var Cargar = {
    pagina : function(url,param,div_id){
       // event.preventDefault();
       if(param != ""){        
         $("#" + div_id).load(url,param);
       }else{
         $("#" + div_id).load(url);
       }             
    },
    modal : function(url,param,id_modal,ancho_modal,msg_head){
       
       if(!$("#" + id_modal).attr("data-building")){
           $("#cargar_modal").html(''); //Elimina el modal
           var i = 0;
           
           while(true){
               if(!$("#modal_body_"+i).attr("data-building"))break;
               i++;
           }

           

           if(msg_head == null){
             msg_head = "MENSAJE DE INTERNEWS";
           }

           var modal_dialog  = $("<div/>",{
                                    "class":"modal-dialog modal-lg",
                                    "role" : "document",
                                    "style":"max-width:" + ancho_modal +"%; !important"
                               });
           var modal_content = $("<div/>",{"class":"modal-content"});
           var modal_header  = $("<div/>",{"class":"modal-header","html":msg_head});
           var boton_cerrar  = $("<button/>",{"type":"button","class":"close","data-dismiss":"modal","html":"&times;","onclick":"$('#"+id_modal+"').modal('hide');setTimeout(function(){$('#cargar_modal').html('')},300)"});
           var modal_body    = $("<div/>",{"id":"modal_body_" + i,"class":"modal-body","data-building": true});
           var modal_footer  = $("<div/>",{"class":"modal-footer"});

            //Construye div modal principal
            $("<div/>",{
                "class"           : "modal fade",
                "id"              : id_modal,
                "tabindex"        : "-1",
                "role"            : "dialog",
                "aria-labelledby" : id_modal,
                "aria-hidden"     : true,
                "data-building"   : true
            }).append(modal_dialog
              .append(modal_content              
              .append(modal_header
              .append(boton_cerrar))
              .append(modal_body)
              .append(modal_footer)))         
              .appendTo("#cargar_modal");
       } 
        
      setTimeout(function(event){
           Cargar.pagina(url,param,"modal_body_" + i);
       },100);
        
       setTimeout(function(event){
           $("#"+id_modal).modal({backdrop: 'static', keyboard: false});
       },150); 
    }
}

function getFecha(fecha) {
    var arrMes   = new Array("01","02","03","04","05","06","07","08","09","10","11","12"); 
    var fecha    = new Date(fecha);
          dia    = fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate();
          mes    = fecha.getMonth();
          ano    = fecha.getFullYear();
    return dia + '/' + arrMes[mes] + '/' + ano;
}

function getHora(fecha){
    var fecha  = new Date(fecha);        
        hora   = fecha.getHours() < 10 ? "0" + fecha.getHours() : fecha.getHours();
        minuto = fecha.getMinutes() < 10 ? "0" + fecha.getMinutes() : fecha.getMinutes(); 
    return hora + ':' + minuto;
}