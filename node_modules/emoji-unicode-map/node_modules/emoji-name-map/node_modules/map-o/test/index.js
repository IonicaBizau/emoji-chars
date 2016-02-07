const tester = require("tester")
    , mapObject = require("../lib")
    ;

tester.describe("map-object", test => {
    test.should("map and override objects", () => {
        var obj = {
            location: "Earth"
          , age: 10
        };
        var result = mapObject(obj, (value, name) => {
            if (name === "location") {
                return "Location: " + value;
            }

            if (value === 10) {
                return 42;
            }
        });
        test.expect(obj.location).toBe("Location: Earth");
        test.expect(obj.age).toBe(42);
        test.expect(result).toBe(obj);
    });

    test.should("map and clone using boolean", () => {

        var obj = {
            two: 2
          , nine: 9
          , ten: 10
        };

        var squares = mapObject(obj, x => x * x, true);
        test.expect(squares).toEqual({
            two: 4,
            nine: 81,
            ten: 100
        });
        test.expect(squares).toNotBe(obj);
    });

    test.should("map and clone a specific object", () => {

        var obj = {
            two: 2
          , nine: 9
          , ten: 10
        };

        var target = {
            eight: 64
        };

        var squares = mapObject(obj, x => x * x, target);
        test.expect(squares).toEqual({
            two: 4,
            nine: 81,
            ten: 100,
            eight: 64
        });
        test.expect(squares).toBe(target);
    });
});
