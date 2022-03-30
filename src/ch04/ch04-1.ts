// type 自訂義類型

// JS 有的類型
let num1: number;
let str1: string;

// 多種類型越寫越長，太多類型容易出錯
let str2: string | boolean | number;
// 可以這樣寫 ↓
// type 宣告 類型
type LiveName = string | boolean | number;
let liveName1: LiveName;

// 物件類型的處理
type OBJ = { name: string; age: number };
const obj01: OBJ = { name: "Shine", age: 9 };
