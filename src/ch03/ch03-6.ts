// union 讓參數可以有複數的類型
const arr1: (string | boolean)[] = [];
arr1.push(false);
arr1.push("");

let liveName: string | number;
liveName = 'bruce';
liveName = 99;

// never 永遠不可能發生的類型
// 系統會有 紅線提示
// if (typeof liveName === 'string'){
//   liveName.split('');
// }


// 強制斷言 -> 斷言 轉換類型
let liveName2 = 999;
let liveName3 = liveName as unknown as string;

