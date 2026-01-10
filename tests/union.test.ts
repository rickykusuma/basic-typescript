describe("Union", () => {
    it('should be able to defined different data type when initiate variable', () => {
        let sample: number | string | boolean = "Ricky"
        sample = 100
        sample = true;

        console.info(sample)
    });

    it('should support typeof operator', () => {
        function process(value: number | string | boolean){
            if(typeof value === "number"){
                return value + 2 ;
            }
            else if(typeof value === "string"){
                return value;
            }
            else {
                return !value;
            }
        }
        expect(process("Ricky")).toBe("Ricky")
        expect(process(100)).toBe(102)
        expect(process(true)).toBe(false)

    })
})