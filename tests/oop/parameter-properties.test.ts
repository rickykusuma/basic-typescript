describe("Parameter Properties", () => {
  class Person {
    // Ketika di parameternya ditambahkan visibility
    // TS akan tau kalau name akan dijadikan properties class
    // sehingga tidak perlu melakukan inisialisasi lagi
    // kalau publicnya di hilangkan maka harus inisialisasi lagi

    constructor(public name: string = "") {}
  }
  it("should support", () => {
    const person = new Person("Ricky");
    console.info(person.name);
    person.name = "Andrianto";
    console.info(person.name);
  });
});
