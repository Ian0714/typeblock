const name = "Me", age = 21, gender= "male";

const sayHi = (name, age, gender?) => {
    console.log(`hello ${name} you are ${age} and ${gender}`);
}

sayHi(name, age);

export {};