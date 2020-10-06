//Definition af graf med chart.js
var graph = new Chart(ctx, {
    type: 'line',
    lineTension: 0.9,
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            label: 'Gennemsnitlig løsningstid (x er passwordlængde og y er tid i millisekunder',
            data: [0,0,0,0.003,0.33,3.369,34.343,350.129,3569.575,36391.908],
            backgroundColor: "lightgreen"
        }]
    },
    options: {
        responsive: false,
    },
});