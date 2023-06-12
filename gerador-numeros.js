const button = document.getElementById('gerar');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let valor = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(valor)) {
        valor = 'Valor inválido';
    }

    document.querySelector('#valor > span').textContent = valor;
});