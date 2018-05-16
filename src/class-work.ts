// interface IAccount {
//   firstName: string;
//   age: number;
// }
//
// let account = IAccount;


// let account = {
//   firstName: 'Igor',
//   age: 32
// }
// let person: typeof account;
//
// person = {
//   firstName: 'Igor',
//   age: 32
// }

// let a: void = undefined;

// const account: {
//   readonly firstName: string;
//   readonly age: number;
// } = {
//   age: 32,
//   firstName: 'Igor',
// };
//
// account.age = 40;

// type Account = {
//   readonly firstName: string;
//   readonly age: number;
// };
//
// let arr: ReadonlyArray<string | number> = ['1', 2];
// arr.push(1);
// arr[100] = 2;

// let arr: [string, number] = ['s', 1];
//
// arr[100] = 1;

// let cb: new (a: string) => number;
// type IAccount = {
//   readonly firstName: string;
// }
//
// type IAccount = {
//   readonly age: number;
// }

// interface IAccount extends IName, IAge {

// }

// class Person implements IAccount {
//   public readonly firstName!: string;
//   public readonly age!: number;
// }
//
// interface IAccount<T extends { name: string, age: number }> {
//   id: string;
//   info: T;
// }
//
// let person: IAccount<{ name: string, age: number, male: boolean }> = {
//   id: '12313asdas1234ads',
//   info: { name: 'Igor', age: 32, male: true };
// };

// type hashMap<T, U, Z> = { [info: string]: T };
//
// let userInfo: hashMap<boolean>;

function isString(a: number | string): a is string {
  return typeof  a === 'string';
}


// function average(a: number, b: string, c: number): string;
// function average(a: string, b: number): number;
// function average(a: number | string, b: number | string, c?: number): number | string {
//   let av: number;
//   if (isString(a)) {
//     av = parseInt(a, 10);
//   } else {
//
//   }
//
//   parseInt(a, 10);
// }

// function f(this: void, a: number) {
//   this.a = 1;
// }
//
// f.bind({ a: 1 }, 1);
