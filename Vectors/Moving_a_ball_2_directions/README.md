# Moving a ball in two directions

For this sketch a new variable ySpeed was created. To make the ball move in two directions instead of just one we also add the y variable to
the ySpeed and create a new if statement for the y variable
```js
var ySpeed = 2;
```

```js
y = y + ySpeed;
```

```js
if ((y + 24 > height || y - 24 < 0)) {
        ySpeed = ySpeed * -1;
    }
```
