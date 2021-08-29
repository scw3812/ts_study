function overloads(arg: string): number;
function overloads(arg: string, another: boolean): string;
function overloads(arg: any, another?: any): any {
  if(typeof arg === 'string') {
    return another ? arg.length : arg.length - 1;
  }
}

console.log(overloads('ssdfsdf'));
console.log(overloads('df', false));