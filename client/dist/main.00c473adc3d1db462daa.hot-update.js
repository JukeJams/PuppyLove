webpackHotUpdate("main",{

/***/ "./client/component/PopularLocations.jsx":
/*!***********************************************!*\
  !*** ./client/component/PopularLocations.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.PopularLocations = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _googleMapsReact = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar mapStyles = {\n\twidth: '60%',\n\theight: '60%'\n};\n\nvar PopularLocations = exports.PopularLocations = function (_Component) {\n\t_inherits(PopularLocations, _Component);\n\n\tfunction PopularLocations(props) {\n\t\t_classCallCheck(this, PopularLocations);\n\n\t\tvar _this = _possibleConstructorReturn(this, (PopularLocations.__proto__ || Object.getPrototypeOf(PopularLocations)).call(this, props));\n\n\t\t_this.state = {\n\t\t\tshowingInfoWindow: false, //Hides or the shows the infoWindow\n\t\t\tactiveMarker: {}, //Shows the active marker upon click\n\t\t\tselectedPlace: {} //Shows the infoWindow to the selected place upon a marker\n\t\t};\n\n\t\treturn _this;\n\t}\n\n\t_createClass(PopularLocations, [{\n\t\tkey: 'onMarkerClick',\n\t\tvalue: function onMarkerClick(props, marker, e) {\n\t\t\tthis.state.setState({\n\t\t\t\tselectedPlace: props,\n\t\t\t\tactiveMarker: marker,\n\t\t\t\tshowingInfoWindow: true\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'onClose',\n\t\tvalue: function onClose(props) {\n\t\t\tif (this.state.showingInfoWindow) {\n\t\t\t\tthis.setState({\n\t\t\t\t\tshowingInfoWindow: false,\n\t\t\t\t\tactiveMarker: null\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_googleMapsReact.Map,\n\t\t\t\t{\n\t\t\t\t\tgoogle: this.props.google,\n\t\t\t\t\tzoom: 12,\n\t\t\t\t\tstyle: mapStyles,\n\t\t\t\t\tinitialCenter: {\n\t\t\t\t\t\tlat: 29.971509,\n\t\t\t\t\t\tlng: -90.103807\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t_react2.default.createElement(_googleMapsReact.Marker, {\n\t\t\t\t\tonClick: this.onMarkerClick,\n\t\t\t\t\tname: 'New Orleans'\n\t\t\t\t}),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t_googleMapsReact.InfoWindow,\n\t\t\t\t\t{\n\t\t\t\t\t\tmarker: this.state.activeMarker,\n\t\t\t\t\t\tvisible: this.state.showingInfoWindow,\n\t\t\t\t\t\tonClose: this.onClose\n\t\t\t\t\t},\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'h4',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tthis.state.selectedPlace.name\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn PopularLocations;\n}(_react.Component);\n\nexports.default = (0, _googleMapsReact.GoogleApiWrapper)({\n\tapiKey: 'AIzaSyDkP-SuWhs1qqsN1GpQuTfrpGU7WyFn4dU'\n})(PopularLocations);\n\n//# sourceURL=webpack:///./client/component/PopularLocations.jsx?");

/***/ })

})