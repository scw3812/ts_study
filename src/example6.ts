interface Parent {
  name: string;
  [index: string]: string | number; 
}

interface Child extends Parent {
  age: number;
}

const p6: Parent = {
  name: 'sdf',
  age: 3
};