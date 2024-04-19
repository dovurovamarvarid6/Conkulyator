alert("Assalomu alaykum, siz konkulyatordan foydalanishni hohlaysizmi?");

var a = +prompt("Birinchi sonni kiriting: ");
var oper = prompt("Amalni kiriting: + - * / %");
var b = +prompt("Ikkinchi sonni kiriting: ");

document.write(eval(a + oper + b));