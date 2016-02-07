// Dependencies
const mapObject = require("../lib");

// Modify this object
console.log(mapObject({
    location: "Earth"
  , age: 10
}, (value, name) => {
    if (name === "location") {
        return "Location: " + value;
    }

    if (value === 10) {
        return 42;
    }
}));
// => { location: 'Location: Earth', age: 42 }

var obj = {
    two: 2
  , nine: 9
  , ten: 10
};

// Calculate the squares, but don't override the object
var squares = mapObject(obj, x => x * x, true);
console.log("input:", obj);
// => input: { two: 2, nine: 9, ten: 10 }

console.log("squares:", squares);
// => squares: { two: 4, nine: 81, ten: 100 }
