// static 靜態 可以被共用的東西
// https://hiskio.com/courses/628/lectures/33168

class Bank65 {
  private static balence: number = 1000;
  static withdraw(money: number) {
    if (this.balence <= 0) return;
    this.balence -= money;
  }
  static getBalance() {
    return this.balence;
  }
}
// static balence 可以直接取用 不需要 new Bank65
// console.log(Bank65.balence);

// private static balence 防止外部直接修改內容
// static 函式只能呼叫 static 變數

function userAWithdraw(money: number) {
  Bank65.withdraw(money);
  console.log(Bank65.getBalance());
}

userAWithdraw(20)
