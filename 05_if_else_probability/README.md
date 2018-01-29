# Using probability

In this example we are using probabilty again to move the walker but instead of using an array we choose a random number between 0 and 1. 
Using an if else statement we can give the walker a tendency to go to the right over other directions. We do this by making the if statement a higer range than the others.
```js
var r = random(1);


        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }
```
