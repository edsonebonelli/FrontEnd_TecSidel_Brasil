document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('temperature').innerText = '25°C';
    document.getElementById('humidity').innerText = '60%';
    document.getElementById('wind').innerText = '15 km/h';

    const temperatureForecastData = {
        labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        datasets: [{
            label: 'Temperatura (°C)',
            data: [20, 22, 25, 23, 21],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
        }]
    };
    const humidityForecastData = {
        labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        datasets: [{
            label: 'Umidade (%)',
            data: [80, 70, 60, 65, 75],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
        }]
    };
    const temperatureChartCtx = document.getElementById('temperatureChart').getContext('2d');
    new Chart(temperatureChartCtx, {
        type: 'line',
        data: temperatureForecastData,
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
                        text: 'Temperatura (°C)'
                    }
                }
            }
        }
    });
    const humidityChartCtx = document.getElementById('humidityChart').getContext('2d');
    new Chart(humidityChartCtx, {
        type: 'line',
        data: humidityForecastData,
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
                        text: 'Umidade (%)'
                    }
                }
            }
        }
    });
});
