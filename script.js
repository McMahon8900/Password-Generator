var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var sym = "!@#$%^&*";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var generatePassword = document.getElementById("generate password");
var yourPassword = document.getElementById("your password");


//console log works to generate random letters
console.log(password(12, char));

//console log works to generate random numbers
console.log(password(12,num));

//console log works to generate random symbols
console.log(password(12,sym));

// cannot get the code correct for it to display

generatePassword.addEventListener("click", function(e){
   var characters = char;
   (numBox.checked) ? characters +- num: '';
   (symBox.checked) ? characters +- sym : '';
   yourPassword.value = password(charNum.value, characters);
});


function password(j, characters) {
    var pwd = '';
    for (var i = 0; i<j; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}