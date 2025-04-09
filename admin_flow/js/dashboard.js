/*window.onload = function () {
     var options1 = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "",
      },
      legend: {
        horizontalAlign: "right",
        verticalAlign: "center",
      },
      data: [
        {
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name}",
          legendText: "{name} (#percent%)",
          indexLabelPlacement: "inside",
          dataPoints: [
            { y: 6566.4, name: "40%" },
            { y: 2599.2, name: "50%" },
            { y: 1231.2, name: "10%" },
          ],
          options: {
            responsive: true,
            title: {
              display: true,
              text: "Color test",
            },
          },
        },
      ],
    };
    $("#RevenueChart").CanvasJSChart(options1);
    };
*/
  
    
  
  
  /* SalesByUnit Bar Chart */
  window.onload = function () {
    CanvasJS.addColorSet("greenShades", [
      //colorSet Array
  
      "#302C6F",
      "#A8709F",
      "#83b8ad",
      "#62B7B8",
    ]);
  
    var chart = new CanvasJS.Chart("SalesByUnit", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      colorSet: "greenShades",
  
      title: {
        // text: "GDP Growth Rate - 2016"
      },
      axisY: {
        title: "Unit Solds",
        //suffix: "%"
      },
      axisX: {
        // title: "Countries"
      },
      data: [
        {
          type: "column",
          indexLabelFontColor: "red",
          //  yValueFormatString: "#,##0.0#\"%\"",
          dataPoints: [
            { label: "1A-A", y: 60 },
            { label: "1A-B", y: 36 },
            { label: "2A-C", y: 66 },
            { label: "3A-1", y: 56 },
          ],
        },
      ],
    });
    chart.render();
  };
  
  /*Google charts  */
  google.charts.load("current", { packages: ["bar"] });
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    // Revenue by Room type
    var data2 = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      ["1 Beds ", 40],
      ["2 Beds", 50],
      ["3 Beds", 10],
    ]);
  
    var options2 = {
      title: "",
      colors: ["#302C6F", "#5872A7", "#83B8AD"],
      pieSliceBorderColor: "none", // Removes the white line or gap
      pieStartAngle: 280,
      legend: {
        position: "none",
        // position: "top", // Position the legend below the chart
        // alignment: "center", // Align the legend items vertically
        // maxLines: 3, // Set maximum number of lines for the legend
      },
      // legend: false,
    };
  
    var chart2 = new google.visualization.PieChart(
      document.getElementById("piechart")
    );
    chart2.draw(data2, options2);
  
    // Sales Channel Comparison
  
    var data3 = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      ["Direct Sales", 55],
      ["Broker Assisted", 45],
    ]);
  
    var options3 = {
      title: "",
      pieHole: 0.4,
      colors: ["#7CACC7", "#0369A1"],
      pieSliceBorderColor: "none", // Removes the white line or gap
      pieStartAngle: 280,
      legend: {
        position: "bottom", // Position the legend below the chart
        alignment: "center", // Align the legend items vertically
        maxLines: 2, // Set maximum number of lines for the legend
      },
    };
  
    var chart3 = new google.visualization.PieChart(
      document.getElementById("donutchart")
    );
    chart3.draw(data3, options3);
  
    // genderRatio
  
    var data4 = google.visualization.arrayToDataTable([
      ["Task", "Gender Count"],
      ["Female ", 170],
      ["Male", 145],
    ]);
    var options4 = {
      title: "",
      pieHole: 0.4,
      colors: ["#302c6f", "#a8709f"],
      pieSliceBorderColor: "none", // Removes the white line or gap
      pieStartAngle: 180,
      legend: {
        position: "none",
        // position: 'bottom', // Position the legend below the chart
        // alignment: 'center', // Align the legend items vertically
        // maxLines: 2 // Set maximum number of lines for the legend
      },
    };
  
    var chart4 = new google.visualization.PieChart(
      document.getElementById("genderratiounit")
    );
    chart4.draw(data4, options4);
  
    //   nationalityannotation
  
    var data1 = new google.visualization.arrayToDataTable([
      ["Move", "Percentage", { role: "annotation" }],
      ["Country 1", 100, "Country 1"],
      ["Country 2", 90, "Country 2"],
      ["Country 3", 80, "Country 3"],
      ["Country 4", 70, "Country 4"],
      ["Country 5", 60, "Country 5"],
      ["Country 6", 50, "Country 6"],
      ["Country 7", 40, "Country 7"],
      ["Country 8", 30, "Country 8"],
      ["Country 9", 25, "Country 9"],
      ["Country 10", 22, "Country 10"],
    ]);
  
    var view1 = new google.visualization.DataView(data1);
    view1.setColumns([
      0,
      1,
      {
        calc: function (dataTable, rowIndex) {
          var colors = [
            "#302C6F",
            "#353274",
            "#393679",
            "#3E3A7E",
            "#424083",
            "#464588",
            "#4B498D",
            "#4F4D92",
            "#535197",
            "#57559C",
            "#5C5AA1",
            "#6060A6",
          ];
  
          return colors[rowIndex];
        },
        type: "string",
        role: "style",
      },
      2, // Adding the annotation column
    ]);
  
    var options1 = {
      legend: { position: "none" },
      bars: "horizontal",
      bar: { groupWidth: "90%" },
      hAxis: {
        ticks: [], // Hide all x-axis ticks
        textStyle: {
          fontSize: 12, // Optionally adjust the font size if needed
          color: "transparent", // Hide x-axis labels by making them transparent
        },
      },
      vAxis: {
        textPosition: "none", // Hide vertical axis labels
      },
      chartArea: {
        width: "70%", // Adjust the chart width
        height: "80%", // Adjust the chart height
      },
      width: 400, // Set the chart width
      height: 300, // Set the chart height
    };
  
    var chart = new google.visualization.BarChart(
      document.getElementById("buynationalityunit")
    );
    chart.draw(view1, options1);
  
    //   buyerRange
    var data = google.visualization.arrayToDataTable([
      ["Age Range", "Percentage"],
      ["18-25", 10],
      ["25-35", 20],
      ["35-45", 30],
      ["45-55", 40],
      ["55-65", 50],
      ["65-75", 30],
      ["75+", 10],
    ]);
  
    var options = {
      width: 500,
      height: 300,
      legend: { position: "none" },
      bar: { groupWidth: "75%" },
      vAxis: {
        textPosition: "none", // Hide the vertical axis labels
        gridlines: { color: "transparent" }, // Hide gridlines
      },
      hAxis: {
        slantedText: false, // Keep the labels straight
        textStyle: {
          fontSize: 14, // Adjust the font size of x-axis labels
        },
        baselineColor: "transparent", // Hide the baseline
      },
      colors: ["#A8709F"], // Custom color for the bars
      chartArea: {
        width: "70%",
        height: "70%",
        backgroundColor: {
          stroke: "transparent", // Hide chart area borders
        },
      },
      backgroundColor: {
        fill: "transparent", // Transparent background
      },
    };
  
    var chart = new google.visualization.ColumnChart(
      document.getElementById("buyeragerangeunit")
    );
    chart.draw(data, options);
  }
  
  const dataModule = {
    labels: ["Good", "AVERAGE", "BAD"],
    datasets: [
      {
        data: [77, 14, 9],
        backgroundColor: ["#6FA66F", "#F36868", "#A8709F"],
      },
    ],
  };
  const options1 = {
    plugins: {
      legend: {
        position: "bottom", // Position the legend below the chart
        alignment: "center", // Align the legend items vertically
        maxLines: 3, // Set maximum number of lines for the legend
      },
      tooltips: {
        enabled: true,
      },
      textInside: {
        text: "",
        color: "green",
        fontSize: 22,
      },
    },
  };
  Chart.register({
    id: "textInside",
    afterDatasetsDraw: function (chart, _) {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;
      const fontSize = options1.plugins.textInside.fontSize;
      ctx.font = fontSize + "px Arial";
      ctx.fillStyle = options1.plugins.textInside.color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const text = options1.plugins.textInside.text;
      const textX = Math.round(width / 2);
      const textY = Math.round(height / 2);
      ctx.fillText(text, textX, textY);
    },
  });
  const textChart = new Chart(document.getElementById("CustomerFeedbackChart"), {
    type: "doughnut",
    data: dataModule,
    options: options1,
    responsive: true,
  });
  