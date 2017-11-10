// api key to https://www.alphavantage.co/support/#api-key
// NKT90SOYWKFBP04F






$(document).ready(function() {
        var myJSON = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=1min&apikey=NKT90SOYWKFBP04F";


        var timeInfo = [];
        var myDate;
        var myPrice;
        var myVolume;
        var symbol;
        var symbolInfo;
        var volumeInfo = [];
        // var fakeCSV = [];
        

        $.getJSON(myJSON, handleResponse);
        console.log("yo this is myJson " + myJSON);

        function handleResponse(response) {
            console.log(response);
            symbol = response["Meta Data"]["2. Symbol"];
            console.log(symbol);
            symbolInfo = response["Time Series (1min)"];
            console.log(symbolInfo);

            Object.keys(symbolInfo).forEach(function(key) {
                myDate = key.substr(0, 10);
                var shortKey = key.substr(11, 15);
                // console.log(shortKey, symbolInfo[key]);
                myPrice = parseFloat(symbolInfo[key]["4. close"]);
                myVolume = parseInt(symbolInfo[key]["5. volume"]);
                myPrice = myPrice.toFixed(2);
                console.log(shortKey, myPrice, myVolume);

                timeInfo.push({ time: shortKey, price: myPrice, volume: myVolume });
                volumeInfo.push({ time: shortKey, price: myPrice, volume: myVolume });
                // fakeCSV.push('time, price, volume, ' + shortKey + ', ' + myPrice + ', ' + myVolume );
            });




            

            volumeInfo.sort(function(a, b){
            	return b.volume - a.volume;
            })

            console.log(myDate);
            console.log(typeof myVolume);
            console.log(timeInfo);
            // console.log(fakeCSV);

            
            

/// div version


            var barData =[volumeInfo[0].volume, volumeInfo[1].volume, volumeInfo[2].volume, volumeInfo[3].volume, volumeInfo[4].volume, volumeInfo[5].volume];




            var scaleMe = d3.scaleLinear()
                .domain([0, d3.max(barData)])
                .range([0, 100]);

            d3.select("#volume-chart")
                .selectAll("div")
                .data(barData)
                .enter()
                .append("div").attr("class", "bar4chart")
                .style("width", function(d) {
                    return scaleMe(d) + "%"; })
                .append("span").attr("class", "barText")
                .text(function(d) {
                    return d; });



/// both svg versions

            var data = [volumeInfo[0].volume, volumeInfo[1].volume, volumeInfo[2].volume, volumeInfo[3].volume, volumeInfo[4].volume, volumeInfo[5].volume];



/// just svg version 1

            var width = 420,
                barHeight = 20;

            var x = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, width]);



            var chart = d3.select("#svg-chart")
                .attr("width", width)
                .attr("height", barHeight * data.length);

            var bar = chart.selectAll("g")
                .data(data)
                .enter().append("g")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * barHeight + ")"; });

            bar.append("rect")
                .attr("width", x)
                .attr("height", barHeight - 1);

            bar.append("text")
                .attr("x", function(d) {
                    return x(d) - 3; })
                .attr("y", barHeight / 2)
                .attr("dy", ".35em")
                .text(function(d) {
                    return d; });



           
/// svg version 2 inside div 
			var totalWidth = 420,
                barHeight = 20;
            var textWidth;

            var scaleMe = d3.scaleLinear()
                .domain([0, d3.max(data)])
                .range([0, totalWidth]);


            var newSvg = d3.select("div#container")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 420 420")
                .classed("svg-content", true);



            var bar = newSvg.selectAll("g")
                .data(data)
                .enter().append("g")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * barHeight + ")"; });

            bar.append("rect")
                .attr("width", scaleMe)
                .attr("height", barHeight - 4);

            bar.append("text")
                .attr("x", function(d) {
                    return scaleMe(d) + 5; })
                .attr("y", (barHeight - 4) / 2)
                .attr("dy", ".35em")
                .text(function(d) {
                    return d; });






