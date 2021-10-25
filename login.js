const loginBtn = document.getElementById("login-submit")
loginBtn.addEventListener('click',function(){
   const userEmail = document.getElementById("user-email").value
   const userPass = document.getElementById("user-password").value

   if(userEmail == 'abc@gmail.com' && userPass== '54321mahfuj'){
       window.location.href= 'banking.html'
   }
   else{
       const errorMessage = document.getElementById('error-message')
       errorMessage.style.display='block'
   }
})
