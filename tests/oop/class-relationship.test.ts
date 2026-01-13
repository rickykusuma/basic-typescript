describe("Class Relationship", function () {
  //   karena implementasi dari object di TS adalah JS object
  //   jadi sebenarnya jika eterdapat dua object walaupun berbeda class, tetapi secara properties dan function sama,
  //   maka bisa dianggap secara struktur Javascript objectg adalah sama
  //   pada kasus seperti itu, bisa membuat object untuk tipe data A, dengan membuat object dari Tipedata B, asal secara properties dan method sama

  // NOT RECOMMENDED
  // karena akan membuat bingung developer
  class Person {
    constructor(public name: string) {}
  }
  class Customer {
    constructor(public name: string) {}
  }

  it("should support class Relationship", () => {
    const person: Person = new Customer("Ricky");
  });
});
