# Heroicons-Vanilla

A simple Node.js library for integrating Heroicons into your vanilla Node projects with ease.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install heroicons-vanilla
```

## Usage

Import the getHeroIcon function from the heroicons-vanilla package and use it to retrieve the SVG content for the desired icon.

```js
const { getHeroIcon } = require('heroicons-vanilla');

try {
    const icon = getHeroIcon('menu', 24, 'solid');
    console.log(icon);
} catch (error) {
    console.error(error);
}
```

## Contributing

Contributions to improve heroicons-vanilla are welcome. Feel free to fork the repository, make changes, and submit pull requests.

## License

[MIT](LICENSE.md)