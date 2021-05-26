function random_color()
{
   var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
   color = '#'  //this is what we'll return!
   for(var i = 0; i < 6; i++) 
   {
      x = Math.floor((Math.random()*16))
      color += rgb[x]; 
   }
   return color;
}

$(document).ready(function(){
    $('#large_box').on('click',function(){
      //  alert('you clicked the big box!');  
        $('#large_box').children().css('background-color', random_color());
        $('#large_box').css('background-color', random_color());
 //comenta esto cuando hayas averiguado para qué se utiliza event.stopPropagation 
     })
     
     $('.middle_box').on('click',function(){
       // alert('you clicked the middle box!'); 
        $('.middle_box').parent().css('background-color', random_color());
        event.stopPropagation();
     })

     $('.side_box').on('click',function(){
      //  alert('you clicked the side box!'); 
        $(this).siblings().css('background-color', random_color());
          //evita la propagacion del click a las cajas de mas atras
        event.stopPropagation();
     })

      
    
})