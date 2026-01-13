describe("Inheritance", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Manager extends Employee {}

  class Director extends Manager {}
  it("should support", () => {
    const employee = new Employee("Ricky");

    console.info(employee.name);

    const manager = new Manager("Andrianto");
    const director = new Director("Kusuma");
  });
});
