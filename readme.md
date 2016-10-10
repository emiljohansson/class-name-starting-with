# class-name-starting-with

> Finds all element starting with `string`. Queries the DOM for '[class*="string"]'.

## Usage

```js
var classNameStartingWith = require('class-name-starting-with');
classNameStartingWith('prefix__', el);
// => [HTMLElement]
```

## API

### classNameStartingWith(string, rootElement)

Returns an array with the elements with class name matching `string`.

#### string

Type: `string`

#### rootElement

Type: `undefined`, `HTMLElement`
