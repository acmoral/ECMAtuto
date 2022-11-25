function newFunction(name,age,country){
    var name = name || 'oscar';
    var age = age || 31;
    var country = country || 'MX';
    console.log(name,age,country);
}

// es6
function newFunction2(name='oscar',age=32,country='MX'){
    console.log(name,age,country);
}
newFunction2();
newFunction2('andrea',24,'CO');
let hello ="hello";
let world = "world";
let epicPhrase=hello+' '+world;
console.log(epicPhrase); //old traditional way
console.log(`${hello} ${world}`); // with ecma