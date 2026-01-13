describe("Instanceof", () => {
  // sama seperti typeof di Object
  // tidak bisa menggunakan "typeof" di dalam class
  // return dari instanceof adalah boolean (true / false)
  class Employee {}
  class Manager {}

  const ricky = new Employee();
  const andrianto = new Manager();
  it("should support instanceof", () => {
    expect(ricky instanceof Employee).toBe(true);
    expect(andrianto instanceof Manager).toBe(true);
    expect(ricky).toBeInstanceOf(Employee);
    expect(andrianto).toBeInstanceOf(Manager);
  });
});
