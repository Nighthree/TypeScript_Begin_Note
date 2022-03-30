// overload function 重載

// 多個一樣名稱的 function

// 可以用泛型處理
// function getData(data:string){
//   //...
// }

// function getData2(data:number){
//   //...
// }

// overload 的處理方式
// 多個函式是同個名稱只依靠一個實作方式的一種寫法

// function getData(data: string): void;
// function getData(data: number): void;
// function getData(data: boolean): void;
// function getData(data: string | number | boolean) {
//   console.log(data);
// }

// 越寫越長 不易閱讀，可以簡寫成 unknown
// 這裡蠻重要的，可以多回去看影片講解
// https://hiskio.com/courses/628/lectures/33151
function getData(data: string): void;
function getData(data: number): void;
function getData(data: boolean): void;
function getData(data: unknown): void {
  console.log(data);
}

getData(99);

// 函式可以有很多種定義 普通的 斷言 泛型 overload 
// 主要是看團隊有沒有規範