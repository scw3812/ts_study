interface Person4 {
   name: string;
   hello(age: number): void;
}

const p41: Person4 = {
  name: 'Mark',
  hello: function(age: number) {
    console.log(this.name, age);
  }
};

const p42: Person4 = {
  name: 'Mark',
  hello(age: number) {
    console.log(this.name, age);
  }
};

const p43: Person4 = {
  name: 'changwoo',
  hello: (age: number) => {
    console.log(p43.name, age);
  }
};

p41.hello(24);
p42.hello(24);
p43.hello(24);