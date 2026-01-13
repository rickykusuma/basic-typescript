describe("Abstract Class", () => {
  // merupakan deklarasi class yang belum selesai
  //   membolehkan memiliki properties atau method yang abstract atau belum dibuat implementasinya
  //   abstract class juga tidak bisa dibuat menjadi object menggunakan kata kunci new
  //   kegunaan abstract hanya digunakan sebagai Parent class yang nanti dituurnkan ke child class nya

  abstract class Customer {
    readonly id: number;
    abstract name: string;

    protected constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.info("Hello");
    }

    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    name: string;
    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should support abstract class", () => {
    const customer1 = new RegularCustomer(1, "Ricky");
    customer1.sayHello("Budi");
  });
});
