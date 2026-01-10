import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

describe("Interface", () => {
  it("should support in ts", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      nib: "1231231231",
      npwp: "1231231231",
    };

    seller.name = "Toko Ricky";

    console.info(seller);
  });

  it("should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    console.info(add(1, 2));
  });

  it("should support indexable Interface", () => {
    interface stringArray {
      [index: number]: string;
    }
    const names: stringArray = ["Ricky", "Andrianto", "Kusuma"];
    console.info(names);
  });

  it("should support indexable Interface for non number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }
    const dictionary: StringDictionary = {
      name: "Ricky",
      address: "Indonesia",
    };
    expect(dictionary["name"]).toBe("Ricky");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extends interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Ricky",
      division: "IT",
    };
    console.info(employee);
    const manager: Manager = {
      id: "2",
      name: "Andrianto",
      division: "IT",
      numberOfEmployees: 10,
    };
    console.info(manager);
  });

  it("should support function interface", () => {
    const person: Person = {
      name: "Ricky",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.info(person);
    console.info(person.sayHello("Andrianto"));
  });

  it("should support intersection types ", () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }
    // interface Person extends HasName,HasId{}
    type Domain = HasName & HasId;
    const domain: Domain = {
      id: "1",
      name: "Ricky",
    };

    console.info(domain);
  });

  it("should support type assertions", () => {
    const person: any = {
      name: "Ricky",
      Age: 26,
    };

    // harus hati" menggunakan assertion, dikarenakan Person interface harus ada sayHello Function
    // contoh person2.age tidak bisa, karena di interface tidak ada
    const person2: Person = person as Person;
    console.info(person2);
  });
});
