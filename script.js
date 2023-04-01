//Part 1
var nickName = "Karl";
var cm = 168;
var Kg = 75.5;

var ft = Math.trunc(cm/30.48);
var inches = Math.trunc(((cm/30.48)-ft)*10);
var lbs = (Kg*2.20462262185);

alert("Name: " +nickName+ "\nHeight: " +ft+ "'" +inches+ "''\nWeight: " +lbs.toFixed(3)+ " lbs");

//Part 2
document.getElementById("firstName");
document.getElementById("secondName");
document.getElementById("age");

var firstName = prompt("first name");
var lastName = prompt("last name");
var age = (2023-prompt("birth year"));

document.write("Hello " +firstName+ " " +lastName+ "! How does it feel to be " +age+ " years old?")

//part 3
if (confirm("Do you want cookies? (Give your information)")==true){
    console.log("Name: " +nickName+ "\nHeight: " +ft+ "'" +inches+ "''\nWeight: " +lbs.toFixed(3)+ " lbs")
}
else{
    console.log("User does not wish to share his/her information.");
}