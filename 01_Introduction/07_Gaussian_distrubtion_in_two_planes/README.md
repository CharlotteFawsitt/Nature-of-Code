# Gaussian distribution ont he x and y axis

In this example we do the same again but add in a yloc as well. This means the balls will appear in different places instead of just the
x axis. 
```js
 var xloc = randomGaussian();
    var yloc = randomGaussian();

    var xsd = 100;
    var ysd = 40;

    var xMean = width / 2;
    var yMean = height / 2;
    xloc = (xloc * xsd) + xMean;
    yloc = (yloc * ysd) + yMean;
```
