describe("Type Cast", () => {
  // dimana kita bisa mengubah tipe data dari satu tipe ke tipe data lainnya yang lebih spesifik atau detail
  // ini juga bisa dilakukan pada kasus method polymorphism
  //   kita bisa gabungkan instanceof dan assertion
  // instanceof tidak hanya mengecek class Real ketika membuat New nya. tapi diliat dari turunannya / parent nya atau bukan
  class Employee {
    constructor(public name: string) {}
  }
  class Manager extends Employee {}
  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      // konversi dari Employee ke VicePresident
      // Posisinya tidak boleh salah, harus dari bawah dulu ke atas VP -> Manager -> Employee (Parent)
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }
  function sayHelloWrong(employee: Employee): void {
    // ketika instanceof VP sebagai prop nya diterima, maka akan stuck di manager
    // karena VP extends Manager(Parentnya) sehingga instanceof menjadi true
    // karena instance of tidak hanya mengecek inisialisasi awal tetapi juga parent nya
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }
  it("should support type cast", () => {
    sayHello(new Employee("Ricky"));
    sayHello(new Manager("Andrianto"));
    sayHello(new VicePresident("Kusuma"));
  });
  it("should support method parameter polymorphism wrong", () => {
    sayHelloWrong(new Employee("Ricky"));
    sayHelloWrong(new Manager("Andrianto"));
    sayHelloWrong(new VicePresident("Kusuma"));
  });
});
