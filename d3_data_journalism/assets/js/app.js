// ==========Import and format the data to numerical values =======================
d3.csv("assets/data/data.csv").then(data => {
  data.forEach(function(data) {
    data.income = +data.income;
    data.smokes = +data.smokes;
  });

// _______________________________________________________________CHART SETUP_______________________________________________________________________//
var svgWidth = 1000;
var svgHeight = 700;

var margin = {top: 20, right: 40, bottom: 60, left: 50};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// _______________________________________________________________SVG WRAPPER WITH SVG GROUP TO HOLD CHART AND SET MARGINS_______________________________________________________________________//
var svg = d3.select("#scatter").append("svg").attr("width", svgWidth).attr("height", svgHeight);

var chartGroup = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

 // _______________________________________________________________SCALES_______________________________________________________________________//
const xScale = d3.scaleLinear().domain(d3.extent(data, d => d.income)).range([0, width]).nice();
const yScale = d3.scaleLinear().domain([6,d3.max(data, d => d.smokes)]).range([height, 0]).nice();
  
// _______________________________________________________________AXIS_______________________________________________________________________//
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
  chartGroup.append("g").call(yAxis);

//============Generate scatter plot=========
chartGroup.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx", d=>xScale(d.income))
.attr("cy", d=>yScale(d.smokes))
.attr("r", "10")
.attr("stroke-width", "1")
.classed("stateCircle", true)
.attr("opacity", 0.75);

//============add texts to each datapoint=========
chartGroup.append("g")
  .selectAll('text')
  .data(data)
  .enter()
  .append("text")
  .text(d=>d.abbr)
  .attr("x",d=>xScale(d.income))
  .attr("y",d=>yScale(d.smokes))
  .classed(".stateText", true)
  .attr("font-family", "sans-serif")
  .attr("text-anchor", "middle")
  .attr("fill", "white")
  .attr("font-size", "10px")
  .style("font-weight", "bold")
  .attr("alignment-baseline", "central");
  
  //============add axes titles=========
  chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 13})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "black")
        .style("font-weight", "bold")
        .text("income");

        chartGroup.append("text")
        .attr("y", 0 - ((margin.left / 2) + 2))
        .attr("x", 0 - (height / 2))
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("fill", "black")
        .style("font-weight", "bold")
        .attr("transform", "rotate(-90)")
        .text("Smokers (%)");
        })

.catch(function(error) {
  console.log(error)}
  );