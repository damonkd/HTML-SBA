console.log("testing")

function validate() {
    if(document.myForm.fname.value == "" ) {
             alert( "Please provide your first name!" );
             document.myForm.fname.focus() ;
             return false;
          }else{  var NAME = document.getElementById("fname").value;}

          if(document.myForm.lname.value == "" ) {
            alert( "Please provide your last name!" );
            document.myForm.lname.focus() ;
            return false;
         }else{  var LNAME = document.getElementById("lname").value;}
    
         if( document.myForm.email.value == "" || validateEmail()==false) {
             alert( "Please provide a vail Email!" );
             document.myForm.email.focus() ;
             return false;
          }
          if( document.myForm.email.value != "" && validateEmail() == true ) {
             
                  var emailValue = document.getElementById("email").value;
                        
          }


          if( document.myForm.year.value == "" || isNaN( document.myForm.year.value ) ||
          document.myForm.year.value.length != 4 ) {
          alert( "Please provide a date in the format ####." );
          document.myForm.year.focus() ;
          return false;
       }
       else{ var dateid = document.getElementById("year").value;}

         if(document.myForm.password.value == "" ) {
          alert( "Please provide your password" );
          document.myForm.password.focus();
          return false;
       }else{
            var pass = document.getElementById("password").value;
            var model = document.getElementById("model").value;
              alert("First Name: "+ NAME + " ,Last Name: "+ LNAME +", Password: " + pass + ", Email: " + emailValue + " ,Year: " + dateid + " , model: " + model );
            return true;
}
return( true );   }


function validateEmail(){

    //regex expression for email
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(document.myForm.email.value.match(mailformat))
    {
        console.log("valid email")
        return true;
    }
    else{
       return false;
    }
}


function myFunction() {
    const myCollection = document.getElementsByTagName("label");
    for (let i = 0; i < myCollection.length; i++) {
      myCollection[i].style.backgroundColor = "cornflowerblue";
    }}