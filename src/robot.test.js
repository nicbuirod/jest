
const { createRobot } = require('./robot.js')

//pruebas unitarias 

// describe("advance", ()=>{
//     it("should be increment y in one",()=>{
//         const result = createRobot(1,2,"N")
//         expect(result).toMatchObject({y:3})
//     })
//     it("should be increment x in one",()=>{
//         const result = createRobot(1,2,"E")
//         expect(result).toMatchObject({x:2})
//     })
//     it("should be subtract x in one",()=>{
//         const result = createRobot(1,2,"W")
//         expect(result).toMatchObject({x:0})
//     })
//     it("should be subtract y in one",()=>{
//         const result = createRobot(1,2,"S")
//         expect(result).toMatchObject({x:1})
//     })
// })

// describe("turnRight", ()=>{
//     it("should be change orientation to E",()=>{
//         const result = createRobot(1,2,"N")
//         expect(result).toMatchObject({orientation:"E"})
//     })
//     it("should be change orientation to S",()=>{
//         const result = createRobot(1,2,"E")
//         expect(result).toMatchObject({orientation:"S"})
//     })
//     it("should be change orientation to W",()=>{
//         const result = createRobot(1,2,"S")
//         expect(result).toMatchObject({orientation:"W"})
//     })
//     it("should be change orientation to N",()=>{
//         const result = createRobot(1,2,"W")
//         expect(result).toMatchObject({orientation:"N"})
//     })
// })

// describe("turnLeft", ()=>{
//     it("should be change orientation to W",()=>{
//         const result = createRobot(1,2,"N")
//         expect(result).toMatchObject({orientation:"W"})
//     })
//     it("should be change orientation to N",()=>{
//         const result = createRobot(1,2,"E")
//         expect(result).toMatchObject({orientation:"N"})
//     })
//     it("should be change orientation to E",()=>{
//         const result = createRobot(1,2,"S")
//         expect(result).toMatchObject({orientation:"E"})
//     })
//     it("should be change orientation to S",()=>{
//         const result = createRobot(1,2,"W")
//         expect(result).toMatchObject({orientation:"S"})
//     })
// })

describe("integration-test", ()=>{
    it("should be increment finish in 9,4 orientation W",()=>{
        const result = createRobot(7,3,"N")
        expect(result).toMatchObject({x:9,y:4,orientation:"W"})
    })

    it("should be increment finish in 1,3 orientation N",()=>{
        const result = createRobot(0,5,"E")
        expect(result).toMatchObject({x:1,y:3,orientation:"N"})
    })

    it("should be show error 'fuera de los limites establecidos'",()=>{
        const result = createRobot(20,0,"E")
        expect(result).toBe("fuera de los limites establecidos")
    })

}   
)