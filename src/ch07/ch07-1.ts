// 泛型

// function hello(text: string) {
//   console.log(text);
// }
// function hello2(text: number) {
//   console.log(text);
// }
// 單個操作
function hello<T>(text: T) {
  console.log(text);
}
hello<string>("adc");
function hello2<T, U>(text: T, text2: U) {
  console.log(text, text2);
}

// 泛型作用在 整個 function
function hello3<T, U>(text: T, text2: U): T {
  let data: T = text;
  let data2: U = text2;
  console.log(text, text2);
  return data;
}
