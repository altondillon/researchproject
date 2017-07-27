var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Max's PC", "Adrian's Macbook", "Samsung TV", "Roku", "Samantha's iPad", "Max's iPhone"],
        datasets: [{
            label: 'GB\'s Used',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 50, 50, 0.7)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,50,50,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: true,
            labels: {
        }
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Devices on the Network'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'GB\'s Used'
                },
                ticks: {
                    beginAtZero:true
                },
            }]
        }
    }
});