// my learning one




			// timeInfo.sort(function(a, b){
   //          	return b.time - a.time;
   //          })

			// console.log(timeInfo);

			// var data = [price:1111.89, time:"15:12:00", volume:1457]

			var totalWidth = 420,
                barHeight = 20;
            var textWidth = 25;


			// var data =[];
			var myPrice = [];
			var time = [];
           

           // filter means you aren't fucking up the entire array

           // timeInfo.filter(item => (item.price>1112)).forEach((item)=>{
	          //   	time.push(item.time);
	          //   	price.push(item.price)

	          //   }); 

      
           for (i=0; i<10; i++){
           	time.push(timeInfo[i].time);
           	var newPrice = parseFloat(timeInfo[i].price).toFixed(2);
           	// var newPrice = timeInfo[i].price;
	        myPrice.push(newPrice);
           }

           console.log(myPrice);

          
           	

			var newSvg = d3.select("div#pricing-chart")
                .append("svg")
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 420 420")
                .classed("svg-content", true);

               

           // mapping function, maps width to values
           var scaleMe = d3.scaleLinear()
                .domain([0, d3.max(d3.values(myPrice))])
                .range([0, totalWidth]);
		  


            var square = newSvg.selectAll("g")
                .data(myPrice)
                .enter().append("g")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * barHeight + ")"; });
            //the above says where to append it and how, not one ontop of another    




            // width is the scaling function
           square.append("rect")
                .attr("width", scaleMe)
                .attr("height", barHeight - 3)
                .attr('fill', 'teal');

           square.append('text')
                .attr("x", function(d) {
                    return scaleMe(d) - 50; })
                .attr("y", (barHeight - 4) / 2)
                .attr("dy", ".35em")
                .text(function(d) {
                    return d; });


            
/// line chart



// // Define margins
//     var margin = {top: 20, right: 80, bottom: 30, left: 50},
//     width = parseInt(d3.select("#chart").style("width")) - margin.left - margin.right,
//     height = parseInt(d3.select("#chart").style("height")) - margin.top - margin.bottom;

//     // Define date parser
//     // var parseDate = d3.time.format("%Y-%m-%d %H:%M:%S").parse;
//     // var parseDate = d3.timeFormat("%H:%M:%S").parse;
//     var parseDate = d3.timeParse("%H:%M:%S");

//     // Define scales
//     var xScale = d3.scaleTime().range([0, width]);
//     var yScale = d3.scaleLinear().range([height, 0]);
//     var color = d3.scaleOrdinal()
//           .range(["#8c510a", "#dfc27d", "#35978f"]);

//     // Define axes
//     // var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
//     // var yAxis = d3.svg.axis().scale(yScale).orient("left");
//     var xAxis = d3.axisBottom().scale(xScale);
// 	var yAxis = d3.axisLeft().scale(yScale);

//     // Define lines
//     // var line = d3.line().interpolate("basis")
//     //             .x(function(d) { return xScale(d["date"]); })
//     //             .y(function(d) { return yScale(d["concentration"]); });

//     var line = d3.line()
//     .x(function(d) { return xScale(d["time"]); })
//     .y(function(d) { return yScale(d["concentration"]); });

//     // Define svg canvas
//     var svg = d3.select("#chart")
//                 .attr("width", width + margin.left + margin.right)
//                 .attr("height", height + margin.top + margin.bottom)
//                 .append("g")
//                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     // Read in data

//     var data = timeInfo;
//     // d3.csv("amzn.csv", function(error, data){
//       // if (error) throw error;

//       // Set the color domain equal to the three product categories
//       var tickerCategory = d3.keys(data[0]).filter(function(key){return (key !== "ticker") && (key !== "time")})
//       color.domain(tickerCategory);

//       // console.log(JSON.stringify(data, null, 2)) // to view the structure

//       // Format the data field
//       data.forEach(function(d){
//         d["time"] = parseDate(d["time"])
//       });

//       // Filter the data to only include a single metric
//       var subset = data.filter(function(el) {return el.metric === "price" });
//       // console.log(JSON.stringify(subset, null, 2))

//       // Reformat data to make it more copasetic for d3
//       // data = An array of objects
//       // concentrations = An array of three objects, each of which contains an array of objects
//       var concentrations = tickerCategory.map(function(category){
//         return {category: category, datapoints: subset.map(function(d){
//           return {date: d["time"], concentration: +d[category]}
//         })}
//       })
//       // console.log(JSON.stringify(concentrations, null, 2)) // to view the structure

//       // Set the domain of the axes
//       xScale.domain(d3.extent(subset, function(d) {return d["time"]; }));

//       yScale.domain([0.25, 0.5]);

//       // Place the axes on the chart
//       svg.append("g")
//           .attr("class", "x axis")
//           .attr("transform", "translate(0," + height + ")")
//           .call(xAxis);

