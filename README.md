# node-picker

It's a JavaScript library for interactively picking the DOM elements and displays the HTML tags.

[![npm version](https://badge.fury.io/js/pick-dom-element.svg)](https://badge.fury.io/js/pick-dom-element)

## Install

``npm install --save html-picker`

## Usage

Create an instance of the `htmlPicker` class, and call its `start()` method to start picking. Provide an `onHover` or `onClick` callback to get the picked element(s). Call `stop()` to stop picking and remove the overlay from the DOM.

```javascript
import { htmlPicker } from "html-picker";

onHover: (el) => console.log(`Hover: ${el}`),
onClick: (el) => console.log(`Click: ${el}`),

const picker = new htmlPicker(onHover, onClick);
picker.start();
picker.stop();
```
