document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('vehicleCount').innerText = 350;
    document.getElementById('revenue').innerText = 'R$ 1.200,00';
    const trafficData = {
        labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        datasets: [{
            label: 'Veículos',
            data: [50, 150, 200, 100, 75],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }]
    };
    const revenueData = {
        labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        datasets: [{
            label: 'Receita (R$)',
            data: [200, 400, 500, 300, 200],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true,
        }]
    };
    const trafficChartCtx = document.getElementById('trafficChart').getContext('2d');
    new Chart(trafficChartCtx, {
        type: 'line',
        data: trafficData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Hora do Dia'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Número de Veículos'
                    }
                }
            }
        }
    });
    const revenueChartCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueChartCtx, {
        type: 'line',
        data: revenueData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Hora do Dia'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Receita (R$)'
                    }
                }
            }
        }
    });
});
