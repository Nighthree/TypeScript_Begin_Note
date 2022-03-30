interface obj62 {
  naem: string;
}

interface UserInterface62 {
  id: number;
  name: string;
  age: number;
  address: string;
  // 會員功能
  add: (data: any) => void;
  update: (id: number) => boolean;
  delete: (id: number) => boolean;
}
// 約束
class LiveUser implements UserInterface62 {
  id: number;
  name: string;
  age: number;
  address: string;
  // 會員功能
  add: (data: any) => {};
  update: (id: number) => true;
  delete: (id: number) => true;
  // 額外新增的功能
  startLive(){}
  endLive(){}
}
