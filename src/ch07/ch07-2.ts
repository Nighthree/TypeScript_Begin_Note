// interface 的泛型
// https://hiskio.com/courses/628/lectures/33173

interface Card<T> {
  title: string;
  description: T;
}

function printCardInfo<TT>(desc: TT): Card<TT> {
  const data: Card<TT> = {
    title: "bruce",
    description: desc,
  };

  return data;
}
console.log(printCardInfo<number>(999));

interface CarProps72<T> {
  name: T;
}

class Car72<TT> implements CarProps72<TT> {
  name: TT;
  constructor(value: TT) {
    this.name = value;
  }
}

const car72 = new Car72<string>("bruce");
