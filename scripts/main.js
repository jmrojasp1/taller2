import { Serie } from "./serie.js";
import { series } from "./dataSeries.js";

let seriesTableBody = document.getElementById('series');
displaySeriesInTable(series);
let avgSeasons = calculateAverageSeasons(series);
displaySeasonAverage(avgSeasons);

function displaySeriesInTable(seriesList) {
  console.log('Displaying series');
  seriesList.forEach((show) => {
    let rowElement = document.createElement("tr");
    rowElement.innerHTML = `<td><strong>${show.id}</strong></td>
                           <td><span style="color: blue;">${show.title}</span></td>
                           <td>${show.network}</td>
                           <td>${show.seasons}</td>`;
    
    rowElement.addEventListener('click', () => showSeriesDetails(show));
    seriesTableBody.appendChild(rowElement);
  });
}

function calculateAverageSeasons(seriesList) {
  let totalSeasons = seriesList.reduce((sum, show) => sum + show.seasons, 0);
  return totalSeasons / seriesList.length;
}

function displaySeasonAverage(average) {
  let avgElement = document.getElementById('average');
  avgElement.innerHTML = `Seasons average: ${average.toFixed(2)}`;
} 

function showSeriesDetails(show) {
  let detailCard = document.getElementById('card');
  let titleElement = document.getElementById('title');
  let descriptionElement = document.getElementById('description');
  let imageElement = document.getElementById('image');
  let urlElement = document.getElementById('URL');

  detailCard.style.display = 'block';
  titleElement.innerHTML = show.title;
  descriptionElement.innerHTML = show.description;
  imageElement.src = show.image;
  urlElement.href = show.url;
}