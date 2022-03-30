// TS Class 成員類型 ( 公開、私有、受保護的 )
// 這一章節比較複雜
// https://hiskio.com/courses/628/lectures/33156

// 修飾詞 public private protected:
// 預設 public
class UserInfomation64 {
  public name: string = "bluce";
  private email: string = "email";
  protected password: string = "password";
  getName(): string {
    return this.email;
  }
}
// 如果不希望別人使用可以參數，可以使用 private 讓其他人無法取得它或修改它
// 降低 Bug 機率
const uInfo64 = new UserInfomation64();
uInfo64.name = "amy";
// console.log(uInfo64);
// private 和 protected 不能從外部訪問，只能在 Class 內操作
// private 只有自己能夠訪問，不希望值被操作時使用
// protected 所有繼承的都可以取用
class StreamerInfo64 extends UserInfomation64 {
  hello():void {
    console.log(this.password);
  }
}
const sInfo64 = new StreamerInfo64();

// JS 原生私有成員寫法(2020的新功能)
// 私有變數 簡寫 #
class UserInfo641 {
  #name: string = "bluce";
  getName(): string {
    return this.#name;
  }
}
const uInfo641 = new UserInfo641();
// console.log(uInfo641);
// console.log(uInfo641.getName());
