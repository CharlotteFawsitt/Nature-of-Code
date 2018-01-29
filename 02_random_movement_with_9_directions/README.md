# Random walker with 9 outcomes

The only thing to change in this file is the step function. Instead of having 4 if else statements, there are two variables stepx and stepy.
These are given a ramdon number between -1 and 2. This is then added to the x position to move the walker in any direction or make it not move at all. 
```js
this.step = function () {
        var stepx = floor(random(-1, 2));
        var stepy = floor(random(-1, 2));

        this.x = this.x + stepx;
        this.y = this.y + stepy;

        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
```
