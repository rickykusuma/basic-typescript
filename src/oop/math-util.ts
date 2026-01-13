//   di TS ada cara lain untuk mengorganisir kode program kita yaitu, menggunakan NameSpace
//   namespace biasanya digunakan untuk mengorganisir kode ketika dalam satu moodule terdapat banyak sekali kode
//   sehingga bisa kita kelola dalam Namespace
//   jika module kita anggap sebuah folder, Maka Namespace adalah sub folder didalam Module
//   untuk emmbuat namespace, bisa gunakan kata kunci namespace, dan bisa ditambahkan class,function, dll di dalam namespace tersebut

export namespace MathUtil {
  export const PI: number = 3.14;

  export function sum(...values: number[]): number {
    let total = 0;
    for (let value of values) {
      total += value;
    }
    return total;
  }
}

export namespace Ricky {}

export namespace Andrianto {}
