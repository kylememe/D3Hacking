function initChart(container, lineDataIdeal, lineDataActual, lineColor, width, height) {    

    var svg = d3.select(container),        
        margins = {
            top: 30,
            right: 25,
            bottom: 30,
            left: 25
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
        .ticks(0)        

    yAxis = d3.svg.axis()
        .scale(yRange)
        .orient("left")
        .ticks(0)        

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


    svg.append("svg:path")
        .attr("d", lineFunc(lineDataIdeal))
        .attr("class", "ideal");

    svg.append("svg:path")
        .attr("d", lineFunc(lineDataActual))
        .attr("class", "actual")
        .attr("stroke", lineColor);    

    svg.append("text")      
        .attr("x", width / 2)
        .attr("y", height - 10)
        .style("text-anchor", "middle")
        .text("Time");
		
	svg.append("text")		
		.attr("y", margins.left / 2)
        .attr("x", (height / 2) * -1)		
        .attr("text-anchor", "middle")
		.attr("transform", "rotate(-90)")
		.text("Work Remaining");

}

$(function () {

    var securityIdealData = [
        { 'x': 0, 'y': 210 },
        { 'x': 19, 'y': 0 }
    ]

    var securityData = [
        { 'x': 0, 'y': 210 },
        { 'x': 1, 'y': 205 },
        { 'x': 2, 'y': 204 },
        { 'x': 3, 'y': 204 },
        { 'x': 4, 'y': 201 },
        { 'x': 5, 'y': 198 },
        { 'x': 6, 'y': 192 },
        { 'x': 7, 'y': 186 },
        { 'x': 8, 'y': 177 },
        { 'x': 9, 'y': 164 },
        { 'x': 10, 'y': 146 },
        { 'x': 11, 'y': 135 },
        { 'x': 12, 'y': 130 },
        { 'x': 13, 'y': 122 },
        { 'x': 14, 'y': 108 },
        { 'x': 15, 'y': 97 },
        { 'x': 16, 'y': 82 }
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
        { 'x': 32, 'y': 0 }
    ];

    var ITIdealData = [
        { 'x': 0, 'y': 210 },
        { 'x': 46, 'y': 0 }
    ]

    var ITData = [
        { 'x': 0, 'y': 210 }, // 2/9/2015
        { 'x': 1, 'y': 210 }, // 2/16/2015
        { 'x': 2, 'y': 210 }, // 2/23/2015
        { 'x': 3, 'y': 210 }, // 3/2/2015
        { 'x': 4, 'y': 210 }, // 3/9/2015
        { 'x': 5, 'y': 210 }, // 3/16/2015
        { 'x': 6, 'y': 210 }, // 3/23/2015
        { 'x': 7, 'y': 210 }, // 3/31/2015
        { 'x': 8, 'y': 210 }, // 4/7/2015
        { 'x': 9, 'y': 210 }, // 4/14/2015
        { 'x': 10, 'y': 204 }, // 4/21/2015
        { 'x': 11, 'y': 200 }, // 4/28/2015
        { 'x': 12, 'y': 193}, // 5/5/2015
        { 'x': 13, 'y': 191 }, // 5/12/2015
        { 'x': 14, 'y': 191 }, // 5/19/2015
        { 'x': 15, 'y': 191 }, // 5/26/2015
        { 'x': 16, 'y': 181 }, // 6/2/2015
        { 'x': 17, 'y': 148 }, // 6/9/2015
        { 'x': 18, 'y': 118 }, // 6/16/2015 
        { 'x': 19, 'y': 111 },
        { 'x': 20, 'y': 104 },
        { 'x': 21, 'y': 102 },
        { 'x': 22, 'y': 100 },
        { 'x': 23, 'y': 98 },
        { 'x': 24, 'y': 85 },
        { 'x': 25, 'y': 72 },
        { 'x': 26, 'y': 67 },
        { 'x': 27, 'y': 62 },
        { 'x': 27, 'y': 57 },
        { 'x': 27, 'y': 51 },
        { 'x': 27, 'y': 45 }

    ];

    var opsIdealData = [
        { 'x': 0, 'y': 21 },
        { 'x': 15, 'y': 0 }
    ]

    var opsData = [
        { 'x': 0, 'y': 21 } // 2/9/2015        

    ];

    initChart('#SecurityBurndown', securityIdealData, securityData, 'red', 450, 225);
    initChart('#DataBurndown', dataIdealData, dataData, '#91E500', 450, 225);
    initChart('#ITBurndown', ITIdealData, ITData, '#91E500', 450, 225);
    initChart('#OpsBurndown', opsIdealData, opsData, 'red', 450, 225);

});
