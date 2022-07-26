   scrollTop.onclick = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      
      })
   
   }

$(document).ready(function () {
   /*========scrollt-op-btn=========*/
   
/*this is slide refers to showcase*/
   $(".showcase-box").slick({
   
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2500,
      prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa  fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>", 
      
      responsive: [
         {
            breakpoint: 991,
               settings:{
               slidesToScroll: 2, 
               slidesToShow: 2,
            
               }
         
         
         },
         {
            breakpoint: 768,
            settings: {
               slidesToScroll: 1,
               slidesToShow: 1,
            
            }
         
         
         },
      
      
      ]
      
      
   });

   /*this is slide belongs to team*/
  
   $(".slide-team").slick({

      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      dots: true,
   })
    
   /*dots changes*/
   $('#slick-slide-control10').html('<i class="fas fa-adjust"></i>');
   $("#slick-slide-control11").html('<i class="fas fa-adjust"></i>');
   $("#slick-slide-control12").html('<i class="fas fa-adjust"></i>');
   $("#slick-slide-control13").html('<i class="fas fa-adjust"></i>');
   $("#slick-slide-control14").html('<i class="fas fa-adjust"></i>');
   $("#slick-slide-control15").html('<i class="fas fa-adjust"></i>');
   
   
   /*=====partner-slide======*/
   $(".partner-slide").slick({
      slidesToScroll: 3,
      slidesToShow: 5,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1920,
            settings:{
               slidesToScroll: 3,
               slidesToShow: 6,
            }  
         },   

         {
            breakpoint: 1680,
            settings: {
               slidesToScroll: 2,
               slidesToShow: 6,
            }
         
         },
         {
            breakpoint: 1480,
            settings: {
               slidesToScroll: 2,
               slidesToShow: 5,
            }
         
         },
         {
            breakpoint: 991,
            settings: {
               slidesToScroll: 3,
               slidesToShow: 4,
            
            }
         },
         
         {
            breakpoint: 768,
            settings: {
               slidesToScroll: 2,
               slidesToShow: 3,
            
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToScroll: 3,
               slidesToShow: 3,
            
            }
         },
         
         {
            breakpoint: 480,
            settings: {
               slidesToScroll: 2,
               slidesToShow: 2,
               autoplay: true,
               autoplaySpeed: 2000,
            }
         },
      ]
   
   })
   
   /*=======nav-bar=========*/
  
   $('#navButton').click(function () {

      $('#navOpen').slideToggle();

   })
   $('#navClose').click(function () {
      $('#navOpen').fadeOut(300);
   
   
   });


   /*=======profile=======*/
   
   $('#personInfo').click(function () {

      $('#profileDrop').toggle();
   })  
   
  
   
   


})