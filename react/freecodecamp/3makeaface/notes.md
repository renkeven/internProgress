# ES5 vs ES6

Old ES5 (pre -2015) vs newer ES6 (2015-)

Includes the import and a new arrow function.

```javascript
    const square = x => x * x;
    const square = x => (x * x);
```

We'll refactor the code in this exercise. The first thing to note is that we can define these user-made components in JSX inside uppercase brackets,
e.g.

```jsx
<BackgroundCircle />
```

Will run the function BackgroundCircle. The key here is the uppercase start tells JSX that it's not a native DOM element.

We will also use multiple files to make it clean.