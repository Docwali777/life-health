webpackHotUpdate(0,{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(113);

var _heart1616465__ = __webpack_require__(503);

var _heart1616465__2 = _interopRequireDefault(_heart1616465__);

var _hillary = __webpack_require__(246);

var _hillary2 = _interopRequireDefault(_hillary);

var _waliGauvin = __webpack_require__(247);

var _waliGauvin2 = _interopRequireDefault(_waliGauvin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'text-center' },
          _react2.default.createElement(
            'h1',
            null,
            'Welcome to SaluD/Os '
          ),
          _react2.default.createElement(
            'h3',
            null,
            'Empowering Individuals Through Knowledge'
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: '' },
          _react2.default.createElement('img', { className: 'divMainPic', src: _heart1616465__2.default })
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          _reactBootstrap.Media,
          null,
          _react2.default.createElement(
            _reactBootstrap.Media.Left,
            { align: 'top' },
            _react2.default.createElement('img', { width: 200, height: 200, src: _hillary2.default, alt: 'Image' })
          ),
          _react2.default.createElement(
            _reactBootstrap.Media.Body,
            null,
            _react2.default.createElement(
              _reactBootstrap.Media.Heading,
              null,
              'Top aligned media'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          _reactBootstrap.Media,
          null,
          _react2.default.createElement(
            _reactBootstrap.Media.Left,
            { align: 'top' },
            _react2.default.createElement('img', { width: 200, height: 200, src: _waliGauvin2.default, alt: 'Image' })
          ),
          _react2.default.createElement(
            _reactBootstrap.Media.Body,
            null,
            _react2.default.createElement(
              _reactBootstrap.Media.Heading,
              null,
              'Top aligned media'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ })

})