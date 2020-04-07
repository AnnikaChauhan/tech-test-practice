// I want to be able to make Triangles and define the length of each of their sides. give it three numbers
// I want to be able to check whether the triangle is equilateral, isosceles or scalene. 
// Please write the code to allow me to do this.
// HINTS: - equilateral means 3 sides of the same length
//        - isosceles means 2 sides of the same length, and one different
//        - scalene means 3 sides of different length

//give a triangle three sides and output the type of triangle it is
//input: three numbers, output: a string(type of triangle)
//make the triangles ?? a THING

/*
const determineTriangleType = (side1, side2, side3) => {
    if(side1 === side2 && side1 === side3 && side2 === side3){
        return "equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3){
        return "isosceles";
    } else {
        return "scalene";
    }
}
console.log(determineTriangleType(1,1,1));
console.log(determineTriangleType(1,2,1));
console.log(determineTriangleType(1,2,3));
*/

class Triangle {
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    determineTriangleType(){
        let triangle = new Set();
        triangle.add(this.side1);
        triangle.add(this.side2);
        triangle.add(this.side3);
        //console.log(triangle.values());
        //console.log(triangle.size);
        if(triangle.size === 1){
            return "equilateral";
        } else if (triangle.size === 2){
            return "isosceles";
        } else {
            return "scalene";
        }
    }

    areaOfTriangle(){
        return "lol";
    }
}

const triangleOne = new Triangle(1,1,1);
console.log(triangleOne.determineTriangleType());
const triangleTwo = new Triangle(1,2,1);
console.log(triangleTwo.determineTriangleType());
const triangleThree = new Triangle(1,2,3);
console.log(triangleThree.determineTriangleType());

//Andy's
class TriangleAlt {
    constructor(x,y,z){
        this.sides = [x,y,z];
        this.variants = {
            1: "equilateral",
            2: "isosceles",
            3: "scalene"
        }
    }
    get variant(){
        const uniqueSides = [... new Set(this.sides)];
        return this.variants[uniqueSides.lenght];
    }
}

const triangle = new TriangleAlt(1,2,3);
//this currently doesn't work but a get method doesn't need invoking
console.log(triangle.variant);