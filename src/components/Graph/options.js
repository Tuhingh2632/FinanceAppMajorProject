const options = {
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true
                    },
                    value: {
                        show: true
                    },
                    total: {
                        show: true
                    }
                }
            }
        }
    },
    chart: {
        width: 380,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
    }],
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetY: 0,
        height: 69,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 'light',
        formatter: function(seriesName, opts) {
            return [seriesName, " - ₹", opts.w.globals.series[opts.seriesIndex]]
        }
    },
    labels: ['invested amount', 'estimated returns'],
};

export default options;