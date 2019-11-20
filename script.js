var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var num = "1234567890";
var sym = "!@#$%^&*";

var generatePassword = document.getElementById("generate_password");
var yourPassword = document.getElementById("your_password");
var characters;


generatePassword.addEventListener("click", function(){
    var numBox = document.getElementById("num");
    var symBox = document.getElementById("sym");
    var charNum = document.getElementById("charNum");

   (numBox.checked) ? char += num: '';
   (symBox.checked) ? char += sym : '';

    var password = generate_password(charNum.value, char);
    document.getElementById("your_password").value = password;

});


function generate_password(j, char) {
  var pwd = '';
    for (var i = 0; i<j; i++) {
    pwd += char.charAt(Math.floor(Math.random() * char.length));
    }
    return pwd;
}