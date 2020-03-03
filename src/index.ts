class human{
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const ian = new human("Ian", 21, "male")

const sayHi = (person: human): string => {
    return (`hello ${person.name} you are ${person.age} and ${person.gender}!`);
}

console.log(sayHi(ian));

export {};