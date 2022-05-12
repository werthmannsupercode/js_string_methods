console.log('Hi');

// Lev1_1

let nachName = 'Werthmann'
let vorName = 'Michaela'

console.log(nachName.length);
console.log(vorName.length);

let ism = nachName + vorName;

console.log(ism.length);

// Lev1_2

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf('h'));
console.log(txt.indexOf('Earth'));
console.log(txt.indexOf('Moon'));

// Lev1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(';'));
console.log(txt2.search('green'));
console.log(txt2.search('blue'));

// Lev1_4

let A = 'Sam is going to coding school'

let a = A.slice(0, 3);
let b = A.slice(4, 6);
let c = A.slice(1, 15) + " " + A.slice(23, 29);
let d = A.slice(4, 15) + " " + A.slice(23, 29);
let e = A.slice(23, 29);
let f = A.slice(0, 6) + " " + A.slice(23, 29);


document.write(a + "<br>");
document.write(b + "<br>");
document.write(c + "<br>");
document.write(d + "<br>");
document.write(e + "<br>");
document.write(f + "<br>");
document.write("<br>");

// Lev1_5

let text = 'Sam is back from coding school';

let g = text.substring(0, 3);
let h = text.substring(4, 6);
let i = text.substring(24, 30);
let j = text.substring(0, 6) + " " + text.substring(24, 30);

document.write(g + "<br>");
document.write(h + "<br>");
document.write(i + "<br>");
document.write(j + "<br>");


// Lev1_6

let body = document.getElementById('body');
let text3 = "Sam is working at coding school";

let k = text3.substr(0, 3);
let l = text3.substr(4, 2);
let m = text3.substr(15, 2) + " " + text3.substr(25, 6);
let n = text3.substr(0, 3) + " " + text3.substr(7, 4) + "s " + text3.substr(15, 2) + " " + text3.substr(25, 6);

body.innerHTML = k + "<br>";
body.innerHTML = l + "<br>";
body.innerHTML = m + "<br>";
body.innerHTML = n + "<br>";

// Lev1_7

let text4 = "Sam is good at coding school";

let o = text4.replace('good', 'bad');
let p = text4.replace('Sam', 'Tom');
let q = text4.replace('school', 'tennis');

body.innerHTML = o + "<br>";
body.innerHTML = p + "<br>";
body.innerHTML = q + "<br>";

// Lev1_8

let text5 = "Sam is going to coding school";

let r = text5.toUpperCase();
let s = text5.toLowerCase();
let t = text5.slice(0, 3).toUpperCase() + " is going to " + text5.slice(23, 30).toUpperCase();
let u = text5.slice(0, 3).toLowerCase() + text5.slice(3, 16).toUpperCase() + text5.slice(23, 30).toLowerCase();

body.innerHTML = r + "<br>";
body.innerHTML = s + "<br>";
body.innerHTML = t + "<br>";
body.innerHTML = u + "<br>";

// Erzeuge mit den Methoden "toLowerCase-toUpperCase" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden die du bereits gelernt hast.

// SAM IS GOING TO SCHOOL
// sam is going at school 
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School

// Speichere jedes Ergebnis in einer Variable und verwende innerHTML, um das Ergebnis anzuzeigen.

// Lev1_9

let text6 = "Sam is going to school";
let text7 = "Tom";
let text8 = "programming bike";
let text9 = " and";

let w = text6.concat(text9, " to the movie theater");
let x = text6.replace("school", "movie theater");
let y = text7.concat(text9, " ", text6.replace("is", "are"));
let z = y.replace("school", "gym and to the movie theater");
let aa = z.replace("and Sam are", "is");

body.innerHTML = w;
body.innerHTML = x;
body.innerHTML = y;
body.innerHTML = z;
body.innerHTML = aa;

// Erzeuge mit "concat" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden die du bereits gelernt hast.

// Sam is going to school and to the movie theater
// Sam is going to movie theater
// Tom and Sam are going to school
// Tom and Sam are going to gym and to the movie theater
// Tom is going to school and to the movie theater

// Speichere jedes Ergebnis in einer Variablen und verwende innerHTML, um das Ergebnis anzuzeigen.





