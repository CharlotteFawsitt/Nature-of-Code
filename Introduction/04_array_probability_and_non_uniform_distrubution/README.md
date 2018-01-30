# Using and array to create non uniform distibution and a probability factor.

This uses the walker again and in the draw function an array is created with some numbers in each index. in index 1 and 2 the number 1.
In index 3 is the number 2, and in index 4 and 5 the numebr 3. This ensures that the walker has a tendency for index 1,2,4 and 5 over index 3.
then using a random function an index is selected and from that you can create an if else statement to choose a direction. In this example you
could only have 3 directions but if the array was increased you could choose more directions. 
```js
var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;


        var index = floor(random(probArray.length));
        var r = probArray[index];
```
