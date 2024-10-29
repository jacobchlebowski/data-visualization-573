import './filter.css';
import { select } from 'd3';
import { hue } from './hue-and-size';
import { xScale, yScale, createAxes } from './graph';
import originalData from './data.csv';

const width = 500;
const height = 500;
const margin = { top: 40, right: 40, bottom: 40, left: 40 };

const data = originalData.map((d) => ({
  name: d.Name,
  type: d.Type,
  speed: +d.Speed,
  attack: +d.Attack,
  defense: +d.Defense,
  HP: +d.HP,
}));

let selectedType = null;

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
  });
};

// Main function to set up the scatterplot and filter buttons
export const main = (container) => {
  // Set up the SVG container with margins applied only to `plotArea`
  const svg = select(container)
    .selectAll('svg')
    .data([null])
    .join('svg')
    .attr('id', 'scatterplot-svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .style('position', 'absolute') // align to top-left for consistent placement
    .style('top', `${margin.top}px`)
    .style('left', `${margin.left}px`);

  // Inner group to apply margin transform only once
  const plotArea = svg
    .append('g')
    .attr(
      'transform',
      `translate(${margin.left},${margin.top})`,
    );

  // Initial rendering of axes and circles
  createAxes(plotArea);
  hue(plotArea, { data, xScale, yScale });

  // Set up filter buttons in a separate div
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

    // Set data-type="ALL" attribute for the "All" button
    if (type === 'All') {
      button.setAttribute('data-type', 'ALL');
    }

    button.addEventListener('click', () => {
      selectedType = selectedType === type ? null : type;
      updateScatterPlot();
    });

    filterContainer.appendChild(button);
  });

  container.appendChild(filterContainer);
};

// Initialize the scatterplot once the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  if (container) {
    main(container);
  }
});
