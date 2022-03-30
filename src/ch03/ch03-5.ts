// unknown
let name1: unknown = "bruce";
name1 = 99;

// 斷言
let name2: unknown = "black";
let name3 = name2 as string;
// as 讓 TypeScript 知道 name3 該是什麼類型
// 斷言應用
async function getData1() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await res.json()) as { userId: number; id: number; title: string; completed: boolean };
  // 當要使用內部參數時寫 data. 會自動跑出在 as 定義好的內容
  console.log(data);
}

getData1();

// any 與 unknown
// unknown 比較安全的 any
// 類型的保護機制，如果是 any liveStatus = false 到 result.split("") 會發生錯誤程式碼會停止;
// unknown 就可以讓 TypeScript 提前檢查程式碼可能會出現的錯誤，才不會到上線時才發現這個問題
const liveStatus = true;
function getLiveName() {
  let liveName: unknown;
  if (liveStatus) {
    liveName = "Bruce";
  } else {
    liveName = null;
  }
  return liveName;
}

const result = getLiveName();
if (typeof result === "string") {
  const arr1: string[] = result.split("");
  console.log(arr1);
}
