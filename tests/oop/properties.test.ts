import { sayHello } from "../../src/say-hello";

describe("Properties Class", () => {
  class Customer {
    readonly id: number;
    // can added Default Value
    name: string = "Guest";
    age?: number;
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string) {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "Ricky");
    customer.age = 26;
    console.info(customer);
  });

  it("should can have methods", () => {
    const customer = new Customer(1, "Ricky");
    console.info(sayHello("Andrianto"));
  });
});
