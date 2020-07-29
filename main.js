




xdomain = [0,1,2,3,4,5];
xrange = [0,200];
ydomain = [4,42];
yrange = [180.9524,0];
hdomain = [0,42];
hrange = [0,200];
xs= d3.scaleBand().domain(xdomain).range(xrange)
ys= d3.scaleLinear().domain(ydomain).range(yrange)
hs= d3.scaleLinear().domain(hdomain).range(hrange)

var margin =50;

var g = d3.select('svg').attr("width", 400).attr("height", 400).append("g").attr("transform", "translate(50,50)")

g.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", function(d,i){return xs(i);})
.attr("y", function(d){return ys(d);})
.attr("width", 33.3333)
.attr("height", function(d){return hs(d);})
