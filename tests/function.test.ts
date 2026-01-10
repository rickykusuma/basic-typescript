describe("Functions", () => {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Ricky")).toBe("Hello Ricky");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Ricky");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Ricky")).toBe("Hello Ricky");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      return `Hello ${firstName} ${lastName || ""}`;
    }

    expect(sayHello("Ricky")).toBe("Hello Ricky ");
    expect(sayHello("Ricky", "Andrianto")).toBe("Hello Ricky Andrianto");
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): number;
    function callMe(value: any): any {
      if (typeof value === "number") {
        return value * 10;
      } else if (typeof value === "string") {
        return value.toUpperCase();
      }
    }
    expect(callMe(10)).toBe(100);
    expect(callMe("Ricky")).toBe("RICKY");
  });

  it("should support function as parameter", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }
    function toUpper(name: string): string {
      return name.toUpperCase();
    }
    expect(sayHello("Ricky", toUpper)).toBe("Hello RICKY");

    // Anonymous Function
    expect(
      sayHello("Ricky", function (name: string): string {
        return name.toUpperCase();
      }),
    ).toBe("Hello RICKY");

    //   Arrow Function
    expect(
      sayHello("Ricky", (name: string): string => {
        return name.toUpperCase();
      }),
    ).toBe("Hello RICKY");
  });
});
