import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should support in ts", function () {
    const customer: Customer = {
      id: 1,
      name: "Ricky",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
