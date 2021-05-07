
document.getElementById("myBtn").addEventListener("click", btnclick);

function btnclick() {
    var person = prompt("Hey, What's your name?", "Please enter your name");

    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    } 
      document.getElementById("text").innerHTML = txt;
}

document.getElementsByClassName("hover").addEventListener("mouseover").style