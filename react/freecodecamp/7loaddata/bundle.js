
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (React, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
    var d3__default = /*#__PURE__*/_interopDefaultLegacy(d3);

    const message = data => {
      let message = '';
      message += Math.round(d3__default['default'].csvFormat(data).length / 1024) + ' kB\n';
      message += data.length + ' rows\n';
      message += data.columns.length + ' columns\n';
      return message;
    };

    const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

    const App = () => {
      const [data, setData] = React.useState(null); // useEffect(() => {
      //     csv(csvUrl).then(data =>{
      //         console.log('Fetching Data');
      //         setData(data);
      //     });
      // }, []);

      React.useEffect(() => {
        d3.csv(csvUrl).then(setData);
      }, []);
      return /*#__PURE__*/React__default['default'].createElement("pre", null, "Data is: ", data ? message(data) : 'loading');
    };

    const rootElement = document.getElementById('root');
    ReactDOM__default['default'].render( /*#__PURE__*/React__default['default'].createElement(App, null), rootElement);

}(React, ReactDOM, d3));
