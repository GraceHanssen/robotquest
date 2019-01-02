
// pets is an array
// a JS array has some handy methods like filter() or map(), ...
const pets = [
    {name: 'Waffles', type:'dog', age: '12'},
    {name: 'Fluffy', type:'cat', age: '14'},
    {name: 'Spelunky', type:'dog', age: '4'},
    {name: 'Hank', type:'dog', age: '11'}
];


function main() {
    // 'filter' is a higher-order function
    let filterFunction = (pet) => pet.age > 10 && pet.type === 'dog';

    let oldDogs = pets.filter( filterFunction );
    console.log("The result is an array of length: " + oldDogs.length);

    for (let index in oldDogs) {
        console.log(`Element '${index}' has name '${oldDogs[index].name}'. `);
    }
}


function main2() {
    let filterFunction = (pet) => pet.age > 10 && pet.type === 'dog';
    let mapFunction = (pet) => pet.name;

    let oldDogNames = pets.filter( filterFunction ).map( mapFunction );
    console.log("Old dogs' names is also an array: " + oldDogNames);

}

// it starts here ...
{
    main();
    main2();
}