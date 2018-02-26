# Base64 for Node.js - Encode and decode using base64 in Node.js #

The ultimate shortcut for the base64 encode/decode functions in Node.js.

## Usage ##

```js
const { base64encode, base64decode } = require('nodejs-base64');

let encoded = base64encode('hey there'); // "aGV5ICB0aGVyZQ=="
let decoded = base64decode(encoded); // "hey there"
```

## Installation ##

Don't be confuse by the dot in the package name. That's all right.

```
npm i --save nodejs-base64
```

## Requirements ##

Use Node version 7.8 or above.