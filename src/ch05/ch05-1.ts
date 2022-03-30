// JS
// 但是我們無法保證 a 和 b 傳進來是什麼類型
// function getAdd(a, b) {
//   return a + b;
// }

//ts
function getAdd(a: number, b: string) {
  return a + b;
}

// 可選的參數 結尾加上 ?
// 必傳的參數必須放前面
function setUser(name: string, age?: string) {
  if (typeof age == "string") {
    return age.split("");
  }
}

// function return type
// 自動推斷
function getNum() {
  return 100;
}
//先定義好
function getName(): string {
  return "";
}
// 物件的類型 可以先用 type 定義
type Info = {
  name: string;
  age: number;
};

function createUserInfo(info: Info) {
  console.log(info.name);
}

// never 不會回傳東西的 function
// 這個函式 只要出了 error 不會回傳任何東西
// 意外發生的時候不 return 東西
function getUserData(): never {
  throw new Error("...");
}

// void 表示這個函示不會回傳任何值
function hello(): void {
  console.log("hello world");
}

// 構建函數
type CardObj = {
  name: string;
};

type CardCreator = {
  new (name: string): CardObj;
};

function createCard(creator: CardCreator) {
  return new creator("123");
}

function getArr() {
  return [0, 1, "bruce"];
}

// 被判斷為 union
// const arr6 = getArr();
// const [id, age, userName] = getArr();

// 矯正，避免 union 發生，使用斷言
function getArr2() {
  return [0, 1, "bruce"] as const;
}
// // 另一種寫法  直接指定類型
// function getArr2() {
//   return [0, 1, "bruce"] as [number, number, string];
// }

const arr6 = getArr2();
const [id, age, userName] = getArr2();
//
