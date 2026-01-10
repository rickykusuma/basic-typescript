describe("Array Tuple", () => {
    it('should can initiate different data type in 1 array', () => {
        const person: readonly [string,string,number] = ["Ricky","Kusuma",26]
        console.info(person[0])
        console.info(person[1])
        console.info(person[2])

    });
})