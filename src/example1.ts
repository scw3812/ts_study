interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1) {
  console.log(`hello, ${person.name}`);
}

hello1({ name: 'changwoo', age: 27 });