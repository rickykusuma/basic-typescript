describe("Method Overriding", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    constructor(name: string) {
      super(name);
    }

    sayHello(name: string): void {
      // Bisa super method juga dari parent class
      super.sayHello(name);
      console.info(`and I am your manager`);
    }
  }

  it("should support", () => {
    const employee = new Employee("Ricky");
    employee.sayHello("Budi");

    const manager = new Manager("Andrianto");
    manager.sayHello("Kusuma");
  });
});
