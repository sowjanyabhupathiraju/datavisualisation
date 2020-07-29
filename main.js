




var margin =50;
var data = [4,8,15,16,23,42];

var g = d3.select('svg').attr("width", 400).attr("height", 400).append("g").attr("transform", "translate(50,50)")

g.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", function(d,i){return i;})
.attr("y", function(d){return d;})
.attr("width", 33.3333)
.attr("height", function(d){return d;})
