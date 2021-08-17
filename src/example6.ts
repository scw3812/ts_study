interface Parent {
  name: string;
}

interface Child extends Parent {
  age: number;
}

const p6: Child = {
  name: 'sdf',
  age: 3
};