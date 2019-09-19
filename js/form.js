/*
    AJAX request for contact form
*/
jQuery(function ($) {
  $('form').submit(function(event) {
    event.preventDefault();
    var formValid = true;
    $('form input,textarea').each(function() {  
    var formGroup = $(this).parents('.contact-group');
      if (this.checkValidity()) {
        formGroup.addClass('has-success').removeClass('has-error d-none');
      } else {
     	formGroup.addClass('has-error').removeClass('has-success d-none'); 
	    formValid = false;  
      }
        });
      if ( formValid ) {
      var name = $("#first-name").val();
      var name = $("#last-name").val();
      var email = $("#email").val();
      var name = $("#name").val();      
      var message = $("#message").val();
      var formData = new FormData();
      formData.append('first-name', name);
      formData.append('last-name', name);
      formData.append('email', email);
      formData.append('name', name);      
      formData.append('message', message);
      $.ajax({
        type: "POST",
        url: "form.php",
        data: formData,
        contentType: false,
        processData: false,
        cache: false,
	    success : function(data){
 
          var $data =  JSON.parse(data);
          $('#popup-success').text('');
          if ($data.result == "success") {
            $('#popup-success').removeClass('d-none');
          }else{
            $('#popup-error').removeClass('d-none');
          }
        },
        error: function (request) {
          $('#popup-error').removeClass('d-none');
          $('#popup-error').text('request error');   
        }        
      });
	}	 
  });
});