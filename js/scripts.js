jQuery(function ($) {  
$(document).ready(function(){
    $("#section-3 .col-md-4").bind("mouseover.body","p", function (event){
         $('#section-3 .col-md-4:hover').addClass('active');
    });
    $("#section-3 .col-md-4").bind("mouseout.body","div", function (event){
         $('#section-3 .col-md-4').removeClass('active');
    });
    $("footer .col-md-5 .row").bind("mouseover.body","p", function (event){
         $('footer .col-md-5 .row:hover').addClass('active');
    });
    $("footer .col-md-5 .row").bind("mouseout.body","div", function (event){
         $('footer .col-md-5 .row').removeClass('active');
    });
    $(".card-group .card").bind("mouseover.body","p", function (event){
         $('.card-group .card:hover').addClass('active');
        $('.card-group .card.active .image-popup').removeClass('d-none');
        $('.card-group .card.active .image-popup').css({
             width : "100%",
             height : "100%",
             zIndex : "55"
         });
    });
    $(".card-group .card").bind("mouseout.body","div", function (event){
        $('.card-group .card.active').removeClass('active');
        $('.card-group .card .image-popup').addClass('d-none');
        
    });
});
$(function() {     
  $('.image-popup i').click(function(e) {
    e.preventDefault();
    $('#image-modal .modal-body img').attr('src', $('.card').find('img').attr('src'));
    $("#image-modal").modal('show');
  });
  $('#image-modal .modal-body img').on('click', function() {
    $("#image-modal").modal('hide')
  });
});
    
    
$(document).ready(function() {  
    
   $('nav#navbar .navbar-header .navbar-toggler').bind('click', function(event) {
       event.preventDefault();
       $(this).closest('.navbar-toggler').toggleClass('collapsed-active');
       $(this).closest('nav').toggleClass('custom-bg');
    });    
});
$(document).ready(function() { 
        $(".left-menu .left-menu-item a").bind("mouseover","div", function (event){
            $('.left-menu .left-menu-item a:hover').addClass('active');
        });
        $(".left-menu .left-menu-item a").bind("mouseout","div", function (event){
            $('.left-menu .left-menu-item a.active').removeClass('active');
        
        });
    });
$(document).ready(function(){
    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });
}); 
if(window.screen.width < 760){    
    $(document).ready(function(){
        $('.carousel-item.active').removeClass('active');
        $('.carousel-item').removeClass('carousel-item');
        $('.card-wrapper').addClass('carousel-item');
        $('.card-wrapper:first').addClass('active');
    });
}else{
    $(document).ready(function(){
         $(".card-wrapper .col-12").unwrap();
    });
}
});
    
    
    
