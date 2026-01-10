
describe("Test",()=>{
    it('should same with javascript', () => {

        const names : string[] = ["Ricky",'budi','joko']
        const values: number[] = [1,2,3]
        const hobbies: ReadonlyArray<string> = ["Membaca","Menulis"]
        console.info(names)
        console.info(values)
        console.info(hobbies)

        // Kegunaan readonly agar tidak dapat dirubah setelah di inisialisasi
        // hobbies[0] = "Bermain"
    });
})