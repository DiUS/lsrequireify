#lsrequireify

## A browserify transform which removes the need to reference files using relative paths when using require


## Usage

Configure browserify to use the lsrequireify transform.

From your source, where $SomeFile is a file named SomeFile.js anywhere in your prod or test source roots!

```
require('$SomeFile')
```

Move and refactor as you please, without having to worry about changing all your paths! Yay!