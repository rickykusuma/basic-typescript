// polymorphism berasal dari bahasa yunani yang berarti banyak bentuk
//dalam oop polimorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain
// polymorphism berkaitan kuat dengan inheritance

describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}
  class VicePresident extends Manager {}
  function sayHello(employee: Employee): void {
    console.info(`Hello ${employee.name}`);
  }
  it("should support", () => {
    let employee = new Employee("Ricky");
    console.info(employee);

    employee = new Manager("Andrianto");
    console.info(employee);

    employee = new VicePresident("Kusuma");
    console.info(employee);
  });

  it("should support method polymorphism", () => {
    sayHello(new Employee("Ricky"));
    sayHello(new Manager("Andrianto"));
    sayHello(new VicePresident("Kusuma"));
  });
});
