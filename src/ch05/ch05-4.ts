// Rest 參數 (function)
// 多個參數
// https://hiskio.com/courses/628/lectures/33153
function calcuate(...nums: number[]) {
  console.log(nums);
}
calcuate(1, 2, 3, 4, 5, 6, 55);



// 斷言解構
function calcuate1(a: number, b: number, c: number) {
  console.log(a, b, c);
}
const nums1 = [1, 2, 3] as const;
calcuate1(...nums1);
