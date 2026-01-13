describe("Visibility", () => {
  //   Visibility di TS
  //   public, private, protected
  //   public => bisa diakses dimanapun secara default public
  //   private => hanya bisa diakses oleh classnya sendiri
  //   protected => sama seperti private tapi bisa juga diakses oleh class turunanya

  class Counter {
    protected counter: number = 0;

    public increment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public increment(): number {
      return (this.counter += 2);
    }
  }

  it("should support visibility", () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(counter.getCounter());
  });
});
