# Movement on the x axis using perlin noise

This example uses perlin noise to move the walker in a very smooth and natural way. The noise function returns a number close to but not
the same as the number it returned previously. It goes to a graph and using the xOff variable it returns a number from that point on the graph.
By increasing the xOff variable each time by a small amount we can ensure that the walker moves smoothly. If the change is too small it may seem too smooth. 
```js
    this.xOff = random(1000);

    this.render = function () {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 500, 40, 40);
    }

    this.step = function () {
        this.x = map(noise(this.xOff), 0, 1, 0, width);
        this.xOff += 0.005;
    }
```
