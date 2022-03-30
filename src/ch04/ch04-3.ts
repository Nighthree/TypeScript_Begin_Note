// 擴充情境
// type 和 interface
type Animal = {
  name: string;
};

// 增加年齡，不影響其他套用 Animal 的 type
type Dog = Animal & { age: number };
type Cat = Animal;

let dog: Dog = { name: "", age: 10 };

let cat: Cat = { name: "" };

// interface
interface Animal1 {
  name: string;
}
interface Dog1 extends Animal1 {
  age: number;
}

let dog1: Dog1 = { name: "", age: 10 };

// 合併 只有在 interface 才會發生
interface Animal2{
  name: string;
}

interface Animal2{
  age: number;
}

// interface 遇到兩個一樣的名稱的時候會自動合併
