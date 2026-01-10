import {sayHello} from "../src/say-hello";

describe('Hello World', () => {
    it('Should say hello', () => {
        const name = "Hello World"
        expect(name).toBe("Hello World")
    })
})

describe('sayHello', () => {
    it('Should say hello function', () => {
        expect(sayHello('Ricky')).toBe('Hello Ricky')

    })
})