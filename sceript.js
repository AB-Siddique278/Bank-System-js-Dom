document.getElementById('submit-button').addEventListener('click',function(){
    //For user Email
   const emailfield = document.getElementById('user-email');
   const userEmail =emailfield.value;
   

   //for password
   const passwordfield = document.getElementById('user-password');
   const userpassword = passwordfield.value;
   
    // Check email and Password
   if(userEmail == 'admin@gmail.com' && userpassword == 'admin12345'){
      window.location.href = 'banking.html';
   }


});

