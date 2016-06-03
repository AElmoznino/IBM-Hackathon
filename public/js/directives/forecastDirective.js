angular
    .module('fanCo')
    .directive('forecastDirective', ['d3Service', 'forecast', function(d3service, forecast) {
      return {
        link: function(scope, element, attrs) {
          d3Service.d3().then(function(d3) {

            // Nothing happens or logs from the below. Make sure to pass correct value in line 76.
            console.log(scope.forecast);
            console.log(forecast.forecastData);
            scope.forecast = forecast.forecastData;

            var data = scope.forecast;

            // hardcoded sample GET from forecast.io
            // var data = [
            //   {"latitude":42.3587,"longitude":-71.0567,"timezone":"America/New_York","offset":-4,"daily":{"summary":"Light rain tomorrow through Friday, with temperatures peaking at 27°C on Monday.","icon":"rain","data":[{"time":1464926400,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1464945023,"sunsetTime":1464999448,"moonPhase":0.95,"precipIntensity":0,"precipIntensityMax":0,"precipProbability":0,"temperatureMin":14.49,"temperatureMinTime":1464926400,"temperatureMax":21.88,"temperatureMaxTime":1464987600,"apparentTemperatureMin":14.49,"apparentTemperatureMinTime":1464926400,"apparentTemperatureMax":21.88,"apparentTemperatureMaxTime":1464987600,"dewPoint":14.47,"humidity":0.83,"windSpeed":2.15,"windBearing":126,"visibility":15.03,"cloudCover":0.79,"pressure":1017.5,"ozone":316.01},{"time":1465012800,"summary":"Light rain starting in the evening.","icon":"rain","sunriseTime":1465031400,"sunsetTime":1465085890,"moonPhase":0.98,"precipIntensity":0.0762,"precipIntensityMax":0.5182,"precipIntensityMaxTime":1465084800,"precipProbability":0.55,"precipType":"rain","temperatureMin":15.16,"temperatureMinTime":1465030800,"temperatureMax":25.36,"temperatureMaxTime":1465063200,"apparentTemperatureMin":15.16,"apparentTemperatureMinTime":1465030800,"apparentTemperatureMax":25.36,"apparentTemperatureMaxTime":1465063200,"dewPoint":16.22,"humidity":0.79,"windSpeed":0.96,"windBearing":134,"visibility":12.91,"cloudCover":0.54,"pressure":1013.99,"ozone":318.95},{"time":1465099200,"summary":"Rain throughout the day.","icon":"rain","sunriseTime":1465117780,"sunsetTime":1465172331,"moonPhase":0.03,"precipIntensity":0.8865,"precipIntensityMax":3.1826,"precipIntensityMaxTime":1465171200,"precipProbability":0.73,"precipType":"rain","temperatureMin":16.32,"temperatureMinTime":1465124400,"temperatureMax":21.4,"temperatureMaxTime":1465149600,"apparentTemperatureMin":16.32,"apparentTemperatureMinTime":1465124400,"apparentTemperatureMax":21.4,"apparentTemperatureMaxTime":1465149600,"dewPoint":16.31,"humidity":0.89,"windSpeed":3.53,"windBearing":115,"visibility":15.32,"cloudCover":0.92,"pressure":1009.62,"ozone":308.08},{"time":1465185600,"summary":"Drizzle starting in the afternoon, continuing until evening.","icon":"rain","sunriseTime":1465204161,"sunsetTime":1465258771,"moonPhase":0.06,"precipIntensity":0.2007,"precipIntensityMax":1.1709,"precipIntensityMaxTime":1465185600,"precipProbability":0.64,"precipType":"rain","temperatureMin":16.48,"temperatureMinTime":1465185600,"temperatureMax":27.08,"temperatureMaxTime":1465239600,"apparentTemperatureMin":16.48,"apparentTemperatureMinTime":1465185600,"apparentTemperatureMax":27.64,"apparentTemperatureMaxTime":1465239600,"dewPoint":16.85,"humidity":0.74,"windSpeed":3.76,"windBearing":198,"visibility":13.87,"cloudCover":0.48,"pressure":998.22,"ozone":330.66},{"time":1465272000,"summary":"Partly cloudy starting in the afternoon, continuing until evening.","icon":"partly-cloudy-day","sunriseTime":1465290545,"sunsetTime":1465345209,"moonPhase":0.1,"precipIntensity":0.0508,"precipIntensityMax":0.066,"precipIntensityMaxTime":1465300800,"precipProbability":0.08,"precipType":"rain","temperatureMin":18.63,"temperatureMinTime":1465282800,"temperatureMax":25.08,"temperatureMaxTime":1465322400,"apparentTemperatureMin":18.63,"apparentTemperatureMinTime":1465282800,"apparentTemperatureMax":25.08,"apparentTemperatureMaxTime":1465322400,"dewPoint":14.02,"humidity":0.65,"windSpeed":3.36,"windBearing":235,"cloudCover":0.14,"pressure":998.4,"ozone":341.66},{"time":1465358400,"summary":"Partly cloudy in the afternoon.","icon":"partly-cloudy-day","sunriseTime":1465376931,"sunsetTime":1465431645,"moonPhase":0.13,"precipIntensity":0.0178,"precipIntensityMax":0.0305,"precipIntensityMaxTime":1465408800,"precipProbability":0.02,"precipType":"rain","temperatureMin":15.34,"temperatureMinTime":1465376400,"temperatureMax":22.17,"temperatureMaxTime":1465419600,"apparentTemperatureMin":15.34,"apparentTemperatureMinTime":1465376400,"apparentTemperatureMax":22.17,"apparentTemperatureMaxTime":1465419600,"dewPoint":10.57,"humidity":0.62,"windSpeed":3.99,"windBearing":282,"cloudCover":0.08,"pressure":998.82,"ozone":380.21},{"time":1465444800,"summary":"Partly cloudy starting in the afternoon, continuing until evening.","icon":"partly-cloudy-day","sunriseTime":1465463318,"sunsetTime":1465518079,"moonPhase":0.16,"precipIntensity":0.0102,"precipIntensityMax":0.0178,"precipIntensityMaxTime":1465516800,"precipProbability":0.01,"precipType":"rain","temperatureMin":13.09,"temperatureMinTime":1465466400,"temperatureMax":18.58,"temperatureMaxTime":1465495200,"apparentTemperatureMin":13.09,"apparentTemperatureMinTime":1465466400,"apparentTemperatureMax":18.58,"apparentTemperatureMaxTime":1465495200,"dewPoint":7.42,"humidity":0.58,"windSpeed":4.94,"windBearing":300,"cloudCover":0.14,"pressure":1004.62,"ozone":390.58},{"time":1465531200,"summary":"Light rain overnight.","icon":"rain","sunriseTime":1465549708,"sunsetTime":1465604512,"moonPhase":0.2,"precipIntensity":0.0432,"precipIntensityMax":0.3048,"precipIntensityMaxTime":1465614000,"precipProbability":0.49,"precipType":"rain","temperatureMin":14.21,"temperatureMinTime":1465549200,"temperatureMax":20.76,"temperatureMaxTime":1465588800,"apparentTemperatureMin":14.21,"apparentTemperatureMinTime":1465549200,"apparentTemperatureMax":20.76,"apparentTemperatureMaxTime":1465588800,"dewPoint":9.3,"humidity":0.61,"windSpeed":2.95,"windBearing":280,"cloudCover":0.69,"pressure":1008.55,"ozone":339.86}]}}
            // ];


          // data.forEach(function(d) { d.timestamp = new Date(d.timestamp * 86400); });

          var chart = d3.select('.line').append('svg'),
              width = 900,
              height = 500,
              margins = {
                top: 20,
                right: 20,
                bottom: 20,
                left: 50
              },
              xScale = d3.time.scale().range([margins.left, width - margins.right]),
              yScale = d3.scale.linear().range([height - margins.top, margins.bottom]),
              xAxis = d3.svg
                        .axis()
                        .scale(xScale)
                        .ticks(8)
                        .tickSize(1)
                        .tickFormat(d3.time.format('%d/%m'))
                        .orient('bottom'),

              yAxis = d3.svg
                        .axis()
                        .scale(yScale)
                        .ticks(10)
                        .tickSize(1)
                        .orient('left');

              chart.attr('width', width + margins.left + margins.right)
                   .attr('height', height + margins.top + margins.bottom);

              chart.append('svg:g')
                   .attr('class', 'x axis')
                   .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
                   .call(xAxis)
                   .attr('shape-rendering', 'crispEdges');

              chart.selectAll('.x text ')
                   .attr('transform', function(d) {
                        // console.log( this.getBBox());
                        return 'translate(' + this.getBBox().height + ',' + this.getBBox().height + ')rotate(-45)';
                      });

              chart.append('svg:g')
                   .attr('class', 'y axis')
                   .attr('transform', 'translate(' + (margins.left) + ',0)')
                   .call(yAxis)
                   .attr('shape-rendering', 'crispEdges');

              var lineGen = d3.svg.line()
                   .x(function(d) {
                      return xScale(new Date(d.timestamp * 86400));
                   })
                   .y(function(d) {
                    return yScale(Number(d.temperatureMax));
                   })
                   .interpolate('basis');

              chart.append('svg:path')
                   .attr('d', lineGen(data)) // TODO: Verify what to pass into it
                   .attr('stroke', 'green')
                   .attr('stroke-width', 1)
                   .attr('fill', 'none');

          });
        }
      }
    }]);