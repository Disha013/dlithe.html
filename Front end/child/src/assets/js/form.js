 type="text/javascript">
  function registration()
{

   var name= document.getElementById("t1").value;
   var phonenumber= document.getElementById("t2").value;
   

   
   if(name=='')
   {
       alert('Please enter your name');
   }
   else if(!letters.test(name))
   {
       alert('Name field required only alphabet characters');
   }
   else if(phonenumber=='')
   {
       alert('Please enter your user phonenumber');
   }
   else if (!filter.test(phonenumber))
  

   else
   {                                           
          alert('Thank You for Registration & You are Redirecting to Website');
         
          page.location = "feb11.html"; 
   }
}


