const person = {
    name: "Rachit",
    age: 31,
    location: {
        city: "Bengaluru",
        temp: 25
    }
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);




const address = [
    'ABC Address',
    'Bengaluru',
];

const [, city, state = 'Delhi'] = address;

console.log(`You are in ${city}, ${state}`);