import { select } from 'd3';

export const main = (container) => {
  const svg = select(container)
    .selectAll('svg')
    .data([null])
    .join('svg')
    .attr('width', container.clientWidth)
    .attr('height', container.clientHeight)
    .style('background', '#222235');

  const circleData = [
    //{ x: 155, y: 382, r: 20, fill: '#D4089D' },
    //add circles in the above format with multiple circles that create a snowman
    { x: 155, y: 100, r: 25, fill: '#ffffff' },
    { x: 155, y: 150, r: 35, fill: '#ffffff' },
    { x: 155, y: 220, r: 50, fill: '#ffffff' },
    //now add a face to that snowman
    { x: 145, y: 85, r: 3, fill: '#000000' }, // Left eye
    { x: 165, y: 85, r: 3, fill: '#000000' }, // Right eye
    { x: 155, y: 99, r: 5, fill: '#E35205' }, // Nose
    //add a smile to that snowman
    { x: 145, y: 109, r: 2, fill: '#000000' }, // Smile part 1
    { x: 150, y: 110, r: 2, fill: '#000000' }, // Smile part 2
    { x: 155, y: 110, r: 2, fill: '#000000' }, // Smile part 3
    { x: 160, y: 110, r: 2, fill: '#000000' }, // Smile part 4
    { x: 165, y: 109, r: 2, fill: '#000000' }, // Smile part 5

    //add some random snow particles everywhere
    ...Array(200)
      .fill()
      .map((_, i) => ({
        x: Math.random() * container.clientWidth,
        y: Math.random() * container.clientHeight,
        r: Math.random() * 3,
        fill: '#ffffff',
      })),
  ];

  const squareData = [
    {
      x: 134,
      y: 40,
      width: 40,
      height: 30,
      fill: '#000000',
    },
    {
      x: 124,
      y: 70,
      width: 60,
      height: 5,
      fill: '#000000',
    },

    //add big house in the middle of the canvas and make it christmas colors with a chimney on the top right
    {
      x: container.clientWidth / 2 - 100,
      y: container.clientHeight / 2 - 50,
      width: 200,
      height: 100,
      fill: '#FF0000',
    },
    {
      x: container.clientWidth / 2 + 60,
      y: container.clientHeight / 2 - 70,
      width: 30,
      height: 20,
      fill: '#654321',
    },
    //add a door
    {
      x: container.clientWidth / 2 - 25,
      y: container.clientHeight / 2 + -32,
      width: 50,
      height: 80,
      fill: '#ffffff',
    },

    //add a doorknob
    {
      x: container.clientWidth / 2 + 15,
      y: container.clientHeight / 2 + 30,
      width: 10,
      height: 10,
      fill: '#000000',
    },
  ];

  //Render Circles
  svg
    .selectAll('circle')
    .data(circleData)
    .join('circle')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', (d) => d.r)
    .attr('fill', (d) => d.fill)
    .attr('opacity', 708 / 1000);

  //Render Rect
  svg
    .selectAll('rect')
    .data(squareData)
    .join('rect')
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y)
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height)
    .attr('fill', (d) => d.fill)
    .attr('opacity', 708 / 1000);
};
