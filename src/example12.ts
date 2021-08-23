class Person12<T extends string | number> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

new Person12<string>('sdfs');

interface PersonGeneric {
  name: string;
  age: number;
}

const personGeneric: PersonGeneric = {
  name: 'sdfsdf',
  age: 12
}

type a = keyof PersonGeneric;

function getProperty<T, K extends keyof T>(person: T, key: K): T[K] {
  return person[key];
}

console.log(getProperty(personGeneric, "name"));

function setProperty<T, K extends keyof T>(person: T, key: K, value: T[K]): void {
  person[key] = value;
}

setProperty(personGeneric, 'name', 'changwoo');

console.log(getProperty(personGeneric, "name"));


type PartialPerson = Partial<PersonGeneric>
type ReadonlyPerson = Readonly<PersonGeneric>
type b = Pick<PersonGeneric, 'name'>