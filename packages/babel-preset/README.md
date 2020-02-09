# @ui-tests/babel-preset

Automatically load the css for the @ui-tests design system.

## Installation

```sh
npm i --save-dev @ui-tests/babel-preset
# or
yarn add -D @ui-tests/babel-preset
```

## Usage

.babelrc:

```json
{
  "presets": ["@ui-tests/babel-preset"]
}
```

## Example

Input:

```js
import Card from '@ui-tests/card';
```

Output:

```js
import Card from '@ui-tests/card';
import '@ui-tests/card/dist/main.css';
```
