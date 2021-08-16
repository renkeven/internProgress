
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (React, ReactDOM) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const width = 960;
    const height = 600;
    const circleRadius = 30;
    const initialMousePosition = {
      x: width / 2,
      y: height / 2
    };

    const App = () => {
      const [mousePosition, setMousePosition] = React.useState(initialMousePosition);
      const handleMouseMove = React.useCallback(event => {
        const {
          clientX,
          clientY
        } = event;
        setMousePosition({
          x: clientX,
          y: clientY
        });
      }, [setMousePosition]);
      return /*#__PURE__*/React__default['default'].createElement("svg", {
        width: width,
        height: height,
        onMouseMove: handleMouseMove
      }, /*#__PURE__*/React__default['default'].createElement("circle", {
        id: "Leye",
        cx: mousePosition.x,
        cy: mousePosition.y,
        r: circleRadius
      }));
    };

    const rootElement = document.getElementById('root');
    ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, null), rootElement);

}(React, ReactDOM));
