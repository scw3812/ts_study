function helloGeneric<T>(message: T): T {
  return message;
}

helloGeneric(33);
helloGeneric<string>('sdc');

function helloArray<T>(array: T[]): T {
  return array[0];
}

console.log(helloArray(['hello', 'world']));
console.log(helloArray(['hello', 5]));

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

console.log(helloTuple(['hello', 5]));

const helloArrow = <T>(message: T): T => {
  return message;
}