//       svg.append("g")
//           .attr("class", "y axis")
//           .call(yAxis)
//         .append("text")
//           .attr("class", "label")
//           .attr("y", 6)
//           .attr("dy", ".71em")
//           .attr("dx", ".71em")
//           .style("text-anchor", "beginning")
//           .text("Product Concentration");

//       var products = svg.selectAll(".category")
//             .data(concentrations)
//             .enter().append("g")
//             .attr("class", "category");

//       products.append("path")
//               .attr("class", "line")
//               .attr("d", function(d) {return line(d.datapoints); })
//               .style("stroke", function(d) {return color(d.category); });

//         // console.log(JSON.stringify(d3.values(concentrations), null, 2)) // to view the structure
//         console.log(d3.values(concentrations)); // to view the structure
//         console.log(concentrations);
//         // console.log(concentrations.map(function()))
//     // });

   





//  Line Chart Checklist

// 1. Add an SVG to draw our line chart on
// 2. Use the D3 standard margin convetion
// 3. Create an x axis
// 4. Create a y axis
// 5. Create an x scale
// 6. Create a y scale
// 7. Create a line generator
// 8. Create a random dataset
// 9. Create a path object for the line
// 10. Bind the data to the path object
// 11. Call the line generator on the data-bound path object
// 12. Add circles to show each datapoint
// 13. Add some basic styling to the chart so its easier on the eyes





    // 2. Use the margin convention practice 
    var margin = {top: 50, right: 50, bottom: 50, left: 50}
      , width = window.innerWidth - margin.left - margin.right // Use the window's width 
      , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

    
// so this makes a perfectly square charts
    var chartWidth = $('#chart').width();
    
    console.log(chartWidth);


    var margin = {top: 50, right: 50, bottom: 50, left: 50}
      , width = chartWidth - margin.left - margin.right // Use the window's width 
      , height = chartWidth - margin.top - margin.bottom; // Use the window's height

   

    // The number of datapoints
    var n = 21;

    // 5. X scale will use the index of our data
    var xScale = d3.scaleLinear()
        .domain([0, n-1]) // input
        .range([0, width]); // output

    // 6. Y scale will use the randomly generate number 
    var yScale = d3.scaleLinear()
        .domain([0, 1]) // input 
        .range([height, 0]); // output 

    // 7. d3's line generator
    var line = d3.line()
        .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
        .y(function(d) { return yScale(d.y); }) // set the y values for the line generator 
        .curve(d3.curveMonotoneX) // apply smoothing to the line

    // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })

    // 1. Add the SVG to the page and employ #2
    var svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // 3. Call the x axis in a group tag
    svg.append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    // 4. Call the y axis in a group tag
    svg.append("g")
        .attr("class", "yAxis")
        .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

    // 9. Append the path, bind the data, and call the line generator 
    svg.append("path")
        .datum(dataset) // 10. Binds data to the line 
        .attr("class", "line") // Assign a class for styling 
        .attr("d", line); // 11. Calls the line generator 

    // 12. Appends a circle for each datapoint 
    svg.selectAll(".dot")
        .data(dataset)
      .enter().append("circle") // Uses the enter().append() method
        .attr("class", "dot") // Assign a class for styling
        .attr("cx", function(d, i) { return xScale(i) })
        .attr("cy", function(d) { return yScale(d.y) })
        .attr("r", 5);








 // //Define responsive behavior
 //    function resize(divWidth) {
 //      var width = divWidth - margin.left - margin.right,
 //      height = parseInt(d3.select("#chart").style("height")) - margin.top - margin.bottom;

 //      // Update the range of the scale with new width/height
 //      xScale.range([0, width]);
 //      yScale.range([height, 0]);

 //      // Update the axis and text with the new scale
 //      svg.select('.x.axis')
 //        .attr("transform", "translate(0," + height + ")")
 //        .call(xAxis);

 //      svg.select('.y.axis')
 //        .call(yAxis);

 //      // Force D3 to recalculate and update the line
 //      svg.selectAll('.line')
 //        .attr("d", function(d) { return line(d.datapoints); });

 //      // Update the tick marks
 //      xAxis.ticks(Math.max(width/75, 2));
 //      yAxis.ticks(Math.max(height/50, 2));

 //    };

 //    // Call the resize function whenever a resize event occurs
 //    d3.select(window).on('resize', resize);

 //    // Call the resize function
 //    resize();















        }
        // inside handle response








        //asking d3 to put stuff in #volume-chart
        // above function is "chained"
        // no divs have been created yet
        // .data gets data array
        // .enter calls the function




    })
    // end doc ready
