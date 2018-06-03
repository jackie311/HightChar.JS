Highcharts.setOptions({
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                    ]
            },
            borderWidth: 2,
            plotBackgroundColor: 'rgba(255, 255, 255, .9)',
            plotShadow: true,
            plotBorderWidth: 1
        }
    });


//
// var option1 = {
//   xAxis: {
//     type: 'datetime'
//   },
//   series: [{
//            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//            pointStart: Date.UTC(2010, 0, 1),
//            pointInterval: 3600 * 1000 // one hour
//    }]
// };
//
// var option2 = {
//   chart: {
//             type: 'column'
//         },
//
//         xAxis: {
//             type: 'datetime'
//         },
//
//         series: [{
//             data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
//             pointStart: Date.UTC(2010, 0, 1),
//             pointInterval: 3600 * 1000 // one hour
//         }]
// }
//
// var chart1 = Highcharts.chart('char1', option1);
// var chart2 = Highcharts.chart('char2', option2);

var chart3 = new Highcharts.chart({
  chart: {
            renderTo: 'char1',
        },
  xAxis: {
    type: 'datetime'
  },
  series: [{
           data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
           pointStart: Date.UTC(2010, 0, 1),
           pointInterval: 3600 * 1000 // one hour
   }]
});

var chart4 = new Highcharts.chart({
  chart: {
    renderTo: 'char2',
    type: 'column'
  },
  xAxis: {
    type: 'datetime'
  },
  series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      pointStart: Date.UTC(2010, 0, 1),
      pointInterval: 3600 * 1000 // one hour
  }]
})
