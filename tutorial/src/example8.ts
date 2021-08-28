class Parent8 {
  constructor(protected _name: string, protected _age: number) {}
  public hello() {
    console.log(this._name, this._age);
  }
}

class Child8 extends Parent8 {
  _name = "ccc";
}

new Child8("changwoo", 27).hello();