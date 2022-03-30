class User {
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  name: string;
  email: string;
}

const user1 = new User("array", "456@gmail.com");
