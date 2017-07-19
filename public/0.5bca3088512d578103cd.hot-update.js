webpackHotUpdate(0,{

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(308);

var _auth0Lock = __webpack_require__(206);

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.showLock = function () {
      _this.lock.show();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Register, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.lock = new _auth0Lock2.default(this.props.clientID, this.props.domain);

      this.lock.on('authenticated', function (authResult) {

        _this2.lock.getUserInfo(authResult.accessToken, function (error, profile) {
          if (error) {
            // Handle error
            return;
          }
          _reactRouter.browserHistory.push('/');
          localStorage.setItem('accessToken', authResult.accessToken);
          localStorage.setItem('profile', JSON.stringify(profile));
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Register'
        ),
        _react2.default.createElement(
          'button',
          { onClick: function onClick() {
              return _this3.showLock();
            } },
          'Register'
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

Register.defaultProps = {
  clientID: 'MnRA94J210JSNDN3JPhoLb1FQxvydPTh',
  domain: 'drgauvin.auth0.com'
};
exports.default = Register;

/***/ })

})