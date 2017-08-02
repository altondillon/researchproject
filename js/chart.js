var name;
var dataGB = [352, 340, 280, 206, 305, 173];
var clickedPt;
var sum = dataGB.reduce(add, 0);
function add(a, b){
    return a + b;
}
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Max's PC", "Adrian's Macbook", "Samsung TV", "Roku", "Samantha's iPad", "Max's iPhone"],
        datasets: [{
            label: 'GB\'s Used',
            data: dataGB,
            backgroundColor: [
                'rgba(255, 50, 50, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
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
        onClick: graphClickEvent,
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            display: false,
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
function graphClickEvent(event, array){
    var activeElement = this.getElementAtEvent(event);
    var clickedPt = activeElement[0]._index;
    var data = dataGB[clickedPt];
    name = activeElement[0]._model.label;

    if(activeElement.length > 0){
        console.log(activeElement[0]);
        window.open("device.html","_self");
    } else {
        console.log("error");
    }
}
