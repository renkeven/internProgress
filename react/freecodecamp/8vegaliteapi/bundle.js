
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (vega, vegaLite, vl, vegaTooltip, d3) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var vega__default = /*#__PURE__*/_interopDefaultLegacy(vega);
  var vegaLite__default = /*#__PURE__*/_interopDefaultLegacy(vegaLite);
  var vl__default = /*#__PURE__*/_interopDefaultLegacy(vl);

  // Appearance customization to improve readability.
  // See https://vega.github.io/vega-lite/docs/
  const dark = '#3e3c38';
  const config = {
    axis: {
      domain: false,
      tickColor: 'lightGray'
    },
    style: {
      "guide-label": {
        fontSize: 20,
        fill: dark
      },
      "guide-title": {
        fontSize: 30,
        fill: dark
      }
    }
  };

  const csvUrl = 'https://gist.githubusercontent.com/curran/90240a6d88bdb1411467b21ea0769029/raw/7d4c3914cc6a29a7f5165f7d5d82b735d97bcfe4/week_temperature_sf.csv';
  const getData = async () => {
    const data = await d3.csv(csvUrl); // Have a look at the attributes available in the console!

    console.log(data[0]);
    return data;
  };

  const viz = vl__default['default'].markLine({
    size: 5,
    opacity: 1
  }).encode( // vl.x().fieldQ('mpg').scale({ zero: false }),
  // vl.y().fieldQ('horsepower').scale({ zero: false }),
  // vl.color().fieldN('origin'),
  // vl.size().fieldQ('weight'),
  // vl.tooltip().fieldN('name')
  vl__default['default'].x().fieldT('timestamp'), vl__default['default'].y().fieldQ('temperature'), vl__default['default'].tooltip().fieldN('temperature'));

  vl__default['default'].register(vega__default['default'], vegaLite__default['default'], {
    view: {
      renderer: 'svg'
    },
    init: view => {
      view.tooltip(new vegaTooltip.Handler().call);
    }
  });

  const run = async () => {
    const marks = viz.data(await getData()).width(window.innerWidth).height(window.innerHeight).autosize({
      type: 'fit',
      contains: 'padding'
    }).config(config);
    document.body.appendChild(await marks.render());
  };

  run();

}(vega, vegaLite, vl, vegaTooltip, d3));
