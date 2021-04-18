# Base64 for Node.js - Encode and decode using base64 in Node.js #

The ultimate shortcut for the base64 encode/decode functions in Node.js.

TypeScript types available.

## Usage ##

```js
const { base64encode, base64decode } = require('nodejs-base64');

let encoded = base64encode('hey there'); // "aGV5ICB0aGVyZQ=="
let decoded = base64decode(encoded); // "hey there"
```

## Installation ##

Install from command line:

```
npm i --save nodejs-base64
```

## Requirements ##

Tested on Node 8-14. May not work on Node below 7.8.