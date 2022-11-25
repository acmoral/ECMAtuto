let epic = "Hola como estas \n"+ "otra frase"; //old way
let epic2 = `una frase epica 
ahora es otra frase`; //new way
console.log(epic);
console.log(epic2);
let person = {
    'name': 'oscar',
    'age':32,
    'country':'MX'
};
console.log(person.name,person.age); //old way

let {name,age,country} = person;
console.log(name,age,country); // new way

let team1 = ['oscar','julian','ricardo'];
let team2 = ['valeria','yesica','camila'];

let education = ['david',...team1,...team2];
console.log(education);