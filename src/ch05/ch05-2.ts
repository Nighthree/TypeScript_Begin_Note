// 簡單說 function 泛型 <>

function print<T>(data: T) {
  console.log(data);
}
// pirnt 帶入的參數是 string 類型
print<string>('ABC')

// print 帶入的參數是 number 類型
print<number>(123)

// print 帶入的參數是 boolean 類型
print<boolean>(false)