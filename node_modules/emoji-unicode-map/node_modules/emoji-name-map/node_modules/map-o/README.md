# map-o [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/map-o.svg)](https://www.npmjs.com/package/map-o) [![Downloads](https://img.shields.io/npm/dt/map-o.svg)](https://www.npmjs.com/package/map-o) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Array-map like function for objects.

## Installation

```sh
$ npm i --save map-o
```

## Example

```js
// Dependencies
const mapObject = require("map-o");

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
```

## Documentation

### `mapObject(obj, fn, clone)`
Array-map like for objects.

#### Params
- **Object** `obj`: The input object.
- **Function** `fn`: A function returning the field values.
- **Boolean|Object** `clone`: If `true`, the input object will be cloned. If `clone` is an object, it will be used as target object.

#### Return
- **Object** The modified object.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`emojic`](https://github.com/IonicaBizau/emojic#readme)

 - [`engine-flow-types`](https://github.com/jillix/engine-flow-types#readme) by jillix

 - [`enny`](https://github.com/IonicaBizau/enny) by jillix

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md