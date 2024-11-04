import './filter.css';
import { select, scaleOrdinal } from 'd3';
import { hue, setSelectedPokemon } from './hue-and-size';
import { xScale, yScale, createAxes } from './graph';
import originalData from './data.csv';

const width = 500;
const height = 500;
const margin = {
  top: 40,
  right: 200, // Increased for legend and details
  bottom: 40,
  left: 40,
};

const data = originalData.map((d) => ({
  name: d.Name,
  type: d.Type,
  speed: +d.Speed,
  attack: +d.Attack,
  defense: +d.Defense,
  HP: +d.HP,
}));

let selectedType = null;

// Color scale to assign consistent colors to each Pokémon type
const typeColors = scaleOrdinal()
  .domain([
    'Water',
    'Fire',
    'Grass',
    'Normal',
    'Electric',
    'Bug',
    'Psychic',
    'Rock',
  ])
  .range([
    '#0000FF',
    '#FF0000',
    '#008000',
    '#FFFF00',
    '#4B0082',
    '#A52A2A',
    '#FFC0CB',
    '#00FFFF',
  ]);

// Main function to update the scatterplot based on selected type
const updateScatterPlot = () => {
  const svg = select('#scatterplot-svg');
  const plotArea = svg.select('g');

  // Clear previous elements to prevent overlap
  plotArea.selectAll('*').remove();

  // Re-draw axes and circles with the updated filter
  createAxes(plotArea);
  hue(plotArea, {
    data: selectedType
      ? data.filter((d) => d.type.includes(selectedType))
      : data,
    xScale,
    yScale,
    colorScale: typeColors,
  });
};

// Main function to set up the scatterplot and filter buttons
export const main = (container) => {
  const svg = select(container)
    .selectAll('svg')
    .data([null])
    .join('svg')
    .attr('id', 'scatterplot-svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('position', 'absolute')
    .style('top', `${margin.top}px`)
    .style('left', `${margin.left}px`);

  const plotArea = svg
    .append('g')
    .attr(
      'transform',
      `translate(${margin.left},${margin.top})`,
    );

  createAxes(plotArea);
  hue(plotArea, {
    data,
    xScale,
    yScale,
    colorScale: typeColors,
  });

  // Filter buttons
  const filterContainer = document.createElement('div');
  filterContainer.className = 'filter-container';

  const types = [
    'Water',
    'Fire',
    'Grass',
    'Normal',
    'Electric',
    'Bug',
    'Psychic',
    'Rock',
    'All',
  ];
  types.forEach((type) => {
    const button = document.createElement('button');
    button.textContent = type;
    button.className = 'filter-button';

    if (type === 'All') {
      button.setAttribute('data-type', 'ALL');
    }

    button.addEventListener('click', () => {
      selectedType = type === 'All' ? null : type;
      updateScatterPlot();
      setSelectedPokemon(null); // Clear selected Pokémon when filter is changed
    });

    filterContainer.appendChild(button);
  });

  container.appendChild(filterContainer);

  // Details display area for selected Pokémon
  const detailsContainer = document.createElement('div');
  detailsContainer.className = 'pokemon-details';
  detailsContainer.innerHTML =
    '<p>Click on a point to display the Pokémon.</p>';
  container.appendChild(detailsContainer);

  // Legend
  const legend = svg
    .append('g')
    .attr(
      'transform',
      `translate(${width + margin.left + 20}, ${margin.top})`,
    );
  types
    .filter((t) => t !== 'All')
    .forEach((type, i) => {
      const legendRow = legend
        .append('g')
        .attr('transform', `translate(0, ${i * 20})`);

      legendRow
        .append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', typeColors(type));
      legendRow
        .append('text')
        .attr('x', 20)
        .attr('y', 12)
        .text(type)
        .attr('text-anchor', 'start')
        .style('alignment-baseline', 'middle');
    });
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  if (container) {
    main(container);
  }
});
