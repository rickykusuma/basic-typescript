describe("Generic", () => {
  class GenericData<T> {
    value: T;

    constructor(value: T) {
      this.value = value;
    }
  }

  it("should only multiple data type ", () => {
    const dataNumber = new GenericData<number>(123);
    // dataNumber.value = "Eko"; // Error
    // dataNumber.value = true; // Error

    const dataString = new GenericData<string>("Ricky");
    const upper = dataString.value.toUpperCase();
    expect(upper).toBe("RICKY");
  });
});
