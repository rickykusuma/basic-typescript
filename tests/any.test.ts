describe("Any",()=>{
    // Any adalah tipe data typescript yang seperti javascript biasa tanpa pengecekan sama sekali

    it('should support in typescript', () => {
        const person: any  ={
            id:1,
            name:"Ricky",
            age:26
        }

        person.age = 31
        person.address = "indonesia"

        console.info(person)
    });
})