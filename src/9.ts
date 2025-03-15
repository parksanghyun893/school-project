interface Animal {
  name: string;
  sound: string;
}

function greetAnimal(animal: Animal) {
  console.log(`Hello, my name is ${animal.name}`);
  console.log(`I make the sound ${animal.sound}`);
}

const dog = {
  name: "Buddy",
  sound: "Woof!",
};

greetAnimal(dog);
