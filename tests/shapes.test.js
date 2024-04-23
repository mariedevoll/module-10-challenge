// const { describe } = require("yargs")
const { Circle, Triangle, Square } = require("../lib/shapes")
//circle
describe("Circle", () => {
    test("should render svg for a red circle element", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="red"/>`
        const circle = new Circle();
        circle.setColor("red");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
 
    test("should accept a fillColor input", () => {
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="purple"/>`
        const circle = new Circle();
        circle.setColor("purple");
        const actualSVG = circle.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
})
//triangle
describe("Triangle", () => {
    test("should render svg for teal polygon element", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="teal"/>`
        const triangle = new Triangle();
        triangle.setColor("teal");
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
        
    })
    test("should accept a fillColor input", () => {
        const expectedSVG = `<polygon points="150, 18, 244, 182, 56, 182" fill="orange"/>`
        const triangle = new Triangle();
        triangle.setColor("orange");
        const actualSVG = triangle.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
})
//square
describe("Square", () => {
    test("should render svg for yellow polygon element", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="yellow"/>`
        const square = new Square();
        square.setColor("yellow");
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);

    })
    test("should accept a fillColor input", () => {
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" fill="green"/>`
        const square = new Square();
        square.setColor("green");
        const actualSVG = square.render();
        expect(actualSVG).toEqual(expectedSVG);
    })
});