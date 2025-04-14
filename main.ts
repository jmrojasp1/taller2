import { Serie } from "./serie";
import { series } from "./dataseries";

// Elementos del DOM
const seriesTableBody: HTMLElement = document.getElementById('series')!;
const averageElement: HTMLElement = document.getElementById('average')!;
const detailCard: HTMLElement = document.getElementById('card')!;
const titleElement: HTMLElement = document.getElementById('title')!;
const descriptionElement: HTMLElement = document.getElementById('description')!;
const imageElement: HTMLImageElement = document.getElementById('image') as HTMLImageElement;
const urlElement: HTMLAnchorElement = document.getElementById('url') as HTMLAnchorElement;
// Renderizar tabla
renderSeriesTable(series);

// Calcular promedio
const averageSeasons: number = calculateAverageSeasons(series);
displaySeasonAverage(averageSeasons);

function renderSeriesTable(seriesList: Serie[]): void {
  seriesList.forEach((serie) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.title}</td>
      <td>${serie.network}</td>
      <td>${serie.seasons}</td>
    `;
    row.addEventListener('click', () => showSeriesDetails(serie));
    seriesTableBody.appendChild(row);
  });
}

function calculateAverageSeasons(seriesList: Serie[]): number {
  return seriesList.reduce((sum, serie) => sum + serie.seasons, 0) / seriesList.length;
}

function displaySeasonAverage(average: number): void {
  averageElement.textContent = `Average seasons: ${average.toFixed(2)}`;
}

function showSeriesDetails(serie: Serie): void {
  // Mostrar la tarjeta
  detailCard.style.display = 'block';
  
  // Actualizar contenido
  titleElement.textContent = serie.title;
  descriptionElement.textContent = serie.description;
  urlElement.href = serie.url;
  
  // Cargar la imagen - ¡ESTO ES LO MÁS IMPORTANTE!
  imageElement.src = serie.imageUrl;  // Se asegura de cargar la imagen correctamente
  imageElement.alt = `${serie.title} poster`; // Asegura que la imagen tenga un texto alternativo
  
  console.log('Loading image from:', serie.imageUrl); // Para depuración
}
