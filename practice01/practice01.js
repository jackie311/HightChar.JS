var options = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'This is my first char'
  },
  xAxis: {
    categories: ['Apple', 'Banana', 'Oranges']
  },
  yAxis: {
    title: {
      text: 'Fruit Eaten'
    }
  },
  series: [{
    name: 'Jackie',
    data: [1, 0, 4]
  }, {
    name: 'Michelle',
    data: [5, 7, 3]
  }]
};

var myFirstChar = Highcharts.chart('container', options);
