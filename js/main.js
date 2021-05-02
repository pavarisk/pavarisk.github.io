


//Arrays//
var books = ["Dictionary", "Harry Potter", "1984", "Skullduggery Pleasant"];
//object//
var me = {
    "firstName": "Pavaris",
    "lastName": "Kakanat",
    "age": 26,
};
//accessing Arrays//
console.log(books);
//accessing specific Arrays//
console.log(books[0] + ", " + books[3]);
//accessing Object//
console.log(me);
//accessing specific Object property//
console.log(me.firstName + " " + me.lastName)



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