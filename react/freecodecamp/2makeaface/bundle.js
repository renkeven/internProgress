
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (React, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const width = 960;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;
    const strokeWidth = 10;
    const eyeOffsetX = 120;
    const eyeOffsetY = 100;
    const eyeRadius = 50;
    const mouthWidth = 10;
    const mouthRadius = 140;
    const mouthArc = d3.arc().innerRadius(mouthRadius + mouthWidth).outerRadius(mouthRadius).startAngle(Math.PI / 2.).endAngle(Math.PI * 3 / 2.);

    const App = () => /*#__PURE__*/React__default['default'].createElement("svg", {
      width: width,
      height: height
    }, /*#__PURE__*/React__default['default'].createElement("g", {
      transform: `translate(${centerX},${centerY})`
    }, /*#__PURE__*/React__default['default'].createElement("circle", {
      id: "face",
      r: centerY - strokeWidth / 2,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth
    }), /*#__PURE__*/React__default['default'].createElement("circle", {
      id: "Leye",
      cx: -eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }), /*#__PURE__*/React__default['default'].createElement("circle", {
      id: "Reye",
      cx: eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }), /*#__PURE__*/React__default['default'].createElement("path", {
      d: mouthArc(),
      transform: `translate(0,50)`
    })));

    console.log(mouthArc());
    const rootElement = document.getElementById('root');
    ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, null), rootElement);
    console.log(centerY - strokeWidth / 2);

}(React, ReactDOM, d3));
