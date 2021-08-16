
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (React, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const BackgroundCircle = ({
      radius,
      strokeWidth
    }) => /*#__PURE__*/React__default['default'].createElement("circle", {
      id: "face",
      r: radius,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth
    });

    const Mouth = ({
      mouthRadius,
      mouthWidth
    }) => {
      const mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(Math.PI / 2).endAngle(Math.PI * 3 / 2);
      return /*#__PURE__*/React__default['default'].createElement("path", {
        d: mouthArc()
      });
    };

    const FaceContainer = ({
      children,
      width,
      height,
      centerX,
      centerY
    }) => /*#__PURE__*/React__default['default'].createElement("svg", {
      width: width,
      height: height
    }, /*#__PURE__*/React__default['default'].createElement("g", {
      transform: `translate(${centerX},${centerY})`
    }, children));

    const Eyes = ({
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius
    }) => /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("circle", {
      id: "Leye",
      cx: -eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }), /*#__PURE__*/React__default['default'].createElement("circle", {
      id: "Reye",
      cx: eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }));

    const Face = ({
      width,
      height,
      centerX,
      centerY,
      strokeWidth,
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius,
      mouthRadius,
      mouthWidth
    }) => /*#__PURE__*/React__default['default'].createElement(FaceContainer, {
      width: width,
      height: height,
      centerX: centerX,
      centerY: centerY
    }, /*#__PURE__*/React__default['default'].createElement(BackgroundCircle, {
      radius: centerY - strokeWidth / 2,
      strokeWidth: strokeWidth
    }), /*#__PURE__*/React__default['default'].createElement(Eyes, {
      eyeOffsetX: eyeOffsetX,
      eyeOffsetY: eyeOffsetY,
      eyeRadius: eyeRadius
    }), /*#__PURE__*/React__default['default'].createElement(Mouth, {
      mouthRadius: mouthRadius,
      mouthWidth: mouthWidth
    }));

    const width = 200;
    const height = 150;
    const array = d3.range(6 * 3);

    const App = () => array.map(() => /*#__PURE__*/React__default['default'].createElement(Face, {
      width: width,
      height: height,
      centerX: width / 2,
      centerY: height / 2,
      strokeWidth: 5,
      eyeOffsetX: 30,
      eyeOffsetY: 30,
      eyeRadius: 5 + Math.random() * 5,
      mouthWidth: 5 + Math.random() * 10,
      mouthRadius: 40
    }));

    console.log('t3e3333st');
    const rootElement = document.getElementById("root");
    ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, null), rootElement);

}(React, ReactDOM, d3));
