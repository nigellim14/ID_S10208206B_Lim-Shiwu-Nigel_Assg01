// Current Date & Time
const d = new Date();
document.getElementById("date").innerHTML = d;

// Index page button interacting with user
function myFunction() {
    var txt;
    if (confirm("Are you ready to move to the next page and continue to get to know me more?")) {
      txt = "Nice! Now you got proceed to the top navigation to continue know more about me in the the next page";
    } else {
      txt = "Why not? I have some interesting skills that you should know in my skills page!";
    }
    document.getElementById("test").innerHTML = txt;
  }


// Validation for contact form
function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
}

var x = document.forms["myForm"]["comment"].value;
  if (x == "") {
    alert("You have forgotten to filled up the comment section.");
    return false;
  }
}



  