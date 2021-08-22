abstract class AbstractClass {
  abstract hello(): void
}

class Person9 extends AbstractClass {
  hello() {
    console.log('hello');
  }
}

new Person9().hello();