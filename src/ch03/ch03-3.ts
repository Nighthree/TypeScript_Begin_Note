// 陣列
const arr = [1, 2, "3"];

const arr2: (string | number)[] = [1, 2, "3"];
// 這樣的意思是陣列內的資料型態可以接受字串及數字
console.log(arr2);

const arr3: string[] = ["1", "5"];

const arr4: Array<string> = ["2", "5"];

// 元祖 Tuple
const tup1: [number, string, boolean] = [999, "456", true];

const tup2: [number, number][] = [
  [11, 22],
  [55, 66],
];
