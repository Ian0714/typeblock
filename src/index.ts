interface human{
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "Ian",
    gender: "male",
    age: 22
}

const sayHi = (person: human): string => {
    return (`hello ${person.name} you are ${person.age} and ${person.gender}!`);
}

console.log(sayHi(person));

export {};