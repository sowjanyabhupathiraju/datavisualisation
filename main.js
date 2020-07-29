

const data = await d3.csv('https://flunky.github.io/cars2017.csv');


var logScaleaxisx = d3.scaleLog().base(10)
  .domain([10, 150])
  .range([0, 200]);
var logScaleaxisy = d3.scaleLog().base(10)
  .domain([10, 150])
  .range([200, 0]);

var y_axis = d3.axisLeft().scale(logScaleaxisy);
d3.select('svg').append("g").attr("transform","translate(50,50)").call((y_axis).tickValues([10,20,50,100]).tickFormat(d3.format("~s")).ticks(4))


var x_axis = d3.axisBottom().scale(logScaleaxisx);
d3.select('svg').append("g").attr("transform","translate(50,250)").call((x_axis).tickValues([10,20,50,100]).tickFormat(d3.format("~s")))

