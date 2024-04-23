// const { describe } = require("yargs")
const { Square, Triangle, Circle } = require("../lib/shapes")
//circle
describe("Circle", () => {
    test("should render svg for a green circle element", () => {
        const expectedSVG = `<circle cs="150" cy="100" r="80" fill="green"/>`
        const circle = new Circle();
        circle.setColor("green");
        const actualSVG = circle.render();
        expectedSVG(actualSVG).toEqual(expectedSVG);
    })

test("should accept a fillColor input", () => {
    const expectedSVG = `<circle cs="150" cy="100" r="80" fill="green"/>`
    const circle = new Circle()
    circle.setColor("green")
    const actualSVG = circle.render();
    expectedSVG(actualSVG).toEqual(expectedSVG)
    })
})
//triangle
describe("Triangle", () => {
    test("should render svg for orange polygon element", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="orange"/>`
        const triangle = new Triangle()
        triangle.setColor("orange")
        const actualSVG = triangle.render()
        expectedSVG(actualSVG).toEqual(expectedSVG)
        
    })
    test("should accept a fillColor input", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="orange"/>`
        const triangle = new Triangle()
        triangle.setColor("orange")
        const actualSVG = triangle.render()
        expectedSVG(actualSVG).toEqual(expectedSVG)
    })
})
//square
describe("Square", () => {
    test("should render svg for yellow polygon element", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="yellow"/>`
        const square = new Square()
        square.setColor("yellow")

    })
    test("should accept a fillColor input", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="yellow"/>`
        const square = new Square()
        square.setColor("yellow")
        const actualSVG = square.render()
        expectedSVG(actualSVG).toEqual(expectedSVG)
    })
})