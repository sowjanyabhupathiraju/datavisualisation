
async function init() {
const data = await d3.csv('https://flunky.github.io/cars2017.csv');
var logScalex = d3.scaleLog().base(10)
  .domain([10, 150])
  .range([0, 200]);
var logScaley = d3.scaleLog().base(10)
  .domain([10, 150])
  .range([200, 0]);
var margin = 50;


d3.select('svg').attr("width", 400).attr("height", 400)
.append("g")
.attr("transform", "translate(50,50)" )
.selectAll('circle')
.data(data)
.enter()
.append('circle')
.attr('cx', function(d,i){return logScalex(d.AverageCityMPG);})
.attr('cy', function(d,i){return logScaley(d.AverageHighwayMPG);})
.attr('r', function(d,i){return d.EngineCylinders*2 -(d.EngineCylinders)+2 ;})

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

}