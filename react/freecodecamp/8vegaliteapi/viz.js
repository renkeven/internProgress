import vl from 'vega-lite-api';
export const viz = vl.markLine({
    size: 5,
    opacity:1
})
  .encode(
    // vl.x().fieldQ('mpg').scale({ zero: false }),
    // vl.y().fieldQ('horsepower').scale({ zero: false }),
    // vl.color().fieldN('origin'),
    // vl.size().fieldQ('weight'),
    // vl.tooltip().fieldN('name')

    vl.x().fieldT('timestamp'),
    vl.y().fieldQ('temperature'),
    vl.tooltip().fieldN('temperature')

  );