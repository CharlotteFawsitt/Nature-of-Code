# Moving a ball using vectors

For this sketch new variables position and velocity were created.
```js
var position;
var velocity;
```
Then in the same way as previous we added the velocity to the position but using the vector instead of the variables x and y.
```js
    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;
```
And finally run the if statements with the new information.
```js
    if ((position.x + 24 > width || position.x - 24 < 0)) {
        velocity.x = velocity.x * -1;
    }
    if ((position.y + 24 > height || position.y - 24 < 0)) {
        velocity.y = velocity.y * -1;
```
