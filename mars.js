// 1.
// var x = "John Doe"; 
// function vratiNesto(name) {
//    var x = name;
//    function f() { return x; }
//    return f;
// }
// var y = vratiNesto("Jane Doe");
// var z = vratiNesto()();

// console.log(z);

// function vratiNesto(name) {
//    var x = name;
//    function f() { return x; }
//    return f;
// }

// function vratiNesto(x) {
//    return x;
// };

// var y = vratiNesto;

// var x = y("Hello world");

// console.log(y);
// console.log(x);

// function vratiNesto(x) {
//    var y = x(1);
//    return y;
// };
// function vratiMene(z) {
//    return z/2;
// };

// var y = vratiNesto(vratiMene);
// console.log(y);

// function vratiNesto(x) {
//    return function() {
//       return x;
//    };
// }
// var y = vratiNesto(true)();
// console.log(y);

// var x = "Globalna varijabla";

// function vratiNesto() {
//    function f() {
//       return x;
//    }
//    return f;
// };

// var y = vratiNesto()();


// console.log(y);

// var name1 = "ivan";

// var y = (function vratiNesto(name) {
//       var x = name;
//       function f() { return x; }
//       return f;
//    })(name1);

   
// var osoba = {
//    ime: "Ivan",
//    prezime: "Periša",
//    brojCipela: 16
// };

// var osoba2 = {
//    osoba,
//    visina: 210
// };
// console.log(osoba2.osoba.ime);
// console.log(osoba.brojCipela);

var person = {
   name: "John",
   surname: "Doe",
   <prototype>: Object { ... }
};

console.log(person);

