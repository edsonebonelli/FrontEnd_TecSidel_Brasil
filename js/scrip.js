function atualizarDados() {
    document.getElementById('velocidade-media').textContent = '80 km/h';
    document.getElementById('veiculos-ponto-a').textContent = '150';
    document.getElementById('veiculos-ponto-b').textContent = '200';
    document.getElementById('veiculos-ponto-c').textContent = '2';
}

var ctx = document.getElementById('grafico-trafego').getContext('2d');
var graficoTrafego = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
        datasets: [{
            label: 'Veículos por hora',
            data: [10, 20, 15, 30, 25, 40],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var map = L.map('mapa-monitoramento').setView([-23.55052, -46.633308], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([-23.55052, -46.633308]).addTo(map)
    .bindPopup('Ponto de Monitoramento A')
    .openPopup();

atualizarDados();