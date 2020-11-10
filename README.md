# Stimulus Animated Number

[![](https://img.shields.io/npm/dt/stimulus-animated-number.svg)](https://www.npmjs.com/package/stimulus-animated-number)
[![](https://img.shields.io/npm/v/stimulus-animated-number.svg)](https://www.npmjs.com/package/stimulus-animated-number)
[![](https://github.com/stimulus-components/stimulus-animated-number/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-animated-number)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-animated-number.svg)](https://github.com/stimulus-components/stimulus-animated-number)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7ef669f5-d255-4a59-8461-5b2360d1674b/deploy-status)](https://stimulus-animated-number.netlify.com)

## Getting started

A Stimulus controller that animates a numerical value by counting to it.

## Installation

```bash
$ yarn add stimulus-animated-number
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import AnimatedNumber from "stimulus-animated-number"

const application = Application.start()
application.register("animated-number", AnimatedNumber)
```

## Usage

In your view:
```html
<div
  data-controller="animated-number"
  data-animated-number-start="0"
  data-animated-number-end="200"
  data-animated-number-duration="3000"
>
  0
</div>

<div
  data-controller="animated-number"
  data-animated-number-lazy=""
  data-animated-number-start="0"
  data-animated-number-end="200"
  data-animated-number-duration="3000"
>
  This animation will start only when the element become visible thanks to Intersection Observers.
</div>

<div
  data-controller="animated-number"
  data-animated-number-lazy=""
  data-animated-number-lazy-root-margin="30px"
  data-animated-number-lazy-threshold="0.4"
  data-animated-number-start="0"
  data-animated-number-end="200"
  data-animated-number-duration="3000"
>
  You can customize the Intersection Observer options.
</div>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-animated-number-start` | `undefined` | Number, at which animation starts. | ❌ |
| `data-animated-number-end` | `undefined` | Number, at which animation ends. | ❌ |
| `data-animated-number-duration` | `undefined` | Total animation duration in milliseconds. | ❌ |
| `data-animated-number-lazy` | `undefined` | Fetch content when element is visible. | ✅ |
| `data-animated-number-lazy-root-margin` | `0px` | rootMargin option for Intersection Observer. | ✅ |
| `data-animated-number-lazy-threshold` | `0` | threshold option for Intersection Observer. | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus components.

```js
import AnimatedNumber from "stimulus-animated-number"

export default class extends AnimatedNumber {
  connect() {
    super.connect()
    console.log("Do what you want here.")
  }
}
```

These controllers will automatically have access to targets defined in the parent class.

If you override the connect, disconnect or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
