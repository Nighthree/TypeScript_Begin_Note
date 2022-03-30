// enum 枚舉值

// 所有狀態
// 0 -> 關播
// 1 -> 開播
// 2 -> 多人連線開播

// 如果單純寫 status === 0 除非寫註解，否則難讀

enum LiveStatus1 {
  "streaming" = 0,
  "closed" = 1,
  "mutiple" = 2,
}

let nowLiveStatus1 = 0;
if(nowLiveStatus1 === LiveStatus1.streaming){
  console.log('streaming');
  
}