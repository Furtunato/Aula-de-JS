
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];


const listaMeses = document.getElementById('meses-lista');


meses.forEach(function(mes) {
    const li = document.createElement('li');
    li.textContent = mes;
    listaMeses.appendChild(li);
});
