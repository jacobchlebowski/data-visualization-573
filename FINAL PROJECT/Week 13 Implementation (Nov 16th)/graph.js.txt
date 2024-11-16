import { scaleLinear, axisBottom, axisLeft } from 'd3';

const width = 500;
const height = 500;
const margin = { top: 40, right: 40, bottom: 40, left: 40 };

export const xScale = scaleLinear()
  .domain([0, 200]) // speed from slow (0) to fast (200)
  .range([0, width]);

export const yScale = scaleLinear()
  .domain([-100, 100]) // balance: defensive (-100) to offensive (100)
  .range([height, 0]);

export const createAxes = (svg) => {
  const centeredX = width / 2;
  const centeredY = height / 2;

  svg
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
    .attr('fill', '#B5B5B5')
    .attr('opacity', 0.5);

  svg
    .append('g')
    .attr('transform', `translate(0, ${centeredY})`)
    .call(axisBottom(xScale));

  svg
    .append('g')
    .attr('transform', `translate(${centeredX}, 0)`)
    .call(axisLeft(yScale));

  svg
    .append('text')
    .attr('x', centeredX + width / 2 - margin.right + 65)
    .attr('y', centeredY + 20)
    .style('text-anchor', 'middle')
    .text('Fast');

  svg
    .append('text')
    .attr('x', centeredX - width / 2 + margin.left - 65)
    .attr('y', centeredY + 20)
    .style('text-anchor', 'middle')
    .text('Slow');

  svg
    .append('text')
    .attr('x', centeredX)
    .attr('y', margin.top - 50)
    .style('text-anchor', 'middle')
    .text('Offensive');

  svg
    .append('text')
    .attr('x', centeredX)
    .attr('y', height - margin.bottom + 60)
    .style('text-anchor', 'middle')
    .text('Defensive');
};
