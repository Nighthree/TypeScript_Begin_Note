// extends
// 繼承
// 基本的 class  extends
// 子層可以覆蓋父層方法
class Animal63 {
  run(): void {
    console.log("...run");
  }
}

class Dog63 extends Animal63 {
  run(): void {
    console.log("dog run");
  }
}
class Cat63 extends Animal63 {}

const d1 = new Dog63();
d1.run();
const c1 = new Cat63();
c1.run();

//  constructor super
class Animal631 {
  name: string;
  constructor(name1: string) {
    this.name = name1;
  }
  run(): void {
    console.log("...run", this.name);
  }
}
// 透過 super 可以取用父層的東西
class Dog631 extends Animal631 {
  run(): void {
    super.run();
    console.log("dog run");
  }
}

const d631 = new Dog631("D631");
d631.run();

// abstract， class 可以有自己的方法
//以及透過 abstract 約束子層一定要實現相應的功能
// 此時帶有 abstract class Animal632 是不能 new Animal632
abstract class Animal632 {
  run(): void {
    console.log("...run");
  }
  abstract hello(): void; // 繼承時一定要實作出來
}

class Dog632 extends Animal632 {
  hello(): void {
    console.log("hello");
  }
}

const d632 = new Dog632();
d632.hello();
