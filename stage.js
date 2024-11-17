document.getElementById("insc").addEventListener("submit", function(event)
 {
    event.preventDefault();
  
});
 function validateEmail() {
        var emailInput = document.getElementById('email').value;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var msgr=document.getElementById("msg");
        var nameInput = document.getElementById('nom').value;
        var name=["adel","azer","wissem","nidhal"] ;
        var namsge=document.getElementById("namsg");
        
        
        if (emailRegex.test(emailInput) && name.includes(nameInput)) {
            window.location.href="stagiaaire.html";
        } else if (!emailRegex.test(emailInput)) {
          msgr.innerHTML="  Email is not valid"; 
        }
        else if (!name.includes(nameInput)){
          namsge.innerHTML="name is not valid!";
        }
      }
      
      function signin(){
        window.location.href="sign.html";
      }
      function login(){
        window.location.href="login.html";
      }
      document.getElementById("formss").addEventListener("submit", function(event) {
        event.preventDefault();
      
    });
      var mah=document.getElementById("h2");
      function enzel(){
        window.location.href="congrats.html";
       h2.innerHTML="Success";
      
      }
      function web(){
        window.location.href="web.html";
      }
      function mobile(){
        window.location.href="mobile.html";
      }
      function design(){
        window.location.href="design.html";
      }
      function data(){
        window.location.href="sc.html";
      }
      function profile(){
        window.location.href="userprof.html";
      }

    document.getElementById("formi").addEventListener("submit",function(event){
      event.preventDefault();
    });
    function pot(){
      window.location.href="admin.html";
     }

     function mdopen(){

     }
     function mdclose(){
      
     }
