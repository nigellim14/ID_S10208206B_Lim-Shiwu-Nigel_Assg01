const d = new Date();
document.getElementById("date").innerHTML = d;

function myFunction() {
    var txt;
    if (confirm("Are you ready to move to the next page and continue to get to know me more?")) {
      txt = "Nice! Now you got proceed to the top navigation to continue know more about me in the the next page";
    } else {
      txt = "Why not? I have some interesting skills that you should know in my skills page!";
    }
    document.getElementById("test").innerHTML = txt;
  }
