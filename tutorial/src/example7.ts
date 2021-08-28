class Person7 {
  private _name: string = "dsfs";
  readonly age: number;
  constructor() {
    this.age = 0;
  }
  get name() {
    return this._name
  }
}

console.log(new Person7().name);

console.log(new Person7().age);

class Parent7 {
  private _privateProp: string = ""
  protected protectedProp: string = ""
}

class Child7 extends Parent7 {
  hello(): string {
    this.protectedProp = "protected";
    return this.protectedProp;
  }
}

console.log(new Child7().hello());

class ConstructorExam {
  constructor(public name: string) {}
}

console.log(new ConstructorExam("sdf").name);