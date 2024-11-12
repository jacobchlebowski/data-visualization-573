import './filter.css';
import { select, scaleOrdinal, selectAll } from 'd3';
import { hue, setSelectedPokemon } from './hue-and-size';
import { xScale, yScale, createAxes } from './graph';
import originalData from './data.csv';

const width = 500;
const height = 500;
const margin = {
  top: 40,
  right: 200,
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

let selectedType = null; // Persist filter state

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

const updateScatterPlot = () => {
  const svg = select('#scatterplot-svg');
  const plotArea = svg.select('g');

  plotArea.selectAll('*').remove(); // Clear only chart contents
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

// Function to calculate the number of Pokémon in each type
const getPokemonCountByType = (type) => {
  return data.filter((d) => d.type.includes(type)).length;
};

// Legend integration with hover functionality
const createLegend = (svg) => {
  const legend = svg
    .append('g')
    .attr(
      'transform',
      `translate(${width + margin.left + 20}, ${margin.top})`,
    );

  const types = [
    'Water',
    'Fire',
    'Grass',
    'Normal',
    'Electric',
    'Bug',
    'Psychic',
    'Rock',
  ];

  types
    .filter((t) => t !== 'All')
    .forEach((type, i) => {
      const legendRow = legend
        .append('g')
        .attr('transform', `translate(0, ${i * 20})`);

      // Rectangle for color block
      const rect = legendRow
        .append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', typeColors(type));

      // Text for the type name
      legendRow
        .append('text')
        .attr('x', 20)
        .attr('y', 12)
        .text(type)
        .attr('text-anchor', 'start')
        .style('alignment-baseline', 'middle');

      // Tooltip setup on hover
      rect
        .on('mouseover', () => {
          const count = getPokemonCountByType(type);
          const tooltip = select('#tooltip');
          tooltip
            .style('display', 'block')
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY - 10}px`)
            .html(
              `<strong>${type}</strong>: ${count} Pokémon`,
            );
        })
        .on('mouseout', () => {
          select('#tooltip').style('display', 'none');
        });
    });
};

export const main = (container) => {
  let svg = select(container).select('#scatterplot-svg');
  if (svg.empty()) {
    svg = select(container)
      .append('svg')
      .attr('id', 'scatterplot-svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .style('position', 'absolute')
      .style('top', `${margin.top}px`)
      .style('left', `${margin.left}px`);

    svg
      .append('g')
      .attr(
        'transform',
        `translate(${margin.left},${margin.top})`,
      );
  }

  updateScatterPlot();
  createLegend(svg); // Add the legend to the scatterplot

  if (!container.querySelector('.filter-container')) {
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
      if (type === 'All')
        button.setAttribute('data-type', 'ALL');
      button.addEventListener('click', () => {
        selectedType = type === 'All' ? null : type;
        updateScatterPlot();
        setSelectedPokemon(null);
      });
      filterContainer.appendChild(button);
    });

    container.appendChild(filterContainer);
  }

  if (!container.querySelector('.pokemon-details')) {
    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'pokemon-details';
    detailsContainer.innerHTML =
      '<p>Click on a point to display the Pokémon.</p>';
    container.appendChild(detailsContainer);
  }

  // Add tooltip div
  if (!document.querySelector('#tooltip')) {
    const tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    tooltip.style.position = 'absolute';
    tooltip.style.padding = '5px';
    tooltip.style.backgroundColor = '#fff';
    tooltip.style.border = '1px solid #ccc';
    tooltip.style.borderRadius = '5px';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  if (container) {
    main(container);
  }

  if (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
      main(container); // Reload with the updated logic
    });
  }
});
