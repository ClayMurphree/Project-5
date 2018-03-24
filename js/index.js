document.onload = doEverything();

function doEverything() {
  
function myFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className =        x.className.replace("show", ""); }, 3000);
}

  
function inputChecker() {
  document.getElementById("signIn").disabled = true;
}


inputChecker();
myFunction();
}

//$("button-container").disable(function(){
  //when I LEAVE the input box...this occurs
  //test to see if it has an @sign...or now space..
 // $('button').show(); 
  
//});