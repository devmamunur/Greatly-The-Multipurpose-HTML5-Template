
(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $(document).on('submit','#contact_form_submit',function(e){
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            if (!name) {
                 $('#name').removeClass('error');
                 $('#name').addClass('error').attr('placeholder','Please Enter Name');
             }else{
                 $('#name').removeClass('error');
             }
            if (!email) {
                 $('#email').removeClass('error');
                 $('#email').addClass('error').attr('placeholder','Please Enter Email')
             }else{
                 $('#email').removeClass('error');
             }
            if (!subject) {
                 $('#subject').removeClass('error');
                 $('#subject').addClass('error').attr('placeholder','Please Enter Subject')
             }else{
                 $('#subject').removeClass('error');
             }
            if (!phone) {
                 $('#phone').removeClass('error');
                 $('#phone').addClass('error').attr('placeholder','Please Enter PHone')
             }else{
                 $('#phone').removeClass('error');
             }
            if (!message) {
                 $('#message').removeClass('error');
                 $('#message').addClass('error').attr('placeholder','Please Enter Your Message')
             }else{
                 $('#message').removeClass('error');
             }
             
            
            if ( name && email && message ) {
             	$.ajax({
	                 type: "POST",
	                 url:'contact.php',
	                 data:{
                         'name': name,
                         'email': email,
                         'message': message,
                         'phone': phone,
                         'subject': subject,
	                 },
	                 success:function(data){
                         $('#contact_form_submit').children('.email-success').remove();
                         $('#contact_form_submit').prepend('<div class="alert alert-success email-success">'+data+'</div>');
                         $('#name').val('');
                         $('#email').val('');
                         $('#subject').val('');
                         $('#message').val('');
                         $('#phone').val('');
                         $('.email-success').fadeOut(3000);
                        
	                 },
	                 error:function(res){

	                 }
	             });
             }else{
                $('#contact_form_submit').children('.email-success').remove();
                $('#contact_form_submit').prepend('<div class="alert alert-danger email-success">somenthing is wrong</div>');
                $('.email-success').fadeOut(3000);
                
             }

            
            
        });
    })

}(jQuery));	
