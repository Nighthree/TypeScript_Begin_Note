// this js

class carInfo66 {
  title: string = "xx車";
  constructor() {
    this.title = "兵士車";
  }

  hello() {
    console.log("this.title", this.title);
  }
}

const car66 = new carInfo66();
car66.hello();
car66.title = "XXX";
car66.hello();

// 真正執行的地方決定 this 的指向

