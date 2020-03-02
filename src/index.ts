const name = "Me", age = 21, gender= "male";

const sayHi = (name:string, age:number, gender:string): string => {
    return (`hello ${name} you are ${age} and ${gender}`);
}

console.log(sayHi("Me", 222, "male"));

export {};