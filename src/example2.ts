interface Person2 {
  name: string;
  age?: number;
}

const p2 = {
  name: 'Mark'
};

const p22 = {
  name: 'ss',
  age: 27
};

function hello2(person: Person2) {
  console.log(`${person.name} is ${person.age ?? -1}`)
}

hello2(p2);