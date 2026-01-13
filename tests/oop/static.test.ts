describe("Static", () => {
  //static merupakan kata kunci yang bisa digunakan pda peroperties atau method di class,
  // yang menyebabkan properties atau method tersebut bukan lagi sebagai bagian dari object yang dibuat dari class
  // static properties atau method, bisa menyebabkan seakan-akan kita membuat global variable atau function,
  // yang bisa diakses secara langsung, tanpa membuat object dari class nya
  // bisa juga ditambahkan visibility pada static properties atau method
  // biasanya static ini sering digunakan pada jenis class utility / helper

  // REMINDER:
  // STATIC MEMBER HANYA BISA MENGAKSES STATIC MEMBER LAINNYA, TIDAK BISA MENGAKSES NON STATIC MEMBER KECUALI DARI OBJECT
  // SEDANGKAN UNTUK NON STATIC MEMBER, BISA MENGAKSES STATIC MEMBER SECARA LANGSUNG

  class Configuration {
    static NAME: string = "Belajar Typescript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Ricky Andrianto Kusuma";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (let value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support static value", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
  it("should support method static", () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });
});
