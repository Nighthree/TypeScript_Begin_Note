const obj: object = { name: "bule" };

const obj1: { name: string; age: number } = {
  name: "red",
  age: 78,
};

// const obj2: { name: string; age: number } = {
//   name: "red",
//   age: undefined,
// };
// tsconfig.json 增加 " strictNullChecks": true 就可以讓 undefined 被判斷出來

const obj2: { name: string; age?: number } = {
  name: "red",
};

// age? 加上 ? 代表是個可選的選項
