// Noticias del día (actualízalas manualmente)
const noticias = [
    { titulo: "Bitcoin supera los $60,000", fecha: "2024-11-18" },
    { titulo: "Ethereum 2.0 se aproxima: ¿Qué esperar?", fecha: "2024-11-18" },
    { titulo: "Altcoins más prometedoras para 2024", fecha: "2024-11-18" },
];

// Renderizar noticias en la página
const newsList = document.getElementById("news-list");
noticias.forEach(noticia => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${noticia.fecha}</strong>: ${noticia.titulo}`;
    newsList.appendChild(li);
});

// Gráfico dinámico de precios
const ctx = document.getElementById("cryptoChart").getContext("2d");
const cryptoChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        datasets: [
            {
                label: "Bitcoin (USD)",
                data: [59000, 60000, 61000, 62000, 63000],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
            {
                label: "Ethereum (USD)",
                data: [4000, 4050, 4100, 4150, 4200],
                borderColor: "rgba(153, 102, 255, 1)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                fill: true,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
    },
});
