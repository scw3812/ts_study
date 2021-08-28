let myName = 'mark';
const myAge = 26;

function add(a: number) {
  console.log(a + 10);
}

add(myAge);

let tu: [string, number] = ['hi', 1];

function leakingAny(val: any) {
  let a: number = val.num;

  return a;
}

leakingAny({num: 3});