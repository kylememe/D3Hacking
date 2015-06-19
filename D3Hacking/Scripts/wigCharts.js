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

function initChart(container, lineDataIdeal, lineDataActual, width, height) {    

    var svg = d3.select(container),        
        margins = {
            top: 8,
            right: 5,
            bottom: 8,
            left: 8
        },
        xMin = d3.min(lineDataIdeal, function (d) {
            return d.x;
        }),
        xMax = d3.max(lineDataIdeal, function (d) {
            return d.x;
        }),
        yMin = d3.min(lineDataIdeal, function (d) {
            return d.y;
        }),
        yMax = d3.max(lineDataIdeal, function (d) {
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


    /*
    var lineDataIdeal = [
        { 'x': xMin, 'y': yMax }, 
        { 'x': xMax, 'y': yMin }
    ];
    */


    svg.append("svg:path")
        .attr("d", lineFunc(lineDataIdeal))
        .attr("class", "ideal");

    svg.append("svg:path")
        .attr("d", lineFunc(lineDataActual))
        .attr("class", "actual");    

}

$(function () {

    
    var securityData = [
        { 'x': 0, 'y': 200 },
        { 'x': 10, 'y': 185 },
        { 'x': 20, 'y': 165 },
        { 'x': 30, 'y': 43 },
        { 'x': 40, 'y': 120 },
        { 'x': 50, 'y': 30 }
    ];

    var dataIdealData = [
        { 'x': 0, 'y': 293 },
        { 'x': 33, 'y': 0}
    ]

    var dataData = [
        { 'x': 0, 'y': 293 },
        { 'x': 1, 'y': 293 },
        { 'x': 2, 'y': 293 },
        { 'x': 3, 'y': 293 },
        { 'x': 4, 'y': 293 },
        { 'x': 5, 'y': 0 },
        { 'x': 6, 'y': 0 },
        { 'x': 7, 'y': 0 },
        { 'x': 8, 'y': 0 },
        { 'x': 9, 'y': 0 },
        { 'x': 10, 'y': 0 },
        { 'x': 11, 'y': 0 },
        { 'x': 12, 'y': 0 },
        { 'x': 13, 'y': 0 },
        { 'x': 14, 'y': 0 },
        { 'x': 15, 'y': 0 },
        { 'x': 16, 'y': 0 },
        { 'x': 17, 'y': 0 },
        { 'x': 18, 'y': 0 },
        { 'x': 19, 'y': 0 },
        { 'x': 20, 'y': 0 },
        { 'x': 21, 'y': 0 },
        { 'x': 22, 'y': 0 },
        { 'x': 23, 'y': 0 },
        { 'x': 24, 'y': 0 },
        { 'x': 25, 'y': 0 },
        { 'x': 26, 'y': 0 },
        { 'x': 27, 'y': 0 },
        { 'x': 28, 'y': 0 },
        { 'x': 29, 'y': 0 },
        { 'x': 30, 'y': 0 },
        { 'x': 31, 'y': 0 },
        { 'x': 32, 'y': 0 },
    ];

    var ITData = [
        { 'x': 0, 'y': 200 },
        { 'x': 10, 'y': 50 },
        { 'x': 20, 'y': 180 },
        { 'x': 30, 'y': 60 },
        { 'x': 40, 'y': 120 },
        { 'x': 50, 'y': 30 }
    ];

    var opsData = [
        { 'x': 0, 'y': 200 },
        { 'x': 10, 'y': 101 },
        { 'x': 20, 'y': 180 },
        { 'x': 30, 'y': 10 },
        { 'x': 40, 'y': 120 },
        { 'x': 50, 'y': 83 }
    ];

    //initChart('#SecurityBurndown', securityData, 420, 210);
    initChart('#DataBurndown', dataIdealData, dataData, 420, 210);
    //initChart('#ITBurndown', ITData, 420, 210);
    //initChart('#OpsBurndown', opsData, 420, 210);

});