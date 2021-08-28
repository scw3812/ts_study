interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

const p3: Person3 = {
  name: 'changwoo',
  gender: ['M', 'F']
};