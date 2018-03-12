# Array of movers
For this example we declare an array of movers instead of just one. In the setup we are using a for loop to create as many movers as we want.
```js
var movers = [];

function setup() {
    createCanvas(1200, 600);
    for (var i = 0; i < 100; i++) {
        movers[i] = new Mover();
    }
}
```

Then in the draw we use a for loop to call each of the functions in the Mocer class for each object.
```js
background(0, 50);
for (var i = 0; i < movers.length; i++) {
    movers[i].display();
    movers[i].update();
    movers[i].checkEdges();
}
```

Over in the Mover class nothing really has changed except we declare the magnitude in a variable now and create a color array with random values.
```js
this.color = [random(255), random(255), random(255)];
this.mag = 0.09;
```

Then in the display we give the balls no stroke and assign them a color from the color array.
```js
noStroke();
fill(this.color[0], this.color[1], this.color[2]);
```
