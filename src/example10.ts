class Person10 {
  private static INSTANCE: Person10;
  private constructor() {}

  static getInstance(): Person10 {
    if (Person10.INSTANCE) {
      Person10.INSTANCE = new Person10();
    }
    return Person10.INSTANCE;
  }
}

Person10.getInstance()

// Lazy Lodaing
class PersonSingletone {
  
}

export const person15 = new PersonSingletone();