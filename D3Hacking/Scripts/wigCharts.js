function DrawBarChart(data, container, width, barHeight) {
    var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

    var chart = d3.select(container)
        .select(".chart")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function (d) { return x(d) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function (d) { return d; });
}

function initChart() {

    var lineDataActual = [{
        'x': 0,
        'y': 200
    }, {
        'x': 10,
        'y': 50
    }, {
        'x': 20,
        'y': 180
    }, {
        'x': 30,
        'y': 60
    }, {
        'x': 40,
        'y': 120
    }, {
        'x': 50,
        'y': 30
    }];

    var svg = d3.select("#visualisation"),
        width = 1000,
        height = 500,
        margins = {
            top: 80,
            right: 50,
            bottom: 80,
            left: 80
        },
        xMin = d3.min(lineDataActual, function (d) {
            return d.x;
        }),
        xMax = d3.max(lineDataActual, function (d) {
            return d.x;
        }),
        yMin = d3.min(lineDataActual, function (d) {
            return d.y;
        }),
        yMax = d3.max(lineDataActual, function (d) {
            return d.y;
        }),

    xRange = d3.scale.linear().range([margins.left, width - margins.right]).domain([

        xMin, xMax
    ]),

    yRange = d3.scale.linear().range([height - margins.top, margins.bottom]).domain([

        yMin, yMax
    ]),

    xAxis = d3.svg.axis()
        .scale(xRange)
        .tickSubdivide(true),

    yAxis = d3.svg.axis()
        .scale(yRange)
        .orient("left")
        .tickSubdivide(true);

    function make_x_axis() {
        return d3.svg.axis()
            .scale(xRange)
             .orient("bottom")
            .tickSubdivide(true)
    }

    function make_y_axis() {
        return d3.svg.axis()
            .scale(yRange)
            .orient("left")
            .tickSubdivide(true)
    }


    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + (height - margins.top) + ")")
        .call(make_x_axis()
            .tickSize((-height) + (margins.top + margins.bottom), 0, 0)
            .tickFormat("")
        )

    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(" + (margins.left) + ",0)")
        .call(make_y_axis()
            .tickSize((-width) + (margins.right + margins.left), 0, 0)
            .tickFormat("")
        )

    svg.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (height - (margins.bottom)) + ")")
        .call(xAxis);

    svg.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + (margins.left) + ",0)")
        .call(yAxis);



    var lineFunc = d3.svg.line()
        .x(function (d) {
            return xRange(d.x);
        })
        .y(function (d) {
            return yRange(d.y);
        })
        .interpolate('basis');


    var lineDataIdeal = [{
        'x': xMin,
        'y': yMax
    }, {
        'x': xMax,
        'y': yMin
    }];


    svg.append("svg:path")
        .attr("d", lineFunc(lineDataIdeal))
        .attr("class", "ideal");

    svg.append("svg:path")
        .attr("d", lineFunc(lineDataActual))
        .attr("class", "actual");

    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "end")
        .attr("x", width)
        .attr("y", height - 6)
        .text("Days");

    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Hours remaining");

}

$(function () {

    var securityData = [5, 10, 15, 20, 25, 30];
    var dataData = [3, 8, 15, 16, 33, 42];
    var ITData = [19, 8, 15, 16, 27, 42];
    var opsData = [45, 40, 35, 30, 25, 20];

    DrawBarChart(securityData, "#securityContainer", 420, 20);
    DrawBarChart(dataData, "#dataContainer", 420, 20);
    DrawBarChart(ITData, "#ITContainer", 420, 20);
    DrawBarChart(opsData, "#OpsContainer", 420, 20);
    initChart();

});