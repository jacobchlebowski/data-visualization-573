Creating circles with D3! To use code like this in various
frameworks or vanilla HTML, see
[d3-rosetta](https://github.com/curran/d3-rosetta)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4DEx2M0auMc?si=L7JAtcLJQ6ieIt8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[Full Playlist: Constructing Visualizations](https://www.youtube.com/playlist?list=PL9yYRbwpkykthTFJl9vYr_C0FCjRIn_7G)

# Creating Circles with D3

In this guide, we will walk through the process of creating
circles using D3.js, touching on various concepts such as
the D3 General Update Pattern, method chaining, and dynamic
styling. By the end, you'll be able to create and manipulate
SVG elements with ease.

## What We'll Build

We will create an SVG element containing multiple circles,
which can be customized dynamically. We'll explore the use
of arrays, objects, and functions within D3 to manage and
render these circles effectively.

## Getting Started

To begin, ensure you have a basic project setup that
includes the necessary files:

- `index.js`: The main JavaScript file where our D3 code
  will reside.
- `package.json`: Specifies D3 as a dependency.
- `README.md`: A markdown file describing the visualization.

### Initial Setup

Open your project in your preferred editor. We will start by
importing the `select` function from D3, which is essential
for selecting DOM elements.

```javascript
import { select } from 'd3';

export const main(container) {
  // Your D3 code will go here
}
```

The `main` function is our entry point, expecting a
`container`, which is a DOM element. We'll use this
container to create our SVG element.

### Creating and Sizing the SVG Element

To draw circles, we first need an SVG element. Here's how to
create one:

```javascript
const svg = select(container)
  .selectAll('svg')
  .data([null])
  .join('svg')
  .attr('width', container.clientWidth)
  .attr('height', container.clientHeight);
```

- We use `selectAll` with `data` and `join` to ensure our
  SVG element is created or updated as needed.
- The `width` and `height` attributes are set based on the
  container's dimensions.

### Drawing Circles with D3

With our SVG element in place, let's draw some circles. We
need to define an array of objects, where each object
contains the coordinates and properties of a circle.

```javascript
const data = [
  { x: 20, y: 20, r: 10, fill: '#FF0000' },
  { x: 50, y: 50, r: 20, fill: '#00FF00' },
  { x: 80, y: 80, r: 30, fill: '#0000FF' },
];

svg
  .selectAll('circle')
  .data(data)
  .join('circle')
  .attr('cx', (d) => d.x)
  .attr('cy', (d) => d.y)
  .attr('r', (d) => d.r)
  .attr('fill', (d) => d.fill);
```

- `data` is an array of objects, each representing a circle
  with `x`, `y`, `r` (radius), and `fill` (color)
  properties.
- `selectAll('circle')` selects all circle elements, and
  `data(data)` binds our data to these elements.
- `join('circle')` creates a circle for each data item.
- The attributes `cx`, `cy`, `r`, and `fill` are set based
  on the data properties.

## Recap and Conclusion

We've covered the basics of creating and manipulating
circles in D3:

1. **SVG Creation**: We created an SVG element sized
   dynamically based on the container.
2. **Circle Drawing**: We used D3's data binding to draw
   circles with specific coordinates, sizes, and colors.
3. **Styling**: We explored dynamic styling options,
   including background colors and opacity.

### Challenge

Now it's your turn! Fork this example and customize it.
Perhaps make it Halloween-themed or give it a festive
Christmas look. Be creative and explore the possibilities!

### Final Thoughts

This introduction sets the foundation for more complex
visualizations with D3. The patterns and concepts covered
here, such as the D3 General Update Pattern and method
chaining, will recur in more advanced use cases. Stay tuned
for future tutorials where we'll dive deeper into these
topics and explore more powerful features of D3.

Thanks for following along, and I look forward to seeing
what you create!
