import { select } from 'd3';

let selectedType = null; // Store the selected type filter
let selectedPokemon = null; // Store the clicked Pokémon for display

export const setSelectedType = (type) => {
  selectedType = type; // Function to update the selected type
};

// Function to set the selected Pokémon and update the display area
export const setSelectedPokemon = (pokemon) => {
  selectedPokemon = pokemon;
  const detailsContainer = document.querySelector(
    '.pokemon-details',
  );

  if (detailsContainer) {
    detailsContainer.innerHTML = selectedPokemon
      ? `<h3>Selected Pokémon</h3>
         <p><strong>Name:</strong> ${selectedPokemon.name}</p>
         <p><strong>Type:</strong> ${selectedPokemon.type}</p>
         <p><strong>Speed:</strong> ${selectedPokemon.speed}</p>
         <p><strong>Attack:</strong> ${selectedPokemon.attack}</p>
         <p><strong>Defense:</strong> ${selectedPokemon.defense}</p>
         <p><strong>HP:</strong> ${selectedPokemon.HP}</p>`
      : `<p>Click on a point to display the Pokémon.</p>`;
  }
};

export const hue = (
  selection,
  { data, xScale, yScale },
) => {
  // Filter the data based on the selected type if one is chosen
  const filteredData = selectedType
    ? data.filter((d) => d.type.includes(selectedType))
    : data;

  // Create a scale for circle radius based on HP
  const radiusScale = d3
    .scaleLinear()
    .domain([1, 200])
    .range([3, 10]);

  const circles = filteredData.map((d) => ({
    ...d,
    radius: radiusScale(d.HP),
    cx: xScale(d.speed),
    cy: yScale(d.attack - d.defense),
  }));

  const overlapCounts = new Array(circles.length).fill(1);

  for (let i = 0; i < circles.length; i++) {
    for (let j = i + 1; j < circles.length; j++) {
      const dx = circles[i].cx - circles[j].cx;
      const dy = circles[i].cy - circles[j].cy;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radiusSum =
        circles[i].radius + circles[j].radius;

      if (distance < radiusSum) {
        overlapCounts[i]++;
        overlapCounts[j]++;
      }
    }
  }

  selection
    .selectAll('circle')
    .data(circles)
    .join('circle')
    .attr('cx', (d) => d.cx)
    .attr('cy', (d) => d.cy)
    .attr('r', (d) => d.radius)
    .attr('fill', (d) => {
      if (d.type.includes('Water')) return 'blue';
      if (d.type.includes('Fire')) return 'red';
      if (d.type.includes('Grass')) return 'green';
      if (d.type.includes('Normal')) return 'yellow';
      if (d.type.includes('Electric')) return 'indigo';
      if (d.type.includes('Bug')) return 'brown';
      if (d.type.includes('Psychic')) return 'pink';
      if (d.type.includes('Rock')) return 'cyan';
      return 'gray';
    })
    .attr('opacity', (d, i) => {
      const count = overlapCounts[i];
      return count > 1 ? Math.min(1, count / 5) : 1;
    })
    .on('click', (event, d) => {
      setSelectedPokemon(d); // Set selected Pokémon for details display
    });
};
