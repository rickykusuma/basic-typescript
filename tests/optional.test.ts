describe("Optional Parameters", () => {
  it("should support typescript", () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info(`Hello`);
      }
    }
    sayHello("Ricky");
    const name: string | undefined = undefined;
    sayHello(name);
  });
});
