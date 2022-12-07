# node-picker

It's a JavaScript library for interactively picking the DOM elements.

[![npm version](https://badge.fury.io/js/pick-dom-element.svg)](https://badge.fury.io/js/pick-dom-element)

## Install

```npm install --save html-picker```

## Usage

Create an instance of the `htmlPicker` class, and call its `start()` method to start picking. Call `stop()` to stop picking and remove the overlay from the DOM.

```javascript
import { htmlPicker } from "html-picker";

onHover: (el) => console.log(`Hover: ${el}`),
onClick: (el) => console.log(`Click: ${el}`),

const picker = new htmlPicker(onHover, onClick);
picker.start();
picker.stop();
```

See the [sample](sample/)  directory for a complete example of how to use the library.

## Stackblitz example

https://stackblitz.com/edit/vitejs-vite-j5x73d
