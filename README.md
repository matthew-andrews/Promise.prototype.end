Promise.prototype.end
=====================

Promotes uncaught errors in promise chains to proper JavaScript uncaught exceptions (rather than an error in a Promise) that would otherwise be suppressed.

Warning: This is just an idea and is not intended for use outside of FT internals prototypes.

```js
fetch('https://mattandre.ws')
  .then(function(response) {
    // some stuff
  })
  .end();
```
