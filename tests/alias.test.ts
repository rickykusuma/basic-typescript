import {Category, Product} from "../src/type-alias";

describe("Alias Type",()=>{
    it('should support in typescript', () => {
        const category:Category = {
            id:"1",
            name:"handphoone"
        }
        const product:Product = {
            id:"1",
            name:"Samsong",
            category:category,
            price:2000000
        }

        console.info(category)
        console.info(product)
    });
})