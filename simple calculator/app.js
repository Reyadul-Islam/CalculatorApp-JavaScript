function add(a, b) {
    return a + b;
}
console.log(add(10, 15));
var names = ['HM Nayem', 'Shefufa Taranjum', 'Twinkle Cats', 'Abir Azim', 'Jubel Ahmed', 'AI Rafi'];

function traverse(names, callback) {
    for (var i = 0; i < names.length; i++) {
        callback(names[i]);
    }

}
traverse(names, function(name) {
    console.log(name.toUpperCase());
})







/*names.forEach(function(name) {
    var n = name.toLocaleUpperCase();
    console.log(n);
});*/

/*function operation(a, b, callback) {
    var c = a + b;
    var d = a - b;
    callback(c, d);
}

function print(c, d) {
    console.log(c, d);
}

function multiply(c, d) {
    console.log(c * d);
}
operation(10, 5, print);
operation(10, 5, multiply);*/
function sayName(name) {
    return 'Hello,' + name;
}
var a = sayName('Reyadul');
console.log(a);

function Constructor(name, author, price) {
    this.name = name;
    this.author = author;
    this.price = price;

}
var result = new Constructor('Java', 'Bozlur Rahman', 320);
console.log('Name:' + result.name + 'Author:' + result.author + 'Price' + result.price);
var person = {
    name: 'Reyadul',
    print: function() {
        setTimeout(function() {
            console.log('Function Called');

        }, 2000);
    }
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.hello = function() {
    console.log('Name:' + this.name);
}
var p1 = new Person('Reyadul', 24);
var p2 = new Person('Shanto', 25);
console.log(p1);
console.log(Person.prototype);