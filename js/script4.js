document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const plate = document.getElementById('plate').value;
    const currentDateTime = new Date();

    document.getElementById('carPlate').textContent = plate;
    document.getElementById('passTime').textContent = currentDateTime.toLocaleString('pt-BR');

    document.getElementById('carInfo').classList.remove('hidden');
});
