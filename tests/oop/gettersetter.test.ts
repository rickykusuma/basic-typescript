describe("Getter and Setter", () => {
  class Category {
    #name?: string;
    get name() {
      if (this.#name) {
        return this.#name;
      } else {
        return "empty";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this.#name = value;
      }
    }
  }

  it("should support in class", () => {
    const category = new Category();
    console.info(category.name);

    category.name = "Food";
    console.info(category.name);
  });
});
