# Random Walker with 4 directions

This file introduces the walker class for the first time. Each time the walkers step function is called it selects a random number and chooses a dirrection based on that number. 

The main script has a setup() and draw() function. The setup function is only run once at the start and the draw function is called evertime the screen refreshes.
 
 ```js
 var walker;
 
 function setup() {
    createCanvas(500,500);
    background(127);
    walker = new Walker();
 }
 
 function draw() {
    walker.render();
    walker.step();
    }
 ```
In the Walker class 2 variables x and y are set up and the values assigned to them are half the width for x and half the height for y. This places the walker in the center of the canvas.
The render function draws the walker at the x and y coordinate.
 
```js
 function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```
 
The step function creates a random number between 0 and 4 then floors it which will remove all the decimal points without rounding. 
Then based on a set of if else statements changes the x or y position and when the render function is called from the draw function it will move the walker object.
The constrain makes sure the walker is kept within the canvas.
  
```js
    this.step = function() {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
         } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
         
         this.x = constrain(this.x,0,width);
         this.y = constrain(this,y,o,height);
     }
 }
```      
         
         
