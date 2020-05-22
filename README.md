# chain-filler

If you want to fill your objects in one beautiful line + have validation, you should use chain-filler.

## Installation

```
$ yarn add chain-filler
// or
$ npm i chain-filler
```

## Usage

Basic usage without validation:

```javascript
import chainFiller from 'chain-filler';

const opts = chainFiller(['title', 'name', 'lastName']);

console.log(opts.title('chain-filler').name('Evan').lastName('You').get());

```

Usage with validation:

```javascript
import chainFiller from 'chain-filler';

const opts = chainFiller({
  title: () => true,
  name: (name) => name !== 'Evan',
  lastName: (lastName) => lastName !== 'Abramov',
});

console.log(opts.title('chain-filler').name('Evan').lastName('You').get());  // Validation Error: Evan cannot be inserted inside name.

```
