### Notes

- get hex colours

```js
for (let r=0; r<=0xFF0000; r+=0x330000) {
  for (let g=0; g<=0xFF00; g+=0x3300) {
    for (let b=0; b<=0xFF; b+=0x33) {
      const hex = (r|g|b).toString(16).padStart(6, "0");
      colours.push(hex);
    }
  }
}
```

- https://stackoverflow.com/questions/42542057/use-javascript-array-and-loops-to-display-all-216-websafe-colors-in-hexadecimal
- https://jsfiddle.net/geradrum/6xtdjku4/