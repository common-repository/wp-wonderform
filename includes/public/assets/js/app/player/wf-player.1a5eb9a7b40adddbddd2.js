webpackJsonp([14],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.sum = exports.isUndefined = exports.isNaN = exports.isNull = exports.isFunction = exports.isObject = exports.isArray = exports.isBoolean = exports.isString = exports.isNumber = exports.contains = exports.orderBy = exports.sortBy = exports.keyBy = exports.includes = exports.findIndex = exports.find = exports.union = exports.range = exports.debounce = exports.uniqueId = exports.now = undefined;

var _lodash = __webpack_require__(342);

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = __webpack_require__(349);

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = __webpack_require__(325);

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = __webpack_require__(344);

var _lodash8 = _interopRequireDefault(_lodash7);

var _lodash9 = __webpack_require__(348);

var _lodash10 = _interopRequireDefault(_lodash9);

var _lodash11 = __webpack_require__(327);

var _lodash12 = _interopRequireDefault(_lodash11);

var _lodash13 = __webpack_require__(326);

var _lodash14 = _interopRequireDefault(_lodash13);

var _lodash15 = __webpack_require__(330);

var _lodash16 = _interopRequireDefault(_lodash15);

var _lodash17 = __webpack_require__(343);

var _lodash18 = _interopRequireDefault(_lodash17);

var _lodash19 = __webpack_require__(345);

var _lodash20 = _interopRequireDefault(_lodash19);

var _lodash21 = __webpack_require__(339);

var _lodash22 = _interopRequireDefault(_lodash21);

var _lodash23 = __webpack_require__(322);

var _lodash24 = _interopRequireDefault(_lodash23);

var _lodash25 = __webpack_require__(335);

var _lodash26 = _interopRequireDefault(_lodash25);

var _lodash27 = __webpack_require__(337);

var _lodash28 = _interopRequireDefault(_lodash27);

var _lodash29 = __webpack_require__(331);

var _lodash30 = _interopRequireDefault(_lodash29);

var _lodash31 = __webpack_require__(146);

var _lodash32 = _interopRequireDefault(_lodash31);

var _lodash33 = __webpack_require__(336);

var _lodash34 = _interopRequireDefault(_lodash33);

var _lodash35 = __webpack_require__(332);

var _lodash36 = _interopRequireDefault(_lodash35);

var _lodash37 = __webpack_require__(334);

var _lodash38 = _interopRequireDefault(_lodash37);

var _lodash39 = __webpack_require__(333);

var _lodash40 = _interopRequireDefault(_lodash39);

var _lodash41 = __webpack_require__(338);

var _lodash42 = _interopRequireDefault(_lodash41);

var _lodash43 = __webpack_require__(346);

var _lodash44 = _interopRequireDefault(_lodash43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// LODASH MODULES  	---------------- //

var now = exports.now = _lodash2.default,
    uniqueId = exports.uniqueId = _lodash4.default,
    debounce = exports.debounce = _lodash6.default,
    range = exports.range = _lodash8.default,
    union = exports.union = _lodash10.default,
    find = exports.find = _lodash14.default,
    findIndex = exports.findIndex = _lodash12.default,
    includes = exports.includes = _lodash16.default,
    keyBy = exports.keyBy = _lodash22.default,
    sortBy = exports.sortBy = _lodash20.default,
    orderBy = exports.orderBy = _lodash18.default,
    contains = exports.contains = _lodash24.default,
    isNumber = exports.isNumber = _lodash26.default,
    isString = exports.isString = _lodash28.default,
    isBoolean = exports.isBoolean = _lodash30.default,
    isArray = exports.isArray = _lodash32.default,
    isObject = exports.isObject = _lodash34.default,
    isFunction = exports.isFunction = _lodash36.default,
    isNull = exports.isNull = _lodash38.default,
    isNaN = exports.isNaN = _lodash40.default,
    isUndefined = exports.isUndefined = _lodash42.default,
    sum = exports.sum = _lodash44.default;
// ------------------- //

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WF_EVENT_ONCUSTOM = exports.WF_EVENT_ONCUSTOM = "custom";
var WF_EVENT_ONINIT = exports.WF_EVENT_ONINIT = "init";
var WF_EVENT_ONCLICK = exports.WF_EVENT_ONCLICK = "click";
var WF_EVENT_ONTOGGLE = exports.WF_EVENT_ONTOGGLE = "toggle";
var WF_EVENT_ONOPEN = exports.WF_EVENT_ONOPEN = "open";
var WF_EVENT_ONCLOSE = exports.WF_EVENT_ONCLOSE = "close";
var WF_EVENT_ONFIND = exports.WF_EVENT_ONFIND = "find";
var WF_EVENT_ONSEARCH = exports.WF_EVENT_ONSEARCH = "search";
var WF_EVENT_ONBLUR = exports.WF_EVENT_ONBLUR = "blur";
var WF_EVENT_ONFOCUS = exports.WF_EVENT_ONFOCUS = "focus";
var WF_EVENT_ONSELECT = exports.WF_EVENT_ONSELECT = "select";
var WF_EVENT_ONFILTER = exports.WF_EVENT_ONFILTER = "filter";
var WF_EVENT_ONCLEAR = exports.WF_EVENT_ONCLEAR = "clear";
var WF_EVENT_ONREFRESH = exports.WF_EVENT_ONREFRESH = "refresh";
var WF_EVENT_ONSTARTUP = exports.WF_EVENT_ONSTARTUP = "startup";
var WF_EVENT_ONCHANGE = exports.WF_EVENT_ONCHANGE = "change";
var WF_EVENT_ONREADY = exports.WF_EVENT_ONREADY = "ready";
var WF_EVENT_ONRESIZE = exports.WF_EVENT_ONRESIZE = "resize";
var WF_EVENT_ONSTART = exports.WF_EVENT_ONSTART = "start";
var WF_EVENT_ONSTOP = exports.WF_EVENT_ONSTOP = "stop";
var WF_EVENT_ONVIEW = exports.WF_EVENT_ONVIEW = "view";
var WF_EVENT_ONLOAD = exports.WF_EVENT_ONLOAD = "load";
var WF_EVENT_ONEDIT = exports.WF_EVENT_ONEDIT = "edit";
var WF_EVENT_ONVALIDATE = exports.WF_EVENT_ONVALIDATE = "validate";
var WF_EVENT_ONSAVE = exports.WF_EVENT_ONSAVE = "save";
var WF_EVENT_ONSUBMIT = exports.WF_EVENT_ONSUBMIT = "submit";
var WF_EVENT_ONPUBLISH = exports.WF_EVENT_ONPUBLISH = "publish";
var WF_EVENT_ONUNPUBLISH = exports.WF_EVENT_ONUNPUBLISH = "unpublish";
var WF_EVENT_ONSUCCESS = exports.WF_EVENT_ONSUCCESS = "success";
var WF_EVENT_ONERROR = exports.WF_EVENT_ONERROR = "error";
var WF_EVENT_ONWILLMOUNT = exports.WF_EVENT_ONWILLMOUNT = "willmount";
var WF_EVENT_ONDIDMOUNT = exports.WF_EVENT_ONDIDMOUNT = "didmount";
var WF_EVENT_ONWILLUNMOUNT = exports.WF_EVENT_ONWILLUNMOUNT = "willunmount";
var WF_EVENT_ONSYNC = exports.WF_EVENT_ONSYNC = "sync";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WFIState = exports.WFIVisible = exports.WFIEdit = exports.WFIAdd = exports.WFICheck2 = exports.WFICheck = exports.WFIDown = exports.WFIUp = exports.WFINext = exports.WFIPrev = exports.WFIPlay = exports.WFIOpen = exports.WFIClose = exports.WFIcon = undefined;

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF ICON ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-icon",
	prefix: "wf-icon-",
	add: "add",
	up: "up",
	down: "down",
	state: {
		active: "active",
		not: "not",
		open: "opened",
		close: "notopen"
	},
	icon: {

		close: "close",
		prev: "prev",
		next: "next",
		edit: "cog",
		play: "play-2-icon",
		stop: "stop-2-icon",
		checked: "checkbox-checked",
		unchecked: "checkbox-unchecked",
		valid: "check",
		visible: "eye2",
		unvisible: "eye-blocked"
	}
};

// ------------------- //

var WFIcon = function (_Component) {
	(0, _inherits3.default)(WFIcon, _Component);

	function WFIcon() {
		(0, _classCallCheck3.default)(this, WFIcon);
		return (0, _possibleConstructorReturn3.default)(this, (WFIcon.__proto__ || (0, _getPrototypeOf2.default)(WFIcon)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIcon, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    _props$icon = _props.icon,
			    icon = _props$icon === undefined ? "" : _props$icon,
			    _props$className = _props.className,
			    className = _props$className === undefined ? "" : _props$className,
			    _props$onClick = _props.onClick,
			    _onClick = _props$onClick === undefined ? null : _props$onClick,
			    _props$visible = _props.visible,
			    visible = _props$visible === undefined ? true : _props$visible,
			    _props$style = _props.style,
			    style = _props$style === undefined ? {} : _props$style;

			if (!visible || !icon) return false;
			return _react2.default.createElement(
				"span",
				{
					style: style,
					className: classes.wrapper + " " + className + " alias-" + icon,
					onClick: function onClick() {
						return (0, _Lodash.isFunction)(_onClick) ? _onClick() : "";
					}
				},
				_react2.default.createElement("span", { className: "" + classes.prefix + icon })
			);
		}
	}]);
	return WFIcon;
}(_react.Component);

// ------------------- //

var WFIClose = function (_Component2) {
	(0, _inherits3.default)(WFIClose, _Component2);

	function WFIClose() {
		(0, _classCallCheck3.default)(this, WFIClose);
		return (0, _possibleConstructorReturn3.default)(this, (WFIClose.__proto__ || (0, _getPrototypeOf2.default)(WFIClose)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIClose, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(WFIcon, (0, _extends3.default)({
				className: classes.icon.close,
				icon: classes.icon.close
			}, this.props));
		}
	}]);
	return WFIClose;
}(_react.Component);

// ------------------- //

var WFIAdd = function (_Component3) {
	(0, _inherits3.default)(WFIAdd, _Component3);

	function WFIAdd() {
		(0, _classCallCheck3.default)(this, WFIAdd);
		return (0, _possibleConstructorReturn3.default)(this, (WFIAdd.__proto__ || (0, _getPrototypeOf2.default)(WFIAdd)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIAdd, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(WFIClose, (0, _extends3.default)({
				className: classes.add
			}, this.props));
		}
	}]);
	return WFIAdd;
}(_react.Component);

// ------------------- //

var WFIPrev = function (_Component4) {
	(0, _inherits3.default)(WFIPrev, _Component4);

	function WFIPrev() {
		(0, _classCallCheck3.default)(this, WFIPrev);
		return (0, _possibleConstructorReturn3.default)(this, (WFIPrev.__proto__ || (0, _getPrototypeOf2.default)(WFIPrev)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIPrev, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(WFIcon, (0, _extends3.default)({
				icon: classes.icon.prev
			}, this.props));
		}
	}]);
	return WFIPrev;
}(_react.Component);

// ------------------- //

var WFINext = function (_Component5) {
	(0, _inherits3.default)(WFINext, _Component5);

	function WFINext() {
		(0, _classCallCheck3.default)(this, WFINext);
		return (0, _possibleConstructorReturn3.default)(this, (WFINext.__proto__ || (0, _getPrototypeOf2.default)(WFINext)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFINext, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(WFIcon, (0, _extends3.default)({
				icon: classes.icon.next
			}, this.props));
		}
	}]);
	return WFINext;
}(_react.Component);

// ------------------- //

var WFICheck = function (_Component6) {
	(0, _inherits3.default)(WFICheck, _Component6);

	function WFICheck() {
		(0, _classCallCheck3.default)(this, WFICheck);
		return (0, _possibleConstructorReturn3.default)(this, (WFICheck.__proto__ || (0, _getPrototypeOf2.default)(WFICheck)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFICheck, [{
		key: "render",
		value: function render() {
			var _props$checked = this.props.checked,
			    checked = _props$checked === undefined ? false : _props$checked;

			return _react2.default.createElement(WFIcon, (0, _extends3.default)({
				icon: checked ? classes.icon.checked : classes.icon.unchecked
			}, this.props));
		}
	}]);
	return WFICheck;
}(_react.Component);

// ------------------- //

var WFICheck2 = function (_Component7) {
	(0, _inherits3.default)(WFICheck2, _Component7);

	function WFICheck2() {
		(0, _classCallCheck3.default)(this, WFICheck2);
		return (0, _possibleConstructorReturn3.default)(this, (WFICheck2.__proto__ || (0, _getPrototypeOf2.default)(WFICheck2)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFICheck2, [{
		key: "render",
		value: function render() {
			var _props$checked2 = this.props.checked,
			    checked = _props$checked2 === undefined ? false : _props$checked2;

			return _react2.default.createElement(WFIcon, (0, _extends3.default)({
				icon: checked ? classes.icon.valid : classes.icon.unchecked
			}, this.props));
		}
	}]);
	return WFICheck2;
}(_react.Component);

// ------------------- //

var WFIUp = function (_Component8) {
	(0, _inherits3.default)(WFIUp, _Component8);

	function WFIUp() {
		(0, _classCallCheck3.default)(this, WFIUp);
		return (0, _possibleConstructorReturn3.default)(this, (WFIUp.__proto__ || (0, _getPrototypeOf2.default)(WFIUp)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIUp, [{
		key: "render",
		value: function render() {
			var _props$active = this.props.active,
			    active = _props$active === undefined ? false : _props$active;

			return _react2.default.createElement(WFIPrev, (0, _extends3.default)({
				className: classes.up
			}, this.props));
		}
	}]);
	return WFIUp;
}(_react.Component);

// ------------------- //

var WFIDown = function (_Component9) {
	(0, _inherits3.default)(WFIDown, _Component9);

	function WFIDown() {
		(0, _classCallCheck3.default)(this, WFIDown);
		return (0, _possibleConstructorReturn3.default)(this, (WFIDown.__proto__ || (0, _getPrototypeOf2.default)(WFIDown)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIDown, [{
		key: "render",
		value: function render() {
			var _props$active2 = this.props.active,
			    active = _props$active2 === undefined ? false : _props$active2;

			return _react2.default.createElement(WFINext, (0, _extends3.default)({
				className: classes.down
			}, this.props));
		}
	}]);
	return WFIDown;
}(_react.Component);

// ------------------- //

var WFIOpen = function (_Component10) {
	(0, _inherits3.default)(WFIOpen, _Component10);

	function WFIOpen() {
		(0, _classCallCheck3.default)(this, WFIOpen);
		return (0, _possibleConstructorReturn3.default)(this, (WFIOpen.__proto__ || (0, _getPrototypeOf2.default)(WFIOpen)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIOpen, [{
		key: "render",
		value: function render() {
			var _props$open = this.props.open,
			    open = _props$open === undefined ? false : _props$open;

			return _react2.default.createElement(WFINext, (0, _extends3.default)({
				className: open ? classes.state.open : classes.state.close
			}, this.props));
		}
	}]);
	return WFIOpen;
}(_react.Component);

// ------------------- //

var WFIEdit = function (_Component11) {
	(0, _inherits3.default)(WFIEdit, _Component11);

	function WFIEdit() {
		(0, _classCallCheck3.default)(this, WFIEdit);
		return (0, _possibleConstructorReturn3.default)(this, (WFIEdit.__proto__ || (0, _getPrototypeOf2.default)(WFIEdit)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIEdit, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(WFIcon, (0, _extends3.default)({
				icon: classes.icon.edit
			}, this.props));
		}
	}]);
	return WFIEdit;
}(_react.Component);

// ------------------- //

var WFIVisible = function (_Component12) {
	(0, _inherits3.default)(WFIVisible, _Component12);

	function WFIVisible() {
		(0, _classCallCheck3.default)(this, WFIVisible);
		return (0, _possibleConstructorReturn3.default)(this, (WFIVisible.__proto__ || (0, _getPrototypeOf2.default)(WFIVisible)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIVisible, [{
		key: "render",
		value: function render() {
			var _props$visible2 = this.props.visible,
			    visible = _props$visible2 === undefined ? true : _props$visible2;

			return _react2.default.createElement(WFIcon, (0, _extends3.default)({ icon: visible ? classes.icon.visible : classes.icon.unvisible,
				className: visible ? classes.state.active : classes.state.not
			}, this.props));
		}
	}]);
	return WFIVisible;
}(_react.Component);

// ------------------- //

var WFIState = function (_Component13) {
	(0, _inherits3.default)(WFIState, _Component13);

	function WFIState() {
		(0, _classCallCheck3.default)(this, WFIState);
		return (0, _possibleConstructorReturn3.default)(this, (WFIState.__proto__ || (0, _getPrototypeOf2.default)(WFIState)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIState, [{
		key: "render",
		value: function render() {
			var _props$valid = this.props.valid,
			    valid = _props$valid === undefined ? null : _props$valid;

			if (valid === null) return false;
			var icon = !valid ? classes.icon.close : classes.icon.valid;
			return _react2.default.createElement(
				"wf-state",
				null,
				_react2.default.createElement(WFIcon, (0, _extends3.default)({ icon: icon }, this.props))
			);
		}
	}]);
	return WFIState;
}(_react.Component);

// ------------------- //

var WFIPlay = function (_Component14) {
	(0, _inherits3.default)(WFIPlay, _Component14);

	function WFIPlay() {
		(0, _classCallCheck3.default)(this, WFIPlay);
		return (0, _possibleConstructorReturn3.default)(this, (WFIPlay.__proto__ || (0, _getPrototypeOf2.default)(WFIPlay)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFIPlay, [{
		key: "render",
		value: function render() {
			var _props$playing = this.props.playing,
			    playing = _props$playing === undefined ? false : _props$playing;

			var icon = playing ? classes.icon.play : classes.icon.stop;
			return _react2.default.createElement(WFIcon, (0, _extends3.default)({
				icon: icon
			}, this.props));
		}
	}]);
	return WFIPlay;
}(_react.Component);

// ------------------- //

exports.WFIcon = WFIcon;
exports.WFIClose = WFIClose;
exports.WFIOpen = WFIOpen;
exports.WFIPlay = WFIPlay;
exports.WFIPrev = WFIPrev;
exports.WFINext = WFINext;
exports.WFIUp = WFIUp;
exports.WFIDown = WFIDown;
exports.WFICheck = WFICheck;
exports.WFICheck2 = WFICheck2;
exports.WFIAdd = WFIAdd;
exports.WFIEdit = WFIEdit;
exports.WFIVisible = WFIVisible;
exports.WFIState = WFIState;

// ------------------- //

/*

<WFIcon
	icon={icon}
	className={className}
	onClick={optional}
/>

<WFIClose/>
<WFIAdd/>
<WFIPrev/>
<WFINext/>

*/

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WF_VALUE_KEY = exports.WF_VALUE_KEY = "valueKey";
var WF_STRING_VALUE = exports.WF_STRING_VALUE = "stringValue";
var WF_NUMBER_VALUE = exports.WF_NUMBER_VALUE = "numberValue";
var WF_BOOLEAN_VALUE = exports.WF_BOOLEAN_VALUE = "booleanValue";
var WF_OBJECT_VALUE = exports.WF_OBJECT_VALUE = "objectValue";
var WF_ARRAY_VALUE = exports.WF_ARRAY_VALUE = "arrayValue";
var WF_SELECT_VALUE = exports.WF_SELECT_VALUE = "selectValue";
var WF_EVENT_FILE_VALUE = exports.WF_EVENT_FILE_VALUE = "eventFileValue";
var WF_DATE_VALUE = exports.WF_DATE_VALUE = "dateValue";

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _normalizeWheel = __webpack_require__(350);

var _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

var _Lodash = __webpack_require__(6);

var _WFValueTypes = __webpack_require__(11);

var _WFInputTypes = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF INPUT COMPONENT ------------------- //

// ------------------- //

var WFInputComponent = function (_Component) {
  (0, _inherits3.default)(WFInputComponent, _Component);

  function WFInputComponent() {
    (0, _classCallCheck3.default)(this, WFInputComponent);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputComponent.__proto__ || (0, _getPrototypeOf2.default)(WFInputComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$refId = _props.refId,
          refId = _props$refId === undefined ? null : _props$refId,
          _props$view = _props.view,
          view = _props$view === undefined ? null : _props$view;

      if (!view) {
        return false;
      } else {
        return _react2.default.createElement(
          'wf-input',
          { ref: refId },
          view(this)
        );
      }
    }
    // ------------------- //

    // COMPONENT LIFECYCLE ------------------- //

    // ------------------- //

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$willMount = this.props.willMount,
          willMount = _props$willMount === undefined ? null : _props$willMount;

      if ((0, _Lodash.isFunction)(willMount)) {
        this.props.willMount(this);
      }
    }
    // ------------------- //

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$didMount = this.props.didMount,
          didMount = _props$didMount === undefined ? null : _props$didMount;

      if ((0, _Lodash.isFunction)(didMount)) {
        this.props.didMount(this);
      }
    }
    // ------------------- //

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props$willUnmount = this.props.willUnmount,
          willUnmount = _props$willUnmount === undefined ? null : _props$willUnmount;

      if ((0, _Lodash.isFunction)(willUnmount)) {
        this.props.willUnmount(this);
      }
    }

    // ------------------- //

    // COMPONENT HELPERS ------------------- //

    // ------------------- //

  }], [{
    key: 'isNumber',
    value: function isNumber(type) {
      return type === _WFInputTypes.INPUT_NUMBER;
    }
  }, {
    key: 'isRange',
    value: function isRange(type) {
      return type === _WFInputTypes.INPUT_RANGE;
    }
  }, {
    key: 'isDate',
    value: function isDate(type) {
      return type === _WFInputTypes.INPUT_DATE;
    }
  }, {
    key: 'getStrCfg',
    value: function getStrCfg(props) {
      var _props$stringValue = props.stringValue,
          stringValue = _props$stringValue === undefined ? "" : _props$stringValue,
          _props$numberValue = props.numberValue,
          numberValue = _props$numberValue === undefined ? 0 : _props$numberValue,
          _props$type = props.type,
          type = _props$type === undefined ? "" : _props$type;


      var key = _WFValueTypes.WF_STRING_VALUE;
      var value = stringValue;

      if (WFInputComponent.isNumber(type) || WFInputComponent.isRange(type)) {
        key = _WFValueTypes.WF_NUMBER_VALUE;
        value = numberValue;
      } else if (WFInputComponent.isDate()) {
        key = _WFValueTypes.WF_DATE_VALUE;
        value = dateValue;
      }
      return {
        key: key,
        value: value
      };
    }
  }]);
  return WFInputComponent;
}(_react.Component);

// ------------------- //


exports.default = WFInputComponent;
// ------------------- //


/*
  horizontalScrollObserver(evt) {
    const normalized = normalizeWheel(evt);
    const { name } = this.props;
    console.error("HORIZONTAL SCROLL...")
    console.log(normalized.pixelX, normalized.pixelY);

    console.log(name)
    console.log(this.refs)

    const ref = this.refs[name];
    const area = ReactDOM.findDOMNode(ref);
    if (area && !area.contains(evt.target)) {
      console.error("HORIZONTAL SCROLL...")
    }
  }
*/
/*

_onMouseWheel: function(evt) { 
  if (this.props.direction === 'horizontal') { 
    var list = evt.currentTarget.firstChild; 
    var delta = (evt.deltaX == 0 ? evt.deltaY : evt.deltaX); 
    list.scrollLeft += delta; 
    evt.preventDefault(); 
  }
}

*/

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _MaxStr = __webpack_require__(89);

var _MaxStr2 = _interopRequireDefault(_MaxStr);

var _WFCounter = __webpack_require__(55);

var _WFCounter2 = _interopRequireDefault(_WFCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF TEXT ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-text"
};

// ------------------- //

var WFText = function (_Component) {
	(0, _inherits3.default)(WFText, _Component);

	function WFText() {
		(0, _classCallCheck3.default)(this, WFText);
		return (0, _possibleConstructorReturn3.default)(this, (WFText.__proto__ || (0, _getPrototypeOf2.default)(WFText)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFText, [{
		key: 'render',


		// ------------------- //

		value: function render() {
			var _props = this.props,
			    _props$children = _props.children,
			    children = _props$children === undefined ? null : _props$children,
			    _props$className = _props.className,
			    className = _props$className === undefined ? "" : _props$className,
			    _props$style = _props.style,
			    style = _props$style === undefined ? {} : _props$style;

			if (!children || children === "") return false;
			return _react2.default.createElement(
				'span',
				{ className: classes.wrapper + ' ' + className },
				!this.isHtml() ? this.getContent(children, style) : this.getContentHtml(children, style),
				this.getCounter(),
				this.getPreview(children)
			);
		}

		// ------------------- //

	}, {
		key: 'getContent',
		value: function getContent(content) {
			var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var _props2 = this.props,
			    _props2$limit = _props2.limit,
			    limit = _props2$limit === undefined ? 0 : _props2$limit,
			    _props2$limitSufix = _props2.limitSufix,
			    limitSufix = _props2$limitSufix === undefined ? "..." : _props2$limitSufix;

			return _react2.default.createElement(
				'span',
				{ style: style },
				limit < 1 ? content : (0, _MaxStr2.default)(content, limit, limitSufix),
				' '
			);
		}

		// ------------------- //

	}, {
		key: 'getContentHtml',
		value: function getContentHtml(content) {
			var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			return _react2.default.createElement('span', { style: style, dangerouslySetInnerHTML: { __html: content } });
		}

		// ------------------- //

	}, {
		key: 'getCounter',
		value: function getCounter() {
			var _props3 = this.props,
			    _props3$counter = _props3.counter,
			    counter = _props3$counter === undefined ? 0 : _props3$counter,
			    _props3$counterMax = _props3.counterMax,
			    counterMax = _props3$counterMax === undefined ? 0 : _props3$counterMax,
			    _props3$counterParent = _props3.counterParenthesis,
			    counterParenthesis = _props3$counterParent === undefined ? true : _props3$counterParent;

			if (counter === 0) return false;
			return _react2.default.createElement(_WFCounter2.default, { counter: counter, max: counterMax, parenthesis: counterParenthesis });
		}

		// ------------------- //

	}, {
		key: 'getPreview',
		value: function getPreview(content) {
			var _props4 = this.props,
			    _props4$preview = _props4.preview,
			    preview = _props4$preview === undefined ? false : _props4$preview,
			    _props4$previewDirect = _props4.previewDirection,
			    previewDirection = _props4$previewDirect === undefined ? "bottom" : _props4$previewDirect,
			    _props4$previewSplit = _props4.previewSplit,
			    previewSplit = _props4$previewSplit === undefined ? "" : _props4$previewSplit;

			if (!preview || this.isHtml()) return false;
			if (!this.isLimit(content)) return false;
			if (previewSplit === "") {
				return _react2.default.createElement(
					'span',
					{ className: 'wf-full ' + previewDirection },
					content
				);
			} else {
				var items = content.split(previewSplit);
				return _react2.default.createElement(
					'span',
					{ className: 'wf-full ' + previewDirection },
					_react2.default.createElement(
						'ul',
						null,
						items.map(function (item, i) {
							return _react2.default.createElement(
								'li',
								{ key: i },
								item
							);
						})
					)
				);
			}
		}

		// ------------------- //

	}, {
		key: 'isHtml',
		value: function isHtml() {
			return this.props.html || false;
		}

		// ------------------- //

	}, {
		key: 'isLimit',
		value: function isLimit(content) {
			var _props$limit = this.props.limit,
			    limit = _props$limit === undefined ? 0 : _props$limit;

			return content.length > limit;
		}
	}]);
	return WFText;
}(_react.Component);

// ------------------- //

exports.default = WFText;

// ------------------- //

/*

	<WFText
	html={true}
	className={className}
	><strong>Hello<strong> world...</strong></WFText>

	<WFText
	html={true}
	className={className}
	counter={18}
	counterMax={36}
	><strong>Hello<strong> world...</strong></WFText>

	<WFText
	className={className}
	limit={40}
	limitSufix={"..."}
	limitPreview={true}
	preview={true}
	previewDirection={"bottom"}
	>Est-ce que vous avez des commentaires pour fusionner les documents ?</WFText>

	<WFText
	className={className}
	limit={40}
	limitSufix={"..."}
	preview={true}
	previewSplit={","}
	previewDirection={"bottom"}
	>Demande de Financement, Proposition Commercial, Réglement du litige, Offre et Partenariat Commercial</WFText>

*/

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WF_CONTENT_ITEM_STR = exports.WF_CALENDAR_EVENT_RECURRENCE_STR = exports.WF_CALENDAR_EVENT_REMINDERS_STR = exports.WF_CALENDAR_EVENT_ATTENDEES_STR = exports.WF_CALENDAR_EVENT_STR = exports.WF_SESSION_LOGIN_STR = exports.WF_QUIZ_QUIZZ_STR = exports.WF_PAGEBUILDER_SIMPLE_PAGE_STR = exports.WF_SIGNUP_ACTIVATION_STR = exports.WF_SIGNUP_LOST_PASSWORD_STR = exports.WF_SIGNUP_PROFILE_STR = exports.WF_SHOP_CART_STR = exports.WF_SHOP_PAYMENT_STR = exports.WF_SHOP_ORDER_ITEMS_STR = exports.WF_SHOP_ORDER_STR = exports.WF_CATALOG_PRODUCT_STR = exports.WF_CONTACT_ADVANCED_STR = exports.WF_CONTACT_SIMPLE_STR = exports.WF_CUSTOM_CUSTOM_STR = exports.WF_CORE_CATEGORY_ENTRY_STR = exports.WF_CORE_EVENT_TYPE_STR = exports.WF_CORE_SETTING_STR = exports.WF_CORE_LICENSE_STR = exports.WF_CORE_ACTION_STR = exports.WF_CORE_ACTION_TYPE_STR = exports.WF_CORE_FIELD_CONFIG_STR = exports.WF_CORE_FORM_CONFIG_STR = exports.WF_CORE_OPTION_GROUP_STR = exports.WF_CORE_OPTION_STR = exports.WF_CORE_FIELD_SPEC_STR = exports.WF_CORE_PRODUCT_TYPE_STR = exports.WF_CORE_MODULE_STR = exports.WF_CONTENT_ITEM_ID = exports.WF_CALENDAR_EVENT_RECURRENCE_ID = exports.WF_CALENDAR_EVENT_REMINDERS_ID = exports.WF_CALENDAR_EVENT_ATTENDEES_ID = exports.WF_CALENDAR_EVENT_ID = exports.WF_SESSION_LOGIN_ID = exports.WF_CONTACT_ADVANCED_ID = exports.WF_CONTACT_SIMPLE_ID = exports.WF_PAGEBUILDER_SIMPLE_PAGE_ID = exports.WF_SIGNUP_ACTIVATION_ID = exports.WF_SIGNUP_LOST_PASSWORD_ID = exports.WF_SIGNUP_PROFILE_ID = exports.WF_SHOP_CART_ID = exports.WF_SHOP_PAYMENT_ID = exports.WF_SHOP_ORDER_ITEMS_ID = exports.WF_SHOP_ORDER_ID = exports.WF_CATALOG_PRODUCT_ID = exports.WF_QUIZ_QUIZZ_ID = exports.WF_CUSTOM_CUSTOM_ID = exports.WF_CORE_CATEGORY_ENTRY_ID = exports.WF_CORE_EVENT_TYPE_ID = exports.WF_CORE_SETTING_ID = exports.WF_CORE_LICENSE_ID = exports.WF_CORE_ACTION_ID = exports.WF_CORE_ACTION_TYPE_ID = exports.WF_CORE_FIELD_CONFIG_ID = exports.WF_CORE_FORM_CONFIG_ID = exports.WF_CORE_OPTION_GROUP_ID = exports.WF_CORE_OPTION_ID = exports.WF_CORE_FIELD_SPEC_ID = exports.WF_CORE_PRODUCT_TYPE_ID = exports.WF_CORE_MODULE_ID = exports.WF_CONTENT_STR = exports.WF_CALENDAR_STR = exports.WF_SESSION_STR = exports.WF_CONTACT_STR = exports.WF_PAGEBUILDER_STR = exports.WF_SIGNUP_STR = exports.WF_SHOP_STR = exports.WF_CATALOG_STR = exports.WF_QUIZ_STR = exports.WF_CUSTOM_STR = exports.WF_CORE_STR = exports.WF_MAX_ADDON_ID = exports.WF_CONTENT_ID = exports.WF_CALENDAR_ID = exports.WF_SESSION_ID = exports.WF_CONTACT_ID = exports.WF_PAGEBUILDER_ID = exports.WF_SIGNUP_ID = exports.WF_SHOP_ID = exports.WF_CATALOG_ID = exports.WF_QUIZ_ID = exports.WF_CUSTOM_ID = exports.WF_CORE_ID = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define main producttypes constants
var WF_CORE_ID = exports.WF_CORE_ID = 1;
var WF_CUSTOM_ID = exports.WF_CUSTOM_ID = 2;
var WF_QUIZ_ID = exports.WF_QUIZ_ID = 3;
var WF_CATALOG_ID = exports.WF_CATALOG_ID = 4;
var WF_SHOP_ID = exports.WF_SHOP_ID = 5;
var WF_SIGNUP_ID = exports.WF_SIGNUP_ID = 6;
var WF_PAGEBUILDER_ID = exports.WF_PAGEBUILDER_ID = 7;
var WF_CONTACT_ID = exports.WF_CONTACT_ID = 8;
var WF_SESSION_ID = exports.WF_SESSION_ID = 9;
var WF_CALENDAR_ID = exports.WF_CALENDAR_ID = 10;
var WF_CONTENT_ID = exports.WF_CONTENT_ID = 11;

var WF_MAX_ADDON_ID = exports.WF_MAX_ADDON_ID = 99;

var WF_CORE_STR = exports.WF_CORE_STR = 'core';
var WF_CUSTOM_STR = exports.WF_CUSTOM_STR = 'custom';
var WF_QUIZ_STR = exports.WF_QUIZ_STR = 'quiz';
var WF_CATALOG_STR = exports.WF_CATALOG_STR = 'catalog';
var WF_SHOP_STR = exports.WF_SHOP_STR = 'shop';
var WF_SIGNUP_STR = exports.WF_SIGNUP_STR = 'signup';
var WF_PAGEBUILDER_STR = exports.WF_PAGEBUILDER_STR = 'pagebuilder';
var WF_CONTACT_STR = exports.WF_CONTACT_STR = 'contact';
var WF_SESSION_STR = exports.WF_SESSION_STR = 'session';
var WF_CALENDAR_STR = exports.WF_CALENDAR_STR = 'calendar';
var WF_CONTENT_STR = exports.WF_CONTENT_STR = 'content';

// Define sub producttypes constants
// define core subtypes ids range 100 - 199
var WF_CORE_MODULE_ID = exports.WF_CORE_MODULE_ID = 100;
var WF_CORE_PRODUCT_TYPE_ID = exports.WF_CORE_PRODUCT_TYPE_ID = 101;
var WF_CORE_FIELD_SPEC_ID = exports.WF_CORE_FIELD_SPEC_ID = 102;
var WF_CORE_OPTION_ID = exports.WF_CORE_OPTION_ID = 103;
var WF_CORE_OPTION_GROUP_ID = exports.WF_CORE_OPTION_GROUP_ID = 104;
var WF_CORE_FORM_CONFIG_ID = exports.WF_CORE_FORM_CONFIG_ID = 105;
var WF_CORE_FIELD_CONFIG_ID = exports.WF_CORE_FIELD_CONFIG_ID = 106;
var WF_CORE_ACTION_TYPE_ID = exports.WF_CORE_ACTION_TYPE_ID = 107;
var WF_CORE_ACTION_ID = exports.WF_CORE_ACTION_ID = 108;
var WF_CORE_LICENSE_ID = exports.WF_CORE_LICENSE_ID = 112;
var WF_CORE_SETTING_ID = exports.WF_CORE_SETTING_ID = 113;
var WF_CORE_EVENT_TYPE_ID = exports.WF_CORE_EVENT_TYPE_ID = 114;
var WF_CORE_CATEGORY_ENTRY_ID = exports.WF_CORE_CATEGORY_ENTRY_ID = 115;
// define custom forms ids range 200 - 299
var WF_CUSTOM_CUSTOM_ID = exports.WF_CUSTOM_CUSTOM_ID = 200;
// define quiz subtypes ids range 300 - 399
var WF_QUIZ_QUIZZ_ID = exports.WF_QUIZ_QUIZZ_ID = 300;
// define catalog forms ids range 400 - 499
var WF_CATALOG_PRODUCT_ID = exports.WF_CATALOG_PRODUCT_ID = 400;
// define shop subtypes ids range 500 - 599
var WF_SHOP_ORDER_ID = exports.WF_SHOP_ORDER_ID = 500;
var WF_SHOP_ORDER_ITEMS_ID = exports.WF_SHOP_ORDER_ITEMS_ID = 501;
var WF_SHOP_PAYMENT_ID = exports.WF_SHOP_PAYMENT_ID = 502;
var WF_SHOP_CART_ID = exports.WF_SHOP_CART_ID = 503;
// define signup subtypes ids range 600 - 699
var WF_SIGNUP_PROFILE_ID = exports.WF_SIGNUP_PROFILE_ID = 600;
var WF_SIGNUP_LOST_PASSWORD_ID = exports.WF_SIGNUP_LOST_PASSWORD_ID = 601;
var WF_SIGNUP_ACTIVATION_ID = exports.WF_SIGNUP_ACTIVATION_ID = 602;
// define store subtypes ids range 700 - 799
var WF_PAGEBUILDER_SIMPLE_PAGE_ID = exports.WF_PAGEBUILDER_SIMPLE_PAGE_ID = 700;
// define contact subtypes ids range 800 - 899
var WF_CONTACT_SIMPLE_ID = exports.WF_CONTACT_SIMPLE_ID = 800;
var WF_CONTACT_ADVANCED_ID = exports.WF_CONTACT_ADVANCED_ID = 801;
// define session subtypes ids range 900 - 999
var WF_SESSION_LOGIN_ID = exports.WF_SESSION_LOGIN_ID = 900;
// define calendar subtypes ids range 1000 - 1099
var WF_CALENDAR_EVENT_ID = exports.WF_CALENDAR_EVENT_ID = 1000;
var WF_CALENDAR_EVENT_ATTENDEES_ID = exports.WF_CALENDAR_EVENT_ATTENDEES_ID = 1001;
var WF_CALENDAR_EVENT_REMINDERS_ID = exports.WF_CALENDAR_EVENT_REMINDERS_ID = 1002;
var WF_CALENDAR_EVENT_RECURRENCE_ID = exports.WF_CALENDAR_EVENT_RECURRENCE_ID = 1003;
// define content subtypes ids range 1100 - 1199
var WF_CONTENT_ITEM_ID = exports.WF_CONTENT_ITEM_ID = 1100;

// define producttypes names
var WF_CORE_MODULE_STR = exports.WF_CORE_MODULE_STR = 'core-module';
var WF_CORE_PRODUCT_TYPE_STR = exports.WF_CORE_PRODUCT_TYPE_STR = 'core-product-type';
var WF_CORE_FIELD_SPEC_STR = exports.WF_CORE_FIELD_SPEC_STR = 'core-field-spec';
var WF_CORE_OPTION_STR = exports.WF_CORE_OPTION_STR = 'core-option';
var WF_CORE_OPTION_GROUP_STR = exports.WF_CORE_OPTION_GROUP_STR = 'core-option-group';
var WF_CORE_FORM_CONFIG_STR = exports.WF_CORE_FORM_CONFIG_STR = 'core-form-config';
var WF_CORE_FIELD_CONFIG_STR = exports.WF_CORE_FIELD_CONFIG_STR = 'core-field-config';
var WF_CORE_ACTION_TYPE_STR = exports.WF_CORE_ACTION_TYPE_STR = 'core-action-type';
var WF_CORE_ACTION_STR = exports.WF_CORE_ACTION_STR = 'core-action';
var WF_CORE_LICENSE_STR = exports.WF_CORE_LICENSE_STR = 'core-license';
var WF_CORE_SETTING_STR = exports.WF_CORE_SETTING_STR = 'core-setting';
var WF_CORE_EVENT_TYPE_STR = exports.WF_CORE_EVENT_TYPE_STR = 'core-event-type';
var WF_CORE_CATEGORY_ENTRY_STR = exports.WF_CORE_CATEGORY_ENTRY_STR = 'core-category-entry';
var WF_CUSTOM_CUSTOM_STR = exports.WF_CUSTOM_CUSTOM_STR = 'custom-custom';
var WF_CONTACT_SIMPLE_STR = exports.WF_CONTACT_SIMPLE_STR = 'contact-simple';
var WF_CONTACT_ADVANCED_STR = exports.WF_CONTACT_ADVANCED_STR = 'contact-advanced';
var WF_CATALOG_PRODUCT_STR = exports.WF_CATALOG_PRODUCT_STR = 'catalog-product';
var WF_SHOP_ORDER_STR = exports.WF_SHOP_ORDER_STR = 'shop-order';
var WF_SHOP_ORDER_ITEMS_STR = exports.WF_SHOP_ORDER_ITEMS_STR = 'shop-items';
var WF_SHOP_PAYMENT_STR = exports.WF_SHOP_PAYMENT_STR = 'shop-payment';
var WF_SHOP_CART_STR = exports.WF_SHOP_CART_STR = 'shop-cart';
var WF_SIGNUP_PROFILE_STR = exports.WF_SIGNUP_PROFILE_STR = 'signup-profile';
var WF_SIGNUP_LOST_PASSWORD_STR = exports.WF_SIGNUP_LOST_PASSWORD_STR = 'signup-lost-password';
var WF_SIGNUP_ACTIVATION_STR = exports.WF_SIGNUP_ACTIVATION_STR = 'signup-activation';
var WF_PAGEBUILDER_SIMPLE_PAGE_STR = exports.WF_PAGEBUILDER_SIMPLE_PAGE_STR = 'pagebuilder-simple-page';
var WF_QUIZ_QUIZZ_STR = exports.WF_QUIZ_QUIZZ_STR = 'quiz-quizz';
var WF_SESSION_LOGIN_STR = exports.WF_SESSION_LOGIN_STR = 'session-login';
var WF_CALENDAR_EVENT_STR = exports.WF_CALENDAR_EVENT_STR = 'calendar-event';
var WF_CALENDAR_EVENT_ATTENDEES_STR = exports.WF_CALENDAR_EVENT_ATTENDEES_STR = 'calendar-event-attendees';
var WF_CALENDAR_EVENT_REMINDERS_STR = exports.WF_CALENDAR_EVENT_REMINDERS_STR = 'calendar-event-reminders';
var WF_CALENDAR_EVENT_RECURRENCE_STR = exports.WF_CALENDAR_EVENT_RECURRENCE_STR = 'calendar-event-recurrence';
var WF_CONTENT_ITEM_STR = exports.WF_CONTENT_ITEM_STR = 'content-item';

/**
 * Holds product types
 */

var WFProductType = function () {
  function WFProductType() {
    (0, _classCallCheck3.default)(this, WFProductType);
  }

  (0, _createClass3.default)(WFProductType, null, [{
    key: 'getModuleList',

    /**
     * Get top list of producttypes (modules) as dictionary
     * key is the product name
     * value is the product type
     */
    value: function getModuleList() {
      if (typeof WFProductType.moduleList == 'undefined') {
        WFProductType.moduleList = {
          WF_CORE_STR: WF_CORE_ID,
          WF_CUSTOM_STR: WF_CUSTOM_ID,
          WF_QUIZ_STR: WF_QUIZ_ID,
          WF_CATALOG_STR: WF_CATALOG_ID,
          WF_SHOP_STR: WF_SHOP_ID,
          WF_SIGNUP_STR: WF_SIGNUP_ID,
          WF_PAGEBUILDER_STR: WF_PAGEBUILDER_ID,
          WF_CONTENT_STR: WF_CONTENT_ID,
          WF_CONTACT_STR: WF_CONTACT_ID,
          WF_SESSION_STR: WF_SESSION_ID,
          WF_CALENDAR_STR: WF_CALENDAR_ID
        };
      }
      return WFProductType.moduleList;
    }

    /**
     * Get list of form types that can be created by user as dictionary
     * key is the product name
     * value is the product type
     */

  }, {
    key: 'getFormTypeList',
    value: function getFormTypeList() {
      if (typeof WFProductType.formTypeList == 'undefined') {
        WFProductType.formTypeList = {
          WF_CUSTOM_CUSTOM_STR: WF_CUSTOM_CUSTOM_ID,
          WF_CONTACT_SIMPLE_STR: WF_CONTACT_SIMPLE_ID,
          WF_CONTACT_ADVANCED_STR: WF_CONTACT_ADVANCED_ID,
          WF_QUIZ_QUIZZ_STR: WF_QUIZ_QUIZZ_ID,
          WF_SESSION_LOGIN_STR: WF_SESSION_LOGIN_ID,
          WF_SIGNUP_PROFILE_STR: WF_SIGNUP_PROFILE_ID
        };
      }
      return WFProductType.formTypeList;
    }
  }]);
  return WFProductType;
}();

;

exports.default = WFProductType;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

var _WFValueTypes = __webpack_require__(11);

var _WFType2 = __webpack_require__(49);

var _WFType3 = _interopRequireDefault(_WFType2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS OBJECT ------------------- //

// ------------------- //

var WFObject = function (_WFType) {
  (0, _inherits3.default)(WFObject, _WFType);

  /**
   * Constructor
   */
  function WFObject() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFObject);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFObject.__proto__ || (0, _getPrototypeOf2.default)(WFObject)).call(this, _WFValueTypes.WF_OBJECT_VALUE));

    var _config$value = config.value,
        value = _config$value === undefined ? {} : _config$value;

    _this.objectValue = {};
    // Set value
    _this.set(value);
    return _this;
  }

  /**
   * Test if obj is instance Of this class
   * @param obj the object to test
   * @return boolean
   */


  (0, _createClass3.default)(WFObject, [{
    key: 'getValue',


    /**
     * Get object
     * @return object if exist else return null
     */
    value: function getValue() {
      return this.objectValue;
    }

    /**
     * Set object
     * @return object if exist else return null
     */

  }, {
    key: 'setValue',
    value: function setValue(obj) {
      this.clear();
      this.set(obj);
    }

    /**
     * Get object's attribute(s)
     * @return value ?: defaultValue
     */

  }, {
    key: 'get',
    value: function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!key) {
        return defaultValue;
      } else {
        if (this.has(key)) {
          return this.objectValue[key];
        } else {
          return defaultValue;
        }
      }
    }

    /**
     * Loop object's attribute(s)
     * @param fn
     */

  }, {
    key: 'each',
    value: function each(fn) {
      if ((0, _Lodash.isFunction)(fn)) {
        var i = 0;
        var l = this.getCounter();
        for (var key in this.objectValue) {
          i++;
          fn(key, this.objectValue[key], i, l);
        }
      }
    }

    /**
     * Set object's attribute(s)
     * @param objVal object 
     */

  }, {
    key: 'set',
    value: function set() {
      var objVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ((0, _Lodash.isObject)(objVal)) {
        var l = (0, _keys2.default)(objVal).length;
        if (l === 0) {
          return;
        } else {
          for (var key in objVal) {
            this.objectValue[key] = objVal[key];
          }
        }
      }
    }

    /**
     * Delete object's attribute(s) by key(s)
     * @param objKeys is array || string || number 
     */

  }, {
    key: 'unset',
    value: function unset() {
      var _this2 = this;

      var objKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if ((0, _Lodash.isString)(objKeys) || (0, _Lodash.isNumber)(objKeys)) {
        this.unsetByKey(objKeys);
      } else if ((0, _Lodash.isArray)(objKeys)) {
        objKeys.forEach(function (k) {
          return _this2.unsetByKey(k);
        });
      }
    }

    /**
     * Delete object's attribute by key
     * @param objKeys string
     */

  }, {
    key: 'unsetByKey',
    value: function unsetByKey(k) {
      var key = this.toKey(k);
      if (this.has(key)) {
        delete this.objectValue[key];
      }
    }

    /**
     * if object's attribute is object merge with new object value
     * @param objVal object 
     */

  }, {
    key: 'assign',
    value: function assign(k) {
      var objVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var key = this.toKey(k);
      var prevObjVal = this.objectValue[key];
      if (!prevObjVal) {
        prevObjVal = {};
      }
      if (key && (0, _Lodash.isObject)(objVal) && (0, _Lodash.isObject)(prevObjVal)) {
        this.objectValue[key] = (0, _assign2.default)(prevObjVal, objVal);
      }
    }

    /**
     * Empty object
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.objectValue = {};
    }

    /**
     * Get keys in object
     * @return array;
     */

  }, {
    key: 'getKeys',
    value: function getKeys() {
      return (0, _keys2.default)(this.objectValue);
    }

    /**
     * Count prop in object
     * @return integer;
     */

  }, {
    key: 'getCounter',
    value: function getCounter() {
      return this.getKeys().length;
    }

    /**
     * Check if prop exist
     * @return value ?: defaultValue
     */

  }, {
    key: 'has',
    value: function has() {
      var objKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!objKeys) {
        return false;
      } else {
        var key = this.toKey(objKeys);
        return this.objectValue.hasOwnProperty(key);
      }
    }

    /**
     * Check if is counter === 0
     * @return boolean
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.getCounter() === 0;
    }

    /**
     * Format objKey to string
     * @param objKeys string || number
     * @return string
     */

  }, {
    key: 'toKey',
    value: function toKey(objKey) {
      return objKey.toString();
    }

    /**
     * Serialize this.objectValue
     * @return json
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return (0, _JSON.stringify)(this.objectValue);
    }

    /**
     * Parse json to object
     * Set this.objectValue
     * @param json string
     * @param next callback 
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(json) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (json && (0, _Lodash.isObject)(json)) {
        this.setValue(json);
      } else if (json && (0, _Lodash.isString)(json)) {
        var data = (0, _JSON.parse)(json);
        if (data !== "" || (0, _Lodash.isObject)(data) && (0, _keys2.default)(data).length > 0) {
          this.setValue(data);
          if ((0, _Lodash.isFunction)(next)) {
            next();
          }
        }
      }
    }

    /**w
     * Show current value in console
     */

  }, {
    key: 'toConsole',
    value: function toConsole() {
      console.log("");
      console.warn('WFObject');
      console.log('counter =>', this.getCounter());
      console.log('keys =>', (0, _JSON.stringify)(this.getKeys()));
      console.log('value =>', (0, _JSON.stringify)(this.objectValue));
      console.dir('WFObject', this.objectValue);
      console.log("");
    }
  }], [{
    key: 'instanceOf',
    value: function instanceOf(obj) {
      return obj instanceof WFObject;
    }
  }]);
  return WFObject;
}(_WFType3.default);
// ------------------- //


exports.default = WFObject;
// ------------------- //

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _Constants = __webpack_require__(70);

var _Lodash = __webpack_require__(6);

var _WFInputTypes = __webpack_require__(24);

var _WFDataTypes = __webpack_require__(47);

var _WFValueTypes = __webpack_require__(11);

var _WFEventTypes = __webpack_require__(9);

var _WFProductType = __webpack_require__(17);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WF_VALUES_CHANGE = "wf_values_change";

/**
 * Store form field infos setOptionGroup
 */

var WFormField = function () {
  /**
   * Constructor
   * Create a new field
   * @param config the schema field config
   */
  function WFormField(config) {
    (0, _classCallCheck3.default)(this, WFormField);

    this.entryId = new _WFormProp2.default("entry_id", _WFDataTypes.WF_TYPE_INTEGER, 0);
    this.name = new _WFormProp2.default("name", _WFDataTypes.WF_TYPE_STRING, "");
    this.type = new _WFormProp2.default("type", _WFDataTypes.WF_TYPE_STRING, "");
    this.label = new _WFormProp2.default("label", _WFDataTypes.WF_TYPE_STRING, "");
    this.len = new _WFormProp2.default("len", _WFDataTypes.WF_TYPE_INTEGER, 0);
    this.legend = new _WFormProp2.default("legend", _WFDataTypes.WF_TYPE_TEXT, "");
    this.inputType = new _WFormProp2.default("input_type", _WFDataTypes.WF_TYPE_STRING, "");
    this.validationSchema = new _WFormProp2.default("validation_schema", _WFDataTypes.WF_TYPE_OBJECT);
    this.required = new _WFormProp2.default("required", _WFDataTypes.WF_TYPE_BOOLEAN, false);
    this.editable = new _WFormProp2.default("editable", _WFDataTypes.WF_TYPE_BOOLEAN, true);
    this.isCategory = new _WFormProp2.default("is_category", _WFDataTypes.WF_TYPE_BOOLEAN, false);
    this.visible = new _WFormProp2.default("visible", _WFDataTypes.WF_TYPE_BOOLEAN, true);
    this.searchable = new _WFormProp2.default("searchable", _WFDataTypes.WF_TYPE_BOOLEAN, false);
    this.formConfigId = new _WFormProp2.default("wf_formconfig_id", _WFDataTypes.WF_TYPE_INTEGER, 0);
    this.optionGroupId = new _WFormProp2.default("wf_optiongroup_id", _WFDataTypes.WF_TYPE_INTEGER, 0);
    this.optionGroup = new _WFormProp2.default("wf_optiongroup", _WFDataTypes.WF_TYPE_OBJECT);
    this.canCreateColumn = new _WFormProp2.default("create_column", _WFDataTypes.WF_TYPE_BOOLEAN, true);
    this.isAddon = new _WFormProp2.default("is_addon", _WFDataTypes.WF_TYPE_BOOLEAN, false);
    this.fieldSpecId = new _WFormProp2.default("wf_fieldspec_id", _WFDataTypes.WF_TYPE_INTEGER, 0);
    // the field settings that are stored in column attributes of table
    // wf_field
    this.settings = new _WFormProp2.default("attributes", _WFDataTypes.WF_TYPE_OBJECT);
    // the field value that is stored in form entries table
    this.value = null;
    // the value attributes that are stored in column attributes of table
    // wf_post
    this.attributes = new _WFormProp2.default("attributes", _WFDataTypes.WF_TYPE_OBJECT);
    // holds the selected file in case of file field
    this.file = null;
    // holds the preview url of image in case of file field
    this.imagePreviewUrl = null;
    // the field is branch
    this.branchMgr = null;
    // set field schema
    // NB the line below should be at the last instruction
    this.setSchema(config);
  }

  /**
   * Set prop value
   * @param val the new value to set {string || number || object}
   */


  (0, _createClass3.default)(WFormField, [{
    key: "setValue",
    value: function setValue(val) {
      // Debug...
      // WFormField.debugValue(this, val);
      // console.log(val)
      if (this.getType()) {
        if (this.value) {
          var isObjectField = WFormField.isObjectField(this);
          var isSelectField = WFormField.isSelectField(this);
          var attributesMgr = this.getAttributesMgr();
          if (isObjectField) {
            this.value.setValue(val);
          } else {
            if ((0, _Lodash.isObject)(val)) {
              var key = this.getValueMgr().getKey();
              var value = val[key];
              if (!isSelectField) {
                this.value.setValue(value);
              }
              if (!this.getCanCreateColumn() && !isSelectField) {
                attributesMgr.setValue((0, _defineProperty3.default)({}, this.getName(), val));
              } else {
                if (!isSelectField) {
                  delete val[key];
                  attributesMgr.setValue((0, _defineProperty3.default)({}, this.getName(), val));
                } else {
                  this.value.setValue(val);
                  attributesMgr.setValue((0, _defineProperty3.default)({}, this.getName(), val));
                }
              }
            } else {
              this.value.setValue(val);
              if (!this.getCanCreateColumn()) {
                this.getAttributesMgr().setValue((0, _defineProperty3.default)({}, this.getName(), val));
              }
            }
          }
        }
      }
    }

    /**
     * Clear value
     */

  }, {
    key: "clearValue",
    value: function clearValue() {

      //console.error("CLEAR FLD", this.getName() )

      if (this.value) {
        this.value.clearValue();
        this.attributes.clearValue();
      }
    }

    /**
     * Check if value exist
     */

  }, {
    key: "hasValue",
    value: function hasValue() {
      var value = this.getValue();
      if ((0, _Lodash.isNull)(value) || value === "" || value === false) {
        return false;
      } else {
        return true;
      }
    }

    /**
     * Get prop value
     */

  }, {
    key: "getValue",
    value: function getValue() {
      if (this.value) {
        return this.value.getValue();
      } else {
        return null;
      }
    }

    /**
     * Get value prop 
     */

  }, {
    key: "getValueMgr",
    value: function getValueMgr() {
      if (this.value) {
        return this.value.getValueMgr();
      } else {
        return null;
      }
    }

    /**
     * Get input manager
     */

  }, {
    key: "getInputMgr",
    value: function getInputMgr() {
      if (this.value) {
        return this.value.getValueMgr().input;
      } else {
        return null;
      }
    }

    /**
     * Set input manager
     */

  }, {
    key: "setInputMgr",
    value: function setInputMgr(mgr) {
      if (this.value && mgr && !this.getInputMgr()) {
        return this.value.getValueMgr().setInput(mgr);
      }
    }

    /**
     * Set prop entryId - entryId will only set if it was empty
     * @param val the new value to set
     */

  }, {
    key: "setEntryId",
    value: function setEntryId(val) {
      if (val) {
        this.entryId.setValue(val);
      }
    }

    /**
     * Get prop entryId
     */

  }, {
    key: "getEntryId",
    value: function getEntryId() {
      return this.entryId.getValue();
    }

    /**
     * Set prop name - name will only set if entryId was empty
     * @param val the new value to set
     */

  }, {
    key: "setName",
    value: function setName(val) {
      this.name.setValue(val);
    }

    /**
     * Get prop name
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name.getValue();
    }

    /**
     * Set prop type - type will only set if entryId was empty
     * if type is set ==> the value will be reset
     * @param val the new value to set
     */

  }, {
    key: "setType",
    value: function setType(val) {
      this.type.setValue(val);
      this.value = new _WFormProp2.default("value", this.type.getValue());
    }

    /**
     * Get prop type
     */

  }, {
    key: "getType",
    value: function getType() {
      return this.type.getValue();
    }

    /**
     * Set prop len - len will only set if entryId was empty
     * @param val the new value to set
     */

  }, {
    key: "setLen",
    value: function setLen(val) {
      this.len.setValue(val);
    }

    /**
     * Get prop len
     */

  }, {
    key: "getLen",
    value: function getLen() {
      return this.len.getValue();
    }

    /**
     * Set prop label
     * @param val the new value to set
     */

  }, {
    key: "setLabel",
    value: function setLabel(val) {
      this.label.setValue(val);
    }

    /**
     * Get prop label
     */

  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.label.getValue();
    }

    /**
     * Set prop legend
     * @param val the new value to set
     */

  }, {
    key: "setLegend",
    value: function setLegend(val) {
      this.legend.setValue(val);
    }

    /**
     * Get prop legend
     */

  }, {
    key: "getLegend",
    value: function getLegend() {
      return this.legend.getValue();
    }

    /**
     * Set prop inputType
     * @param val the new value to set
     */

  }, {
    key: "setInputType",
    value: function setInputType(val) {
      this.inputType.setValue(val);
    }

    /**
     * Get prop inputType
     */

  }, {
    key: "getInputType",
    value: function getInputType() {
      return this.inputType.getValue();
    }

    /**
     * Set prop validationSchema
     * @param val the new value to set
     */

  }, {
    key: "setValidationSchema",
    value: function setValidationSchema(val) {
      this.validationSchema.setValue(val);
    }

    /**
     * Get prop validationSchema
     */

  }, {
    key: "getValidationSchema",
    value: function getValidationSchema() {
      return this.validationSchema.getValue();
    }

    /**
     * Set prop formConfigId
     * @param val the new value to set
     */

  }, {
    key: "setFormConfigId",
    value: function setFormConfigId(val) {
      this.formConfigId.setValue(val);
    }

    /**
     * Get prop formConfigId
     */

  }, {
    key: "getFormConfigId",
    value: function getFormConfigId() {
      return this.formConfigId.getValue();
    }

    /**
     * Set prop optionGroupId
     * @param val the new value to set
     */

  }, {
    key: "setOptionGroupId",
    value: function setOptionGroupId(val) {
      this.optionGroupId.setValue(val);
    }

    /**
     * Get prop optionGroupId
     */

  }, {
    key: "getOptionGroupId",
    value: function getOptionGroupId() {
      return this.optionGroupId.getValue();
    }

    /**
     * Set prop optionGroup
     * @param val the new value to set
     */

  }, {
    key: "setOptionGroup",
    value: function setOptionGroup(val) {
      this.optionGroup.setValue(val);
    }

    /**
     * Get prop optionGroup
     */

  }, {
    key: "getOptionGroup",
    value: function getOptionGroup() {
      return this.optionGroup.getValue();
    }

    /**
     * Set prop fieldSpecId
     * @param val the new value to set
     */

  }, {
    key: "setFieldSpecId",
    value: function setFieldSpecId(val) {
      this.fieldSpecId.setValue(val);
    }

    /**
     * Get prop fieldSpecId
     */

  }, {
    key: "getFieldSpecId",
    value: function getFieldSpecId() {
      return this.fieldSpecId.getValue();
    }

    /**
     * Set prop required
     * @param val the new value to set
     */

  }, {
    key: "setRequired",
    value: function setRequired(val) {
      this.required.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Get prop required
     */

  }, {
    key: "getRequired",
    value: function getRequired() {
      return this.required.getValue();
    }

    /**
     * Set prop editable
     * @param val the new value to set
     */

  }, {
    key: "setEditable",
    value: function setEditable(val) {
      this.editable.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Get prop editable
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.editable.getValue();
    }

    /**
     * Set prop isCategory
     * @param val the new value to set
     */

  }, {
    key: "setIsCategory",
    value: function setIsCategory(val) {
      this.isCategory.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Get prop isCategory
     */

  }, {
    key: "getIsCategory",
    value: function getIsCategory() {
      return this.isCategory.getValue();
    }

    /**
     * Set prop visible
     * @param val the new value to set
     */

  }, {
    key: "setVisible",
    value: function setVisible(val) {
      this.visible.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Get prop visible
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.visible.getValue();
    }

    /**
     * Set prop searchable
     * @param val the new value to set
     */

  }, {
    key: "setSearchable",
    value: function setSearchable(val) {
      this.searchable.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Get prop searchable
     */

  }, {
    key: "getSearchable",
    value: function getSearchable() {
      return this.searchable.getValue();
    }

    /**
     * Set prop canCreateColumn
     * @param val the new value to set
     */

  }, {
    key: "setCanCreateColumn",
    value: function setCanCreateColumn(val) {
      this.canCreateColumn.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Get prop canCreateColumn
     */

  }, {
    key: "getCanCreateColumn",
    value: function getCanCreateColumn() {
      return this.canCreateColumn.getValue();
    }

    /**
     * Set prop isAddon
     * @param val the new value to set
     */

  }, {
    key: "setIsAddon",
    value: function setIsAddon(val) {
      this.isAddon.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Get prop isAddon
     */

  }, {
    key: "getIsAddon",
    value: function getIsAddon() {
      return this.isAddon.getValue();
    }

    /**
     * Set from a given schema
     * @param config the schema field config
     */

  }, {
    key: "setSchema",
    value: function setSchema(config) {
      // TODO(lybaba) remove me
      //console.error("SET_FIELD_SCHEMA")
      //console.dir(config)

      var _config$entry_id = config.entry_id,
          entry_id = _config$entry_id === undefined ? 0 : _config$entry_id,
          _config$id = config.id,
          id = _config$id === undefined ? 0 : _config$id,
          _config$name = config.name,
          name = _config$name === undefined ? "" : _config$name,
          _config$label = config.label,
          label = _config$label === undefined ? "" : _config$label,
          _config$type = config.type,
          type = _config$type === undefined ? _WFDataTypes.WF_TYPE_STRING : _config$type,
          _config$legend = config.legend,
          legend = _config$legend === undefined ? "" : _config$legend,
          _config$input_type = config.input_type,
          input_type = _config$input_type === undefined ? "" : _config$input_type,
          _config$validation_sc = config.validation_schema,
          validation_schema = _config$validation_sc === undefined ? "" : _config$validation_sc,
          _config$required = config.required,
          required = _config$required === undefined ? false : _config$required,
          _config$editable = config.editable,
          editable = _config$editable === undefined ? true : _config$editable,
          _config$is_category = config.is_category,
          is_category = _config$is_category === undefined ? false : _config$is_category,
          _config$searchable = config.searchable,
          searchable = _config$searchable === undefined ? false : _config$searchable,
          _config$len = config.len,
          len = _config$len === undefined ? 64 : _config$len,
          _config$wf_formconfig = config.wf_formconfig_id,
          wf_formconfig_id = _config$wf_formconfig === undefined ? 0 : _config$wf_formconfig,
          _config$wf_optiongrou = config.wf_optiongroup_id,
          wf_optiongroup_id = _config$wf_optiongrou === undefined ? 0 : _config$wf_optiongrou,
          _config$wf_optiongrou2 = config.wf_optiongroup,
          wf_optiongroup = _config$wf_optiongrou2 === undefined ? null : _config$wf_optiongrou2,
          _config$wf_fieldspec_ = config.wf_fieldspec_id,
          wf_fieldspec_id = _config$wf_fieldspec_ === undefined ? 0 : _config$wf_fieldspec_,
          _config$visible = config.visible,
          visible = _config$visible === undefined ? true : _config$visible,
          _config$create_column = config.create_column,
          create_column = _config$create_column === undefined ? true : _config$create_column,
          _config$is_addon = config.is_addon,
          is_addon = _config$is_addon === undefined ? false : _config$is_addon,
          _config$attributes = config.attributes,
          attributes = _config$attributes === undefined ? "" : _config$attributes;


      if (entry_id) {
        this.setEntryId(entry_id);
      } else {
        this.setEntryId(id);
      }

      this.setName(name);
      this.setType(type);
      this.setLen(len);
      this.setLabel(label);
      this.setLegend(legend);
      this.setInputType(input_type);
      this.setRequired(required);
      this.setEditable(editable);
      this.setIsCategory(is_category);
      this.setVisible(visible);
      this.setSearchable(searchable);
      this.setFormConfigId(wf_formconfig_id);
      this.setOptionGroupId(wf_optiongroup_id);
      this.setFieldSpecId(wf_fieldspec_id);
      this.setCanCreateColumn(create_column);
      this.setIsAddon(is_addon);
      this.getSettingsMgr().fromJSON(attributes);
      this.setValidationSchema(validation_schema);
      if (wf_optiongroup_id && !wf_optiongroup) {
        this.setOptionGroup({
          id: wf_optiongroup_id
        });
      } else if ((0, _Lodash.isObject)(wf_optiongroup)) {
        this.setOptionGroup(wf_optiongroup);
      }
    }

    /**
     * Get the field config as json plain object
     */

  }, {
    key: "getSchema",
    value: function getSchema() {
      var settings = this.getSettingsMgr().getValue();
      var schema = (0, _assign2.default)({
        wf_formconfig_id: this.getFormConfigId(),
        entry_id: this.getEntryId(),
        name: this.getName(),
        type: this.getType(),
        label: this.getLabel(),
        len: this.getLen(),
        legend: this.getLegend(),
        input_type: this.getInputType(),
        validation_schema: this.getValidationSchema(),
        required: this.getRequired(),
        editable: this.getEditable(),
        is_addon: this.getIsAddon(),
        is_category: this.getIsCategory(),
        visible: this.getVisible(),
        searchable: this.getSearchable(),
        wf_optiongroup_id: this.getOptionGroupId(),
        wf_optiongroup: this.getOptionGroup(),
        wf_fieldspec_id: this.getFieldSpecId(),
        create_column: this.getCanCreateColumn()
      }, settings);
      return schema;
    }

    /**
     * Set this.file and this.imagePreviewUrl
     * @param args
     */

  }, {
    key: "setFileAndImagePreviewUrl",
    value: function setFileAndImagePreviewUrl(args) {
      var _args$file = args.file,
          file = _args$file === undefined ? null : _args$file,
          _args$imagePreviewUrl = args.imagePreviewUrl,
          imagePreviewUrl = _args$imagePreviewUrl === undefined ? null : _args$imagePreviewUrl;


      this.file = file;
      this.imagePreviewUrl = imagePreviewUrl;
    }

    /**
     * Get this.file
     */

  }, {
    key: "getFile",
    value: function getFile() {
      return this.file;
    }

    /**
     * Get this.imagePreviewUrl
     */

  }, {
    key: "getImagePreviewUrl",
    value: function getImagePreviewUrl() {
      return this.imagePreviewUrl;
    }

    /**
     * Get prop attributes value
     * @return this.attributes.getValue()
     */

  }, {
    key: "getAttributes",
    value: function getAttributes() {
      return this.attributes.getValue();
    }

    /**
     * Get prop attributes value manager
     * @return this.attributes.getValueMgr()
     */

  }, {
    key: "getAttributesMgr",
    value: function getAttributesMgr() {
      return this.attributes.getValueMgr();
    }

    /**
     * Get prop settings value
     * @return this.settings.getValue()
     */

  }, {
    key: "getSettings",
    value: function getSettings() {
      return this.settings.getValue();
    }

    /**
     * Get prop settings value manager
     * @return this.settings.getValueMgr()
     */

  }, {
    key: "getSettingsMgr",
    value: function getSettingsMgr() {
      return this.settings.getValueMgr();
    }

    /**
     * Called each time an event occrured in the field
     * main entry point for components
     * Use this.on(WF_EVENT_ONREFRESH) to sync shema with component's state
     * @param eventType the event type
     * @param eventArgs the event args
     */

  }, {
    key: "on",
    value: function on(eventType) {
      var _this = this;

      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.value) {
        // Special case file input handling
        if (eventArgs.hasOwnProperty(_WFValueTypes.WF_EVENT_FILE_VALUE)) {
          var e = eventArgs[_WFValueTypes.WF_EVENT_FILE_VALUE];
          e.preventDefault();
          var reader = new FileReader();
          var file = e.target.files[0];

          reader.onloadend = function () {
            _this.setFileAndImagePreviewUrl({
              file: file,
              imagePreviewUrl: reader.result
            });
          };

          reader.readAsDataURL(file);

          // remove from eventArgs to make normal behavior works
          // TODO(lybaba) FIXME
          delete eventArgs[_WFValueTypes.WF_EVENT_FILE_VALUE];
        }

        // Normal behavior
        if (eventType === _WFEventTypes.WF_EVENT_ONREFRESH) {
          this.value.on(eventType, {
            schema: this.getSchema()
          }, ctx);
        } else {
          this.value.on(eventType, {
            field: this,
            eventArgs: eventArgs,
            name: this.getName(),
            schema: this.getSchema(),
            attributes: this.getAttributesMgr()
          }, ctx);
        }
      }
    }

    /**
     * Check type equal string
     * @return boolean
     */

  }], [{
    key: "isStringField",
    value: function isStringField(handler) {
      var type = handler.getType();
      return type === _WFDataTypes.WF_TYPE_STRING || type === _WFDataTypes.WF_TYPE_TEXT || type === _WFDataTypes.WF_TYPE_HTML;
    }

    /**
     * Check type equal string
     * @return boolean
     */

  }, {
    key: "isObjectField",
    value: function isObjectField(handler) {
      var type = handler.getType();
      return type === _WFDataTypes.WF_TYPE_OBJECT;
    }

    /**
     * Check type equal select
     * @return boolean
     */

  }, {
    key: "isSelectField",
    value: function isSelectField(handler) {
      var type = handler.getType();
      return type === _WFDataTypes.WF_TYPE_SELECT || type === _WFDataTypes.WF_TYPE_SELECT_SINGLE || type === _WFDataTypes.WF_TYPE_SELECT_MULTIPLE;
    }

    /**
     * Debug value 
     */

  }, {
    key: "debugValue",
    value: function debugValue(fld) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      console.warn("SET_VALUES_______________________________");
      var name = fld.getName();
      var type = fld.getType();
      var key = fld.getValueMgr().getKey();
      var isObj = (0, _Lodash.isObject)(val);
      console.log("\n        name : " + name + "\n        type : " + fld.getType() + "\n        isObjectValue : " + isObj + "\n        objValue has name : " + (isObj ? fld.hasOwnProperty(name) : null) + "\n      ");
      console.log(val);
      console.warn("___________________________________________");
    }
  }]);
  return WFormField;
}();

exports.default = WFormField;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isJson = exports.parse = exports.stringify = undefined;

var _jsonStableStringify = __webpack_require__(307);

var _jsonStableStringify2 = _interopRequireDefault(_jsonStableStringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

var

// ----------------- //

stringify = exports.stringify = _jsonStableStringify2.default,


// ----------------- //

parse = exports.parse = function parse() {
	var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

	if (!str || str === "") {
		return result;
	} else {
		//return JSON.parse(str);
		try {
			return JSON.parse(str);
		} catch (e) {
			return result;
		}
	}
},


// ----------------- //

isJson = exports.isJson = function isJson(string) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
};
// JSON ---------------- //

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFDataTypes = __webpack_require__(47);

var _WFString = __webpack_require__(48);

var _WFString2 = _interopRequireDefault(_WFString);

var _WFNumber = __webpack_require__(60);

var _WFNumber2 = _interopRequireDefault(_WFNumber);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _WFSelect = __webpack_require__(233);

var _WFSelect2 = _interopRequireDefault(_WFSelect);

var _WFBoolean = __webpack_require__(88);

var _WFBoolean2 = _interopRequireDefault(_WFBoolean);

var _WFDate = __webpack_require__(232);

var _WFDate2 = _interopRequireDefault(_WFDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Describes a wonder form property
 */
var WFormProp = function () {
  /**
   * Constructor
   * Create a new prop
   * @param name the prop name
   * @param type the prop type
   * @param value the prop initial value
   */
  function WFormProp(name, type) {
    var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    (0, _classCallCheck3.default)(this, WFormProp);

    this.name = new _WFString2.default({ value: name });
    this.type = new _WFString2.default({ value: type });

    var config = {};
    if (initialValue) {
      config['value'] = initialValue;
    }

    switch (type) {
      case _WFDataTypes.WF_TYPE_NUMBER:
        this.value = new _WFNumber2.default(config);
        break;

      case _WFDataTypes.WF_TYPE_INTEGER:
        config['isFloat'] = false;
        this.value = new _WFNumber2.default(config);
        break;

      case _WFDataTypes.WF_TYPE_FLOAT:
        config['isFloat'] = true;
        this.value = new _WFNumber2.default(config);
        break;

      case _WFDataTypes.WF_TYPE_BOOLEAN:
        this.value = new _WFBoolean2.default(config);
        break;

      case _WFDataTypes.WF_TYPE_SELECT:
      case _WFDataTypes.WF_TYPE_SELECT_SINGLE:
      case _WFDataTypes.WF_TYPE_SELECT_MULTIPLE:
        this.value = new _WFSelect2.default(config);
        break;

      case _WFDataTypes.WF_TYPE_ARRAY:
        this.value = new _WFArray2.default(config);
        break;

      case _WFDataTypes.WF_TYPE_OBJECT:
        this.value = new _WFObject2.default(config);
        if ((0, _Lodash.isString)(initialValue)) {
          this.value.fromJSON(initialValue);
        }
        break;
      /*
      case WF_TYPE_DATE:
        this.value          = new WFDate(config);
        break;
      */
      default:
        this.value = new _WFString2.default(config);
        break;
    }
  }

  /**
   * Get the object manager of the prop value
   */


  (0, _createClass3.default)(WFormProp, [{
    key: 'getValueMgr',
    value: function getValueMgr() {
      return this.value;
    }

    /**
     * Get prop name
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name.get();
    }

    /**
     * Get prop type
     */

  }, {
    key: 'getType',
    value: function getType() {
      return this.type.get();
    }

    /**
     * Set prop value
     * @param val the new value to set
     */

  }, {
    key: 'setValue',
    value: function setValue(val) {
      var type = this.getType();
      switch (type) {

        case _WFDataTypes.WF_TYPE_SELECT:
        case _WFDataTypes.WF_TYPE_SELECT_SINGLE:
        case _WFDataTypes.WF_TYPE_SELECT_MULTIPLE:
          this.value.setValues(val);
          break;

        case _WFDataTypes.WF_TYPE_OBJECT:
          if ((0, _Lodash.isString)(val)) {
            this.value.fromJSON(val);
          } else {
            this.value.setValue(val);
          }
          break;

        case _WFDataTypes.WF_TYPE_HTML:
          this.value.fromHtml(val);
          break;

        default:
          this.value.set(val);
      }
    }

    /**
     * Get the value of the prop value
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      var type = this.getType();
      switch (type) {

        case _WFDataTypes.WF_TYPE_SELECT:
        case _WFDataTypes.WF_TYPE_SELECT_SINGLE:
        case _WFDataTypes.WF_TYPE_SELECT_MULTIPLE:
          return this.value.getObjectValue(true);

        case _WFDataTypes.WF_TYPE_OBJECT:
          return this.value.getValue();

        case _WFDataTypes.WF_TYPE_HTML:
          return this.value.toHtml();

        default:
          return this.value.get();
      }
    }

    /**
     * Clear value
     */

  }, {
    key: 'clearValue',
    value: function clearValue() {
      this.value.clear();
    }

    /**
     * Forward call
     * @param evenType string 
     * @param args object params
     */

  }, {
    key: 'on',
    value: function on(evenType) {
      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      this.value.on(evenType, eventArgs, ctx);
    }
  }]);
  return WFormProp;
}();

exports.default = WFormProp;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var INPUT_HIDDEN = exports.INPUT_HIDDEN = "hidden";
var INPUT_TEXT = exports.INPUT_TEXT = "text";
var INPUT_DATE = exports.INPUT_DATE = "date";
var INPUT_EMAIL = exports.INPUT_EMAIL = "email";
var INPUT_MAILER = exports.INPUT_MAILER = "mailer";
var INPUT_NUMBER = exports.INPUT_NUMBER = "number";
var INPUT_TEL = exports.INPUT_TEL = "tel";
var INPUT_URL = exports.INPUT_URL = "url";
var INPUT_TEXTAREA = exports.INPUT_TEXTAREA = "textarea";
var INPUT_SELECT = exports.INPUT_SELECT = "select";
var INPUT_CHECKBOX = exports.INPUT_CHECKBOX = "checkbox";
var INPUT_RADIO_BUTTON = exports.INPUT_RADIO_BUTTON = "radioButton";
var INPUT_FILE = exports.INPUT_FILE = "file";
var INPUT_RANGE = exports.INPUT_RANGE = "range";
var INPUT_COLOR = exports.INPUT_COLOR = "color";
var INPUT_MEDIA = exports.INPUT_MEDIA = "media";
var INPUT_GRID = exports.INPUT_GRID = "grid";
var INPUT_PANEL = exports.INPUT_PANEL = "panel";
var INPUT_PASSWORD = exports.INPUT_PASSWORD = "password";
var INPUT_SELECT2 = exports.INPUT_SELECT2 = "select2";
var INPUT_SELECT2_BAOBAB = exports.INPUT_SELECT2_BAOBAB = "select2baobab";
var INPUT_SELECT2_MONKEY = exports.INPUT_SELECT2_MONKEY = "select2monkey";

var INPUT_SELECT_WORD = exports.INPUT_SELECT_WORD = "WFieldSelectWord";
var INPUT_SELECT_NUMBER = exports.INPUT_SELECT_NUMBER = "WFieldSelectNum";
var INPUT_SELECT_LINE = exports.INPUT_SELECT_LINE = "WFieldSelectLine";
var INPUT_SELECT_IMAGE = exports.INPUT_SELECT_IMAGE = "WFieldSelectImage";

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFieldConfigFactory = __webpack_require__(120);

var _WFieldConfigFactory2 = _interopRequireDefault(_WFieldConfigFactory);

var _WFClient = __webpack_require__(58);

var _WFClient2 = _interopRequireDefault(_WFClient);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

var _WFProductType = __webpack_require__(17);

var _WFDataTypes = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATTRIBUTES = "attributes";

/**
 * Private store  
 */
var licenseStatus = {};
//window.licenseStatus = {};

/**
 * Holds form state 
 */

var WFormState = function () {
  /**
   * Constructor
   * @param config the form config
   */
  function WFormState() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFormState);
    var _config$type = config.type,
        type = _config$type === undefined ? _WFProductType.WF_CUSTOM_CUSTOM_ID : _config$type,
        _config$name = config.name,
        name = _config$name === undefined ? "" : _config$name,
        _config$form_id = config.form_id,
        form_id = _config$form_id === undefined ? 0 : _config$form_id,
        _config$entry_id = config.entry_id,
        entry_id = _config$entry_id === undefined ? 0 : _config$entry_id,
        _config$created_tms = config.created_tms,
        created_tms = _config$created_tms === undefined ? "" : _config$created_tms,
        _config$published = config.published,
        published = _config$published === undefined ? false : _config$published,
        _config$attributes = config.attributes,
        attributes = _config$attributes === undefined ? "" : _config$attributes,
        _config$display_field = config.display_fields,
        display_fields = _config$display_field === undefined ? [] : _config$display_field,
        _config$wf_categorygr = config.wf_categorygroup_id,
        wf_categorygroup_id = _config$wf_categorygr === undefined ? 0 : _config$wf_categorygr,
        _config$wf_optiongrou = config.wf_optiongroup_id,
        wf_optiongroup_id = _config$wf_optiongrou === undefined ? 0 : _config$wf_optiongrou,
        _config$fields = config.fields,
        fields = _config$fields === undefined ? [] : _config$fields,
        _config$actions = config.actions,
        actions = _config$actions === undefined ? [] : _config$actions;

    this.type = new _WFormProp2.default("form_type", _WFDataTypes.WF_TYPE_INTEGER, type);
    this.name = new _WFormProp2.default("form_name", _WFDataTypes.WF_TYPE_STRING, name);
    this.createdTms = new _WFormProp2.default("created_tms", _WFDataTypes.WF_TYPE_STRING, created_tms);
    this.formId = new _WFormProp2.default("form_id", _WFDataTypes.WF_TYPE_INTEGER, form_id);
    this.entryId = new _WFormProp2.default("entry_id", _WFDataTypes.WF_TYPE_INTEGER, entry_id);
    this.settings = new _WFormProp2.default("settings", _WFDataTypes.WF_TYPE_STRING, attributes);
    this.published = new _WFormProp2.default("published", _WFDataTypes.WF_TYPE_BOOLEAN, _WFValue2.default.toBoolean(published));
    // volatile id is used when updating a form state. it can change between
    // two updates.
    this.volatileId = new _WFormProp2.default("_id", _WFDataTypes.WF_TYPE_INTEGER, 0);
    this.submitHandler = new _WFormProp2.default("submit_handler", _WFDataTypes.WF_TYPE_STRING, name);
    this.optionGroupId = new _WFormProp2.default("wf_optiongroup_id", _WFDataTypes.WF_TYPE_INTEGER, wf_optiongroup_id);
    this.categoryGroupId = new _WFormProp2.default("wf_categorygroup_id", _WFDataTypes.WF_TYPE_INTEGER, wf_categorygroup_id);
    this.actions = actions;
    // fields
    this.fields = {};
    this.displayFields = display_fields;
    this.addFields(fields);
    WFormState.setLicenseStatus(this);
  }

  /**
   * Get all fields values mapped by name
   * @return object
   */


  (0, _createClass3.default)(WFormState, [{
    key: "getValues",
    value: function getValues() {
      var values = {};
      var attributes = {};

      values[this.name.getName()] = this.name.getValue();
      values[this.formId.getName()] = this.formId.getValue();
      values[this.entryId.getName()] = this.entryId.getValue();
      values[this.volatileId.getName()] = this.volatileId.getValue();
      values[this.submitHandler.getName()] = this.submitHandler.getValue();

      for (var key in this.fields) {
        var fld = this.fields[key];
        var fldName = fld.getName();
        var fldAttrs = fld.getAttributes();

        if (fld.getEditable()) {
          values[fldName] = fld.getValue();
        } else if (!this.entryId.getValue()) {
          if (fld.getName() === ATTRIBUTES) {
            if (this.getName() === 'form-config') {
              values[fldName] = fld.getValue();
            }
          } else {
            values[fldName] = fld.getValue();
          }
        } else {
          if (fld.getName() === ATTRIBUTES && this.getName() === 'form-config') {
            values[fldName] = fld.getValue();
          }
        }

        if (fldAttrs.hasOwnProperty(fldName)) {
          attributes[fldName] = fldAttrs[fldName];
        }
      }

      if (!values.hasOwnProperty(ATTRIBUTES)) {
        values[ATTRIBUTES] = (0, _JSON.stringify)(attributes);
      }

      return values;
    }

    /**
     * Set fields values
     * @path !CanCreateColumn && isSelect set value with attrValue l196
     * @param values object 
     * ex 
     * values = {
     * subject: "contact for devise",
     * message: "hello world...",
     * }
     * 
     */

  }, {
    key: "setValues",
    value: function setValues(values) {
      if ((0, _Lodash.isObject)(values)) {

        // todo charly dev only...
        //console.error("FORMSTATE SET_VALUE ==> ", this.getName())
        //console.dir(values)

        var attributes = {};

        if (values.hasOwnProperty("entry_id")) {
          this.setEntryId(values.entry_id);
        } else if (values.hasOwnProperty("id")) {
          this.setEntryId(values.id);
        }
        if (values.hasOwnProperty(ATTRIBUTES) && values[ATTRIBUTES]) {
          attributes = (0, _JSON.parse)(values[ATTRIBUTES]);
          var fld = this.fields[ATTRIBUTES];
          if (fld) {
            fld.setValue(values[ATTRIBUTES]);
          }
        }
        for (var key in this.fields) {
          var _fld = this.fields[key];
          if (key !== ATTRIBUTES) {
            var attrValue = null;
            if ((0, _Lodash.isObject)(attributes) && attributes.hasOwnProperty(key)) {
              attrValue = attributes[key];
            }
            if (_fld.getCanCreateColumn()) {
              if (values.hasOwnProperty(key)) {
                var value = values[key];
                if ((0, _Lodash.isObject)(attrValue)) {
                  var subKey = _fld.getValueMgr().getKey();
                  _fld.setValue((0, _assign2.default)((0, _defineProperty3.default)({}, subKey, value), attrValue));
                } else {
                  _fld.setValue(value);
                }
              }
            } else {
              if (values.hasOwnProperty(key) && !_WFormField2.default.isSelectField(_fld)) {
                var _value = values[key];
                _fld.setValue(_value);
              } else if (attrValue) {
                _fld.setValue(attrValue);
              }
            }
          }
        }
      }
      /*
      else {
        console.error("SET_VALUES WITH NULL OBJECT...");
      }
      */
    }

    /*
    
    WFormState.js:187 FORM STATE SET SELECT2 AAA {"545":"Dinde"}setValues @ WFormState.js:187onEdit @ entry.js:184(anonymous function) @ entry.js:306onClick @ WFTableCell.js:145../node_modules/react-dom/lib/ReactErrorUtils.js.ReactErrorUtils.invokeGuardedCallback @ ReactErrorUtils.js:70executeDispatch @ EventPluginUtils.js:85executeDispatchesInOrder @ EventPluginUtils.js:108executeDispatchesAndRelease @ EventPluginHub.js:43executeDispatchesAndReleaseTopLevel @ EventPluginHub.js:54forEachAccumulated @ forEachAccumulated.js:24processEventQueue @ EventPluginHub.js:257runEventQueueInBatch @ ReactEventEmitterMixin.js:17handleTopLevel @ ReactEventEmitterMixin.js:28handleTopLevelImpl @ ReactEventListener.js:72perform @ Transaction.js:140batchedUpdates @ ReactDefaultBatchingStrategy.js:62batchedUpdates @ ReactUpdates.js:97dispatchEvent @ ReactEventListener.js:147
    WFormState.js:188 Object {arrayValue: Array[1], objectValue: Object, selectValue: Array[1], valueKey: "selectValue"}arrayValue: Array[1]0: Objectattributes: "{}"id: "545"is_private: "0"label: "Dinde"name: "dinde-545"options_count: "0"parent_id: "542"subgroups_count: "0"tree_id: "530"value: nullwf_optiongroup_id: "530"__proto__: Objectlength: 1__proto__: Array[0]objectValue: Object545: "Dinde"__proto__: ObjectselectValue: Array[1]0: "545"length: 1__proto__: Array[0]valueKey: "selectValue"__proto__: Object
    
    
    */

    /**
     * Clear fields values
     */

  }, {
    key: "clearValues",
    value: function clearValues() {
      for (var key in this.fields) {
        var fld = this.fields[key];
        if (fld) {
          fld.clearValue();
        }
      }
    }

    /**
     * Get the form type
     */

  }, {
    key: "getType",
    value: function getType() {
      return this.type.getValue();
    }

    /**
     * Set the form type
     * @param val the new value to set
     */

  }, {
    key: "setType",
    value: function setType(val) {
      this.type.setValue(val);
    }

    /**
     * Set the form name
     * @param val the new value to set
     */

  }, {
    key: "setName",
    value: function setName(val) {
      this.name.setValue(val);
    }

    /**
     * Get the form name
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name.getValue();
    }

    /**
     * Get the form create
     */

  }, {
    key: "getCreatedTms",
    value: function getCreatedTms() {
      return this.createdTms.getValue();
    }

    /**
     * Set the form submitHandler
     * @param val the new value to set
     */

  }, {
    key: "setSubmitHandler",
    value: function setSubmitHandler(val) {
      this.submitHandler.setValue(val);
    }

    /**
     * Get the form submitHandler
     */

  }, {
    key: "getSubmitHandler",
    value: function getSubmitHandler() {
      return this.submitHandler.getValue();
    }

    /**
     * Set entryId
     * @param val the new value to set
     */

  }, {
    key: "setEntryId",
    value: function setEntryId(val) {
      this.entryId.setValue(val);
    }

    /**
     * Get entryId
     */

  }, {
    key: "getEntryId",
    value: function getEntryId() {
      return this.entryId.getValue();
    }

    /**
     * Set formId
     * @param val the new value to set
     */

  }, {
    key: "setFormId",
    value: function setFormId(val) {
      this.formId.setValue(val);
    }

    /**
     * Get formId
     */

  }, {
    key: "getFormId",
    value: function getFormId() {
      return this.formId.getValue();
    }

    /**
     * Get published
     */

  }, {
    key: "getPublished",
    value: function getPublished() {
      return this.published.getValue();
    }

    /**
     * Set published
     * @param val the new value to set
     */

  }, {
    key: "setPublished",
    value: function setPublished(val) {
      this.published.setValue(_WFValue2.default.toBoolean(val));
    }

    /**
     * Set settings
     * @param val the new value to set
     */

  }, {
    key: "setSettings",
    value: function setSettings(val) {
      if ((0, _Lodash.isObject)(val)) {
        this.settings.setValue((0, _JSON.stringify)(val));
      }
    }

    /**
     * Get settings
     */

  }, {
    key: "getSettings",
    value: function getSettings() {
      var val = this.settings.getValue();
      if (val) {
        return (0, _JSON.parse)(val);
      } else {
        return {};
      }
    }

    /**
     * Set volatileId
     * @param val the new value to set
     */

  }, {
    key: "setVolatileId",
    value: function setVolatileId(val) {
      this.volatileId.setValue(val);
    }

    /**
     * Get volatileId
     */

  }, {
    key: "getVolatileId",
    value: function getVolatileId() {
      return this.volatileId.getValue();
    }

    /**
     * Get all fields mapped by name
     */

  }, {
    key: "getFields",
    value: function getFields() {
      return this.fields;
    }

    /**
     * Get all fieldConfig mapped by name
     * @return object
     */

  }, {
    key: "getFieldSchema",
    value: function getFieldSchema() {
      var schema = {};
      for (var fldName in this.fields) {
        var fld = this.getField(fldName);
        schema[fldName] = fld.getSchema();
      }
      return schema;
    }

    /**
     * Get display fields
     */

  }, {
    key: "getDisplayFields",
    value: function getDisplayFields() {
      if ((0, _Lodash.isArray)(this.displayFields)) {
        return this.displayFields;
      } else {
        return [];
      }
    }

    /**
     * Set display fields
     * @param displayFields the ordered list of fields to display in views
     */

  }, {
    key: "setDisplayFields",
    value: function setDisplayFields(displayFields) {
      if ((0, _Lodash.isArray)(displayFields)) {
        this.displayFields = displayFields;
      }
    }

    /**
     * Get actions
     */

  }, {
    key: "getActions",
    value: function getActions() {
      return this.actions;
    }

    /**
     * Set actions
     * @param actions
     */

  }, {
    key: "setActions",
    value: function setActions(actions) {
      if ((0, _Lodash.isArray)(actions)) {
        this.actions = actions;
      }
    }

    /**
     * Get categoryGroupId (readonly)
     */

  }, {
    key: "getCategoryGroupId",
    value: function getCategoryGroupId() {
      return this.categoryGroupId.getValue();
    }

    /**
     * Get OptionGroupId (readonly)
     */

  }, {
    key: "getOptionGroupId",
    value: function getOptionGroupId() {
      return this.optionGroupId.getValue();
    }

    /**
     * Get Tree Id
     */

  }, {
    key: "getTreeSchema",
    value: function getTreeSchema() {
      return {
        id: this.getOptionGroupId(),
        name: this.getName(),
        is_private: true
      };
    }

    /**
     * Get all Files
     * @return array
     */

  }, {
    key: "getFiles",
    value: function getFiles() {
      var files = {};

      for (var key in this.fields) {
        var fld = this.fields[key];
        if (fld.getFile()) {
          files[fld.getName()] = fld.getFile();
        }
      }

      return files;
    }

    /**
     * @return form state as a db row
     */

  }, {
    key: "getAsDbRow",
    value: function getAsDbRow() {
      return this.getValues();
      /*
      return Object.assign(this.getValues(),{
        display_fields : this.getDisplayFields()
      });
      */
    }

    /**
     * Get all fields manager mapped by name
     * ignore fields.attributes
     * @return object
     */

  }, {
    key: "getValuesMgr",
    value: function getValuesMgr() {
      var valuesMgr = {};
      for (var key in this.fields) {
        if (key !== ATTRIBUTES) {
          var fld = this.fields[key];
          valuesMgr[fld.getName()] = fld.getValueMgr();
        }
      }
      return valuesMgr;
    }

    /**
     * Create or update form field
     * config should contains a valid name, label, type and
     * len when creating new field
     * @param config the field schema
     * @return the created/updated field or null
     */

  }, {
    key: "createOrUpdateField",
    value: function createOrUpdateField(config) {
      var _config$name2 = config.name,
          name = _config$name2 === undefined ? "" : _config$name2,
          _config$label = config.label,
          label = _config$label === undefined ? "" : _config$label,
          _config$type2 = config.type,
          type = _config$type2 === undefined ? _WFDataTypes.WF_TYPE_STRING : _config$type2,
          _config$len = config.len,
          len = _config$len === undefined ? 64 : _config$len;

      var fld = null;
      if (name && typeof name === 'string') {
        fld = this.getField(name);
        if (!fld) {
          // field not exists
          if (typeof label === 'string' && type && typeof type === 'string') {
            fld = new _WFormField2.default(config);
            fld.setFormConfigId(this.getEntryId());
            this.fields[name] = fld;
          }
        } else {
          fld.setSchema(config);
          fld.setFormConfigId(this.getEntryId());
        }
      }
      return fld;
    }

    /**
     * Add fields
     * @param fields the array of fields to add
     * ex 
     * fields = [{
     * "name": "subject",
     * "type": "string",
     * "input_type": "",
     * "len": 32,
     * "label": "Name",
     * "required": true,
     * "searchable": true,
     * "create_column": true
     * },{
     *  "name": "message",
     *  "type": "text",
     *  "input_type": "",
     *  "len": 65555,
     *  "label": "Attributes",
     *  "required": false,
     *  "searchable": false,
     *  "create_column": true
     * }]
     * 
     */

  }, {
    key: "addFields",
    value: function addFields(fields) {
      if ((0, _Lodash.isArray)(fields)) {
        var l = fields.length;
        for (var i = 0; i < l; i++) {
          this.createOrUpdateField(fields[i]);
        }
      }
    }

    /**
     * Delete field
     * @param name the field name
     */

  }, {
    key: "deleteField",
    value: function deleteField(name) {
      var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var fld = this.getField(name);
      if (fld) {
        var fldName = fld.getName();
        delete this.fields[name];
        if ((0, _Lodash.isFunction)(callBack)) {
          callBack(fldName);
        }
      }
    }

    /**
     * Set field value by name
     * @param name the field name
     * @param val the value to set
     */

  }, {
    key: "setFieldValue",
    value: function setFieldValue(name, val) {
      var fld = this.getField(name);
      if (fld) {
        fld.setValue(val);
      }
    }

    /**
     * Get field by name
     * @param name the field name
     * @return WFormField if found else return null
     */

  }, {
    key: "getField",
    value: function getField(name) {
      var fld = null;

      if (this.fields.hasOwnProperty(name)) {
        fld = this.fields[name];
      }
      return fld;
    }

    /**
     * Get field 's value
     * @param name the field name
     * @return the field value found or defaultValue
     */

  }, {
    key: "getFieldValue",
    value: function getFieldValue(name) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var fld = this.getField(name);
      if (fld) {
        return fld.getValue();
      } else {
        return defaultValue;
      }
    }

    /**
     * Create a new form state for field config edition
     * @param name the field name
     * @return WFormState if field found else null
     */

  }, {
    key: "createFieldState",
    value: function createFieldState(name) {
      var formState = null;
      var fld = this.getField(name);

      if (fld) {
        formState = _WFieldConfigFactory2.default.create();
        formState.setValues(fld.getSchema());
      }

      return formState;
    }

    /**
     * Save or Update the form state in db
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "save",
    value: function save(urlArgs) {
      urlArgs['formName'] = this.getName();
      urlArgs['formType'] = this.getType();

      return _WFClient2.default.save(urlArgs, [this.getAsDbRow()], this.getFiles());
    }

    /**
     * Delete the form state from db
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "del",
    value: function del(urlArgs) {
      urlArgs['formName'] = this.getName();
      urlArgs['formType'] = this.getType();

      return _WFClient2.default.del(urlArgs, this.getEntryId());
    }

    /**
     * Get all searchable fields
     * @return collection 
     */

  }, {
    key: "getAllFieldSearchable",
    value: function getAllFieldSearchable() {
      var fields = [];
      for (var key in this.fields) {
        var fld = this.fields[key];
        if (fld.getSearchable()) {
          fields.push(fld.getSchema());
        }
      }
      return fields;
    }

    /**
     * Get all select fields
     * @return collection 
     */

  }, {
    key: "getAllFieldSelect",
    value: function getAllFieldSelect() {
      var fields = [];
      for (var key in this.fields) {
        var fld = this.fields[key];
        if (_WFormField2.default.isSelectField(fld)) {
          fields.push(fld.getSchema());
        }
      }
      return fields;
    }

    /**
     * Check this form has entry_id
     * @param return boolean
     */

  }, {
    key: "hasEntryId",
    value: function hasEntryId() {
      return this.getEntryId() !== "";
    }

    /**
     * Get attributes object value
     * @return object
     */

  }, {
    key: "getAttributes",
    value: function getAttributes() {
      var values = this.getValues();
      if (values.hasOwnProperty(ATTRIBUTES) && values[ATTRIBUTES]) {
        return (0, _JSON.parse)(values[ATTRIBUTES]);
      } else {
        return {};
      }
    }

    /**
     * Get all fields values without {_id, entry_id, form_name}
     * @return object values
     */

  }, {
    key: "getCleanValues",
    value: function getCleanValues() {
      var values = this.getValues();
      delete values._id;
      delete values.entry_id;
      delete values.form_name;
      delete values.form_id;
      return values;
    }

    /**
     * Caching license status in priv store
     * @param formState
     */

  }], [{
    key: "setLicenseStatus",
    value: function setLicenseStatus(formState) {
      var _formState$getSetting = formState.getSettings(),
          _formState$getSetting2 = _formState$getSetting.canCreateEntry,
          canCreateEntry = _formState$getSetting2 === undefined ? false : _formState$getSetting2;

      var id = formState.getFormId();
      if (id) {
        licenseStatus[id] = canCreateEntry;
      }
    }

    /**
     * Check license status
     * @param formState
     * @return boolean
     */

  }, {
    key: "hasLicense",
    value: function hasLicense(formState) {
      var id = formState.getFormId();
      if (id && licenseStatus.hasOwnProperty(id)) {
        return licenseStatus[id];
      } else {
        return false;
      }
    }
  }]);
  return WFormState;
}();

;

exports.default = WFormState;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//import moment from "moment";

if (moment.locales().length > 1 && __WF__.hasOwnProperty('MOMENT_LOCAL') && __WF__['MOMENT_LOCAL']) {
  moment.locale(__WF__['MOMENT_LOCAL']);
}

exports.default = moment;

/*
 * Get ISO weeks
 * @param year
 * @return iSOWeeks is integer
 */

var getISOWeeks = exports.getISOWeeks = function getISOWeeks(year) {
  var date = void 0,
      isLeap = void 0,
      iSOWeeks = void 0;
  date = new Date(year, 0, 1);
  isLeap = new Date(year, 1, 29).getMonth() === 1;
  if (date.getDay() === 4 || isLeap && date.getDay() === 3) {
    iSOWeeks = 53;
  } else {
    iSOWeeks = 52;
  }
  return iSOWeeks;
};

/*
 * Get ISO weeks rows
 * @param year
 * @return weeks is array
 */
var getISOWeekRows = exports.getISOWeekRows = function getISOWeekRows(year) {
  var weeks = [];
  var ISOWeeks = getISOWeeks(year);
  for (var i = 1; i <= ISOWeeks; i++) {
    weeks.push(i);
  }
  return weeks;
};

/*
 * Count how many week in month
 * @param momentObj
 * @return integer {4/5}
 */
var countWeeksInMonth = exports.countWeeksInMonth = function countWeeksInMonth(momentObj) {
  return moment.duration(moment(momentObj).endOf('month') - moment(momentObj).startOf('month')).weeks() + 1;
};

/*
 * Get weeks in month
 * @param month
 * @return weeks is array
 */
var getWeeksInMonth = exports.getWeeksInMonth = function getWeeksInMonth(month, year) {
  var m = moment(month + '/' + year, "M/YYYY");
  var c = countWeeksInMonth(m);
  var weeks = [];
  for (var i = 1; i <= c; i++) {
    weeks.push(i);
  }
  return weeks;
};

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = {
  input: "wf-input-",
  text: "wf-input-text",
  textarea: "wf-input-textarea",
  checkbox: "wf-input-checkbox",
  multiliner: "wf-multiliner",
  disabled: "wf-disabled",
  checked: "wf-checked",
  unchecked: "wf-unchecked",
  isValid: "wf--valid",
  hasError: "wf--error"
};

exports.default = classes;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// WF SETTING                                   // -------------------- //

var HEIGHT = exports.HEIGHT = "height";
var WIDTH = exports.WIDTH = "width";

// WF STATUS                                    // -------------------- //

var WF_STATUS = exports.WF_STATUS = "wf_status";
var WF_RESULTS = exports.WF_RESULTS = "wf_results";
var WF_CUSTOM_RESULTS = exports.WF_CUSTOM_RESULTS = "wf_custom_results";
var WF_STATUS_ERROR = exports.WF_STATUS_ERROR = 10;
var WF_STATUS_LOADING = exports.WF_STATUS_LOADING = 20;
var WF_STATUS_EDITING = exports.WF_STATUS_EDITING = 30;
var WF_STATUS_SUCCESS = exports.WF_STATUS_SUCCESS = 40;
var WF_STATUS_CUSTOM = exports.WF_STATUS_CUSTOM = 50;

// WF FIELD                                     // -------------------- //

var WF_FIELDS = exports.WF_FIELDS = "fields";
var WF_DISPLAY_FIELDS = exports.WF_DISPLAY_FIELDS = "display_fields";

// WF VALUES                                    // -------------------- //    

var WF_VALUES_CHANGE = exports.WF_VALUES_CHANGE = "wf_values_change";
var WF_FIELD_CONDITION = exports.WF_FIELD_CONDITION = "wf_field_condition";
var WF_FIELD_WILLREFRESH = exports.WF_FIELD_WILLREFRESH = "wf_field_willrefresh";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

var _WFValueTypes = __webpack_require__(11);

var _WFType2 = __webpack_require__(49);

var _WFType3 = _interopRequireDefault(_WFType2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIND_BY_INDEX = "index";

// ------------------- //

// CLASS ARRAY ------------------- // 

// ------------------- //

var WFArray = function (_WFType) {
  (0, _inherits3.default)(WFArray, _WFType);

  /**
   * Constructor
   * this.arrayValue is array contain children value
   * this.findBy is string for get obj by key
   * this.isCollection is boolean for active collection options
   * @param config
   */
  function WFArray() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFArray);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFArray.__proto__ || (0, _getPrototypeOf2.default)(WFArray)).call(this, _WFValueTypes.WF_ARRAY_VALUE));

    var _config$value = config.value,
        value = _config$value === undefined ? [] : _config$value,
        _config$findBy = config.findBy,
        findBy = _config$findBy === undefined ? FIND_BY_INDEX : _config$findBy,
        _config$isCollection = config.isCollection,
        isCollection = _config$isCollection === undefined ? false : _config$isCollection,
        _config$storedValueTy = config.storedValueType,
        storedValueType = _config$storedValueTy === undefined ? null : _config$storedValueTy;

    _this.arrayValue = [];
    _this.findBy = findBy;
    _this.isCollection = isCollection;
    _this.storedValueType = storedValueType;
    // Set value
    _this.set(value);
    return _this;
  }

  /**
   * Test if obj is instance Of this class
   * @param obj the object to test
   * @return boolean
   */


  (0, _createClass3.default)(WFArray, [{
    key: 'on',


    /**
     * Forward call
     * @param evenType string 
     * @param args object params
     */
    value: function on(evenType) {
      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return;
    }

    /**
     * Set arrayValue
     * @return array
     */

  }, {
    key: 'set',
    value: function set() {
      var arrValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if ((0, _Lodash.isArray)(arrValue)) {
        this.clear();
        this.insert(arrValue, next);
      }
    }
    /**
     * Alias of set
     */

  }, {
    key: 'setValue',
    value: function setValue() {
      var arrValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      this.set(arrValue);
    }

    /**
     * Get by index value
     * @param arg string || number
     * @param defaultValue 
     * @return value ?: defaultValue
     */

  }, {
    key: 'get',
    value: function get() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if ((0, _Lodash.isNull)(arg)) {
        return defaultValue;
      } else {
        if (this.isCollection && this.findBy === FIND_BY_INDEX || this.findBy === FIND_BY_INDEX) {
          return this.getByIndex(arg, defaultValue);
        } else {
          return this.getBy(this.findBy, arg, defaultValue);
        }
      }
    }

    /**
     * Get prev value 
     * @param current value 
     * @return prev value
     */

  }, {
    key: 'getPrev',
    value: function getPrev(arg) {
      var index = this.indexOf(arg);
      var prevIndex = this.prevIndex(index);
      return this.getByIndex(prevIndex);
    }

    /**
     * Get next value 
     * @param current value 
     * @return next value
     */

  }, {
    key: 'getNext',
    value: function getNext(arg) {
      var index = this.indexOf(arg);
      var nextIndex = this.nextIndex(index);
      return this.getByIndex(nextIndex);
    }

    /**
     * Find value by index
     * @param defaultValue 
     * @return value ?: defaultValue
     */

  }, {
    key: 'getByIndex',
    value: function getByIndex(index) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var i = parseInt(index);
      var value = this.arrayValue[i];
      if (value) {
        return value;
      } else {
        return defaultValue;
      }
    }

    /**
     * Find object value by key value
     * @param key string
     * @param val value
     * @param defaultValue 
     * @return value ?: defaultValue
     */

  }, {
    key: 'getBy',
    value: function getBy(key, val) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var value = this.filter(function (obj) {
        return obj[key] === val;
      });
      if (value.length > 0) {
        return value[0];
      } else {
        return defaultValue;
      }
    }

    /**
     * Get this.arrayValue
     * is Collection return Obj with our index
     * @return array
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.arrayValue;
    }

    /**
     * Get first value
     * @return value ?: null
     */

  }, {
    key: 'getFirst',
    value: function getFirst() {
      if (this.isEmpty()) {
        return null;
      } else {
        return this.arrayValue[0];
      }
    }

    /**
     * Get last value
     * @return value ?: null
     */

  }, {
    key: 'getLast',
    value: function getLast() {
      if (this.isEmpty()) {
        return null;
      } else {
        var index = this.getLastIndex();
        return this.get(index);
      }
    }

    /**
     * Add value in data and apply callback
     * @param values array value or value
     * @param next callback 
     */

  }, {
    key: 'insert',
    value: function insert(values) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if ((0, _Lodash.isArray)(values)) {
        for (var i = 0, l = values.length; i < l; i++) {
          this.arrayValue.push(values[i]);
          if (i === l - 1) {
            if ((0, _Lodash.isFunction)(next)) {
              next();
            }
          }
        }
      } else {
        if (!this.isCollection) {
          this.arrayValue.push(values);
          if ((0, _Lodash.isFunction)(next)) {
            next();
          }
        } else {
          if (this.has(values[this.findBy])) {
            var key = this.findBy;
            var value = values[this.findBy];
            var index = this.findIndex(value, key);
            this.update(index, values, next);
          } else {
            this.arrayValue.push(values);
            if ((0, _Lodash.isFunction)(next)) {
              next();
            }
          }
        }
      }
    }

    /**
     * Add value in data first position and apply callback
     * @param values array value or value
     * @param next callback 
     */

  }, {
    key: 'insertFirst',
    value: function insertFirst(values) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if ((0, _Lodash.isArray)(values)) {
        for (var i = 0, l = values.length; i < l; i++) {
          this.arrayValue.unshift(values[i]);
          if (i === l - 1) {
            if ((0, _Lodash.isFunction)(next)) {
              next();
            }
          }
        }
      } else {
        this.arrayValue.unshift(values);
        if ((0, _Lodash.isFunction)(next)) {
          next();
        }
      }
    }

    /**
     * Add value at index in data
     * @param index
     * @param value
     */

  }, {
    key: 'insertAt',
    value: function insertAt(index, value) {
      if ((0, _Lodash.isNumber)(index)) {
        this.arrayValue.splice(index, 0, value);
      }
    }

    /**
     * Mouve value at index in data
     * @param from integer
     * @param to integer
     */

  }, {
    key: 'fromTo',
    value: function fromTo(from, to) {}

    /**
     * Update value by index
     * @param index integer
     * @param value next state value 
     */

  }, {
    key: 'update',
    value: function update(index, value) {
      var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if ((0, _Lodash.isNumber)(index)) {
        this.arrayValue[index] = value;
        if ((0, _Lodash.isFunction)(next)) {
          next();
        }
      }
    }

    /**
     * Delete value by index
     * @param values array of values || single value
     * @param next callback 
     */

  }, {
    key: 'delete',
    value: function _delete(values) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if ((0, _Lodash.isArray)(values)) {
        for (var i = 0, l = values.length; i < l; i++) {
          if (this.isCollection && this.findBy === FIND_BY_INDEX || this.findBy === FIND_BY_INDEX) {
            var index = this.indexOf(values[i]);
            this.deleteByIndex(index);
          } else {
            this.deleteBy(this.findBy, values);
          }
          if (i === l - 1) {
            if ((0, _Lodash.isFunction)(next)) {
              next();
            }
          }
        }
      } else {
        if (this.isCollection && this.findBy === FIND_BY_INDEX || this.findBy === FIND_BY_INDEX) {
          var _index = this.indexOf(values);
          this.deleteByIndex(_index);
        } else {
          this.deleteBy(this.findBy, values);
        }
        if ((0, _Lodash.isFunction)(next)) {
          next();
        }
      }
    }

    /**
     * Delete value by index
     * @param index
     */

  }, {
    key: 'deleteByIndex',
    value: function deleteByIndex(index) {
      if (index < 0) {
        return false;
      } else {
        this.arrayValue.splice(index, 1);
      }
    }

    /**
     * Delete object value by key value
     * @param key string
     * @param val value {string,number,boolean}
     */

  }, {
    key: 'deleteBy',
    value: function deleteBy(key, val) {
      if (key && val) {
        var index = this.findIndex(key, val);
        var nextArrayValue = this.filter(function (obj) {
          return obj[key] !== val;
        });
        this.set(nextArrayValue);
      } else {
        return false;
      }
    }

    /**
     * Delete target and after by index
     * @param args.index 
     * @param args.next callback
     */

  }, {
    key: 'deleteIndexAndAfter',
    value: function deleteIndexAndAfter(_ref) {
      var index = _ref.index,
          next = _ref.next;

      if (index < 0) {
        // console.error("Index Error :", index)
        return false;
      }
      if (index === 0) {
        this.set([]);
      } else {
        var prevArray = this.getValue();
        this.arrayValue = prevArray.filter(function (el, i) {
          return i < index;
        });
      }
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    /**
     * Delete target and before by index
     * @param args.index 
     * @param args.next callback
     */

  }, {
    key: 'deleteIndexAndBefore',
    value: function deleteIndexAndBefore(_ref2) {
      var index = _ref2.index,
          next = _ref2.next;

      if (index < 0) {
        // console.error("Index Error :", index)
        return false;
      }
      if (index === 0) {
        this.set([]);
      } else {
        var prevArray = this.getValue();
        this.arrayValue = prevArray.filter(function (el, i) {
          return i > index;
        });
      }
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    /**
     * Filter data 
     * @param fn ex : filter((value,index) => i!==index)
     * @return array data filtered
     */

  }, {
    key: 'filter',
    value: function filter(fn) {
      if (this.isEmpty()) {
        return [];
      } else {
        return this.arrayValue.filter(fn);
      }
    }

    /**
     * Map data'object 
     * @param fn ex : map((value,index) => { return {...}})
     * @return array with object mapped
     */

  }, {
    key: 'map',
    value: function map(fn) {
      if (this.isEmpty()) {
        return [];
      } else {
        return this.arrayValue.map(fn);
      }
    }

    /**
     * Get and delete first value
     * @return value
     */

  }, {
    key: 'shift',
    value: function shift() {
      if (!this.isEmpty()) {
        return this.arrayValue.shift();
      } else {
        return null;
      }
    }

    /**
     * Get and delete last value
     * @return value
     */

  }, {
    key: 'pop',
    value: function pop() {
      if (!this.isEmpty()) {
        return this.arrayValue.pop();
      } else {
        return null;
      }
    }

    /**
     * Get and delete last value
     * @return value
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return (0, _JSON.stringify)(this.getValue());
    }

    /**
     * Get and delete last value
     * @return value
     */

  }, {
    key: 'toString',
    value: function toString() {
      if (this.isEmpty()) {
        return this.string = "";
      } else {
        var data = this.getValue();
        return data.join("; ");
      }
    }

    /**
     * Concat number value
     * @return number
     */

  }, {
    key: 'sum',
    value: function sum() {
      return (0, _Lodash.sum)(this.filter(function (n) {
        return (0, _Lodash.isNumber)(n);
      }));
    }

    /**
     * Count value in data
     * @return integer;
     */

  }, {
    key: 'getCounter',
    value: function getCounter() {
      return this.arrayValue.length;
    }

    /**
     * Empty Array
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.arrayValue = [];
      if (this.input) {
        this.input.setState((0, _defineProperty3.default)({}, this.getKey(), []));
      }
    }

    /**
     * Check if value exist by index
     * @return value ?: defaultValue
     */

  }, {
    key: 'has',
    value: function has(arg) {
      var _this2 = this;

      if (!this.isCollection) {
        return this.indexOf(arg) !== -1;
      } else {
        var test = this.filter(function (obj) {
          return obj[_this2.findBy] === arg;
        });
        return test.length > 0;
      }
    }

    /**
     * Check if data is empty
     * @return boolean
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.getCounter() === 0;
    }

    /**
     * Get index of value
     * @return integer ?: negative
     */

  }, {
    key: 'indexOf',
    value: function indexOf(val) {
      return this.arrayValue.indexOf(val);
    }

    /**
     * Find prev index by current index
     * @param current number 
     * @return number
     */

  }, {
    key: 'prevIndex',
    value: function prevIndex(current) {
      var total = this.getCounter();
      return current === 0 && total === 1 ? 0 : current === 0 ? --total : --current % total;
    }

    /**
     * Find next index by current index
     * @param current number 
     * @return number
     */

  }, {
    key: 'nextIndex',
    value: function nextIndex(current) {
      var total = this.getCounter();
      return ++current % total;
    }

    /**
     * Find index of value by key => val
     * param val object val
     * param key object key
     * @return integer ?: negative
     */

  }, {
    key: 'findIndex',
    value: function findIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "_id";

      return (0, _Lodash.findIndex)(this.arrayValue, [key, val]);
    }

    /**
     * Get last index value
     * @return integer
     */

  }, {
    key: 'getLastIndex',
    value: function getLastIndex() {
      return this.getCounter() - 1;
    }

    /**
     * Show current value to string
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.arrayValue.toString();
    }

    /**
     * Show current value in console
     */

  }, {
    key: 'toConsole',
    value: function toConsole() {
      console.log("");
      console.warn('WFArray');
      console.log('counter =>', this.getCounter());
      console.log('value =>', (0, _JSON.stringify)(this.getValue()));
      console.dir('WFArray', this.getValue());
      console.log("");
    }
  }], [{
    key: 'instanceOf',
    value: function instanceOf(obj) {
      return obj instanceof WFArray;
    }
  }]);
  return WFArray;
}(_WFType3.default);
// ------------------- //


exports.default = WFArray;
// ------------------- //

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VALUE_KEY = "valueKey";
var ATTRIBUTES = "attributes";

var WFValue = function () {
  function WFValue() {
    (0, _classCallCheck3.default)(this, WFValue);
  }

  (0, _createClass3.default)(WFValue, null, [{
    key: "toBoolean",

    /*
     * Format extern boolean to js boolean
     * @param val 
     * @return boolean
     */
    value: function toBoolean(val) {
      if (!val || val == '0' || val == 'false' || val == false || val == 0) {
        return false;
      } else {
        return true;
      }
    }

    /*
     * Find attributes and extract clean values
     * @param values is object contains json attributes 
     * @return object attributes 
     */

  }, {
    key: "getValues",
    value: function getValues(values) {
      var attributes = WFValue.getAttributesValues(values);
      return (0, _assign2.default)(values, attributes);
    }

    /*
     * Get value in object values 
     * @param value 
     * @return value[key] if key exist
     */

  }, {
    key: "get",
    value: function get(value) {
      if ((0, _Lodash.isObject)(value) && value.hasOwnProperty(VALUE_KEY)) {
        var key = value[VALUE_KEY];
        return value[key];
      } else {
        return value;
      }
    }

    /*
     * Find in values object the data attributes
     * @param values is object contains json attributes 
     * @return object attributes 
     */

  }, {
    key: "getAttributes",
    value: function getAttributes(values) {
      if ((0, _Lodash.isObject)(values) && values.hasOwnProperty(ATTRIBUTES)) {
        var attributes = values[ATTRIBUTES];
        return (0, _JSON.parse)(attributes, {});
      } else {
        return {};
      }
    }

    /*
     * Find attributes and extract clean values
     * @param values is object contains json attributes 
     * @return object attributes 
     */

  }, {
    key: "getAttributesValues",
    value: function getAttributesValues(values) {
      var attributes = {};
      var attrs = WFValue.getAttributes(values);
      for (var key in attrs) {
        attributes[key] = WFValue.get(attrs[key]);
      }
      return attributes;
    }
  }]);
  return WFValue;
}();

exports.default = WFValue;

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SECTION ------------------- //

// ------------------- //

var classes = {
    wrapper: "row"
};

// ------------------- //

var WFRow = function (_Component) {
    (0, _inherits3.default)(WFRow, _Component);

    function WFRow() {
        (0, _classCallCheck3.default)(this, WFRow);
        return (0, _possibleConstructorReturn3.default)(this, (WFRow.__proto__ || (0, _getPrototypeOf2.default)(WFRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFRow, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$onClick = _props.onClick,
                _onClick = _props$onClick === undefined ? null : _props$onClick,
                _props$className = _props.className,
                className = _props$className === undefined ? "" : _props$className,
                children = _props.children,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style;

            return _react2.default.createElement(
                "div",
                {
                    style: style,
                    onClick: function onClick() {
                        return (0, _Lodash.isFunction)(_onClick) ? _onClick() : "";
                    },
                    className: classes.wrapper + " " + className
                },
                children
            );
        }
    }]);
    return WFRow;
}(_react.Component);
// ------------------- //

exports.default = WFRow;

// ------------------- //

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactCustomScrollbars = __webpack_require__(361);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SCROLLBAR ------------------- //

// ------------------- //

var classes = {
    wrapper: "wf-scrollbar"
};

// ------------------- //

var WFScrollBars = function (_Component) {
    (0, _inherits3.default)(WFScrollBars, _Component);

    function WFScrollBars() {
        (0, _classCallCheck3.default)(this, WFScrollBars);
        return (0, _possibleConstructorReturn3.default)(this, (WFScrollBars.__proto__ || (0, _getPrototypeOf2.default)(WFScrollBars)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFScrollBars, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactCustomScrollbars.Scrollbars, (0, _extends3.default)({
                className: classes.wrapper,
                onScroll: this.handleScroll,
                onScrollFrame: this.handleScrollFrame,
                onScrollStart: this.handleScrollStart,
                onScrollStop: this.handleScrollStop,
                onUpdate: this.handleUpdate,
                renderView: this.renderView,
                renderTrackHorizontal: this.renderTrackHorizontal,
                renderTrackVertical: this.renderTrackVertical,
                renderThumbHorizontal: this.renderThumbHorizontal,
                renderThumbVertical: this.renderThumbVertical,
                autoHide: true,
                autoHideTimeout: 1000,
                autoHideDuration: 200,
                thumbMinSize: 30,
                universal: true
            }, this.props));
        }
    }]);
    return WFScrollBars;
}(_react.Component);

// ------------------- //

exports.default = WFScrollBars;

// ------------------- //

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ressources = __webpack_require__(239);

var _ressources2 = _interopRequireDefault(_ressources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFieldHelper = function () {
  function WFieldHelper() {
    (0, _classCallCheck3.default)(this, WFieldHelper);
  }

  (0, _createClass3.default)(WFieldHelper, null, [{
    key: "setSample",
    value: function setSample(input, name) {
      var _input$props = input.props,
          _input$props$data = _input$props.data,
          data = _input$props$data === undefined ? [] : _input$props$data,
          _input$props$isBaobab = _input$props.isBaobab,
          isBaobab = _input$props$isBaobab === undefined ? false : _input$props$isBaobab;

      if (!isBaobab && data.length === 0) {
        _ressources2.default.getFields().then(function (module) {
          input.setState({
            sampleData: module.fields[name]
          });
        }).catch(function (err) {
          console.error(err.message);
        });
      }
    }
  }]);
  return WFieldHelper;
}();

exports.default = WFieldHelper;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFRequestParams = __webpack_require__(87);

var _WFQueryParams = __webpack_require__(116);

var _WFQueryParams2 = _interopRequireDefault(_WFQueryParams);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- // 

// CLASS WF URL ------------------- //

// ------------------- // 
var WFUrl = function () {
  function WFUrl() {
    (0, _classCallCheck3.default)(this, WFUrl);
  }

  (0, _createClass3.default)(WFUrl, null, [{
    key: "getHost",

    /**
     * Get Host
     */
    value: function getHost() {
      return window.location.host;
    }

    /**
     * Get Host name
     */

  }, {
    key: "getHostName",
    value: function getHostName() {
      return window.location.hostname;
    }

    /**
     * Check is local host
     */

  }, {
    key: "isLocalHost",
    value: function isLocalHost() {
      var test = WFUrl.getHostName();
      return test === "localhost" || test === "127.0.0.1" || test === "";
    }

    /**
     * Get WornderForm.net 
     * ex : getWFDomain("join")
     */

  }, {
    key: "getWFDomain",
    value: function getWFDomain() {
      var $path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      return _WFRequestParams.WF_DOMAIN_URL + "/" + $path;
    }

    /**
     * Get Base url
     */

  }, {
    key: "getBaseUrl",
    value: function getBaseUrl() {
      if (typeof __WF__ === 'undefined') {
        return '';
      } else {
        return (__WF__ && __WF__.hasOwnProperty("BASE_URL") ? __WF__.BASE_URL : window.location.origin) + "/index.php";
      }
    }

    /**
     * Get Player url
     */

  }, {
    key: "getPlayerUrl",
    value: function getPlayerUrl() {
      if (typeof __WF__ === 'undefined') {
        return '';
      } else {
        return "" + (__WF__ && __WF__.hasOwnProperty("PLAYER") ? __WF__.PLAYER : '');
      }
    }

    /**
     * Get Module Path
     * @param isAppAdmin boolean
     * @param formType
     */

  }, {
    key: "getModule",
    value: function getModule() {
      var isAppAdmin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var formType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      switch (formType) {
        case _WFProductType.WF_SESSION_LOGIN_ID:
        case _WFProductType.WF_SIGNUP_PROFILE_ID:
          return _WFRequestParams.WF_CUSTOM_MODULE_NAME;

        default:
          if (isAppAdmin) {
            return _WFRequestParams.WF_ADMIN_MODULE_NAME;
          } else {
            return _WFRequestParams.WF_CUSTOM_MODULE_NAME;
          }
      }
    }

    /**
     * Build request url
     * @param args is object config
     * return string
     */

  }, {
    key: "buildUrl",
    value: function buildUrl(args) {
      var _args$apiBaseUrl = args.apiBaseUrl,
          apiBaseUrl = _args$apiBaseUrl === undefined ? WFUrl.getBaseUrl() : _args$apiBaseUrl,
          _args$prefix = args.prefix,
          prefix = _args$prefix === undefined ? _WFRequestParams.WF_PREFIX : _args$prefix,
          _args$module = args.module,
          module = _args$module === undefined ? _WFRequestParams.WF_CUSTOM_MODULE_NAME : _args$module,
          _args$query = args.query,
          query = _args$query === undefined ? '' : _args$query,
          _args$uri = args.uri,
          uri = _args$uri === undefined ? '' : _args$uri;


      return apiBaseUrl + "/" + prefix + "/" + module + uri + query;
    }

    /**
     * Create new query params
     * return instance
     */

  }, {
    key: "createQuery",
    value: function createQuery() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new _WFQueryParams2.default(args);
    }

    /**
     * Redirect to new url
     * @param url
     */

  }, {
    key: "redirect",
    value: function redirect(url) {
      if (url) {
        var ua = navigator.userAgent.toLowerCase();
        var isIE = ua.indexOf('msie') !== -1;
        var version = parseInt(ua.substr(4, 2), 10);
        // Internet Explorer 8 and lower
        if (isIE && version < 9) {
          var link = document.createElement('a');
          link.href = url;
          document.body.appendChild(link);
          link.click();
        }
        // All other browsers can use the standard window.location.href 
        // (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
        else {
            window.location.replace(url);
          }
      }
    }

    /**
     * Download file use iframe method 
     * @param url
     */

  }, {
    key: "download",
    value: function download(fileURL) {
      if (fileURL) {
        var ua = navigator.userAgent.toLowerCase();
        var isIE = ua.indexOf('msie') !== -1;
        var version = parseInt(ua.substr(4, 2), 10);
        // Internet Explorer 8 and lower
        if (isIE && version < 9) {
          var link = document.createElement('a');
          link.href = fileURL;
          document.body.appendChild(link);
          link.click();
        }
        // All other browsers can use the standard window.location.href 
        // (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
        else {
            window.open(fileURL, '_blank');
          }
      }
    }

    /**
     * Redirect to licenses page
     */

  }, {
    key: "purchase",
    value: function purchase() {
      WFUrl.download(WFUrl.getWFDomain("join"));
    }
  }]);
  return WFUrl;
}();

// ------------------- //


exports.default = WFUrl;
// ------------------- //

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SECTION ------------------- //

// ------------------- //

var classes = {

    xs: "col-xs-",
    sm: " col-sm-",
    md: " col-md-",
    lg: " col-lg-",

    hidden: " hidden-",
    visible: " visible-",

    dev: " dv",

    reset: " reset",
    reset_left: " reset-left",
    reset_right: " reset-right"
};

// ------------------- //

var WFCol = function (_Component) {
    (0, _inherits3.default)(WFCol, _Component);

    function WFCol() {
        (0, _classCallCheck3.default)(this, WFCol);
        return (0, _possibleConstructorReturn3.default)(this, (WFCol.__proto__ || (0, _getPrototypeOf2.default)(WFCol)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFCol, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible,
                _props$xs = _props.xs,
                xs = _props$xs === undefined ? 12 : _props$xs,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style;

            if (!visible || xs === 0) {
                return false;
            } else {
                return _react2.default.createElement(
                    "div",
                    { style: style, className: "" + this.getClasses() },
                    this.getChildren()
                );
            }
        }

        // ------------------- //

    }, {
        key: "getChildren",
        value: function getChildren() {
            var _props2 = this.props,
                _props2$dev = _props2.dev,
                dev = _props2$dev === undefined ? false : _props2$dev,
                _props2$children = _props2.children,
                children = _props2$children === undefined ? "" : _props2$children;

            return dev ? _react2.default.createElement(
                "div",
                { className: classes.dev },
                children
            ) : children;
            ;
        }

        // ------------------- //

    }, {
        key: "getClasses",
        value: function getClasses() {
            var _props3 = this.props,
                _props3$xs = _props3.xs,
                xs = _props3$xs === undefined ? 12 : _props3$xs,
                _props3$sm = _props3.sm,
                sm = _props3$sm === undefined ? null : _props3$sm,
                _props3$md = _props3.md,
                md = _props3$md === undefined ? null : _props3$md,
                _props3$lg = _props3.lg,
                lg = _props3$lg === undefined ? null : _props3$lg,
                _props3$hidden = _props3.hidden,
                hidden = _props3$hidden === undefined ? [] : _props3$hidden,
                _props3$visible = _props3.visible,
                visible = _props3$visible === undefined ? [] : _props3$visible,
                _props3$className = _props3.className,
                className = _props3$className === undefined ? "" : _props3$className,
                _props3$reset = _props3.reset,
                reset = _props3$reset === undefined ? false : _props3$reset,
                _props3$resetLeft = _props3.resetLeft,
                resetLeft = _props3$resetLeft === undefined ? false : _props3$resetLeft,
                _props3$resetRight = _props3.resetRight,
                resetRight = _props3$resetRight === undefined ? false : _props3$resetRight;


            var clss = classes.xs + xs;
            clss += sm ? classes.sm + sm : "";
            clss += md ? classes.md + md : "";
            clss += lg ? classes.lg + lg : "";
            clss += reset ? classes.reset : "";
            clss += resetLeft ? classes.reset_left : "";
            clss += resetRight ? classes.reset_right : "";
            clss += hidden.length > 0 ? hidden.map(function (s) {
                return classes[s] + s;
            }) : "";
            clss += visible.length > 0 ? visible.map(function (s) {
                return classes[s] + s;
            }) : "";
            clss += className ? " " + className : "";

            return clss;
        }
    }]);
    return WFCol;
}(_react.Component);

// ------------------- //

exports.default = WFCol;

// ------------------- //

/*

	<WFCol xs={12} sm={12} md={6} lg={6}></WFCol>
	<WFCol visible={['md','sm']}></WFCol>
	<WFCol hidden={['xs','lg']}></WFCol>
*/

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _WFConsole = __webpack_require__(61);

var _WFConsole2 = _interopRequireDefault(_WFConsole);

var _WFieldHelper = __webpack_require__(40);

var _WFieldHelper2 = _interopRequireDefault(_WFieldHelper);

var _Lodash = __webpack_require__(6);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFSearchInput = __webpack_require__(197);

var _WFSearchInput2 = _interopRequireDefault(_WFSearchInput);

var _WFButtonToggle = __webpack_require__(196);

var _WFButtonToggle2 = _interopRequireDefault(_WFButtonToggle);

var _WFArchiveOption = __webpack_require__(194);

var _WFArchiveOption2 = _interopRequireDefault(_WFArchiveOption);

var _WFArchiveSelection = __webpack_require__(195);

var _WFArchiveSelection2 = _interopRequireDefault(_WFArchiveSelection);

var _WFCss = __webpack_require__(57);

var _WFCss2 = _interopRequireDefault(_WFCss);

var _WFEventTypes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SELECT 2 ------------------- //  searchValue
// ------------------- //

var WFSelect2 = function (_Component) {
  (0, _inherits3.default)(WFSelect2, _Component);

  function WFSelect2(props) {
    (0, _classCallCheck3.default)(this, WFSelect2);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFSelect2.__proto__ || (0, _getPrototypeOf2.default)(WFSelect2)).call(this, props));

    _this.focusObserver = function (evt) {
      var isOpen = _this.props.isOpen;

      if (isOpen) {
        var ref = _this.wrapper.refs[_this.name];
        var area = _reactDom2.default.findDOMNode(ref);
        if (_this.elemIsClicked) {
          _this.elemIsClicked = false;
          return;
        }
        if (area && !area.contains(evt.target)) {
          _this.onClose();
        }
      }
    };

    var name = props.name;

    _this.name = name || 'Select2';
    _this.wrapper = null;
    _this.state = {
      isInit: false,
      sampleData: []
    };

    _this.elemIsClicked = false;
    return _this;
  }

  // ACTION ------------------- //
  /*
    onSelect(id) {
      this.props.on(WF_EVENT_ONSELECT, id)
    }
  */


  (0, _createClass3.default)(WFSelect2, [{
    key: 'onToggle',
    value: function onToggle() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "up";

      if (!this.props.disabled) {
        this.props.on(_WFEventTypes.WF_EVENT_ONTOGGLE, focus);
      }
    }
  }, {
    key: 'onOpen',
    value: function onOpen() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (!this.props.disabled) {
        this.props.on(_WFEventTypes.WF_EVENT_ONOPEN, focus);
      }
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      if (!this.props.disabled) {
        this.props.on(_WFEventTypes.WF_EVENT_ONCLOSE);
      }
    }
  }, {
    key: 'onFind',
    value: function onFind() {
      if (!this.props.disabled) {
        this.props.on(_WFEventTypes.WF_EVENT_ONFIND);
      }
    }
  }, {
    key: 'onSearch',
    value: function onSearch(val) {
      if (!this.props.disabled) {
        this.props.on(_WFEventTypes.WF_EVENT_ONSEARCH, val);
      }
    }
  }, {
    key: 'render',


    // RENDER ------------------- //

    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          isOpen = _props.isOpen,
          valueBy = _props.valueBy,
          labelBy = _props.labelBy,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data;

      var btnOpen = isOpen;
      if (disabled) {
        btnOpen = true;
      }
      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        refId: this.name
        /*
        willMount={() => {
          WFSelect2.setIntialValue(this.props)
        }}
        */
        , didMount: function didMount() {
          _WFieldHelper2.default.setSample(_this2, "select2");
          window.addEventListener('click', _this2.focusObserver);
        },
        willUnmount: function willUnmount() {
          window.removeEventListener('click', _this2.focusObserver);
        },
        view: function view(wrapper) {
          _this2.wrapper = wrapper;
          var counter = data.length;
          return _react2.default.createElement(
            'wf-select2',
            null,
            _react2.default.createElement(
              'div',
              { className: _this2.getWrapperClass() },
              _react2.default.createElement(
                'div',
                { className: '' + _WFCss2.default.wrapper.top },
                _this2.getContentTop(),
                _react2.default.createElement(_WFButtonToggle2.default, {
                  checked: btnOpen,
                  onClick: function onClick() {
                    _this2.elemIsClicked = true;
                    _this2.onToggle();
                  }
                })
              ),
              _this2.getContentBottom()
            )
          );
        }
      }));
    }

    // TOP CONTENT ------------------- //

  }, {
    key: 'getContentTop',
    value: function getContentTop() {
      var _this3 = this;

      var _props2 = this.props,
          isUnfold = _props2.isUnfold,
          canSearch = _props2.canSearch,
          _props2$arrayValue = _props2.arrayValue,
          arrayValue = _props2$arrayValue === undefined ? [] : _props2$arrayValue,
          _props2$disabled = _props2.disabled,
          disabled = _props2$disabled === undefined ? false : _props2$disabled;

      if (this.isFocused()) {
        return this.getSearchInput("up");
      } else {
        if (!canSearch || isUnfold || arrayValue.length > 0 || this.isOpen()) {
          return _react2.default.createElement(_WFArchiveSelection2.default, {
            data: arrayValue,
            onRemove: function onRemove(id) {
              return WFSelect2.onSelect(_this3, id);
            },
            onToggle: function onToggle() {
              _this3.elemIsClicked = true;
              _this3.onToggle("");
            }
          });
        } else {
          return this.getSearchInput("up");
        }
      }
    }

    // BOTTOM CONTENT ------------------- //

  }, {
    key: 'getContentBottom',
    value: function getContentBottom() {
      var _this4 = this;

      var _props3 = this.props,
          isMax = _props3.isMax,
          isLoading = _props3.isLoading,
          canSearch = _props3.canSearch,
          isMultiple = _props3.isMultiple,
          _props3$searchValue = _props3.searchValue,
          searchValue = _props3$searchValue === undefined ? "" : _props3$searchValue;

      var isOpen = this.isOpen();
      var style = {
        opacity: 0,
        visibility: "hidden"
      };
      if (isOpen) {
        style = {
          opacity: 1,
          visibility: "visible"
        };
      }
      return _react2.default.createElement(
        'div',
        {
          style: style,
          className: '' + _WFCss2.default.wrapper.down },
        !this.isFocused() && canSearch ? this.getSearchInput() : "",
        _react2.default.createElement(_WFArchiveOption2.default, {
          data: WFSelect2.getOptions(this),
          isMax: isMax,
          isLoading: isLoading,
          isMultiple: isMultiple,
          isSelected: function isSelected(id) {
            return WFSelect2.has(_this4, id);
          },
          searchValue: searchValue,
          onSelect: function onSelect(id) {
            WFSelect2.onSelect(_this4, id);
            if (!isMultiple) {
              _this4.onClose();
            }
          }
        })
      );
    }

    // SEARCH INPUT ------------------- //

  }, {
    key: 'getSearchInput',
    value: function getSearchInput() {
      var _this5 = this;

      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var _props4 = this.props,
          disabled = _props4.disabled,
          _props4$placeholder = _props4.placeholder,
          placeholder = _props4$placeholder === undefined ? "Search..." : _props4$placeholder,
          searchValue = _props4.searchValue,
          isLoading = _props4.isLoading;
      /*
      if (disabled) {
        return false;
      } else {
        */

      return _react2.default.createElement(_WFSearchInput2.default, {
        readOnly: !disabled
        //disabled={disabled}
        , value: searchValue,
        isLoading: isLoading,
        placeholder: placeholder,
        onChange: function onChange(e) {
          return _this5.onSearch(e.target.value);
        },
        onFocus: function onFocus() {
          _this5.onOpen(focus);
          _this5.onFind();
        }
      });
      // }
    }

    // CONDITION ------------------- //

  }, {
    key: 'isFocused',
    value: function isFocused() {
      var _props$focus = this.props.focus,
          focus = _props$focus === undefined ? "" : _props$focus;

      return focus === "up";
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      var _props5 = this.props,
          isOpen = _props5.isOpen,
          isUnfold = _props5.isUnfold;

      if (isUnfold) {
        return true;
      } else {
        return isOpen;
      }
    }

    // UTILS ------------------- //

  }, {
    key: 'getWrapperClass',


    // ------------------- //

    //static setIntialValue (props) {} 
    value: function getWrapperClass() {
      var _props6 = this.props,
          isOpen = _props6.isOpen,
          disabled = _props6.disabled,
          isUnfold = _props6.isUnfold;

      var clss = "";
      if (disabled) {
        clss += '' + _WFCss2.default.disabled;
      } else {
        clss += '' + (isUnfold ? _WFCss2.default.state.unfold : "");
        clss += ' ' + (isOpen ? _WFCss2.default.state.open : _WFCss2.default.state.close);
      }
      return clss;
    }

    // FOCUS SUPPORT ------------------- //

  }], [{
    key: 'onSelect',
    value: function onSelect(select, id) {
      select.props.on(_WFEventTypes.WF_EVENT_ONSELECT, id);
    }
  }, {
    key: 'has',
    value: function has(select, id) {
      var _select$props = select.props,
          _select$props$valueBy = _select$props.valueBy,
          valueBy = _select$props$valueBy === undefined ? "id" : _select$props$valueBy,
          _select$props$arrayVa = _select$props.arrayValue,
          arrayValue = _select$props$arrayVa === undefined ? [] : _select$props$arrayVa;

      if ((0, _Lodash.isArray)(arrayValue)) {
        var selectValue = arrayValue.map(function (o) {
          return o[valueBy];
        });
        return selectValue.includes(id);
      } else {
        return false;
      }
    }
  }, {
    key: 'getOptions',
    value: function getOptions(select) {
      var _select$state$sampleD = select.state.sampleData,
          sampleData = _select$state$sampleD === undefined ? [] : _select$state$sampleD;
      var _select$props2 = select.props,
          _select$props2$data = _select$props2.data,
          data = _select$props2$data === undefined ? [] : _select$props2$data,
          _select$props2$result = _select$props2.resultData,
          resultData = _select$props2$result === undefined ? [] : _select$props2$result,
          _select$props2$search = _select$props2.searchValue,
          searchValue = _select$props2$search === undefined ? "" : _select$props2$search,
          _select$props2$isBaob = _select$props2.isBaobab,
          isBaobab = _select$props2$isBaob === undefined ? false : _select$props2$isBaob;

      var countData = data.length;
      var countResultData = resultData.length;
      if (isBaobab && searchValue.length === 1) {
        if (countResultData > 0) {
          return resultData;
        } else {
          return data;
        }
      } else if (searchValue !== "" && countResultData === 0) {
        return [];
      } else if (countResultData > 0) {
        return resultData;
      } else {
        if (countData === 0) {
          return sampleData;
        } else {
          return data;
        }
      }
    }
  }]);
  return WFSelect2;
}(_react.Component);

// ------------------- //


exports.default = WFSelect2;
// ------------------- //

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Holds processed request response infos
 */
var WFResponse = function () {
  /**
   * Constructor
   * @param hasRequestErrors
   * @param hasLogicErrors
   * @param resultset
   */
  function WFResponse(hasRequestErrors, hasLogicErrors, resultset) {
    (0, _classCallCheck3.default)(this, WFResponse);

    this.hasRequestErrors = hasRequestErrors;
    this.hasLogicErrors = hasLogicErrors;
    this.resultset = resultset;
  }

  /**
   * Get the response data
   */


  (0, _createClass3.default)(WFResponse, [{
    key: 'getResultset',
    value: function getResultset() {
      return this.resultset;
    }

    /**
     * Check if response has request errors
     */

  }, {
    key: 'getHasRequestErrors',
    value: function getHasRequestErrors() {
      return this.hasRequestErrors;
    }

    /**
     * Check if response has logic errors
     */

  }, {
    key: 'getHasLogicErrors',
    value: function getHasLogicErrors() {
      return this.hasLogicErrors;
    }

    /**
     * Get the response errors
     */

  }, {
    key: 'getLogicErrors',
    value: function getLogicErrors() {
      var errors = {};
      if ((0, _Lodash.isArray)(this.resultset) && this.resultset.length > 0) {
        var result = this.resultset[0];
        var _result$succeeded = result.succeeded,
            succeeded = _result$succeeded === undefined ? false : _result$succeeded,
            _result$messages = result.messages,
            messages = _result$messages === undefined ? [] : _result$messages;

        errors = {
          succeeded: succeeded,
          messages: messages
        };
      } else if ((0, _Lodash.isObject)(this.resultset)) {}
      return errors;
    }

    /**
     * Get response
     * @param res the response
     */

  }], [{
    key: 'getResponse',
    value: function getResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get find form by name or id response
     * @param res the response
     */

  }, {
    key: 'getFindResponse',
    value: function getFindResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      if (!request_errors) {
        if (resultset.hasOwnProperty('count') && resultset.hasOwnProperty('rows')) {
          return new WFResponse(false, false, {
            count: parseInt(resultset.count),
            rows: resultset.rows
          });
        } else {
          return new WFResponse(false, true, resultset);
        }
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get find form by name or id response
     * @param res the response
     */

  }, {
    key: 'getFindFormResponse',
    value: function getFindFormResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      if (!request_errors) {
        if (resultset.hasOwnProperty('wfc')) {
          return new WFResponse(false, false, resultset.wfc);
        } else {
          return new WFResponse(false, true, resultset);
        }
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get save entry response
     * @param res the response
     */

  }, {
    key: 'getSaveResponse',
    value: function getSaveResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      if (!request_errors) {
        if (resultset.length > 0) {
          var hasLogicErrors = false;
          if (resultset.length == 1) {
            if (resultset[0].hasOwnProperty('succeeded')) {
              hasLogicErrors = !_WFValue2.default.toBoolean(resultset[0].succeeded);
            }
          }
          return new WFResponse(false, hasLogicErrors, resultset);
        } else {
          return new WFResponse(false, true, resultset);
        }
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get publish response
     * @param res the response
     */

  }, {
    key: 'getPublishResponse',
    value: function getPublishResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;

      //console.error('RES________')
      //console.dir(resultset)

      if (!request_errors) {
        if (resultset.hasOwnProperty("published") && _WFValue2.default.toBoolean(resultset["published"])) {
          return new WFResponse(false, false, resultset);
        } else {
          return new WFResponse(false, true, resultset);
        }
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get unpublish response
     * @param res the response
     */

  }, {
    key: 'getUnPublishResponse',
    value: function getUnPublishResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      if (!request_errors) {
        if (resultset.hasOwnProperty("published") && !_WFValue2.default.toBoolean(resultset["published"])) {
          return new WFResponse(false, false, resultset);
        } else {
          return new WFResponse(false, true, resultset);
        }
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get delete entry response
     * @param res the response
     */

  }, {
    key: 'getDelResponse',
    value: function getDelResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      if (!request_errors) {
        if (resultset.hasOwnProperty('deleted_entries')) {
          var deletedEntries = resultset['deleted_entries'];
          if (!(typeof deletedEntries[0] === 'undefined')) {
            return new WFResponse(false, false, deletedEntries);
          } else {
            return new WFResponse(false, true, deletedEntries);
          }
        }
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get find form by name or id response
     * @param res the response
     */

  }, {
    key: 'getFindFormStatsResponse',
    value: function getFindFormStatsResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      if (!request_errors) {
        return new WFResponse(false, false, resultset);
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }

    /**
     * Get incr counter response
     * @param res the response
     */

  }, {
    key: 'getIncrCountResponse',
    value: function getIncrCountResponse(res) {
      var resultset = res.resultset,
          request_errors = res.request_errors;


      if (!request_errors) {
        if (resultset.hasOwnProperty('id')) {
          return new WFResponse(false, false, resultset);
        } else {
          return new WFResponse(false, true, resultset);
        }
      }

      return new WFResponse(request_errors, request_errors, resultset);
    }
  }]);
  return WFResponse;
}();

;

exports.default = WFResponse;

/*
todo charly deplace in wf utils
resultset.rows.map((row) => {
  let numbers = [
    "id",
    "parent_id",
    "wf_module_id",
    "wf_optiongroup_id",
    "wf_producttype_id"
  ];
  numbers.forEach(k => {
    if(row.hasOwnProperty(k)) {
      let n = parseInt(row[k]);
      row[k] = isNaN(n) ? row[k] : n;
    }
  })
  return row;
  */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WF_TYPE_STRING = exports.WF_TYPE_STRING = "string";
var WF_TYPE_TEXT = exports.WF_TYPE_TEXT = "text";
var WF_TYPE_HTML = exports.WF_TYPE_HTML = "html";
var WF_TYPE_MAILER = exports.WF_TYPE_MAILER = "mailer";
var WF_TYPE_TEXTAREA = exports.WF_TYPE_TEXTAREA = "textarea";
var WF_TYPE_PASSWORD = exports.WF_TYPE_PASSWORD = "password";
var WF_TYPE_NUMBER = exports.WF_TYPE_NUMBER = "number";
var WF_TYPE_EMAIL = exports.WF_TYPE_EMAIL = "email";
var WF_TYPE_TEL = exports.WF_TYPE_TEL = "tel";
var WF_TYPE_URL = exports.WF_TYPE_URL = "url";
var WF_TYPE_FLOAT = exports.WF_TYPE_FLOAT = "float";
var WF_TYPE_INTEGER = exports.WF_TYPE_INTEGER = "integer";
var WF_TYPE_BOOLEAN = exports.WF_TYPE_BOOLEAN = "boolean";
var WF_TYPE_OBJECT = exports.WF_TYPE_OBJECT = "object";
var WF_TYPE_ARRAY = exports.WF_TYPE_ARRAY = "array";
var WF_TYPE_SELECT = exports.WF_TYPE_SELECT = "select";
var WF_TYPE_SELECT_SINGLE = exports.WF_TYPE_SELECT_SINGLE = "select_single";
var WF_TYPE_SELECT_MULTIPLE = exports.WF_TYPE_SELECT_MULTIPLE = "select_multiple";
var WF_TYPE_COLLECTION = exports.WF_TYPE_COLLECTION = "collection";
var WF_TYPE_DOCUMENT = exports.WF_TYPE_DOCUMENT = "document";
var WF_TYPE_FILE = exports.WF_TYPE_FILE = "file";
var WF_TYPE_DATE = exports.WF_TYPE_DATE = "date";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _WFType2 = __webpack_require__(49);

var _WFType3 = _interopRequireDefault(_WFType2);

var _Namify = __webpack_require__(234);

var _Namify2 = _interopRequireDefault(_Namify);

var _Slugify = __webpack_require__(122);

var _Slugify2 = _interopRequireDefault(_Slugify);

var _MaxStr = __webpack_require__(89);

var _MaxStr2 = _interopRequireDefault(_MaxStr);

var _StrToArr = __webpack_require__(236);

var _StrToArr2 = _interopRequireDefault(_StrToArr);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

var _WFValueTypes = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS STRING ------------------- // 

// ------------------- //

var WFString = function (_WFType) {
  (0, _inherits3.default)(WFString, _WFType);

  /**
   * Constructor
   */
  function WFString() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFString);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFString.__proto__ || (0, _getPrototypeOf2.default)(WFString)).call(this, _WFValueTypes.WF_STRING_VALUE));

    var _config$value = config.value,
        value = _config$value === undefined ? "" : _config$value;

    _this.stringValue = value;
    return _this;
  }

  /**
   * Test if obj is instance Of this class
   * @param obj the object to test
   * @return boolean
   */


  (0, _createClass3.default)(WFString, [{
    key: "get",


    /**
     * Get value
     * @return string
     */
    value: function get() {
      return this.stringValue;
    }

    /**
     * Set value
     * @param val the new value to set 
     */

  }, {
    key: "set",
    value: function set(val) {
      if ((0, _Lodash.isString)(val)) {
        if (val === "") {
          this.stringValue = val;
        } else {
          this.stringValue = val.replace(/^\s+|\s+$/g, '');
        }
      }
    }

    /**
     * clear value
     */

  }, {
    key: "clear",
    value: function clear() {
      this.stringValue = "";
      if (this.input) {
        this.input.setState((0, _defineProperty3.default)({}, this.getKey(), ""));
      }
    }
    /**
     * Count value's character 
     * Update counter 
     */

  }, {
    key: "getCounter",
    value: function getCounter() {
      return this.stringValue.length;
    }

    /**
     * Check if value is empty
     * @return boolean
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.stringValue === "";
    }

    /**
     * Check if string is includes in value
     * @return boolean
     */

  }, {
    key: "has",
    value: function has(str) {
      if ((0, _Lodash.isString)(val) && !this.isEmpty()) {
        return this.stringValue.includes(str);
      } else {
        return false;
      }
    }

    /**
     * Transform value to LowerCase
     */

  }, {
    key: "toLower",
    value: function toLower() {
      if (!this.isEmpty()) {
        this.stringValue = this.stringValue.toLowerCase();
      }
    }

    /**
     * Transform value to LowerCase
     */

  }, {
    key: "toUpper",
    value: function toUpper() {
      if (!this.isEmpty()) {
        this.stringValue = this.stringValue.toUpperCase();
      }
    }

    /**
     * Transform value to Uppercase
     */

  }, {
    key: "toCapital",
    value: function toCapital() {
      if (!this.isEmpty()) {
        var str = this.stringValue;
        this.stringValue = "" + str.charAt(0).toUpperCase() + str.slice(1);
      }
    }

    /**
     * Transform value to Slug
     */

  }, {
    key: "toSlug",
    value: function toSlug() {
      var sep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "-";

      this.stringValue = (0, _Slugify2.default)(this.stringValue, sep);
    }

    /**
     * Transform value to WFApiName
     */

  }, {
    key: "toName",
    value: function toName() {
      this.stringValue = (0, _Namify2.default)(this.stringValue);
    }

    /**
     * Transform to HTML
     */

  }, {
    key: "toHtml",
    value: function toHtml() {
      return this.stringValue.replace(/\n/g, "<br/>");
    }

    /**
     * Transform to HTML
     */

  }, {
    key: "fromHtml",
    value: function fromHtml(htmlVal) {
      if (htmlVal) {
        var _val = htmlVal.replace(/\<br\>/g, '\n');
        _val = _val.replace(/\<br\/\>/g, '\n');
        this.set(_val);
      }
    }

    /**
     * Limit value's character
     */

  }, {
    key: "toMax",
    value: function toMax() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _args$limit = args.limit,
          limit = _args$limit === undefined ? 20 : _args$limit,
          _args$sufix = args.sufix,
          sufix = _args$sufix === undefined ? "" : _args$sufix;

      this.stringValue = (0, _MaxStr2.default)(this.stringValue, limit, sufix);
      /*
      if (limit > 1) {
        this.stringValue = maxStr(this.stringValue, limit, sufix); 
      }
      */
    }

    /**
     * Call transform method
     * Apply transform method
     * return value in next param
     */

  }, {
    key: "transform",
    value: function transform(methodName) {
      var _this2 = this;

      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var callBacks = {
        "toCapital": function toCapital() {
          return _this2.toCapital();
        },
        "toLower": function toLower() {
          return _this2.toLower();
        },
        "toUpper": function toUpper() {
          return _this2.toUpper();
        },
        "toSlug": function toSlug() {
          return _this2.toSlug();
        },
        "toName": function toName() {
          return _this2.toName();
        },
        "toHtml": function toHtml() {
          return _this2.toHtml();
        }
      };
      if (!this.isEmpty() && callBacks.hasOwnProperty(methodName)) {
        var callBack = callBacks[methodName];
        callBack();
        if ((0, _Lodash.isFunction)(next)) {
          next(this.stringValue, this.htmlValue);
        }
      }
    }

    /**
     * Show current value in console
     */

  }, {
    key: "toConsole",
    value: function toConsole() {
      console.log("");
      console.warn("WFString");
      console.log("counter =>", this.counter.get());
      console.log("value =>", this.stringValue);
      console.log("");
    }
  }], [{
    key: "instanceOf",
    value: function instanceOf(obj) {
      return obj instanceof WFString;
    }
  }]);
  return WFString;
}(_WFType3.default);
// ------------------- //


exports.default = WFString;
// ------------------- //

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS TYPE MANAGER ------------------- //

// ------------------- //

var WFType = function () {
  function WFType(valueKey) {
    (0, _classCallCheck3.default)(this, WFType);

    this.key = valueKey;
    this.input = null;
  }

  /**
   * Get this.key
   * @return string
   */


  (0, _createClass3.default)(WFType, [{
    key: "getKey",
    value: function getKey() {
      return this.key;
    }

    /**
     * Forward call
     * @param evenType string 
     * @param args object params
     */

  }, {
    key: "on",
    value: function on(evenType) {
      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.input) {
        this.input.on(evenType, eventArgs, ctx);
      }
    }

    /**
     * Set Input 
     * @param input
     */

  }, {
    key: "setInput",
    value: function setInput(input) {
      if (!this.input) {
        this.input = input;
      }
    }
  }]);
  return WFType;
}();

// ------------------- //


exports.default = WFType;
// ------------------- //

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Lodash = __webpack_require__(6);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFIcon = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF BTN ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-btn",
	active: "active",
	disable: "wf-btn-disable"
};

// ------------------- //

var WFBtn = function (_Component) {
	(0, _inherits3.default)(WFBtn, _Component);

	function WFBtn() {
		(0, _classCallCheck3.default)(this, WFBtn);
		return (0, _possibleConstructorReturn3.default)(this, (WFBtn.__proto__ || (0, _getPrototypeOf2.default)(WFBtn)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFBtn, [{
		key: "render",


		// ------------------- //

		value: function render() {
			var _props = this.props,
			    _props$visible = _props.visible,
			    visible = _props$visible === undefined ? true : _props$visible,
			    _props$children = _props.children,
			    children = _props$children === undefined ? "" : _props$children,
			    _props$className = _props.className,
			    className = _props$className === undefined ? "" : _props$className,
			    _props$icon = _props.icon,
			    icon = _props$icon === undefined ? "" : _props$icon,
			    _props$iconClassName = _props.iconClassName,
			    iconClassName = _props$iconClassName === undefined ? "" : _props$iconClassName,
			    _props$active = _props.active,
			    active = _props$active === undefined ? false : _props$active,
			    _props$disable = _props.disable,
			    disable = _props$disable === undefined ? false : _props$disable,
			    _props$counter = _props.counter,
			    counter = _props$counter === undefined ? 0 : _props$counter,
			    _props$counterMax = _props.counterMax,
			    counterMax = _props$counterMax === undefined ? 0 : _props$counterMax,
			    _props$style = _props.style,
			    style = _props$style === undefined ? {} : _props$style,
			    _onClick = _props.onClick;

			if (!visible) return false;
			if (disable) {
				return _react2.default.createElement(
					"span",
					{
						style: style,
						className: classes.wrapper + " " + className + " " + classes.disable },
					_react2.default.createElement(_WFIcon.WFIcon, { icon: icon, className: iconClassName }),
					_react2.default.createElement(
						_WFText2.default,
						{ counter: counter, counterMax: counterMax },
						children
					)
				);
			} else {
				return _react2.default.createElement(
					"span",
					{
						style: style,
						className: classes.wrapper + " " + className + " " + (active ? classes.active : ""),
						onClick: function onClick() {
							return (0, _Lodash.isFunction)(_onClick) ? _onClick() : "";
						} },
					_react2.default.createElement(_WFIcon.WFIcon, { icon: icon, className: iconClassName }),
					_react2.default.createElement(
						_WFText2.default,
						{ counter: counter, counterMax: counterMax },
						children
					)
				);
			}
		}
	}]);
	return WFBtn;
}(_react.Component);

// ------------------- //

exports.default = WFBtn;

// ------------------- //

/*

	<WFBtn 
	className={classes} 
	onClick={onClick} 
	icon={icon}>
		Save form
	</WFBtn>
*/

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF COUNTER ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-counter",
	counter: "wf--counter",
	max: "wf--max",
	text: "wf--text"
};

// ------------------- //

var WFCounter = function (_Component) {
	(0, _inherits3.default)(WFCounter, _Component);

	function WFCounter() {
		(0, _classCallCheck3.default)(this, WFCounter);
		return (0, _possibleConstructorReturn3.default)(this, (WFCounter.__proto__ || (0, _getPrototypeOf2.default)(WFCounter)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFCounter, [{
		key: "render",


		// ------------------- //

		value: function render() {
			if (this.isHidden()) return false;
			return _react2.default.createElement(
				"wf-counter",
				null,
				this.getView()
			);
		}

		// ------------------- //

	}, {
		key: "getView",
		value: function getView() {
			var _props = this.props,
			    _props$counter = _props.counter,
			    counter = _props$counter === undefined ? 0 : _props$counter,
			    _props$max = _props.max,
			    max = _props$max === undefined ? 0 : _props$max,
			    _props$all = _props.all,
			    all = _props$all === undefined ? false : _props$all;

			if (all) return this.getViewComplete();
			return counter === max || max === 0 ? this.getViewSingle() : this.getViewComplete();
		}

		// ------------------- //

	}, {
		key: "getViewSingle",
		value: function getViewSingle() {
			var _props2 = this.props,
			    _props2$sep = _props2.sep,
			    sep = _props2$sep === undefined ? "/" : _props2$sep,
			    _props2$parenthesis = _props2.parenthesis,
			    parenthesis = _props2$parenthesis === undefined ? true : _props2$parenthesis,
			    _props2$prefix = _props2.prefix,
			    prefix = _props2$prefix === undefined ? "" : _props2$prefix,
			    _props2$sufix = _props2.sufix,
			    sufix = _props2$sufix === undefined ? "" : _props2$sufix;

			return _react2.default.createElement(
				"span",
				null,
				!prefix ? "" : this.getText(prefix),
				!parenthesis ? "" : this.getText("("),
				this.getCounter(),
				!parenthesis ? "" : this.getText(")"),
				!sufix ? "" : this.getText(sufix)
			);
		}

		// ------------------- //

	}, {
		key: "getViewComplete",
		value: function getViewComplete() {
			var _props3 = this.props,
			    _props3$sep = _props3.sep,
			    sep = _props3$sep === undefined ? "/" : _props3$sep,
			    _props3$parenthesis = _props3.parenthesis,
			    parenthesis = _props3$parenthesis === undefined ? true : _props3$parenthesis;

			return _react2.default.createElement(
				"span",
				null,
				!parenthesis ? "" : this.getText("("),
				this.getCounter(),
				this.getText(sep),
				this.getMax(),
				!parenthesis ? "" : this.getText(")")
			);
		}

		// ------------------- //

	}, {
		key: "getCounter",
		value: function getCounter() {
			var _props$counter2 = this.props.counter,
			    counter = _props$counter2 === undefined ? 0 : _props$counter2;

			return _react2.default.createElement(
				"span",
				{ className: "" + classes.counter },
				counter
			);
		}

		// ------------------- //

	}, {
		key: "getMax",
		value: function getMax() {
			var _props$max2 = this.props.max,
			    max = _props$max2 === undefined ? 0 : _props$max2;

			return _react2.default.createElement(
				"span",
				{ className: "" + classes.max },
				max
			);
		}

		// ------------------- //

	}, {
		key: "getText",
		value: function getText(str) {
			return _react2.default.createElement(
				"span",
				{ className: "" + classes.text },
				str
			);
		}

		// ------------------- //

	}, {
		key: "isHidden",
		value: function isHidden() {
			var _props4 = this.props,
			    _props4$counter = _props4.counter,
			    counter = _props4$counter === undefined ? 0 : _props4$counter,
			    _props4$visible = _props4.visible,
			    visible = _props4$visible === undefined ? true : _props4$visible,
			    _props4$visibleAtZero = _props4.visibleAtZero,
			    visibleAtZero = _props4$visibleAtZero === undefined ? false : _props4$visibleAtZero;

			return !visible || !visibleAtZero && parseFloat(counter) === 0;
		}
	}]);
	return WFCounter;
}(_react.Component);

// ------------------- //

exports.default = WFCounter;

// ------------------- //

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF IMG ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-img",
	responsive: "img-responsive"
};

// ------------------- //

var Group = {};

var WFImg = function (_Component) {
	(0, _inherits3.default)(WFImg, _Component);

	function WFImg(props) {
		(0, _classCallCheck3.default)(this, WFImg);

		var _this = (0, _possibleConstructorReturn3.default)(this, (WFImg.__proto__ || (0, _getPrototypeOf2.default)(WFImg)).call(this, props));

		_this.id = (0, _Lodash.uniqueId)();
		_this.state = {
			ready: false
		};
		return _this;
	}

	(0, _createClass3.default)(WFImg, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    _props$src = _props.src,
			    src = _props$src === undefined ? "" : _props$src,
			    _props$className = _props.className,
			    className = _props$className === undefined ? "" : _props$className,
			    _props$height = _props.height,
			    height = _props$height === undefined ? "" : _props$height,
			    _props$style = _props.style,
			    style = _props$style === undefined ? {} : _props$style;
			var ready = this.state.ready;

			if (!src) {
				return false;
			} else {
				var h = height;
				if (style.hasOwnProperty('maxHeight')) {
					h = style.maxHeight;
				}
				return _react2.default.createElement("img", {
					src: src,
					style: style,
					onLoad: this.handleImageLoaded.bind(this)
					//onError={this.handleImageErrored.bind(this)}
					, className: classes.wrapper + " " + classes.responsive + " " + className + " fade " + (ready ? "in" : ""),
					height: ready ? h : 100
				});
			}
		}
	}, {
		key: "handleImageLoaded",
		value: function handleImageLoaded() {
			var _props2 = this.props,
			    _props2$groupId = _props2.groupId,
			    groupId = _props2$groupId === undefined ? null : _props2$groupId,
			    _props2$onReady = _props2.onReady,
			    onReady = _props2$onReady === undefined ? null : _props2$onReady;

			this.setState({
				ready: true
			});
			if (groupId) {
				delete Group[groupId][this.id];
				if ((0, _keys2.default)(Group[groupId]).length === 0) {
					if ((0, _Lodash.isFunction)(onReady)) {
						setTimeout(function () {
							return onReady();
						}, 200);
					}
				}
			}
		}

		// COMPONENT LIFECYCLE ------------------- //

	}, {
		key: "componentWillMount",
		value: function componentWillMount() {
			var _props$groupId = this.props.groupId,
			    groupId = _props$groupId === undefined ? null : _props$groupId;

			if (groupId) {
				if (!Group.hasOwnProperty(groupId)) {
					Group[groupId] = {};
				}
				Group[groupId][this.id] = "loading";
			}
		}
	}]);
	return WFImg;
}(_react.Component);

// ------------------- //

exports.default = WFImg;

// ------------------- //


// <WFImg src={logo} className={classe} />

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var classes = {

  disabled: "wf-disabled",

  wrapper: {

    top: "wf-top",
    down: "wf-down",
    toggle: "wf-toggle-btn",
    search: "wf-search",

    selectionArchive: "wf-selection-archive",
    selectionOption: "wf-selection-option",

    optionArchive: "wf-option-archive",
    optionOption: "wf-option-option",
    optionNotFound: "wf-option-not-found"
  },

  scrollbar: {

    selectionArchive: "wf-selection-archive-scrollbar",
    optionArchive: "wf-option-archive-scrollbar"
  },

  state: {
    active: "wf-active",
    open: "wf-is-open",
    close: "wf-is-close",
    unfold: "wf-is-unfold",
    checked: "wf-checked",
    unchecked: "wf-unchecked"
  }
};

exports.default = classes;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFRequest = __webpack_require__(117);

var _WFRequest2 = _interopRequireDefault(_WFRequest);

var _WFResponse = __webpack_require__(46);

var _WFResponse2 = _interopRequireDefault(_WFResponse);

var _WFUrl = __webpack_require__(41);

var _WFUrl2 = _interopRequireDefault(_WFUrl);

var _WFParam = __webpack_require__(115);

var _WFParam2 = _interopRequireDefault(_WFParam);

var _WFRequestParams = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERR_NEXT_MSG = "next callback is undefined.";

// ------------------- //

// CLASS WF CLIENT ------------------- //

// ------------------- //
var WFClient = function () {
  function WFClient() {
    (0, _classCallCheck3.default)(this, WFClient);
  }

  (0, _createClass3.default)(WFClient, null, [{
    key: "get",

    /**
     * Get 
     *
     * @param urlArgs object containing elements to build the request url
     * @return {Promise}
     *
     * @code
        WFClient.get(urlArgs)
          .then(( results={} ) => {
            const {
              res,
              resultset,
              internal_error
            } = results;
            // do stuff...
          })
          .catch((error) => {
            console.error(error);
          });
     * @endcode
     */
    value: function get(urlArgs) {
      var url = _WFUrl2.default.buildUrl(urlArgs);
      if ((0, _Lodash.isString)(url)) {
        return _WFRequest2.default.get(url).promise();
      }
    }

    /**
     * Post 
     *
     * @param urlArgs object containing elements to build the request url
     * @param data array
     * @param headerAccept string html || json ...
     * @return {Promise}
     *
     * @code
        WFClient.post(urlArgs, data)
          .then(( results={} ) => {
            const {
              res,
              resultset,
              internal_error
            } = results;
            // do stuff...
          })
          .catch((error) => {
            console.error(error);
          });
     * @endcode
     */

  }, {
    key: "post",
    value: function post(urlArgs) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var headerAccept = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _WFRequestParams.HEADER_ACCEPT_JSON;

      var url = _WFUrl2.default.buildUrl(urlArgs);
      if ((0, _Lodash.isString)(url)) {
        return _WFRequest2.default.post(url).send(data).set('Accept', headerAccept).promise();
      }
    }

    /**
     * Get license info
     * Valid actions are edd_action = [activate_license, deactivate_license, get_version, check_license]
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "getLicenseInfo",
    value: function getLicenseInfo(urlArgs) {
      var _urlArgs$edd_action = urlArgs.edd_action,
          edd_action = _urlArgs$edd_action === undefined ? 'check_license' : _urlArgs$edd_action,
          _urlArgs$item_name = urlArgs.item_name,
          item_name = _urlArgs$item_name === undefined ? '' : _urlArgs$item_name,
          _urlArgs$license = urlArgs.license,
          license = _urlArgs$license === undefined ? '' : _urlArgs$license;


      var wf_server_url = _WFUrl2.default.getWFDomain();
      var url = _WFUrl2.default.getBaseUrl(); //WFUrl.getHost();
      var data = {
        edd_action: edd_action,
        item_name: item_name,
        license: license,
        url: url
      };

      var queryParams = '';
      for (var key in data) {
        queryParams += _WFParam2.default.format(key, data[key]) + ';';
      }

      var postUrl = wf_server_url + ("?wflmq=" + queryParams);

      // todo charly remove...
      //console.error("LICENCE", postUrl)

      return _WFRequest2.default.get(postUrl).promise();
    }

    /**
     * Save or Update a form state|field in db
     * @param urlArgs object containing elements to build the request url
     * @param data array the data to save
     */

  }, {
    key: "save",
    value: function save(urlArgs, data) {
      var files = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _urlArgs$formName = urlArgs.formName,
          formName = _urlArgs$formName === undefined ? '' : _urlArgs$formName,
          _urlArgs$formType = urlArgs.formType,
          formType = _urlArgs$formType === undefined ? 0 : _urlArgs$formType,
          _urlArgs$isAppAdmin = urlArgs.isAppAdmin,
          isAppAdmin = _urlArgs$isAppAdmin === undefined ? false : _urlArgs$isAppAdmin;


      urlArgs['uri'] = "/" + formName + "/new";

      urlArgs['module'] = _WFUrl2.default.getModule(isAppAdmin, formType);

      // todo save
      /*
      console.warn("SAVE")
      console.log(`
        isAppAdmin => ${isAppAdmin}
        formName => ${formName}
        formType => ${formType}
      `)
      console.log(urlArgs);
      */

      var postData = {};
      postData[formName] = data;

      // If files provided then ==> make a FormData Post
      // change urlArgs.module; files are handled by custom module
      if ((0, _Lodash.isObject)(files) && (0, _keys2.default)(files).length > 0) {
        urlArgs['module'] = _WFUrl2.default.getModule(false, formType);
        postData = new FormData();

        // add files
        for (var key in files) {
          var file = files[key];
          postData.append(key, file, file.name);
          // remove key from data
          if (data.hasOwnProperty(key)) {
            delete data[key];
          }
        }

        // add values
        for (var _key in data[0]) {
          postData.append(_key, data[0][_key]);
        }
      }
      return WFClient.post(urlArgs, postData);
    }

    /**
     * Delete a form state|field from db
     * @param urlArgs object containing elements to build the request url
     * @param id the identifier of the db entry to delete
     */

  }, {
    key: "del",
    value: function del(urlArgs, id) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var _urlArgs$formName2 = urlArgs.formName,
          formName = _urlArgs$formName2 === undefined ? '' : _urlArgs$formName2,
          _urlArgs$formType2 = urlArgs.formType,
          formType = _urlArgs$formType2 === undefined ? 0 : _urlArgs$formType2,
          _urlArgs$isAppAdmin2 = urlArgs.isAppAdmin,
          isAppAdmin = _urlArgs$isAppAdmin2 === undefined ? false : _urlArgs$isAppAdmin2;


      urlArgs['uri'] = "/" + formName + "/delete/" + id;

      urlArgs['module'] = _WFUrl2.default.getModule(isAppAdmin, formType);

      if (data) {
        var postData = {};
        postData[formName] = data;
        return WFClient.post(urlArgs, postData);
      } else {
        return WFClient.post(urlArgs);
      }
    }

    /**
     * Find all form state in db
     * @param urlArgs object containing elements to build the request url
     * @param id the identifier of the db entry to find
     */

  }, {
    key: "find",
    value: function find(urlArgs, params) {
      var _urlArgs$formName3 = urlArgs.formName,
          formName = _urlArgs$formName3 === undefined ? '' : _urlArgs$formName3,
          _urlArgs$isAppAdmin3 = urlArgs.isAppAdmin,
          isAppAdmin = _urlArgs$isAppAdmin3 === undefined ? false : _urlArgs$isAppAdmin3;


      urlArgs['uri'] = "/" + formName + "/search";

      urlArgs['module'] = _WFUrl2.default.getModule(isAppAdmin);

      return WFClient.get(urlArgs);
    }

    /**
     * Find a form state|field in db by its identifier
     * @param urlArgs object containing elements to build the request url
     * @param id the identifier of the db entry to find
     */

  }, {
    key: "findById",
    value: function findById(urlArgs, id) {
      var _urlArgs$formName4 = urlArgs.formName,
          formName = _urlArgs$formName4 === undefined ? '' : _urlArgs$formName4,
          _urlArgs$isAppAdmin4 = urlArgs.isAppAdmin,
          isAppAdmin = _urlArgs$isAppAdmin4 === undefined ? false : _urlArgs$isAppAdmin4;


      urlArgs['uri'] = "/" + formName + "/view/id/" + id;

      urlArgs['module'] = _WFUrl2.default.getModule(isAppAdmin);

      return WFClient.get(urlArgs);
    }

    /**
     * Find a custom form config by its identifier
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "findFormById",
    value: function findFormById(urlArgs) {
      var _urlArgs$formId = urlArgs.formId,
          formId = _urlArgs$formId === undefined ? 0 : _urlArgs$formId,
          _urlArgs$isAppAdmin5 = urlArgs.isAppAdmin,
          isAppAdmin = _urlArgs$isAppAdmin5 === undefined ? false : _urlArgs$isAppAdmin5;


      urlArgs['uri'] = "/id/" + formId;

      urlArgs['module'] = _WFUrl2.default.getModule(isAppAdmin);

      return WFClient.get(urlArgs);
    }

    /**
     * Find a custom form config by its name
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "findFormByName",
    value: function findFormByName(urlArgs) {
      var _urlArgs$formName5 = urlArgs.formName,
          formName = _urlArgs$formName5 === undefined ? '' : _urlArgs$formName5,
          _urlArgs$isAppAdmin6 = urlArgs.isAppAdmin,
          isAppAdmin = _urlArgs$isAppAdmin6 === undefined ? false : _urlArgs$isAppAdmin6;


      urlArgs['uri'] = "/name/" + formName;

      urlArgs['module'] = _WFUrl2.default.getModule(isAppAdmin);

      return WFClient.get(urlArgs);
    }

    /**
     * Publish a form config
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "publish",
    value: function publish(urlArgs) {
      var _urlArgs$formName6 = urlArgs.formName,
          formName = _urlArgs$formName6 === undefined ? '' : _urlArgs$formName6;


      urlArgs['uri'] = "/" + formName + "/publish";
      urlArgs['module'] = _WFUrl2.default.getModule(true);
      return WFClient.post(urlArgs);
    }

    /**
     * UnPublish a form config
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "unpublish",
    value: function unpublish(urlArgs) {
      var _urlArgs$formName7 = urlArgs.formName,
          formName = _urlArgs$formName7 === undefined ? '' : _urlArgs$formName7;


      urlArgs['uri'] = "/" + formName + "/unpublish";
      urlArgs['module'] = _WFUrl2.default.getModule(true);
      return WFClient.post(urlArgs);
    }

    /**
     * Export CSV
     * @param urlArgs object containing elements to build the request url
     * @param formName the form config name (slug)
     */
    /*static exportCsv(urlArgs, formName) {
      urlArgs['uri'] = `/${formName}/export-csv`;
      urlArgs['module'] = WFUrl.getModule(true);
      return WFClient.post(url);
    }*/

    /**
     * Export CSV
     * @param urlArgs object containing elements to build the request url
     * @param formName the form config name (slug)
     */

  }, {
    key: "findAllCustomForms",
    value: function findAllCustomForms(urlArgs) {
      urlArgs['uri'] = "/form";
      // TODO(lybaba) append params to uri as ?p1=v1&p2=v2....
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.get(urlArgs);
    }

    /**
     * Find option entries
     * @param urlArgs object containing elements to build the request url
     * @param integer formEntryId
     */

  }, {
    key: "findOptionEntries",
    value: function findOptionEntries() {
      var urlArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var formEntryId = arguments[1];
      var _urlArgs$formName8 = urlArgs.formName,
          formName = _urlArgs$formName8 === undefined ? '' : _urlArgs$formName8;


      urlArgs['uri'] = "/" + formName + "/opt/form-entry/" + formEntryId;
      urlArgs['module'] = _WFUrl2.default.getModule(true);
      return WFClient.get(urlArgs);
    }

    /**
     * Count option entries
     * @param urlArgs object containing elements to build the request url
     * @param integer formEntryId
     */

  }, {
    key: "countOptionEntries",
    value: function countOptionEntries() {
      var urlArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _urlArgs$formName9 = urlArgs.formName,
          formName = _urlArgs$formName9 === undefined ? '' : _urlArgs$formName9;


      urlArgs['uri'] = "/" + formName + "/opt/count";
      urlArgs['module'] = _WFUrl2.default.getModule(true);
      return WFClient.get(urlArgs);
    }

    /**
     * Find form stats by date
     * @param urlArgs object containing elements to build the request url
     * @param integer dateId
     */

  }, {
    key: "findFormStatsByDate",
    value: function findFormStatsByDate(urlArgs, dateId) {
      var _urlArgs$formName10 = urlArgs.formName,
          formName = _urlArgs$formName10 === undefined ? '' : _urlArgs$formName10;


      urlArgs['uri'] = "/" + formName + "/stats/date/" + dateId;
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.get(urlArgs);
    }

    /**
     * Find form stats by year groupby month
     * @param urlArgs object containing elements to build the request url
     * @param integer year
     */

  }, {
    key: "findFormStatsByYear",
    value: function findFormStatsByYear(urlArgs, year) {
      var _urlArgs$formName11 = urlArgs.formName,
          formName = _urlArgs$formName11 === undefined ? '' : _urlArgs$formName11;


      urlArgs['uri'] = "/" + formName + "/stats/year/" + year;
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.get(urlArgs);
    }

    /**
     * Find form stats by year and month groupby week
     * @param urlArgs object containing elements to build the request url
     * @param integer year
     * @param integer month
     */

  }, {
    key: "findFormStatsByYearMonth",
    value: function findFormStatsByYearMonth(urlArgs, year, month) {
      var _urlArgs$formName12 = urlArgs.formName,
          formName = _urlArgs$formName12 === undefined ? '' : _urlArgs$formName12;


      urlArgs['uri'] = "/" + formName + "/stats/year/" + year + "/month/" + month;
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.get(urlArgs);
    }

    /**
     * Find form stats by year and week
     * @param urlArgs object containing elements to build the request url
     * @param integer year
     * @param integer week
     */

  }, {
    key: "findFormStatsByYearWeek",
    value: function findFormStatsByYearWeek(urlArgs, year, week) {
      var _urlArgs$formName13 = urlArgs.formName,
          formName = _urlArgs$formName13 === undefined ? '' : _urlArgs$formName13;


      urlArgs['uri'] = "/" + formName + "/stats/year/" + year + "/week/" + week;
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.get(urlArgs);
    }

    /**
     * Increment view count of form
     * @param urlArgs object containing elements to build the request url
     * @param integer incr
     */

  }, {
    key: "incrViewCount",
    value: function incrViewCount(urlArgs) {
      var _urlArgs$formName14 = urlArgs.formName,
          formName = _urlArgs$formName14 === undefined ? '' : _urlArgs$formName14;


      urlArgs['uri'] = "/" + formName + "/stats/incr-view/1";
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.post(urlArgs);
    }

    /**
     * Increment completed count of form
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "incrCompletedCount",
    value: function incrCompletedCount(urlArgs) {
      var _urlArgs$formName15 = urlArgs.formName,
          formName = _urlArgs$formName15 === undefined ? '' : _urlArgs$formName15;


      urlArgs['uri'] = "/" + formName + "/stats/incr-completed/1";
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.post(urlArgs);
    }

    /**
     * Increment uncompleted count of form
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "incrUncompletedCount",
    value: function incrUncompletedCount(urlArgs) {
      var _urlArgs$formName16 = urlArgs.formName,
          formName = _urlArgs$formName16 === undefined ? '' : _urlArgs$formName16;


      urlArgs['uri'] = "/" + formName + "/stats/incr-uncompleted/1";
      urlArgs['module'] = _WFUrl2.default.getModule(false);
      return WFClient.post(urlArgs);
    }

    /*
     * TODO(lybaba) implement methods below
     /{prefix}/wfc/{formName}/export-cs
    exportCsv
     /{prefix}/wfc/{formName}/import-csv
    importCsv
     /{prefix}/wfc/{formName}/category-group
    categoryGroup
     /{prefix}/wfc/{formName}/category-group/leafs
    categoryGroupLeafs
     /{prefix}/wfc/{formName}/check-license
    checkLicense
     */

  }]);
  return WFClient;
}();

// ------------------- //


exports.default = WFClient;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFConsole = __webpack_require__(61);

var _WFConsole2 = _interopRequireDefault(_WFConsole);

var _WFViewMgr = __webpack_require__(91);

var _WFViewMgr2 = _interopRequireDefault(_WFViewMgr);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _WFSchemaValidator = __webpack_require__(230);

var _WFSchemaValidator2 = _interopRequireDefault(_WFSchemaValidator);

var _WFSchemaCondition = __webpack_require__(229);

var _WFSchemaCondition2 = _interopRequireDefault(_WFSchemaCondition);

var _JSON = __webpack_require__(21);

var _Lodash = __webpack_require__(6);

var _WFValueTypes = __webpack_require__(11);

var _WFEventTypes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS FIELD VIEW ------------------- //

// ------------------- //

var defaultState = {
  valid: null,
  errors: [],
  labelBy: "label", // for select/select2
  hasCounter: false
};

var WFieldView = function () {
  /**
   * Constructor
   * this.field given formField should only use to set the field value
   * this.name is the fieldName
   * this.component is the react component input
   * this.isInit true if the component is ready
   * this.initialState is the component initial state 
   * this.schema is instance of WFSchemaValidator
   * this.condition is instance of WFSchemaValidator
   * this.observer is set by the WFSchemaCondition
   * @param value instance of WFString
   */
  function WFieldView(value) {
    var _this = this;

    (0, _classCallCheck3.default)(this, WFieldView);

    this.name = null;
    this.field = null;
    this.value = value;

    this.initialState = {};
    this.observer = {};
    this.format = null;
    this.schema = null;
    this.condition = null;
    this.isInit = false;
    this.isFocused = false;
    this.viewMrg = new _WFViewMgr2.default();

    // debouce event change method is focused
    this.itReady = (0, _Lodash.debounce)(function () {
      _this.ready(_WFEventTypes.WF_EVENT_ONCHANGE);
    }, 200);
    // debouce validate method is focused
    this.itValidated = (0, _Lodash.debounce)(function () {
      _this.validate();
    }, 500);
  }

  /**
   * Call method by Eventype
   * @param evenType string 
   * @param args object params
   */


  (0, _createClass3.default)(WFieldView, [{
    key: 'on',
    value: function on(evenType) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var eventArgs = args.eventArgs;


      switch (evenType) {

        case _WFEventTypes.WF_EVENT_ONCUSTOM:
          if ((0, _Lodash.isFunction)(eventArgs)) {
            eventArgs(this);
          }
          break;

        case _WFEventTypes.WF_EVENT_ONINIT:
          this.init(args);
          break;

        case _WFEventTypes.WF_EVENT_ONCHANGE:
          this.change(args);
          break;

        case _WFEventTypes.WF_EVENT_ONREADY:
          this.ready(args);
          break;

        case _WFEventTypes.WF_EVENT_ONVALIDATE:
          this.validate(args);
          break;

        case _WFEventTypes.WF_EVENT_ONBLUR:
          this.blur();
          break;

        case _WFEventTypes.WF_EVENT_ONFOCUS:
          this.focus();
          break;

        case _WFEventTypes.WF_EVENT_ONCLEAR:
          this.clear();
          break;

        case _WFEventTypes.WF_EVENT_ONREFRESH:
          this.setState(args);
          break;

        case _WFEventTypes.WF_EVENT_ONWILLMOUNT:
          this.viewMrg.willMount(eventArgs);
          this.ready(_WFEventTypes.WF_EVENT_ONWILLMOUNT);
          break;

        case _WFEventTypes.WF_EVENT_ONDIDMOUNT:
          if (this.isInit && this.field.hasValue()) {
            var prevValue = this.value.get();
            if (!(0, _Lodash.isNull)(prevValue)) {
              this.change({ eventArgs: (0, _defineProperty3.default)({}, this.value.getKey(), prevValue) });
            }
          }
          this.ready(_WFEventTypes.WF_EVENT_ONDIDMOUNT);
          break;

        case _WFEventTypes.WF_EVENT_ONWILLUNMOUNT:
          this.viewMrg.willUnMount(eventArgs);
          //this.isInit = false;
          this.ready(_WFEventTypes.WF_EVENT_ONWILLUNMOUNT);
          break;
      }
    }

    // MANAGE INSTANCE ---------------- //

    /**
     * When the component initialize
     * Set it in this.component
     * @param component React Component 
     */

  }, {
    key: 'init',
    value: function init(args) {
      var field = args.field,
          name = args.name,
          _args$schema = args.schema,
          schema = _args$schema === undefined ? {} : _args$schema,
          _args$eventArgs = args.eventArgs,
          eventArgs = _args$eventArgs === undefined ? {} : _args$eventArgs;
      var _schema$data = schema.data,
          data = _schema$data === undefined ? [] : _schema$data,
          _schema$required = schema.required,
          required = _schema$required === undefined ? false : _schema$required,
          _schema$condition = schema.condition,
          condition = _schema$condition === undefined ? false : _schema$condition,
          _schema$transformable = schema.transformable,
          transformable = _schema$transformable === undefined ? false : _schema$transformable,
          _schema$transform = schema.transform,
          transform = _schema$transform === undefined ? "" : _schema$transform;

      this.setState((0, _assign2.default)(this.initialState, defaultState));
      if (!this.isInit) {
        this.name = name;
        this.field = field;
        var validationSchema = field.getValidationSchema();
        if ((0, _keys2.default)(validationSchema).length > 0) {
          this.setSchema(validationSchema);
        } else {
          var dfSchema = _WFSchemaValidator2.default.getDefaultSchema(this.value.getKey(), null, schema);
          this.setSchema(dfSchema);
        }
        if (condition) {
          this.setCondition(condition);
        }
        if (transformable && transform) {
          this.format = transform;
        }
        this.isInit = true;
      }
    }

    /**
     * Set this observer
     */

  }, {
    key: 'setObserver',
    value: function setObserver(observer) {
      this.observer = observer;
    }

    /**
     * Call ready when the event is completed
     * if is observed share this state
     */

  }, {
    key: 'ready',
    value: function ready(eventType) {
      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      //WFConsole.val(`${this.name} is ready`, eventType);
      if (this.observer) {
        var args = eventArgs;
        if (args === null) {
          args = this;
        }
        this.observer.call(eventType, args);
      }
    }

    /**
     * When the component'value change
     * Update the component state and the model
     */

  }, {
    key: 'change',
    value: function change(args) {
      var _args$eventArgs2 = args.eventArgs,
          eventArgs = _args$eventArgs2 === undefined ? {} : _args$eventArgs2;

      //WFConsole.val(`change(${this.name})`, eventArgs);

      if (this.field) {
        var key = this.value.getKey();
        var val = eventArgs[key];
        var hasAttrs = (0, _keys2.default)(eventArgs).length > 1;
        this.setState((0, _defineProperty3.default)({}, key, val));
        if (!hasAttrs) {
          this.fieldChange(val);
        } else {
          this.fieldChange((0, _assign2.default)((0, _defineProperty3.default)({}, _WFValueTypes.WF_VALUE_KEY, key), eventArgs));
        }
        this.setCounter(true);
        // fixe select2 validator
        if (key === _WFValueTypes.WF_SELECT_VALUE && !val) {
          if (this.field.getRequired()) {
            var _viewMrg$getState = this.viewMrg.getState(),
                _viewMrg$getState$arr = _viewMrg$getState.arrayValue,
                arrayValue = _viewMrg$getState$arr === undefined ? [] : _viewMrg$getState$arr;

            if (arrayValue.length > 0 && (0, _Lodash.isUndefined)(val)) {
              this.validate(true, true);
            }
          }
          return;
        }
        if (this.isFocused) {
          this.itReady();
          this.itValidated();
        } else {
          this.ready(_WFEventTypes.WF_EVENT_ONCHANGE);
          this.validate();
        }
      }
    }

    /**
     * Set this field value
     */

  }, {
    key: 'fieldChange',
    value: function fieldChange(args) {
      if (this.field) {
        this.field.setValue(args);
      }
    }

    // MANAGE STATE ---------------- //

    /**
     * Update the state
     * @param args object
     */

  }, {
    key: 'setState',
    value: function setState(args) {
      this.viewMrg.setState(args);
    }

    /**
     * Get the state
     * @param args object
     */

  }, {
    key: 'getState',
    value: function getState() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var state = this.viewMrg.getState();
      if (key) {
        if (state.hasOwnProperty(key)) {
          return state[key];
        } else {
          return defaultValue;
        }
      } else {
        return state;
      }
    }

    // MANAGE VALUE ---------------- //

    /**
     * Clear field value
     */

  }, {
    key: 'clear',
    value: function clear() {
      if (this.field) {
        this.field.clearValue();
      }
    }

    /**
     * Validate this value
     */

  }, {
    key: 'validate',
    value: function validate() {
      var displayErr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


      // WFConsole.val(`validate`, this.name);
      // WFConsole.val(`force`, force);
      // WFConsole.val(`isRequired`, this.field.getRequired());

      if (force) {
        this.ready(_WFEventTypes.WF_EVENT_ONVALIDATE, true);
      } else if (this.schema && this.isInit) {
        var value = null;
        var valid = false;
        var errors = [];
        if (this.value.getKey() === _WFValueTypes.WF_SELECT_VALUE) {
          value = this.value.getValue();
        } else {
          value = this.value.get();
        }
        var res = this.schema.validate(value);
        if (!res.hasErr()) {
          valid = true;
        } else {
          valid = false;
          if (displayErr) {
            errors = res.getErrMsg();
          }
        }
        if (this.field.getRequired()) {
          this.setState({
            valid: valid,
            errors: errors
          });
          this.ready(_WFEventTypes.WF_EVENT_ONVALIDATE, valid);
        } else {
          var isValid = valid;
          if (!valid) {
            if ((0, _Lodash.isArray)(value) && value.length === 0 || (0, _Lodash.isObject)(value) && (0, _keys2.default)(value).length === 0 || (0, _Lodash.isNumber)(value) && value === 0 || (0, _Lodash.isBoolean)(value) && value === false || (0, _Lodash.isString)(value) && value === "" || !value) {
              isValid = null;
              errors = [];
            }
          }
          this.setState({
            valid: isValid === null ? null : isValid,
            errors: errors
          });
          this.ready(_WFEventTypes.WF_EVENT_ONVALIDATE, isValid === null ? true : isValid);
        }
      }
    }

    // MANAGE COMPONENT ---------------- //

    /**
     * When the component is focused
     */

  }, {
    key: 'focus',
    value: function focus() {

      //WFConsole.info(this.name, `focus isEditing`)

      this.isFocused = true;
      this.setState({
        errors: [],
        focused: true
      });
    }

    /**
     * When the component is not focused
     */

  }, {
    key: 'blur',
    value: function blur() {
      var _this2 = this;

      //WFConsole.info(this.name, `blur isPublished`)

      this.isFocused = false;
      var key = this.value.getKey();
      this.setState({
        focused: false
      });
      if (this.schema) {
        var maxLength = this.schema.get('maxLength');
        if (maxLength) {
          this.value.toMax({
            limit: maxLength
          });
        }
      }
      if (!this.format) {
        this.change({
          eventArgs: (0, _defineProperty3.default)({}, key, this.value.get())
        });
      } else {
        this.value.transform(this.format, function () {
          _this2.change({
            eventArgs: (0, _defineProperty3.default)({}, _this2.value.getKey(), _this2.value.get())
          });
        });
      }
      this.setState({
        errors: []
      });
    }

    /**
     * Create Condition
     */

  }, {
    key: 'setCondition',
    value: function setCondition(condition) {
      this.condition = new _WFSchemaCondition2.default(condition);
      window.condition = this.condition;
    }

    /**
     * Create Schema Validator 
     */

  }, {
    key: 'setSchema',
    value: function setSchema(validationSchema) {
      this.schema = new _WFSchemaValidator2.default(validationSchema);
      this.setCounter(validationSchema);
    }

    /**
     * Set the data
     */

  }, {
    key: 'setData',
    value: function setData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      this.setState({ data: data });
    }

    /**
     * Set the component counter
     */

  }, {
    key: 'setCounter',
    value: function setCounter() {
      var validationSchema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var counter = 0;
      if (this.value && (0, _Lodash.isFunction)(this.value.getCounter)) {
        counter = this.value.getCounter();
      }
      if (this.isInit) {
        this.setState({ counter: counter });
      } else {
        var _validationSchema$max = validationSchema.maxLength,
            maxLength = _validationSchema$max === undefined ? 0 : _validationSchema$max,
            _validationSchema$min = validationSchema.minLength,
            minLength = _validationSchema$min === undefined ? 0 : _validationSchema$min,
            _validationSchema$max2 = validationSchema.maxItems,
            maxItems = _validationSchema$max2 === undefined ? null : _validationSchema$max2,
            _validationSchema$min2 = validationSchema.minItems,
            minItems = _validationSchema$min2 === undefined ? null : _validationSchema$min2;

        var max = maxLength;
        var min = minLength;
        if (maxItems) {
          max = maxItems;
        }
        if (minItems) {
          min = minItems;
        }
        this.setState({
          hasCounter: true,
          maxLength: max,
          minLength: min,
          counter: counter
        });
      }
    }

    /**
     * Check if field is valid
     * @return boolean || null
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      return this.getState('valid');
    }
  }]);
  return WFieldView;
}();

// ------------------- //


exports.default = WFieldView;
// ------------------- //

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Lodash = __webpack_require__(6);

var _WFValueTypes = __webpack_require__(11);

var _WFType2 = __webpack_require__(49);

var _WFType3 = _interopRequireDefault(_WFType2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS NUMBER ------------------- //

// ------------------- //

var WFNumber = function (_WFType) {
  (0, _inherits3.default)(WFNumber, _WFType);

  /**
   * Constructor
   */
  function WFNumber() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFNumber);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFNumber.__proto__ || (0, _getPrototypeOf2.default)(WFNumber)).call(this, _WFValueTypes.WF_NUMBER_VALUE));

    var _config$isFloat = config.isFloat,
        isFloat = _config$isFloat === undefined ? false : _config$isFloat,
        _config$value = config.value,
        value = _config$value === undefined ? null : _config$value;

    _this.isFloat = isFloat;
    _this.numberValue = null;
    _this.stringValue = "";
    if (value) {
      _this.set(value);
    }
    return _this;
  }

  /**
   * Test if obj is instance Of this class
   * @param obj the object to test
   * @return boolean
   */


  (0, _createClass3.default)(WFNumber, [{
    key: 'get',


    /**
     * Get value
     * @return number if !null else return ""
     */
    value: function get() {
      return this.toHumanFormat(this.numberValue);
    }

    /**
     * Set value 
     * if decimal call setFloat(value)
     * else integer call setInt(value)
     * @param val is number || string
     */

  }, {
    key: 'set',
    value: function set(val) {
      if (this.isFloat) {
        this.setFloat(val);
      } else {
        this.setInt(val);
      }
    }

    /**
     * clear value
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.numberValue = null;
      if (this.input) {
        this.input.setState((0, _defineProperty3.default)({}, this.getKey(), this.get()));
      }
    }

    /**
     * Format and Set value to integer
     * @param val is number || string
     */

  }, {
    key: 'setInt',
    value: function setInt(val) {
      var n = null;
      if ((0, _Lodash.isString)(val) && val !== "") {
        n = val.replace(/[^\d]/g, '');
        //n = parseInt(val.match(/\d+/)[0]);
      } else {
        n = val;
      }
      this.numberValue = parseInt(n);
    }

    /**
     * Format and Set value to float
     * @param val is number || string
     */

  }, {
    key: 'setFloat',
    value: function setFloat(val) {
      var regex = /[+-]?\d+(\.\d+)?/g;
      var num = val === "" ? '' : val.toString().replace(",", ".").match(regex).map(function (v) {
        return parseFloat(v);
      });
      this.numberValue = num.length > 0 ? num[0] : 0;
    }
    // .toFixed(6).replace(/\.?0*$/,'')
    // .replace(",", ".")

    /**
     * Increment n and can return new value
     * @param val is number
     * @param getResult is boolean
     * @return value
     */

  }, {
    key: 'incr',
    value: function incr() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var getResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var val = this.get();
      val = parseFloat(val + n);
      this.set(val);
      if (getResult) {
        return this.get();
      }
    }

    /**
     * Decrement n and can return new value
     * @param val is number
     * @param getResult is boolean
     * @return value
     */

  }, {
    key: 'decr',
    value: function decr() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var getResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var val = this.get();
      if (n) {
        if (n > 0) {
          val = parseFloat(val > 0 ? val - n : 0);
        } else {
          val = parseFloat(val > 0 ? val + n : 0);
        }
      } else {
        val = parseFloat(val > 0 ? --val : 0);
      }
      this.set(val);
      if (getResult) {
        return this.get();
      }
    }

    /**
     * Check if n is null
     * @return boolean
     */

  }, {
    key: 'isNull',
    value: function isNull() {
      return this.get() === "";
    }

    /**
     * Check if n === value
     * @param n is number || string
     * @return boolean
     */

  }, {
    key: 'isEqal',
    value: function isEqal(n) {
      var val = this.get();
      return val === parseFloat(n) || val === 0;
    }

    /**
     * Create UniqId value
     * @return value
     */

  }, {
    key: 'toUniqId',
    value: function toUniqId() {
      return this.numberValue = (0, _Lodash.now)();
    }

    /**
     * Clean current value 
     * @param n is number || null
     * @return number or ""
     */

  }, {
    key: 'toHumanFormat',
    value: function toHumanFormat(n) {
      if (n === 0) {
        return 0;
      } else if (!n || n === null) {
        return "";
      } else if (this.isFloat) {
        return n.toFixed(2);
      } else {
        return n;
      }
    }

    /**
     * Create Devise Format and cache in string value
     * @param config is Optional {devise="€",position="after"}
     */

  }, {
    key: 'toDevise',
    value: function toDevise() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _config$devise = config.devise,
          devise = _config$devise === undefined ? "$" : _config$devise,
          _config$position = config.position,
          position = _config$position === undefined ? "before" : _config$position;

      var currentValue = this.get();
      var nextValue = position === "before" ? '' + devise + currentValue.toFixed(2) : '' + currentValue.toFixed(2) + devise;
      this.stringValue = nextValue;
    }

    /**
     * Create String Value before text ans value
     * @param before => string before value
     * @param after => string after value
     */

  }, {
    key: 'toWrap',
    value: function toWrap() {
      var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      this.stringValue = before + ' ' + (value ? value : this.get()) + ' ' + after;
    }

    /**
     * Show current value in console
     */

  }, {
    key: 'toConsole',
    value: function toConsole() {
      console.log("");
      console.warn('WFNumber');
      console.log('value =>', this.numberValue);
      if (this.stringValue !== "") {
        console.log('string =>', this.stringValue);
      }
      console.log("");
    }
  }], [{
    key: 'instanceOf',
    value: function instanceOf(obj) {
      return obj instanceof WFNumber;
    }
  }]);
  return WFNumber;
}(_WFType3.default);
// ------------------- //


exports.default = WFNumber;
// ------------------- //

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _JSON = __webpack_require__(21);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS CONSOLE  ------------------- //

// ------------------- //

var WFConsole = function () {
  function WFConsole() {
    (0, _classCallCheck3.default)(this, WFConsole);
  }

  (0, _createClass3.default)(WFConsole, null, [{
    key: 'log',
    value: function log(arg) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (key && val) {
        WFConsole.val(key, val);
      }
      console.log('' + WFConsole.stringify(arg));
    }
  }, {
    key: 'val',
    value: function val(key, _val) {
      console.log('%c' + key + ('%c' + " => ") + ('%c' + WFConsole.stringify(_val)), 'color:#0076d3;', 'color:#b0b4b7;', 'color:#E91E63;');
    }
  }, {
    key: 'info',
    value: function info(key, val) {
      console.log("");
      WFConsole.val(key, val);
      console.log("");
    }
  }, {
    key: 'dir',
    value: function dir(el) {
      if ((0, _Lodash.isObject)(el)) {
        var count = (0, _keys2.default)(el).length;
        if (count === 0) {
          return;
        } else if (count < 5) {
          console.table({ el: el });
        } else {
          console.dir(el);
        }
      } else if ((0, _Lodash.isArray)(el)) {
        if (el.length > 0) {
          console.table(el);
        }
      }
    }
  }, {
    key: 'valDir',
    value: function valDir(key, val, el) {
      var count = 0;
      if ((0, _Lodash.isObject)(el) && !el.hasOwnProperty("props")) {
        count = (0, _keys2.default)(el).length;
      } else if ((0, _Lodash.isArray)(el)) {
        count = el.length;
      }
      if (count === 0) {
        WFConsole.val(key, val);
      } else {
        console.log("");
        WFConsole.val(key, val);
        WFConsole.dir(el);
      }
    }
  }, {
    key: 'wrap',
    value: function wrap(logs) {
      if (!(0, _Lodash.isFunction)(logs)) {
        return;
      }
      console.log("");
      console.log('%c>>>>>>>>> ------------------- >', 'color:#AAAAAA;');
      console.log("");
      logs();
      console.log("");
      console.log('%c>>>>>>>>> ------------------- >', 'color:#AAAAAA;');
      console.log("");
    }
  }, {
    key: 'stringify',
    value: function stringify(arg) {
      if ((0, _Lodash.isArray)(arg) || (0, _Lodash.isObject)(arg) || (0, _JSON.isJson)(arg)) {
        return (0, _JSON.stringify)(arg, 0, 2);
      } else {
        return arg;
      }
    }
  }]);
  return WFConsole;
}();

exports.default = WFConsole;

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFInputUrl = exports.WFInputTel = exports.WFInputEmail = exports.WFInputPassword = exports.WFInputText = undefined;

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFInputTypes = __webpack_require__(24);

var _WFEventTypes = __webpack_require__(9);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFIcon = __webpack_require__(10);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- // 
// WF INPUT STRING ------------------- //
// ------------------- //

var WFInputString = function (_Component) {
  (0, _inherits3.default)(WFInputString, _Component);

  function WFInputString() {
    (0, _classCallCheck3.default)(this, WFInputString);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputString.__proto__ || (0, _getPrototypeOf2.default)(WFInputString)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputString, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          on = _props.on,
          _props$type = _props.type,
          type = _props$type === undefined ? _WFInputTypes.INPUT_TEXT : _props$type,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? "" : _props$placeholder,
          _props$inputClass = _props.inputClass,
          inputClass = _props$inputClass === undefined ? "" : _props$inputClass,
          _props$valid = _props.valid,
          valid = _props$valid === undefined ? null : _props$valid,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$displayStateCp = _props.displayStateCpt,
          displayStateCpt = _props$displayStateCp === undefined ? true : _props$displayStateCp;

      var t = type;
      if (t === "string" || !t) {
        t = _WFInputTypes.INPUT_TEXT;
      }
      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        view: function view(input) {
          var _WFInputComponent$get = _WFInputComponent2.default.getStrCfg(_this2.props),
              key = _WFInputComponent$get.key,
              value = _WFInputComponent$get.value;

          return _react2.default.createElement(
            "span",
            { className: _WFCss2.default.text + " " + WFInputString.getStatus(_this2, value) },
            _react2.default.createElement("input", {
              type: t,
              readOnly: disabled,
              className: _this2.getWrapperClass(t),
              placeholder: placeholder,
              onFocus: function onFocus() {
                return on(_WFEventTypes.WF_EVENT_ONFOCUS);
              },
              onBlur: function onBlur() {
                return on(_WFEventTypes.WF_EVENT_ONBLUR);
              },
              onChange: function onChange(e) {
                return on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, key, e.target.value));
              },
              value: !disabled ? value : ""
            }),
            _react2.default.createElement(_WFIcon.WFIState, {
              visible: displayStateCpt,
              valid: valid
            })
          );
        }
      }));
    }
  }, {
    key: "getWrapperClass",
    value: function getWrapperClass(type) {
      var _props2 = this.props,
          name = _props2.name,
          _props2$disabled = _props2.disabled,
          disabled = _props2$disabled === undefined ? false : _props2$disabled,
          _props2$valid = _props2.valid,
          valid = _props2$valid === undefined ? null : _props2$valid,
          _props2$inputClass = _props2.inputClass,
          inputClass = _props2$inputClass === undefined ? "" : _props2$inputClass;

      var clss = "" + _WFCss2.default.input + type;
      if (inputClass) {
        clss += " " + inputClass;
      }
      if (disabled) {
        clss += " " + _WFCss2.default.disabled;
      }
      clss += " input_" + name;
      return clss;
    }
  }], [{
    key: "getStatus",
    value: function getStatus(input) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var valid = input.props.valid;

      if (valid === false) {
        return _WFCss2.default.hasError;
      } else if (valid === true || value !== "") {
        return _WFCss2.default.isValid;
      }
    }
  }]);
  return WFInputString;
}(_react.Component);

// ------------------- //
// WF INPUT TEXT ------------------- //
// ------------------- //


var WFInputText = function (_Component2) {
  (0, _inherits3.default)(WFInputText, _Component2);

  function WFInputText() {
    (0, _classCallCheck3.default)(this, WFInputText);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputText.__proto__ || (0, _getPrototypeOf2.default)(WFInputText)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputText, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(WFInputString, (0, _extends3.default)({}, this.props, {
        type: _WFInputTypes.INPUT_TEXT
      }));
    }
  }]);
  return WFInputText;
}(_react.Component);

// ------------------- //
// WF INPUT PASSWORD ------------------- //
// ------------------- //


var WFInputPassword = function (_Component3) {
  (0, _inherits3.default)(WFInputPassword, _Component3);

  function WFInputPassword() {
    (0, _classCallCheck3.default)(this, WFInputPassword);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputPassword.__proto__ || (0, _getPrototypeOf2.default)(WFInputPassword)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputPassword, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(WFInputString, (0, _extends3.default)({}, this.props, {
        type: _WFInputTypes.INPUT_PASSWORD
      }));
    }
  }]);
  return WFInputPassword;
}(_react.Component);

// ------------------- //
// WF INPUT EMAIL ------------------- //
// ------------------- //


var WFInputEmail = function (_Component4) {
  (0, _inherits3.default)(WFInputEmail, _Component4);

  function WFInputEmail() {
    (0, _classCallCheck3.default)(this, WFInputEmail);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputEmail.__proto__ || (0, _getPrototypeOf2.default)(WFInputEmail)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputEmail, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(WFInputString, (0, _extends3.default)({}, this.props, {
        type: _WFInputTypes.INPUT_EMAIL
      }));
    }
  }]);
  return WFInputEmail;
}(_react.Component);

// ------------------- //
// WF INPUT TEL ------------------- //
// ------------------- //


var WFInputTel = function (_Component5) {
  (0, _inherits3.default)(WFInputTel, _Component5);

  function WFInputTel() {
    (0, _classCallCheck3.default)(this, WFInputTel);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputTel.__proto__ || (0, _getPrototypeOf2.default)(WFInputTel)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputTel, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(WFInputString, (0, _extends3.default)({}, this.props, {
        type: _WFInputTypes.INPUT_TEL
      }));
    }
  }]);
  return WFInputTel;
}(_react.Component);

// ------------------- //
// WF INPUT URL ------------------- //
// ------------------- //


var WFInputUrl = function (_Component6) {
  (0, _inherits3.default)(WFInputUrl, _Component6);

  function WFInputUrl() {
    (0, _classCallCheck3.default)(this, WFInputUrl);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputUrl.__proto__ || (0, _getPrototypeOf2.default)(WFInputUrl)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputUrl, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(WFInputString, (0, _extends3.default)({}, this.props, {
        type: _WFInputTypes.INPUT_URL
      }));
    }
  }]);
  return WFInputUrl;
}(_react.Component);

// ------------------- //


exports.default = WFInputString;
exports.WFInputText = WFInputText;
exports.WFInputPassword = WFInputPassword;
exports.WFInputEmail = WFInputEmail;
exports.WFInputTel = WFInputTel;
exports.WFInputUrl = WFInputUrl;
// ------------------- //

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSameDay = isSameDay;
exports.isSameUtcOffset = isSameUtcOffset;
exports.isDayInRange = isDayInRange;
exports.isDayDisabled = isDayDisabled;
exports.allDaysDisabledBefore = allDaysDisabledBefore;
exports.allDaysDisabledAfter = allDaysDisabledAfter;
exports.getEffectiveMinDate = getEffectiveMinDate;
exports.getEffectiveMaxDate = getEffectiveMaxDate;

var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isSameDay(moment1, moment2) {
  if (moment1 && moment2) {
    return moment1.isSame(moment2, 'day');
  } else {
    return !moment1 && !moment2;
  }
}

function isSameUtcOffset(moment1, moment2) {
  if (moment1 && moment2) {
    return moment1.utcOffset() === moment2.utcOffset();
  } else {
    return !moment1 && !moment2;
  }
}

function isDayInRange(day, startDate, endDate) {
  var before = startDate.clone().startOf('day').subtract(1, 'seconds');
  var after = endDate.clone().startOf('day').add(1, 'seconds');
  return day.clone().startOf('day').isBetween(before, after);
}

function isDayDisabled(day) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      excludeDates = _ref.excludeDates,
      includeDates = _ref.includeDates,
      filterDate = _ref.filterDate;

  return minDate && day.isBefore(minDate, 'day') || maxDate && day.isAfter(maxDate, 'day') || excludeDates && excludeDates.some(function (excludeDate) {
    return isSameDay(day, excludeDate);
  }) || includeDates && !includeDates.some(function (includeDate) {
    return isSameDay(day, includeDate);
  }) || filterDate && !filterDate(day.clone()) || false;
}

function allDaysDisabledBefore(day, unit) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      minDate = _ref2.minDate,
      includeDates = _ref2.includeDates;

  var dateBefore = day.clone().subtract(1, unit);
  return minDate && dateBefore.isBefore(minDate, unit) || includeDates && includeDates.every(function (includeDate) {
    return dateBefore.isBefore(includeDate, unit);
  }) || false;
}

function allDaysDisabledAfter(day, unit) {
  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      maxDate = _ref3.maxDate,
      includeDates = _ref3.includeDates;

  var dateAfter = day.clone().add(1, unit);
  return maxDate && dateAfter.isAfter(maxDate, unit) || includeDates && includeDates.every(function (includeDate) {
    return dateAfter.isAfter(includeDate, unit);
  }) || false;
}

function getEffectiveMinDate(_ref4) {
  var minDate = _ref4.minDate,
      includeDates = _ref4.includeDates;

  if (includeDates && minDate) {
    return _WFMoment2.default.min(includeDates.filter(function (includeDate) {
      return minDate.isSameOrBefore(includeDate, 'day');
    }));
  } else if (includeDates) {
    return _WFMoment2.default.min(includeDates);
  } else {
    return minDate;
  }
}

function getEffectiveMaxDate(_ref5) {
  var maxDate = _ref5.maxDate,
      includeDates = _ref5.includeDates;

  if (includeDates && maxDate) {
    return _WFMoment2.default.max(includeDates.filter(function (includeDate) {
      return maxDate.isSameOrAfter(includeDate, 'day');
    }));
  } else if (includeDates) {
    return _WFMoment2.default.max(includeDates);
  } else {
    return maxDate;
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WF_OPTION_GROUP = exports.WF_OPTION_GROUP = "option-group";
var WF_OPTION = exports.WF_OPTION = "option";
var WF_BAOBAB_TREE = exports.WF_BAOBAB_TREE = "tree";
var WF_BAOBAB_BRANCH = exports.WF_BAOBAB_BRANCH = "branch";
var WF_BAOBAB_OPTION = exports.WF_BAOBAB_OPTION = "option";
var WF_BAOBAB_PRIV_OPTION = exports.WF_BAOBAB_PRIV_OPTION = "is_private";

var WF_BAOBAB_PARENT_ID = exports.WF_BAOBAB_PARENT_ID = "parent_id";
var WF_BAOBAB_OPTIONGROUP_ID = exports.WF_BAOBAB_OPTIONGROUP_ID = "wf_optiongroup_id";

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var APP_DEV = exports.APP_DEV = true,
    APP_DEBUG = exports.APP_DEBUG = false,

/*
APP_BASE_URL			= `${__WF__.BASE_URL || window.location.origin}/index.php`, //"http://localhost:9000/index.php",
*/
// -------------------- //

APP_ROOT_NAME = exports.APP_ROOT_NAME = "WFRoot",
    APP_ROOT_VERSION = exports.APP_ROOT_VERSION = "1.0.0",


// -------------------- //

APP_ADMIN_NAME = exports.APP_ADMIN_NAME = "WFAdmin",
    APP_ADMIN_VERSION = exports.APP_ADMIN_VERSION = "2.0.0-dev-2",
    APP_ADMIN_DOM_NODE = exports.APP_ADMIN_DOM_NODE = "#wf-admin",


// -------------------- //

TYPE_HIDDEN = exports.TYPE_HIDDEN = "hidden",
    TYPE_ADMIN = exports.TYPE_ADMIN = "admin",
    TYPE_STRING = exports.TYPE_STRING = "string",
    TYPE_TEXT = exports.TYPE_TEXT = "text",
    TYPE_DATE = exports.TYPE_DATE = "date",
    TYPE_JSON = exports.TYPE_JSON = "json",
    TYPE_NUMBER = exports.TYPE_NUMBER = "number",
    TYPE_BOOLEAN = exports.TYPE_BOOLEAN = "boolean",
    TYPE_OBJECT = exports.TYPE_OBJECT = "object",
    TYPE_ARRAY = exports.TYPE_ARRAY = "array",
    TYPE_SELECT_SINGLE = exports.TYPE_SELECT_SINGLE = "select-single",
    TYPE_SELECT_MULITPLE = exports.TYPE_SELECT_MULITPLE = "select-multiple",
    TYPE_COLLECTION = exports.TYPE_COLLECTION = "collection",
    TYPE_PRODUCT = exports.TYPE_PRODUCT = "product",
    TYPE_MP4 = exports.TYPE_MP4 = "video/mp4",
    TYPE_WEBM = exports.TYPE_WEBM = "video/webm",
    TYPE_OGV = exports.TYPE_OGV = "video/ogv",


// -------------------- //

INPUT_TEXT = exports.INPUT_TEXT = "text",
    INPUT_DATE = exports.INPUT_DATE = "date",
    INPUT_EMAIL = exports.INPUT_EMAIL = "email",
    INPUT_NUMBER = exports.INPUT_NUMBER = "number",
    INPUT_TEL = exports.INPUT_TEL = "tel",
    INPUT_URL = exports.INPUT_URL = "url",
    INPUT_TEXTAREA = exports.INPUT_TEXTAREA = "textarea",
    INPUT_SELECT = exports.INPUT_SELECT = "select",
    INPUT_CHECKBOX = exports.INPUT_CHECKBOX = "checkbox",
    INPUT_RADIO_BUTTON = exports.INPUT_RADIO_BUTTON = "radio-button",
    INPUT_FILE = exports.INPUT_FILE = "file",
    INPUT_RANGE = exports.INPUT_RANGE = "range",
    INPUT_COLOR = exports.INPUT_COLOR = "color",
    INPUT_MEDIA = exports.INPUT_MEDIA = "media",
    INPUT_GRID = exports.INPUT_GRID = "grid",
    INPUT_PANEL = exports.INPUT_PANEL = "panel",


// -------------------- //

ACTION_DELETE = exports.ACTION_DELETE = "delete",
    ACTION_CANCEL = exports.ACTION_CANCEL = "cancel",
    ACTION_SAVE = exports.ACTION_SAVE = "save",
    ACTION_PUBLISH = exports.ACTION_PUBLISH = "publish",
    ACTION_UNPUBLISH = exports.ACTION_UNPUBLISH = "unpubish",


// -------------------- //

HEADER = exports.HEADER = "header",
    MAIN = exports.MAIN = "main",
    FOOTER = exports.FOOTER = "footer",
    BODY = exports.BODY = "body",
    SIDEBAR = exports.SIDEBAR = "sidebar",
    CURRENT = exports.CURRENT = "current",
    TAB = exports.TAB = "tab",
    TABS = exports.TABS = "tabs",
    TABS_CUSTOM = exports.TABS_CUSTOM = "tabs_custom",


// -------------------- //

SELECT_CLASS = exports.SELECT_CLASS = "selected",
    SELECT_BY_ID = exports.SELECT_BY_ID = "id",
    SELECT_BY_NAME = exports.SELECT_BY_NAME = "name",
    SELECT_BY_LABEL = exports.SELECT_BY_LABEL = "label",
    BODY_H = exports.BODY_H = 101,
    BODY_AND_TABS_H = exports.BODY_AND_TABS_H = 134,
    MODAL_BODY_H = exports.MODAL_BODY_H = 450,
    //490,//590,
PANEL_BODY_H = exports.PANEL_BODY_H = 175,


// -------------------- //

TRUE = exports.TRUE = true,
    FALSE = exports.FALSE = false,
    NULL = exports.NULL = null,


// -------------------- //

VALIDATOR_BOOLEAN = exports.VALIDATOR_BOOLEAN = "boolean",
    VALIDATOR_POINT = exports.VALIDATOR_POINT = "point",
    VALIDATOR_PRICE = exports.VALIDATOR_PRICE = "price",


// -------------------- //

OVERLAY_TRANSPARENT = exports.OVERLAY_TRANSPARENT = "transparent",
    OVERLAY_DARK = exports.OVERLAY_DARK = "rgba(60,60,60,0.8)",


// -------------------- //

CELL_DATE = exports.CELL_DATE = "date",
    CELL_FILE = exports.CELL_FILE = "file",
    CELL_NUMBER = exports.CELL_NUMBER = "number",
    CELL_STRING = exports.CELL_STRING = "string",
    CELL_TEXT = exports.CELL_TEXT = "text",
    CELL_SELECT = exports.CELL_SELECT = "select",
    CELL_SHORTCODE = exports.CELL_SHORTCODE = "shortcode",
    CELL_ACTION = exports.CELL_ACTION = "action",
    CELL_ACTION_CHECK = exports.CELL_ACTION_CHECK = "check",
    CELL_ACTION_DELETE = exports.CELL_ACTION_DELETE = "delete",
    CELL_ACTION_ADD = exports.CELL_ACTION_ADD = "add",
    CELL_ACTION_OPEN = exports.CELL_ACTION_OPEN = "open",
    CELL_ACTION_EDIT = exports.CELL_ACTION_EDIT = "edit",
    CELL_ACTION_CUSTOM = exports.CELL_ACTION_CUSTOM = "custom",
    CELL_ACTION_EMPTY = exports.CELL_ACTION_EMPTY = "empty",
    CELL_ACTION_NULL = exports.CELL_ACTION_NULL = "null",


// -------------------- //

PAGES_ADMIN = exports.PAGES_ADMIN = "pages",


// -------------------- //
/*
PAGE_MATRICE 				= "matrice",
PAGE_HOME 					= "home",
PAGE_EDITOR 				= "editor",
*/
// -------------------- //
/*
TAB_MATRICE 				= "matrice",
TAB_HOME 					= "home",
TAB_EDITOR 					= "editor",
TAB_ANALYTICS 				= "analytics",

TAB_HOME_FORM 				= "forms",
TAB_HOME_BAOBAB 			= "baobab",
TAB_HOME_SETTING 			= "setting",
TAB_HOME_FORM_LABEL			= "All Forms",
TAB_HOME_BAOBAB_LABEL		= "Baobab",
TAB_HOME_SETTING_LABEL		= "Setting",

TAB_EDITOR_STUDIO  			= "studio",
TAB_EDITOR_ACTIONS  		= "actions",
TAB_EDITOR_ENTRIES  		= "entries",
TAB_EDITOR_ANALYTICS 		= "analytics",
TAB_EDITOR_STUDIO_LABEL 	= "Studio",
TAB_EDITOR_ACTIONS_LABEL 	= "Actions",
TAB_EDITOR_ENTRIES_LABEL 	= "Entries",
TAB_EDITOR_ANALYTICS_LABEL 	= "Analytics",

TAB_ANALYTICS_FORM 			= "form",
TAB_ANALYTICS_FIELDS 		= "fields",
TAB_ANALYTICS_FORM_LABEL 	= "Form Analytics",
TAB_ANALYTICS_FIELDS_LABEL 	= "Fields Analytics",
*/
// -------------------- //

PANEL_ADMIN = exports.PANEL_ADMIN = "panels",
    PANEL_ADMIN_BAOBAB = exports.PANEL_ADMIN_BAOBAB = "baobab",
    PANEL_ADMIN_BAOBAB_LABEL = exports.PANEL_ADMIN_BAOBAB_LABEL = "Baobab Explorer",
    PANEL_ADMIN_BAOBAB_OPTION = exports.PANEL_ADMIN_BAOBAB_OPTION = "baobab_option",
    PANEL_ADMIN_BAOBAB_OPTION_LABEL = exports.PANEL_ADMIN_BAOBAB_OPTION_LABEL = "Option Archive",


// -------------------- //
// -------------------- //
// -------------------- //

WF_SLOGAN = exports.WF_SLOGAN = "WordPress Forms Creative Suite",
    WF_VERSION_LITE = exports.WF_VERSION_LITE = "Version Lite 1.5.0",
    WF_VERSION_PREMIUM = exports.WF_VERSION_PREMIUM = "Version Premium 1.5.0",


// -------------------- //

CLASSIC_FIELD = exports.CLASSIC_FIELD = "classic-field",
    CLASSIC_CONTENT = exports.CLASSIC_CONTENT = "classic-content",
    EXTRA_FIELD = exports.EXTRA_FIELD = "extra-field",
    EXTRA_CONTENT = exports.EXTRA_CONTENT = "extra-content",


// -------------------- //

DEFAULT_COL_CONFIG = exports.DEFAULT_COL_CONFIG = {
	lg: 12,
	md: 12,
	sm: 12,
	xs: 12
},


// -------------------- //

PAGINATION_TITLE = exports.PAGINATION_TITLE = {
	first: 'First',
	prev: "\xAB",
	prevSet: '...',
	nextSet: '...',
	next: "\xBB",
	last: 'Last'
};

// -------------------- //

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF CELL ICON ------------------- //

// ------------------- //

var WFCellColor = function (_Component) {
    (0, _inherits3.default)(WFCellColor, _Component);

    function WFCellColor() {
        (0, _classCallCheck3.default)(this, WFCellColor);
        return (0, _possibleConstructorReturn3.default)(this, (WFCellColor.__proto__ || (0, _getPrototypeOf2.default)(WFCellColor)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFCellColor, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$color = _props.color,
                color = _props$color === undefined ? "" : _props$color,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible;

            if (!visible || !color || color === null || color === "") {
                return false;
            } else {
                return _react2.default.createElement(
                    "div",
                    { className: "wf--cell wf--cell-color" },
                    _react2.default.createElement("span", { className: "wf-e-color", style: { background: color } })
                );
            }
        }
    }]);
    return WFCellColor;
}(_react.Component);

// ------------------- //

exports.default = WFCellColor;

// ------------------- //

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF CELL CONTENT ------------------- //

// ------------------- //

var WFCellContent = function (_Component) {
    (0, _inherits3.default)(WFCellContent, _Component);

    function WFCellContent() {
        (0, _classCallCheck3.default)(this, WFCellContent);
        return (0, _possibleConstructorReturn3.default)(this, (WFCellContent.__proto__ || (0, _getPrototypeOf2.default)(WFCellContent)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFCellContent, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$label = _props.label,
                label = _props$label === undefined ? "" : _props$label,
                _props$legend = _props.legend,
                legend = _props$legend === undefined ? "" : _props$legend,
                _props$styles = _props.styles,
                styles = _props$styles === undefined ? {} : _props$styles,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible;

            if (!visible) {
                return false;
            } else {
                var _styles$optionLabel = styles.optionLabel,
                    optionLabel = _styles$optionLabel === undefined ? {} : _styles$optionLabel,
                    _styles$optionLegend = styles.optionLegend,
                    optionLegend = _styles$optionLegend === undefined ? {} : _styles$optionLegend;

                return _react2.default.createElement(
                    "div",
                    { className: "wf--cell wf--cell-content" },
                    _react2.default.createElement(
                        _WFText2.default,
                        { style: optionLabel, className: "wf-option-label" },
                        label
                    ),
                    _react2.default.createElement(
                        _WFText2.default,
                        { style: optionLegend, className: "wf-option-legend" },
                        legend
                    )
                );
            }
        }
    }]);
    return WFCellContent;
}(_react.Component);

// ------------------- //

exports.default = WFCellContent;

// ------------------- //

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFImg = __webpack_require__(56);

var _WFImg2 = _interopRequireDefault(_WFImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF CELL ICON ------------------- //

// ------------------- //

var WFCellIcon = function (_Component) {
    (0, _inherits3.default)(WFCellIcon, _Component);

    function WFCellIcon() {
        (0, _classCallCheck3.default)(this, WFCellIcon);
        return (0, _possibleConstructorReturn3.default)(this, (WFCellIcon.__proto__ || (0, _getPrototypeOf2.default)(WFCellIcon)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFCellIcon, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$image = _props.image,
                image = _props$image === undefined ? "" : _props$image,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible;

            if (!visible || !image || image === null || image === "") {
                return false;
            } else {
                return _react2.default.createElement(
                    "div",
                    { className: "wf--cell wf--cell-icon" },
                    _react2.default.createElement(_WFImg2.default, { src: image })
                );
            }
        }
    }]);
    return WFCellIcon;
}(_react.Component);

// ------------------- //

exports.default = WFCellIcon;

// ------------------- //

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFImg = __webpack_require__(56);

var _WFImg2 = _interopRequireDefault(_WFImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF CELL IMG ------------------- //

// ------------------- //

var WFCellImg = function (_Component) {
    (0, _inherits3.default)(WFCellImg, _Component);

    function WFCellImg() {
        (0, _classCallCheck3.default)(this, WFCellImg);
        return (0, _possibleConstructorReturn3.default)(this, (WFCellImg.__proto__ || (0, _getPrototypeOf2.default)(WFCellImg)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFCellImg, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$image = _props.image,
                image = _props$image === undefined ? "" : _props$image,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible;

            if (!visible || !image || image === null || image === "") {
                return false;
            } else {
                var h = "auto";
                if (style.hasOwnProperty('height')) {
                    h = style.height;
                }
                return _react2.default.createElement(
                    "div",
                    { className: "wf--cell wf--cell-img",
                        style: {
                            height: h
                        }
                    },
                    _react2.default.createElement(_WFImg2.default, { src: image, style: style })
                );
            }
        }
    }]);
    return WFCellImg;
}(_react.Component);

// ------------------- //

exports.default = WFCellImg;

// ------------------- //

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFIcon = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF CELL STATE ------------------- //

// ------------------- //

var WFCellState = function (_Component) {
    (0, _inherits3.default)(WFCellState, _Component);

    function WFCellState() {
        (0, _classCallCheck3.default)(this, WFCellState);
        return (0, _possibleConstructorReturn3.default)(this, (WFCellState.__proto__ || (0, _getPrototypeOf2.default)(WFCellState)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFCellState, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$checked = _props.checked,
                checked = _props$checked === undefined ? false : _props$checked,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible,
                _props$hiddenNull = _props.hiddenNull,
                hiddenNull = _props$hiddenNull === undefined ? false : _props$hiddenNull;

            if (!visible) {
                return false;
            } else {
                var displayIcon = true;
                if (hiddenNull && checked === false) {
                    displayIcon = false;
                }
                return _react2.default.createElement(
                    "div",
                    { className: "wf--cell wf--cell-state" },
                    _react2.default.createElement(_WFIcon.WFICheck2, { visible: displayIcon, checked: checked })
                );
            }
        }
    }]);
    return WFCellState;
}(_react.Component);

// ------------------- //

exports.default = WFCellState;

// ------------------- //

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _ClipLoader = __webpack_require__(306);

var _ClipLoader2 = _interopRequireDefault(_ClipLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF LOADER ------------------- //

// ------------------- //

var WFLoader = function (_Component) {
    (0, _inherits3.default)(WFLoader, _Component);

    function WFLoader() {
        (0, _classCallCheck3.default)(this, WFLoader);
        return (0, _possibleConstructorReturn3.default)(this, (WFLoader.__proto__ || (0, _getPrototypeOf2.default)(WFLoader)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFLoader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$active = _props.active,
                active = _props$active === undefined ? true : _props$active,
                _props$color = _props.color,
                color = _props$color === undefined ? "#9AFF68" : _props$color,
                _props$className = _props.className,
                className = _props$className === undefined ? "" : _props$className,
                _props$children = _props.children,
                children = _props$children === undefined ? null : _props$children;

            if (!active && children) return children;
            return _react2.default.createElement(
                'wf-loader',
                null,
                _react2.default.createElement(_ClipLoader2.default, { color: color, className: className })
            );
        }
    }]);
    return WFLoader;
}(_react.Component);

// ------------------- //

exports.default = WFLoader;

// ------------------- //

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Mobile = __webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASSIC = "classic";
var EXTRA = "extra";
var WFTHEME = "wf-wonderform-theme";

var WFormConditionHelper = function () {
  function WFormConditionHelper() {
    (0, _classCallCheck3.default)(this, WFormConditionHelper);
  }

  (0, _createClass3.default)(WFormConditionHelper, null, [{
    key: "fieldIsHidden",

    /**
     * Check field is hidden by name
     * @param wfCpt
     * @param fieldName string
     * @return boolean
     */
    value: function fieldIsHidden(wfCpt, fieldName) {
      var _wfCpt$state$fieldsHi = wfCpt.state.fieldsHidden,
          fieldsHidden = _wfCpt$state$fieldsHi === undefined ? [] : _wfCpt$state$fieldsHi;

      return fieldsHidden.includes(fieldName);
    }

    /**
     * Check field is disable by name
     * @param wfCpt
     * @param fieldName string
     * @return boolean
     */

  }, {
    key: "fieldIsDisable",
    value: function fieldIsDisable(wfCpt, fieldName) {
      var _wfCpt$state$fieldsDi = wfCpt.state.fieldsDisable,
          fieldsDisable = _wfCpt$state$fieldsDi === undefined ? [] : _wfCpt$state$fieldsDi;

      return fieldsDisable.includes(fieldName);
    }

    /**
     * Check step.type is extra
     * @param wfCpt
     * @return boolean
     */

  }, {
    key: "isExtraContent",
    value: function isExtraContent(wfCpt) {
      var _wfCpt$state = wfCpt.state,
          _wfCpt$state$hasTheme = _wfCpt$state.hasTheme,
          hasTheme = _wfCpt$state$hasTheme === undefined ? "" : _wfCpt$state$hasTheme,
          _wfCpt$state$currentS = _wfCpt$state.currentStepValue,
          currentStepValue = _wfCpt$state$currentS === undefined ? {} : _wfCpt$state$currentS;
      var _currentStepValue$typ = currentStepValue.type,
          type = _currentStepValue$typ === undefined ? CLASSIC : _currentStepValue$typ;

      if (hasTheme === WFTHEME) {
        if (type === EXTRA) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }]);
  return WFormConditionHelper;
}();

exports.default = WFormConditionHelper;

// WFormConditionHelper.isExtraContent(this)

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * API MODULE                        // ------------------- //
 */
var WF_PREFIX = exports.WF_PREFIX = __WF__.SLUG || "wf";
var WF_DOMAIN_URL = exports.WF_DOMAIN_URL = "http://www.wonderform.net";
var WF_ADMIN_MODULE_NAME = exports.WF_ADMIN_MODULE_NAME = 'wfc';
var WF_CUSTOM_MODULE_NAME = exports.WF_CUSTOM_MODULE_NAME = 'custom';
/**
 * CLIENT ACTIONS                    // ------------------- //
 */
var WF_CLIENT_FIND = exports.WF_CLIENT_FIND = 1;
var WF_CLIENT_FIND_BY = exports.WF_CLIENT_FIND_BY = 2;
var WF_CLIENT_FIND_BY_ID = exports.WF_CLIENT_FIND_BY_ID = 3;
var WF_CLIENT_VIEW = exports.WF_CLIENT_VIEW = 4;
var WF_CLIENT_SAVE = exports.WF_CLIENT_SAVE = 5;
var WF_CLIENT_DELETE = exports.WF_CLIENT_DELETE = 6;
var WF_CLIENT_PUBLISH = exports.WF_CLIENT_PUBLISH = 7;
var WF_CLIENT_UNPUBLISH = exports.WF_CLIENT_UNPUBLISH = 8;
var WF_CLIENT_EXPORT_CSV = exports.WF_CLIENT_EXPORT_CSV = 9;
var WF_CLIENT_IMPORT_CSV = exports.WF_CLIENT_IMPORT_CSV = 10;
var WF_CLIENT_CATEGORY_GROUP = exports.WF_CLIENT_CATEGORY_GROUP = 11;
var WF_CLIENT_CATEGORY_GROUP_LEAFS = exports.WF_CLIENT_CATEGORY_GROUP_LEAFS = 12;
var WF_CLIENT_CHECK_LICENSE = exports.WF_CLIENT_CHECK_LICENSE = 13;
var WF_CLIENT_FIND_ALL_CUSTOM_FORMS = exports.WF_CLIENT_FIND_ALL_CUSTOM_FORMS = 14;
var WF_CLIENT_FIND_FORMCONFIG_BY_ID = exports.WF_CLIENT_FIND_FORMCONFIG_BY_ID = 15;
var WF_CLIENT_FIND_FORMCONFIG_BY_NAME = exports.WF_CLIENT_FIND_FORMCONFIG_BY_NAME = 16;
var WF_CLIENT_FIND_OPTIONENTRY_BY_ID = exports.WF_CLIENT_FIND_OPTIONENTRY_BY_ID = 17;
var WF_CLIENT_FIND_OPTIONENTRIES = exports.WF_CLIENT_FIND_OPTIONENTRIES = 18;
var WF_CLIENT_DEL_OPTIONENTRY = exports.WF_CLIENT_DEL_OPTIONENTRY = 19;
var WF_CLIENT_OPTIONENTRY_INCR = exports.WF_CLIENT_OPTIONENTRY_INCR = 20;
var WF_CLIENT_OPTIONENTRY_SET = exports.WF_CLIENT_OPTIONENTRY_SET = 21;
var WF_CLIENT_FIND_FORMSTATS_BY_DATE = exports.WF_CLIENT_FIND_FORMSTATS_BY_DATE = 22;
var WF_CLIENT_FIND_FORMSTATS_BY_YEAR = exports.WF_CLIENT_FIND_FORMSTATS_BY_YEAR = 23;
var WF_CLIENT_FIND_FORMSTATS_BY_YEAR_MONTH = exports.WF_CLIENT_FIND_FORMSTATS_BY_YEAR_MONTH = 24;
var WF_CLIENT_FIND_FORMSTATS_BY_YEAR_WEEK = exports.WF_CLIENT_FIND_FORMSTATS_BY_YEAR_WEEK = 25;
var WF_CLIENT_FORMSTATS_INCR_VIEW_COUNT = exports.WF_CLIENT_FORMSTATS_INCR_VIEW_COUNT = 26;
var WF_CLIENT_FORMSTATS_INCR_COMPLETED_COUNT = exports.WF_CLIENT_FORMSTATS_INCR_COMPLETED_COUNT = 27;
var WF_CLIENT_FORMSTATS_INCR_UNCOMPLETED_COUNT = exports.WF_CLIENT_FORMSTATS_INCR_UNCOMPLETED_COUNT = 28;

/**
 * HEADER ACCEPT                     // ------------------- //
 */
var HEADER_ACCEPT_JSON = exports.HEADER_ACCEPT_JSON = 'application/json';
var HEADER_ACCEPT_FORM_DATA = exports.HEADER_ACCEPT_FORM_DATA = 'multipart/form-data';
/**
 * HTTP RESULT STATUS                // ------------------- //
 */
var STATUS_404 = exports.STATUS_404 = 404;
var STATUS_MAINTENANCE = exports.STATUS_MAINTENANCE = 403;
/**
 * QUERY STRING                      // ------------------- //
 */
var QUERY_SEARCH = exports.QUERY_SEARCH = "?";
var QUERY_ORDER_ASC = exports.QUERY_ORDER_ASC = "asc";
var QUERY_ORDER_DESC = exports.QUERY_ORDER_DESC = "desc";
var QUERY_PARAM_START = exports.QUERY_PARAM_START = "wf_start";
var QUERY_PARAM_LIMIT = exports.QUERY_PARAM_LIMIT = "wf_limit";
var QUERY_PARAM_SEARCH = exports.QUERY_PARAM_SEARCH = "search?";
var QUERY_PARAM_ORDER_BY = exports.QUERY_PARAM_ORDER_BY = "wf_orderby";
var QUERY_PARAM_ORDER_BY_DIRECTION = exports.QUERY_PARAM_ORDER_BY_DIRECTION = "wf_orderby_direction";
/**
 * API FORM                          // ------------------- //
 */
var WF_FORM = exports.WF_FORM = "form";
var WF_FORM_CONFIG = exports.WF_FORM_CONFIG = "form-config";
var WF_OPTION = exports.WF_OPTION = "option";
var WF_OPTION_GROUP = exports.WF_OPTION_GROUP = "option-group";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Lodash = __webpack_require__(6);

var _WFValueTypes = __webpack_require__(11);

var _WFType2 = __webpack_require__(49);

var _WFType3 = _interopRequireDefault(_WFType2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS BOOLEAN MANAGER ------------------- //

// ------------------- //
var WFBoolean = function (_WFType) {
  (0, _inherits3.default)(WFBoolean, _WFType);

  /**
   * Constructor
   */
  function WFBoolean() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFBoolean);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFBoolean.__proto__ || (0, _getPrototypeOf2.default)(WFBoolean)).call(this, _WFValueTypes.WF_BOOLEAN_VALUE));

    var _config$value = config.value,
        value = _config$value === undefined ? false : _config$value;

    _this.booleanValue = false;
    _this.setValue(value);
    return _this;
  }

  /**
   * Test if obj is instance Of this class
   * @param obj the object to test
   * @return boolean
   */


  (0, _createClass3.default)(WFBoolean, [{
    key: 'get',


    /**
     * Get value
     * @return boolean
     */
    value: function get() {
      return this.booleanValue;
    }
  }, {
    key: 'getValue',
    value: function getValue(val) {
      this.get();
    }

    /**
     * Set value
     * @param val boolean
     */

  }, {
    key: 'set',
    value: function set(val) {
      var value = null;
      if ((0, _Lodash.isBoolean)(val)) {
        value = val;
      } else if (val == null || val == 0) {
        value = false;
      } else if (val == 1) {
        value = true;
      }
      this.booleanValue = value;
    }
  }, {
    key: 'setValue',
    value: function setValue(val) {
      this.set(val);
    }

    /**
     * Toggle value state
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      this.set(!this.get());
    }

    /**
     * Alias of isTrue
     * @return boolean
     */

  }, {
    key: 'isActive',
    value: function isActive() {
      return this.isTrue();
    }

    /**
     * Check value is true
     * @return boolean
     */

  }, {
    key: 'isTrue',
    value: function isTrue() {
      return this.get() === true;
    }

    /**
     * Check value is true
     * @return boolean
     */

  }, {
    key: 'isFalse',
    value: function isFalse() {
      return this.get() === false;
    }

    /**
     * clear value
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.booleanValue = false;
      if (this.input) {
        this.input.setState((0, _defineProperty3.default)({}, this.getKey(), this.get()));
      }
    }

    /**
     * Show current value in console
     */

  }, {
    key: 'toConsole',
    value: function toConsole() {
      console.log("");
      console.warn('WFBoolean');
      console.log('value =>', this.booleanValue);
      console.log("");
    }
  }], [{
    key: 'instanceOf',
    value: function instanceOf(obj) {
      return obj instanceof WFBoolean;
    }
  }]);
  return WFBoolean;
}(_WFType3.default);
// ------------------- //


exports.default = WFBoolean;
// ------------------- //

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

// SLUGIFY ---------------- //

exports.default = function () {
	var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
	var sufix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

	return value && value.length > limit ? "" + value.toString().substring(0, limit) + sufix : value;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

// MODILE ---------------- //

// ------------------- //

var userAgent = navigator.userAgent || navigator.vendor || window.opera;

// ------------------- //

var isMobile = exports.isMobile = function isMobile() {
	return (/Mobi/.test(navigator.userAgent)
	);
},


// ----------------- //

isMobileSize = exports.isMobileSize = function isMobileSize() {
	return window.innerWidth < 768;
},


// ----------------- //

isWindowPhone = exports.isWindowPhone = function isWindowPhone() {
	return (/windows phone/i.test(userAgent)
	);
},


// ----------------- //

isAndroidPhone = exports.isAndroidPhone = function isAndroidPhone() {
	return (/android/i.test(userAgent)
	);
},


// ----------------- //

isIOSPhone = exports.isIOSPhone = function isIOSPhone() {
	return (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
	);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFViewMgr = function () {
  function WFViewMgr() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFViewMgr);

    // todo remove 
    //this.isInit = false;
    this.components = {};
    this.observer = null;
    this.initialState = initialState;
    this.state = new _WFObject2.default();
    this.setState(initialState);
  }

  // STATE ------------ //

  /**
   * Check key in state
   */


  (0, _createClass3.default)(WFViewMgr, [{
    key: "has",
    value: function has(key) {
      return this.state.has(key);
    }

    /**
     * Get state
     */

  }, {
    key: "getState",
    value: function getState() {
      return this.state.getValue();
    }

    /**
     * Set state
     * set global state
     * update all components'state
     */

  }, {
    key: "setState",
    value: function setState(obj) {
      if ((0, _Lodash.isObject)(obj)) {
        this.state.set(obj);
        for (var x in this.components) {
          this.components[x].setState(obj);
        }
      }
    }

    /**
     * Restore initial state
     */

  }, {
    key: "resetState",
    value: function resetState() {
      var prevState = this.getState();
      for (var x in prevState) {
        if (this.initialState.hasOwnProperty(x)) {
          prevState[x] = this.initialState[x];
        } else {
          delete prevState[x];
        }
      }
      this.setState(prevState);
    }

    // OBSERVER ------------ //

    /**
     * Notify when state change
     */

  }, {
    key: "init",
    value: function init() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.call("init", args);
    }

    /**
     * Notify when state change
     */

  }, {
    key: "change",
    value: function change() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.call("change", args);
    }

    /**
     * Notify when state is ready
     */

  }, {
    key: "ready",
    value: function ready() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.call("ready", args);
    }

    /**
     * Set callback {change, ready}
     */

  }, {
    key: "setObserver",
    value: function setObserver(callbacks) {
      this.observer = callbacks;
    }

    /**
     * Do callback by name
     */

  }, {
    key: "call",
    value: function call(action) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.observer && this.observer.hasOwnProperty(action) && (0, _Lodash.isFunction)(this.observer[action])) {
        var call = this.observer[action];
        call(args);
      }
    }

    // LIFE CYCLE ------------ //

    /**
     * When the component mount set
     * set global state in component state
     */

  }, {
    key: "willMount",
    value: function willMount(c) {
      var id = c.displayName;
      if (!this.components.hasOwnProperty(id)) {
        c.setState(this.getState());
        this.components[id] = c;
      }
    }
    /**
     * When the component unmount unset
     */

  }, {
    key: "willUnMount",
    value: function willUnMount(c) {
      var id = c.displayName;
      if (this.components.hasOwnProperty(id)) {
        delete this.components[id];
      }
    }
    // ...

  }, {
    key: "didMount",
    value: function didMount() {}
  }]);
  return WFViewMgr;
}();

exports.default = WFViewMgr;

/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF ERROR ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-errors",
	error: "wf-error"
};

// ------------------- //

var WFError = function (_Component) {
	(0, _inherits3.default)(WFError, _Component);

	function WFError() {
		(0, _classCallCheck3.default)(this, WFError);
		return (0, _possibleConstructorReturn3.default)(this, (WFError.__proto__ || (0, _getPrototypeOf2.default)(WFError)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFError, [{
		key: "render",


		// ------------------- //

		value: function render() {
			var _props$errors = this.props.errors,
			    errors = _props$errors === undefined ? null : _props$errors;

			if (!errors || (0, _Lodash.isArray)(errors) && errors.length === 0) return false;
			return _react2.default.createElement(
				"wf-error",
				null,
				this.get(errors)
			);
		}

		// ------------------- //

	}, {
		key: "get",
		value: function get(errors) {
			if ((0, _Lodash.isArray)(errors)) return this.getErrors(errors);else if ((0, _Lodash.isString)(errors)) return this.getError(errors);else return false;
		}

		// SINGLE ------------------- //

	}, {
		key: "getError",
		value: function getError() {
			var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			if (!error) return false;
			return _react2.default.createElement(
				"span",
				{ key: i, className: classes.error },
				error
			);
		}

		// ARCHIVE ------------------- //

	}, {
		key: "getErrors",
		value: function getErrors() {
			var _this2 = this;

			var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			if (errors.length === 0) return false;
			return _react2.default.createElement(
				"div",
				{ className: classes.wrapper },
				errors.map(function (err, i) {
					return _this2.getError(err, i);
				})
			);
		}
	}]);
	return WFError;
}(_react.Component);

// ------------------- //

exports.default = WFError;

// ------------------- //

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactSortable = __webpack_require__(375);

var _WFScrollBars = __webpack_require__(39);

var _WFScrollBars2 = _interopRequireDefault(_WFScrollBars);

var _WFIcon = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF LIST ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-items",
	item: "item",
	active: "item-active",
	dragging: "item-dragging",
	sortable: "item item-sortable"
};

// ------------------- //

var WFListItem = function (_Component) {
	(0, _inherits3.default)(WFListItem, _Component);

	function WFListItem(props) {
		(0, _classCallCheck3.default)(this, WFListItem);

		var _this = (0, _possibleConstructorReturn3.default)(this, (WFListItem.__proto__ || (0, _getPrototypeOf2.default)(WFListItem)).call(this, props));

		_this.displayName = 'SortableListItem';
		return _this;
	}

	(0, _createClass3.default)(WFListItem, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				(0, _extends3.default)({
					id: 'wf-item-' + this.props.sortId,
					className: 'wf-item-sortable'
				}, this.props),
				this.props.children
			);
		}
	}]);
	return WFListItem;
}(_react.Component);

// ------------------- //

var WFSortableListItem = (0, _reactSortable.sortable)(WFListItem);

// ------------------- //

var WFList = function (_Component2) {
	(0, _inherits3.default)(WFList, _Component2);

	function WFList(props) {
		(0, _classCallCheck3.default)(this, WFList);

		var _this2 = (0, _possibleConstructorReturn3.default)(this, (WFList.__proto__ || (0, _getPrototypeOf2.default)(WFList)).call(this, props));

		_this2.state = {
			data: props.data,
			draggingIndex: null
		};
		return _this2;
	}

	// ------------------- //

	(0, _createClass3.default)(WFList, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    _props$visible = _props.visible,
			    visible = _props$visible === undefined ? true : _props$visible,
			    _props$sortable = _props.sortable,
			    sortable = _props$sortable === undefined ? false : _props$sortable,
			    _props$view = _props.view,
			    view = _props$view === undefined ? null : _props$view,
			    _props$className = _props.className,
			    className = _props$className === undefined ? "" : _props$className,
			    onSelect = _props.onSelect,
			    onClick = _props.onClick,
			    onReOrder = _props.onReOrder,
			    _props$selected = _props.selected,
			    selected = _props$selected === undefined ? [] : _props$selected,
			    _props$active = _props.active,
			    active = _props$active === undefined ? [] : _props$active,
			    _props$hiddenNotSelec = _props.hiddenNotSelected,
			    hiddenNotSelected = _props$hiddenNotSelec === undefined ? false : _props$hiddenNotSelec,
			    _props$rows = _props.rows,
			    rows = _props$rows === undefined ? [] : _props$rows;
			var _state = this.state,
			    data = _state.data,
			    draggingIndex = _state.draggingIndex;

			if (!visible || rows.length === 0 || !view) {
				return false;
			} else if (sortable) {
				var childProps = { className: 'myClass1DeTest' };
				return _react2.default.createElement(
					'wf-list',
					null,
					_react2.default.createElement(
						'div',
						{ className: className },
						data.items.map(function (item, i) {
							var isSelected = _this3.isSelected(item);
							var isActive = _this3.isActive(item);
							if (hiddenNotSelected && selected.length > 0 && !isSelected) {
								return false;
							}
							var childProps = {
								className: classes.sortable + ' ' + (i === draggingIndex ? classes.dragging : '') + ' ' + _this3.getRowState(item) + ' ' + (isActive ? classes.active : "")
							};
							return _react2.default.createElement(
								WFSortableListItem,
								{
									key: i,
									items: data.items,
									draggingIndex: draggingIndex,
									sortId: i,
									outline: 'list',
									childProps: childProps,
									updateState: function updateState(obj) {
										_this3.setState(obj);
										if (obj.hasOwnProperty("items")) {
											onReOrder(obj.items);
										}
									}
								},
								view(item, i, isSelected)
							);
						})
					)
				);
			} else {
				return _react2.default.createElement(
					'wf-list',
					null,
					_react2.default.createElement(
						'ul',
						{ className: className },
						rows.map(function (row, i) {
							var isSelected = _this3.isSelected(row);
							var isActive = _this3.isActive(row);
							if (hiddenNotSelected && selected.length > 0 && !isSelected) {
								return false;
							}
							return _react2.default.createElement(
								'li',
								{ key: i,
									onClick: function onClick() {
										return onSelect ? onSelect(row, i) : "";
									},
									className: classes.item + ' ' + _this3.getRowState(row) + ' ' + (isActive ? classes.active : "")
								},
								view(row, i, isSelected)
							);
						})
					)
				);
			}
		}

		// ------------------- //

	}, {
		key: 'isSelectable',
		value: function isSelectable(row) {
			var _props2 = this.props,
			    _props2$selectable = _props2.selectable,
			    selectable = _props2$selectable === undefined ? true : _props2$selectable,
			    _props2$selectableRow = _props2.selectableRows,
			    selectableRows = _props2$selectableRow === undefined ? [] : _props2$selectableRow,
			    _props2$selectedBy = _props2.selectedBy,
			    selectedBy = _props2$selectedBy === undefined ? "id" : _props2$selectedBy;

			if (!selectable) return true;
			return selectableRows.includes(row[selectedBy]);
		}

		// ------------------- //

	}, {
		key: 'isSelected',
		value: function isSelected(row) {
			var _props3 = this.props,
			    _props3$selected = _props3.selected,
			    selected = _props3$selected === undefined ? [] : _props3$selected,
			    _props3$selectedBy = _props3.selectedBy,
			    selectedBy = _props3$selectedBy === undefined ? "id" : _props3$selectedBy;

			return selected.includes(row[selectedBy]);
		}

		// ------------------- //

	}, {
		key: 'isActive',
		value: function isActive(row) {
			var _props4 = this.props,
			    _props4$active = _props4.active,
			    active = _props4$active === undefined ? [] : _props4$active,
			    _props4$activeBy = _props4.activeBy,
			    activeBy = _props4$activeBy === undefined ? "id" : _props4$activeBy;

			return active.includes(row[activeBy]);
		}

		// ------------------- //

	}, {
		key: 'getRowState',
		value: function getRowState(row) {
			var _row$className = row.className,
			    className = _row$className === undefined ? "" : _row$className;
			var _props5 = this.props,
			    _props5$selectedBy = _props5.selectedBy,
			    selectedBy = _props5$selectedBy === undefined ? "id" : _props5$selectedBy,
			    _props5$selectedClass = _props5.selectedClassName,
			    selectedClassName = _props5$selectedClass === undefined ? "selected" : _props5$selectedClass,
			    _props5$selectableCla = _props5.selectableClassName,
			    selectableClassName = _props5$selectableCla === undefined ? "selectable" : _props5$selectableCla,
			    _props5$rowsClassName = _props5.rowsClassName,
			    rowsClassName = _props5$rowsClassName === undefined ? "" : _props5$rowsClassName;

			return className + ' ' + rowsClassName + ' ' + (this.isSelectable(row) ? selectableClassName : "") + ' ' + (this.isSelected(row) ? selectedClassName : "");
		}

		// ------------------- //


		// COMPONENT LIFECYCLE ------------------- //


		// ------------------- //

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _nextProps$data = nextProps.data,
			    data = _nextProps$data === undefined ? false : _nextProps$data;
			var draggingIndex = this.state.draggingIndex;

			if (data && draggingIndex === null) {
				this.setState({
					data: data
				});
			}
		}
	}]);
	return WFList;
}(_react.Component);

// ------------------- //

exports.default = WFList;

// ------------------- //

/*
	<WFList
		view={(item,i) => {
			const { label="" } = item;
			return (
				<span className="item-content">
					<span className="item-marker"><span/></span>
					<span className="item-text">{label}</span>
				</span>
			)
		}}
		rows={[
			{ label:"View by Visitor", className:"wf-legend wf-legend-visitor" },
			{ label:"Form completed", className:"wf-legend wf-legend-completed" },
			{ label:"Form uncompleted", className:"wf-legend wf-legend-uncompleted" },
		]}
	/>

	<WFList
		className={"list-date list-years"}
		
		selected={[2016]}
		selectedBy={"label"}
		selectedClassName={"selected"}

		selectable={true}
		selectableRows={[2015,2016]}
		selectableClassName={"selectable"}
		
		view={(item,i) => {
			const { label="" } = item;
			return <span className="item-text">{label}</span>
		}}
		onSelect={(item) => {  
			console.log("hello world", item )
		}}
		rows={[
			{ label:2015 },
			{ label:2016 },
			{ label:2017 },
			{ label:2018 }
		]}
	/>

*/

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SEP ------------------- //

// ------------------- //

var classes = {
	wrapper: "sep"
};

// ------------------- //

var WFSep = function (_Component) {
	(0, _inherits3.default)(WFSep, _Component);

	function WFSep() {
		(0, _classCallCheck3.default)(this, WFSep);
		return (0, _possibleConstructorReturn3.default)(this, (WFSep.__proto__ || (0, _getPrototypeOf2.default)(WFSep)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFSep, [{
		key: "render",


		// ------------------- //

		value: function render() {
			var _props = this.props,
			    _props$className = _props.className,
			    className = _props$className === undefined ? "" : _props$className,
			    _props$type = _props.type,
			    type = _props$type === undefined ? "" : _props$type,
			    _props$style = _props.style,
			    style = _props$style === undefined ? {} : _props$style;

			return _react2.default.createElement(
				"wf-sep",
				null,
				_react2.default.createElement("span", { style: style, className: classes.wrapper + " " + (type ? "sep-" + type : "") }),
				_react2.default.createElement("div", { className: "clearfix" })
			);
		}
	}]);
	return WFSep;
}(_react.Component);

// ------------------- //

exports.default = WFSep;

// ------------------- //

/*

	<WFSep type={0}/>
*/

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Lodash = __webpack_require__(6);

var _WFRow = __webpack_require__(38);

var _WFRow2 = _interopRequireDefault(_WFRow);

var _WFCol = __webpack_require__(44);

var _WFCol2 = _interopRequireDefault(_WFCol);

var _WFImg = __webpack_require__(56);

var _WFImg2 = _interopRequireDefault(_WFImg);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFBtn = __webpack_require__(54);

var _WFBtn2 = _interopRequireDefault(_WFBtn);

var _WFCounter = __webpack_require__(55);

var _WFCounter2 = _interopRequireDefault(_WFCounter);

var _WFieldLabel = __webpack_require__(163);

var _WFieldLabel2 = _interopRequireDefault(_WFieldLabel);

var _WFieldLegend = __webpack_require__(164);

var _WFieldLegend2 = _interopRequireDefault(_WFieldLegend);

var _WFEventTypes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FIELD ------------------- //

// ------------------- //

var classes = {
  toggle: "wf-field-toggle",
  inline: 'wf-inline',
  optional: 'wf-optional',
  required: "wf-required",
  disabled: "wf-disabled",
  error: "wf-has-error",
  valid: "wf-validate"
};

var WFieldComponent = function (_Component) {
  (0, _inherits3.default)(WFieldComponent, _Component);

  /**
   * Constructor
   */
  function WFieldComponent(props) {
    (0, _classCallCheck3.default)(this, WFieldComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFieldComponent.__proto__ || (0, _getPrototypeOf2.default)(WFieldComponent)).call(this, props));

    var on = props.on,
        type = props.type,
        onGetInput = props.onGetInput,
        _props$input_type = props.input_type,
        input_type = _props$input_type === undefined ? null : _props$input_type;

    _this.displayName = "WField_" + (input_type ? input_type : type);
    _this.input = onGetInput(type, input_type, true);
    _this.extraInput = onGetInput(type, input_type, false);
    on(_WFEventTypes.WF_EVENT_ONINIT, _this);
    _this.state = {};
    return _this;
  }

  /**
   * Render the final HTML output
   * @return string html
   */


  (0, _createClass3.default)(WFieldComponent, [{
    key: "render",
    value: function render() {
      var _props$fieldEditableM = this.props.fieldEditableMenu,
          fieldEditableMenu = _props$fieldEditableM === undefined ? null : _props$fieldEditableM;

      if ((0, _Lodash.isFunction)(fieldEditableMenu)) {
        return fieldEditableMenu(this);
      } else {
        return this.getField();
      }
    }

    /**
     * Get field or custom field
     */

  }, {
    key: "getField",
    value: function getField() {
      var _props = this.props,
          on = _props.on,
          _props$customComponen = _props.customComponent,
          customComponent = _props$customComponen === undefined ? null : _props$customComponen;

      if ((0, _Lodash.isFunction)(customComponent)) {
        return customComponent({
          fieldComponent: this,
          on: on
        });
      } else {
        return _react2.default.createElement(
          "wf-field",
          null,
          this.getWrapper()
        );
      }
    }

    // ------------------- //

    // FIELD WRAPPER ------------------- //

    // ------------------- //

  }, {
    key: "getWrapper",
    value: function getWrapper() {
      var _props2 = this.props,
          _props2$isInline = _props2.isInline,
          isInline = _props2$isInline === undefined ? false : _props2$isInline,
          _props2$isOptional = _props2.isOptional,
          isOptional = _props2$isOptional === undefined ? false : _props2$isOptional,
          _props2$isAdminForm = _props2.isAdminForm,
          isAdminForm = _props2$isAdminForm === undefined ? false : _props2$isAdminForm,
          _props2$isWonderField = _props2.isWonderField,
          isWonderField = _props2$isWonderField === undefined ? false : _props2$isWonderField;

      if (isWonderField) {
        return this.getWrapperExtra();
      } else {
        if (isInline) {
          return this.getWrapperInline();
        } else if (isOptional) {
          return this.getWrapperOptional();
        } else {
          return this.getWrapperByDefault();
        }
      }
    }

    // ------------------- //

  }, {
    key: "getWrapperByDefault",
    value: function getWrapperByDefault() {
      var _props$isFirst = this.props.isFirst,
          isFirst = _props$isFirst === undefined ? false : _props$isFirst;

      var firstClass = "";
      if (isFirst) {
        firstClass = "first-child";
      }
      return _react2.default.createElement(
        _WFRow2.default,
        { className: firstClass },
        this.getLabel(),
        _react2.default.createElement(
          _WFCol2.default,
          { sm: 12 },
          this.getInput()
        ),
        this.getLegend()
      );
    }

    // ------------------- //

  }, {
    key: "getWrapperInline",
    value: function getWrapperInline() {
      return _react2.default.createElement(
        _WFRow2.default,
        null,
        this.getLabel(5),
        _react2.default.createElement(
          _WFCol2.default,
          { xs: 7 },
          this.getInput()
        ),
        this.getLegend(classes.inline)
      );
    }

    // ------------------- //

  }, {
    key: "getWrapperOptional",
    value: function getWrapperOptional() {
      // todo implement 
      // field has checkbox to toggle status
      return false;
    }

    // ------------------- //

  }, {
    key: "getWrapperExtra",
    value: function getWrapperExtra() {
      var _props3 = this.props,
          _props3$wf_width = _props3.wf_width,
          wf_width = _props3$wf_width === undefined ? 900 : _props3$wf_width,
          _props3$input_type = _props3.input_type,
          input_type = _props3$input_type === undefined ? "" : _props3$input_type;

      var rowStyle = {};
      if (wf_width) {
        rowStyle["maxWidth"] = wf_width;
      }
      if (input_type === "WFieldSelectImage") {
        rowStyle["maxWidth"] = "100%";
      }
      return _react2.default.createElement(
        _WFRow2.default,
        {
          className: "wf-wonder-field " + (this.props.isFirst ? "first-child" : ""),
          style: rowStyle
        },
        _react2.default.createElement(
          _WFCol2.default,
          { sm: 12 },
          this.getLabel()
        ),
        _react2.default.createElement(
          _WFCol2.default,
          { sm: 12 },
          this.getExtraInput()
        ),
        _react2.default.createElement(
          _WFCol2.default,
          { sm: 12 },
          this.getLegend()
        )
      );
    }

    // ------------------- //

    // FIELD LABEL ------------------- //

    // ------------------- //

  }, {
    key: "getLabel",
    value: function getLabel() {
      var col = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
      var _state = this.state,
          stringValue = _state.stringValue,
          valid = _state.valid,
          errors = _state.errors,
          _state$focused = _state.focused,
          focused = _state$focused === undefined ? false : _state$focused,
          _state$isInline = _state.isInline,
          isInline = _state$isInline === undefined ? false : _state$isInline,
          _state$hasCounter = _state.hasCounter,
          hasCounter = _state$hasCounter === undefined ? false : _state$hasCounter,
          _state$counter = _state.counter,
          counter = _state$counter === undefined ? 0 : _state$counter,
          maxLength = _state.maxLength,
          minLength = _state.minLength,
          _state$max = _state.max,
          max = _state$max === undefined ? null : _state$max;
      var _props4 = this.props,
          _props4$type = _props4.type,
          type = _props4$type === undefined ? "" : _props4$type,
          styles = _props4.styles,
          disabled = _props4.disabled,
          _props4$label = _props4.label,
          label = _props4$label === undefined ? "" : _props4$label,
          _props4$wf_label = _props4.wf_label,
          wf_label = _props4$wf_label === undefined ? "" : _props4$wf_label,
          _props4$required = _props4.required,
          required = _props4$required === undefined ? false : _props4$required,
          _props4$isEditable = _props4.isEditable,
          isEditable = _props4$isEditable === undefined ? false : _props4$isEditable,
          _props4$input_type = _props4.input_type,
          input_type = _props4$input_type === undefined ? null : _props4$input_type,
          _props4$hasLabel = _props4.hasLabel,
          hasLabel = _props4$hasLabel === undefined ? true : _props4$hasLabel,
          _props4$hiddenLabel = _props4.hiddenLabel,
          hiddenLabel = _props4$hiddenLabel === undefined ? false : _props4$hiddenLabel;

      var err = errors;
      if (!hasLabel || !label || label === "" || hiddenLabel) {
        return false;
      } else {
        var count = 0;
        if (hasCounter || type.includes("select")) {
          count = counter;
        }
        if (input_type === "select") {
          count = 0;
        }
        if (type === "boolean") {
          err = [];
        }
        return _react2.default.createElement(
          _WFCol2.default,
          { xs: col, className: disabled ? "wf-disabled" : "" },
          _react2.default.createElement(
            _WFieldLabel2.default,
            {
              type: type,
              focused: focused,
              required: required,
              isInline: isInline,
              valid: valid,
              errors: err,
              counter: count,
              minLength: minLength,
              maxLength: maxLength,
              isEditable: isEditable,
              styles: styles },
            wf_label ? wf_label : label
          )
        );
      }
    }

    // ------------------- //

    // FIELD LEGEND ------------------- //

    // ------------------- //

  }, {
    key: "getLegend",
    value: function getLegend() {
      var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var _props5 = this.props,
          _props5$legend = _props5.legend,
          legend = _props5$legend === undefined ? "" : _props5$legend,
          _props5$styles = _props5.styles,
          styles = _props5$styles === undefined ? {} : _props5$styles;

      if (!legend || legend === "") {
        return false;
      } else {
        return _react2.default.createElement(
          _WFCol2.default,
          { className: className },
          _react2.default.createElement(
            _WFieldLegend2.default,
            {
              style: styles.legend || {}
            },
            legend
          )
        );
      }
    }

    // ------------------- //

    // FIELD INPUT ------------------- //

    // ------------------- //

  }, {
    key: "getInput",
    value: function getInput() {
      var Input = this.input;
      if (this.input) {
        return _react2.default.createElement(
          "wf-input",
          null,
          _react2.default.createElement(Input, (0, _extends3.default)({}, this.props, this.state))
        );
      } else {
        return false;
      }
    }
  }, {
    key: "getExtraInput",
    value: function getExtraInput() {
      var Input = this.extraInput;
      if (this.input) {
        return _react2.default.createElement(
          "wf-input",
          null,
          _react2.default.createElement(Input, (0, _extends3.default)({}, this.props, this.state))
        );
      } else {
        return false;
      }
    }

    // ------------------- //

    // COMPONENT LIFECYCLE ------------------- //

    // ------------------- //

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.on(_WFEventTypes.WF_EVENT_ONWILLMOUNT, this);
    }
    // ------------------- //

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.on(_WFEventTypes.WF_EVENT_ONDIDMOUNT, this);
    }
    // ------------------- //

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.on(_WFEventTypes.WF_EVENT_ONWILLUNMOUNT, this);
    }
  }]);
  return WFieldComponent;
}(_react.Component);

// ------------------- //


exports.default = WFieldComponent;
// ------------------- //

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormConditionHelper = __webpack_require__(86);

var _WFormConditionHelper2 = _interopRequireDefault(_WFormConditionHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormStepHelper = function () {
  function WFormStepHelper() {
    (0, _classCallCheck3.default)(this, WFormStepHelper);
  }

  (0, _createClass3.default)(WFormStepHelper, null, [{
    key: "getStepState",
    value: function getStepState(wfCpt) {
      return {
        count: WFormStepHelper.countStep(wfCpt),
        stepId: WFormStepHelper.currentStep(wfCpt),
        current: WFormStepHelper.currentStepIndex(wfCpt),
        isFirst: WFormStepHelper.isFirstStep(wfCpt),
        isLast: WFormStepHelper.isLastStep(wfCpt),
        isUniq: WFormStepHelper.hasUniqStep(wfCpt),
        isCompleted: WFormStepHelper.isCompletedStep(wfCpt),
        progress: WFormStepHelper.progressStep(wfCpt)
      };
    }
  }, {
    key: "countStep",
    value: function countStep(wfCpt) {
      var _wfCpt$state$steps = wfCpt.state.steps,
          steps = _wfCpt$state$steps === undefined ? [] : _wfCpt$state$steps;

      return steps.length;
    }
  }, {
    key: "currentStep",
    value: function currentStep(wfCpt) {
      var _wfCpt$state$currentS = wfCpt.state.currentStep,
          currentStep = _wfCpt$state$currentS === undefined ? 0 : _wfCpt$state$currentS;

      return currentStep;
    }
  }, {
    key: "currentStepIndex",
    value: function currentStepIndex(wfCpt) {
      var _wfCpt$state$currentS2 = wfCpt.state.currentStepIndex,
          currentStepIndex = _wfCpt$state$currentS2 === undefined ? 0 : _wfCpt$state$currentS2;

      return currentStepIndex;
    }
  }, {
    key: "progressStep",
    value: function progressStep(wfCpt) {
      var currentIndex = WFormStepHelper.currentStepIndex(wfCpt);
      var counter = WFormStepHelper.countStep(wfCpt);
      return currentIndex / counter * 100 + "%";
    }
  }, {
    key: "hasUniqStep",
    value: function hasUniqStep(wfCpt) {
      var counter = WFormStepHelper.countStep(wfCpt);
      return counter === 1 || counter === 0;
    }
  }, {
    key: "isFirstStep",
    value: function isFirstStep(wfCpt) {
      return WFormStepHelper.currentStepIndex(wfCpt) === 0;
    }
  }, {
    key: "isLastStep",
    value: function isLastStep(wfCpt) {
      var currentIndex = WFormStepHelper.currentStepIndex(wfCpt);
      var counter = WFormStepHelper.countStep(wfCpt);
      return counter === currentIndex + 1;
    }
  }, {
    key: "isCompletedStep",
    value: function isCompletedStep(wfCpt) {
      var _wfCpt$props$isEditab = wfCpt.props.isEditable,
          isEditable = _wfCpt$props$isEditab === undefined ? false : _wfCpt$props$isEditab;

      if (isEditable) {
        return true;
      }
      var _wfCpt$state$complete = wfCpt.state.completedStep,
          completedStep = _wfCpt$state$complete === undefined ? [null] : _wfCpt$state$complete;

      return completedStep.includes(WFormStepHelper.currentStep(wfCpt));
    }
  }]);
  return WFormStepHelper;
}();

exports.default = WFormStepHelper;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Mobile = __webpack_require__(90);

var _Screen = __webpack_require__(235);

var _WFormConditionHelper = __webpack_require__(86);

var _WFormConditionHelper2 = _interopRequireDefault(_WFormConditionHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASSIC_FIELD = "classic";
var WFCONTENT = "WFContent";
var WFTIMELINE = "WFTimeline";
var WFTHEME = "wf-wonderform-theme";

var WFormStyleHelper = function () {
  function WFormStyleHelper() {
    (0, _classCallCheck3.default)(this, WFormStyleHelper);
  }

  (0, _createClass3.default)(WFormStyleHelper, null, [{
    key: 'getHeight',


    // ------------------- //

    // UTILS ------------------- //

    // ------------------- //

    value: function getHeight(wfCpt, refId) {
      var node = _reactDom2.default.findDOMNode(wfCpt.refs[refId]);
      if (!node) return 0;
      return node.offsetHeight;
    }

    // ------------------- //

  }, {
    key: 'refreshHeight',
    value: function refreshHeight(wfCpt) {
      var currentContentHeight = wfCpt.state.currentContentHeight;

      var nextContentHeight = WFormStyleHelper.getHeight(wfCpt, WFCONTENT);
      if (nextContentHeight !== currentContentHeight) {
        WFormStyleHelper.updateHeigth(wfCpt);
        wfCpt.setState({
          isMobile: (0, _Mobile.isMobileSize)(),
          currentContentHeight: nextContentHeight
        });
      }
    }

    // ------------------- //

    // VERTICAL ALIGN ------------------- //

    // ------------------- //

  }, {
    key: 'getVerticalAlignConfig',
    value: function getVerticalAlignConfig(wfCpt) {
      var _wfCpt$props$isEditab = wfCpt.props.isEditable,
          isEditable = _wfCpt$props$isEditab === undefined ? false : _wfCpt$props$isEditab;
      var _wfCpt$state = wfCpt.state,
          _wfCpt$state$use_vert = _wfCpt$state.use_vertical_align,
          use_vertical_align = _wfCpt$state$use_vert === undefined ? false : _wfCpt$state$use_vert,
          _wfCpt$state$heigth = _wfCpt$state.heigth,
          heigth = _wfCpt$state$heigth === undefined ? 0 : _wfCpt$state$heigth;

      var height = 0;
      var isActive = false;
      if (isEditable || use_vertical_align) {
        height = heigth;
        isActive = true;
      }
      return {
        isActive: isActive,
        height: height
      };
    }
  }, {
    key: 'updateHeigth',
    value: function updateHeigth(wfCpt) {
      var _wfCpt$props$isEditab2 = wfCpt.props.isEditable,
          isEditable = _wfCpt$props$isEditab2 === undefined ? false : _wfCpt$props$isEditab2;
      var _wfCpt$state2 = wfCpt.state,
          _wfCpt$state2$use_ver = _wfCpt$state2.use_vertical_align,
          use_vertical_align = _wfCpt$state2$use_ver === undefined ? false : _wfCpt$state2$use_ver,
          vertical_align_height = _wfCpt$state2.vertical_align_height,
          vertical_align_padding = _wfCpt$state2.vertical_align_padding;

      var verticalAlign = false;
      var verticalAlignHeight = 780;
      var verticalAlignPadding = 50;
      if (use_vertical_align) {
        verticalAlign = true;
        verticalAlignHeight = parseInt(vertical_align_height);
        verticalAlignPadding = parseInt(vertical_align_padding);
      }
      if (isEditable) {
        verticalAlign = true;
      }
      if (!verticalAlign) {
        return false;
      }
      var contentH = WFormStyleHelper.getHeight(wfCpt, WFCONTENT);
      var timelineH = WFormStyleHelper.getHeight(wfCpt, WFTIMELINE);
      var nextHeight = (0, _Screen.VerticalAlign)({
        content: contentH + (timelineH ? timelineH / 2 : 0),
        minHeight: verticalAlignHeight,
        top: verticalAlignPadding,
        down: verticalAlignPadding });
      wfCpt.setState({
        heigth: nextHeight
      });
    }

    // ------------------- //

    // FOOTER STYLE ------------------- //

    // ------------------- //

  }, {
    key: 'getFooterStyle',
    value: function getFooterStyle(wfCpt) {
      var isExtraContent = _WFormConditionHelper2.default.isExtraContent(wfCpt);
      if (!isExtraContent) {
        return {};
      } else {
        return {
          maxWidth: "550px"
        };
      }
    }

    // ------------------- //

    // CONTENT STYLE ------------------- //

    // ------------------- //

  }, {
    key: 'getContainerClass',
    value: function getContainerClass(wfCpt) {
      var _wfCpt$props$isAdmin = wfCpt.props.isAdmin,
          isAdmin = _wfCpt$props$isAdmin === undefined ? false : _wfCpt$props$isAdmin;
      var _wfCpt$state3 = wfCpt.state,
          _wfCpt$state3$hasThem = _wfCpt$state3.hasTheme,
          hasTheme = _wfCpt$state3$hasThem === undefined ? "" : _wfCpt$state3$hasThem,
          _wfCpt$state3$hasThem2 = _wfCpt$state3.hasThemeOption,
          hasThemeOption = _wfCpt$state3$hasThem2 === undefined ? "" : _wfCpt$state3$hasThem2,
          _wfCpt$state3$customC = _wfCpt$state3.customClassName,
          customClassName = _wfCpt$state3$customC === undefined ? "" : _wfCpt$state3$customC,
          _wfCpt$state3$current = _wfCpt$state3.currentStepValue,
          currentStepValue = _wfCpt$state3$current === undefined ? {} : _wfCpt$state3$current,
          use_vertical_align = _wfCpt$state3.use_vertical_align,
          _wfCpt$state3$heigth = _wfCpt$state3.heigth,
          heigth = _wfCpt$state3$heigth === undefined ? 0 : _wfCpt$state3$heigth;
      var _currentStepValue$typ = currentStepValue.type,
          type = _currentStepValue$typ === undefined ? CLASSIC_FIELD : _currentStepValue$typ;

      var clss = "";
      clss += !isAdmin ? "wf-default-theme" : "";
      clss += ' ' + hasTheme;
      clss += ' ' + hasThemeOption;
      if (hasTheme === WFTHEME) {
        clss += ' wf-' + type + '-step';
      } else {
        clss += ' wf-' + CLASSIC_FIELD + '-step';
      }
      clss += ' ' + customClassName;
      return clss;
    }
  }, {
    key: 'getContentStyle',
    value: function getContentStyle(wfCpt) {
      var _wfCpt$state4 = wfCpt.state,
          _wfCpt$state4$isMobil = _wfCpt$state4.isMobile,
          isMobile = _wfCpt$state4$isMobil === undefined ? false : _wfCpt$state4$isMobil,
          container_bg = _wfCpt$state4.container_bg,
          container_width = _wfCpt$state4.container_width,
          container_padding = _wfCpt$state4.container_padding,
          container_border_radius = _wfCpt$state4.container_border_radius;

      var contentStyle = {};
      if (!isMobile) {
        if (_WFormConditionHelper2.default.isExtraContent(wfCpt)) {
          if (container_bg) {
            contentStyle['backgroundColor'] = "transparent";
          }
          if (container_width) {
            contentStyle['maxWidth'] = "100%";
          }
          if (container_padding) {
            contentStyle['padding'] = container_padding;
          }
          if (container_border_radius) {
            contentStyle['borderRadius'] = "0";
          }
        } else {
          if (container_bg) {
            contentStyle['backgroundColor'] = container_bg;
          }
          if (container_width) {
            contentStyle['maxWidth'] = container_width;
          }
          if (container_padding) {
            contentStyle['padding'] = container_padding;
          }
          if (container_border_radius) {
            contentStyle['borderRadius'] = container_border_radius;
          }
        }
      } else {
        contentStyle['padding'] = 15;
        contentStyle['backgroundColor'] = "#FFF";
      }
      return contentStyle;
    }

    // ------------------- //

    // FIELD STYLE ------------------- //

    // ------------------- //

  }, {
    key: 'getFieldStyle',
    value: function getFieldStyle(wfCpt) {
      var _wfCpt$state5 = wfCpt.state,
          _wfCpt$state5$isMobil = _wfCpt$state5.isMobile,
          isMobile = _wfCpt$state5$isMobil === undefined ? false : _wfCpt$state5$isMobil,
          field_inline = _wfCpt$state5.field_inline,
          field_no_label = _wfCpt$state5.field_no_label,
          field_color = _wfCpt$state5.field_color,
          field_font_size = _wfCpt$state5.field_font_size,
          field_padding = _wfCpt$state5.field_padding,
          field_legend_color = _wfCpt$state5.field_legend_color,
          field_legend_font_size = _wfCpt$state5.field_legend_font_size,
          field_legend_padding = _wfCpt$state5.field_legend_padding,
          wf_label_font_size = _wfCpt$state5.wf_label_font_size,
          wf_label_color = _wfCpt$state5.wf_label_color,
          wf_label_padding = _wfCpt$state5.wf_label_padding,
          wf_legend_color = _wfCpt$state5.wf_legend_color,
          wf_legend_font_size = _wfCpt$state5.wf_legend_font_size,
          wf_legend_padding = _wfCpt$state5.wf_legend_padding,
          wf_option_label_color = _wfCpt$state5.wf_option_label_color,
          wf_option_legend_color = _wfCpt$state5.wf_option_legend_color;


      var label = {};
      var legend = {};

      var labelText = {};
      var labelRequired = {};

      var optionLabel = {};
      var optionLegend = {};
      if (!isMobile) {
        if (_WFormConditionHelper2.default.isExtraContent(wfCpt)) {
          if (wf_label_padding) {
            label["padding"] = wf_label_padding + 'px 0';
          }
          if (wf_label_font_size) {
            labelRequired["fontSize"] = labelText["fontSize"] = wf_label_font_size + 'px';
          }
          if (wf_label_color) {
            labelRequired["color"] = labelText["color"] = wf_label_color;
          }

          if (wf_legend_padding) {
            legend["padding"] = wf_legend_padding + 'px 0';
          }
          if (wf_legend_font_size) {
            legend["fontSize"] = wf_legend_font_size + 'px';
          }
          if (wf_legend_color) {
            legend["color"] = wf_legend_color;
          }

          if (wf_option_label_color) {
            optionLabel["color"] = wf_option_label_color;
          }
          if (wf_option_legend_color) {
            optionLegend["color"] = wf_option_legend_color;
          }
        } else {
          if (field_padding) {
            label["padding"] = field_padding + 'px 0';
          }
          if (field_font_size) {
            labelText["fontSize"] = field_font_size + 'px';
          }
          if (field_color) {
            labelText["color"] = field_color;
          }

          if (field_legend_padding) {
            legend["padding"] = field_legend_padding + 'px 0';
          }
          if (field_legend_font_size) {
            legend["fontSize"] = field_legend_font_size + 'px';
          }
          if (field_legend_color) {
            legend["color"] = field_legend_color;
          }
        }
      } else {
        labelText["fontSize"] = '14px';
        labelText["color"] = "#555";
        legend["fontSize"] = '12px';
        legend["color"] = "#666";
      }
      var styles = {
        label: label,
        labelText: labelText,
        labelRequired: labelRequired,
        legend: legend,
        optionLabel: optionLabel,
        optionLegend: optionLegend
      };
      return {
        styles: styles,
        isInline: field_inline,
        hasLabel: !field_no_label
      };
    }

    // ------------------- //

    // OPTIONS STYLE ------------------- //

    // ------------------- //

  }, {
    key: 'getOptionStyle',
    value: function getOptionStyle(wfCpt) {
      var _wfCpt$props = wfCpt.props,
          _wfCpt$props$wf_heigh = _wfCpt$props.wf_height,
          wf_height = _wfCpt$props$wf_heigh === undefined ? 275 : _wfCpt$props$wf_heigh,
          _wfCpt$props$wf_optio = _wfCpt$props.wf_option_width,
          wf_option_width = _wfCpt$props$wf_optio === undefined ? 200 : _wfCpt$props$wf_optio,
          wf_option_margin = _wfCpt$props.wf_option_margin,
          wf_option_padding = _wfCpt$props.wf_option_padding,
          wf_option_image_height = _wfCpt$props.wf_option_image_height,
          wf_option_image_radius = _wfCpt$props.wf_option_image_radius;

      var imageStyle = {};
      var optionStyle = {};
      var optionWidth = 200;
      var scrollBarHeight = 275;
      if (wf_height) {
        scrollBarHeight = wf_height;
      }
      if (wf_option_width) {
        optionWidth = wf_option_width;
      }
      if (wf_option_image_height) {
        imageStyle["maxHeight"] = wf_option_image_height + 'px';
      }
      if (wf_option_image_radius) {
        imageStyle["borderRadius"] = wf_option_image_radius + '%';
      }
      if (wf_option_margin) {
        optionStyle["margin"] = wf_option_margin;
      }
      if (wf_option_padding) {
        optionStyle["padding"] = wf_option_padding;
      }
      return {
        imageStyle: imageStyle,
        optionStyle: optionStyle,
        optionWidth: optionWidth,
        scrollBarHeight: scrollBarHeight
      };
    }

    // ------------------- //

    // NAVIGATION STYLE ------------------- //

    // ------------------- //

  }, {
    key: 'getNavStyle',
    value: function getNavStyle(wfCpt) {
      var _wfCpt$state6 = wfCpt.state,
          _wfCpt$state6$isMobil = _wfCpt$state6.isMobile,
          isMobile = _wfCpt$state6$isMobil === undefined ? false : _wfCpt$state6$isMobil,
          prev_color = _wfCpt$state6.prev_color,
          prev_bg = _wfCpt$state6.prev_bg,
          next_color = _wfCpt$state6.next_color,
          next_bg = _wfCpt$state6.next_bg,
          submit_font_size = _wfCpt$state6.submit_font_size,
          submit_padding = _wfCpt$state6.submit_padding,
          submit_border_radius = _wfCpt$state6.submit_border_radius,
          submit_color = _wfCpt$state6.submit_color,
          submit_bg = _wfCpt$state6.submit_bg;


      var prevStyle = {};
      var nextStyle = {};
      var submitStyle = {};

      if (prev_bg) {
        prevStyle["backgroundColor"] = '' + prev_bg;
      }
      if (prev_color) {
        prevStyle["color"] = '' + prev_color;
      }

      if (next_bg) {
        nextStyle["backgroundColor"] = '' + next_bg;
      }
      if (next_color) {
        nextStyle["color"] = '' + next_color;
      }

      if (submit_bg) {
        submitStyle["backgroundColor"] = '' + submit_bg;
      }
      if (submit_color) {
        submitStyle["color"] = '' + submit_color;
      }

      if (!isMobile) {
        if (submit_font_size) {
          prevStyle["fontSize"] = nextStyle["fontSize"] = submitStyle["fontSize"] = submit_font_size + 'px';
        }
        if (submit_padding) {
          prevStyle["padding"] = nextStyle["padding"] = submitStyle["padding"] = submit_padding + 'px 0';
        }
        if (submit_border_radius) {
          prevStyle["borderRadius"] = nextStyle["borderRadius"] = submitStyle["borderRadius"] = submit_border_radius + 'px';
        }
      } else {
        prevStyle["fontSize"] = nextStyle["fontSize"] = submitStyle["fontSize"] = '10px';

        prevStyle["padding"] = nextStyle["padding"] = submitStyle["padding"] = '12px 0';

        prevStyle["borderRadius"] = nextStyle["borderRadius"] = submitStyle["borderRadius"] = '0';
      }
      return {
        prevStyle: prevStyle,
        nextStyle: nextStyle,
        submitStyle: submitStyle
      };
    }
  }]);
  return WFormStyleHelper;
}();

exports.default = WFormStyleHelper;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS WF PARAM ------------------- //

// ------------------- // 

var WFParam = function () {
  /**
   * Constructor
   */
  function WFParam(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _classCallCheck3.default)(this, WFParam);

    this.name = name;
    this.value = value;
  }

  /**
   * Get param
   * @return string
   */


  (0, _createClass3.default)(WFParam, [{
    key: "get",
    value: function get() {
      if (this.value) {
        return WFParam.format(this.getName(), this.getValue());
      } else {
        return null;
      }
    }

    /**
     * Get name param 
     * @return string
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }

    /**
     * Get value
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }

    /**
     * Set value
     */

  }, {
    key: "setValue",
    value: function setValue(newValue) {
      this.value = newValue;
    }

    /**
     * Create query string param 
     * @param key
     * @param value
     * @return string
     */

  }], [{
    key: "format",
    value: function format(k, v) {
      return k + "=" + encodeURIComponent(v.toString());
    }
  }]);
  return WFParam;
}();

// ------------------- // 


exports.default = WFParam;
// ------------------- //

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFRequestParams = __webpack_require__(87);

var _WFParam = __webpack_require__(115);

var _WFParam2 = _interopRequireDefault(_WFParam);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFNumber = __webpack_require__(60);

var _WFNumber2 = _interopRequireDefault(_WFNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS WF QUERY PARAMS ------------------- //

// ------------------- // 

var initial = {
  page: 1,
  start: 0,
  limit: 15,
  filters: [],
  orderby: null,
  orderbyDirection: null
};

var WFQueryParams = function () {
  /**
   * Constructor
   */
  function WFQueryParams() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFQueryParams);
    var _config$page = config.page,
        page = _config$page === undefined ? initial.page : _config$page,
        _config$limit = config.limit,
        limit = _config$limit === undefined ? initial.limit : _config$limit,
        _config$filters = config.filters,
        filters = _config$filters === undefined ? initial.filters : _config$filters,
        _config$orderby = config.orderby,
        orderby = _config$orderby === undefined ? initial.orderby : _config$orderby,
        _config$orderbyDirect = config.orderbyDirection,
        orderbyDirection = _config$orderbyDirect === undefined ? initial.orderbyDirection : _config$orderbyDirect;


    this.page = new _WFNumber2.default({ value: page });
    this.start = new _WFParam2.default(_WFRequestParams.QUERY_PARAM_START, initial.start);
    this.limit = new _WFParam2.default(_WFRequestParams.QUERY_PARAM_LIMIT, limit);
    this.orderby = new _WFParam2.default(_WFRequestParams.QUERY_PARAM_ORDER_BY, orderby);
    this.orderbyDirection = new _WFParam2.default(_WFRequestParams.QUERY_PARAM_ORDER_BY_DIRECTION, orderbyDirection);
    this.filters = new _WFArray2.default({ value: filters, isCollection: true, findBy: "k" });
    this.reqFilters = [];
    this.pagerState = {};
    this.pagination = {};

    this.refresh();
  }

  /**
   * Get query string params
   * return string
   */


  (0, _createClass3.default)(WFQueryParams, [{
    key: "get",
    value: function get() {
      this.compute();
      this.setReqFilters();

      var query = "";
      var limit = this.limit.get();
      var start = this.start.get();
      var orderby = this.orderby.get();
      var orderbyDirection = this.orderbyDirection.get();
      var filters = this.getFilters();

      query += _WFRequestParams.QUERY_SEARCH;
      query += limit ? limit : "";
      query += start ? "&" + start : "";
      query += orderby ? "&" + orderby : "";
      query += orderbyDirection ? "&" + orderbyDirection : "";
      query += filters ? "&" + filters : "";

      return query;
    }

    /**
     * Reset Query
     */

  }, {
    key: "reset",
    value: function reset() {
      this.setPage(initial.page);
      this.start.setValue(initial.start);
      this.limit.setValue(initial.limit);
      this.clearFilters();
      this.clearOrderbyDirection();
      this.clearOrderBy();
      this.refresh();
    }

    /**
     * Set current page
     */

  }, {
    key: "setPage",
    value: function setPage() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.page.set(page);
    }

    /**
     * Calculate this start and set it
     */

  }, {
    key: "compute",
    value: function compute() {
      var page = this.page.get();
      var limit = this.limit.getValue();
      var index = parseInt(limit) * parseInt(page);
      var start = page == 0 || page == 1 ? 0 : Math.round(index - parseInt(limit));
      start = (0, _Lodash.isNaN)(start) ? 0 : start;
      this.start.setValue(start);
    }

    /**
     * Refresh this pager and this pagination
     */

  }, {
    key: "refresh",
    value: function refresh() {
      var countElems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var totalElems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var current = this.page.get();
      var counter = parseInt(countElems);
      var total = parseInt(totalElems);
      var pages = Math.ceil(total / this.limit.getValue());
      var next = current - 1 < 1 ? pages : current - 1;
      var prev = current + 1 > pages ? 1 : current + 1;
      this.setPagination(current, pages, counter, total);
      // caching result
      this.pagerState = {
        counter: counter,
        total: total,
        pages: pages,
        next: next,
        prev: prev
      };
    }

    // FILTERS ------------------- //

    /**
     * Has filters
     */

  }, {
    key: "hasFilters",
    value: function hasFilters() {
      return this.filters.getCounter() > 0;
    }

    /**
     * Clear filters
     */

  }, {
    key: "clearFilters",
    value: function clearFilters() {
      this.filters.clear();
    }

    /**
     * Get filters params
     * return string
     */

  }, {
    key: "getFilters",
    value: function getFilters() {
      if (this.hasFilters()) {
        return this.filters.map(function (f) {
          return f.v;
        }).join('&');
      } else {
        return null;
      }
    }

    /**
     * Set new filter 
     * @param key is a string
     * @param value string || number
     * @param isReqFilter is a boolean is true the filter is not removable
     */

  }, {
    key: "setFilter",
    value: function setFilter(key, value) {
      var isReqFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if ((0, _Lodash.isString)(key) && !(0, _Lodash.isNull)(value) || value !== "") {
        if (isReqFilter) {
          this.reqFilters.push((0, _defineProperty3.default)({}, key, value));
        } else {
          this.filters.insert({
            k: key,
            v: _WFParam2.default.format(key, value)
          });
        }
      }
    }

    /**
     * Delete filter by key
     * @param key is a string
     */

  }, {
    key: "unsetFilter",
    value: function unsetFilter(key) {
      if ((0, _Lodash.isString)(key)) {
        this.filters.delete(key);
      }
    }

    /**
     * Check and Set if reqFilters
     * @param key is a string
     */

  }, {
    key: "setReqFilters",
    value: function setReqFilters() {
      var _this = this;

      var filters = this.reqFilters;
      if (filters.length > 0) {
        filters.forEach(function (filter) {
          var key = (0, _keys2.default)(filter)[0];
          if (!_this.filters.has(key)) {
            _this.setFilter(key, filter[key]);
          }
        });
      }
    }

    /**
     * Clear reqFilters
     */

  }, {
    key: "clearReqFilters",
    value: function clearReqFilters() {
      this.reqFilters = [];
    }

    // PAGINATION ------------------- //

    /**
     * Get pagination for view
     */

  }, {
    key: "getPagination",
    value: function getPagination() {
      return this.pagination;
    }

    /**
     * Set pagination for view
     */

  }, {
    key: "setPagination",
    value: function setPagination(page, pages, c, t) {
      var current = page - 1;
      var total = pages;
      var countRow = c;
      var totalRow = t;
      var countCursor = c;
      if (current < 0) {
        current = 0;
      }
      if (current > 0) {
        countCursor = current * this.limit.getValue() + c;
      }
      this.pagination = {
        current: current,
        total: total,
        countRow: countRow,
        totalRow: totalRow,
        countCursor: countCursor
      };
    }

    // PAGER ------------------- //

    /**
     * Get pager
     */

  }, {
    key: "getPager",
    value: function getPager() {
      return (0, _assign2.default)({
        page: this.page.get(),
        limit: this.limit.getValue()
      }, this.pagerState);
    }

    /**
     * Set pager
     */

  }, {
    key: "setPager",
    value: function setPager() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _args$page = args.page,
          page = _args$page === undefined ? null : _args$page,
          _args$limit = args.limit,
          limit = _args$limit === undefined ? null : _args$limit;


      if (page) {
        this.setPage(page);
      }
      if ((0, _Lodash.isNumber)(limit)) {
        this.limit.setValue(limit);
      }
    }

    // ORDER ------------------- //

    /**
     * Set orderbyDirection to ASC
     */

  }, {
    key: "toAsc",
    value: function toAsc() {
      this.setOrderByDirection(_WFRequestParams.QUERY_ORDER_ASC);
    }

    /**
     * Set orderbyDirection to DESC
     */

  }, {
    key: "toDesc",
    value: function toDesc() {
      this.setOrderByDirection(_WFRequestParams.QUERY_ORDER_DESC);
    }

    /**
     * Clear orderbyDirection
     */

  }, {
    key: "clearOrderbyDirection",
    value: function clearOrderbyDirection() {
      this.setOrderByDirection(initial.orderbyDirection);
    }

    /**
     * Clear orderby
     */

  }, {
    key: "clearOrderBy",
    value: function clearOrderBy() {
      this.setOrderBy(initial.orderby);
    }

    /**
     * Set orderbyDirection
     */

  }, {
    key: "setOrderByDirection",
    value: function setOrderByDirection() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "asc";

      this.orderbyDirection.setValue(value);
    }

    /**
     * Get orderby
     */

  }, {
    key: "setOrderBy",
    value: function setOrderBy() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "name";

      this.orderby.setValue(value);
    }

    // LIMIT ------------------- //

  }, {
    key: "setLimit",
    value: function setLimit() {
      var limitElem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;

      this.limit.setValue(limitElem);
    }
  }]);
  return WFQueryParams;
}();

// ------------------- // 


exports.default = WFQueryParams;
// ------------------- // 


/*

Exemple : /form?wf_start=0&wf_limit=15

  var q = new WFQueryParams();

  q.get()
  q.setPager({page:4})
  q.get()
  q.setPager({page:3})

  q.toDesc()
  q.get()

  q.toAsc()
  q.get()

  q.setOrderBy('label')
  q.get()

  q.clearOrderBy()
  q.clearOrderbyDirection()
  q.get()

  q.setFilter("country","France")
  q.setFilter("city","paris")
  q.setFilter("zipcode","75011")
  q.setFilter("lat","15486200")
  q.getFilters()
  q.get()

  q.unsetFilter("country")
  q.getFilters()
  q.get()

  q.reset()
  q.get()

*/

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;

var _wfEnv = __webpack_require__(152);

var _wfEnv2 = _interopRequireDefault(_wfEnv);

var _lodash = __webpack_require__(146);

var _lodash2 = _interopRequireDefault(_lodash);

var _es6Promise = __webpack_require__(305);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use logSep to separate the console message 
 */
var logSep = function logSep() {
  console.log('');
  console.log('%c>>>>>>>>> ------------------- >', 'color:#AAAAAA;');
  console.log('');
};

/**
 * Use logApiError to display error status
 */
var logApiError = function logApiError(state) {
  logSep();
  console.log('%cWF_API' + ('%c' + "->") + ('%c' + "Error(") + ('%c' + state) + '%c)', 'color:000000;', 'color:#3b3b3b;', 'color:red;', 'color:#cf4545;', 'color:red;');
  logSep();
};

/**
 * Use logApiError to display success status
 */
var logApiSuccess = function logApiSuccess(state) {
  logSep();
  console.log('%cWF_API' + ('%c' + "->") + ('%c' + "Success(") + ('%c' + state) + '%c)', 'color:#000000;', 'color:#3b3b3b;', 'color:#1C852A', 'color:#0076d3;', 'color:#1C852A;');
  logSep();
};

/**
 * Use isHtmlAlert if result is HTML display HTML result in alert box
 */
var isHtmlAlert = function isHtmlAlert(res) {
  if (_wfEnv2.default && res && res !== "") {
    if (res.text[0] === "<" || res.text[1] === "<" || res.text.includes("<pre>")) alert(res.text);
  }
};

/**
 * @namespace utils
 * @class Superagent
 */
var superagent = module.exports = __webpack_require__(379);
var Request = superagent.Request;
function SuperagentPromiseError(message) {
  this.name = 'WonderFormAgentPromiseError';
  this.message = message || 'Bad request';
}
/**
 * Create custom error type.
 * Create a new object, that prototypally inherits from the Error constructor.
 */
SuperagentPromiseError.prototype = new Error();
SuperagentPromiseError.prototype.constructor = SuperagentPromiseError;

/**
 *
 * Add promise support for superagent/supertest
 *
 * Call .promise() to return promise for the request
 *
 * @method then
 * @return {Promise}
 */
Request.prototype.promise = function () {
  var req = this;
  var success = void 0;
  var errors = false;
  var error = void 0;
  // PROMISE ------------------------- //
  return new _es6Promise.Promise(function (resolve, reject) {
    req.end(function (err, res) {
      isHtmlAlert(res);
      if (typeof res !== "undefined" && res.status >= 400) {
        var msg = 'cannot ' + req.method + ' ' + req.url + ' (' + res.status + ')';
        error = new SuperagentPromiseError(msg);
        error.status = res.status;
        error.body = res.body;
        error.res = res;
        if (_wfEnv2.default) {
          logApiError(res.status);
          console.error(msg);
          console.log('');
          console.error(error);
          console.log('');
        }
        /*
        resolve({ 
          status:res.status,
          request_error:{ message: msg } 
        });
        */
        reject(new SuperagentPromiseError(err));
      } else if (err) {
        var _ref = new SuperagentPromiseError(err),
            _ref$message = _ref.message,
            message = _ref$message === undefined ? {} : _ref$message;

        var _msg = message.message;
        if (_wfEnv2.default) {
          logApiError(404);
          console.error(_msg);
          console.log('');
        }
        /*
        resolve({ 
          status:600,
          request_error:{ message: msg } 
        });
        */
        reject(new SuperagentPromiseError(err));
      } else {
        if (res.hasOwnProperty('text')) {
          var filtered = [];
          success = JSON.parse(res.text);
          if ((0, _lodash2.default)(success) && success.length > 0) {
            filtered = success.filter(function (item) {
              return item.hasOwnProperty('messages') && item.messages.length > 0;
            });
          } else if (success.hasOwnProperty('row') && success.row === 0) {
            filtered = success.row.filter(function (item) {
              return item.hasOwnProperty('messages') && item.messages.length > 0;
            });
          }
          if (filtered.length > 0) {
            errors = {
              count: filtered.length,
              row: filtered.map(function (item) {
                return {
                  name: item.hasOwnProperty('name') ? item.name : null,
                  messages: item.messages
                };
              })
            };
          }
          if (_wfEnv2.default) {
            logApiSuccess(res.status);
            console.log(success);
            if (errors.length > 0) console.log(errors);
            console.log('');
          }
          //isDevSuccess( success, errors );
          resolve({
            resultset: success,
            request_errors: errors,
            res: res
          });
        }
      }
    });
  });
};

/**
 *
 * Make superagent requests Promises/A+ conformant
 *
 * Call .then([onFulfilled], [onRejected]) to register callbacks
 *
 * @method then
 * @param {function} [onFulfilled]
 * @param {function} [onRejected]
 * @return {Promise}
 */
Request.prototype.then = function () {
  var promise = undefined.promise();
  return promise.then.apply(promise, _arguments);
};

// ---------------------- //
exports.default = Request;
// ---------------------- //

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WFClient = __webpack_require__(58);

var _WFClient2 = _interopRequireDefault(_WFClient);

var _WFResponse = __webpack_require__(46);

var _WFResponse2 = _interopRequireDefault(_WFResponse);

var _WFUrl = __webpack_require__(41);

var _WFUrl2 = _interopRequireDefault(_WFUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFAnalyticsClientMgr = {

  formName: null,

  /**   
   * Get the formName
   * @return formName
   **/
  getFormName: function getFormName() {
    return {
      formName: WFAnalyticsClientMgr.formName
    };
  },

  /**   
   * Set the formName
   * @param formState
   **/
  setFormName: function setFormName(formState) {
    WFAnalyticsClientMgr.formName = formState.getName();
  },

  /**
    * Find form stats by year groupby month
    * @param integer year
    * @param onError is callback
    * @param onSuccess is callback
    */
  findFormStatsByYear: function findFormStatsByYear(year, onError, onSuccess) {
    _WFClient2.default.findFormStatsByYear(WFAnalyticsClientMgr.getFormName(), year).then(function (res) {
      var wfRes = _WFResponse2.default.getFindFormStatsResponse(res);
      if (wfRes.getHasLogicErrors()) {
        onError(wfRes.getLogicErrors());
      } else {
        onSuccess(wfRes.getResultset());
      }
    }).catch(function (error) {
      console.error(error);
    });
  },


  /**
    * Find form stats by year and month groupby week
    * @param integer year
    * @param integer month
    * @param onError is callback
    * @param onSuccess is callback
    */
  findFormStatsByYearMonth: function findFormStatsByYearMonth(year, month, onError, onSuccess) {
    _WFClient2.default.findFormStatsByYearMonth(WFAnalyticsClientMgr.getFormName(), year, WFAnalyticsClientMgr.fixedMonthIndex(month)).then(function (res) {
      var wfRes = _WFResponse2.default.getFindFormStatsResponse(res);
      if (wfRes.getHasLogicErrors()) {
        onError(wfRes.getLogicErrors());
      } else {
        onSuccess(wfRes.getResultset());
      }
    }).catch(function (error) {
      console.error(error);
    });
  },


  /**
    * Format month index
    * client index [0-11]
    * server index [1-12]
    * @param month
    * @src client || server
    * @return month formatted
    */
  fixedMonthIndex: function fixedMonthIndex(month) {
    var src = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "client";

    var m = parseInt(month);
    if (src === "client") {
      return m + 1;
    } else if (src === "server") {
      return m - 1;
    }
  },


  /**
    * Find form stats by year and week
    * @param integer year
    * @param integer week
    * @param onError is callback
    * @param onSuccess is callback
    */
  findFormStatsByYearWeek: function findFormStatsByYearWeek(year, week, onError, onSuccess) {
    _WFClient2.default.findFormStatsByYearWeek(WFAnalyticsClientMgr.getFormName(), year, week).then(function (res) {
      var wfRes = _WFResponse2.default.getFindFormStatsResponse(res);
      if (wfRes.getHasLogicErrors()) {
        onError(wfRes.getLogicErrors());
      } else {
        onSuccess(wfRes.getResultset());
      }
    }).catch(function (error) {
      console.error(error);
    });
  },


  /**
    * Find option entries
    * @param integer formEntryId
    * @param onError is callback
    * @param onSuccess is callback
    */
  findOptionEntries: function findOptionEntries(formEntryId, onError, onSuccess) {
    _WFClient2.default.findOptionEntries(WFAnalyticsClientMgr.getFormName(), formEntryId).then(function (res) {
      var wfRes = _WFResponse2.default.getFindFormStatsResponse(res);
      if (wfRes.getHasLogicErrors()) {
        onError(wfRes.getLogicErrors());
      } else {
        onSuccess(wfRes.getResultset());
      }
    }).catch(function (error) {
      console.error(error);
    });
  },


  /**
    * Count option entries
    * @param integer formEntryId
    * @param onError is callback
    * @param onSuccess is callback
    */
  countOptionEntries: function countOptionEntries(onError, onSuccess) {
    _WFClient2.default.countOptionEntries(WFAnalyticsClientMgr.getFormName()).then(function (res) {
      var wfRes = _WFResponse2.default.getFindFormStatsResponse(res);
      if (wfRes.getHasLogicErrors()) {
        onError(wfRes.getLogicErrors());
      } else {
        onSuccess(wfRes.getResultset());
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
};

// ------------------- //
exports.default = WFAnalyticsClientMgr;
// ------------------- //

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _WFViewMgr = __webpack_require__(91);

var _WFViewMgr2 = _interopRequireDefault(_WFViewMgr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
var initialState = {

  // Utils

  year: (0, _WFMoment2.default)().year(),
  days: _WFMoment2.default.weekdaysShort(true),
  months: _WFMoment2.default.monthsShort('-MMM-'),
  monthWeeks: [],

  // formConfig

  startYear: null,
  startMonth: null,
  startWeek: null,

  endYear: (0, _WFMoment2.default)().year(),
  endMonth: (0, _WFMoment2.default)().month(),
  endWeek: (0, _WFMoment2.default)().isoWeek(),

  currentYear: (0, _WFMoment2.default)().year(),
  currentMonth: (0, _WFMoment2.default)().month(),
  currentWeek: (0, _WFMoment2.default)().isoWeek(),

  yearResult: [],
  monthResult: [],
  weekResult: [],

  viewByYear: [],
  completedByYear: [],
  uncompletedByYear: [],

  monthLabel: [],
  viewByMonth: [],
  completedByMonth: [],
  uncompletedByMonth: [],

  weeksLabel: [],
  viewByWeek: [],
  completedByWeek: [],
  uncompletedByWeek: [],

  // fieldConfig

  fields: [],
  optionResults: [],

  currentField: 0,
  currentFieldValue: {},

  currentOptionLabels: [],
  currentOptionSeries: []

};
// ------------------- //

// WF_ANALYTICS VIEW MANAGER ------------------- //

// ------------------- //
var WFAnalyticsViewMgr = new _WFViewMgr2.default(initialState);
// ------------------- //
exports.default = WFAnalyticsViewMgr;
// ------------------- //

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// field config schema required number
var formFields = [{
  "name": "attributes",
  "type": "text",
  "input_type": "",
  "len": 65555,
  "label": "Attributes",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": true,
  "ref_form_config": ""
}, {
  "name": "create_column",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "Create Column",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": true
}, {
  "name": "label",
  "type": "text",
  "input_type": "textarea",
  "len": 255,
  "label": "Label",
  "legend": "",
  "required": true,
  "searchable": false,
  "create_column": true,
  "attributes": {
    rows: 2
  }
}, {
  "name": "legend",
  "type": "text",
  "input_type": "",
  "len": 255,
  "label": "Legend",
  "legend": "",
  "required": false,
  //"editable": true,
  "searchable": false,
  "create_column": true
}, {
  "name": "len",
  "type": "integer",
  "input_type": "",
  "len": 255,
  "label": "Length",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": true
}, {
  "name": "name",
  "type": "string",
  "input_type": "",
  "len": 32,
  "label": "Name",
  "legend": "",
  "required": true,
  "searchable": true,
  "create_column": true,
  "attributes": {
    "transformable": true,
    "transform": "toName"
  }
}, {
  "name": "input_type",
  "type": "string",
  "input_type": "",
  "len": 32,
  "label": "InputType",
  "required": false,
  "searchable": false,
  "create_column": true
}, {
  "name": "required",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "Required",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": true,
  "attributes": {
    placeholder: "field is required"
  }
}, {
  "name": "validation_schema",
  "type": "text",
  "input_type": "textarea",
  "len": 6555,
  "label": "ValidationSchema",
  "required": false,
  "searchable": false,
  "create_column": true,
  "attributes": {
    "condition": {
      "action": ["visible", "hidden"],
      "rules": ["required", "===", true]
    }
  }
}, {
  "name": "searchable",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "Searchable",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": true,
  "attributes": {
    placeholder: "field is searchable"
  }
}, {
  "name": "type",
  "type": "string",
  "input_type": "",
  "len": 32,
  "label": "Type",
  "legend": "",
  "required": true,
  "searchable": true,
  "create_column": true
}, {
  "name": "visible",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "Visible",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": true
}, {
  "name": "is_category",
  "type": "boolean",
  "len": 1,
  "label": "Is Category",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true,
  "ref_form_config": ""
}, {
  "name": "wf_formconfig_id",
  "type": "integer",
  "input_type": "",
  "len": 11,
  "label": "FormConfig",
  "legend": "",
  "required": true,
  "searchable": true,
  "create_column": true
}, {
  "name": "wf_optiongroup_id",
  "type": "integer",
  "input_type": "",
  "len": 11,
  "label": "OptionGroup",
  "legend": "",
  "required": false,
  "searchable": true,
  "create_column": true
},

// ------- //
// STRING/TEXT INPUT ------- //
// ------- //

{
  "name": "placeholder",
  "type": "string",
  "input_type": "text",
  "label": "Input placeholder",
  "create_column": false
}, {
  "name": "defaultValue",
  "type": "string",
  "input_type": "text",
  "label": "Value by default",
  "legend": "Gives the default value of the input element.",
  "create_column": false
}, {
  "name": "data",
  "type": "text",
  "input_type": "",
  "len": 65555,
  "label": "Data",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false
}, {
  "name": "valueBy",
  "type": "string",
  "label": "Select value by",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false
}, {
  "name": "labelBy",
  "type": "string",
  "label": "Select value by",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false
},

// Validation Strategy

{
  "name": "minLength",
  "type": "number",
  //"input_type": "text",
  "label": " The minimum number of characters allowed",
  "create_column": false
}, {
  "name": "maxLength",
  "type": "number",
  //"input_type": "text",
  "label": " The maximum number of characters allowed",
  "create_column": false
},

// Transform Strategy
{
  "name": "transformable",
  "type": "boolean",
  "input_type": "checkbox",
  "label": "FIELD'S TRANSFORMER",
  "placeholder": "active option",
  "legend": "use transformer to <strong>format value</strong>",
  "create_column": false,
  "attributes": {
    "placeholder": "action option"
  }
}, {
  "name": "transform",
  "type": "string",
  "input_type": "panel",
  "label": "Input placeholder",
  "create_column": false,
  "attributes": {
    "valueBy": "action",
    "grid": "col-sm-6",
    "condition": {
      "action": ["visible", "hidden"],
      "rules": ["transformable", "===", true]
    },
    "data": [{
      action: "toCapital",
      label: "CAPITALIZE"
    }, {
      action: "toUpper",
      label: "UPPERCASE"
    }, {
      action: "toLower",
      label: "LOWERCASE"
    }, {
      action: "toSlug",
      label: "SLUGIFY"
    }]
  }
},

// ------- //
// TEXT INPUT ------- //
// ------- //

{
  "name": "rows",
  "type": "number",
  "input_type": "range",
  "label": "Max Rows",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "",
    "minimum": 1,
    "maximum": 20
  }
},

// ------- //
// DATE INPUT ------- //
// ------- //

{
  "name": "dateFormat",
  "type": "string",
  "label": "Date Format",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false,
  "legend": ""
}, {
  "name": "showMonthDropdown",
  "type": "boolean",
  "input_type": "checkbox",
  "label": "",
  "legend": "",
  "create_column": false,
  "attributes": {
    "placeholder": "Show select month input"
  }
}, {
  "name": "showYearDropdown",
  "type": "boolean",
  "input_type": "checkbox",
  "label": "",
  "legend": "",
  "create_column": false,
  "attributes": {
    "placeholder": "Show select years input"
  }
}, {
  "name": "showWeekNumbers",
  "type": "boolean",
  "input_type": "checkbox",
  "label": "",
  "legend": "",
  "create_column": false,
  "attributes": {
    "placeholder": "Display week numbers"
  }
}, {
  "name": "monthsShown",
  "type": "number",
  "input_type": "range",
  "label": "Month visible",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "",
    "minimum": 1,
    "maximum": 4
  }
}, {
  "name": "minDate",
  "type": "string",
  "input_type": "date",
  "label": "Date Minimum",
  "legend": "indicate the allowed range of values for the element.",
  "create_column": false,
  "attributes": {
    "showMonthDropdown": true,
    "showYearDropdown": true
  }
}, {
  "name": "maxDate",
  "type": "string",
  "input_type": "date",
  "label": "Date Maximum",
  "legend": "indicate the allowed range of values for the element",
  "create_column": false,
  "attributes": {
    "showMonthDropdown": true,
    "showYearDropdown": true
  }
},

// ------- //
// CHECKBOX INPUT ------- //
// ------- //

{
  "name": "hiddenLabel",
  "type": "boolean",
  "input_type": "checkbox",
  "label": "",
  "legend": "",
  "create_column": false,
  "attributes": {
    "placeholder": "Label is hidden"
  }
},

// ------- //
// NUMBER INPUT ------- //
// ------- //

{
  "name": "placeholder",
  "type": "string",
  "input_type": "text",
  "label": "Input placeholder",
  "create_column": false
},
/*
{
  "name": "defaultValue",
  "type": "number",
  "input_type": "text",
  "label": "Value by default",
  "legend": "Gives the default value of the input element.",
  "create_column": false
},
*/
{
  "name": "minimum",
  "type": "number",
  //"input_type": "text",
  "label": "Value Minimum",
  "legend": "indicate the allowed range of values for the element.",
  "create_column": false
}, {
  "name": "maximum",
  "type": "number",
  //"input_type": "text",
  "label": "Value Maximum",
  "legend": "indicate the allowed range of values for the element",
  "create_column": false
}, {
  "name": "step",
  "type": "number",
  //"input_type": "text",
  "label": "Step",
  "legend": "Specifies the value granularity of the element’s value.",
  "create_column": false
}, {
  "name": "sufix",
  "type": "string",
  "input_type": "text",
  "label": "Sufix",
  "legend": "exemple : <strong>%, px, cm, l</strong> etc...",
  "create_column": false
}, {
  "name": "isFloat",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "",
  "legend": "",
  "create_column": false,
  "attributes": {
    placeholder: "Accepted decimal number"
  }
},

// ------- //
// SELECT_MULTIPLE INPUT ------- //
// ------- //

{
  "name": "isInlineOption",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": false,
  "attributes": {
    placeholder: "Display option(s) inline"
  }
},

// ------- //
// SELECT_MULTIPLE INPUT ------- //
// ------- //

{
  "name": "placeholder",
  "type": "string",
  "input_type": "text",
  "label": "Input placeholder",
  "create_column": false
}, {
  "name": "data",
  "type": "text",
  "input_type": "",
  "len": 65555,
  "label": "Data",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false
}, {
  "name": "valueBy",
  "type": "string",
  "label": "Select value by",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false
}, {
  "name": "labelBy",
  "type": "string",
  "label": "Select value by",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false
}, {
  "name": "isMonkey",
  "type": "boolean",
  "create_column": false
}, {
  "name": "isBaobab",
  "type": "boolean",
  "create_column": false
}, {
  "name": "optionType",
  "type": "string",
  "input_type": "",
  "label": "Current Tree",
  "required": false,
  "searchable": false,
  "editable": true,
  "create_column": false
}, {
  "name": "minItems",
  "type": "number",
  //"input_type": "text",
  "label": "Minimum items selectable",
  "legend": "indicate the allowed range of values for the element.",
  "create_column": false
}, {
  "name": "maxItems",
  "type": "number",
  //"input_type": "text",
  "label": "Maximum items selectable",
  "legend": "indicate the allowed range of values for the element",
  "create_column": false
}, {
  "name": "isMultiple",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": false,
  "attributes": {
    placeholder: "User can select multiple option(s)"
  }
}, {
  "name": "isUnfold",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": false,
  "attributes": {
    placeholder: "Unfold panel archive option"
  }
}, {
  "name": "canSearch",
  "type": "boolean",
  "input_type": "",
  "len": 1,
  "label": "",
  "legend": "",
  "required": false,
  "searchable": false,
  "create_column": false,
  "attributes": {
    placeholder: "Display the search input"
  }
},

// ------- //
// MONKEY SELECT ------- //
// ------- //

{
  "name": "monkeyGroup",
  "type": "string",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false
}, {
  "name": "monkeyObserve",
  "type": "string",
  "input_type": "select",
  "label": "Monkey observe field",
  "legend": "select field type <strong>select2 Baobab</strong> or <strong>select2 Monkey</strong>",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false,
  "attributes": {
    valueBy: "name",
    "data": []
  }
}, {
  "name": "monkeyFilterBy",
  "type": "string",
  "input_type": "select",
  "label": "Monkey Filter options result by option or branch",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false,
  "attributes": {
    valueBy: "name",
    "data": [{
      label: "Option",
      name: "option"
    }, {
      label: "Branch",
      name: "branch"
    }]
  }
}, {
  "name": "monkeyBranch",
  "type": "number",
  "input_type": "select",
  "label": "Monkey Select Branch",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": false,
  "attributes": {
    valueBy: "id",
    "data": [],
    "condition": {
      "action": ["visible", "hidden"],
      "rules": ["monkeyFilterBy", "===", "branch"]
    }
  }
},

// ------- //
// WFIELD SELECT ------- //
// ------- //

{
  "name": "wf_label",
  "type": "text",
  "input_type": "textarea",
  "label": "Override Label by Html label",
  "legend": "You can use tag html <strong>&lt;strong&gt;</strong> and <strong>&lt;br&gt;</strong> .",
  "create_column": false,
  "len": 600,
  "attributes": {
    rows: 4
  }
}, {
  "name": "wf_height",
  "type": "number",
  "input_type": "range",
  "label": "Min Height",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "px",
    "minimum": 0,
    "maximum": 600
  }
}, {
  "name": "wf_width",
  "type": "number",
  "input_type": "range",
  "label": "Max Width",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "px",
    "minimum": 400,
    "maximum": 1920
  }
},

// WFIELD SELECT'S OPTIONS ------------ //

{
  "name": "wf_option_width",
  "type": "number",
  "input_type": "range",
  "label": "Options Width",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "px",
    "minimum": 100,
    "maximum": 1024
  }
}, {
  "name": "wf_option_padding",
  "type": "number",
  "input_type": "range",
  "label": "Options Padding",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "px",
    "minimum": 0,
    "maximum": 100
  }
}, {
  "name": "wf_option_margin",
  "type": "number",
  "input_type": "range",
  "label": "Options Margin",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "px",
    "minimum": 0,
    "maximum": 100
  }
}, {
  "name": "wf_option_image_radius",
  "type": "number",
  "input_type": "range",
  "label": "Options Radius",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "%",
    "minimum": 0,
    "maximum": 50
  }
}, {
  "name": "wf_option_image_height",
  "type": "number",
  "input_type": "range",
  "label": "Image Height",
  "create_column": false,
  "attributes": {
    "step": 0,
    "sufix": "px",
    "minimum": 0,
    "maximum": 600
  }
},
/*
  {
    "name": "wf_option_image_width",
    "type": "number",
    "input_type": "range",
    "label": "Options Width",
    "create_column": false,
    "attributes": {
      "step": 0,
      "sufix": "px",
      "minimum": 0,
      "maximum": 100
    }
  },
*/

// ------- //
// DEFAULT VALUE ------- //
// ------- //

{
  "name": "stringValue",
  "type": "string",
  "input_type": "text",
  "label": "value by default",
  "create_column": false
}, {
  "name": "numberValue",
  "type": "number",
  //"input_type": "text",
  "label": "value by default",
  "create_column": false
}, {
  "name": "booleanValue",
  "type": "boolean",
  "input_type": "",
  "label": "",
  "create_column": false,
  "attributes": {
    placeholder: "value by default"
  }
}];

// ordered fields that will be displayed in views
var formDisplayFields = ['label', 'name'];

/**
 * Factory to create new field-config
 */

var WFieldConfigFactory = function () {
  function WFieldConfigFactory() {
    (0, _classCallCheck3.default)(this, WFieldConfigFactory);
  }

  (0, _createClass3.default)(WFieldConfigFactory, null, [{
    key: "create",

    /**
     * Create a fieldConfig form state
     * @return instanceof WFormState
     */
    value: function create() {
      var config = {
        name: 'field-config',
        type: _WFProductType.WF_CORE_FIELD_CONFIG_ID,
        display_fields: formDisplayFields,
        fields: formFields
      };
      var formState = new _WFormState2.default(config);
      return formState;
    }
  }]);
  return WFieldConfigFactory;
}();

;

exports.default = WFieldConfigFactory;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toLocaleErr = undefined;

var _regenerator = __webpack_require__(129);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(126);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _ajv = __webpack_require__(386);

var _ajv2 = _interopRequireDefault(_ajv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import localize from "ajv-i18n/localize/en";
var PHONE_RE = /^[0-9()\-\.\s]+$/;
var EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var URL_RE = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
// ------------------- //
var WFAjv = new _ajv2.default({
  allErrors: true
});
// ------------------- //
WFAjv.addFormat('email', EMAIL_RE);
WFAjv.addFormat('phone', PHONE_RE);
WFAjv.addFormat('url', URL_RE);
// ------------------- //
exports.default = WFAjv;
// ------------------- //

var locales = {
  cz: function cz() {
    return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 389));
  }, // Czech
  de: function de() {
    return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 390));
  }, // German
  en: function en() {
    return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, 391));
  }, // English
  fr: function fr() {
    return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 393));
  }, // French
  es: function es() {
    return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 392));
  }, // Spanish
  hu: function hu() {
    return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 394));
  }, // Hungarian
  it: function it() {
    return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 395));
  }, // Italian
  ja: function ja() {
    return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 396));
  }, // Japanese
  pl: function pl() {
    return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 397));
  }, // Polish
  ru: function ru() {
    return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 398));
  }, // Russian
  sk: function sk() {
    return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 399));
  }, // Slovak
  sv: function sv() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 400));
  }, // Swedish
  zh: function zh() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 401));
  } };
var localize = null;
var currentLang = null;
var langByDefault = "en";
var setLocalize = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!__WF__.hasOwnProperty('LOCALE')) {
              _context.next = 13;
              break;
            }

            langByDefault = __WF__.LOCALE.substring(0, 2);

            if (!locales.hasOwnProperty(langByDefault)) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return locales[langByDefault]();

          case 5:
            localize = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.next = 10;
            return locales.en();

          case 10:
            localize = _context.sent;

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.next = 15;
            return locales.en();

          case 15:
            localize = _context.sent;

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function setLocalize() {
    return _ref.apply(this, arguments);
  };
}();
setLocalize();
var toLocaleErr = exports.toLocaleErr = function toLocaleErr(errors) {
  if (localize) {
    localize(errors);
  }
  return errors.map(function (err) {
    return err["message"];
  });
};

/*
export const toLocaleErr = (err) => {
  let lang = {
    cz: () => localize.cz(err), // Czech
    de: () => localize.de(err), // German
    en: () => localize.en(err), // English
    fr: () => localize.fr(err), // French
    es: () => localize.es(err), // Spanish
    hu: () => localize.hu(err), // Hungarian
    it: () => localize.it(err), // Italian
    ja: () => localize.ja(err), // Japanese
    pl: () => localize.pl(err), // Polish
    ru: () => localize.ru(err), // Russian
    sk: () => localize.sk(err), // Slovak
    sv: () => localize.sv(err), // Swedish
    zh: () => localize.zh(err), // Chinese
  }
  let fn = lang.en;
  if (lang.hasOwnProperty(currentLang)) {
    fn = lang[currentLang];
  }
  fn();
}
*/
// ------------------- //

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

// SLUGIFY ---------------- //

exports.default = function (value) {
	var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";


	var rExps = [{ re: /[\xC0-\xC6]/g, ch: 'A' }, { re: /[\xE0-\xE6]/g, ch: 'a' }, { re: /[\xC8-\xCB]/g, ch: 'E' }, { re: /[\xE8-\xEB]/g, ch: 'e' }, { re: /[\xCC-\xCF]/g, ch: 'I' }, { re: /[\xEC-\xEF]/g, ch: 'i' }, { re: /[\xD2-\xD6]/g, ch: 'O' }, { re: /[\xF2-\xF6]/g, ch: 'o' }, { re: /[\xD9-\xDC]/g, ch: 'U' }, { re: /[\xF9-\xFC]/g, ch: 'u' }, { re: /[\xC7-\xE7]/g, ch: 'c' }, { re: /[\xD1]/g, ch: 'N' }, { re: /[\xF1]/g, ch: 'n' }];

	// converti les caractères accentués en leurs équivalent alpha
	for (var i = 0, len = rExps.length; i < len; i++) {
		value = value.replace(rExps[i].re, rExps[i].ch);
	}

	// 1) met en bas de casse
	// 2) remplace les espace par des tirets
	// 3) enleve tout les caratères non alphanumeriques
	// 4) enlève les doubles tirets
	return value.toLowerCase().replace(/\s+/g, sep).replace(/[^a-z0-9-_]/g, '').replace(/\-{2,}/g, sep);
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFUrl = __webpack_require__(41);

var _WFUrl2 = _interopRequireDefault(_WFUrl);

var _WFClient = __webpack_require__(58);

var _WFClient2 = _interopRequireDefault(_WFClient);

var _WFRequest = __webpack_require__(117);

var _WFRequest2 = _interopRequireDefault(_WFRequest);

var _WFResponse = __webpack_require__(46);

var _WFResponse2 = _interopRequireDefault(_WFResponse);

var _WFormStateFactory = __webpack_require__(215);

var _WFormStateFactory2 = _interopRequireDefault(_WFormStateFactory);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF PLAYER CLIENT ------------------- //

// ------------------- //

var WFPlayerClient = function () {
  function WFPlayerClient() {
    (0, _classCallCheck3.default)(this, WFPlayerClient);
  }

  (0, _createClass3.default)(WFPlayerClient, null, [{
    key: "createFormState",


    /**   
     * Create all formState
     * @param wfc
     * @param next return {formConfig, formConfigState, formEntryState}
     **/
    value: function createFormState(wfc, next) {
      var formConfig = _WFormStateFactory2.default.getMergedFormConfig(wfc);
      var formConfigState = _WFormStateFactory2.default.createFormConfigState(formConfig);
      var formEntryState = _WFormStateFactory2.default.createFormEntryState(formConfig);
      next(formConfig, formConfigState, formEntryState);
    }

    /**   
     * Find a custom form config by its identifier
     * @param wfcOrEntryId 
     * @param next.onError is callback
     * @param next.onSuccess is callback(formConfig, formConfigState, formEntryState)
     **/

  }, {
    key: "findFormById",
    value: function findFormById(wfcOrId, next) {
      var onError = next.onError,
          onSuccess = next.onSuccess;

      if ((0, _Lodash.isObject)(wfcOrId)) {
        WFPlayerClient.createFormState(wfcOrId, onSuccess);
      } else {
        var urlArgs = {
          formId: wfcOrId,
          isAppAdmin: false,
          apiBaseUrl: _WFUrl2.default.getBaseUrl()
        };
        _WFClient2.default.findFormById(urlArgs).then(function (res) {
          var wfRes = _WFResponse2.default.getFindFormResponse(res);
          if (wfRes.getHasLogicErrors()) {
            onError(wfRes.getLogicErrors());
          } else {
            WFPlayerClient.createFormState(wfRes.getResultset(), onSuccess);
          }
        }).catch(function (error) {
          console.error(error);
          console.dir(error);
        });
      }
    }

    /**   
     * Find a entry by id
     * @param name
     * @param next.onError is callback
     * @param next.onSuccess is callback(formConfig, formConfigState, formEntryState)
     **/

  }, {
    key: "findById",
    value: function findById(formEntryState, id, next) {
      var urlArgs = {
        isAppAdmin: true,
        formName: formEntryState.getName(),
        apiBaseUrl: _WFUrl2.default.getBaseUrl()
      };
      var onError = next.onError,
          onSuccess = next.onSuccess;

      _WFClient2.default.findById(urlArgs, id).then(function (res) {
        var wfRes = _WFResponse2.default.getFindFormResponse(res);
        if (wfRes.getHasLogicErrors()) {
          onError(wfRes.getLogicErrors());
        } else {
          var formConfig = _WFormStateFactory2.default.getMergedFormConfig(wfRes.getResultset());
          formEntryState.setValues(formConfig);
          onSuccess();
        }
      }).catch(function (error) {
        console.error(error);
      });
    }

    /**
     * Increment view count of form
     * @param urlArgs object containing elements to build the request url
     * @param integer incr
     */

  }, {
    key: "incrViewCount",
    value: function incrViewCount(formName, next) {
      _WFClient2.default.incrViewCount({ formName: formName }).then(function (res) {
        var wfRes = _WFResponse2.default.getIncrCountResponse(res);
        if (wfRes.getHasLogicErrors()) {
          console.error(wfRes.getLogicErrors());
        } else {
          next();
        }
      }).catch(function (error) {
        console.error(error);
      });
    }

    /**
     * Increment completed count of form
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "incrCompletedCount",
    value: function incrCompletedCount(formName, next) {
      _WFClient2.default.incrCompletedCount({ formName: formName }).then(function (res) {
        var wfRes = _WFResponse2.default.getIncrCountResponse(res);
        if (wfRes.getHasLogicErrors()) {
          console.error(wfRes.getLogicErrors());
        } else {
          next();
        }
      }).catch(function (error) {
        console.error(error);
      });
    }

    /**
     * Increment uncompleted count of form
     * @param urlArgs object containing elements to build the request url
     */

  }, {
    key: "incrUncompletedCount",
    value: function incrUncompletedCount(formName, next) {
      _WFClient2.default.incrUncompletedCount({ formName: formName }).then(function (res) {
        var wfRes = _WFResponse2.default.getIncrCountResponse(res);
        if (wfRes.getHasLogicErrors()) {
          console.error(wfRes.getLogicErrors());
        } else {
          next();
        }
      }).catch(function (error) {
        console.error(error);
      });
    }
  }]);
  return WFPlayerClient;
}();

exports.default = WFPlayerClient;

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wfplayer = __webpack_require__(243);

var _wfplayer2 = _interopRequireDefault(_wfplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__.p = __WF__.hasOwnProperty('PUBLIC_URL') ? __WF__.PUBLIC_URL : "";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isDev = false;
if (window.hasOwnProperty("__WF_DEV_ENVIRONMENT__")) {
  isDev = window.__WF_DEV_ENVIRONMENT__;
}

exports.default = isDev;

/***/ }),
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SECTION ------------------- //

// ------------------- //

var classes = {
    wrapper: "wf-section-boxed",
    row: "row"
};

// ------------------- //

var WFBoxed = function (_Component) {
    (0, _inherits3.default)(WFBoxed, _Component);

    function WFBoxed() {
        (0, _classCallCheck3.default)(this, WFBoxed);
        return (0, _possibleConstructorReturn3.default)(this, (WFBoxed.__proto__ || (0, _getPrototypeOf2.default)(WFBoxed)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFBoxed, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$row = _props.row,
                row = _props$row === undefined ? true : _props$row,
                _props$className = _props.className,
                className = _props$className === undefined ? "" : _props$className;

            return _react2.default.createElement(
                "div",
                { className: (row ? classes.row : "") + " " + classes.wrapper + " " + className
                },
                this.props.children
            );
        }
    }]);
    return WFBoxed;
}(_react.Component);

// ------------------- //

exports.default = WFBoxed;

// ------------------- //

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFBtn = __webpack_require__(54);

var _WFBtn2 = _interopRequireDefault(_WFBtn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF BTN GROUP ------------------- //

// ------------------- //

var classes = {
	wrapper: "wf-btn-group"
};

// ------------------- //

var WFBtnGroup = function (_Component) {
	(0, _inherits3.default)(WFBtnGroup, _Component);

	function WFBtnGroup() {
		(0, _classCallCheck3.default)(this, WFBtnGroup);
		return (0, _possibleConstructorReturn3.default)(this, (WFBtnGroup.__proto__ || (0, _getPrototypeOf2.default)(WFBtnGroup)).apply(this, arguments));
	}

	(0, _createClass3.default)(WFBtnGroup, [{
		key: "render",


		// ------------------- //

		value: function render() {
			var _props = this.props,
			    _props$className = _props.className,
			    className = _props$className === undefined ? "" : _props$className,
			    _props$schema = _props.schema,
			    schema = _props$schema === undefined ? [] : _props$schema,
			    _props$visible = _props.visible,
			    visible = _props$visible === undefined ? false : _props$visible;

			if (!visible || schema.length === 0) return false;
			return _react2.default.createElement(
				"span",
				{ className: classes.wrapper + " " + className },
				this.getBtns(schema)
			);
		}

		// ------------------- //

	}, {
		key: "getBtns",
		value: function getBtns(buttons) {
			var _this2 = this;

			return buttons.map(function (button, i) {
				var _button$icon = button.icon,
				    icon = _button$icon === undefined ? "" : _button$icon,
				    _button$label = button.label,
				    label = _button$label === undefined ? "" : _button$label,
				    _button$className = button.className,
				    className = _button$className === undefined ? "" : _button$className,
				    _button$onClick = button.onClick,
				    onClick = _button$onClick === undefined ? null : _button$onClick;
				var _props2 = _this2.props,
				    _props2$counter = _props2.counter,
				    counter = _props2$counter === undefined ? 0 : _props2$counter,
				    _props2$counterMax = _props2.counterMax,
				    counterMax = _props2$counterMax === undefined ? 0 : _props2$counterMax;

				return _react2.default.createElement(
					_WFBtn2.default,
					{
						key: i,
						visible: !_this2.isHidden(button),
						className: className + " " + _this2.getBtnState(button),
						onClick: onClick,
						icon: icon,
						counter: counter,
						counterMax: counterMax
					},
					label
				);
			});
		}

		// ------------------- //

	}, {
		key: "getBtnState",
		value: function getBtnState(btn) {
			var _props3 = this.props,
			    _props3$selected = _props3.selected,
			    selected = _props3$selected === undefined ? [] : _props3$selected,
			    _props3$selectedBy = _props3.selectedBy,
			    selectedBy = _props3$selectedBy === undefined ? "id" : _props3$selectedBy,
			    _props3$selectedClass = _props3.selectedClassName,
			    selectedClassName = _props3$selectedClass === undefined ? "selected" : _props3$selectedClass;

			return selected.includes(btn[selectedBy]) ? selectedClassName : "";
		}

		// ------------------- //

	}, {
		key: "isHidden",
		value: function isHidden(btn) {
			var _props4 = this.props,
			    _props4$hidden = _props4.hidden,
			    hidden = _props4$hidden === undefined ? [] : _props4$hidden,
			    _props4$hiddenBy = _props4.hiddenBy,
			    hiddenBy = _props4$hiddenBy === undefined ? "id" : _props4$hiddenBy;

			return hidden.includes(btn[hiddenBy]);
		}
	}]);
	return WFBtnGroup;
}(_react.Component);

// ------------------- //

exports.default = WFBtnGroup;

// ------------------- //

/*

	<WFBtnGroup
		visible={true}
		selected={["Studio"]}
		selectedBy={"label"}
		selectedClassName={"selected"}
		schema={[
			{label:"Setting", icon:"adjustments", onClick:null },
			{label:"Studio", icon:"tools", onClick:null },
			{label:"Save", icon:"global",onClick:null },
		]}
	/>


	<WFBtnGroup
		visible={true}
		hidden={[]}
		hiddenBy={"label"}
		schema={[
			{label:"Delete", icon:"close", onClick:null, className:`wf-btn-red` },
			{label:"Cancel", icon:"close", onClick:null, className:`wf-btn-orange` },
			{label:"Save", icon:"check",onClick:null, className:`wf-btn-green` },
			{label:"Publish", icon:"loop",onClick:null, className:`wf-btn-blue` },
		]}
	/>

*/

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Chartist from "chartist";

if (!Chartist) {
  console.error("Chartist not found...");
}

// ------------------- //

// WF CHARTIST GRAPH ------------------- //

// ------------------- //

var WFChartistGraph = function (_Component) {
  (0, _inherits3.default)(WFChartistGraph, _Component);

  function WFChartistGraph(props) {
    (0, _classCallCheck3.default)(this, WFChartistGraph);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFChartistGraph.__proto__ || (0, _getPrototypeOf2.default)(WFChartistGraph)).call(this, props));

    _this.displayName = 'WFChartistGraph';
    _this.chartist = null;
    _this.state = {};
    return _this;
  }

  // ------------------- //

  (0, _createClass3.default)(WFChartistGraph, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$className = _props.className,
          className = _props$className === undefined ? "" : _props$className,
          _props$wrapperClassNa = _props.wrapperClassName,
          wrapperClassName = _props$wrapperClassNa === undefined ? "" : _props$wrapperClassNa,
          style = _props.style,
          children = _props.children,
          data = _props.data,
          type = _props.type;

      var childrenWithProps = children && _react.Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, {
          type: type,
          data: data
        });
      });
      return _react2.default.createElement(
        'div',
        { className: 'wf--chart ' + wrapperClassName },
        _react2.default.createElement(
          'div',
          { className: 'ct-chart ' + (className || ''), ref: 'chart', style: style },
          childrenWithProps
        )
      );
    }

    // ------------------- //

  }, {
    key: 'updateChart',
    value: function updateChart(config) {
      var type = config.type,
          data = config.data;

      var options = config.options || {};
      var responsiveOptions = config.responsiveOptions || [];
      var event = void 0;
      if (this.chartist) {
        this.chartist.update(data, options, responsiveOptions);
      } else {
        this.chartist = new Chartist[type](this.refs.chart, data, options, responsiveOptions);
        if (config.listener) {
          for (event in config.listener) {
            if (config.listener.hasOwnProperty(event)) {
              this.chartist.on(event, config.listener[event]);
            }
          }
        }
      }
      return this.chartist;
    }

    // ------------------- //

    // COMPONENT LIFECYCLE ------------------- //

    // ------------------- //

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.updateChart(newProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.chartist) {
        try {
          this.chartist.detach();
        } catch (err) {
          throw new Error('Internal chartist error', err);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateChart(this.props);
    }
  }]);
  return WFChartistGraph;
}(_react.Component);

// ------------------- //

WFChartistGraph.propTypes = {
  type: _react2.default.PropTypes.oneOf(['Line', 'Bar', 'Pie']).isRequired,
  data: _react2.default.PropTypes.object.isRequired,
  className: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.object,
  responsiveOptions: _react2.default.PropTypes.array,
  style: _react2.default.PropTypes.object
};

// ------------------- //
exports.default = WFChartistGraph;
// ------------------- //

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SECTION ------------------- //

// ------------------- //

var classe = "clearfix";

// ------------------- //

var WFClear = function (_Component) {
    (0, _inherits3.default)(WFClear, _Component);

    function WFClear() {
        (0, _classCallCheck3.default)(this, WFClear);
        return (0, _possibleConstructorReturn3.default)(this, (WFClear.__proto__ || (0, _getPrototypeOf2.default)(WFClear)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFClear, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { className: classe });
        }
    }]);
    return WFClear;
}(_react.Component);

// ------------------- //

exports.default = WFClear;

// ------------------- //

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FIELD REQUIRED ------------------- //

// ------------------- //

var classes = {};

// ------------------- //

var WFRequired = function (_Component) {
    (0, _inherits3.default)(WFRequired, _Component);

    function WFRequired() {
        (0, _classCallCheck3.default)(this, WFRequired);
        return (0, _possibleConstructorReturn3.default)(this, (WFRequired.__proto__ || (0, _getPrototypeOf2.default)(WFRequired)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFRequired, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$required = _props.required,
                required = _props$required === undefined ? false : _props$required,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style,
                _props$asterix = _props.asterix,
                asterix = _props$asterix === undefined ? "*" : _props$asterix;

            if (!required) return false;
            return _react2.default.createElement(
                "wf-req",
                { style: style },
                asterix
            );
        }
    }]);
    return WFRequired;
}(_react.Component);

// ------------------- //

exports.default = WFRequired;

// ------------------- //

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SECTION ------------------- //

// ------------------- //

var classes = {
    wrapper: "row wf-section-boxed"
};

// ------------------- //

var WFSection = function (_Component) {
    (0, _inherits3.default)(WFSection, _Component);

    function WFSection() {
        (0, _classCallCheck3.default)(this, WFSection);
        return (0, _possibleConstructorReturn3.default)(this, (WFSection.__proto__ || (0, _getPrototypeOf2.default)(WFSection)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFSection, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$boxed = _props.boxed,
                boxed = _props$boxed === undefined ? false : _props$boxed,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style;

            if (!visible) return false;
            if (!boxed) {
                return _react2.default.createElement(
                    "wf-section",
                    { style: style },
                    this.props.children
                );
            } else {
                return _react2.default.createElement(
                    "div",
                    { className: classes.wrapper, style: style },
                    this.props.children
                );
            }
        }
    }]);
    return WFSection;
}(_react.Component);

// ------------------- //

exports.default = WFSection;

// ------------------- //

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF SECTION ------------------- //

// ------------------- //

var WFTitle = function (_Component) {
    (0, _inherits3.default)(WFTitle, _Component);

    function WFTitle() {
        (0, _classCallCheck3.default)(this, WFTitle);
        return (0, _possibleConstructorReturn3.default)(this, (WFTitle.__proto__ || (0, _getPrototypeOf2.default)(WFTitle)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'wf-title',
                { style: this.getStyle()
                },
                this.props.children
            );
        }

        // ------------------- //

    }, {
        key: 'getStyle',
        value: function getStyle() {
            var _props = this.props,
                _props$top = _props.top,
                top = _props$top === undefined ? 0 : _props$top,
                _props$bottom = _props.bottom,
                bottom = _props$bottom === undefined ? 0 : _props$bottom;

            var style = {};
            if (top > 0) {
                style['marginTop'] = top;
            }
            if (bottom > 0) {
                style['marginBottom'] = bottom;
            }
            return style;
        }
    }]);
    return WFTitle;
}(_react.Component);

// ------------------- //

exports.default = WFTitle;

// ------------------- //

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Constants = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF VIDEO HTML5 ------------------- //

// ------------------- //

var PLAYER_VIDEO = "PlayerVideo";

// ------------------- //

// ------------------- //

var classes = {
    wrapper: "wf-form-wrapper"
};

// ------------------- //

var WFVideoHTML5 = function (_Component) {
    (0, _inherits3.default)(WFVideoHTML5, _Component);

    function WFVideoHTML5(props) {
        (0, _classCallCheck3.default)(this, WFVideoHTML5);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WFVideoHTML5.__proto__ || (0, _getPrototypeOf2.default)(WFVideoHTML5)).call(this, props));

        var _props$loop = props.loop,
            loop = _props$loop === undefined ? true : _props$loop,
            _props$autoPlay = props.autoPlay,
            autoPlay = _props$autoPlay === undefined ? true : _props$autoPlay,
            _props$muted = props.muted,
            muted = _props$muted === undefined ? true : _props$muted,
            _props$preload = props.preload,
            preload = _props$preload === undefined ? "auto" : _props$preload,
            _props$width = props.width,
            width = _props$width === undefined ? "100%" : _props$width,
            _props$hasHeigth = props.hasHeigth,
            hasHeigth = _props$hasHeigth === undefined ? "auto" : _props$hasHeigth;


        _this.state = {

            loop: loop,
            autoPlay: autoPlay,
            muted: muted,
            preload: preload,

            width: width,
            height: hasHeigth
        };

        _this.player;
        return _this;
    }

    // ------------------- //

    (0, _createClass3.default)(WFVideoHTML5, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible,
                _props$className = _props.className,
                className = _props$className === undefined ? "" : _props$className,
                _props$context = _props.context,
                context = _props$context === undefined ? {} : _props$context;
            var _context$poster = context.poster,
                poster = _context$poster === undefined ? "" : _context$poster,
                _context$mp = context.mp4,
                mp4 = _context$mp === undefined ? "" : _context$mp,
                _context$webm = context.webm,
                webm = _context$webm === undefined ? "" : _context$webm,
                _context$ogv = context.ogv,
                ogv = _context$ogv === undefined ? "" : _context$ogv;

            if (!visible) return false;
            return _react2.default.createElement(
                'wf-video-html5',
                null,
                _react2.default.createElement(
                    'video',
                    (0, _extends3.default)({
                        ref: PLAYER_VIDEO,
                        poster: poster,
                        className: className
                    }, this.state),
                    this.get(mp4, _Constants.TYPE_MP4),
                    this.get(webm, _Constants.TYPE_WEBM),
                    this.get(ogv, _Constants.TYPE_OGV)
                )
            );
        }

        // ------------------- //

    }, {
        key: 'get',
        value: function get(fileURL, fileType) {
            if (this.fileNotValid(fileURL)) return false;
            return _react2.default.createElement('source', { src: fileURL, type: fileType });
        }

        // ------------------- //

    }, {
        key: 'fileNotValid',
        value: function fileNotValid(fileURL) {
            return !fileURL || fileURL === "";
        }

        // ------------------- //


        // COMPONENT LIFECYCLE ------------------- //


        // ------------------- //

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.hasHeigth !== this.state.height) {
                this.setState({
                    height: nextProps.hasHeigth
                });
            }
            if (this.player) {
                !nextProps.isPlaying ? this.player.pause() : this.player.play();
            }
        }

        // -------------- //

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.player = _reactDom2.default.findDOMNode(this.refs[PLAYER_VIDEO]);
        }
    }]);
    return WFVideoHTML5;
}(_react.Component);

// ------------------- //

exports.default = WFVideoHTML5;

// ------------------- //

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFConsole = __webpack_require__(61);

var _WFConsole2 = _interopRequireDefault(_WFConsole);

var _WFDataTypes = __webpack_require__(47);

var _WFInputTypes = __webpack_require__(24);

var _WFInputString = __webpack_require__(68);

var _WFTextarea = __webpack_require__(181);

var _WFTextarea2 = _interopRequireDefault(_WFTextarea);

var _WFCheckbox = __webpack_require__(174);

var _WFCheckbox2 = _interopRequireDefault(_WFCheckbox);

var _WFRadioButton = __webpack_require__(178);

var _WFRadioButton2 = _interopRequireDefault(_WFRadioButton);

var _WFInputNumber = __webpack_require__(177);

var _WFInputNumber2 = _interopRequireDefault(_WFInputNumber);

var _WFRange = __webpack_require__(179);

var _WFRange2 = _interopRequireDefault(_WFRange);

var _WFInputFile = __webpack_require__(176);

var _WFInputFile2 = _interopRequireDefault(_WFInputFile);

var _WFInputDate = __webpack_require__(175);

var _WFInputDate2 = _interopRequireDefault(_WFInputDate);

var _WFSelect = __webpack_require__(180);

var _WFSelect2 = _interopRequireDefault(_WFSelect);

var _WFSelect3 = __webpack_require__(45);

var _WFSelect4 = _interopRequireDefault(_WFSelect3);

var _WFSelect2Word = __webpack_require__(201);

var _WFSelect2Word2 = _interopRequireDefault(_WFSelect2Word);

var _WFSelect2Number = __webpack_require__(200);

var _WFSelect2Number2 = _interopRequireDefault(_WFSelect2Number);

var _WFSelect2Line = __webpack_require__(199);

var _WFSelect2Line2 = _interopRequireDefault(_WFSelect2Line);

var _WFSelect2Image = __webpack_require__(198);

var _WFSelect2Image2 = _interopRequireDefault(_WFSelect2Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF INPUT FACTORY ------------------- //

// ------------------- //

var WFInputFactory = function () {
  function WFInputFactory() {
    (0, _classCallCheck3.default)(this, WFInputFactory);
  }

  (0, _createClass3.default)(WFInputFactory, null, [{
    key: "get",
    value: function get(type) {
      var input_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var isAdminForm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


      if (!type) {
        throw new Error('WFInputFactory => fieldSchema is not defined');
        return false;
      }

      var inputType = _WFInputTypes.INPUT_TEXT;
      if (input_type) {
        inputType = input_type;
      } else if (type) {
        inputType = type;
      }

      /**
       * Select input by inputType 
       **/
      switch (inputType) {

        // TEXTAREA ------- //
        case _WFInputTypes.INPUT_TEXTAREA:
          return _WFTextarea2.default;

        // TEXT ------- //
        case _WFInputTypes.INPUT_TEXT:
          return _WFInputString.WFInputText;

        // EMAIL ------- //
        case _WFInputTypes.INPUT_EMAIL:
          return _WFInputString.WFInputEmail;

        // TEL ------- //
        case _WFInputTypes.INPUT_TEL:
          return _WFInputString.WFInputTel;

        // NUMBER ------- //
        case _WFInputTypes.INPUT_NUMBER:
        case _WFDataTypes.WF_TYPE_INTEGER:
        case _WFDataTypes.WF_TYPE_NUMBER:
          return _WFInputNumber2.default;

        // URL ------- //
        case _WFInputTypes.INPUT_URL:
          return _WFInputString.WFInputUrl;

        // PASSWORD ------- //
        case _WFInputTypes.INPUT_PASSWORD:
          return _WFInputString.WFInputPassword;

        // FILE ------- //
        case _WFInputTypes.INPUT_FILE:
          return _WFInputFile2.default;

        // CHECKBOX ------ //
        case _WFInputTypes.INPUT_CHECKBOX:
        case _WFDataTypes.WF_TYPE_BOOLEAN:
          return _WFCheckbox2.default;

        case _WFInputTypes.INPUT_RADIO_BUTTON:
          return _WFRadioButton2.default;

        // RANGE ------ //
        case _WFInputTypes.INPUT_RANGE:
          return _WFRange2.default;

        // SELECT -------- //
        case _WFInputTypes.INPUT_SELECT:
          return _WFSelect2.default;

        // SELECT 2 ------ //
        case _WFInputTypes.INPUT_SELECT2:
        case _WFInputTypes.INPUT_SELECT2_BAOBAB:
        case _WFInputTypes.INPUT_SELECT2_MONKEY:
        case _WFDataTypes.WF_TYPE_SELECT_SINGLE:
        case _WFDataTypes.WF_TYPE_SELECT_MULTIPLE:
          return _WFSelect4.default;

        // WFIELD SELECT ------ //
        case _WFInputTypes.INPUT_SELECT_WORD:
          if (isAdminForm) {
            return _WFRadioButton2.default;
          } else {
            return _WFSelect2Word2.default;
          }

        case _WFInputTypes.INPUT_SELECT_NUMBER:
          if (isAdminForm) {
            return _WFRadioButton2.default;
          } else {
            return _WFSelect2Number2.default;
          }

        case _WFInputTypes.INPUT_SELECT_LINE:
          if (isAdminForm) {
            return _WFSelect4.default;
          } else {
            return _WFSelect2Line2.default;
          }

        case _WFInputTypes.INPUT_SELECT_IMAGE:
          if (isAdminForm) {
            return _WFSelect4.default;
          } else {
            return _WFSelect2Image2.default;
          }

        // DATE ------ //
        case _WFDataTypes.WF_TYPE_DATE:
        case _WFInputTypes.INPUT_DATE:
          return _WFInputDate2.default;

        // NULL ------- //
        default:
          return _WFInputString.WFInputText;
      }
    }
  }]);
  return WFInputFactory;
}();

// ------------------- //


exports.default = WFInputFactory;
// ------------------- //

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFError = __webpack_require__(109);

var _WFError2 = _interopRequireDefault(_WFError);

var _WFCounter = __webpack_require__(55);

var _WFCounter2 = _interopRequireDefault(_WFCounter);

var _WFRequired = __webpack_require__(158);

var _WFRequired2 = _interopRequireDefault(_WFRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FIELD LABEL ------------------- //

// ------------------- //

var classes = {
  inline: "wf-inline"
};

// ------------------- //

var WFieldLabel = function (_Component) {
  (0, _inherits3.default)(WFieldLabel, _Component);

  function WFieldLabel() {
    (0, _classCallCheck3.default)(this, WFieldLabel);
    return (0, _possibleConstructorReturn3.default)(this, (WFieldLabel.__proto__ || (0, _getPrototypeOf2.default)(WFieldLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFieldLabel, [{
    key: 'render',
    value: function render() {
      var _props$visible = this.props.visible,
          visible = _props$visible === undefined ? true : _props$visible;

      if (!visible) return false;
      var _props = this.props,
          children = _props.children,
          _props$styles = _props.styles,
          styles = _props$styles === undefined ? {} : _props$styles,
          _props$isInline = _props.isInline,
          isInline = _props$isInline === undefined ? false : _props$isInline,
          _props$isEditable = _props.isEditable,
          isEditable = _props$isEditable === undefined ? false : _props$isEditable,
          _props$required = _props.required,
          required = _props$required === undefined ? false : _props$required,
          _props$valid = _props.valid,
          valid = _props$valid === undefined ? false : _props$valid,
          _props$errors = _props.errors,
          errors = _props$errors === undefined ? [] : _props$errors;
      var _styles$label = styles.label,
          label = _styles$label === undefined ? {} : _styles$label,
          _styles$labelText = styles.labelText,
          labelText = _styles$labelText === undefined ? {} : _styles$labelText,
          _styles$labelRequired = styles.labelRequired,
          labelRequired = _styles$labelRequired === undefined ? {} : _styles$labelRequired;

      return _react2.default.createElement(
        'wf-label',
        { style: label },
        _react2.default.createElement(
          'label',
          { className: isInline ? classes.inline : "" },
          _react2.default.createElement(
            _WFText2.default,
            {
              html: true,
              style: labelText
            },
            children
          ),
          _react2.default.createElement(_WFRequired2.default, {
            style: labelRequired,
            required: required
          }),
          this.getCounter(),
          _react2.default.createElement(_WFError2.default, {
            errors: errors
            //errors={isEditable?[]:errors}
          })
        )
      );
    }
  }, {
    key: 'getCounter',
    value: function getCounter() {
      var _props2 = this.props,
          _props2$type = _props2.type,
          type = _props2$type === undefined ? null : _props2$type,
          _props2$focused = _props2.focused,
          focused = _props2$focused === undefined ? false : _props2$focused,
          _props2$required = _props2.required,
          required = _props2$required === undefined ? false : _props2$required,
          _props2$counter = _props2.counter,
          counter = _props2$counter === undefined ? 0 : _props2$counter,
          minLength = _props2.minLength,
          maxLength = _props2.maxLength;

      var min = minLength;
      var max = maxLength;
      if (type === "string" && !focused || type === "text" && !focused) {
        return false;
      }
      if (max === "" || max === 0 || min === 0 && max === 0 || min === 1 && max === 1 || counter === max && type.includes("select")) {
        return false;
      } else {
        return _react2.default.createElement(_WFCounter2.default, {
          visible: required,
          counter: counter,
          min: minLength,
          max: maxLength,
          parenthesis: false
          //all={true}
        });
      }
    }
  }]);
  return WFieldLabel;
}(_react.Component);

// ------------------- //

exports.default = WFieldLabel;

// ------------------- //

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FIELD LEGEND ------------------- //

// ------------------- //

var classes = {};

// ------------------- //

var WFieldLegend = function (_Component) {
    (0, _inherits3.default)(WFieldLegend, _Component);

    function WFieldLegend() {
        (0, _classCallCheck3.default)(this, WFieldLegend);
        return (0, _possibleConstructorReturn3.default)(this, (WFieldLegend.__proto__ || (0, _getPrototypeOf2.default)(WFieldLegend)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFieldLegend, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible,
                _props$style = _props.style,
                style = _props$style === undefined ? {} : _props$style;

            if (!visible) return false;
            return _react2.default.createElement('wf-legend', { style: style, dangerouslySetInnerHTML: { __html: children } });
        }
    }]);
    return WFieldLegend;
}(_react.Component);

// ------------------- //

exports.default = WFieldLegend;

// ------------------- //

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _windowWatcher = __webpack_require__(149);

var _windowWatcher2 = _interopRequireDefault(_windowWatcher);

var _Lodash = __webpack_require__(6);

var _WFCol = __webpack_require__(44);

var _WFCol2 = _interopRequireDefault(_WFCol);

var _WFRow = __webpack_require__(38);

var _WFRow2 = _interopRequireDefault(_WFRow);

var _WFBtn = __webpack_require__(54);

var _WFBtn2 = _interopRequireDefault(_WFBtn);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFClear = __webpack_require__(157);

var _WFClear2 = _interopRequireDefault(_WFClear);

var _WFCounter = __webpack_require__(55);

var _WFCounter2 = _interopRequireDefault(_WFCounter);

var _WFLoader = __webpack_require__(85);

var _WFLoader2 = _interopRequireDefault(_WFLoader);

var _WFVideoHTML = __webpack_require__(161);

var _WFVideoHTML2 = _interopRequireDefault(_WFVideoHTML);

var _WFIcon = __webpack_require__(10);

var _WFormStatusHelper = __webpack_require__(172);

var _WFormStatusHelper2 = _interopRequireDefault(_WFormStatusHelper);

var _WFormConditionHelper = __webpack_require__(86);

var _WFormConditionHelper2 = _interopRequireDefault(_WFormConditionHelper);

var _WFormStyleHelper = __webpack_require__(114);

var _WFormStyleHelper2 = _interopRequireDefault(_WFormStyleHelper);

var _WFormStepHelper = __webpack_require__(113);

var _WFormStepHelper2 = _interopRequireDefault(_WFormStepHelper);

var _WFormNavHelper = __webpack_require__(171);

var _WFormNavHelper2 = _interopRequireDefault(_WFormNavHelper);

var _WFormVideoHelper = __webpack_require__(173);

var _WFormVideoHelper2 = _interopRequireDefault(_WFormVideoHelper);

var _WFormContainer = __webpack_require__(166);

var _WFormContainer2 = _interopRequireDefault(_WFormContainer);

var _WFormStep = __webpack_require__(170);

var _WFormStep2 = _interopRequireDefault(_WFormStep);

var _WFormContent = __webpack_require__(167);

var _WFormContent2 = _interopRequireDefault(_WFormContent);

var _WFieldComponent = __webpack_require__(112);

var _WFieldComponent2 = _interopRequireDefault(_WFieldComponent);

var _WFormResults = __webpack_require__(168);

var _WFEventTypes = __webpack_require__(9);

var _WFConstants = __webpack_require__(30);

var _Constants = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FORM ------------------- //

// ------------------- //

// FORM CONSTANTS


// FORM CHILD COMPONENTS


// FORM HELPERS
var classes = {
  wrapper: "wf-form-wrapper",
  container: "wf-form-container",
  theme: "wf-default-theme",
  loader: "wf-form-loader"
};

// FORM EVENTS


// COMPONENTS

var WFormComponent = function (_Component) {
  (0, _inherits3.default)(WFormComponent, _Component);

  /**
   * Constructor
   * @required in props :
   * @code
   * // app is formView instance
   * <WFormComponent
   *   isEditable={false}
   *   navigation={true}
   *   onPrev={() => app.onPrev()}
   *   onNext={() => app.onNext()}
   *   onSubmit={() => app.onSubmit()}
   *   on={(evenType, eventArgs = {}) => { 
   *     app.on(evenType, eventArgs)
   *   }}
   *   onField={(name, evenType, eventArgs = {}) => {
   *     app.onField(name, evenType, eventArgs)
   *   }}
   *   onGetInput={(type, input_type, isAdminForm) => {
   *     return WFInputFactory.get(type, input_type, isAdminForm);
   *   }}
   * />
   * @endcode
   */
  function WFormComponent(props) {
    (0, _classCallCheck3.default)(this, WFormComponent);

    //console.dir(props)
    var _this = (0, _possibleConstructorReturn3.default)(this, (WFormComponent.__proto__ || (0, _getPrototypeOf2.default)(WFormComponent)).call(this, props));

    if (!(0, _Lodash.isFunction)(props.on)) {
      throw new Error('WFormComponent => on is not defined');
    }
    if (!(0, _Lodash.isFunction)(props.onField)) {
      throw new Error('WFormComponent => onField is not defined');
    }
    _this.state = {
      hasTheme: props.hasTheme
    };
    // Hook formComponent and formView
    props.on(_WFEventTypes.WF_EVENT_ONINIT, _this);
    return _this;
  }

  /**
   * Render the final HTML output
   * @return string html
   */


  (0, _createClass3.default)(WFormComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$isAdmin = this.props.isAdmin,
          isAdmin = _props$isAdmin === undefined ? false : _props$isAdmin;
      var _state = this.state,
          _state$wf_results = _state.wf_results,
          wf_results = _state$wf_results === undefined ? {} : _state$wf_results,
          _state$wf_custom_resu = _state.wf_custom_results,
          wf_custom_results = _state$wf_custom_resu === undefined ? {} : _state$wf_custom_resu;

      return _react2.default.createElement(
        'wf-form',
        null,
        this.getProgressBar(),
        _react2.default.createElement(
          _WFormContainer2.default,
          (0, _extends3.default)({
            visible: true,
            className: _WFormStyleHelper2.default.getContainerClass(this)
          }, _WFormStyleHelper2.default.getVerticalAlignConfig(this)),
          _react2.default.createElement(
            'wf-content',
            null,
            this.getTimeline(),
            _WFormStatusHelper2.default.getContent({
              loaderView: function loaderView() {
                return _react2.default.createElement(
                  _WFRow2.default,
                  null,
                  _react2.default.createElement(
                    _WFCol2.default,
                    null,
                    _react2.default.createElement(_WFLoader2.default, {
                      className: classes.loader
                    })
                  )
                );
              },
              editView: function editView() {
                return _react2.default.createElement(
                  'wf-content',
                  {
                    ref: 'WFContent',
                    style: _WFormStyleHelper2.default.getContentStyle(_this2) },
                  _react2.default.createElement('wf-form-header', null),
                  _react2.default.createElement(
                    'wf-form-body',
                    null,
                    _this2.getContent()
                  ),
                  _react2.default.createElement(
                    'wf-form-footer',
                    {
                      style: _WFormStyleHelper2.default.getFooterStyle(_this2) },
                    _this2.getNavigation()
                  ),
                  _react2.default.createElement(_WFClear2.default, null)
                );
              },
              resultErrorView: function resultErrorView() {
                return _react2.default.createElement(
                  _WFRow2.default,
                  null,
                  _react2.default.createElement(
                    _WFCol2.default,
                    null,
                    _react2.default.createElement(_WFormResults.WFormResultError, wf_results)
                  )
                );
              },
              resultSuccessView: function resultSuccessView() {
                return _react2.default.createElement(
                  _WFRow2.default,
                  null,
                  _react2.default.createElement(
                    _WFCol2.default,
                    null,
                    _react2.default.createElement(_WFormResults.WFormResultSuccess, wf_results)
                  )
                );
              },
              resultCustomView: function resultCustomView() {
                return _react2.default.createElement(
                  _WFRow2.default,
                  null,
                  _react2.default.createElement(
                    _WFCol2.default,
                    null,
                    _react2.default.createElement(_WFormResults.WFormResultCustom, wf_custom_results)
                  )
                );
              }
            }, this),
            _react2.default.createElement(_WFClear2.default, null)
          )
        ),
        _react2.default.createElement(_WFClear2.default, null),
        _react2.default.createElement(
          'wf-form-custom',
          null,
          this.getBg(),
          this.getCover(),
          this.getVideoHTML5(),
          this.getTexture(),
          this.getOverlay()
        ),
        _react2.default.createElement(
          'wf-form-custom-control',
          null,
          this.getVideoHTML5Control()
        )
      );
    }

    // ------------------- //

    // BODY ------------------- //

    // ------------------- //

  }, {
    key: 'getContent',
    value: function getContent() {
      var _props = this.props,
          _props$hasSteps = _props.hasSteps,
          hasSteps = _props$hasSteps === undefined ? true : _props$hasSteps,
          _props$hasCustomView = _props.hasCustomView,
          hasCustomView = _props$hasCustomView === undefined ? false : _props$hasCustomView,
          _props$customView = _props.customView,
          customView = _props$customView === undefined ? null : _props$customView;

      if (hasCustomView && (0, _Lodash.isFunction)(customView)) {
        return customView(this);
      } else if (!hasSteps) {
        return this.getDefaultContent();
      } else {
        return this.getStepContent();
      }
    }

    /**
     * Get display fields
     * @state display_fields is array
     * @return string html
     */

  }, {
    key: 'getDefaultContent',
    value: function getDefaultContent() {
      var _this3 = this;

      var _props2 = this.props,
          isAdmin = _props2.isAdmin,
          on = _props2.on,
          _onField = _props2.onField,
          onFieldEditableMenu = _props2.onFieldEditableMenu,
          onGetInput = _props2.onGetInput;
      var _state2 = this.state,
          _state2$fieldSchema = _state2.fieldSchema,
          fieldSchema = _state2$fieldSchema === undefined ? {} : _state2$fieldSchema,
          _state2$display_field = _state2.display_fields,
          display_fields = _state2$display_field === undefined ? [] : _state2$display_field;

      return display_fields.map(function (name, i) {
        if (!fieldSchema.hasOwnProperty(name)) {
          return false;
        } else {
          var schema = fieldSchema[name];
          var _schema$visible = schema.visible,
              visible = _schema$visible === undefined ? true : _schema$visible;

          if (!visible) {
            return false;
          } else {
            return _react2.default.createElement(_WFormContent2.default, {
              key: name,
              isAdmin: isAdmin,
              isField: true,
              fieldSchema: schema,
              onGetInput: onGetInput,
              onField: function onField(evenType, eventArgs) {
                _onField(name, evenType, eventArgs);
              },
              hidden: _WFormConditionHelper2.default.fieldIsHidden(_this3, name),
              disabled: _WFormConditionHelper2.default.fieldIsDisable(_this3, name),
              fieldEditableMenu: !(0, _Lodash.isFunction)(onFieldEditableMenu) ? null : function (fldCpt) {
                return onFieldEditableMenu(name, schema, fldCpt);
              }
            });
          }
        }
      });
    }
  }, {
    key: 'getStepContent',
    value: function getStepContent() {
      var _this4 = this;

      var _props3 = this.props,
          on = _props3.on,
          _onField2 = _props3.onField,
          _props3$isEditable = _props3.isEditable,
          isEditable = _props3$isEditable === undefined ? false : _props3$isEditable,
          onFieldEditableMenu = _props3.onFieldEditableMenu,
          onGetInput = _props3.onGetInput;
      var _state3 = this.state,
          _state3$steps = _state3.steps,
          steps = _state3$steps === undefined ? [] : _state3$steps,
          _state3$contents = _state3.contents,
          contents = _state3$contents === undefined ? {} : _state3$contents,
          _state3$currentStepIn = _state3.currentStepIndex,
          currentStepIndex = _state3$currentStepIn === undefined ? 0 : _state3$currentStepIn,
          _state3$fieldSchema = _state3.fieldSchema,
          fieldSchema = _state3$fieldSchema === undefined ? {} : _state3$fieldSchema;

      var fieldStyle = _WFormStyleHelper2.default.getFieldStyle(this);
      var isExtraContent = _WFormConditionHelper2.default.isExtraContent(this);
      if (steps.length > 0) {
        return steps.map(function (step, i) {
          var id = step.id,
              type = step.type,
              _step$order = step.order,
              order = _step$order === undefined ? [] : _step$order;

          if (order.length === 0 || currentStepIndex !== i) {
            if (currentStepIndex !== i) {
              return false;
            } else {
              return _react2.default.createElement(
                _WFormStep2.default,
                { key: id },
                _this4.getContentBuilder()
              );
            }
          } else {
            return _react2.default.createElement(
              _WFormStep2.default,
              { key: id },
              order.map(function (name, x) {
                var _contents$name = contents[name],
                    _contents$name$cols = _contents$name.cols,
                    cols = _contents$name$cols === undefined ? _Constants.DEFAULT_COL_CONFIG : _contents$name$cols,
                    isField = _contents$name.isField,
                    isIgnored = _contents$name.isIgnored,
                    attributes = _contents$name.attributes;

                if (isIgnored) {
                  return false;
                } else if (isField) {
                  if (!fieldSchema.hasOwnProperty(name)) {
                    return false;
                  } else {
                    var schema = fieldSchema[name];
                    var _schema$visible2 = schema.visible,
                        visible = _schema$visible2 === undefined ? true : _schema$visible2;

                    if (!visible) {
                      return false;
                    } else {
                      return _react2.default.createElement(_WFormContent2.default, (0, _extends3.default)({}, cols, {
                        key: name,
                        isField: isField,
                        fieldSchema: schema,
                        fieldStyle: fieldStyle,
                        isEditable: isEditable,
                        isExtraContent: isExtraContent,
                        onGetInput: onGetInput,
                        onField: function onField(evenType, eventArgs) {
                          _onField2(name, evenType, eventArgs);
                        },
                        onRefreshParentHeight: function onRefreshParentHeight() {
                          return _this4.refreshHeight();
                        },
                        hidden: _WFormConditionHelper2.default.fieldIsHidden(_this4, name),
                        disabled: _WFormConditionHelper2.default.fieldIsDisable(_this4, name),
                        fieldEditableMenu: !(0, _Lodash.isFunction)(onFieldEditableMenu) ? null : function (fldCpt) {
                          return onFieldEditableMenu(name, schema, fldCpt);
                        }
                      }));
                    }
                  }
                } else {
                  var _contents$name2 = contents[name],
                      _contents$name2$cols = _contents$name2.cols,
                      _cols = _contents$name2$cols === undefined ? _Constants.DEFAULT_COL_CONFIG : _contents$name2$cols,
                      _isField = _contents$name2.isField,
                      _isIgnored = _contents$name2.isIgnored,
                      _attributes = _contents$name2.attributes;

                  return _react2.default.createElement(_WFormContent2.default, (0, _extends3.default)({}, _cols, {
                    key: name,
                    schema: _attributes,
                    isEditable: isEditable,
                    isExtraContent: isExtraContent,
                    onGetContentBuilder: function onGetContentBuilder() {
                      return _this4.getContentBuilder("content", _attributes);
                    },
                    onRefreshParentHeight: function onRefreshParentHeight() {
                      return _this4.refreshHeight();
                    }
                    /*
                    fieldEditableMenu={
                      ! isFunction(onFieldEditableMenu) 
                      ? null 
                      : (fldCpt) => onFieldEditableMenu(name, schema, fldCpt)
                    }*/
                  }));
                }
              }),
              _react2.default.createElement(_WFClear2.default, null),
              _this4.getContentBuilder()
            );
          }
        });
      }
      /*
      else {
        return (
          <WFormStep key={0}>
            {this.getContentBuilder()}
          </WFormStep>
        )
      }
      */
    }
  }, {
    key: 'getContentBuilder',
    value: function getContentBuilder() {
      var contenType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var contentSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var onGetContentBuilder = this.props.onGetContentBuilder;

      if ((0, _Lodash.isFunction)(onGetContentBuilder)) {
        return onGetContentBuilder(contenType, contentSchema);
      } else {
        return false;
      }
    }

    // ------------------- //

    // NAVIGATION ------------------- //

    // ------------------- //

  }, {
    key: 'getNavigation',
    value: function getNavigation() {
      if (!this.props.navigation) {
        return false;
      }
      var _props4 = this.props,
          onPrev = _props4.onPrev,
          onNext = _props4.onNext,
          onSubmit = _props4.onSubmit,
          _props4$isEditable = _props4.isEditable,
          isEditable = _props4$isEditable === undefined ? false : _props4$isEditable;
      var _state4 = this.state,
          _state4$prev_label = _state4.prev_label,
          prev_label = _state4$prev_label === undefined ? "" : _state4$prev_label,
          _state4$next_label = _state4.next_label,
          next_label = _state4$next_label === undefined ? "" : _state4$next_label,
          _state4$submit_label = _state4.submit_label,
          submit_label = _state4$submit_label === undefined ? "" : _state4$submit_label,
          _state4$isValid = _state4.isValid,
          isValid = _state4$isValid === undefined ? false : _state4$isValid;

      var _WFormNavHelper$getNa = _WFormNavHelper2.default.getNavState(this),
          Grid = _WFormNavHelper$getNa.Grid,
          Btn = _WFormNavHelper$getNa.Btn;

      var _WFormStyleHelper$get = _WFormStyleHelper2.default.getNavStyle(this),
          _WFormStyleHelper$get2 = _WFormStyleHelper$get.prevStyle,
          prevStyle = _WFormStyleHelper$get2 === undefined ? {} : _WFormStyleHelper$get2,
          _WFormStyleHelper$get3 = _WFormStyleHelper$get.nextStyle,
          nextStyle = _WFormStyleHelper$get3 === undefined ? {} : _WFormStyleHelper$get3,
          _WFormStyleHelper$get4 = _WFormStyleHelper$get.submitStyle,
          submitStyle = _WFormStyleHelper$get4 === undefined ? {} : _WFormStyleHelper$get4;

      var isCompleted = isValid;
      if (isEditable) {
        //isCompleted = true;
      }
      return _react2.default.createElement(
        'wf-form-navigation',
        null,
        _react2.default.createElement(
          _WFRow2.default,
          null,
          _react2.default.createElement(
            _WFCol2.default,
            { xs: Grid.left },
            _react2.default.createElement(
              _WFBtn2.default,
              {
                visible: Btn.prev,
                style: prevStyle,
                onClick: function onClick() {
                  return onPrev();
                }
              },
              prev_label
            )
          ),
          _react2.default.createElement(
            _WFCol2.default,
            { xs: Grid.right },
            _react2.default.createElement(
              _WFBtn2.default,
              {
                visible: Btn.next
                //visible={true}
                , disable: !isCompleted,
                style: nextStyle,
                onClick: function onClick() {
                  return onNext();
                }
              },
              next_label
            ),
            _react2.default.createElement(
              _WFBtn2.default,
              {
                visible: Btn.submit
                //visible={true}
                , disable: !isCompleted,
                style: submitStyle,
                onClick: function onClick() {
                  return onSubmit();
                }
              },
              submit_label
            )
          )
        )
      );
    }

    // ------------------- //

    // COMPONENT CUSTOM ------------------- //

    // ------------------- //

  }, {
    key: 'getBg',
    value: function getBg() {
      var cover_color = this.state.cover_color;

      if (!cover_color || cover_color === "" || cover_color === "transparent") {
        return false;
      } else {
        return _react2.default.createElement('wf-form-bg', { style: {
            backgroundColor: cover_color
          } });
      }
    }

    // ------------------- //

  }, {
    key: 'getCover',
    value: function getCover() {
      var _state5 = this.state,
          _state5$cover_image = _state5.cover_image,
          cover_image = _state5$cover_image === undefined ? "" : _state5$cover_image,
          _state5$cover_bg_filt = _state5.cover_bg_filter,
          cover_bg_filter = _state5$cover_bg_filt === undefined ? "none" : _state5$cover_bg_filt,
          _state5$cover_bg_blur = _state5.cover_bg_blur,
          cover_bg_blur = _state5$cover_bg_blur === undefined ? 4 : _state5$cover_bg_blur,
          _state5$cover_bg_opac = _state5.cover_bg_opacity,
          cover_bg_opacity = _state5$cover_bg_opac === undefined ? 100 : _state5$cover_bg_opac;

      if (!cover_image || cover_image === "") {
        return false;
      } else {
        var style = { backgroundImage: 'url(' + cover_image + ')' };
        var opacity = parseInt(cover_bg_opacity);
        if (opacity < 100) {
          style['opacity'] = opacity / 100;
        }
        if (cover_bg_filter === "blur") {
          var blur = parseInt(cover_bg_blur);
          if (blur > 0) {
            style['-webkit-filter'] = 'blur(' + blur + 'px)'; /* Safari */
            style['filter'] = 'blur(' + blur + 'px)';
          }
        } else if (cover_bg_filter === "sepia") {
          style['-webkit-filter'] = 'sepia(100%)'; //* Webkit */
          style['filter'] = 'sepia(100%)'; //* W3C */
        } else if (cover_bg_filter === "grayscale") {
          style['-webkit-filter'] = 'grayscale(1)'; //* Webkit */
          style['filter'] = 'gray'; //* IE6-9 */
          style['filter'] = 'grayscale(1)'; //* W3C */
        } else if (cover_bg_filter === "invert") {
          style['-webkit-filter'] = 'invert(100%)'; //* Webkit */
          style['filter'] = 'invert(100%)'; //* W3C */
        }

        return _react2.default.createElement('wf-form-cover', { style: style });
      }
    }

    // ------------------- //

  }, {
    key: 'getTexture',
    value: function getTexture() {
      var cover_texture = this.state.cover_texture;

      if (!cover_texture || cover_texture === "") {
        return false;
      } else {
        return _react2.default.createElement('wf-form-texture', { style: {
            backgroundImage: 'url(' + cover_texture + ')'
          } });
      }
    }

    // ------------------- //

  }, {
    key: 'getOverlay',
    value: function getOverlay() {
      var cover_overlay = this.state.cover_overlay;

      if (!cover_overlay || cover_overlay === "" || cover_overlay === "transparent") {
        return false;
      } else {
        return _react2.default.createElement('wf-form-overlay', { style: {
            backgroundColor: cover_overlay
          } });
      }
    }

    // ------------------- //

  }, {
    key: 'getVideoHTML5',
    value: function getVideoHTML5() {
      var _state6 = this.state,
          use_cover_video = _state6.use_cover_video,
          _state6$playing = _state6.playing,
          playing = _state6$playing === undefined ? true : _state6$playing,
          _state6$heigth = _state6.heigth,
          heigth = _state6$heigth === undefined ? 0 : _state6$heigth;

      if (!use_cover_video) {
        return false;
      } else {
        return _react2.default.createElement(
          'wf-form-video',
          null,
          _react2.default.createElement(_WFVideoHTML2.default, {
            hasHeigth: heigth,
            context: _WFormVideoHelper2.default.getCtxHTML5(this),
            isPlaying: playing
          })
        );
      }
    }

    // ------------------- //

  }, {
    key: 'getVideoHTML5Control',
    value: function getVideoHTML5Control() {
      var _this5 = this;

      var _state7 = this.state,
          use_cover_video = _state7.use_cover_video,
          _state7$playing = _state7.playing,
          playing = _state7$playing === undefined ? true : _state7$playing;

      if (!use_cover_video) {
        return false;
      } else {
        return _react2.default.createElement(_WFIcon.WFIPlay, {
          className: 'wf-control-video',
          playing: playing,
          onClick: function onClick() {
            return _this5.setState({
              playing: !playing
            });
          }
        });
      }
    }

    // ------------------- //

    // PROGRESS BAR ------------------- //

    // ------------------- //

  }, {
    key: 'getProgressBar',
    value: function getProgressBar() {
      var _state8 = this.state,
          use_progressbar = _state8.use_progressbar,
          progressbar_color = _state8.progressbar_color;

      var _WFormStepHelper$getS = _WFormStepHelper2.default.getStepState(this),
          isUniq = _WFormStepHelper$getS.isUniq,
          progress = _WFormStepHelper$getS.progress;

      if (!use_progressbar || !_WFormStatusHelper2.default.isEditing(this) || _WFormStatusHelper2.default.isLoading(this) || isUniq) {
        return false;
      } else {
        return _react2.default.createElement(
          'wf-form-progress-bar',
          null,
          _react2.default.createElement('wf-progress-bar', { style: {
              backgroundColor: progressbar_color,
              width: progress
            } })
        );
      }
    }

    // ------------------- //

    // TIMELINE ------------------- //

    // ------------------- //

  }, {
    key: 'getTimeline',
    value: function getTimeline() {
      var _state9 = this.state,
          use_timeline = _state9.use_timeline,
          timeline_small = _state9.timeline_small;

      var _WFormStepHelper$getS2 = _WFormStepHelper2.default.getStepState(this),
          count = _WFormStepHelper$getS2.count,
          current = _WFormStepHelper$getS2.current,
          isUniq = _WFormStepHelper$getS2.isUniq;

      var timeline = use_timeline;
      if (!_WFormStatusHelper2.default.isEditing(this) || _WFormStatusHelper2.default.isLoading(this) || isUniq || count < 2) {
        timeline = false;
      } else if (timeline) {
        return _react2.default.createElement(
          'wf-form-timeline',
          { ref: 'WFTimeline' },
          timeline_small ? this.getTimelineMin(current, count) : this.getTimelineMax(current)
        );
      } else {
        return false;
      }
    }

    // ------------------- //

  }, {
    key: 'getTimelineMin',
    value: function getTimelineMin(counter, max) {
      return _react2.default.createElement(
        'wf-timeline-min',
        null,
        _react2.default.createElement(_WFCounter2.default, {
          max: max,
          counter: counter + 1,
          all: true,
          parenthesis: false
        })
      );
    }

    // ------------------- //

  }, {
    key: 'getTimelineMax',
    value: function getTimelineMax(current) {
      var _props$isEditable = this.props.isEditable,
          isEditable = _props$isEditable === undefined ? false : _props$isEditable;
      var _state10 = this.state,
          completedStep = _state10.completedStep,
          timeline_color = _state10.timeline_color,
          timeline_label = _state10.timeline_label;

      var limit = 7;
      var visible = 3;
      var _steps = [];
      var completed = completedStep;
      //if(isEditable) {
      completed = this.state.steps || [];
      completed = completed.map(function (s, i) {
        return i;
      });
      //}
      var i = 0,
          l = completed.length;
      if (l < limit) _steps = completed;else {
        var min = current - visible;
        var max = current + visible;
        var minPos = l - current;
        var minNeg = current;
        var minLim = limit - visible;
        var maxLim = limit + visible;
        var lastCursor = l - limit;
        for (i = 0; i < l; i++) {
          if (current === limit || current === limit - 1) {
            if (i === current || i >= minLim && i < current || i <= maxLim && i > current) {
              _steps.push(i);
            }
          } else if (current < limit) {
            if (i === current || i < minNeg && i < current || i <= minPos && i > current) {
              _steps.push(i);
            }
          } else {
            if (i === current || i > lastCursor || i >= min && i < current || i <= max && i > current) {
              _steps.push(i);
            }
          }
          if (_steps.length === limit || completed.length === i) {
            if (_steps[_steps.length - 1] >= limit) {
              _steps[_steps.length - 1] = l - 1;
            }
            break;
          }
        }
      }
      return _react2.default.createElement(
        'wf-timeline-max',
        null,
        _steps.map(function (step, i) {
          var index = step + 1;
          var state = {
            icon: "",
            bg: "transparent",
            state: "transparent"
          };
          if (step < current) {
            state["clss"] = "wf--prev";
            state["icon"] = "check";
            state["bg"] = timeline_color;
          } else if (step > current) {
            state["clss"] = "wf--next";
            state["state"] = "rgba(255, 255, 255, 0.3)";
          } else if (step === current) {
            state["clss"] = "wf--current";
            state["state"] = timeline_color;
          }
          return _react2.default.createElement(
            'span',
            { key: i, className: 'wf--step ' + state.clss },
            _react2.default.createElement(
              _WFText2.default,
              {
                counter: index,
                counterParenthesis: false
              },
              timeline_label || " "
            ),
            _react2.default.createElement(
              'span',
              {
                className: 'wf-marker',
                style: { backgroundColor: state.bg } },
              _react2.default.createElement(_WFIcon.WFIcon, { icon: state.icon }),
              _react2.default.createElement('span', { className: 'wf--state', style: { backgroundColor: state.state } })
            )
          );
        })
      );
    }

    // ------------------- //

    // UTILS ------------------- //

    // ------------------- //

  }, {
    key: 'refreshHeight',
    value: function refreshHeight() {
      _WFormStyleHelper2.default.refreshHeight(this);
    }

    // ------------------- //

    // COMPONENT LIFECYCLE ------------------- //

    // ------------------- //

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.refreshHeight();
    }
    // ------------------- //

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this6 = this;

      var _props5 = this.props,
          on = _props5.on,
          _props5$onWillMount = _props5.onWillMount,
          onWillMount = _props5$onWillMount === undefined ? null : _props5$onWillMount;

      this.refreshHeight();
      _windowWatcher2.default.on('resize', function () {
        return _this6.refreshHeight();
      });
      on(_WFEventTypes.WF_EVENT_ONWILLMOUNT, this);
      if ((0, _Lodash.isFunction)(onWillMount)) {
        onWillMount();
      }
    }
    // ------------------- //

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props6 = this.props,
          on = _props6.on,
          _props6$onDidMount = _props6.onDidMount,
          onDidMount = _props6$onDidMount === undefined ? null : _props6$onDidMount;

      this.refreshHeight();
      on(_WFEventTypes.WF_EVENT_ONDIDMOUNT, this);
      if ((0, _Lodash.isFunction)(onDidMount)) {
        onDidMount();
      }
    }
    // ------------------- //

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props7 = this.props,
          on = _props7.on,
          _props7$onWillUnmount = _props7.onWillUnmount,
          onWillUnmount = _props7$onWillUnmount === undefined ? null : _props7$onWillUnmount;

      this.refreshHeight = function () {
        return false;
      };
      on(_WFEventTypes.WF_EVENT_ONWILLUNMOUNT, this);
      if ((0, _Lodash.isFunction)(onWillUnmount)) {
        onWillUnmount();
      }
    }
  }]);
  return WFormComponent;
}(_react.Component);

// ------------------- //


exports.default = WFormComponent;
// ------------------- //

//WFormStyleHelper.

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FORM CONTAINER ------------------- //

// ------------------- //

var classes = {
    wrapper: "wf-form-content",
    vertical: {
        wrapper: "wf-inner",
        container: "wf-inner-container"
    }
};

// ------------------- //

var WFormContainer = function (_Component) {
    (0, _inherits3.default)(WFormContainer, _Component);

    function WFormContainer(props) {
        (0, _classCallCheck3.default)(this, WFormContainer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WFormContainer.__proto__ || (0, _getPrototypeOf2.default)(WFormContainer)).call(this, props));

        var _props$height = props.height,
            height = _props$height === undefined ? 0 : _props$height;

        _this.state = {
            height: height
        };
        return _this;
    }

    // ------------------- //

    (0, _createClass3.default)(WFormContainer, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? false : _props$visible,
                _props$className = _props.className,
                className = _props$className === undefined ? "" : _props$className;

            if (!visible) return false;
            return _react2.default.createElement(
                "wf-form-container",
                null,
                _react2.default.createElement(
                    "div",
                    { className: classes.wrapper + " " + className + " font" },
                    this.getContent()
                )
            );
        }

        // ------------------- //

    }, {
        key: "getContent",
        value: function getContent() {
            var _props2 = this.props,
                _props2$isActive = _props2.isActive,
                isActive = _props2$isActive === undefined ? true : _props2$isActive,
                _props2$children = _props2.children,
                children = _props2$children === undefined ? "" : _props2$children;

            if (!isActive) {
                return children;
            } else {
                return _react2.default.createElement(
                    "div",
                    { style: { height: this.state.height },
                        className: classes.vertical.wrapper },
                    _react2.default.createElement(
                        "div",
                        { className: classes.vertical.container },
                        this.props.children
                    )
                );
            }
        }

        // ------------------- //


        // COMPONENT LIFECYCLE ------------------- //


        // ------------------- //

    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.height !== this.state.height) {
                this.setState({
                    height: nextProps.height
                });
            }
        }
    }]);
    return WFormContainer;
}(_react.Component);

// ------------------- //

exports.default = WFormContainer;

// ------------------- //

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(244);

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Lodash = __webpack_require__(6);

var _WFieldComponent = __webpack_require__(112);

var _WFieldComponent2 = _interopRequireDefault(_WFieldComponent);

var _WFRow = __webpack_require__(38);

var _WFRow2 = _interopRequireDefault(_WFRow);

var _WFCol = __webpack_require__(44);

var _WFCol2 = _interopRequireDefault(_WFCol);

var _WFSep = __webpack_require__(111);

var _WFSep2 = _interopRequireDefault(_WFSep);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFIcon = __webpack_require__(10);

var _WFIcon2 = _interopRequireDefault(_WFIcon);

var _WFImg = __webpack_require__(56);

var _WFImg2 = _interopRequireDefault(_WFImg);

var _WFBtn = __webpack_require__(54);

var _WFBtn2 = _interopRequireDefault(_WFBtn);

var _WFEventTypes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FORM STEP CONTENT ------------------- //

// ------------------- //

var classes = {};

// ------------------- //

var WFormContent = function (_Component) {
  (0, _inherits3.default)(WFormContent, _Component);

  function WFormContent() {
    (0, _classCallCheck3.default)(this, WFormContent);
    return (0, _possibleConstructorReturn3.default)(this, (WFormContent.__proto__ || (0, _getPrototypeOf2.default)(WFormContent)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFormContent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$isField = _props.isField,
          isField = _props$isField === undefined ? false : _props$isField,
          _props$contentEditabl = _props.contentEditableMenu,
          contentEditableMenu = _props$contentEditabl === undefined ? null : _props$contentEditabl;

      return this.getTheField();
      /*
      if (isField) {
        return this.getTheField();
       // return this.getTheContent();
      } else {
        if (isFunction(contentEditableMenu)) {
          return contentEditableMenu(this);
        } else {
          return this.getTheContent();
        }
      } 
      */
    }
  }, {
    key: 'getTheField',
    value: function getTheField() {
      var _props2 = this.props,
          isAdmin = _props2.isAdmin,
          onField = _props2.onField,
          onGetInput = _props2.onGetInput,
          _props2$fieldStyle = _props2.fieldStyle,
          fieldStyle = _props2$fieldStyle === undefined ? {} : _props2$fieldStyle,
          _props2$fieldSchema = _props2.fieldSchema,
          fieldSchema = _props2$fieldSchema === undefined ? {} : _props2$fieldSchema,
          _props2$fieldEditable = _props2.fieldEditableMenu,
          fieldEditableMenu = _props2$fieldEditable === undefined ? null : _props2$fieldEditable,
          _props2$hidden = _props2.hidden,
          hidden = _props2$hidden === undefined ? false : _props2$hidden,
          _props2$disabled = _props2.disabled,
          disabled = _props2$disabled === undefined ? false : _props2$disabled,
          _props2$isExtraConten = _props2.isExtraContent,
          isExtraContent = _props2$isExtraConten === undefined ? false : _props2$isExtraConten,
          _props2$isEditable = _props2.isEditable,
          isEditable = _props2$isEditable === undefined ? false : _props2$isEditable,
          _props2$customCompone = _props2.customComponent,
          customComponent = _props2$customCompone === undefined ? null : _props2$customCompone;

      var isDisable = disabled;
      var style = {
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible"
      };
      if (hidden) {
        style["display"] = "none";
      }
      if ((0, _Lodash.isFunction)(customComponent)) {
        return _react2.default.createElement(_WFieldComponent2.default, (0, _extends3.default)({}, fieldSchema, {
          isAdminForm: isAdmin,
          disabled: isDisable,
          isWonderField: isExtraContent,
          isEditable: isEditable,
          fieldEditableMenu: fieldEditableMenu,
          customComponent: customComponent,
          onGetInput: onGetInput,
          on: onField
        }));
      } else {
        return _react2.default.createElement(
          _WFCol2.default,
          (0, _extends3.default)({
            reset: true,
            className: "_c",
            style: style
          }, this.props),
          _react2.default.createElement(_WFieldComponent2.default, (0, _extends3.default)({}, fieldSchema, fieldStyle, {
            isAdminForm: isAdmin,
            disabled: isDisable,
            isWonderField: isExtraContent,
            isEditable: isEditable,
            fieldEditableMenu: fieldEditableMenu,
            customComponent: customComponent,
            onGetInput: onGetInput,
            on: onField
          }))
        );
      }
    }
  }, {
    key: 'getTheContent',
    value: function getTheContent() {
      var _props3 = this.props,
          isAdmin = _props3.isAdmin,
          _props3$schema = _props3.schema,
          schema = _props3$schema === undefined ? {} : _props3$schema,
          _props3$contentStyle = _props3.contentStyle,
          contentStyle = _props3$contentStyle === undefined ? {} : _props3$contentStyle,
          _props3$hidden = _props3.hidden,
          hidden = _props3$hidden === undefined ? false : _props3$hidden,
          _props3$disabled = _props3.disabled,
          disabled = _props3$disabled === undefined ? false : _props3$disabled,
          _props3$isExtraConten = _props3.isExtraContent,
          isExtraContent = _props3$isExtraConten === undefined ? false : _props3$isExtraConten,
          _props3$isEditable = _props3.isEditable,
          isEditable = _props3$isEditable === undefined ? false : _props3$isEditable;

      var style = {};
      style.col = {
        opacity: hidden ? 0 : 1,
        visibility: hidden ? "hidden" : "visible"
      };
      style.wrapper = {
        textAlign: "text-center",
        maxWidth: "960px",
        margin: "0 auto"
      };
      style.material = {};
      return _react2.default.createElement(
        _WFCol2.default,
        (0, _extends3.default)({
          reset: true,
          className: "_c __c",
          style: style.col
        }, this.props),
        _react2.default.createElement(
          'div',
          { style: style.wrapper },
          this.getText(style.material),
          this.getImg(style.material),
          this.getSeparator(style.material),
          _react2.default.createElement(
            'wf-debugger',
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'pre',
                null,
                'schema : ',
                (0, _stringify2.default)(schema, 0, 2)
              )
            )
          )
        )
      );
    }
  }, {
    key: 'getText',
    value: function getText() {

      var className = "";
      var style = {};

      /*
        border: 2px solid rgba(255, 255, 255, 0.21);
        padding: 14px;
        margin: 20px;
        display: inline-block;
        max-width: 740px;
      */

      return _react2.default.createElement(
        'div',
        { className: '' },
        _react2.default.createElement(
          'div',
          { className: 'wf--text wf--t' },
          this.getContentHtml('\n            <strong>What is</strong> Lorem Ipsum?\n          ', style)
        ),
        _react2.default.createElement(
          'div',
          { className: 'wf--text wf--s' },
          this.getContentHtml('\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n          ', style)
        ),
        _react2.default.createElement(
          'div',
          { className: 'wf--text wf--p' },
          this.getContentHtml('\n            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. \n            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced \n            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n          ', style)
        ),
        _react2.default.createElement(
          'div',
          { className: 'wf--text wf--c' },
          this.getContentHtml('\n            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. \n            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced \n            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\n          ', style)
        )
      );
    }
  }, {
    key: 'getContentHtml',
    value: function getContentHtml(content) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var html = content.replace(/\r\n/g, "<br>").replace(/^\s+|\s+$/g, "");
      return _react2.default.createElement('span', { style: style, dangerouslySetInnerHTML: { __html: html } });
    }
  }, {
    key: 'getSeparator',
    value: function getSeparator() {

      var className = "";
      var style = {};

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_WFSep2.default, null),
        _react2.default.createElement(_WFSep2.default, { type: 'solid', style: style }),
        _react2.default.createElement(_WFSep2.default, { type: 'dotted', style: style }),
        _react2.default.createElement(_WFSep2.default, { type: 'dashed', style: style }),
        _react2.default.createElement(_WFSep2.default, { type: 'double', style: style })
      );
    }
  }, {
    key: 'getImg',
    value: function getImg() {
      var _this2 = this;

      var className = "";
      var style = {};

      /*
      
        border: 2px solid rgba(255, 255, 255, 0.21);
        padding: 3px;
        margin: 20px 0;
        background: white;
      
      */

      return _react2.default.createElement(
        'div',
        { className: 'text-center' },
        _react2.default.createElement(_WFImg2.default, {
          src: 'http://lorempixel.com/1200/320/',
          style: style,
          className: className,
          groupId: 12,
          onReady: function onReady() {
            console.error("IMG IS READY...");
            _this2.props.onRefreshParentHeight();
          }
        })
      );
    }
  }, {
    key: 'getVideo',
    value: function getVideo() {

      var className = "";
      var style = {};

      /*
      
        border: 2px solid rgba(255, 255, 255, 0.21);
        padding: 3px;
        margin: 20px 0;
        background: white;
      
      */

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'embed-responsive embed-responsive-16by9' },
          _react2.default.createElement('iframe', {
            className: 'embed-responsive-item',
            src: '//www.youtube.com/embed/zpOULjyy-n8?rel=0',
            onLoad: function onLoad() {
              console.error("IFRAME READY...");
            }
          })
        )
      );
    }

    /*
    
      WFClear
      <WFClear />
    
      WFText
      <WFText
      html={true}
      className={className}
      ><strong>Hello<strong> world...</strong></WFText>
    
      WFIcon
      <WFIcon
        icon={icon}
        className={className}
        onClick={optional}
      />
      
      WFImg
      <WFImg 
      src={logo} 
      className={classe} 
      />
    
      WFBtn
      <WFBtn 
      className={classes} 
      onClick={onClick} 
      icon={icon}>
        Save form
      </WFBtn>
    
    */

  }]);
  return WFormContent;
}(_react.Component);

// ------------------- //

exports.default = WFormContent;

// ------------------- //

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WFormResultCustom = exports.WFormResultSuccess = exports.WFormResultError = undefined;

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _objectDestructuringEmpty2 = __webpack_require__(251);

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFRow = __webpack_require__(38);

var _WFRow2 = _interopRequireDefault(_WFRow);

var _WFCol = __webpack_require__(44);

var _WFCol2 = _interopRequireDefault(_WFCol);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFList = __webpack_require__(110);

var _WFList2 = _interopRequireDefault(_WFList);

var _WFError = __webpack_require__(109);

var _WFError2 = _interopRequireDefault(_WFError);

var _WFLoader = __webpack_require__(85);

var _WFLoader2 = _interopRequireDefault(_WFLoader);

var _WFBtn = __webpack_require__(54);

var _WFBtn2 = _interopRequireDefault(_WFBtn);

var _WFBtnGroup = __webpack_require__(155);

var _WFBtnGroup2 = _interopRequireDefault(_WFBtnGroup);

var _WFScrollBars = __webpack_require__(39);

var _WFScrollBars2 = _interopRequireDefault(_WFScrollBars);

var _WFIcon = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FORM RESULT  ------------------- //

// ------------------- //

var classes = {
  icon: "wf-result-icon",
  title: "wf-result-title",
  message: "wf-result-message",
  messages: "wf-result-messages",
  btn: "wf-result-btn",
  close: "wf-result-close"
};

// ------------------- //

var WFormResult = function (_Component) {
  (0, _inherits3.default)(WFormResult, _Component);

  function WFormResult() {
    (0, _classCallCheck3.default)(this, WFormResult);
    return (0, _possibleConstructorReturn3.default)(this, (WFormResult.__proto__ || (0, _getPrototypeOf2.default)(WFormResult)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFormResult, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$className = _props.className,
          className = _props$className === undefined ? "" : _props$className,
          _props$isError = _props.isError,
          isError = _props$isError === undefined ? false : _props$isError,
          _props$isCustom = _props.isCustom,
          isCustom = _props$isCustom === undefined ? false : _props$isCustom;

      if (isError) {
        return _react2.default.createElement(
          'wf-form-result',
          null,
          _react2.default.createElement(
            'wf-form-error',
            null,
            this.getHeader(),
            this.props.children
          )
        );
      } else if (isCustom) {
        return _react2.default.createElement(
          'div',
          { className: className },
          _react2.default.createElement(
            'wf-form-result',
            null,
            _react2.default.createElement(
              'wf-form-custom',
              null,
              this.getHeader(),
              this.props.children
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'wf-form-result',
          null,
          _react2.default.createElement(
            'wf-form-success',
            null,
            this.getHeader(),
            this.props.children
          )
        );
      }
    }
  }, {
    key: 'getHeader',
    value: function getHeader() {
      var _props2 = this.props,
          _props2$title = _props2.title,
          title = _props2$title === undefined ? "" : _props2$title,
          _props2$message = _props2.message,
          message = _props2$message === undefined ? "" : _props2$message,
          onClose = _props2.onClose,
          _props2$isCustom = _props2.isCustom,
          isCustom = _props2$isCustom === undefined ? false : _props2$isCustom;

      return _react2.default.createElement(
        _WFRow2.default,
        null,
        isCustom ? _react2.default.createElement(_WFIcon.WFIClose, {
          onClick: function onClick() {
            return onClose();
          },
          className: classes.close }) : "",
        _react2.default.createElement(
          _WFCol2.default,
          null,
          this.getIcon()
        ),
        _react2.default.createElement(
          _WFCol2.default,
          null,
          _react2.default.createElement(
            _WFText2.default,
            { className: classes.title },
            title
          ),
          _react2.default.createElement(
            _WFText2.default,
            { className: classes.message },
            message
          )
        )
      );
    }
  }, {
    key: 'getIcon',
    value: function getIcon() {
      var _props3 = this.props,
          _props3$icon = _props3.icon,
          icon = _props3$icon === undefined ? "check" : _props3$icon,
          _props3$loader = _props3.loader,
          loader = _props3$loader === undefined ? false : _props3$loader,
          _props3$isError = _props3.isError,
          isError = _props3$isError === undefined ? false : _props3$isError;

      if (loader) {
        return _react2.default.createElement(_WFLoader2.default, null);
      } else if (isError) {
        return _react2.default.createElement(_WFIcon.WFIClose, { className: classes.icon });
      } else {
        return _react2.default.createElement(_WFIcon.WFIcon, { icon: icon, className: classes.icon });
      }
    }
  }]);
  return WFormResult;
}(_react.Component);

// ------------------- //

// WF RESULT ERROR  ------------------- //

// ------------------- //

var WFormResultError = function (_Component2) {
  (0, _inherits3.default)(WFormResultError, _Component2);

  function WFormResultError() {
    (0, _classCallCheck3.default)(this, WFormResultError);
    return (0, _possibleConstructorReturn3.default)(this, (WFormResultError.__proto__ || (0, _getPrototypeOf2.default)(WFormResultError)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFormResultError, [{
    key: 'render',
    value: function render() {
      (0, _objectDestructuringEmpty3.default)(this.props);

      return _react2.default.createElement(
        WFormResult,
        (0, _extends3.default)({
          isError: true
        }, this.props),
        this.getBody()
      );
    }
  }, {
    key: 'getBody',
    value: function getBody() {
      var _props4 = this.props,
          onEdit = _props4.onEdit,
          btnLabel = _props4.btnLabel,
          _props4$errors = _props4.errors,
          errors = _props4$errors === undefined ? [] : _props4$errors;

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_WFError2.default, {
          errors: errors
        }),
        btnLabel ? _react2.default.createElement(
          _WFBtn2.default,
          { onClick: function onClick() {
              return onEdit();
            } },
          btnLabel
        ) : ""
      );
    }
  }]);
  return WFormResultError;
}(_react.Component);

// ------------------- //

// WF RESULT SUCCESS ------------------- //

// ------------------- //

var WFormResultSuccess = function (_Component3) {
  (0, _inherits3.default)(WFormResultSuccess, _Component3);

  function WFormResultSuccess() {
    (0, _classCallCheck3.default)(this, WFormResultSuccess);
    return (0, _possibleConstructorReturn3.default)(this, (WFormResultSuccess.__proto__ || (0, _getPrototypeOf2.default)(WFormResultSuccess)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFormResultSuccess, [{
    key: 'render',
    value: function render() {
      (0, _objectDestructuringEmpty3.default)(this.props);

      return _react2.default.createElement(
        WFormResult,
        this.props,
        this.getMessages(),
        this.getActions()
      );
    }
  }, {
    key: 'getMessages',
    value: function getMessages() {
      var _props$messages = this.props.messages,
          messages = _props$messages === undefined ? [] : _props$messages;

      if (messages.length === 0) {
        return false;
      } else {
        return _react2.default.createElement(
          'wf-form-success-messages',
          null,
          _react2.default.createElement(_WFList2.default, {
            rows: messages,
            view: function view(message) {
              return _react2.default.createElement(
                'span',
                null,
                message
              );
            }
          })
        );
      }
    }
  }, {
    key: 'getActions',
    value: function getActions() {
      var _props$actions = this.props.actions,
          actions = _props$actions === undefined ? [] : _props$actions;

      if (actions.length === 0) {
        return false;
      } else {
        return _react2.default.createElement(
          'wf-form-success-actions',
          null,
          _react2.default.createElement(_WFBtnGroup2.default, {
            visible: true,
            schema: actions
          })
        );
      }
    }
  }]);
  return WFormResultSuccess;
}(_react.Component);

// ------------------- //

// WF RESULT CUSTOM ------------------- //

// ------------------- //

var WFormResultCustom = function (_Component4) {
  (0, _inherits3.default)(WFormResultCustom, _Component4);

  function WFormResultCustom() {
    (0, _classCallCheck3.default)(this, WFormResultCustom);
    return (0, _possibleConstructorReturn3.default)(this, (WFormResultCustom.__proto__ || (0, _getPrototypeOf2.default)(WFormResultCustom)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFormResultCustom, [{
    key: 'render',
    value: function render() {
      var getCustomComponent = this.props.getCustomComponent;

      return _react2.default.createElement(
        WFormResult,
        (0, _extends3.default)({
          isCustom: true
        }, this.props, this.state),
        getCustomComponent(this)
      );
    }
  }]);
  return WFormResultCustom;
}(_react.Component);

// ------------------- //

exports.WFormResultError = WFormResultError;
exports.WFormResultSuccess = WFormResultSuccess;
exports.WFormResultCustom = WFormResultCustom;

// ------------------- //

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFCol = __webpack_require__(44);

var _WFCol2 = _interopRequireDefault(_WFCol);

var _WFRow = __webpack_require__(38);

var _WFRow2 = _interopRequireDefault(_WFRow);

var _WFBoxed = __webpack_require__(154);

var _WFBoxed2 = _interopRequireDefault(_WFBoxed);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFTitle = __webpack_require__(160);

var _WFTitle2 = _interopRequireDefault(_WFTitle);

var _WFList = __webpack_require__(110);

var _WFList2 = _interopRequireDefault(_WFList);

var _WFSep = __webpack_require__(111);

var _WFSep2 = _interopRequireDefault(_WFSep);

var _WFSection = __webpack_require__(159);

var _WFSection2 = _interopRequireDefault(_WFSection);

var _WFIcon = __webpack_require__(10);

var _WFScrollBars = __webpack_require__(39);

var _WFScrollBars2 = _interopRequireDefault(_WFScrollBars);

var _WFChartistGraph = __webpack_require__(156);

var _WFChartistGraph2 = _interopRequireDefault(_WFChartistGraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF ANALYTICS GLOBAL ------------------- //

// ------------------- //

var WFormResultsAnalytic = function (_Component) {
  (0, _inherits3.default)(WFormResultsAnalytic, _Component);

  function WFormResultsAnalytic(props) {
    (0, _classCallCheck3.default)(this, WFormResultsAnalytic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFormResultsAnalytic.__proto__ || (0, _getPrototypeOf2.default)(WFormResultsAnalytic)).call(this, props));

    _this.displayName = "WFormResultsAnalytic";
    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(WFormResultsAnalytic, [{
    key: "render",
    value: function render() {
      return this.getFieldAnalytics();
    }
  }, {
    key: "getFieldArchive",
    value: function getFieldArchive() {
      var _this2 = this;

      var _state = this.state,
          _state$fields = _state.fields,
          fields = _state$fields === undefined ? [] : _state$fields,
          _state$currentField = _state.currentField,
          currentField = _state$currentField === undefined ? null : _state$currentField;

      return _react2.default.createElement(
        _WFCol2.default,
        { md: 12 },
        _react2.default.createElement(
          "span",
          { className: "wf-select" },
          _react2.default.createElement(
            "select",
            {
              value: currentField,
              onChange: function onChange(e) {
                var field = fields.filter(function (f) {
                  return f.entry_id == e.target.value;
                });
                _this2.props.onSelect(field[0]);
              } },
            fields.map(function (field, i) {
              var entry_id = field.entry_id,
                  _field$label = field.label,
                  label = _field$label === undefined ? "" : _field$label;

              return _react2.default.createElement(
                "option",
                { key: i, value: entry_id },
                label
              );
            })
          ),
          _react2.default.createElement(_WFIcon.WFIDown, null)
        )
      );
    }
  }, {
    key: "getFieldAnalytics",
    value: function getFieldAnalytics() {
      var _state2 = this.state,
          page_loader = _state2.page_loader,
          _state2$fields = _state2.fields,
          fields = _state2$fields === undefined ? [] : _state2$fields,
          currentField = _state2.currentField,
          currentFieldValue = _state2.currentFieldValue,
          currentOptionLabels = _state2.currentOptionLabels,
          currentOptionSeries = _state2.currentOptionSeries;

      var sum = function sum(a, b) {
        return a + b;
      };
      var data = {
        labels: currentOptionLabels, // ['Chrome', 'Firefox', 'Android', 'AppleWebkit', 'Safari', 'MSIE', 'Opera', 'Unknown', 'WhatsApp', 'Opera Next', 'Others' ],
        series: currentOptionSeries // [ 2500, 1600, 1200, 400, 350, 200, 150, 150, 150, 150, 150 ]
      };
      var _currentFieldValue$la = currentFieldValue.label,
          label = _currentFieldValue$la === undefined ? "" : _currentFieldValue$la;

      return _react2.default.createElement(
        _WFSection2.default,
        null,
        _react2.default.createElement(
          _WFBoxed2.default,
          null,
          this.getFieldArchive(),
          _react2.default.createElement(
            _WFCol2.default,
            { md: 7 },
            _react2.default.createElement(
              _WFSection2.default,
              null,
              _react2.default.createElement(_WFChartistGraph2.default, {
                data: data,
                type: 'Pie',
                wrapperClassName: "wf--chart-pie",
                options: {
                  height: '500px',
                  donut: true,
                  donutWidth: 120,
                  startAngle: 270,
                  labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                    var num = Math.round(data.series[index] / data.series.reduce(sum) * 100);
                    return num >= 5 ? num + "%" : ''; //`${value} ${num}%`;
                  }
                }
              })
            )
          ),
          _react2.default.createElement(
            _WFCol2.default,
            { md: 5 },
            _react2.default.createElement(
              _WFSection2.default,
              null,
              _react2.default.createElement(
                "div",
                { className: "wf--chart wf--chart-pie" },
                _react2.default.createElement(
                  _WFScrollBars2.default,
                  {
                    className: "wf-scrollbar-chart",
                    style: {
                      width: '100%',
                      height: '520px',
                      background: "none !important"
                    }
                  },
                  _react2.default.createElement(_WFList2.default, {
                    rows: data.labels,
                    rowsClassName: "wf-fields-options",
                    view: function view(label, i) {
                      var num = Math.round(data.series[i] / data.series.reduce(sum) * 100);
                      var purcentage = num + "%";
                      return _react2.default.createElement(
                        "div",
                        { className: "wf--chart--option" },
                        _react2.default.createElement("span", { className: "wf--color wf--color-" + i }),
                        _react2.default.createElement("span", { className: "wf--value", dangerouslySetInnerHTML: { __html: purcentage } }),
                        _react2.default.createElement(
                          "span",
                          { className: "wf--label" },
                          label
                        )
                      );
                    }
                  })
                )
              )
            )
          )
        )
      );
    }

    // ------------------- //

    // COMPONENT LIFECYCLE ------------------- //

    // ------------------- //

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.willMount(this);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.didMount(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.willUnMount(this);
    }
  }]);
  return WFormResultsAnalytic;
}(_react.Component);

// WFCOMPONENT

exports.default = WFormResultsAnalytic;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFRow = __webpack_require__(38);

var _WFRow2 = _interopRequireDefault(_WFRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF FORM STEP ------------------- //

// ------------------- //

var classes = {};

// ------------------- //

var WFormStep = function (_Component) {
    (0, _inherits3.default)(WFormStep, _Component);

    function WFormStep() {
        (0, _classCallCheck3.default)(this, WFormStep);
        return (0, _possibleConstructorReturn3.default)(this, (WFormStep.__proto__ || (0, _getPrototypeOf2.default)(WFormStep)).apply(this, arguments));
    }

    (0, _createClass3.default)(WFormStep, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$visible = _props.visible,
                visible = _props$visible === undefined ? true : _props$visible,
                _props$className = _props.className,
                className = _props$className === undefined ? "" : _props$className;

            if (!visible) return false;
            return _react2.default.createElement(
                'wf-form-step',
                null,
                _react2.default.createElement(
                    _WFRow2.default,
                    { className: className },
                    this.props.children
                )
            );
        }
    }]);
    return WFormStep;
}(_react.Component);

// ------------------- //

exports.default = WFormStep;

// ------------------- //

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormStepHelper = __webpack_require__(113);

var _WFormStepHelper2 = _interopRequireDefault(_WFormStepHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormNavHelper = function () {
  function WFormNavHelper() {
    (0, _classCallCheck3.default)(this, WFormNavHelper);
  }

  (0, _createClass3.default)(WFormNavHelper, null, [{
    key: "getNavState",
    value: function getNavState(wfCpt) {
      var _wfCpt$state$prevBtn = wfCpt.state.prevBtn,
          prevBtn = _wfCpt$state$prevBtn === undefined ? true : _wfCpt$state$prevBtn;

      var _WFormStepHelper$getS = _WFormStepHelper2.default.getStepState(wfCpt),
          _WFormStepHelper$getS2 = _WFormStepHelper$getS.isFirst,
          isFirst = _WFormStepHelper$getS2 === undefined ? true : _WFormStepHelper$getS2,
          _WFormStepHelper$getS3 = _WFormStepHelper$getS.isLast,
          isLast = _WFormStepHelper$getS3 === undefined ? false : _WFormStepHelper$getS3,
          _WFormStepHelper$getS4 = _WFormStepHelper$getS.isUniq,
          isUniq = _WFormStepHelper$getS4 === undefined ? true : _WFormStepHelper$getS4;

      var Grid = {};
      var Btn = {};
      // Set Layout
      if (isUniq || isFirst) {
        Grid.left = 0;
        Grid.right = 12;
      } else {
        Grid.left = 6;
        Grid.right = 6;
      }
      // Toggle Btn
      Btn.prev = prevBtn && !isFirst && !isUniq;
      Btn.next = !isUniq && !isLast;
      Btn.submit = isUniq || isLast;
      return {
        Grid: Grid,
        Btn: Btn
      };
    }
  }]);
  return WFormNavHelper;
}();

exports.default = WFormNavHelper;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFConstants = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormStatusHelper = function () {
  function WFormStatusHelper() {
    (0, _classCallCheck3.default)(this, WFormStatusHelper);
  }

  (0, _createClass3.default)(WFormStatusHelper, null, [{
    key: "isLoading",
    value: function isLoading(wfCpt) {
      return wfCpt.state.status === _WFConstants.WF_STATUS_LOADING;
    }
  }, {
    key: "isEditing",
    value: function isEditing(wfCpt) {
      return wfCpt.state.status === _WFConstants.WF_STATUS_EDITING;
    }
  }, {
    key: "isPublished",
    value: function isPublished(wfCpt) {
      return wfCpt.state.status === _WFConstants.WF_STATUS_SUCCESS;
    }
  }, {
    key: "hasError",
    value: function hasError(wfCpt) {
      return wfCpt.state.status === _WFConstants.WF_STATUS_ERROR;
    }
  }, {
    key: "getContent",
    value: function getContent() {
      var contents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var wfCpt = arguments[1];
      var _wfCpt$state$status = wfCpt.state.status,
          status = _wfCpt$state$status === undefined ? _WFConstants.WF_STATUS_LOADING : _wfCpt$state$status;
      var loaderView = contents.loaderView,
          editView = contents.editView,
          resultErrorView = contents.resultErrorView,
          resultSuccessView = contents.resultSuccessView,
          resultCustomView = contents.resultCustomView;

      switch (status) {

        case _WFConstants.WF_STATUS_LOADING:
          return loaderView();

        case _WFConstants.WF_STATUS_EDITING:
          return editView();

        case _WFConstants.WF_STATUS_ERROR:
          return resultErrorView();

        case _WFConstants.WF_STATUS_SUCCESS:
          return resultSuccessView();

        case _WFConstants.WF_STATUS_CUSTOM:
          return resultCustomView();

        default:
          return false;
      }
    }
  }]);
  return WFormStatusHelper;
}(); // FORM CONSTANTS


exports.default = WFormStatusHelper;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormVideoHelper = function () {
  function WFormVideoHelper() {
    (0, _classCallCheck3.default)(this, WFormVideoHelper);
  }

  (0, _createClass3.default)(WFormVideoHelper, null, [{
    key: "getCtxHTML5",
    value: function getCtxHTML5(wfCpt) {
      var _wfCpt$state = wfCpt.state,
          cover_video_poster = _wfCpt$state.cover_video_poster,
          cover_video_mp4 = _wfCpt$state.cover_video_mp4,
          cover_video_webm = _wfCpt$state.cover_video_webm,
          cover_video_ogv = _wfCpt$state.cover_video_ogv;

      return {
        poster: cover_video_poster,
        mp4: cover_video_mp4,
        webm: cover_video_webm,
        ogv: cover_video_ogv
      };
    }
  }]);
  return WFormVideoHelper;
}();

exports.default = WFormVideoHelper;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFEventTypes = __webpack_require__(9);

var _WFValueTypes = __webpack_require__(11);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFIcon = __webpack_require__(10);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF CHECKBOX ------------------- //
// ------------------- //

var WFCheckbox = function (_Component) {
  (0, _inherits3.default)(WFCheckbox, _Component);

  function WFCheckbox() {
    (0, _classCallCheck3.default)(this, WFCheckbox);
    return (0, _possibleConstructorReturn3.default)(this, (WFCheckbox.__proto__ || (0, _getPrototypeOf2.default)(WFCheckbox)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFCheckbox, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          on = _props.on,
          _props$booleanValue = _props.booleanValue,
          booleanValue = _props$booleanValue === undefined ? false : _props$booleanValue,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? "Active option" : _props$placeholder,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$checkedValue = _props.checkedValue,
          checkedValue = _props$checkedValue === undefined ? null : _props$checkedValue,
          _props$uncheckedValue = _props.uncheckedValue,
          uncheckedValue = _props$uncheckedValue === undefined ? null : _props$uncheckedValue;

      var label = placeholder;
      if (checkedValue) {
        if (booleanValue) {
          label = checkedValue;
        } else {
          label = uncheckedValue;
        }
      }
      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        view: function view(input) {
          return _react2.default.createElement(
            'span',
            { className: _this2.getWrapperClass() },
            _react2.default.createElement(
              'wf-checkbox',
              {
                onClick: function onClick() {
                  if (!disabled) {
                    on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, _WFValueTypes.WF_BOOLEAN_VALUE, !booleanValue));
                  }
                } },
              _react2.default.createElement(_WFIcon.WFICheck, { checked: !disabled ? booleanValue : false }),
              _react2.default.createElement(
                _WFText2.default,
                null,
                label
              )
            ),
            _react2.default.createElement(_WFIcon.WFIState, { valid: _this2.props.valid })
          );
        }
      }));
    }
  }, {
    key: 'getWrapperClass',
    value: function getWrapperClass() {
      var _props2 = this.props,
          name = _props2.name,
          _props2$disabled = _props2.disabled,
          disabled = _props2$disabled === undefined ? false : _props2$disabled,
          _props2$booleanValue = _props2.booleanValue,
          booleanValue = _props2$booleanValue === undefined ? false : _props2$booleanValue;

      var clss = _WFCss2.default.checkbox;
      if (!disabled) {
        clss += ' ' + (booleanValue ? _WFCss2.default.checked : _WFCss2.default.unchecked);
      } else {
        clss += ' ' + _WFCss2.default.disabled;
      }
      clss += ' input_' + name;
      return clss;
    }
  }]);
  return WFCheckbox;
}(_react.Component);

// ------------------- //


exports.default = WFCheckbox;
// ------------------- //

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _datepicker = __webpack_require__(184);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _WFValueTypes = __webpack_require__(11);

var _WFInputTypes = __webpack_require__(24);

var _WFEventTypes = __webpack_require__(9);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFInputString = __webpack_require__(68);

var _WFInputString2 = _interopRequireDefault(_WFInputString);

var _WFIcon = __webpack_require__(10);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF INPUT DATE ------------------- //
// ------------------- //

var WFInputDate = function (_Component) {
  (0, _inherits3.default)(WFInputDate, _Component);

  function WFInputDate() {
    (0, _classCallCheck3.default)(this, WFInputDate);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputDate.__proto__ || (0, _getPrototypeOf2.default)(WFInputDate)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputDate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          on = _props.on,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? "" : _props$placeholder,
          _props$inputClass = _props.inputClass,
          inputClass = _props$inputClass === undefined ? "" : _props$inputClass,
          _props$valid = _props.valid,
          valid = _props$valid === undefined ? null : _props$valid,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$displayStateCp = _props.displayStateCpt,
          displayStateCpt = _props$displayStateCp === undefined ? true : _props$displayStateCp,
          _props$dateFormat = _props.dateFormat,
          dateFormat = _props$dateFormat === undefined ? "YYYY/MM/DD" : _props$dateFormat,
          _props$showMonthDropd = _props.showMonthDropdown,
          showMonthDropdown = _props$showMonthDropd === undefined ? false : _props$showMonthDropd,
          _props$showYearDropdo = _props.showYearDropdown,
          showYearDropdown = _props$showYearDropdo === undefined ? false : _props$showYearDropdo,
          _props$showWeekNumber = _props.showWeekNumbers,
          showWeekNumbers = _props$showWeekNumber === undefined ? false : _props$showWeekNumber,
          _props$minDate = _props.minDate,
          minDate = _props$minDate === undefined ? null : _props$minDate,
          _props$maxDate = _props.maxDate,
          maxDate = _props$maxDate === undefined ? null : _props$maxDate,
          _props$monthsShown = _props.monthsShown,
          monthsShown = _props$monthsShown === undefined ? 1 : _props$monthsShown,
          _props$stringValue = _props.stringValue,
          stringValue = _props$stringValue === undefined ? "" : _props$stringValue;

      var startDate = null; //moment();
      if (stringValue) {
        startDate = moment(stringValue, dateFormat);
      }
      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        view: function view(input) {
          return _react2.default.createElement(
            'wf-date-input',
            null,
            _react2.default.createElement(
              'span',
              { className: '' + _WFInputString2.default.getStatus(_this2, stringValue) },
              _react2.default.createElement(_datepicker2.default, {
                disabled: disabled,
                className: _this2.getWrapperClass(_WFInputTypes.INPUT_TEXT),
                calendarClassName: 'wf-datepicker',
                placeholder: placeholder,
                selected: !disabled ? startDate : "",
                dateFormat: dateFormat,
                dropdownMode: 'select',
                showMonthDropdown: showMonthDropdown,
                showYearDropdown: showYearDropdown,
                showWeekNumbers: showWeekNumbers,
                monthsShown: monthsShown,
                minDate: minDate ? moment(minDate) : null,
                maxDate: maxDate ? moment(maxDate) : null,
                onChange: function onChange(date) {
                  return _this2.onChange(date);
                },
                isClearable: true
                // toto charly implement after 
                // filterDate={isWeekday}
                // excludeDates={[moment(), moment().subtract(1, "days")]}
                // highlightDates={[moment().subtract(7, "days"), moment().add(7, "days")]}
              }),
              _react2.default.createElement(_WFIcon.WFIState, {
                visible: displayStateCpt,
                valid: valid
              })
            )
          );
        }
      }));
    }
  }, {
    key: 'onChange',
    value: function onChange(date) {
      var _props2 = this.props,
          on = _props2.on,
          _props2$disabled = _props2.disabled,
          disabled = _props2$disabled === undefined ? false : _props2$disabled,
          _props2$dateFormat = _props2.dateFormat,
          dateFormat = _props2$dateFormat === undefined ? "YYYY/MM/DD" : _props2$dateFormat;

      if (!date) {
        on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, _WFValueTypes.WF_STRING_VALUE, ""));
      } else if (!disabled) {
        this.setState({
          startDate: date
        });
        on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, _WFValueTypes.WF_STRING_VALUE, date.format(dateFormat)));
      }
    }
  }, {
    key: 'getWrapperClass',
    value: function getWrapperClass(type) {
      var _props3 = this.props,
          name = _props3.name,
          _props3$disabled = _props3.disabled,
          disabled = _props3$disabled === undefined ? false : _props3$disabled,
          _props3$valid = _props3.valid,
          valid = _props3$valid === undefined ? null : _props3$valid,
          _props3$inputClass = _props3.inputClass,
          inputClass = _props3$inputClass === undefined ? "" : _props3$inputClass;

      var clss = '' + _WFCss2.default.input + type;
      if (inputClass) {
        clss += ' ' + inputClass;
      }
      if (disabled) {
        clss += ' ' + _WFCss2.default.disabled;
      }
      clss += ' input_' + name;
      return clss;
    }
  }]);
  return WFInputDate;
}(_react.Component);

// ------------------- //


exports.default = WFInputDate;
// ------------------- //

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFInputTypes = __webpack_require__(24);

var _WFEventTypes = __webpack_require__(9);

var _WFValueTypes = __webpack_require__(11);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFInputString = __webpack_require__(68);

var _WFInputString2 = _interopRequireDefault(_WFInputString);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF INPUT FILE ------------------- //
// ------------------- //

var WFInputFile = function (_Component) {
  (0, _inherits3.default)(WFInputFile, _Component);

  function WFInputFile(props) {
    (0, _classCallCheck3.default)(this, WFInputFile);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputFile.__proto__ || (0, _getPrototypeOf2.default)(WFInputFile)).call(this, props));
  }

  (0, _createClass3.default)(WFInputFile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          on = _props.on,
          _props$stringValue = _props.stringValue,
          stringValue = _props$stringValue === undefined ? "" : _props$stringValue,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? "select file..." : _props$placeholder,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        view: function view(input) {
          return _react2.default.createElement(
            "wf-input-file",
            null,
            _react2.default.createElement(
              "div",
              { className: "wf-file-wrapper " + (disabled ? _WFCss2.default.disabled : "") + " " + _WFInputString2.default.getStatus(_this2, stringValue) },
              _react2.default.createElement("input", {
                type: _WFInputTypes.INPUT_TEXT,
                readOnly: true,
                value: stringValue
              }),
              _react2.default.createElement(
                "label",
                { className: "wf-file-label" },
                placeholder,
                _react2.default.createElement("input", {
                  type: _WFInputTypes.INPUT_FILE,
                  style: { display: "none" },
                  onChange: function onChange(e) {
                    var _on;

                    return on(_WFEventTypes.WF_EVENT_ONCHANGE, (_on = {}, (0, _defineProperty3.default)(_on, _WFValueTypes.WF_EVENT_FILE_VALUE, e), (0, _defineProperty3.default)(_on, _WFValueTypes.WF_STRING_VALUE, e.target.value), _on));
                  }
                })
              )
            )
          );
        }
      }));
    }
  }]);
  return WFInputFile;
}(_react.Component);

// ------------------- //


exports.default = WFInputFile;
// ------------------- //

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFValueTypes = __webpack_require__(11);

var _WFInputTypes = __webpack_require__(24);

var _WFEventTypes = __webpack_require__(9);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFIcon = __webpack_require__(10);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF INPUT NUMBER ------------------- //
// ------------------- //

var WFInputNumber = function (_Component) {
  (0, _inherits3.default)(WFInputNumber, _Component);

  function WFInputNumber() {
    (0, _classCallCheck3.default)(this, WFInputNumber);
    return (0, _possibleConstructorReturn3.default)(this, (WFInputNumber.__proto__ || (0, _getPrototypeOf2.default)(WFInputNumber)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFInputNumber, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          on = _props.on,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? "" : _props$placeholder,
          _props$inputClass = _props.inputClass,
          inputClass = _props$inputClass === undefined ? "" : _props$inputClass,
          _props$valid = _props.valid,
          valid = _props$valid === undefined ? null : _props$valid,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$displayStateCp = _props.displayStateCpt,
          displayStateCpt = _props$displayStateCp === undefined ? true : _props$displayStateCp;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        view: function view(input) {
          var _WFInputComponent$get = _WFInputComponent2.default.getStrCfg(_this2.props),
              key = _WFInputComponent$get.key,
              value = _WFInputComponent$get.value;

          return _react2.default.createElement(
            "wf-input-number",
            null,
            _react2.default.createElement(
              "span",
              { className: _WFCss2.default.text + " " + WFInputNumber.getStatus(_this2, value) },
              _react2.default.createElement("input", {
                //type={INPUT_NUMBER} // problem with HTML5 number input the focus return null if digit val includes other chars 
                type: _WFInputTypes.INPUT_TEXT,
                readOnly: disabled,
                className: _this2.getWrapperClass(_WFInputTypes.INPUT_NUMBER),
                placeholder: placeholder,
                onFocus: function onFocus() {
                  return on(_WFEventTypes.WF_EVENT_ONFOCUS);
                },
                onBlur: function onBlur() {
                  return on(_WFEventTypes.WF_EVENT_ONBLUR);
                },
                onChange: function onChange(e) {
                  return on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, _WFValueTypes.WF_NUMBER_VALUE, e.target.value));
                },
                value: !disabled ? value : ""
              }),
              _react2.default.createElement(_WFIcon.WFIState, {
                visible: displayStateCpt,
                valid: valid
              })
            )
          );
        }
      }));
    }
  }, {
    key: "getWrapperClass",
    value: function getWrapperClass(type) {
      var _props2 = this.props,
          name = _props2.name,
          _props2$disabled = _props2.disabled,
          disabled = _props2$disabled === undefined ? false : _props2$disabled,
          _props2$valid = _props2.valid,
          valid = _props2$valid === undefined ? null : _props2$valid,
          _props2$inputClass = _props2.inputClass,
          inputClass = _props2$inputClass === undefined ? "" : _props2$inputClass;

      var clss = "" + _WFCss2.default.input + type;
      if (inputClass) {
        clss += " " + inputClass;
      }
      if (disabled) {
        clss += " " + _WFCss2.default.disabled;
      }
      clss += " input_" + name;
      return clss;
    }
  }], [{
    key: "getStatus",
    value: function getStatus(input) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var valid = input.props.valid;

      if (valid === false) {
        return _WFCss2.default.hasError;
      } else if (valid === true && value > 0 || value !== "" && value > 0) {
        return _WFCss2.default.isValid;
      }
    }
  }]);
  return WFInputNumber;
}(_react.Component);

// ------------------- //


exports.default = WFInputNumber;
// ------------------- //

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFieldHelper = __webpack_require__(40);

var _WFieldHelper2 = _interopRequireDefault(_WFieldHelper);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFSelect = __webpack_require__(45);

var _WFSelect2 = _interopRequireDefault(_WFSelect);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFIcon = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF RADIO BUTTON ------------------- //
// ------------------- //

var WFRadioButton = function (_Component) {
  (0, _inherits3.default)(WFRadioButton, _Component);

  function WFRadioButton(props) {
    (0, _classCallCheck3.default)(this, WFRadioButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFRadioButton.__proto__ || (0, _getPrototypeOf2.default)(WFRadioButton)).call(this, props));

    _this.state = {
      sampleData: []
    };
    return _this;
  }

  (0, _createClass3.default)(WFRadioButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$styles = _props.styles,
          styles = _props$styles === undefined ? {} : _props$styles,
          _props$isInlineOption = _props.isInlineOption,
          isInlineOption = _props$isInlineOption === undefined ? false : _props$isInlineOption;
      var _styles$optionLabel = styles.optionLabel,
          optionLabel = _styles$optionLabel === undefined ? {} : _styles$optionLabel,
          _styles$optionLegend = styles.optionLegend,
          optionLegend = _styles$optionLegend === undefined ? {} : _styles$optionLegend;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        didMount: function didMount() {
          _WFieldHelper2.default.setSample(_this2, "selectWord");
        },
        view: function view(input) {
          return _react2.default.createElement(
            'wf-radio-button',
            null,
            _WFSelect2.default.getOptions(_this2).map(function (option, i) {
              var _option$id = option.id,
                  id = _option$id === undefined ? null : _option$id,
                  _option$label = option.label,
                  label = _option$label === undefined ? "" : _option$label;

              if (id === null) {
                return false;
              } else {
                var isSelected = _WFSelect2.default.has(_this2, id);
                var className = 'wf-option ' + (isSelected ? "wf-selected" : '');
                if (isInlineOption) {
                  className += " wf-inline";
                }
                return _react2.default.createElement(
                  'span',
                  {
                    key: i,
                    className: className,
                    onClick: function onClick() {
                      return _WFSelect2.default.onSelect(_this2, id);
                    },
                    style: {
                      color: optionLabel.color,
                      borderColor: optionLabel.color
                    }
                  },
                  !isSelected ? _react2.default.createElement(_WFIcon.WFIcon, { icon: 'radio-unchecked' }) : _react2.default.createElement(_WFIcon.WFIcon, { icon: 'radio-checked' }),
                  _react2.default.createElement(
                    _WFText2.default,
                    null,
                    label
                  )
                );
              }
            })
          );
        }
      }));
    }
  }]);
  return WFRadioButton;
}(_react.Component);

// ------------------- //


exports.default = WFRadioButton;
// ------------------- //

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactHtml5Slider = __webpack_require__(367);

var _reactHtml5Slider2 = _interopRequireDefault(_reactHtml5Slider);

var _WFEventTypes = __webpack_require__(9);

var _WFValueTypes = __webpack_require__(11);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFRow = __webpack_require__(38);

var _WFRow2 = _interopRequireDefault(_WFRow);

var _WFCol = __webpack_require__(44);

var _WFCol2 = _interopRequireDefault(_WFCol);

var _WFCounter = __webpack_require__(55);

var _WFCounter2 = _interopRequireDefault(_WFCounter);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF RANGE ------------------- //
// ------------------- //

var WFRange = function (_Component) {
  (0, _inherits3.default)(WFRange, _Component);

  function WFRange() {
    (0, _classCallCheck3.default)(this, WFRange);
    return (0, _possibleConstructorReturn3.default)(this, (WFRange.__proto__ || (0, _getPrototypeOf2.default)(WFRange)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFRange, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          on = _props.on,
          _props$numberValue = _props.numberValue,
          numberValue = _props$numberValue === undefined ? 0 : _props$numberValue,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          _props$minimum = _props.minimum,
          minimum = _props$minimum === undefined ? 0 : _props$minimum,
          _props$maximum = _props.maximum,
          maximum = _props$maximum === undefined ? 100 : _props$maximum,
          _props$sufix = _props.sufix,
          sufix = _props$sufix === undefined ? "" : _props$sufix,
          _props$step = _props.step,
          step = _props$step === undefined ? "" : _props$step;

      var grid = WFRange.getGridConfig(this.props);
      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        view: function view(input) {
          return _react2.default.createElement(
            "wf-input-range",
            null,
            _react2.default.createElement(
              _WFRow2.default,
              { className: disabled ? _WFCss2.default.disabled : "" },
              _react2.default.createElement(
                _WFCol2.default,
                { xs: grid.input.col, reset: true },
                _react2.default.createElement(_reactHtml5Slider2.default, {
                  disabled: disabled,
                  step: step,
                  min: minimum,
                  max: maximum,
                  value: disabled || !numberValue ? 0 : numberValue,
                  handleChange: function handleChange(e) {
                    return on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, _WFValueTypes.WF_NUMBER_VALUE, e.target.value));
                  }
                })
              ),
              _react2.default.createElement(
                _WFCol2.default,
                { xs: grid.value.col, reset: true },
                _react2.default.createElement(_WFCounter2.default, {
                  visible: grid.value.visible,
                  visibleAtZero: true,
                  counter: numberValue,
                  parenthesis: false,
                  sufix: !numberValue || numberValue === 0 ? "" : sufix
                })
              )
            )
          );
        }
      }));
    }
  }], [{
    key: "getGridConfig",
    value: function getGridConfig(props) {
      var _props$disabled2 = props.disabled,
          disabled = _props$disabled2 === undefined ? false : _props$disabled2;

      var input = {};
      var value = {};
      if (disabled) {
        input = {
          col: 12
        };
        value = {
          col: 0,
          visible: false
        };
      } else {
        input = {
          col: 10
        };
        value = {
          col: 2,
          visible: true
        };
      }
      return {
        input: input,
        value: value
      };
    }
  }]);
  return WFRange;
}(_react.Component);

// ------------------- //


exports.default = WFRange;
// ------------------- //

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFieldHelper = __webpack_require__(40);

var _WFieldHelper2 = _interopRequireDefault(_WFieldHelper);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFInputTypes = __webpack_require__(24);

var _WFEventTypes = __webpack_require__(9);

var _WFValueTypes = __webpack_require__(11);

var _WFIcon = __webpack_require__(10);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SELECT ------------------- //
// ------------------- //

var WFSelect = function (_Component) {
  (0, _inherits3.default)(WFSelect, _Component);

  function WFSelect(props) {
    (0, _classCallCheck3.default)(this, WFSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFSelect.__proto__ || (0, _getPrototypeOf2.default)(WFSelect)).call(this, props));

    _this.state = {
      sampleData: []
    };
    return _this;
  }

  (0, _createClass3.default)(WFSelect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          on = _props.on,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled,
          valueBy = _props.valueBy,
          labelBy = _props.labelBy;

      var data = this.getData();
      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        willMount: function willMount() {
          WFSelect.setIntialValue(_this2.props);
        },
        didMount: function didMount() {
          _WFieldHelper2.default.setSample(_this2, "selectWord");
        },
        view: function view(input) {
          var counter = data.length;

          var _WFInputComponent$get = _WFInputComponent2.default.getStrCfg(_this2.props),
              key = _WFInputComponent$get.key,
              value = _WFInputComponent$get.value;

          return _react2.default.createElement(
            'wf-select-single',
            null,
            _react2.default.createElement(
              'select',
              {
                value: value,
                disabled: disabled || counter === 0,
                onChange: function onChange(e) {
                  return on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, key, e.target.value));
                }
              },
              data.map(function (row, i) {
                var label = row[labelBy];
                var value = row[valueBy];
                return _react2.default.createElement(
                  'option',
                  { key: i, value: value },
                  label
                );
              })
            ),
            _react2.default.createElement(_WFIcon.WFIDown, null)
          );
        }
      }));
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _state$sampleData = this.state.sampleData,
          sampleData = _state$sampleData === undefined ? [] : _state$sampleData;
      var _props$data = this.props.data,
          data = _props$data === undefined ? [] : _props$data;

      if (data.length > 0) {
        return data;
      } else {
        return sampleData;
      }
    }
  }], [{
    key: 'setIntialValue',
    value: function setIntialValue(props) {
      var on = props.on,
          valueBy = props.valueBy,
          _props$data2 = props.data,
          data = _props$data2 === undefined ? [] : _props$data2;

      var _WFInputComponent$get2 = _WFInputComponent2.default.getStrCfg(props),
          key = _WFInputComponent$get2.key,
          value = _WFInputComponent$get2.value;

      on(_WFEventTypes.WF_EVENT_ONCUSTOM, function (input) {
        var preValue = input.field.getValue();
        if (data.length > 0) {
          if (!preValue || preValue === "") {
            var initialValue = data[0][valueBy];
            on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, key, initialValue));
          }
        }
      });
    }
  }]);
  return WFSelect;
}(_react.Component);

// ------------------- //


exports.default = WFSelect;
// ------------------- //

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFInputTypes = __webpack_require__(24);

var _WFEventTypes = __webpack_require__(9);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFInputString = __webpack_require__(68);

var _WFInputString2 = _interopRequireDefault(_WFInputString);

var _WFIcon = __webpack_require__(10);

var _WFCss = __webpack_require__(29);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF TEXTAREA ------------------- //
// ------------------- //

var WFTextarea = function (_Component) {
  (0, _inherits3.default)(WFTextarea, _Component);

  function WFTextarea() {
    (0, _classCallCheck3.default)(this, WFTextarea);
    return (0, _possibleConstructorReturn3.default)(this, (WFTextarea.__proto__ || (0, _getPrototypeOf2.default)(WFTextarea)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFTextarea, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          on = _props.on,
          _props$rows = _props.rows,
          rows = _props$rows === undefined ? 4 : _props$rows,
          placeholder = _props.placeholder,
          _props$isMultiliner = _props.isMultiliner,
          isMultiliner = _props$isMultiliner === undefined ? false : _props$isMultiliner,
          _props$inputClass = _props.inputClass,
          inputClass = _props$inputClass === undefined ? "" : _props$inputClass,
          _props$valid = _props.valid,
          valid = _props$valid === undefined ? null : _props$valid,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        view: function view(input) {
          var _WFInputComponent$get = _WFInputComponent2.default.getStrCfg(_this2.props),
              key = _WFInputComponent$get.key,
              value = _WFInputComponent$get.value;

          return _react2.default.createElement(
            "span",
            { className: _WFCss2.default.textarea + " " + _WFInputString2.default.getStatus(_this2, value) },
            _react2.default.createElement("textarea", {
              rows: rows,
              readOnly: disabled,
              className: _this2.getWrapperClass(),
              placeholder: placeholder,
              onFocus: function onFocus() {
                return on(_WFEventTypes.WF_EVENT_ONFOCUS);
              },
              onBlur: function onBlur() {
                return on(_WFEventTypes.WF_EVENT_ONBLUR);
              },
              onChange: function onChange(e) {
                return on(_WFEventTypes.WF_EVENT_ONCHANGE, (0, _defineProperty3.default)({}, key, e.target.value));
              },
              value: !disabled ? value : ""
            }),
            _react2.default.createElement(_WFIcon.WFIState, { valid: valid })
          );
        }
      }));
    }
  }, {
    key: "getWrapperClass",
    value: function getWrapperClass() {
      var _props2 = this.props,
          name = _props2.name,
          _props2$disabled = _props2.disabled,
          disabled = _props2$disabled === undefined ? false : _props2$disabled,
          _props2$valid = _props2.valid,
          valid = _props2$valid === undefined ? null : _props2$valid,
          _props2$inputClass = _props2.inputClass,
          inputClass = _props2$inputClass === undefined ? "" : _props2$inputClass,
          isMultiliner = _props2.isMultiliner;

      var clss = "" + _WFCss2.default.input + _WFInputTypes.INPUT_TEXTAREA;
      if (inputClass) {
        clss += " " + inputClass;
      }
      if (isMultiliner) {
        clss += " " + _WFCss2.default.multiliner;
      }
      if (disabled) {
        clss += " " + _WFCss2.default.disabled;
      }
      clss += " input_" + name;
      return clss;
    }
  }]);
  return WFTextarea;
}(_react.Component);

// ------------------- //


exports.default = WFTextarea;
// ------------------- //

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _year_dropdown = __webpack_require__(192);

var _year_dropdown2 = _interopRequireDefault(_year_dropdown);

var _month_dropdown = __webpack_require__(187);

var _month_dropdown2 = _interopRequireDefault(_month_dropdown);

var _month = __webpack_require__(186);

var _month2 = _interopRequireDefault(_month);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(62);

var _classnames2 = _interopRequireDefault(_classnames);

var _date_utils = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DROPDOWN_FOCUS_CLASSNAMES = ['react-datepicker__year-select', 'react-datepicker__month-select'];

var isDropdownSelect = function isDropdownSelect() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var classNames = (element.className || '').split(/\s+/);
  return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
    return classNames.indexOf(testClassname) >= 0;
  });
};

var Calendar = _react2.default.createClass({
  displayName: 'Calendar',

  propTypes: {
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    dateFormat: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]).isRequired,
    dropdownMode: _react2.default.PropTypes.oneOf(['scroll', 'select']).isRequired,
    endDate: _react2.default.PropTypes.object,
    excludeDates: _react2.default.PropTypes.array,
    filterDate: _react2.default.PropTypes.func,
    fixedHeight: _react2.default.PropTypes.bool,
    highlightDates: _react2.default.PropTypes.array,
    includeDates: _react2.default.PropTypes.array,
    inline: _react2.default.PropTypes.bool,
    locale: _react2.default.PropTypes.string,
    maxDate: _react2.default.PropTypes.object,
    minDate: _react2.default.PropTypes.object,
    monthsShown: _react2.default.PropTypes.number,
    onClickOutside: _react2.default.PropTypes.func.isRequired,
    onMonthChange: _react2.default.PropTypes.func,
    forceShowMonthNavigation: _react2.default.PropTypes.bool,
    onDropdownFocus: _react2.default.PropTypes.func,
    onSelect: _react2.default.PropTypes.func.isRequired,
    openToDate: _react2.default.PropTypes.object,
    peekNextMonth: _react2.default.PropTypes.bool,
    scrollableYearDropdown: _react2.default.PropTypes.bool,
    preSelection: _react2.default.PropTypes.object,
    selected: _react2.default.PropTypes.object,
    selectsEnd: _react2.default.PropTypes.bool,
    selectsStart: _react2.default.PropTypes.bool,
    showMonthDropdown: _react2.default.PropTypes.bool,
    showWeekNumbers: _react2.default.PropTypes.bool,
    showYearDropdown: _react2.default.PropTypes.bool,
    startDate: _react2.default.PropTypes.object,
    todayButton: _react2.default.PropTypes.string,
    utcOffset: _react2.default.PropTypes.number
  },

  defaultProps: {
    onDropdownFocus: function onDropdownFocus() {}
  },

  getDefaultProps: function getDefaultProps() {
    return {
      utcOffset: _WFMoment2.default.utc().utcOffset(),
      monthsShown: 1,
      forceShowMonthNavigation: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      date: this.localizeMoment(this.getDateInView()),
      selectingDate: null
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.preSelection && !(0, _date_utils.isSameDay)(nextProps.preSelection, this.props.preSelection)) {
      this.setState({
        date: this.localizeMoment(nextProps.preSelection)
      });
    } else if (nextProps.openToDate && !(0, _date_utils.isSameDay)(nextProps.openToDate, this.props.openToDate)) {
      this.setState({
        date: this.localizeMoment(nextProps.openToDate)
      });
    }
  },
  handleClickOutside: function handleClickOutside(event) {
    this.props.onClickOutside(event);
  },
  handleDropdownFocus: function handleDropdownFocus(event) {
    if (isDropdownSelect(event.target)) {
      this.props.onDropdownFocus();
    }
  },
  getDateInView: function getDateInView() {
    var _props = this.props,
        preSelection = _props.preSelection,
        selected = _props.selected,
        openToDate = _props.openToDate,
        utcOffset = _props.utcOffset;

    var minDate = (0, _date_utils.getEffectiveMinDate)(this.props);
    var maxDate = (0, _date_utils.getEffectiveMaxDate)(this.props);
    var current = _WFMoment2.default.utc().utcOffset(utcOffset);
    var initialDate = preSelection || selected;
    if (initialDate) {
      return initialDate;
    } else if (minDate && maxDate && openToDate && openToDate.isBetween(minDate, maxDate)) {
      return openToDate;
    } else if (minDate && openToDate && openToDate.isAfter(minDate)) {
      return openToDate;
    } else if (minDate && minDate.isAfter(current)) {
      return minDate;
    } else if (maxDate && openToDate && openToDate.isBefore(maxDate)) {
      return openToDate;
    } else if (maxDate && maxDate.isBefore(current)) {
      return maxDate;
    } else if (openToDate) {
      return openToDate;
    } else {
      return current;
    }
  },
  localizeMoment: function localizeMoment(date) {
    return date.clone().locale(this.props.locale || _WFMoment2.default.locale());
  },
  increaseMonth: function increaseMonth() {
    var _this = this;

    this.setState({
      date: this.state.date.clone().add(1, 'month')
    }, function () {
      return _this.handleMonthChange(_this.state.date);
    });
  },
  decreaseMonth: function decreaseMonth() {
    var _this2 = this;

    this.setState({
      date: this.state.date.clone().subtract(1, 'month')
    }, function () {
      return _this2.handleMonthChange(_this2.state.date);
    });
  },
  handleDayClick: function handleDayClick(day, event) {
    this.props.onSelect(day, event);
  },
  handleDayMouseEnter: function handleDayMouseEnter(day) {
    this.setState({ selectingDate: day });
  },
  handleMonthMouseLeave: function handleMonthMouseLeave() {
    this.setState({ selectingDate: null });
  },
  handleMonthChange: function handleMonthChange(date) {
    if (this.props.onMonthChange) {
      this.props.onMonthChange(date);
    }
  },
  changeYear: function changeYear(year) {
    this.setState({
      date: this.state.date.clone().set('year', year)
    });
  },
  changeMonth: function changeMonth(month) {
    var _this3 = this;

    this.setState({
      date: this.state.date.clone().set('month', month)
    }, function () {
      return _this3.handleMonthChange(_this3.state.date);
    });
  },
  header: function header() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.date;

    var startOfWeek = date.clone().startOf('week');
    var dayNames = [];
    if (this.props.showWeekNumbers) {
      dayNames.push(_react2.default.createElement(
        'div',
        { key: 'W', className: 'react-datepicker__day-name' },
        '#'
      ));
    }
    return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
      var day = startOfWeek.clone().add(offset, 'days');
      return _react2.default.createElement(
        'div',
        { key: offset, className: 'react-datepicker__day-name' },
        day.localeData().weekdaysMin(day)
      );
    }));
  },
  renderPreviousMonthButton: function renderPreviousMonthButton() {
    if (!this.props.forceShowMonthNavigation && (0, _date_utils.allDaysDisabledBefore)(this.state.date, 'month', this.props)) {
      return;
    }
    return _react2.default.createElement('a', {
      className: 'react-datepicker__navigation react-datepicker__navigation--previous',
      onClick: this.decreaseMonth });
  },
  renderNextMonthButton: function renderNextMonthButton() {
    if (!this.props.forceShowMonthNavigation && (0, _date_utils.allDaysDisabledAfter)(this.state.date, 'month', this.props)) {
      return;
    }
    return _react2.default.createElement('a', {
      className: 'react-datepicker__navigation react-datepicker__navigation--next',
      onClick: this.increaseMonth });
  },
  renderCurrentMonth: function renderCurrentMonth() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.date;

    var classes = ['react-datepicker__current-month'];
    if (this.props.showYearDropdown) {
      classes.push('react-datepicker__current-month--hasYearDropdown');
    }
    if (this.props.showMonthDropdown) {
      classes.push('react-datepicker__current-month--hasMonthDropdown');
    }
    return _react2.default.createElement(
      'div',
      { className: classes.join(' ') },
      date.format(this.props.dateFormat)
    );
  },
  renderYearDropdown: function renderYearDropdown() {
    var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!this.props.showYearDropdown || overrideHide) {
      return;
    }
    return _react2.default.createElement(_year_dropdown2.default, {
      dropdownMode: this.props.dropdownMode,
      onChange: this.changeYear,
      minDate: this.props.minDate,
      maxDate: this.props.maxDate,
      year: this.state.date.year(),
      scrollableYearDropdown: this.props.scrollableYearDropdown });
  },
  renderMonthDropdown: function renderMonthDropdown() {
    var overrideHide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!this.props.showMonthDropdown) {
      return;
    }
    return _react2.default.createElement(_month_dropdown2.default, {
      dropdownMode: this.props.dropdownMode,
      locale: this.props.locale,
      onChange: this.changeMonth,
      month: this.state.date.month() });
  },
  renderTodayButton: function renderTodayButton() {
    var _this4 = this;

    if (!this.props.todayButton) {
      return;
    }
    return _react2.default.createElement(
      'div',
      { className: 'react-datepicker__today-button', onClick: function onClick(event) {
          return _this4.props.onSelect(_WFMoment2.default.utc().utcOffset(_this4.props.utcOffset).startOf('date'), event);
        } },
      this.props.todayButton
    );
  },
  renderMonths: function renderMonths() {
    var monthList = [];
    for (var i = 0; i < this.props.monthsShown; ++i) {
      var monthDate = this.state.date.clone().add(i, 'M');
      var monthKey = 'month-' + i;
      monthList.push(_react2.default.createElement(
        'div',
        { key: monthKey, className: 'react-datepicker__month-container' },
        _react2.default.createElement(
          'div',
          { className: 'react-datepicker__header' },
          this.renderCurrentMonth(monthDate),
          _react2.default.createElement(
            'div',
            {
              className: 'react-datepicker__header__dropdown react-datepicker__header__dropdown--' + this.props.dropdownMode,
              onFocus: this.handleDropdownFocus },
            this.renderMonthDropdown(i !== 0),
            this.renderYearDropdown(i !== 0)
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-datepicker__day-names' },
            this.header(monthDate)
          )
        ),
        _react2.default.createElement(_month2.default, {
          day: monthDate,
          onDayClick: this.handleDayClick,
          onDayMouseEnter: this.handleDayMouseEnter,
          onMouseLeave: this.handleMonthMouseLeave,
          minDate: this.props.minDate,
          maxDate: this.props.maxDate,
          excludeDates: this.props.excludeDates,
          highlightDates: this.props.highlightDates,
          selectingDate: this.state.selectingDate,
          includeDates: this.props.includeDates,
          inline: this.props.inline,
          fixedHeight: this.props.fixedHeight,
          filterDate: this.props.filterDate,
          preSelection: this.props.preSelection,
          selected: this.props.selected,
          selectsStart: this.props.selectsStart,
          selectsEnd: this.props.selectsEnd,
          showWeekNumbers: this.props.showWeekNumbers,
          startDate: this.props.startDate,
          endDate: this.props.endDate,
          peekNextMonth: this.props.peekNextMonth,
          utcOffset: this.props.utcOffset })
      ));
    }
    return monthList;
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('react-datepicker', this.props.className) },
      _react2.default.createElement('div', { className: 'react-datepicker__triangle' }),
      this.renderPreviousMonthButton(),
      this.renderNextMonthButton(),
      this.renderMonths(),
      this.renderTodayButton(),
      this.props.children
    );
  }
});

module.exports = Calendar;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(127);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _date_utils = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateInput = _react2.default.createClass({
  displayName: 'DateInput',

  propTypes: {
    customInput: _react2.default.PropTypes.element,
    date: _react2.default.PropTypes.object,
    dateFormat: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
    disabled: _react2.default.PropTypes.bool,
    excludeDates: _react2.default.PropTypes.array,
    filterDate: _react2.default.PropTypes.func,
    includeDates: _react2.default.PropTypes.array,
    locale: _react2.default.PropTypes.string,
    maxDate: _react2.default.PropTypes.object,
    minDate: _react2.default.PropTypes.object,
    onBlur: _react2.default.PropTypes.func,
    onChange: _react2.default.PropTypes.func,
    onChangeRaw: _react2.default.PropTypes.func,
    onChangeDate: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dateFormat: 'L'
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.safeDateFormat(this.props)
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(newProps) {
    if (!(0, _date_utils.isSameDay)(newProps.date, this.props.date) || !(0, _date_utils.isSameUtcOffset)(newProps.date, this.props.date) || newProps.locale !== this.props.locale || newProps.dateFormat !== this.props.dateFormat) {
      this.setState({
        value: this.safeDateFormat(newProps)
      });
    }
  },
  handleChange: function handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    if (this.props.onChangeRaw) {
      this.props.onChangeRaw(event);
    }
    if (!event.defaultPrevented) {
      this.handleChangeDate(event.target.value);
    }
  },
  handleChangeDate: function handleChangeDate(value) {
    if (this.props.onChangeDate) {
      var date = (0, _WFMoment2.default)(value.trim(), this.props.dateFormat, this.props.locale || _WFMoment2.default.locale(), true);
      if (date.isValid() && !(0, _date_utils.isDayDisabled)(date, this.props)) {
        this.props.onChangeDate(date);
      } else if (value === '') {
        this.props.onChangeDate(null);
      }
    }
    this.setState({ value: value });
  },
  safeDateFormat: function safeDateFormat(props) {
    return props.date && props.date.clone().locale(props.locale || _WFMoment2.default.locale()).format(Array.isArray(props.dateFormat) ? props.dateFormat[0] : props.dateFormat) || '';
  },
  handleBlur: function handleBlur(event) {
    this.setState({
      value: this.safeDateFormat(this.props)
    });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  },
  focus: function focus() {
    this.refs.input.focus();
  },
  render: function render() {
    var _props = this.props,
        customInput = _props.customInput,
        date = _props.date,
        locale = _props.locale,
        minDate = _props.minDate,
        maxDate = _props.maxDate,
        excludeDates = _props.excludeDates,
        includeDates = _props.includeDates,
        filterDate = _props.filterDate,
        dateFormat = _props.dateFormat,
        onChangeDate = _props.onChangeDate,
        onChangeRaw = _props.onChangeRaw,
        rest = (0, _objectWithoutProperties3.default)(_props, ['customInput', 'date', 'locale', 'minDate', 'maxDate', 'excludeDates', 'includeDates', 'filterDate', 'dateFormat', 'onChangeDate', 'onChangeRaw']); // eslint-disable-line no-unused-vars

    if (customInput) {
      return _react2.default.cloneElement(customInput, (0, _extends3.default)({}, rest, {
        ref: 'input',
        value: this.state.value,
        onBlur: this.handleBlur,
        onChange: this.handleChange
      }));
    } else {
      return _react2.default.createElement('input', (0, _extends3.default)({
        ref: 'input',
        type: 'text'
      }, rest, {
        value: this.state.value,
        onBlur: this.handleBlur,
        onChange: this.handleChange }));
    }
  }
});

module.exports = DateInput;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _date_input = __webpack_require__(183);

var _date_input2 = _interopRequireDefault(_date_input);

var _calendar = __webpack_require__(182);

var _calendar2 = _interopRequireDefault(_calendar);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _tether_component = __webpack_require__(189);

var _tether_component2 = _interopRequireDefault(_tether_component);

var _classnames2 = __webpack_require__(62);

var _classnames3 = _interopRequireDefault(_classnames2);

var _date_utils = __webpack_require__(69);

var _reactOnclickoutside = __webpack_require__(108);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var outsideClickIgnoreClass = 'react-datepicker-ignore-onclickoutside';
var WrappedCalendar = (0, _reactOnclickoutside2.default)(_calendar2.default);

/**
 * General datepicker component.
 */

var DatePicker = _react2.default.createClass({
  displayName: 'DatePicker',

  propTypes: {
    autoComplete: _react2.default.PropTypes.string,
    autoFocus: _react2.default.PropTypes.bool,
    calendarClassName: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    customInput: _react2.default.PropTypes.element,
    dateFormat: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
    dateFormatCalendar: _react2.default.PropTypes.string,
    disabled: _react2.default.PropTypes.bool,
    disabledKeyboardNavigation: _react2.default.PropTypes.bool,
    dropdownMode: _react2.default.PropTypes.oneOf(['scroll', 'select']).isRequired,
    endDate: _react2.default.PropTypes.object,
    excludeDates: _react2.default.PropTypes.array,
    filterDate: _react2.default.PropTypes.func,
    fixedHeight: _react2.default.PropTypes.bool,
    highlightDates: _react2.default.PropTypes.array,
    id: _react2.default.PropTypes.string,
    includeDates: _react2.default.PropTypes.array,
    inline: _react2.default.PropTypes.bool,
    isClearable: _react2.default.PropTypes.bool,
    locale: _react2.default.PropTypes.string,
    maxDate: _react2.default.PropTypes.object,
    minDate: _react2.default.PropTypes.object,
    monthsShown: _react2.default.PropTypes.number,
    name: _react2.default.PropTypes.string,
    onBlur: _react2.default.PropTypes.func,
    onChange: _react2.default.PropTypes.func.isRequired,
    onChangeRaw: _react2.default.PropTypes.func,
    onFocus: _react2.default.PropTypes.func,
    onMonthChange: _react2.default.PropTypes.func,
    openToDate: _react2.default.PropTypes.object,
    peekNextMonth: _react2.default.PropTypes.bool,
    placeholderText: _react2.default.PropTypes.string,
    popoverAttachment: _react2.default.PropTypes.string,
    popoverTargetAttachment: _react2.default.PropTypes.string,
    popoverTargetOffset: _react2.default.PropTypes.string,
    readOnly: _react2.default.PropTypes.bool,
    renderCalendarTo: _react2.default.PropTypes.any,
    required: _react2.default.PropTypes.bool,
    scrollableYearDropdown: _react2.default.PropTypes.bool,
    selected: _react2.default.PropTypes.object,
    selectsEnd: _react2.default.PropTypes.bool,
    selectsStart: _react2.default.PropTypes.bool,
    showMonthDropdown: _react2.default.PropTypes.bool,
    showWeekNumbers: _react2.default.PropTypes.bool,
    showYearDropdown: _react2.default.PropTypes.bool,
    forceShowMonthNavigation: _react2.default.PropTypes.bool,
    startDate: _react2.default.PropTypes.object,
    tabIndex: _react2.default.PropTypes.number,
    tetherConstraints: _react2.default.PropTypes.array,
    title: _react2.default.PropTypes.string,
    todayButton: _react2.default.PropTypes.string,
    utcOffset: _react2.default.PropTypes.number,
    withPortal: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      dateFormatCalendar: 'MMMM YYYY',
      onChange: function onChange() {},

      disabled: false,
      disabledKeyboardNavigation: false,
      dropdownMode: 'scroll',
      onFocus: function onFocus() {},
      onBlur: function onBlur() {},
      onMonthChange: function onMonthChange() {},

      popoverAttachment: 'top left',
      popoverTargetAttachment: 'bottom left',
      popoverTargetOffset: '10px 0',
      tetherConstraints: [{
        to: 'window',
        attachment: 'together'
      }],
      utcOffset: (0, _WFMoment2.default)().utcOffset(),
      monthsShown: 1,
      withPortal: false
    };
  },
  getInitialState: function getInitialState() {
    var defaultPreSelection = this.props.openToDate ? (0, _WFMoment2.default)(this.props.openToDate) : (0, _WFMoment2.default)();
    return {
      open: false,
      preventFocus: false,
      preSelection: this.props.selected ? (0, _WFMoment2.default)(this.props.selected) : defaultPreSelection
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clearPreventFocusTimeout();
  },
  clearPreventFocusTimeout: function clearPreventFocusTimeout() {
    if (this.preventFocusTimeout) {
      clearTimeout(this.preventFocusTimeout);
    }
  },
  setFocus: function setFocus() {
    this.refs.input.focus();
  },
  setOpen: function setOpen(open) {
    this.setState({
      open: open,
      preSelection: open && this.state.open ? this.state.preSelection : this.getInitialState().preSelection
    });
  },
  handleFocus: function handleFocus(event) {
    if (!this.state.preventFocus) {
      this.props.onFocus(event);
      this.setOpen(true);
    }
  },
  cancelFocusInput: function cancelFocusInput() {
    clearTimeout(this.inputFocusTimeout);
    this.inputFocusTimeout = null;
  },
  deferFocusInput: function deferFocusInput() {
    var _this = this;

    this.cancelFocusInput();
    this.inputFocusTimeout = window.setTimeout(function () {
      return _this.setFocus();
    }, 1);
  },
  handleDropdownFocus: function handleDropdownFocus() {
    this.cancelFocusInput();
  },
  handleBlur: function handleBlur(event) {
    if (this.state.open) {
      this.deferFocusInput();
    } else {
      this.props.onBlur(event);
    }
  },
  handleCalendarClickOutside: function handleCalendarClickOutside(event) {
    this.setOpen(false);
    if (this.props.withPortal) {
      event.preventDefault();
    }
  },
  handleSelect: function handleSelect(date, event) {
    var _this2 = this;

    // Preventing onFocus event to fix issue
    // https://github.com/Hacker0x01/react-datepicker/issues/628
    this.setState({ preventFocus: true }, function () {
      _this2.preventFocusTimeout = setTimeout(function () {
        return _this2.setState({ preventFocus: false });
      }, 50);
      return _this2.preventFocusTimeout;
    });
    this.setSelected(date, event);
    this.setOpen(false);
  },
  setSelected: function setSelected(date, event) {
    var changedDate = date;

    if (changedDate !== null && (0, _date_utils.isDayDisabled)(changedDate, this.props)) {
      return;
    }

    if (!(0, _date_utils.isSameDay)(this.props.selected, changedDate)) {
      if (changedDate !== null) {
        if (this.props.selected) {
          changedDate = (0, _WFMoment2.default)(changedDate).set({
            hour: this.props.selected.hour(),
            minute: this.props.selected.minute(),
            second: this.props.selected.second()
          });
        }
        this.setState({
          preSelection: changedDate
        });
      }

      this.props.onChange(changedDate, event);
    }
  },
  setPreSelection: function setPreSelection(date) {
    var isDateRangePresent = typeof this.props.minDate !== 'undefined' && typeof this.props.maxDate !== 'undefined';
    var isValidDateSelection = isDateRangePresent ? (0, _date_utils.isDayInRange)(date, this.props.minDate, this.props.maxDate) : true;
    if (isValidDateSelection) {
      this.setState({
        preSelection: date
      });
    }
  },
  onInputClick: function onInputClick() {
    if (!this.props.disabled) {
      this.setOpen(true);
    }
  },
  onInputKeyDown: function onInputKeyDown(event) {
    if (!this.state.open && !this.props.inline) {
      if (/^Arrow/.test(event.key)) {
        this.onInputClick();
      }
      return;
    }
    var copy = (0, _WFMoment2.default)(this.state.preSelection);
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSelect(copy, event);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.setOpen(false);
    } else if (event.key === 'Tab') {
      this.setOpen(false);
    }
    if (!this.props.disabledKeyboardNavigation) {
      var newSelection = void 0;
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          newSelection = copy.subtract(1, 'days');
          break;
        case 'ArrowRight':
          event.preventDefault();
          newSelection = copy.add(1, 'days');
          break;
        case 'ArrowUp':
          event.preventDefault();
          newSelection = copy.subtract(1, 'weeks');
          break;
        case 'ArrowDown':
          event.preventDefault();
          newSelection = copy.add(1, 'weeks');
          break;
        case 'PageUp':
          event.preventDefault();
          newSelection = copy.subtract(1, 'months');
          break;
        case 'PageDown':
          event.preventDefault();
          newSelection = copy.add(1, 'months');
          break;
        case 'Home':
          event.preventDefault();
          newSelection = copy.subtract(1, 'years');
          break;
        case 'End':
          event.preventDefault();
          newSelection = copy.add(1, 'years');
          break;
      }
      this.setPreSelection(newSelection);
    }
  },
  onClearClick: function onClearClick(event) {
    event.preventDefault();
    this.props.onChange(null, event);
  },
  renderCalendar: function renderCalendar() {
    if (!this.props.inline && (!this.state.open || this.props.disabled)) {
      return null;
    }
    return _react2.default.createElement(
      WrappedCalendar,
      {
        ref: 'calendar',
        locale: this.props.locale,
        dateFormat: this.props.dateFormatCalendar,
        dropdownMode: this.props.dropdownMode,
        selected: this.props.selected,
        preSelection: this.state.preSelection,
        onSelect: this.handleSelect,
        openToDate: this.props.openToDate,
        minDate: this.props.minDate,
        maxDate: this.props.maxDate,
        selectsStart: this.props.selectsStart,
        selectsEnd: this.props.selectsEnd,
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        excludeDates: this.props.excludeDates,
        filterDate: this.props.filterDate,
        onClickOutside: this.handleCalendarClickOutside,
        highlightDates: this.props.highlightDates,
        includeDates: this.props.includeDates,
        inline: this.props.inline,
        peekNextMonth: this.props.peekNextMonth,
        showMonthDropdown: this.props.showMonthDropdown,
        showWeekNumbers: this.props.showWeekNumbers,
        showYearDropdown: this.props.showYearDropdown,
        forceShowMonthNavigation: this.props.forceShowMonthNavigation,
        scrollableYearDropdown: this.props.scrollableYearDropdown,
        todayButton: this.props.todayButton,
        utcOffset: this.props.utcOffset,
        outsideClickIgnoreClass: outsideClickIgnoreClass,
        fixedHeight: this.props.fixedHeight,
        monthsShown: this.props.monthsShown,
        onDropdownFocus: this.handleDropdownFocus,
        onMonthChange: this.props.onMonthChange,
        className: this.props.calendarClassName },
      this.props.children
    );
  },
  renderDateInput: function renderDateInput() {
    var className = (0, _classnames3.default)(this.props.className, (0, _defineProperty3.default)({}, outsideClickIgnoreClass, this.state.open));
    return _react2.default.createElement(_date_input2.default, {
      ref: 'input',
      id: this.props.id,
      name: this.props.name,
      autoFocus: this.props.autoFocus,
      date: this.props.selected,
      locale: this.props.locale,
      minDate: this.props.minDate,
      maxDate: this.props.maxDate,
      excludeDates: this.props.excludeDates,
      includeDates: this.props.includeDates,
      filterDate: this.props.filterDate,
      dateFormat: this.props.dateFormat,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onClick: this.onInputClick,
      onChangeRaw: this.props.onChangeRaw,
      onKeyDown: this.onInputKeyDown,
      onChangeDate: this.setSelected,
      placeholder: this.props.placeholderText,
      disabled: this.props.disabled,
      autoComplete: this.props.autoComplete,
      className: className,
      title: this.props.title,
      readOnly: this.props.readOnly,
      required: this.props.required,
      tabIndex: this.props.tabIndex,
      customInput: this.props.customInput });
  },
  renderClearButton: function renderClearButton() {
    if (this.props.isClearable && this.props.selected != null) {
      return _react2.default.createElement('a', { className: 'react-datepicker__close-icon', href: '#', onClick: this.onClearClick });
    } else {
      return null;
    }
  },
  render: function render() {
    var calendar = this.renderCalendar();

    if (this.props.inline && !this.props.withPortal) {
      return calendar;
    }

    if (this.props.withPortal) {
      return _react2.default.createElement(
        'div',
        null,
        !this.props.inline ? _react2.default.createElement(
          'div',
          { className: 'react-datepicker__input-container' },
          this.renderDateInput(),
          this.renderClearButton()
        ) : null,
        this.state.open || this.props.inline ? _react2.default.createElement(
          'div',
          { className: 'react-datepicker__portal' },
          calendar
        ) : null
      );
    }

    return _react2.default.createElement(
      _tether_component2.default,
      {
        classPrefix: 'react-datepicker__tether',
        attachment: this.props.popoverAttachment,
        targetAttachment: this.props.popoverTargetAttachment,
        targetOffset: this.props.popoverTargetOffset,
        renderElementTo: this.props.renderCalendarTo,
        constraints: this.props.tetherConstraints },
      _react2.default.createElement(
        'div',
        { className: 'react-datepicker__input-container' },
        this.renderDateInput(),
        this.renderClearButton()
      ),
      calendar
    );
  }
});

module.exports = DatePicker;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(62);

var _classnames2 = _interopRequireDefault(_classnames);

var _date_utils = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Day = _react2.default.createClass({
  displayName: 'Day',

  propTypes: {
    day: _react2.default.PropTypes.object.isRequired,
    endDate: _react2.default.PropTypes.object,
    highlightDates: _react2.default.PropTypes.array,
    inline: _react2.default.PropTypes.bool,
    month: _react2.default.PropTypes.number,
    onClick: _react2.default.PropTypes.func,
    onMouseEnter: _react2.default.PropTypes.func,
    preSelection: _react2.default.PropTypes.object,
    selected: _react2.default.PropTypes.object,
    selectingDate: _react2.default.PropTypes.object,
    selectsEnd: _react2.default.PropTypes.bool,
    selectsStart: _react2.default.PropTypes.bool,
    startDate: _react2.default.PropTypes.object,
    utcOffset: _react2.default.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      utcOffset: _WFMoment2.default.utc().utcOffset()
    };
  },
  handleClick: function handleClick(event) {
    if (!this.isDisabled() && this.props.onClick) {
      this.props.onClick(event);
    }
  },
  handleMouseEnter: function handleMouseEnter(event) {
    if (!this.isDisabled() && this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  },
  isSameDay: function isSameDay(other) {
    return (0, _date_utils.isSameDay)(this.props.day, other);
  },
  isKeyboardSelected: function isKeyboardSelected() {
    return !this.props.inline && !this.isSameDay(this.props.selected) && this.isSameDay(this.props.preSelection);
  },
  isDisabled: function isDisabled() {
    return (0, _date_utils.isDayDisabled)(this.props.day, this.props);
  },
  isHighlighted: function isHighlighted() {
    var _props = this.props,
        day = _props.day,
        highlightDates = _props.highlightDates;

    if (!highlightDates) return false;
    return highlightDates.some(function (testDay) {
      return (0, _date_utils.isSameDay)(day, testDay);
    });
  },
  isInRange: function isInRange() {
    var _props2 = this.props,
        day = _props2.day,
        startDate = _props2.startDate,
        endDate = _props2.endDate;

    if (!startDate || !endDate) return false;
    return (0, _date_utils.isDayInRange)(day, startDate, endDate);
  },
  isInSelectingRange: function isInSelectingRange() {
    var _props3 = this.props,
        day = _props3.day,
        selectsStart = _props3.selectsStart,
        selectsEnd = _props3.selectsEnd,
        selectingDate = _props3.selectingDate,
        startDate = _props3.startDate,
        endDate = _props3.endDate;


    if (!(selectsStart || selectsEnd) || !selectingDate || this.isDisabled()) {
      return false;
    }

    if (selectsStart && endDate && selectingDate.isSameOrBefore(endDate)) {
      return (0, _date_utils.isDayInRange)(day, selectingDate, endDate);
    }

    if (selectsEnd && startDate && selectingDate.isSameOrAfter(startDate)) {
      return (0, _date_utils.isDayInRange)(day, startDate, selectingDate);
    }

    return false;
  },
  isSelectingRangeStart: function isSelectingRangeStart() {
    if (!this.isInSelectingRange()) {
      return false;
    }

    var _props4 = this.props,
        day = _props4.day,
        selectingDate = _props4.selectingDate,
        startDate = _props4.startDate,
        selectsStart = _props4.selectsStart;


    if (selectsStart) {
      return (0, _date_utils.isSameDay)(day, selectingDate);
    } else {
      return (0, _date_utils.isSameDay)(day, startDate);
    }
  },
  isSelectingRangeEnd: function isSelectingRangeEnd() {
    if (!this.isInSelectingRange()) {
      return false;
    }

    var _props5 = this.props,
        day = _props5.day,
        selectingDate = _props5.selectingDate,
        endDate = _props5.endDate,
        selectsEnd = _props5.selectsEnd;


    if (selectsEnd) {
      return (0, _date_utils.isSameDay)(day, selectingDate);
    } else {
      return (0, _date_utils.isSameDay)(day, endDate);
    }
  },
  isRangeStart: function isRangeStart() {
    var _props6 = this.props,
        day = _props6.day,
        startDate = _props6.startDate,
        endDate = _props6.endDate;

    if (!startDate || !endDate) return false;
    return (0, _date_utils.isSameDay)(startDate, day);
  },
  isRangeEnd: function isRangeEnd() {
    var _props7 = this.props,
        day = _props7.day,
        startDate = _props7.startDate,
        endDate = _props7.endDate;

    if (!startDate || !endDate) return false;
    return (0, _date_utils.isSameDay)(endDate, day);
  },
  isWeekend: function isWeekend() {
    var weekday = this.props.day.day();
    return weekday === 0 || weekday === 6;
  },
  isOutsideMonth: function isOutsideMonth() {
    return this.props.month !== undefined && this.props.month !== this.props.day.month();
  },
  getClassNames: function getClassNames() {
    return (0, _classnames2.default)('react-datepicker__day', {
      'react-datepicker__day--disabled': this.isDisabled(),
      'react-datepicker__day--selected': this.isSameDay(this.props.selected),
      'react-datepicker__day--keyboard-selected': this.isKeyboardSelected(),
      'react-datepicker__day--highlighted': this.isHighlighted(),
      'react-datepicker__day--range-start': this.isRangeStart(),
      'react-datepicker__day--range-end': this.isRangeEnd(),
      'react-datepicker__day--in-range': this.isInRange(),
      'react-datepicker__day--in-selecting-range': this.isInSelectingRange(),
      'react-datepicker__day--selecting-range-start': this.isSelectingRangeStart(),
      'react-datepicker__day--selecting-range-end': this.isSelectingRangeEnd(),
      'react-datepicker__day--today': this.isSameDay(_WFMoment2.default.utc().utcOffset(this.props.utcOffset)),
      'react-datepicker__day--weekend': this.isWeekend(),
      'react-datepicker__day--outside-month': this.isOutsideMonth()
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      {
        className: this.getClassNames(),
        onClick: this.handleClick,
        onMouseEnter: this.handleMouseEnter,
        'aria-label': 'day-' + this.props.day.date(),
        role: 'option' },
      this.props.day.date()
    );
  }
});

module.exports = Day;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(62);

var _classnames2 = _interopRequireDefault(_classnames);

var _week = __webpack_require__(190);

var _week2 = _interopRequireDefault(_week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;

var Month = _react2.default.createClass({
  displayName: 'Month',

  propTypes: {
    day: _react2.default.PropTypes.object.isRequired,
    endDate: _react2.default.PropTypes.object,
    excludeDates: _react2.default.PropTypes.array,
    filterDate: _react2.default.PropTypes.func,
    fixedHeight: _react2.default.PropTypes.bool,
    highlightDates: _react2.default.PropTypes.array,
    includeDates: _react2.default.PropTypes.array,
    inline: _react2.default.PropTypes.bool,
    maxDate: _react2.default.PropTypes.object,
    minDate: _react2.default.PropTypes.object,
    onDayClick: _react2.default.PropTypes.func,
    onDayMouseEnter: _react2.default.PropTypes.func,
    onMouseLeave: _react2.default.PropTypes.func,
    peekNextMonth: _react2.default.PropTypes.bool,
    preSelection: _react2.default.PropTypes.object,
    selected: _react2.default.PropTypes.object,
    selectingDate: _react2.default.PropTypes.object,
    selectsEnd: _react2.default.PropTypes.bool,
    selectsStart: _react2.default.PropTypes.bool,
    showWeekNumbers: _react2.default.PropTypes.bool,
    startDate: _react2.default.PropTypes.object,
    utcOffset: _react2.default.PropTypes.number
  },

  handleDayClick: function handleDayClick(day, event) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, event);
    }
  },
  handleDayMouseEnter: function handleDayMouseEnter(day) {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day);
    }
  },
  handleMouseLeave: function handleMouseLeave() {
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave();
    }
  },
  isWeekInMonth: function isWeekInMonth(startOfWeek) {
    var day = this.props.day;
    var endOfWeek = startOfWeek.clone().add(6, 'days');
    return startOfWeek.isSame(day, 'month') || endOfWeek.isSame(day, 'month');
  },
  renderWeeks: function renderWeeks() {
    var weeks = [];
    var isFixedHeight = this.props.fixedHeight;
    var currentWeekStart = this.props.day.clone().startOf('month').startOf('week');
    var i = 0;
    var breakAfterNextPush = false;

    while (true) {
      weeks.push(_react2.default.createElement(_week2.default, {
        key: i,
        day: currentWeekStart,
        month: this.props.day.month(),
        onDayClick: this.handleDayClick,
        onDayMouseEnter: this.handleDayMouseEnter,
        minDate: this.props.minDate,
        maxDate: this.props.maxDate,
        excludeDates: this.props.excludeDates,
        includeDates: this.props.includeDates,
        inline: this.props.inline,
        highlightDates: this.props.highlightDates,
        selectingDate: this.props.selectingDate,
        filterDate: this.props.filterDate,
        preSelection: this.props.preSelection,
        selected: this.props.selected,
        selectsStart: this.props.selectsStart,
        selectsEnd: this.props.selectsEnd,
        showWeekNumber: this.props.showWeekNumbers,
        startDate: this.props.startDate,
        endDate: this.props.endDate,
        utcOffset: this.props.utcOffset }));

      if (breakAfterNextPush) break;

      i++;
      currentWeekStart = currentWeekStart.clone().add(1, 'weeks');

      // If one of these conditions is true, we will either break on this week
      // or break on the next week
      var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
      var isNonFixedAndOutOfMonth = !isFixedHeight && !this.isWeekInMonth(currentWeekStart);

      if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
        if (this.props.peekNextMonth) {
          breakAfterNextPush = true;
        } else {
          break;
        }
      }
    }

    return weeks;
  },
  getClassNames: function getClassNames() {
    var _props = this.props,
        selectingDate = _props.selectingDate,
        selectsStart = _props.selectsStart,
        selectsEnd = _props.selectsEnd;

    return (0, _classnames2.default)('react-datepicker__month', {
      'react-datepicker__month--selecting-range': selectingDate && (selectsStart || selectsEnd)
    });
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: this.getClassNames(), onMouseLeave: this.handleMouseLeave, role: 'listbox' },
      this.renderWeeks()
    );
  }
});

module.exports = Month;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _month_dropdown_options = __webpack_require__(188);

var _month_dropdown_options2 = _interopRequireDefault(_month_dropdown_options);

var _reactOnclickoutside = __webpack_require__(108);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedMonthDropdownOptions = (0, _reactOnclickoutside2.default)(_month_dropdown_options2.default);

var MonthDropdown = _react2.default.createClass({
  displayName: 'MonthDropdown',

  propTypes: {
    dropdownMode: _react2.default.PropTypes.oneOf(['scroll', 'select']).isRequired,
    locale: _react2.default.PropTypes.string,
    month: _react2.default.PropTypes.number.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      dropdownVisible: false
    };
  },
  renderSelectOptions: function renderSelectOptions(monthNames) {
    return monthNames.map(function (M, i) {
      return _react2.default.createElement(
        'option',
        { key: i, value: i },
        M
      );
    });
  },
  renderSelectMode: function renderSelectMode(monthNames) {
    var _this = this;

    return _react2.default.createElement(
      'select',
      { value: this.props.month, className: 'react-datepicker__month-select', onChange: function onChange(e) {
          return _this.onChange(e.target.value);
        } },
      this.renderSelectOptions(monthNames)
    );
  },
  renderReadView: function renderReadView(visible, monthNames) {
    return _react2.default.createElement(
      'div',
      { key: 'read', style: { visibility: visible ? 'visible' : 'hidden' }, className: 'react-datepicker__month-read-view', onClick: this.toggleDropdown },
      _react2.default.createElement(
        'span',
        { className: 'react-datepicker__month-read-view--selected-month' },
        monthNames[this.props.month]
      ),
      _react2.default.createElement('span', { className: 'react-datepicker__month-read-view--down-arrow' })
    );
  },
  renderDropdown: function renderDropdown(monthNames) {
    return _react2.default.createElement(WrappedMonthDropdownOptions, {
      key: 'dropdown',
      ref: 'options',
      month: this.props.month,
      monthNames: monthNames,
      onChange: this.onChange,
      onCancel: this.toggleDropdown });
  },
  renderScrollMode: function renderScrollMode(monthNames) {
    var dropdownVisible = this.state.dropdownVisible;

    var result = [this.renderReadView(!dropdownVisible, monthNames)];
    if (dropdownVisible) {
      result.unshift(this.renderDropdown(monthNames));
    }
    return result;
  },
  onChange: function onChange(month) {
    this.toggleDropdown();
    if (month !== this.props.month) {
      this.props.onChange(month);
    }
  },
  toggleDropdown: function toggleDropdown() {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  },
  render: function render() {
    var localeData = _WFMoment2.default.localeData(this.props.locale);
    var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (M) {
      return localeData.months((0, _WFMoment2.default)({ M: M }));
    });

    var renderedDropdown = void 0;
    switch (this.props.dropdownMode) {
      case 'scroll':
        renderedDropdown = this.renderScrollMode(monthNames);
        break;
      case 'select':
        renderedDropdown = this.renderSelectMode(monthNames);
        break;
    }

    return _react2.default.createElement(
      'div',
      {
        className: 'react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--' + this.props.dropdownMode },
      renderedDropdown
    );
  }
});

module.exports = MonthDropdown;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MonthDropdownOptions = _react2.default.createClass({
  displayName: 'MonthDropdownOptions',

  propTypes: {
    onCancel: _react2.default.PropTypes.func.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired,
    month: _react2.default.PropTypes.number.isRequired,
    monthNames: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string.isRequired).isRequired
  },

  renderOptions: function renderOptions() {
    var _this = this;

    var selectedMonth = this.props.month;
    var options = this.props.monthNames.map(function (month, i) {
      return _react2.default.createElement(
        'div',
        { className: 'react-datepicker__month-option',
          key: month,
          ref: month,
          onClick: _this.onChange.bind(_this, i) },
        selectedMonth === i ? _react2.default.createElement(
          'span',
          { className: 'react-datepicker__month-option--selected' },
          '\u2713'
        ) : '',
        month
      );
    });

    return options;
  },
  onChange: function onChange(month) {
    this.props.onChange(month);
  },
  handleClickOutside: function handleClickOutside() {
    this.props.onCancel();
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'react-datepicker__month-dropdown' },
      this.renderOptions()
    );
  }
});

module.exports = MonthDropdownOptions;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(127);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = __webpack_require__(382);

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function childrenPropType(_ref, propName, componentName) {
  var children = _ref.children;

  var childCount = _react.Children.count(children);
  if (childCount <= 0) {
    return new Error(componentName + ' expects at least one child to use as the target element.');
  } else if (childCount > 2) {
    return new Error('Only a max of two children allowed in ' + componentName + '.');
  }
}

var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var TetherComponent = _react2.default.createClass({
  displayName: 'TetherComponent',

  propTypes: {
    attachment: _react.PropTypes.oneOf(attachmentPositions).isRequired,
    children: childrenPropType,
    className: _react.PropTypes.string,
    classPrefix: _react.PropTypes.string,
    classes: _react.PropTypes.object,
    constraints: _react.PropTypes.array,
    enabled: _react.PropTypes.bool,
    id: _react.PropTypes.string,
    offset: _react.PropTypes.string,
    optimizations: _react.PropTypes.object,
    renderElementTag: _react.PropTypes.string,
    renderElementTo: _react.PropTypes.any,
    style: _react.PropTypes.object,
    targetAttachment: _react.PropTypes.oneOf(attachmentPositions),
    targetModifier: _react.PropTypes.string,
    targetOffset: _react.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      renderElementTag: 'div',
      renderElementTo: null
    };
  },
  componentDidMount: function componentDidMount() {
    this._targetNode = _reactDom2.default.findDOMNode(this);
    this._update();
  },
  componentDidUpdate: function componentDidUpdate() {
    this._update();
  },
  componentWillUnmount: function componentWillUnmount() {
    this._destroy();
  },
  disable: function disable() {
    this._tether.disable();
  },
  enable: function enable() {
    this._tether.enable();
  },
  position: function position() {
    this._tether.position();
  },
  _destroy: function _destroy() {
    if (this._elementParentNode) {
      _reactDom2.default.unmountComponentAtNode(this._elementParentNode);
      this._elementParentNode.parentNode.removeChild(this._elementParentNode);
    }

    if (this._tether) {
      this._tether.destroy();
    }

    this._elementParentNode = null;
    this._tether = null;
  },
  _update: function _update() {
    var _this = this;

    var _props = this.props,
        children = _props.children,
        renderElementTag = _props.renderElementTag,
        renderElementTo = _props.renderElementTo;

    var elementComponent = children[1];

    // if no element component provided, bail out
    if (!elementComponent) {
      // destroy Tether elements if they have been created
      if (this._tether) {
        this._destroy();
      }
      return;
    }

    // create element node container if it hasn't been yet
    if (!this._elementParentNode) {
      // create a node that we can stick our content Component in
      this._elementParentNode = document.createElement(renderElementTag);

      // append node to the end of the body
      var renderTo = renderElementTo || document.body;
      renderTo.appendChild(this._elementParentNode);
    }

    // render element component into the DOM
    _reactDom2.default.unstable_renderSubtreeIntoContainer(this, elementComponent, this._elementParentNode, function () {
      // don't update Tether until the subtree has finished rendering
      _this._updateTether();
    });
  },
  _updateTether: function _updateTether() {
    var _props2 = this.props,
        renderElementTag = _props2.renderElementTag,
        renderElementTo = _props2.renderElementTo,
        options = (0, _objectWithoutProperties3.default)(_props2, ['renderElementTag', 'renderElementTo']); // eslint-disable-line no-unused-vars

    var tetherOptions = (0, _extends3.default)({
      target: this._targetNode,
      element: this._elementParentNode
    }, options);

    if (!this._tether) {
      this._tether = new _tether2.default(tetherOptions);
    } else {
      this._tether.setOptions(tetherOptions);
    }

    this._tether.position();
  },
  render: function render() {
    var children = this.props.children;

    var firstChild = null;

    // we use forEach because the second child could be null
    // causing children to not be an array
    _react.Children.forEach(children, function (child, index) {
      if (index === 0) {
        firstChild = child;
        return false;
      }
    });

    return firstChild;
  }
});

module.exports = TetherComponent;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _day = __webpack_require__(185);

var _day2 = _interopRequireDefault(_day);

var _week_number = __webpack_require__(191);

var _week_number2 = _interopRequireDefault(_week_number);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Week = _react2.default.createClass({
  displayName: 'Week',

  propTypes: {
    day: _react2.default.PropTypes.object.isRequired,
    endDate: _react2.default.PropTypes.object,
    excludeDates: _react2.default.PropTypes.array,
    filterDate: _react2.default.PropTypes.func,
    highlightDates: _react2.default.PropTypes.array,
    includeDates: _react2.default.PropTypes.array,
    inline: _react2.default.PropTypes.bool,
    maxDate: _react2.default.PropTypes.object,
    minDate: _react2.default.PropTypes.object,
    month: _react2.default.PropTypes.number,
    onDayClick: _react2.default.PropTypes.func,
    onDayMouseEnter: _react2.default.PropTypes.func,
    preSelection: _react2.default.PropTypes.object,
    selected: _react2.default.PropTypes.object,
    selectingDate: _react2.default.PropTypes.object,
    selectsEnd: _react2.default.PropTypes.bool,
    selectsStart: _react2.default.PropTypes.bool,
    showWeekNumber: _react2.default.PropTypes.bool,
    startDate: _react2.default.PropTypes.object,
    utcOffset: _react2.default.PropTypes.number
  },

  handleDayClick: function handleDayClick(day, event) {
    if (this.props.onDayClick) {
      this.props.onDayClick(day, event);
    }
  },
  handleDayMouseEnter: function handleDayMouseEnter(day) {
    if (this.props.onDayMouseEnter) {
      this.props.onDayMouseEnter(day);
    }
  },
  renderDays: function renderDays() {
    var _this = this;

    var startOfWeek = this.props.day.clone().startOf('week');
    var days = [];
    if (this.props.showWeekNumber) {
      days.push(_react2.default.createElement(_week_number2.default, { key: 'W', weekNumber: parseInt(startOfWeek.format('w'), 10) }));
    }
    return days.concat([0, 1, 2, 3, 4, 5, 6].map(function (offset) {
      var day = startOfWeek.clone().add(offset, 'days');
      return _react2.default.createElement(_day2.default, {
        key: offset,
        day: day,
        month: _this.props.month,
        onClick: _this.handleDayClick.bind(_this, day),
        onMouseEnter: _this.handleDayMouseEnter.bind(_this, day),
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        excludeDates: _this.props.excludeDates,
        includeDates: _this.props.includeDates,
        inline: _this.props.inline,
        highlightDates: _this.props.highlightDates,
        selectingDate: _this.props.selectingDate,
        filterDate: _this.props.filterDate,
        preSelection: _this.props.preSelection,
        selected: _this.props.selected,
        selectsStart: _this.props.selectsStart,
        selectsEnd: _this.props.selectsEnd,
        startDate: _this.props.startDate,
        endDate: _this.props.endDate,
        utcOffset: _this.props.utcOffset });
    }));
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'react-datepicker__week' },
      this.renderDays()
    );
  }
});

module.exports = Week;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeekNumber = _react2.default.createClass({
  displayName: 'WeekNumber',

  propTypes: {
    weekNumber: _react2.default.PropTypes.number.isRequired
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      {
        className: 'react-datepicker__week-number',
        'aria-label': 'week-' + this.props.weekNumber },
      this.props.weekNumber
    );
  }
});

module.exports = WeekNumber;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _year_dropdown_options = __webpack_require__(193);

var _year_dropdown_options2 = _interopRequireDefault(_year_dropdown_options);

var _reactOnclickoutside = __webpack_require__(108);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedYearDropdownOptions = (0, _reactOnclickoutside2.default)(_year_dropdown_options2.default);

var YearDropdown = _react2.default.createClass({
  displayName: 'YearDropdown',

  propTypes: {
    dropdownMode: _react2.default.PropTypes.oneOf(['scroll', 'select']).isRequired,
    maxDate: _react2.default.PropTypes.object,
    minDate: _react2.default.PropTypes.object,
    onChange: _react2.default.PropTypes.func.isRequired,
    scrollableYearDropdown: _react2.default.PropTypes.bool,
    year: _react2.default.PropTypes.number.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      dropdownVisible: false
    };
  },
  renderSelectOptions: function renderSelectOptions() {
    var minYear = this.props.minDate ? this.props.minDate.year() : 1900;
    var maxYear = this.props.maxDate ? this.props.maxDate.year() : 2100;

    var options = [];
    for (var i = minYear; i <= maxYear; i++) {
      options.push(_react2.default.createElement(
        'option',
        { key: i, value: i },
        i
      ));
    }
    return options;
  },
  onSelectChange: function onSelectChange(e) {
    this.onChange(e.target.value);
  },
  renderSelectMode: function renderSelectMode() {
    return _react2.default.createElement(
      'select',
      {
        value: this.props.year,
        className: 'react-datepicker__year-select',
        onChange: this.onSelectChange },
      this.renderSelectOptions()
    );
  },
  renderReadView: function renderReadView(visible) {
    return _react2.default.createElement(
      'div',
      { key: 'read', style: { visibility: visible ? 'visible' : 'hidden' }, className: 'react-datepicker__year-read-view', onClick: this.toggleDropdown },
      _react2.default.createElement('span', { className: 'react-datepicker__year-read-view--down-arrow' }),
      _react2.default.createElement(
        'span',
        { className: 'react-datepicker__year-read-view--selected-year' },
        this.props.year
      )
    );
  },
  renderDropdown: function renderDropdown() {
    return _react2.default.createElement(WrappedYearDropdownOptions, {
      key: 'dropdown',
      ref: 'options',
      year: this.props.year,
      onChange: this.onChange,
      onCancel: this.toggleDropdown,
      scrollableYearDropdown: this.props.scrollableYearDropdown });
  },
  renderScrollMode: function renderScrollMode() {
    var dropdownVisible = this.state.dropdownVisible;

    var result = [this.renderReadView(!dropdownVisible)];
    if (dropdownVisible) {
      result.unshift(this.renderDropdown());
    }
    return result;
  },
  onChange: function onChange(year) {
    this.toggleDropdown();
    if (year === this.props.year) return;
    this.props.onChange(year);
  },
  toggleDropdown: function toggleDropdown() {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    });
  },
  render: function render() {
    var renderedDropdown = void 0;
    switch (this.props.dropdownMode) {
      case 'scroll':
        renderedDropdown = this.renderScrollMode();
        break;
      case 'select':
        renderedDropdown = this.renderSelectMode();
        break;
    }

    return _react2.default.createElement(
      'div',
      {
        className: 'react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--' + this.props.dropdownMode },
      renderedDropdown
    );
  }
});

module.exports = YearDropdown;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(62);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateYears(year, noOfYear) {
  var list = [];
  for (var i = 0; i < 2 * noOfYear; i++) {
    list.push(year + noOfYear - i);
  }
  return list;
}

var YearDropdownOptions = _react2.default.createClass({
  displayName: 'YearDropdownOptions',

  propTypes: {
    onCancel: _react2.default.PropTypes.func.isRequired,
    onChange: _react2.default.PropTypes.func.isRequired,
    scrollableYearDropdown: _react2.default.PropTypes.bool,
    year: _react2.default.PropTypes.number.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      yearsList: this.props.scrollableYearDropdown ? generateYears(this.props.year, 10) : generateYears(this.props.year, 5)
    };
  },
  renderOptions: function renderOptions() {
    var _this = this;

    var selectedYear = this.props.year;
    var options = this.state.yearsList.map(function (year) {
      return _react2.default.createElement(
        'div',
        { className: 'react-datepicker__year-option',
          key: year,
          ref: year,
          onClick: _this.onChange.bind(_this, year) },
        selectedYear === year ? _react2.default.createElement(
          'span',
          { className: 'react-datepicker__year-option--selected' },
          '\u2713'
        ) : '',
        year
      );
    });

    options.unshift(_react2.default.createElement(
      'div',
      { className: 'react-datepicker__year-option',
        ref: 'upcoming',
        key: 'upcoming',
        onClick: this.incrementYears },
      _react2.default.createElement('a', { className: 'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming' })
    ));
    options.push(_react2.default.createElement(
      'div',
      { className: 'react-datepicker__year-option',
        ref: 'previous',
        key: 'previous',
        onClick: this.decrementYears },
      _react2.default.createElement('a', { className: 'react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous' })
    ));
    return options;
  },
  onChange: function onChange(year) {
    this.props.onChange(year);
  },
  handleClickOutside: function handleClickOutside() {
    this.props.onCancel();
  },
  shiftYears: function shiftYears(amount) {
    var years = this.state.yearsList.map(function (year) {
      return year + amount;
    });

    this.setState({
      yearsList: years
    });
  },
  incrementYears: function incrementYears() {
    return this.shiftYears(1);
  },
  decrementYears: function decrementYears() {
    return this.shiftYears(-1);
  },
  render: function render() {
    var dropdownClass = (0, _classnames2.default)({
      'react-datepicker__year-dropdown': true,
      'react-datepicker__year-dropdown--scrollable': this.props.scrollableYearDropdown
    });

    return _react2.default.createElement(
      'div',
      { className: dropdownClass },
      this.renderOptions()
    );
  }
});

module.exports = YearDropdownOptions;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFScrollBars = __webpack_require__(39);

var _WFScrollBars2 = _interopRequireDefault(_WFScrollBars);

var _WFCellImg = __webpack_require__(83);

var _WFCellImg2 = _interopRequireDefault(_WFCellImg);

var _WFCellState = __webpack_require__(84);

var _WFCellState2 = _interopRequireDefault(_WFCellState);

var _WFCellIcon = __webpack_require__(82);

var _WFCellIcon2 = _interopRequireDefault(_WFCellIcon);

var _WFCellColor = __webpack_require__(80);

var _WFCellColor2 = _interopRequireDefault(_WFCellColor);

var _WFCellContent = __webpack_require__(81);

var _WFCellContent2 = _interopRequireDefault(_WFCellContent);

var _WFCss = __webpack_require__(57);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// ARCHIVE OPTION ------------------- //
// ------------------- //

var ArchiveOption = function (_Component) {
  (0, _inherits3.default)(ArchiveOption, _Component);

  function ArchiveOption() {
    (0, _classCallCheck3.default)(this, ArchiveOption);
    return (0, _possibleConstructorReturn3.default)(this, (ArchiveOption.__proto__ || (0, _getPrototypeOf2.default)(ArchiveOption)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArchiveOption, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          _props$isLoading = _props.isLoading,
          isLoading = _props$isLoading === undefined ? false : _props$isLoading,
          _props$searchValue = _props.searchValue,
          searchValue = _props$searchValue === undefined ? "" : _props$searchValue;

      return _react2.default.createElement(
        "div",
        { className: "" + _WFCss2.default.wrapper.optionArchive },
        !isLoading && data.length === 0 ? this.getNotFoundMsg() : this.getOptions()
      );
    }
  }, {
    key: "getNotFoundMsg",
    value: function getNotFoundMsg() {
      return _react2.default.createElement(
        _WFText2.default,
        { className: _WFCss2.default.wrapper.optionNotFound },
        "Option(s) not found..."
      );
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _props2 = this.props,
          _props2$data = _props2.data,
          data = _props2$data === undefined ? [] : _props2$data,
          onSelect = _props2.onSelect,
          isMax = _props2.isMax,
          isMultiple = _props2.isMultiple,
          isSelected = _props2.isSelected,
          _props2$scrollheightM = _props2.scrollheightMin,
          scrollheightMin = _props2$scrollheightM === undefined ? 0 : _props2$scrollheightM,
          _props2$scrollheightM2 = _props2.scrollheightMax,
          scrollheightMax = _props2$scrollheightM2 === undefined ? 340 : _props2$scrollheightM2,
          _props2$scrollAutoHid = _props2.scrollAutoHide,
          scrollAutoHide = _props2$scrollAutoHid === undefined ? true : _props2$scrollAutoHid;

      return _react2.default.createElement(
        _WFScrollBars2.default,
        {
          autoHeight: true,
          autoHide: scrollAutoHide,
          autoHeightMin: scrollheightMin,
          autoHeightMax: scrollheightMax,
          style: { width: "100%" },
          className: "" + _WFCss2.default.scrollbar.optionArchive,
          renderTrackHorizontal: function renderTrackHorizontal(props) {
            return _react2.default.createElement("div", (0, _extends3.default)({}, props, { className: "track-horizontal" }));
          },
          renderThumbHorizontal: function renderThumbHorizontal(props) {
            return _react2.default.createElement("div", (0, _extends3.default)({}, props, { className: "thumb-horizontal" }));
          }
        },
        data.map(function (row, i) {
          var _WFValue$getValues = _WFValue2.default.getValues(row),
              _WFValue$getValues$id = _WFValue$getValues.id,
              id = _WFValue$getValues$id === undefined ? null : _WFValue$getValues$id,
              _WFValue$getValues$la = _WFValue$getValues.label,
              label = _WFValue$getValues$la === undefined ? "" : _WFValue$getValues$la,
              _WFValue$getValues$le = _WFValue$getValues.legend,
              legend = _WFValue$getValues$le === undefined ? "" : _WFValue$getValues$le,
              _WFValue$getValues$im = _WFValue$getValues.image,
              image = _WFValue$getValues$im === undefined ? "" : _WFValue$getValues$im,
              _WFValue$getValues$ic = _WFValue$getValues.icon,
              icon = _WFValue$getValues$ic === undefined ? "" : _WFValue$getValues$ic,
              _WFValue$getValues$co = _WFValue$getValues.color,
              color = _WFValue$getValues$co === undefined ? "" : _WFValue$getValues$co;

          if (id === null) {
            return false;
          } else {
            var active = isSelected(id);
            return _react2.default.createElement(
              "div",
              {
                key: id,
                onClick: function onClick() {
                  return onSelect(id);
                },
                className: _WFCss2.default.wrapper.optionOption + " " + (active ? _WFCss2.default.state.active : "") },
              _react2.default.createElement(_WFCellImg2.default, { image: image }),
              _react2.default.createElement(_WFCellState2.default, { checked: active, visible: isMultiple, hiddenNull: isMax }),
              _react2.default.createElement(_WFCellIcon2.default, { image: icon }),
              _react2.default.createElement(_WFCellColor2.default, { color: color }),
              _react2.default.createElement(_WFCellContent2.default, { label: label, legend: legend })
            );
          }
        })
      );
    }
  }]);
  return ArchiveOption;
}(_react.Component);

// ------------------- //


exports.default = ArchiveOption;
// ------------------- //

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

var _WFIcon = __webpack_require__(10);

var _WFImg = __webpack_require__(56);

var _WFImg2 = _interopRequireDefault(_WFImg);

var _WFText = __webpack_require__(16);

var _WFText2 = _interopRequireDefault(_WFText);

var _WFScrollBars = __webpack_require__(39);

var _WFScrollBars2 = _interopRequireDefault(_WFScrollBars);

var _WFCss = __webpack_require__(57);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// ARCHIVE SELECTION ------------------- //
// ------------------- //

var ArchiveSelection = function (_Component) {
  (0, _inherits3.default)(ArchiveSelection, _Component);

  function ArchiveSelection() {
    (0, _classCallCheck3.default)(this, ArchiveSelection);
    return (0, _possibleConstructorReturn3.default)(this, (ArchiveSelection.__proto__ || (0, _getPrototypeOf2.default)(ArchiveSelection)).apply(this, arguments));
  }

  (0, _createClass3.default)(ArchiveSelection, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          onToggle = _props.onToggle,
          onRemove = _props.onRemove;

      return _react2.default.createElement(
        "div",
        { className: "" + _WFCss2.default.wrapper.selectionArchive },
        _react2.default.createElement(
          _WFScrollBars2.default,
          {
            autoHide: true,
            style: { width: "100%", height: 40 },
            className: "" + _WFCss2.default.scrollbar.selectionArchive,
            renderTrackHorizontal: function renderTrackHorizontal(props) {
              return _react2.default.createElement("div", (0, _extends3.default)({}, props, { className: "track-horizontal" }));
            },
            renderThumbHorizontal: function renderThumbHorizontal(props) {
              return _react2.default.createElement("div", (0, _extends3.default)({}, props, { className: "thumb-horizontal" }));
            },
            renderTrackVertical: function renderTrackVertical(props) {
              return _react2.default.createElement("div", (0, _extends3.default)({}, props, { className: "track-vertical" }));
            },
            renderThumbVertical: function renderThumbVertical(props) {
              return _react2.default.createElement("div", (0, _extends3.default)({}, props, { className: "thumb-vertical" }));
            }
          },
          data.map(function (row, i) {
            var _WFValue$getValues = _WFValue2.default.getValues(row),
                _WFValue$getValues$id = _WFValue$getValues.id,
                id = _WFValue$getValues$id === undefined ? null : _WFValue$getValues$id,
                _WFValue$getValues$la = _WFValue$getValues.label,
                label = _WFValue$getValues$la === undefined ? "" : _WFValue$getValues$la,
                _WFValue$getValues$ic = _WFValue$getValues.icon,
                icon = _WFValue$getValues$ic === undefined ? "" : _WFValue$getValues$ic,
                _WFValue$getValues$co = _WFValue$getValues.color,
                color = _WFValue$getValues$co === undefined ? "" : _WFValue$getValues$co;

            if (id === null) {
              return false;
            } else {
              return _react2.default.createElement(
                "div",
                { key: i, className: "" + _WFCss2.default.wrapper.selectionOption },
                _react2.default.createElement(_WFIcon.WFIClose, { onClick: function onClick() {
                    return onRemove(id);
                  } }),
                icon ? _react2.default.createElement(_WFImg2.default, { className: "wf-e-icon", src: icon }) : "",
                !icon && color ? _react2.default.createElement("span", { className: "wf-e-color", style: { background: color } }) : "",
                _react2.default.createElement(
                  _WFText2.default,
                  null,
                  label
                )
              );
            }
          })
        ),
        _react2.default.createElement("span", {
          className: "wf-toggle-bg",
          onClick: function onClick() {
            return onToggle();
          } })
      );
    }
  }]);
  return ArchiveSelection;
}(_react.Component);

// ------------------- //


exports.default = ArchiveSelection;
// ------------------- //

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFIcon = __webpack_require__(10);

var _WFCss = __webpack_require__(57);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// TOGGLE BUTTON ------------------- //
// ------------------- //

var ButtonToggle = function (_Component) {
  (0, _inherits3.default)(ButtonToggle, _Component);

  function ButtonToggle() {
    (0, _classCallCheck3.default)(this, ButtonToggle);
    return (0, _possibleConstructorReturn3.default)(this, (ButtonToggle.__proto__ || (0, _getPrototypeOf2.default)(ButtonToggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonToggle, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          _onClick = _props.onClick;

      return _react2.default.createElement(
        "div",
        { className: "" + _WFCss2.default.wrapper.toggle },
        checked ? _react2.default.createElement(_WFIcon.WFIClose, { onClick: function onClick() {
            return _onClick();
          } }) : _react2.default.createElement(_WFIcon.WFIDown, { onClick: function onClick() {
            return _onClick();
          } })
      );
    }
  }]);
  return ButtonToggle;
}(_react.Component);

// ------------------- //


exports.default = ButtonToggle;
// ------------------- //

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFIcon = __webpack_require__(10);

var _WFLoader = __webpack_require__(85);

var _WFLoader2 = _interopRequireDefault(_WFLoader);

var _WFCss = __webpack_require__(57);

var _WFCss2 = _interopRequireDefault(_WFCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// SEARCH INPUT ------------------- //
// ------------------- //

var SearchInput = function (_Component) {
  (0, _inherits3.default)(SearchInput, _Component);

  function SearchInput() {
    (0, _classCallCheck3.default)(this, SearchInput);
    return (0, _possibleConstructorReturn3.default)(this, (SearchInput.__proto__ || (0, _getPrototypeOf2.default)(SearchInput)).apply(this, arguments));
  }

  (0, _createClass3.default)(SearchInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          disabled = _props.disabled,
          _props$placeholder = _props.placeholder,
          placeholder = _props$placeholder === undefined ? "Search..." : _props$placeholder,
          searchValue = _props.searchValue,
          isLoading = _props.isLoading,
          _onChange = _props.onChange,
          _onFocus = _props.onFocus;

      return _react2.default.createElement(
        "div",
        { className: "" + _WFCss2.default.wrapper.search },
        isLoading ? _react2.default.createElement(_WFLoader2.default, { color: "#2196F3" }) : _react2.default.createElement(_WFIcon.WFIcon, { icon: "search2" }),
        _react2.default.createElement("input", {
          type: "text",
          readOnly: disabled,
          className: "wf-input-text " + (disabled ? _WFCss2.default.disabled : ""),
          placeholder: placeholder,
          onChange: function onChange(e) {
            return _onChange(e);
          },
          onFocus: function onFocus() {
            return _onFocus();
          },
          value: !disabled ? searchValue : ""
        })
      );
    }
  }]);
  return SearchInput;
}(_react.Component);

// ------------------- //


exports.default = SearchInput;
// ------------------- //

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _WFieldHelper = __webpack_require__(40);

var _WFieldHelper2 = _interopRequireDefault(_WFieldHelper);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

var _WFormStyleHelper = __webpack_require__(114);

var _WFormStyleHelper2 = _interopRequireDefault(_WFormStyleHelper);

var _WFSelect = __webpack_require__(45);

var _WFSelect2 = _interopRequireDefault(_WFSelect);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFScrollBars = __webpack_require__(39);

var _WFScrollBars2 = _interopRequireDefault(_WFScrollBars);

var _WFCellImg = __webpack_require__(83);

var _WFCellImg2 = _interopRequireDefault(_WFCellImg);

var _WFCellState = __webpack_require__(84);

var _WFCellState2 = _interopRequireDefault(_WFCellState);

var _WFCellIcon = __webpack_require__(82);

var _WFCellIcon2 = _interopRequireDefault(_WFCellIcon);

var _WFCellColor = __webpack_require__(80);

var _WFCellColor2 = _interopRequireDefault(_WFCellColor);

var _WFCellContent = __webpack_require__(81);

var _WFCellContent2 = _interopRequireDefault(_WFCellContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SELECT IMAGE ------------------- //
// ------------------- //

var WFSelect2Image = function (_Component) {
  (0, _inherits3.default)(WFSelect2Image, _Component);

  function WFSelect2Image(props) {
    (0, _classCallCheck3.default)(this, WFSelect2Image);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFSelect2Image.__proto__ || (0, _getPrototypeOf2.default)(WFSelect2Image)).call(this, props));

    _this.state = {
      sampleData: []
    };
    return _this;
  }

  (0, _createClass3.default)(WFSelect2Image, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          _props$styles = _props.styles,
          styles = _props$styles === undefined ? {} : _props$styles;
      var _styles$optionLabel = styles.optionLabel,
          optionLabel = _styles$optionLabel === undefined ? {} : _styles$optionLabel,
          _styles$optionLegend = styles.optionLegend,
          optionLegend = _styles$optionLegend === undefined ? {} : _styles$optionLegend;

      var _WFormStyleHelper$get = _WFormStyleHelper2.default.getOptionStyle(this),
          imageStyle = _WFormStyleHelper$get.imageStyle,
          optionStyle = _WFormStyleHelper$get.optionStyle,
          optionWidth = _WFormStyleHelper$get.optionWidth,
          scrollBarHeight = _WFormStyleHelper$get.scrollBarHeight;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        refId: name,
        didMount: function didMount(wrapper) {
          _WFieldHelper2.default.setSample(_this2, "selectImage");
        }
        //willUnmount={(wrapper) => {}}
        , view: function view(wrapper) {
          return _react2.default.createElement(
            'wf-select-image',
            null,
            _react2.default.createElement(
              _WFScrollBars2.default
              //autoHeight
              ,
              { ref: function ref(c) {
                  return wrapper.scrollbar = c;
                },
                autoHide: false,
                className: 'wf--scrollbar',
                style: { width: "100%", height: parseInt(scrollBarHeight) + 60 },
                renderTrackHorizontal: function renderTrackHorizontal(props) {
                  return _react2.default.createElement('div', (0, _extends3.default)({}, props, { className: 'track-horizontal' }));
                },
                renderThumbHorizontal: function renderThumbHorizontal(props) {
                  return _react2.default.createElement('div', (0, _extends3.default)({}, props, { className: 'thumb-horizontal' }));
                },
                renderTrackVertical: function renderTrackVertical(props) {
                  return _react2.default.createElement('div', (0, _extends3.default)({}, props, { className: 'track-vertical' }));
                },
                renderThumbVertical: function renderThumbVertical(props) {
                  return _react2.default.createElement('div', (0, _extends3.default)({}, props, { className: 'thumb-vertical' }));
                }
              },
              _WFSelect2.default.getOptions(_this2).map(function (option, i) {
                var _WFValue$getValues = _WFValue2.default.getValues(option),
                    _WFValue$getValues$id = _WFValue$getValues.id,
                    id = _WFValue$getValues$id === undefined ? null : _WFValue$getValues$id,
                    _WFValue$getValues$la = _WFValue$getValues.label,
                    label = _WFValue$getValues$la === undefined ? "" : _WFValue$getValues$la,
                    _WFValue$getValues$le = _WFValue$getValues.legend,
                    legend = _WFValue$getValues$le === undefined ? "" : _WFValue$getValues$le,
                    _WFValue$getValues$im = _WFValue$getValues.image,
                    image = _WFValue$getValues$im === undefined ? "" : _WFValue$getValues$im,
                    _WFValue$getValues$ic = _WFValue$getValues.icon,
                    icon = _WFValue$getValues$ic === undefined ? "" : _WFValue$getValues$ic,
                    _WFValue$getValues$co = _WFValue$getValues.color,
                    color = _WFValue$getValues$co === undefined ? "" : _WFValue$getValues$co;

                if (id === null) {
                  return false;
                } else {
                  var isSelected = _WFSelect2.default.has(_this2, id);
                  var className = 'wf-option ' + (isSelected ? "wf-selected" : '');
                  return _react2.default.createElement(
                    'div',
                    {
                      key: i,
                      className: className,
                      onClick: function onClick() {
                        return _WFSelect2.default.onSelect(_this2, id);
                      },
                      style: {
                        width: optionWidth,
                        height: scrollBarHeight
                      } },
                    _react2.default.createElement(_WFCellState2.default, { checked: isSelected }),
                    _react2.default.createElement(_WFCellImg2.default, { image: image, style: imageStyle }),
                    _react2.default.createElement(_WFCellContent2.default, { label: label, legend: legend, styles: styles })
                  );
                }
              })
            )
          );
        }
      }));
    }
  }]);
  return WFSelect2Image;
}(_react.Component);

// ------------------- //


exports.default = WFSelect2Image;
// ------------------- //

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _WFieldHelper = __webpack_require__(40);

var _WFieldHelper2 = _interopRequireDefault(_WFieldHelper);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

var _WFSelect = __webpack_require__(45);

var _WFSelect2 = _interopRequireDefault(_WFSelect);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

var _WFScrollBars = __webpack_require__(39);

var _WFScrollBars2 = _interopRequireDefault(_WFScrollBars);

var _WFCellImg = __webpack_require__(83);

var _WFCellImg2 = _interopRequireDefault(_WFCellImg);

var _WFCellState = __webpack_require__(84);

var _WFCellState2 = _interopRequireDefault(_WFCellState);

var _WFCellIcon = __webpack_require__(82);

var _WFCellIcon2 = _interopRequireDefault(_WFCellIcon);

var _WFCellColor = __webpack_require__(80);

var _WFCellColor2 = _interopRequireDefault(_WFCellColor);

var _WFCellContent = __webpack_require__(81);

var _WFCellContent2 = _interopRequireDefault(_WFCellContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SELECT LINE ------------------- //
// ------------------- //

var WFSelect2Line = function (_Component) {
  (0, _inherits3.default)(WFSelect2Line, _Component);

  function WFSelect2Line(props) {
    (0, _classCallCheck3.default)(this, WFSelect2Line);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFSelect2Line.__proto__ || (0, _getPrototypeOf2.default)(WFSelect2Line)).call(this, props));

    _this.state = {
      sampleData: []
    };
    return _this;
  }

  (0, _createClass3.default)(WFSelect2Line, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$styles = this.props.styles,
          styles = _props$styles === undefined ? {} : _props$styles;
      var _styles$optionLabel = styles.optionLabel,
          optionLabel = _styles$optionLabel === undefined ? {} : _styles$optionLabel,
          _styles$optionLegend = styles.optionLegend,
          optionLegend = _styles$optionLegend === undefined ? {} : _styles$optionLegend;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        didMount: function didMount() {
          _WFieldHelper2.default.setSample(_this2, "selectLine");
        },
        view: function view(input) {
          return _react2.default.createElement(
            'wf-select-line',
            null,
            _WFSelect2.default.getOptions(_this2).map(function (option, i) {
              var _WFValue$getValues = _WFValue2.default.getValues(option),
                  _WFValue$getValues$id = _WFValue$getValues.id,
                  id = _WFValue$getValues$id === undefined ? null : _WFValue$getValues$id,
                  _WFValue$getValues$la = _WFValue$getValues.label,
                  label = _WFValue$getValues$la === undefined ? "" : _WFValue$getValues$la,
                  _WFValue$getValues$le = _WFValue$getValues.legend,
                  legend = _WFValue$getValues$le === undefined ? "" : _WFValue$getValues$le,
                  _WFValue$getValues$im = _WFValue$getValues.image,
                  image = _WFValue$getValues$im === undefined ? "" : _WFValue$getValues$im,
                  _WFValue$getValues$ic = _WFValue$getValues.icon,
                  icon = _WFValue$getValues$ic === undefined ? "" : _WFValue$getValues$ic,
                  _WFValue$getValues$co = _WFValue$getValues.color,
                  color = _WFValue$getValues$co === undefined ? "" : _WFValue$getValues$co;

              if (id === null) {
                return false;
              } else {
                var isSelected = _WFSelect2.default.has(_this2, id);
                var className = 'wf-option ' + (isSelected ? "wf-selected" : '');
                return _react2.default.createElement(
                  'div',
                  {
                    key: i,
                    className: className,
                    onClick: function onClick() {
                      return _WFSelect2.default.onSelect(_this2, id);
                    }
                  },
                  _react2.default.createElement(_WFCellImg2.default, { image: image }),
                  _react2.default.createElement(_WFCellIcon2.default, { image: icon }),
                  _react2.default.createElement(_WFCellColor2.default, { color: color }),
                  _react2.default.createElement(_WFCellColor2.default, { image: color }),
                  _react2.default.createElement(_WFCellContent2.default, { label: label, legend: legend, styles: styles }),
                  _react2.default.createElement(_WFCellState2.default, { checked: isSelected })
                );
              }
            })
          );
        }
      }));
    }
  }]);
  return WFSelect2Line;
}(_react.Component);

// ------------------- //


exports.default = WFSelect2Line;
// ------------------- //

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _WFieldHelper = __webpack_require__(40);

var _WFieldHelper2 = _interopRequireDefault(_WFieldHelper);

var _WFSelect = __webpack_require__(45);

var _WFSelect2 = _interopRequireDefault(_WFSelect);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SELECT NUMBER ------------------- //
// ------------------- //

var WFSelect2Number = function (_Component) {
  (0, _inherits3.default)(WFSelect2Number, _Component);

  function WFSelect2Number(props) {
    (0, _classCallCheck3.default)(this, WFSelect2Number);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFSelect2Number.__proto__ || (0, _getPrototypeOf2.default)(WFSelect2Number)).call(this, props));

    _this.state = {
      sampleData: []
    };
    return _this;
  }

  (0, _createClass3.default)(WFSelect2Number, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$styles = this.props.styles,
          styles = _props$styles === undefined ? {} : _props$styles;
      var _styles$optionLabel = styles.optionLabel,
          optionLabel = _styles$optionLabel === undefined ? {} : _styles$optionLabel,
          _styles$optionLegend = styles.optionLegend,
          optionLegend = _styles$optionLegend === undefined ? {} : _styles$optionLegend;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        didMount: function didMount() {
          _WFieldHelper2.default.setSample(_this2, "selectBubble");
        },
        view: function view(input) {
          return _react2.default.createElement(
            'wf-select-number',
            null,
            _WFSelect2.default.getOptions(_this2).map(function (option, i) {
              var _option$id = option.id,
                  id = _option$id === undefined ? null : _option$id,
                  _option$label = option.label,
                  label = _option$label === undefined ? "" : _option$label;

              if (id === null) {
                return false;
              } else {
                var isSelected = _WFSelect2.default.has(_this2, id);
                var className = 'wf-option ' + (isSelected ? "wf-selected" : '');
                return _react2.default.createElement(
                  'span',
                  {
                    key: i,
                    className: className,
                    onClick: function onClick() {
                      return _WFSelect2.default.onSelect(_this2, id);
                    },
                    style: {
                      color: optionLabel.color,
                      borderColor: optionLabel.color
                    }
                  },
                  label
                );
              }
            })
          );
        }
      }));
    }
  }]);
  return WFSelect2Number;
}(_react.Component);

// ------------------- //


exports.default = WFSelect2Number;
// ------------------- //

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(8);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _WFieldHelper = __webpack_require__(40);

var _WFieldHelper2 = _interopRequireDefault(_WFieldHelper);

var _WFSelect = __webpack_require__(45);

var _WFSelect2 = _interopRequireDefault(_WFSelect);

var _WFInputComponent = __webpack_require__(14);

var _WFInputComponent2 = _interopRequireDefault(_WFInputComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SELECT WORD ------------------- // 
// ------------------- //

var WFSelect2Word = function (_Component) {
  (0, _inherits3.default)(WFSelect2Word, _Component);

  function WFSelect2Word(props) {
    (0, _classCallCheck3.default)(this, WFSelect2Word);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFSelect2Word.__proto__ || (0, _getPrototypeOf2.default)(WFSelect2Word)).call(this, props));

    _this.state = {
      sampleData: []
    };
    return _this;
  }

  (0, _createClass3.default)(WFSelect2Word, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$styles = this.props.styles,
          styles = _props$styles === undefined ? {} : _props$styles;
      var _styles$optionLabel = styles.optionLabel,
          optionLabel = _styles$optionLabel === undefined ? {} : _styles$optionLabel,
          _styles$optionLegend = styles.optionLegend,
          optionLegend = _styles$optionLegend === undefined ? {} : _styles$optionLegend;

      return _react2.default.createElement(_WFInputComponent2.default, (0, _extends3.default)({}, this.props, {
        didMount: function didMount() {
          _WFieldHelper2.default.setSample(_this2, "selectWord");
        },
        view: function view(input) {
          return _react2.default.createElement(
            'wf-select-word',
            null,
            _WFSelect2.default.getOptions(_this2).map(function (option, i) {
              var _option$id = option.id,
                  id = _option$id === undefined ? null : _option$id,
                  _option$label = option.label,
                  label = _option$label === undefined ? "" : _option$label;

              if (id === null) {
                return false;
              } else {
                var isSelected = _WFSelect2.default.has(_this2, id);
                var className = 'wf-option ' + (isSelected ? "wf-selected" : '');
                return _react2.default.createElement(
                  'span',
                  {
                    key: i,
                    className: className,
                    onClick: function onClick() {
                      return _WFSelect2.default.onSelect(_this2, id);
                    },
                    style: {
                      color: optionLabel.color,
                      borderColor: optionLabel.color
                    }
                  },
                  label
                );
              }
            })
          );
        }
      }));
    }
  }]);
  return WFSelect2Word;
}(_react.Component);

// ------------------- //


exports.default = WFSelect2Word;
// ------------------- //

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFString = __webpack_require__(48);

var _WFString2 = _interopRequireDefault(_WFString);

var _WFNumber = __webpack_require__(60);

var _WFNumber2 = _interopRequireDefault(_WFNumber);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _JSON = __webpack_require__(21);

var _Lodash = __webpack_require__(6);

var _Constants = __webpack_require__(70);

var _WFConstants = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF BAOBAB MONKEY ------------------- // 
// ------------------- //

var WFBaobabMonkey = function () {
  /**
   * Constructor
   * @param name is GroupName (the parent fieldName)
   * @param children collection of monkey field
   * @param formView instance of WFormView
   */
  function WFBaobabMonkey(name, children, formView) {
    (0, _classCallCheck3.default)(this, WFBaobabMonkey);

    this.name = name;
    this.id = new _WFNumber2.default();
    this.map = {};
    this.history = {};
    // init children
    WFBaobabMonkey.init(this, children, formView);
  }

  /**
   * Observe formView's event values change to update monkey
   * @param formView instance of WFormView
   */


  (0, _createClass3.default)(WFBaobabMonkey, [{
    key: "observe",
    value: function observe(formView) {
      var _this = this;

      formView.sub(_WFConstants.WF_VALUES_CHANGE, function (nextValues) {
        // if baobab select is visible apply change
        if (formView.hasCurrentField(_this.name)) {
          _this.change(formView, nextValues);
        }
      });
    }

    /**
     * Update monkey 
     * @param formView
     * @param values
     */

  }, {
    key: "change",
    value: function change(formView, values) {
      var _this2 = this;

      var id = WFBaobabMonkey.getValue(values, this.name);
      if (this.id.get() !== id) {
        this.refreshChildren(formView, id);
      } else {
        var children = (0, _keys2.default)(this.map);

        var _loop = function _loop(i) {
          var fieldName = children[i];
          var prevId = _this2.history[fieldName];
          var nextId = WFBaobabMonkey.getValue(values, fieldName);
          _this2.history[fieldName] = nextId;
          if (prevId !== nextId || prevId !== 0 && nextId === 0) {
            if (fieldName === _this2.name) {
              _this2.refreshChildren(formView, nextId);
            } else {
              _this2.map[fieldName].map(function (fldName) {
                _this2.refreshChild(fieldName, fldName, formView, nextId);
              });
            }
            return "break";
          }
        };

        for (var i = 0; i < children.length; i++) {
          var _ret = _loop(i);

          if (_ret === "break") break;
        }
      }
    }

    /**
     * Update all children
     */

  }, {
    key: "refreshChildren",
    value: function refreshChildren(formView, optionId) {
      var _this3 = this;

      var hasOption = optionId !== 0;
      this.id.set(optionId);
      (0, _keys2.default)(this.map).map(function (fldName) {
        var fld = formView.getField(fldName);
        if (fld) {
          var _fld$getSchema = fld.getSchema(),
              _fld$getSchema$monkey = _fld$getSchema.monkeyBranch,
              monkeyBranch = _fld$getSchema$monkey === undefined ? null : _fld$getSchema$monkey,
              _fld$getSchema$monkey2 = _fld$getSchema.monkeyObserve,
              monkeyObserve = _fld$getSchema$monkey2 === undefined ? null : _fld$getSchema$monkey2;

          fld.clearValue();
          var input = fld.getInputMgr();
          var baobabOptMgr = input.baobabOptMgr;
          input.setData([]);
          _this3.history[fldName] = 0;
          if (monkeyObserve === _this3.name && hasOption) {
            input.setState({ disabled: false });
            baobabOptMgr.optionQueryMgr.clearFilters();
            baobabOptMgr.optionQueryMgr.clearReqFilters();
            baobabOptMgr.optionQueryMgr.setFilter(_Constants.WF_BAOBAB_OPTIONGROUP_ID, optionId, true);
            if (monkeyBranch) {
              baobabOptMgr.optionQueryMgr.setFilter(_Constants.WF_BAOBAB_PARENT_ID, monkeyBranch, true);
            }
          } else {
            input.setState({
              disabled: true
            });
          }
        }
      });
    }

    /**
     * Update child 
     */

  }, {
    key: "refreshChild",
    value: function refreshChild(fieldName, fldName, formView, optionId) {
      var _this4 = this;

      var fld = formView.getField(fldName);
      var hasOption = optionId !== 0;
      if (fld) {
        var _fld$getSchema2 = fld.getSchema(),
            _fld$getSchema2$monke = _fld$getSchema2.monkeyBranch,
            monkeyBranch = _fld$getSchema2$monke === undefined ? null : _fld$getSchema2$monke,
            _fld$getSchema2$monke2 = _fld$getSchema2.monkeyObserve,
            monkeyObserve = _fld$getSchema2$monke2 === undefined ? null : _fld$getSchema2$monke2;

        var input = fld.getInputMgr();
        var baobabOptMgr = input.baobabOptMgr;
        input.setData([]);
        this.history[fldName] = 0;
        if (monkeyObserve === fieldName) {
          if (hasOption) {
            input.setState({ disabled: false });
            baobabOptMgr.optionQueryMgr.clearFilters();
            baobabOptMgr.optionQueryMgr.clearReqFilters();
            baobabOptMgr.optionQueryMgr.setFilter(_Constants.WF_BAOBAB_OPTIONGROUP_ID, optionId, true);
            if (monkeyBranch) {
              baobabOptMgr.optionQueryMgr.setFilter(_Constants.WF_BAOBAB_PARENT_ID, monkeyBranch, true);
            }
          } else {
            fld.clearValue();
            input.setState({
              disabled: true
            });
            this.map[fldName].map(function (fName) {
              _this4.refreshChild(fldName, fName, formView, 0);
            });
          }
        }
      }
    }

    /**
     * Search baobab fields and monkey field to create new WFBaobabMonkey
     * @param name is fieldName
     */

  }], [{
    key: "create",
    value: function create(formView) {
      var schema = formView.getFormState().getAllFieldSelect();
      schema.map(function (fieldSchema) {
        var name = fieldSchema.name,
            _fieldSchema$isBaobab = fieldSchema.isBaobab,
            isBaobab = _fieldSchema$isBaobab === undefined ? false : _fieldSchema$isBaobab;

        if (isBaobab) {
          var children = schema.filter(function (child) {
            var _child$isMonkey = child.isMonkey,
                isMonkey = _child$isMonkey === undefined ? false : _child$isMonkey,
                _child$monkeyGroup = child.monkeyGroup,
                monkeyGroup = _child$monkeyGroup === undefined ? null : _child$monkeyGroup;

            return isMonkey && monkeyGroup === name;
          });
          if (children.length > 0) {
            formView.fieldsMonkey[name] = new WFBaobabMonkey(name, children, formView);
          }
        }
      });
    }

    /**
     * Init 
     */

  }, {
    key: "init",
    value: function init(monkey, children, formView) {

      //console.warn("MONKEY INIT")
      //console.dir(children)

      children.map(function (_ref) {
        var name = _ref.name;

        monkey.history[name] = 0;
        monkey.map[name] = children.filter(function (child) {
          var monkeyObserve = child.monkeyObserve;

          return monkeyObserve === name;
        }).map(function (child) {
          return child.name;
        });
      });
      monkey.observe(formView);
    }

    /**
     * Extract value of field type select2
     * @param values is formState values
     * @param name is fieldName
     */

  }, {
    key: "getValue",
    value: function getValue(values, name) {
      var value = 0;
      if (values.hasOwnProperty(name)) {
        value = values[name];
        if ((0, _Lodash.isString)(value)) {
          value = (0, _JSON.parse)(value);
          if ((0, _Lodash.isObject)(value)) {
            var keys = (0, _keys2.default)(value);
            if (keys.length > 0) {
              value = parseInt(keys[0]);
              return value;
            } else {
              value = 0;
              return value;
            }
          } else return value;
        } else return value;
      } else return value;
    }
  }]);
  return WFBaobabMonkey;
}();

// ------------------- //


exports.default = WFBaobabMonkey;
// ------------------- //

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFUrl = __webpack_require__(41);

var _WFUrl2 = _interopRequireDefault(_WFUrl);

var _WFClient = __webpack_require__(58);

var _WFClient2 = _interopRequireDefault(_WFClient);

var _WFResponse = __webpack_require__(46);

var _WFResponse2 = _interopRequireDefault(_WFResponse);

var _WFQueryParams = __webpack_require__(116);

var _WFQueryParams2 = _interopRequireDefault(_WFQueryParams);

var _WFString = __webpack_require__(48);

var _WFString2 = _interopRequireDefault(_WFString);

var _WFNumber = __webpack_require__(60);

var _WFNumber2 = _interopRequireDefault(_WFNumber);

var _WFBoolean = __webpack_require__(88);

var _WFBoolean2 = _interopRequireDefault(_WFBoolean);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _WFBaobabOptionView = __webpack_require__(204);

var _WFBaobabOptionView2 = _interopRequireDefault(_WFBaobabOptionView);

var _Lodash = __webpack_require__(6);

var _Constants = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF BAOBAB OPTION ------------------- //
// ------------------- //
var WFBaobabOption = function () {
  /**
   * Constructor
   * @param config is object contain optionConfig
   */
  function WFBaobabOption() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Constants.WF_BAOBAB_OPTION;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var observer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var initConfig = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck3.default)(this, WFBaobabOption);
    var _config$id = config.id,
        id = _config$id === undefined ? 0 : _config$id,
        _config$name = config.name,
        name = _config$name === undefined ? "" : _config$name,
        _config$label = config.label,
        label = _config$label === undefined ? "" : _config$label,
        _config$entryId = config.entryId,
        entryId = _config$entryId === undefined ? 0 : _config$entryId,
        _config$wf_optiongrou = config.wf_optiongroup_id,
        wf_optiongroup_id = _config$wf_optiongrou === undefined ? null : _config$wf_optiongrou,
        _config$parent_id = config.parent_id,
        parent_id = _config$parent_id === undefined ? null : _config$parent_id,
        _config$options_count = config.options_count,
        options_count = _config$options_count === undefined ? 0 : _config$options_count,
        _config$subgroups_cou = config.subgroups_count,
        subgroups_count = _config$subgroups_cou === undefined ? 0 : _config$subgroups_cou,
        _config$is_private = config.is_private,
        is_private = _config$is_private === undefined ? false : _config$is_private;
    // Hook with component or class
    // callbacks {change, ready}

    this.observer = observer;
    // Props
    this.name = name;
    this.type = type;
    this.label = label;
    this.id = new _WFNumber2.default({ value: entryId ? entryId : id });
    this.wf_optiongroup_id = new _WFNumber2.default({ value: wf_optiongroup_id });
    this.parent_id = new _WFNumber2.default({ value: parent_id });
    this.options_count = new _WFNumber2.default({ value: options_count });
    this.subgroups_count = new _WFNumber2.default({ value: subgroups_count });
    this.is_private = new _WFBoolean2.default({ value: is_private });
    // Collection
    this.branchMgr = new _WFArray2.default({
      isCollection: true,
      findBy: 'name'
    });
    this.optionMgr = new _WFArray2.default({
      isCollection: true,
      findBy: 'name'
    });
    // Manager
    this.optionQueryMgr = new _WFQueryParams2.default();
    this.branchQueryMgr = new _WFQueryParams2.default();
    // Component
    this.viewMgr = new _WFBaobabOptionView2.default(this);
    // Manager Config
    this.initConfig = initConfig;
    this.init();
  }

  /**
   * Get EntryId
   */


  (0, _createClass3.default)(WFBaobabOption, [{
    key: "getId",
    value: function getId() {
      return this.id.get();
    }

    /**
     * Set EntryId
     */

  }, {
    key: "setId",
    value: function setId(id) {
      return this.id.set(id);
    }

    /**
     * Get Name
     */

  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }

    /**
     * Get Label
     */

  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.label;
    }

    /**
     * Get View Manager
     */

  }, {
    key: "getViewMgr",
    value: function getViewMgr() {
      return this.viewMgr;
    }

    /**
     * Get Query Manager
     */

  }, {
    key: "getOptionQueryMgr",
    value: function getOptionQueryMgr() {
      return this.optionQueryMgr;
    }

    /**
     * Get Query Manager
     */

  }, {
    key: "getBranchQueryMgr",
    value: function getBranchQueryMgr() {
      return this.branchQueryMgr;
    }

    /**
     * Get Branch Manager
     */

  }, {
    key: "getBranchMgr",
    value: function getBranchMgr() {
      return this.branchMgr;
    }

    /**
     * Get Option Manager
     */

  }, {
    key: "getOptionMgr",
    value: function getOptionMgr() {
      return this.optionMgr;
    }

    /**
     * Notify when state change
     */

  }, {
    key: "change",
    value: function change() {
      if (this.observer && this.observer.hasOwnProperty("change") && (0, _Lodash.isFunction)(this.observer.change)) {
        this.observer.change(this);
      }
    }

    /**
     * Notify when state is ready
     * @return new state
     */

  }, {
    key: "ready",
    value: function ready() {
      if (this.getViewMgr().isInit) {
        var schema = this.getSchema();
        this.getViewMgr().setState(schema);
      }
      if (this.observer && this.observer.hasOwnProperty("ready") && (0, _Lodash.isFunction)(this.observer.ready)) {
        this.observer.ready(this);
      }
    }

    /**
     * Find options
     */

  }, {
    key: "find",
    value: function find() {
      var _this = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _args$treeFindAll = args.treeFindAll,
          treeFindAll = _args$treeFindAll === undefined ? true : _args$treeFindAll;

      switch (this.type) {
        case _Constants.WF_BAOBAB_TREE:
          if (treeFindAll) {
            this.findBranch({}, function () {
              return _this.findOption(args, next);
            });
          } else {
            this.findBranch({}, next);
          }
          break;
        case _Constants.WF_BAOBAB_BRANCH:
          this.findOption(args, next);
          break;
        case _Constants.WF_BAOBAB_OPTION:
          this.findOption(args, next);
          break;
      }
    }

    /**
     * Search options
     * @param config is object contain optionConfig
     */

  }, {
    key: "search",
    value: function search() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var searchStartAt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var l = value.length;
      if (l === 0) {
        this.getOptionQueryMgr().clearFilters();
        this.find({}, next);
      } else if (l > searchStartAt) {
        this.getOptionQueryMgr().setPage(1);
        this.getOptionQueryMgr().setFilter('name', value);
        this.find({}, next);
      }
    }

    /**
     * Get Schema
     * @return config
     */

  }, {
    key: "getSchema",
    value: function getSchema() {
      var branches = this.branchMgr.getValue();
      var options = this.optionMgr.getValue();
      return {
        id: this.getId(),
        name: this.getName(),
        label: this.getLabel(),
        wf_optiongroup_id: this.wf_optiongroup_id.get(),
        parent_id: this.parent_id.get(),
        options_count: this.options_count.get(),
        subgroups_count: this.subgroups_count.get(),
        is_private: this.is_private.get(),
        branchPager: this.getBranchQueryMgr().getPagination(),
        optionPager: this.getOptionQueryMgr().getPagination(),
        branches: branches,
        options: options,
        branchesId: branches.map(function (b) {
          return parseInt(b.id);
        }),
        optionsId: options.map(function (o) {
          return parseInt(o.id);
        })
      };
    }

    /**
     * Find this branches
     * @param config is object contain optionConfig
     */

  }, {
    key: "findBranch",
    value: function findBranch() {
      var _this2 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.change();
      WFBaobabOption.dbFind(this.getBranchQueryMgr(), {
        onSuccess: function onSuccess(wfRes) {
          var _wfRes$getResultset = wfRes.getResultset(),
              _wfRes$getResultset$r = _wfRes$getResultset.rows,
              rows = _wfRes$getResultset$r === undefined ? [] : _wfRes$getResultset$r,
              _wfRes$getResultset$c = _wfRes$getResultset.count,
              count = _wfRes$getResultset$c === undefined ? 0 : _wfRes$getResultset$c;

          _this2.getBranchMgr().set(rows);
          _this2.ready();
          if ((0, _Lodash.isFunction)(next)) {
            next();
          }
        },
        onError: function onError(err) {
          console.error("FIND_BRANCH ERROR");
          console.error(err);
        }
      });
    }

    /**
     * Find this options
     * @param config is object contain optionConfig
     */

  }, {
    key: "findOption",
    value: function findOption() {
      var _this3 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _args$page = args.page,
          page = _args$page === undefined ? null : _args$page;

      if (page) {
        this.getOptionQueryMgr().setPage(page);
      }
      this.change();
      WFBaobabOption.dbFind(this.optionQueryMgr, {
        onSuccess: function onSuccess(wfRes) {
          var _wfRes$getResultset2 = wfRes.getResultset(),
              _wfRes$getResultset2$ = _wfRes$getResultset2.rows,
              rows = _wfRes$getResultset2$ === undefined ? [] : _wfRes$getResultset2$,
              _wfRes$getResultset2$2 = _wfRes$getResultset2.count,
              count = _wfRes$getResultset2$2 === undefined ? 0 : _wfRes$getResultset2$2;

          _this3.getOptionMgr().set(rows);
          _this3.getOptionQueryMgr().refresh(rows.length, count);
          _this3.ready();
          if ((0, _Lodash.isFunction)(next)) {
            next();
          }
        },
        onError: function onError(err) {
          console.error("FIND_OPTION ERROR");
          console.error(err);
        }
      });
    }

    /**
     * Set callback
     */

  }, {
    key: "setObserver",
    value: function setObserver(actions) {
      this.observer = actions;
    }

    /**
     * Set this props
     * @param config is optionConfig
     */

  }, {
    key: "setProps",
    value: function setProps(config) {
      var _config$label2 = config.label,
          label = _config$label2 === undefined ? "" : _config$label2,
          _config$entryId2 = config.entryId,
          entryId = _config$entryId2 === undefined ? 0 : _config$entryId2,
          _config$wf_optiongrou2 = config.wf_optiongroup_id,
          wf_optiongroup_id = _config$wf_optiongrou2 === undefined ? null : _config$wf_optiongrou2,
          _config$parent_id2 = config.parent_id,
          parent_id = _config$parent_id2 === undefined ? null : _config$parent_id2,
          _config$options_count2 = config.options_count,
          options_count = _config$options_count2 === undefined ? 0 : _config$options_count2,
          _config$subgroups_cou2 = config.subgroups_count,
          subgroups_count = _config$subgroups_cou2 === undefined ? 0 : _config$subgroups_cou2,
          _config$is_private2 = config.is_private,
          is_private = _config$is_private2 === undefined ? false : _config$is_private2;

      this.label = label;
      this.wf_optiongroup_id.set(wf_optiongroup_id);
      this.parent_id.set(parent_id);
      this.options_count.set(options_count);
      this.subgroups_count.set(subgroups_count);
      this.is_private.set(is_private);
    }

    /**
     * Init option
     * Config the QueryManager(s) by option's type
     */

  }, {
    key: "init",
    value: function init() {
      var clearReqFilters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _initConfig = this.initConfig,
          _initConfig$treeLimit = _initConfig.treeLimitBranch,
          treeLimitBranch = _initConfig$treeLimit === undefined ? 100 : _initConfig$treeLimit,
          _initConfig$treeLimit2 = _initConfig.treeLimitOption,
          treeLimitOption = _initConfig$treeLimit2 === undefined ? 50 : _initConfig$treeLimit2,
          _initConfig$branchLim = _initConfig.branchLimitOption,
          branchLimitOption = _initConfig$branchLim === undefined ? 50 : _initConfig$branchLim,
          _initConfig$optionLim = _initConfig.optionLimitOption,
          optionLimitOption = _initConfig$optionLim === undefined ? 50 : _initConfig$optionLim;


      if (clearReqFilters) {
        this.branchQueryMgr.clearReqFilters();
        this.optionQueryMgr.clearReqFilters();
      }

      switch (this.type) {
        case _Constants.WF_BAOBAB_TREE:
          // Manager Config
          this.branchQueryMgr.setLimit(treeLimitBranch);
          this.branchQueryMgr.setFilter(_Constants.WF_BAOBAB_PARENT_ID, this.id.get(), true);
          this.optionQueryMgr.setLimit(treeLimitOption);
          this.optionQueryMgr.setFilter(_Constants.WF_BAOBAB_OPTIONGROUP_ID, this.id.get(), true);
          break;
        case _Constants.WF_BAOBAB_BRANCH:
          // Manager Config
          this.branchQueryMgr.setLimit(treeLimitBranch);
          this.branchQueryMgr.setFilter(_Constants.WF_BAOBAB_PARENT_ID, this.parent_id.get(), true);
          this.optionQueryMgr.setLimit(branchLimitOption);
          this.optionQueryMgr.setFilter(_Constants.WF_BAOBAB_PARENT_ID, this.id.get(), true);
          break;
        case _Constants.WF_BAOBAB_OPTION:
          // Manager Config
          this.optionQueryMgr.setLimit(optionLimitOption);
          this.optionQueryMgr.setFilter(_Constants.WF_BAOBAB_OPTIONGROUP_ID, this.id.get(), true);
          break;
      }
    }

    /**
     * Find this branches or  options
     * @param queryMgr
     * @param next callback {onError, onSuccess}
     * @param isAdmin boolean
     */

  }], [{
    key: "dbFind",
    value: function dbFind(queryMgr) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var isAdmin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var urlArgs = {
        apiBaseUrl: _WFUrl2.default.getBaseUrl(),
        formName: _Constants.WF_OPTION,
        isAppAdmin: isAdmin,
        query: queryMgr.get()
      };
      _WFClient2.default.find(urlArgs).then(function (res) {
        var wfRes = _WFResponse2.default.getFindResponse(res);
        if (wfRes.getHasLogicErrors()) {
          next.onError(wfRes.getLogicErrors());
        } else {
          next.onSuccess(wfRes);
        }
      }).catch(function (error) {
        console.dir(error);
      });
    }
  }]);
  return WFBaobabOption;
}();

// ------------------- //


exports.default = WFBaobabOption;
// ------------------- //

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF BAOBAB OPTION ------------------- //
// ------------------- //
var WFBaobabOptionView = function () {
  function WFBaobabOptionView(option) {
    (0, _classCallCheck3.default)(this, WFBaobabOptionView);

    this.option = option;
    this.isInit = false;
    this.component = null;
  }

  (0, _createClass3.default)(WFBaobabOptionView, [{
    key: "setState",
    value: function setState(obj) {
      if (this.isInit) {
        this.component.setState(obj);
      }
    }
  }, {
    key: "willMount",
    value: function willMount(component) {
      this.isInit = true;
      this.component = component;
      this.setState(this.option.getSchema());
    }
  }, {
    key: "willUnMount",
    value: function willUnMount() {
      this.isInit = false;
      this.component = null;
    }
  }]);
  return WFBaobabOptionView;
}();

// ------------------- //


exports.default = WFBaobabOptionView;
// ------------------- //

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var WF_PUBLISH_ENTRY_ID = 100;
var WF_SUCCESS_MESSAGE_ID = 200;
var WF_ERROR_MESSAGE_ID = 300;
var WF_MAIL_NOTIFICATION_ID = 400;
var WF_REDIRECT_ID = 500;
var WF_FILE_DOWNLOAD_ID = 600;
var WF_NEXUS_STRATEGY_ID = 700;
var WF_FORM_ANALYTICS_ID = 800;
var WF_FIELDS_ANALYTICS_ID = 801;

var WF_PUBLISH_ENTRY_NAME = "publish_entry";
var WF_SUCCESS_MESSAGE_NAME = "success_message";
var WF_ERROR_MESSAGE_NAME = "error_message";
var WF_MAIL_NOTIFICATION_NAME = "mail_notification";
var WF_REDIRECT_NAME = "redirect";
var WF_FILE_DOWNLOAD_NAME = "file_download";
var WF_NEXUS_STRATEGY_NAME = "nexus_strategy";
var WF_FORM_ANALYTICS_NAME = "form_analytics";
var WF_FIELDS_ANALYTICS_NAME = "fields_analytics";

var WF_PUBLISH_ENTRY_STR = "Publish Entry";
var WF_SUCCESS_MESSAGE_STR = "Success Message";
var WF_ERROR_MESSAGE_STR = "Error Message";
var WF_MAIL_NOTIFICATION_STR = "Mail Notification";
var WF_REDIRECT_STR = "Redirect";
var WF_FILE_DOWNLOAD_STR = "File Download";
var WF_NEXUS_STRATEGY_STR = "Nexus Strategy";
var WF_FORM_ANALYTICS_STR = "Form Analytics";
var WF_FIELDS_ANALYTICS_STR = "Fields Analytics";

var getConstants = function getConstants() {
  return {
    WF_PUBLISH_ENTRY_ID: WF_PUBLISH_ENTRY_ID,
    WF_SUCCESS_MESSAGE_ID: WF_SUCCESS_MESSAGE_ID,
    WF_ERROR_MESSAGE_ID: WF_ERROR_MESSAGE_ID,
    WF_MAIL_NOTIFICATION_ID: WF_MAIL_NOTIFICATION_ID,
    WF_REDIRECT_ID: WF_REDIRECT_ID,
    WF_FILE_DOWNLOAD_ID: WF_FILE_DOWNLOAD_ID,
    WF_NEXUS_STRATEGY_ID: WF_NEXUS_STRATEGY_ID,
    WF_FORM_ANALYTICS_ID: WF_FORM_ANALYTICS_ID,
    WF_FIELDS_ANALYTICS_ID: WF_FIELDS_ANALYTICS_ID,

    WF_PUBLISH_ENTRY_NAME: WF_PUBLISH_ENTRY_NAME,
    WF_SUCCESS_MESSAGE_NAME: WF_SUCCESS_MESSAGE_NAME,
    WF_ERROR_MESSAGE_NAME: WF_ERROR_MESSAGE_NAME,
    WF_MAIL_NOTIFICATION_NAME: WF_MAIL_NOTIFICATION_NAME,
    WF_REDIRECT_NAME: WF_REDIRECT_NAME,
    WF_FILE_DOWNLOAD_NAME: WF_FILE_DOWNLOAD_NAME,
    WF_NEXUS_STRATEGY_NAME: WF_NEXUS_STRATEGY_NAME,
    WF_FORM_ANALYTICS_NAME: WF_FORM_ANALYTICS_NAME,
    WF_FIELDS_ANALYTICS_NAME: WF_FIELDS_ANALYTICS_NAME,

    WF_PUBLISH_ENTRY_STR: WF_PUBLISH_ENTRY_STR,
    WF_SUCCESS_MESSAGE_STR: WF_SUCCESS_MESSAGE_STR,
    WF_ERROR_MESSAGE_STR: WF_ERROR_MESSAGE_STR,
    WF_MAIL_NOTIFICATION_STR: WF_MAIL_NOTIFICATION_STR,
    WF_REDIRECT_STR: WF_REDIRECT_STR,
    WF_FILE_DOWNLOAD_STR: WF_FILE_DOWNLOAD_STR,
    WF_NEXUS_STRATEGY_STR: WF_NEXUS_STRATEGY_STR,
    WF_FORM_ANALYTICS_STR: WF_FORM_ANALYTICS_STR,
    WF_FIELDS_ANALYTICS_STR: WF_FIELDS_ANALYTICS_STR
  };
};

exports.default = getConstants;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _Lodash = __webpack_require__(6);

var _WFAnalyticsClientMgr = __webpack_require__(118);

var _WFAnalyticsClientMgr2 = _interopRequireDefault(_WFAnalyticsClientMgr);

var _WFAnalyticsViewMgr = __webpack_require__(119);

var _WFAnalyticsViewMgr2 = _interopRequireDefault(_WFAnalyticsViewMgr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF_ANALYTICS MANAGER ------------------- // findFormStatsByYear

// ------------------- //

var WFAnalyticsMgr = function () {
  function WFAnalyticsMgr() {
    (0, _classCallCheck3.default)(this, WFAnalyticsMgr);
  }

  (0, _createClass3.default)(WFAnalyticsMgr, null, [{
    key: "change",


    /**
     * Change : set state by obj values
     */
    value: function change() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _WFAnalyticsViewMgr2.default.setState(obj);
    }

    /**
     * Change : set state by obj values
     */

  }, {
    key: "getState",
    value: function getState() {
      return _WFAnalyticsViewMgr2.default.getState();
    }

    /**
     * Init : 
     * @warning {moment.js} is global in the browser
     * @param args formEntryState
     */

  }, {
    key: "init",
    value: function init(formEntryState) {
      var createdTms = formEntryState.getCreatedTms();
      if (!formEntryState) {
        throw new Error('WFAnalyticsMgr init => formEntryState not defined');
      } else if (!createdTms) {
        throw new Error('WFAnalyticsMgr init => createdTms not defined');
      } else {
        var fields = formEntryState.getAllFieldSelect();
        _WFAnalyticsClientMgr2.default.setFormName(formEntryState);
        WFAnalyticsMgr.setCurrentFieldByDefault(fields);
        WFAnalyticsMgr.change({
          page_loader: false,
          fields: fields,
          startYear: (0, _WFMoment2.default)(createdTms).year(),
          startMonth: (0, _WFMoment2.default)(createdTms).month(),
          startWeek: (0, _WFMoment2.default)(createdTms).isoWeek()
        });
      }
    }

    /**
     * Restore initial state
     */

  }, {
    key: "clear",
    value: function clear() {
      _WFAnalyticsViewMgr2.default.resetState();
    }

    // FORM ANALYTICS ----------- //

    /**
     * Get current week details
     * @param res is collection of stats object result
     */

  }, {
    key: "getCurrentWeek",
    value: function getCurrentWeek() {
      var _WFAnalyticsMgr$getSt = WFAnalyticsMgr.getState(),
          currentWeek = _WFAnalyticsMgr$getSt.currentWeek;

      return currentWeek;
    }

    /**
     * Get current month details
     * @param res is collection of stats object result
     */

  }, {
    key: "getCurrentMonth",
    value: function getCurrentMonth() {
      var _WFAnalyticsMgr$getSt2 = WFAnalyticsMgr.getState(),
          currentMonth = _WFAnalyticsMgr$getSt2.currentMonth;

      return currentMonth;
    }

    /**
     * Get current year details
     * @param res is collection of stats object result
     */

  }, {
    key: "getCurrentYear",
    value: function getCurrentYear() {
      var _WFAnalyticsMgr$getSt3 = WFAnalyticsMgr.getState(),
          currentYear = _WFAnalyticsMgr$getSt3.currentYear;

      return currentYear;
    }

    /**
      * Find form stats by year groupby month
      * @param integer year
      * @param next callback {onError, onSuccess}
      */

  }, {
    key: "findFormStatsByYear",
    value: function findFormStatsByYear(year, next) {

      // // console.error("FIND YEAR")
      // // console.log({year})

      if (!(0, _Lodash.isObject)(next) || !next.hasOwnProperty('onError') || !next.hasOwnProperty('onSuccess')) {
        throw new Error('WFAnalyticsMgr findFormStatsByYear => next {onError, onSuccess} is required...');
      } else {
        if (!year) {
          throw new Error('WFAnalyticsMgr findFormStatsByYear => year is required...');
        } else {
          var onError = next.onError,
              onSuccess = next.onSuccess;

          _WFAnalyticsClientMgr2.default.findFormStatsByYear(year, function (error) {
            return onError(error);
          }, function (res) {
            WFAnalyticsMgr.change({
              currentYear: year
            });
            if (res.length === 0) {
              onSuccess();
            } else {
              WFAnalyticsMgr.setYearResult(res, next);
            }
          });
        }
      }
    }

    /**
     * Set current year details
     * set current month by default
     * @param res is collection of stats object result
     * @param next callback {onError, onSuccess}
     */

  }, {
    key: "setYearResult",
    value: function setYearResult(res) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


      // console.warn("SET YEARS")
      // console.log(res)

      if ((0, _Lodash.isArray)(res)) {
        var _WFAnalyticsMgr$getSt4 = WFAnalyticsMgr.getState(),
            endYear = _WFAnalyticsMgr$getSt4.endYear,
            endMonth = _WFAnalyticsMgr$getSt4.endMonth,
            currentYear = _WFAnalyticsMgr$getSt4.currentYear,
            currentMonth = _WFAnalyticsMgr$getSt4.currentMonth;

        var length = res.length > 0;
        var row = length > 0 ? res[0] : {};

        /*
        console.warn("SET YEAR ___ ARGS")
        console.log(`
          endMonth === currentMonth : ${endMonth === currentMonth}
          endYear === currentYear : ${endYear === currentYear}
        `)
        */

        if (length > 0 && endMonth === currentMonth && endYear === currentYear) {
          row = res[length - 1];
        }
        var _row = row,
            _row$date_month = _row.date_month,
            date_month = _row$date_month === undefined ? null : _row$date_month;

        if (date_month) {
          WFAnalyticsMgr.change({
            yearResult: res
          });
          WFAnalyticsMgr.yearToCharts(res);
          WFAnalyticsMgr.findFormStatsByYearMonth(currentYear, _WFAnalyticsClientMgr2.default.fixedMonthIndex(date_month, 'server'), // parseInt(date_month) - 1,
          next, false);
        }
      }
    }

    /**
      * Find form stats by year and month groupby week
      * @param integer year
      * @param integer month
      * @param next callback {onError, onSuccess}
      */

  }, {
    key: "findFormStatsByYearMonth",
    value: function findFormStatsByYearMonth(year, month, next) {
      var isWeekCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


      // console.error("FIND MONTH")
      // console.log({year, month, isWeekCallback})

      if (!(0, _Lodash.isObject)(next) || !next.hasOwnProperty('onError') || !next.hasOwnProperty('onSuccess')) {
        throw new Error('WFAnalyticsMgr findFormStatsByYearMonth => next {onError, onSuccess} is required...');
      } else {
        if (!year) {
          throw new Error('WFAnalyticsMgr findFormStatsByYearMonth => year is required...');
        } else if (!month) {
          throw new Error('WFAnalyticsMgr findFormStatsByYearMonth => month is required...');
        } else {
          var onError = next.onError,
              onSuccess = next.onSuccess;

          _WFAnalyticsClientMgr2.default.findFormStatsByYearMonth(year, month, // + 1,
          function (error) {
            return onError(error);
          }, function (res) {
            WFAnalyticsMgr.change({
              currentYear: year,
              currentMonth: month
            });
            WFAnalyticsMgr.setMonthResult(res, next, isWeekCallback);
          });
        }
      }
    }

    /**
     * Set current month details
     * set current week by default
     * @param res is collection of stats object result
     * @param next callback {onError, onSuccess}
     * @param isWeekCallback if method call by setWeekResult
     */

  }, {
    key: "setMonthResult",
    value: function setMonthResult(res) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var isWeekCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


      //console.warn("SET MONTH")
      //console.log({isWeekCallback, res})

      if ((0, _Lodash.isArray)(res)) {
        var _WFAnalyticsMgr$getSt5 = WFAnalyticsMgr.getState(),
            currentWeek = _WFAnalyticsMgr$getSt5.currentWeek,
            currentYear = _WFAnalyticsMgr$getSt5.currentYear,
            currentMonth = _WFAnalyticsMgr$getSt5.currentMonth;

        var length = res.length;
        WFAnalyticsMgr.monthToCharts(res);
        WFAnalyticsMgr.change({
          monthResult: res
        });

        /*
        console.warn("SET MONTH ___ ARGS")
        console.log(`
          isWeekCallback : ${isWeekCallback}
          result count : ${length}
        `)
        */

        if (!isWeekCallback && length > 0) {
          var date_week = res[length - 1].date_week;

          WFAnalyticsMgr.findFormStatsByYearWeek(currentYear, parseInt(date_week), next);
        } else {
          var onSuccess = next.onSuccess;

          if ((0, _Lodash.isFunction)(onSuccess)) {
            onSuccess();
          }
        }
      }
    }

    /**
      * Find form stats by year and week
      * @param integer year
      * @param integer week
      * @param next callback {onError, onSuccess}
      */

  }, {
    key: "findFormStatsByYearWeek",
    value: function findFormStatsByYearWeek(year, week, next) {

      // console.error("FIND WEEK")
      // console.log({year, week})

      if (!(0, _Lodash.isObject)(next) || !next.hasOwnProperty('onError') || !next.hasOwnProperty('onSuccess')) {
        throw new Error('WFAnalyticsMgr findFormStatsByYearWeek => next {onError, onSuccess} is required...');
      } else {
        if (!year) {
          throw new Error('WFAnalyticsMgr findFormStatsByYearWeek => year is required...');
        } else if (!week) {
          throw new Error('WFAnalyticsMgr findFormStatsByYearWeek => week is required...');
        } else {
          var onError = next.onError,
              onSuccess = next.onSuccess;

          _WFAnalyticsClientMgr2.default.findFormStatsByYearWeek(year, week, function (error) {
            return onError(error);
          }, function (res) {
            WFAnalyticsMgr.change({
              currentYear: year,
              currentWeek: week
            });
            WFAnalyticsMgr.setWeekResult(res, next);
          });
        }
      }
    }

    /**
     * Set current week details
     * Set current month if it !== current week's month
     * @param res is collection of stats object result
     * @param next callback {onError, onSuccess}
     */

  }, {
    key: "setWeekResult",
    value: function setWeekResult(res) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


      //console.warn("SET WEEK")
      //console.log(res)

      if ((0, _Lodash.isArray)(res)) {
        var _WFAnalyticsMgr$getSt6 = WFAnalyticsMgr.getState(),
            currentWeek = _WFAnalyticsMgr$getSt6.currentWeek,
            currentYear = _WFAnalyticsMgr$getSt6.currentYear,
            currentMonth = _WFAnalyticsMgr$getSt6.currentMonth;

        WFAnalyticsMgr.change({
          weekResult: res
        });
        WFAnalyticsMgr.weekToCharts(res);
        var month = (0, _WFMoment2.default)(currentWeek + "/" + currentYear, "W/YYYY").month();

        /*
        console.warn("SET WEEK ___ ARGS")
        console.log(`
          !== : ${currentMonth !== month}
          month : ${month}
          currentMonth : ${currentMonth}
          date : ${`${currentWeek}/${currentYear}`}
        `)
        */

        if (currentMonth !== month) {
          WFAnalyticsMgr.findFormStatsByYearMonth(currentYear, month, next, true);
        } else {
          var onSuccess = next.onSuccess;

          if ((0, _Lodash.isFunction)(onSuccess)) {
            onSuccess();
          }
        }
      }
    }

    // FIELDS ANALYTICS ----------- //


    /**
     * Get current field
     * @retun field's schema
     */

  }, {
    key: "getCurrentField",
    value: function getCurrentField() {
      var _WFAnalyticsMgr$getSt7 = WFAnalyticsMgr.getState(),
          currentFieldValue = _WFAnalyticsMgr$getSt7.currentFieldValue;

      return currentFieldValue;
    }
  }, {
    key: "setFieldOptions",
    value: function setFieldOptions() {
      var _WFAnalyticsMgr$getCu = WFAnalyticsMgr.getCurrentField(),
          entry_id = _WFAnalyticsMgr$getCu.entry_id;

      var _WFAnalyticsMgr$getSt8 = WFAnalyticsMgr.getState(),
          _WFAnalyticsMgr$getSt9 = _WFAnalyticsMgr$getSt8.optionResults,
          optionResults = _WFAnalyticsMgr$getSt9 === undefined ? [] : _WFAnalyticsMgr$getSt9;

      var labels = [];
      var series = [];
      optionResults.map(function (option) {
        var _option$wf_fieldconfi = option.wf_fieldconfig_id,
            wf_fieldconfig_id = _option$wf_fieldconfi === undefined ? 0 : _option$wf_fieldconfi,
            _option$options_count = option.options_count,
            options_count = _option$options_count === undefined ? 0 : _option$options_count,
            _option$label = option.label,
            label = _option$label === undefined ? "" : _option$label;

        if (wf_fieldconfig_id == entry_id) {
          labels.push(label);
          series.push(options_count);
        }
      });
      WFAnalyticsMgr.change({
        currentOptionLabels: labels,
        currentOptionSeries: series
      });
    }

    /**
     * Set current field
     * @param fields is collection of fieldSchema
     */

  }, {
    key: "setCurrentFieldByDefault",
    value: function setCurrentFieldByDefault(fields) {
      if ((0, _Lodash.isArray)(fields) && fields.length > 0) {
        var fieldSchema = fields[0];
        if (fieldSchema.hasOwnProperty("entry_id")) {
          var entry_id = fieldSchema.entry_id;

          WFAnalyticsMgr.change({
            currentField: entry_id,
            currentFieldValue: fieldSchema
          });
        } else {
          throw new Error('WFAnalyticsMgr setCurrentFieldByDefault => entry_id not define...');
        }
      }
    }

    /**
      * Count option entries
      * @param next callback {onError, onSuccess}
      */

  }, {
    key: "countOptionEntries",
    value: function countOptionEntries(next) {
      if (!(0, _Lodash.isObject)(next) || !next.hasOwnProperty('onError') || !next.hasOwnProperty('onSuccess')) {
        throw new Error('WFAnalyticsMgr countOptionEntries => next {onError, onSuccess} is required...');
      } else {
        var onError = next.onError,
            onSuccess = next.onSuccess;

        _WFAnalyticsClientMgr2.default.countOptionEntries(function (error) {
          return onError(error);
        }, function (res) {
          return WFAnalyticsMgr.mapOptionEntries(res, onSuccess);
        }
        /* old version ...
        (res) => {
          let optionResults = res.map(o => {
            return Object.assign(o,{
              wf_fieldconfig_id: parseInt(o.wf_fieldconfig_id),
              options_count: parseInt(o.options_count)
            })
          });
          WFAnalyticsMgr.change({
            optionResults: orderBy(
              optionResults, 
              ['options_count'], 
              ['desc', 'asc']
            )
          })
          WFAnalyticsMgr.setFieldOptions();
          onSuccess()
        }
        */
        );
      }
    }

    /**
      * Map option entries
      * @param opt_count is collection of object
      * @param next callback {onError, onSuccess}
      */

  }, {
    key: "mapOptionEntries",
    value: function mapOptionEntries() {
      var opt_count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var next = arguments[1];

      var optionResults = opt_count.map(function (o) {
        return (0, _assign2.default)(o, {
          wf_fieldconfig_id: parseInt(o.wf_fieldconfig_id),
          options_count: parseInt(o.options_count)
        });
      });
      WFAnalyticsMgr.change({
        optionResults: (0, _Lodash.orderBy)(optionResults, ['options_count'], ['desc', 'asc'])
      });
      WFAnalyticsMgr.setFieldOptions();
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    /**
      * Find option entries
      * @param integer formEntryId
      * @param next callback {onError, onSuccess}
      */

  }, {
    key: "findOptionEntries",
    value: function findOptionEntries(formEntryId, next) {
      if (!(0, _Lodash.isObject)(next) || !next.hasOwnProperty('onError') || !next.hasOwnProperty('onSuccess')) {
        throw new Error('WFAnalyticsMgr findOptionEntries => next {onError, onSuccess} is required...');
      } else {
        if (!formEntryId) {
          throw new Error('WFAnalyticsMgr findOptionEntries => formEntryId is required...');
        } else {
          var onError = next.onError,
              onSuccess = next.onSuccess;

          _WFAnalyticsClientMgr2.default.countOptionEntries(formEntryId, function (error) {
            return onError(error);
          }, function (res) {
            return onSuccess();
          });
        }
      }
    }

    // STATS HELPERS ----------- //

    /**
      * Format stat values to clean value
      * @param row contains all value
      * @param isOptStat boolean
      * @return object {view, completed, uncompleted}
      */

  }, {
    key: "toStat",
    value: function toStat() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var isOptStat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var view = 0;
      var completed = 0;
      var uncompleted = 0;
      if ((0, _Lodash.isObject)(row)) {
        var view_count = row.view_count,
            completed_count = row.completed_count,
            uncompleted_count = row.uncompleted_count;

        view = parseInt(view_count);
        completed = parseInt(completed_count);
        uncompleted = parseInt(uncompleted_count) - completed;
        if (!view || view < 0) {
          view = 0;
        }
        if (!completed || completed < 0) {
          completed = 0;
        }
        if (!uncompleted || uncompleted < 0 || uncompleted > view) {
          uncompleted = 0;
        }
      }
      return {
        view: view,
        completed: completed,
        uncompleted: uncompleted
      };
    }

    /**
      * Create config for Charts Element 
      * @param row contains all values
      * @state viewByYear is array
      * @state completedByYear is array
      * @state uncompletedByYear is array
      */

  }, {
    key: "yearToCharts",
    value: function yearToCharts(rows) {
      var _WFAnalyticsMgr$getSt10 = WFAnalyticsMgr.getState(),
          _WFAnalyticsMgr$getSt11 = _WFAnalyticsMgr$getSt10.months,
          months = _WFAnalyticsMgr$getSt11 === undefined ? [] : _WFAnalyticsMgr$getSt11;

      var viewByYear = [];
      var completedByYear = [];
      var uncompletedByYear = [];
      var count = rows.length;
      var lastMonth = 0;
      if (rows.length === 0) {
        WFAnalyticsMgr.change({
          viewByYear: viewByYear,
          completedByYear: completedByYear,
          uncompletedByYear: uncompletedByYear
        });
      } else {
        if (count > 0) {
          lastMonth = rows[count - 1];
          lastMonth = parseInt(lastMonth.date_month);
        }
        months.map(function (m, i) {
          i++;
          var row = null;
          var values = rows.filter(function (r) {
            return parseInt(r.date_month) === i;
          });
          if (values.length > 0) {
            row = values[0];
          }

          var _WFAnalyticsMgr$toSta = WFAnalyticsMgr.toStat(row),
              view = _WFAnalyticsMgr$toSta.view,
              completed = _WFAnalyticsMgr$toSta.completed,
              uncompleted = _WFAnalyticsMgr$toSta.uncompleted;

          if (i <= lastMonth || i <= lastMonth + 1) {
            viewByYear.push(view);
            completedByYear.push(completed);
            uncompletedByYear.push(uncompleted);
          }
        });
        WFAnalyticsMgr.change({
          viewByYear: viewByYear,
          completedByYear: completedByYear,
          uncompletedByYear: uncompletedByYear
        });
      }
    }

    /**
      * Create config for Charts Element
      * @param row contains all values
      * @state viewByMonth is array
      * @state completedByMonth is array
      * @state uncompletedByMonth is array
      */

  }, {
    key: "monthToCharts",
    value: function monthToCharts(rows) {
      var _WFAnalyticsMgr$getSt12 = WFAnalyticsMgr.getState(),
          currentMonth = _WFAnalyticsMgr$getSt12.currentMonth;

      var monthWeeks = [];
      var viewByMonth = [];
      var completedByMonth = [];
      var uncompletedByMonth = [];
      if (rows.length === 0) {
        WFAnalyticsMgr.change({
          monthWeeks: monthWeeks,
          viewByMonth: viewByMonth,
          completedByMonth: completedByMonth,
          uncompletedByMonth: uncompletedByMonth
        });
      } else {
        rows.map(function (row, i) {
          var _WFAnalyticsMgr$toSta2 = WFAnalyticsMgr.toStat(row),
              view = _WFAnalyticsMgr$toSta2.view,
              completed = _WFAnalyticsMgr$toSta2.completed,
              uncompleted = _WFAnalyticsMgr$toSta2.uncompleted;

          monthWeeks.push(i + 1);
          viewByMonth.push(view);
          completedByMonth.push(completed);
          uncompletedByMonth.push(uncompleted);
        });
        WFAnalyticsMgr.change({
          monthWeeks: monthWeeks,
          viewByMonth: viewByMonth,
          completedByMonth: completedByMonth,
          uncompletedByMonth: uncompletedByMonth
        });
      }
    }

    /**
      * Create config for Charts Element
      * @param row contains all values
      * @state viewByWeek is array
      * @state completedByWeek is array
      * @state uncompletedByWeek is array
      */

  }, {
    key: "weekToCharts",
    value: function weekToCharts(rows) {
      var _WFAnalyticsMgr$getSt13 = WFAnalyticsMgr.getState(),
          _WFAnalyticsMgr$getSt14 = _WFAnalyticsMgr$getSt13.days,
          days = _WFAnalyticsMgr$getSt14 === undefined ? [] : _WFAnalyticsMgr$getSt14,
          currentYear = _WFAnalyticsMgr$getSt13.currentYear,
          currentMonth = _WFAnalyticsMgr$getSt13.currentMonth;

      var weeksLabel = [];
      var viewByWeek = [];
      var completedByWeek = [];
      var uncompletedByWeek = [];
      var getDayStr = function getDayStr(dateDay) {
        var month = _WFAnalyticsClientMgr2.default.fixedMonthIndex(currentMonth, 'client');
        var date = dateDay + "/" + month + "/" + currentYear;
        var format = "D/M/YYYY";
        return (0, _WFMoment2.default)(date, format).format('ddd');
      };
      if (rows.length === 0) {
        WFAnalyticsMgr.change({
          weeksLabel: weeksLabel,
          viewByWeek: viewByWeek,
          completedByWeek: completedByWeek,
          uncompletedByWeek: uncompletedByWeek
        });
      } else {
        console.log(rows);
        days.map(function (day) {
          var result = rows.filter(function (row) {
            var date_day = row.date_day;

            return day === getDayStr(date_day);
          });
          if (result.length > 0) {
            var row = result[0];

            var _WFAnalyticsMgr$toSta3 = WFAnalyticsMgr.toStat(row),
                view = _WFAnalyticsMgr$toSta3.view,
                completed = _WFAnalyticsMgr$toSta3.completed,
                uncompleted = _WFAnalyticsMgr$toSta3.uncompleted;

            weeksLabel.push(getDayStr(row.date_day));
            viewByWeek.push(view);
            completedByWeek.push(completed);
            uncompletedByWeek.push(uncompleted);
          }
        });
        WFAnalyticsMgr.change({
          weeksLabel: weeksLabel,
          viewByWeek: viewByWeek,
          completedByWeek: completedByWeek,
          uncompletedByWeek: uncompletedByWeek
        });
      }
    }
  }]);
  return WFAnalyticsMgr;
}();

// ------------------- //


exports.default = WFAnalyticsMgr;
// ------------------- //

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WFAnalyticsMgr = __webpack_require__(206);

var _WFAnalyticsMgr2 = _interopRequireDefault(_WFAnalyticsMgr);

var _WFAnalyticsViewMgr = __webpack_require__(119);

var _WFAnalyticsViewMgr2 = _interopRequireDefault(_WFAnalyticsViewMgr);

var _WFAnalyticsClientMgr = __webpack_require__(118);

var _WFAnalyticsClientMgr2 = _interopRequireDefault(_WFAnalyticsClientMgr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFAnalytics = {
  key: "WFAnalytics",
  mgr: _WFAnalyticsMgr2.default,
  viewMgr: _WFAnalyticsViewMgr2.default,
  clientMgr: _WFAnalyticsClientMgr2.default
};
// ------------------- //
exports.default = WFAnalytics;
// ------------------- //

window.WFAnalytics = WFAnalytics;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// field config schema
var formFields = [{
  "name": "data",
  "type": "text",
  "len": 64,
  "label": "Data",
  "legend": "",
  "required": true,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true,
  "ref_form_config": ""
}, {
  "name": "license_key",
  "type": "string",
  "len": 255,
  "label": "LicenseKey",
  "legend": "",
  "required": true,
  "uniq": true,
  "searchable": true,
  "editable": true,
  "create_column": true,
  "ref_form_config": ""
}, {
  "name": "wf_producttype_id",
  "type": "integer",
  "len": 11,
  "label": "ProductType",
  "legend": "",
  "required": false,
  "uniq": true,
  "searchable": true,
  "editable": true,
  "create_column": true,
  "ref_form_config": "product-type"
}];

// ordered fields that will be displayed in views
var formDisplayFields = ['license_key', 'data', 'wf_producttype_id'];

/**
 * Factory to create new license
 */

var WFLicenseFactory = function () {
  function WFLicenseFactory() {
    (0, _classCallCheck3.default)(this, WFLicenseFactory);
  }

  (0, _createClass3.default)(WFLicenseFactory, null, [{
    key: "create",

    /**
     * Create a license form state
     * @return instanceof WFormState
     */
    value: function create() {
      var config = {
        name: 'license',
        type: _WFProductType.WF_CORE_LICENSE_ID,
        display_fields: formDisplayFields,
        fields: formFields
      };

      var formState = new _WFormState2.default(config);
      return formState;
    }
  }]);
  return WFLicenseFactory;
}();

;

exports.default = WFLicenseFactory;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// option schema
var formFields = [{
  "name": "attributes",
  "type": "text",
  "len": 6555,
  "label": "Attributes",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": false,
  "create_column": true
}, {
  "name": "is_private",
  "type": "boolean",
  "len": 1,
  "label": "Is Private",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "label",
  "type": "string",
  "input_type": "textarea",
  "len": 500,
  "label": "Label",
  "legend": "",
  "required": true,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "name",
  "type": "string",
  "len": 32,
  "label": "Name",
  "legend": "",
  "required": true,
  "uniq": true,
  "searchable": true,
  "editable": false,
  "create_column": true
}, {
  "name": "parent_id",
  "type": "integer",
  "len": 11,
  "label": "Parent",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "wf_optiongroup_id",
  "type": "integer",
  "label": "OptionGroup",
  "legend": "",
  "required": true,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "legend",
  "type": "string",
  "input_type": "textarea",
  "len": 6555,
  "label": "Option Legend",
  "legend": "",
  "required": false,
  "uniq": true,
  "searchable": true,
  "editable": true,
  "create_column": false
}, {
  "name": "color",
  "type": "color",
  "len": 64,
  "label": "Option Color",
  "description": null,
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": false,
  "ref_form_config": ""
}, {
  "name": "icon",
  "type": "media",
  "len": 6555,
  "label": "Option Icon",
  "description": null,
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": false,
  "ref_form_config": ""
}, {
  "name": "image",
  "type": "media",
  "len": 6555,
  "label": "Option Image",
  "description": null,
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": false,
  "ref_form_config": ""
}];

// ordered fields that will be displayed in views
var formDisplayFields = ['label'];

/**
 * Factory to create new option
 */

var WFOptionFactory = function () {
  function WFOptionFactory() {
    (0, _classCallCheck3.default)(this, WFOptionFactory);
  }

  (0, _createClass3.default)(WFOptionFactory, null, [{
    key: "create",

    /**
     * Create a option config form state
     * @return instanceof WFormState
     */
    value: function create() {
      var config = {
        name: 'option',
        type: _WFProductType.WF_CORE_OPTION_ID,
        display_fields: formDisplayFields,
        fields: formFields
      };

      var formState = new _WFormState2.default(config);
      return formState;
    }
  }]);
  return WFOptionFactory;
}();

;

exports.default = WFOptionFactory;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// field config schema
var formFields = [{
  "name": "attributes",
  "type": "text",
  "len": 65555,
  "label": "Attributes",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": false,
  "create_column": true
}, {
  "name": "is_private",
  "type": "boolean",
  "len": 1,
  "label": "Is Private",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "label",
  "type": "string",
  "len": 64,
  "label": "Label",
  "legend": "",
  "required": true,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "name",
  "type": "string",
  "len": 32,
  "label": "Name",
  "legend": "",
  "required": true,
  "uniq": true,
  "searchable": true,
  "editable": false,
  "create_column": true
}, {
  "name": "parent_id",
  "type": "integer",
  "len": 11,
  "label": "Parent",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}];

// ordered fields that will be displayed in views
var formDisplayFields = ['label'];

/**
 * Factory to create new option group
 */

var WFOptionGroupFactory = function () {
  function WFOptionGroupFactory() {
    (0, _classCallCheck3.default)(this, WFOptionGroupFactory);
  }

  (0, _createClass3.default)(WFOptionGroupFactory, null, [{
    key: "create",

    /**
     * Create a option group form state
     * @return instanceof WFormState
     */
    value: function create() {
      var config = {
        name: 'option-group',
        type: _WFProductType.WF_CORE_OPTION_GROUP_ID,
        display_fields: formDisplayFields,
        fields: formFields
      };
      var formState = new _WFormState2.default(config);
      return formState;
    }
  }]);
  return WFOptionGroupFactory;
}();

;

exports.default = WFOptionGroupFactory;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// field config schema
var formFields = [{
  "name": "group_id",
  "type": "integer",
  "len": 11,
  "label": "GroupId",
  "required": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "param_name",
  "type": "string",
  "len": 64,
  "label": "ParamName",
  "required": true,
  "uniq": true,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "param_value",
  "type": "text",
  "len": 64,
  "label": "ParamValue",
  "required": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}];

// ordered fields that will be displayed in views
var formDisplayFields = ['group_id', 'param_name', 'param_value'];

/**
 * Factory to create new setting
 */

var WFSettingFactory = function () {
  function WFSettingFactory() {
    (0, _classCallCheck3.default)(this, WFSettingFactory);
  }

  (0, _createClass3.default)(WFSettingFactory, null, [{
    key: "create",

    /**
     * Create a setting form state
     * @return instanceof WFormState
     */
    value: function create() {
      var config = {
        name: 'setting',
        type: _WFProductType.WF_CORE_SETTING_ID,
        display_fields: formDisplayFields,
        fields: formFields
      };

      var formState = new _WFormState2.default(config);
      return formState;
    }
  }]);
  return WFSettingFactory;
}();

;

exports.default = WFSettingFactory;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _ref, _ref2;

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// field config schema
var formFields = [{
  "name": "attributes",
  "type": "text",
  "len": 6555,
  "label": "Attributes",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": false,
  "create_column": true
}, {
  "name": "action_id",
  "type": "integer",
  "len": 11,
  "required": true,
  "uniq": false,
  "searchable": false,
  "editable": false,
  "create_column": false
}, {
  "name": "return_url",
  "type": "string",
  "len": 65555,
  "label": "Return Url",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}, {
  "name": "template_name",
  "type": "string",
  "len": 64,
  "label": "TemplateName",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}, {
  "name": "title",
  "type": "string",
  "len": 32,
  "label": "title",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}, {
  "name": "url",
  "type": "string",
  "len": 1000,
  "label": "Url",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}, {
  "name": "wf_formactiontype_id",
  "type": "integer",
  "len": 11,
  "label": "ActionType",
  "legend": "",
  "required": true,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
}, {
  "name": "wf_formconfig_id",
  "type": "integer",
  "len": 11,
  "label": "FormConfig",
  "legend": "",
  "required": true,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": true
},

// ------------------- //
// SUCCESS_MESSAGE     ------------------- //
// ------------------- //

{
  "name": "success_title",
  "type": "string",
  "len": 1000,
  "input_type": "text",
  "label": "Success title",
  "create_column": false
}, {
  "name": "success_message",
  "len": 65555,
  "type": "text",
  "input_type": "textarea",
  "label": "Success message",
  "create_column": false
},

// ------------------- //
// ERROR_MESSAGE     ------------------- //
// ------------------- //

{
  "name": "err404_title",
  "type": "string",
  "len": 1000,
  "input_type": "text",
  "label": "Error 404 title",
  "required": true,
  "create_column": false
}, {
  "name": "err404_message",
  "type": "text",
  "len": 65555,
  "input_type": "textarea",
  "label": "Error 404  message",
  "required": true,
  "create_column": false
}, {
  "name": "maintenance_title",
  "type": "string",
  "len": 1000,
  "input_type": "text",
  "label": "Maintenance title",
  "required": true,
  "create_column": false
}, {
  "name": "maintenance_message",
  "type": "text",
  "len": 65555,
  "input_type": "textarea",
  "label": "Maintenance message",
  "required": true,
  "create_column": false
},

// ------------------- //
// FIELDS_ANALYTICS     ------------------- //
// ------------------- //

{
  "name": "singleResultIsPublic",
  "type": "boolean",
  "len": 1,
  "label": "",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": false,
  "attributes": {
    placeholder: "User can view our results"
  }
}, {
  "name": "btnLabelSingle",
  "type": "string",
  "label": "Label button for our results",
  "input_type": "text",
  "create_column": false,
  "len": 255,
  "required": true,
  "attributes": {
    "condition": {
      "action": ["visible", "hidden"],
      "rules": ["singleResultIsPublic", "===", true]
    }
  }
}, {
  "name": "globalResultIsPublic",
  "type": "boolean",
  "len": 1,
  "label": "",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": true,
  "editable": true,
  "create_column": false,
  "attributes": {
    placeholder: "User can view global results"
  }
}, {
  "name": "btnLabelGlobal",
  "type": "string",
  "label": "Global results button label",
  "input_type": "text",
  "create_column": false,
  "len": 255,
  "required": true,
  "attributes": {
    "condition": {
      "action": ["visible", "hidden"],
      "rules": ["globalResultIsPublic", "===", true]
    }
  }
}, {
  "name": "globalResultsTitle",
  "type": "string",
  "len": 255,
  "input_type": "text",
  "label": "Global results title",
  "required": true,
  "create_column": false,
  "attributes": {
    "condition": {
      "action": ["visible", "hidden"],
      "rules": ["globalResultIsPublic", "===", true]
    }
  }
}, {
  "name": "globalResultsMessage",
  "type": "text",
  "len": 65555,
  "input_type": "textarea",
  "label": "Global results message",
  "required": false,
  "create_column": false,
  "attributes": {
    "condition": {
      "action": ["visible", "hidden"],
      "rules": ["globalResultIsPublic", "===", true]
    }
  }
},

// ------------------- //
// REDIRECT     ------------------- //
// ------------------- //

{
  "name": "to",
  "type": "string",
  "input_type": "text",
  "label": "End point url",
  "create_column": false,
  "len": 65555,
  "required": true
}, {
  "name": "delay",
  "type": "number",
  "input_type": "range",
  "label": "Delay before redirection",
  "legend": "milli-second ex: 1000ms => 1s",
  "create_column": false,
  "attributes": {
    "step": 1000,
    "sufix": "ms",
    "minimum": 0,
    "maximum": 10000
  }
}, {
  "name": "message",
  "len": 65555,
  "type": "text",
  "input_type": "textarea",
  "label": "Message before redirection",
  "create_column": false
},

// ------------------- //
// FILE_DOWNLOAD     ------------------- //
// ------------------- //

{
  "name": "files",
  "type": "string",
  "len": 1000,
  "input_type": "media",
  "label": "Select file or file url",
  "required": true,
  "create_column": false,
  "attributes": {
    preview: false,
    isFile: true
  }
}, {
  "name": "message",
  "len": 65555,
  "type": "text",
  "input_type": "textarea",
  "label": "Message",
  "create_column": false
}, {
  "name": "btnLabel",
  "type": "string",
  "input_type": "text",
  "label": "Button label",
  "create_column": false
},

// ------------------- //
// MAIL_NOTIFICATION     ------------------- //
// ------------------- //

{
  "name": "use_mail_cc",
  "type": "boolean",
  "input_type": "checkbox",
  "create_column": false,
  "attributes": {
    "placeholder": "CC Option"
  }
}, {
  "name": "use_mail_bcc",
  "type": "boolean",
  "input_type": "checkbox",
  "create_column": false,
  "attributes": {
    "placeholder": "BCC Option"
  }
}, (_ref = {
  "name": "mail_cc",
  "type": "mailer",
  "len": 6555,
  "required": false,
  "label": "Cc",
  "legend": "enter the email addresses of the people you want to know about the email (remember that everyone will see their names)"
}, (0, _defineProperty3.default)(_ref, "required", false), (0, _defineProperty3.default)(_ref, "uniq", false), (0, _defineProperty3.default)(_ref, "searchable", false), (0, _defineProperty3.default)(_ref, "editable", true), (0, _defineProperty3.default)(_ref, "create_column", true), (0, _defineProperty3.default)(_ref, "attributes", {
  "condition": {
    "action": ["visible", "hidden"],
    "rules": ["use_mail_cc", "===", true]
  }
}), _ref), (_ref2 = {
  "name": "mail_bcc",
  "type": "mailer",
  "len": 6555,
  "required": false,
  "label": "Bcc",
  "legend": "enter the email addresses of the people you want to know about the email but not announce to everyone else that they are getting a copy"
}, (0, _defineProperty3.default)(_ref2, "required", false), (0, _defineProperty3.default)(_ref2, "uniq", false), (0, _defineProperty3.default)(_ref2, "searchable", false), (0, _defineProperty3.default)(_ref2, "editable", true), (0, _defineProperty3.default)(_ref2, "create_column", true), (0, _defineProperty3.default)(_ref2, "attributes", {
  "condition": {
    "action": ["visible", "hidden"],
    "rules": ["use_mail_bcc", "===", true]
  }
}), _ref2), {
  "name": "mail_from",
  "type": "mailer",
  "len": 65555,
  "label": "From",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}, {
  "name": "mail_subject",
  "type": "string",
  "len": 65555,
  "label": "Subject",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}, {
  "name": "mail_to",
  "type": "mailer",
  "len": 65555,
  "label": "To",
  "legend": '<strong>Format :</strong> "contact@exemple.com" <strong>or</strong> "john@exemple.com : John Doe". <strong>Separate :</strong> ","',
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true
}, {
  "name": "mail_body",
  "type": "html",
  "input_type": "textarea",
  "len": 65555,
  "label": "Message (Body)",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true,
  "attributes": {
    rows: 14
  }
}, {
  "name": "mail_attachments",
  "type": "text",
  "len": 65555,
  "label": "Mail Attachments",
  "legend": "",
  "required": false,
  "uniq": false,
  "searchable": false,
  "editable": true,
  "create_column": true,
  "attributes": {
    preview: false,
    isFile: true
  }
}];

// ordered fields that will be displayed in views
var formDisplayFields = ['mail_from', 'mail_to', 'mail_subject', 'mail_body'];

/**
 * Factory to create form action
 */

var WFormActionFactory = function () {
  function WFormActionFactory() {
    (0, _classCallCheck3.default)(this, WFormActionFactory);
  }

  (0, _createClass3.default)(WFormActionFactory, null, [{
    key: "create",

    /**
     * Create a fieldConfig form state
     * @return instanceof WFormState
     */
    value: function create() {
      var config = {
        name: 'action',
        type: _WFProductType.WF_CORE_ACTION_ID,
        display_fields: formDisplayFields,
        fields: formFields
      };

      var formState = new _WFormState2.default(config);
      return formState;
    }
  }]);
  return WFormActionFactory;
}();

;

exports.default = WFormActionFactory;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// form config schema
var formFields = [{
  "name": "attributes",
  "type": "text",
  "input_type": "",
  "len": 65555,
  "label": "Attributes",
  "required": false,
  "searchable": false,
  "editable": false,
  "create_column": true
}, {
  "name": "name",
  "type": "string",
  "input_type": "text",
  "len": 32,
  "label": "Name",
  "required": true,
  "editable": false,
  "searchable": true,
  "create_column": true,
  "attributes": {
    "transformable": true,
    "transform": "toSlug"
  }
}, {
  "name": "entries_table",
  "type": "string",
  "input_type": "",
  "len": 64,
  "label": "Entries Table",
  "required": true,
  "editable": false,
  "searchable": false,
  "create_column": true
}, {
  "name": "title",
  "type": "string",
  "input_type": "text",
  "len": 64,
  "label": "Title",
  "required": true,
  "searchable": true,
  "create_column": true,
  "attributes": {
    "transformable": true,
    "transform": "toCapital"
  }
}, {
  "name": "description",
  "type": "text",
  "input_type": "textarea",
  "len": 64,
  "label": "Description",
  "required": false,
  "searchable": true,
  "create_column": true
}, {
  "name": "display_fields",
  "type": "text",
  "input_type": "",
  "len": 65555,
  "label": "DisplayFields",
  "required": false,
  "searchable": false,
  "create_column": true
}, {
  "name": "wf_optiongroup_id",
  "type": "integer",
  "input_type": "",
  "len": 11,
  "label": "OptionGroup",
  "required": false,
  "searchable": true,
  "create_column": true
}, {
  "name": "wf_producttype_id",
  "type": "integer",
  "input_type": "",
  "len": 11,
  "label": "ProductType",
  "required": true,
  "searchable": true,
  "create_column": true
}, {
  "name": "theme",
  "type": "string",
  "input_type": "",
  "len": 64,
  "label": "Theme",
  "required": true,
  "searchable": true,
  "create_column": false
}, {
  "name": "settings",
  "type": "text",
  "input_type": "",
  "len": 65555,
  "label": "Settings",
  "required": false,
  "searchable": false,
  "create_column": false
}];

// order fields that will be displayed in views
var formDisplayFields = ['title', 'description'];

/**
 * Factory to create new form-config
 */

var WFormConfigFactory = function () {
  function WFormConfigFactory() {
    (0, _classCallCheck3.default)(this, WFormConfigFactory);
  }

  (0, _createClass3.default)(WFormConfigFactory, null, [{
    key: "create",

    /**
     * Create a formConfig form state
     * @return instanceof WFormState
     */
    value: function create() {
      var config = {
        name: 'form-config',
        type: _WFProductType.WF_CORE_FORM_CONFIG_ID,
        display_fields: formDisplayFields,
        fields: formFields
      };
      var formState = new _WFormState2.default(config);
      return formState;
    }
  }]);
  return WFormConfigFactory;
}();

;

exports.default = WFormConfigFactory;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Form config parser
 */
var WFormConfigParser = function () {
  function WFormConfigParser() {
    (0, _classCallCheck3.default)(this, WFormConfigParser);
  }

  (0, _createClass3.default)(WFormConfigParser, null, [{
    key: 'parse',

    /**
     * @param config a given form config to parse
     * @return Object containing form config infos
     */
    value: function parse(config) {
      var _config$id = config.id,
          id = _config$id === undefined ? 0 : _config$id,
          _config$entry_id = config.entry_id,
          entry_id = _config$entry_id === undefined ? 0 : _config$entry_id,
          _config$published = config.published,
          published = _config$published === undefined ? false : _config$published,
          _config$name = config.name,
          name = _config$name === undefined ? '' : _config$name,
          _config$created_tms = config.created_tms,
          created_tms = _config$created_tms === undefined ? '' : _config$created_tms,
          _config$entries_table = config.entries_table,
          entries_table = _config$entries_table === undefined ? '' : _config$entries_table,
          _config$title = config.title,
          title = _config$title === undefined ? '' : _config$title,
          _config$description = config.description,
          description = _config$description === undefined ? '' : _config$description,
          _config$attributes = config.attributes,
          attributes = _config$attributes === undefined ? '' : _config$attributes,
          _config$wf_producttyp = config.wf_producttype_id,
          wf_producttype_id = _config$wf_producttyp === undefined ? 0 : _config$wf_producttyp,
          _config$wf_optiongrou = config.wf_optiongroup_id,
          wf_optiongroup_id = _config$wf_optiongrou === undefined ? 0 : _config$wf_optiongrou,
          _config$wf_categorygr = config.wf_categorygroup_id,
          wf_categorygroup_id = _config$wf_categorygr === undefined ? 0 : _config$wf_categorygr,
          _config$display_field = config.display_fields,
          display_fields = _config$display_field === undefined ? [] : _config$display_field,
          _config$actions = config.actions,
          actions = _config$actions === undefined ? [] : _config$actions,
          _config$fields = config.fields,
          fields = _config$fields === undefined ? [] : _config$fields;


      var formConfig = {};
      var fieldsIds = {};

      if (entry_id) {
        formConfig['entry_id'] = entry_id;
        formConfig['form_id'] = entry_id;
      } else {
        formConfig['entry_id'] = id;
        formConfig['form_id'] = id;
      }

      formConfig['name'] = name;
      formConfig['created_tms'] = created_tms;
      formConfig['entries_table'] = entries_table;
      formConfig['published'] = published;
      formConfig['title'] = title;
      formConfig['description'] = description;
      formConfig['wf_producttype_id'] = wf_producttype_id;
      formConfig['wf_categorygroup_id'] = wf_categorygroup_id;
      formConfig['type'] = wf_producttype_id;
      formConfig['wf_optiongroup_id'] = wf_optiongroup_id;
      formConfig['attributes'] = attributes;

      if ((0, _Lodash.isArray)(fields) && fields.length > 0) {
        formConfig['fields'] = fields;
        for (var i = 0; i < fields.length; i++) {
          var fld = fields[i];
          if (fld.hasOwnProperty('name')) {
            if (fld.hasOwnProperty('id')) {
              fieldsIds[fld.name] = fld.id;
            } else {
              fieldsIds[fld.name] = 0;
            }
          }
        }
      } else {
        formConfig['fields'] = [];
      }

      if ((0, _Lodash.isArray)(display_fields) && display_fields.length > 0) {
        formConfig['display_fields'] = display_fields;
      } else {
        formConfig['display_fields'] = [];
      }

      if ((0, _Lodash.isArray)(actions) && actions.length > 0) {
        formConfig['actions'] = actions;
      } else {
        formConfig['actions'] = [];
      }

      formConfig['fields_ids'] = fieldsIds;

      return formConfig;
    }

    /**
     * Merge initial form config with the given form config
     * @param config the initial form config
     * @param defaultConfig the default form config
     * @return Object containing the merged form config
     */

  }, {
    key: 'merge',
    value: function merge(config, defaultConfig) {
      var formConfig = WFormConfigParser.parse(config);

      for (var i = 0; i < defaultConfig.fields.length; i++) {
        var fld = defaultConfig.fields[i];
        if (!formConfig.fields_ids.hasOwnProperty(fld.name)) {
          formConfig.fields.push(fld);
        }
      }

      if (!formConfig.display_fields.length) {
        formConfig.display_fields = defaultConfig.display_fields;
      }

      if (!formConfig.attributes) {
        formConfig.attributes = defaultConfig.attributes;
      }

      return formConfig;
    }
  }]);
  return WFormConfigParser;
}();

;

exports.default = WFormConfigParser;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormProp = __webpack_require__(23);

var _WFormProp2 = _interopRequireDefault(_WFormProp);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFieldConfigFactory = __webpack_require__(120);

var _WFieldConfigFactory2 = _interopRequireDefault(_WFieldConfigFactory);

var _WFormConfigFactory = __webpack_require__(213);

var _WFormConfigFactory2 = _interopRequireDefault(_WFormConfigFactory);

var _WFOptionFactory = __webpack_require__(209);

var _WFOptionFactory2 = _interopRequireDefault(_WFOptionFactory);

var _WFOptionGroupFactory = __webpack_require__(210);

var _WFOptionGroupFactory2 = _interopRequireDefault(_WFOptionGroupFactory);

var _WFormActionFactory = __webpack_require__(212);

var _WFormActionFactory2 = _interopRequireDefault(_WFormActionFactory);

var _WFSettingFactory = __webpack_require__(211);

var _WFSettingFactory2 = _interopRequireDefault(_WFSettingFactory);

var _WFLicenseFactory = __webpack_require__(208);

var _WFLicenseFactory2 = _interopRequireDefault(_WFLicenseFactory);

var _WFormConfigParser = __webpack_require__(214);

var _WFormConfigParser2 = _interopRequireDefault(_WFormConfigParser);

var _WFUrl = __webpack_require__(41);

var _WFUrl2 = _interopRequireDefault(_WFUrl);

var _WFClient = __webpack_require__(58);

var _WFClient2 = _interopRequireDefault(_WFClient);

var _WFResponse = __webpack_require__(46);

var _WFResponse2 = _interopRequireDefault(_WFResponse);

var _WFDataTypes = __webpack_require__(47);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Factory to create new form state
 */
var WFormStateFactory = function () {
  function WFormStateFactory() {
    (0, _classCallCheck3.default)(this, WFormStateFactory);
  }

  (0, _createClass3.default)(WFormStateFactory, null, [{
    key: "create",

    /**
     * Create a new form state
     * @param type the form type
     * @return instanceof WFormState
     */
    value: function create() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _WFProductType.WF_CUSTOM_CUSTOM_ID;

      var formState = null;

      switch (type) {
        case _WFProductType.WF_CORE_FORM_CONFIG_ID:
          formState = _WFormConfigFactory2.default.create();
          break;

        case _WFProductType.WF_CORE_FIELD_CONFIG_ID:
          formState = _WFieldConfigFactory2.default.create();
          break;

        case _WFProductType.WF_CORE_OPTION_ID:
          formState = _WFOptionFactory2.default.create();
          break;

        case _WFProductType.WF_CORE_OPTION_GROUP_ID:
          formState = _WFOptionGroupFactory2.default.create();
          break;

        case _WFProductType.WF_CORE_ACTION_ID:
          formState = _WFormActionFactory2.default.create();
          break;

        case _WFProductType.WF_CORE_SETTING_ID:
          formState = _WFSettingFactory2.default.create();
          break;

        case _WFProductType.WF_CORE_LICENSE_ID:
          formState = _WFLicenseFactory2.default.create();
          break;

        default:
          formState = new _WFormState2.default({ type: type });
          break;
      }

      return formState;
    }

    /**
     * Create a new form state for form entry edition
     * @param formConfig a given form config
     * @param isAlreadyMerged
     * @return WFormState
     */

  }, {
    key: "createFormEntryState",
    value: function createFormEntryState(formConfig) {
      var isAlreadyMerged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!isAlreadyMerged) {
        formConfig = WFormStateFactory.getMergedFormConfig(formConfig);
      }
      // entry_id should be set to zero. not exists yet for entry creation.
      formConfig.entry_id = 0;
      var formState = new _WFormState2.default(formConfig);
      return formState;
    }

    /**
     * Create a new form state for form config edition
     * @param formConfig a given form config
     * @param isAlreadyMerged
     * @return WFormState
     */

  }, {
    key: "createFormConfigState",
    value: function createFormConfigState(formConfig) {
      var isAlreadyMerged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var formState = WFormStateFactory.create(_WFProductType.WF_CORE_FORM_CONFIG_ID);
      if (!isAlreadyMerged) {
        formConfig = WFormStateFactory.getMergedFormConfig(formConfig);
      }
      var displayFields = formConfig.display_fields; // array display fields
      formState.setDisplayFields(formConfig.display_fields);
      formConfig.display_fields = displayFields.join();
      formState.setValues(formConfig);
      formState.setPublished(formConfig.published);

      return formState;
    }

    /**
     * Create a temporary form state
     * @return WFormState
     */

  }, {
    key: "createTempFormState",
    value: function createTempFormState() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _args$fields = args.fields,
          fields = _args$fields === undefined ? [] : _args$fields,
          _args$displayFields = args.displayFields,
          displayFields = _args$displayFields === undefined ? [] : _args$displayFields,
          _args$defaultValues = args.defaultValues,
          defaultValues = _args$defaultValues === undefined ? {} : _args$defaultValues;

      var formState = new _WFormState2.default();
      formState.setEntryId(0);
      formState.addFields(fields);
      formState.setDisplayFields(displayFields);
      formState.setValues(defaultValues);
      return formState;
    }

    /**
     * Get the merged form config
     * @param formConfig a given form config to parse
     * @return Object containing the new form config
     */

  }, {
    key: "getMergedFormConfig",
    value: function getMergedFormConfig(formConfig) {
      var mergedConfig = _WFormConfigParser2.default.parse(formConfig);
      return mergedConfig;
    }

    /**
     * Get the default form config
     * @param productTypeId a given product type identifier
     */

  }, {
    key: "getDefaultFormConfig",
    value: function getDefaultFormConfig(productTypeId) {
      return {
        fields: [],
        display_fields: [],
        attributes: ''
      };
    }
  }]);
  return WFormStateFactory;
}();

;

exports.default = WFormStateFactory;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _WFInitialState;

var _WFConstants = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFInitialState = (_WFInitialState = {}, (0, _defineProperty3.default)(_WFInitialState, _WFConstants.WF_RESULTS, {}), (0, _defineProperty3.default)(_WFInitialState, _WFConstants.WF_STATUS, _WFConstants.WF_STATUS_LOADING), (0, _defineProperty3.default)(_WFInitialState, _WFConstants.HEIGHT, 0), (0, _defineProperty3.default)(_WFInitialState, _WFConstants.WIDTH, 0), (0, _defineProperty3.default)(_WFInitialState, _WFConstants.WF_DISPLAY_FIELDS, []), _WFInitialState);

exports.default = WFInitialState;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(71);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _WFieldView2 = __webpack_require__(59);

var _WFieldView3 = _interopRequireDefault(_WFieldView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS BOOLEAN FIELD VIEW ------------------- //

// ------------------- //

var WFieldBooleanView = function (_WFieldView) {
  (0, _inherits3.default)(WFieldBooleanView, _WFieldView);

  /**
   * Constructor
   * @param value instance of WFBoolean
   */
  function WFieldBooleanView(value) {
    (0, _classCallCheck3.default)(this, WFieldBooleanView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFieldBooleanView.__proto__ || (0, _getPrototypeOf2.default)(WFieldBooleanView)).call(this, value));

    _this.initialState = (0, _defineProperty3.default)({}, value.getKey(), value.get());
    return _this;
  }

  /**
   * Before init set default value
   * @next super.init()
   */


  (0, _createClass3.default)(WFieldBooleanView, [{
    key: 'init',
    value: function init(args) {
      var field = args.field,
          _args$schema = args.schema,
          schema = _args$schema === undefined ? {} : _args$schema;

      if (!this.isInit && !field.hasValue() && schema.hasOwnProperty(this.value.getKey())) {
        this.value.set(schema[this.value.getKey()]);
        this.change({ eventArgs: (0, _defineProperty3.default)({}, this.value.getKey(), this.value.get()) });
      }
      (0, _get3.default)(WFieldBooleanView.prototype.__proto__ || (0, _getPrototypeOf2.default)(WFieldBooleanView.prototype), 'init', this).call(this, args);
    }
  }]);
  return WFieldBooleanView;
}(_WFieldView3.default);
// ------------------- //


exports.default = WFieldBooleanView;
// ------------------- //

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _WFieldView2 = __webpack_require__(59);

var _WFieldView3 = _interopRequireDefault(_WFieldView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS DATE FIELD VIEW ------------------- //

// ------------------- //

var WFieldDateView = function (_WFieldView) {
  (0, _inherits3.default)(WFieldDateView, _WFieldView);

  /**
   * Constructor
   * @param value instance of WFDate
   */
  function WFieldDateView(value) {
    (0, _classCallCheck3.default)(this, WFieldDateView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFieldDateView.__proto__ || (0, _getPrototypeOf2.default)(WFieldDateView)).call(this, value));

    _this.initialState = (0, _defineProperty3.default)({}, value.key, value.get());
    return _this;
  }

  return WFieldDateView;
}(_WFieldView3.default);
// ------------------- //


exports.default = WFieldDateView;
// ------------------- //

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(71);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _WFieldView2 = __webpack_require__(59);

var _WFieldView3 = _interopRequireDefault(_WFieldView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS STRING FIELD VIEW ------------------- //

// ------------------- //

var WFieldNumberView = function (_WFieldView) {
  (0, _inherits3.default)(WFieldNumberView, _WFieldView);

  /**
   * Constructor
   * @param value instance of WFNumber
   */
  function WFieldNumberView(value) {
    (0, _classCallCheck3.default)(this, WFieldNumberView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFieldNumberView.__proto__ || (0, _getPrototypeOf2.default)(WFieldNumberView)).call(this, value));

    _this.initialState = (0, _defineProperty3.default)({}, value.key, value.get());
    return _this;
  }

  /**
   * Before init set default value
   * @next super.init()
   */


  (0, _createClass3.default)(WFieldNumberView, [{
    key: 'init',
    value: function init(args) {
      var field = args.field,
          _args$schema = args.schema,
          schema = _args$schema === undefined ? {} : _args$schema;
      var _schema$isFloat = schema.isFloat,
          isFloat = _schema$isFloat === undefined ? false : _schema$isFloat;

      if (!this.isInit && !field.hasValue() && schema.hasOwnProperty(this.value.getKey())) {
        //this.value.isFloat = isFloat;
        this.value.set(schema[this.value.getKey()]);
        this.change({ eventArgs: (0, _defineProperty3.default)({}, this.value.getKey(), this.value.get()) });
      }
      (0, _get3.default)(WFieldNumberView.prototype.__proto__ || (0, _getPrototypeOf2.default)(WFieldNumberView.prototype), 'init', this).call(this, args);
    }
  }]);
  return WFieldNumberView;
}(_WFieldView3.default);
// ------------------- //


exports.default = WFieldNumberView;
// ------------------- //

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(71);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _WFBaobabOption = __webpack_require__(203);

var _WFBaobabOption2 = _interopRequireDefault(_WFBaobabOption);

var _WFieldView2 = __webpack_require__(59);

var _WFieldView3 = _interopRequireDefault(_WFieldView2);

var _Lodash = __webpack_require__(6);

var _Constants = __webpack_require__(70);

var _WFEventTypes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS SELECT FIELD VIEW ------------------- // 

// ------------------- //

var WFieldSelectView = function (_WFieldView) {
  (0, _inherits3.default)(WFieldSelectView, _WFieldView);

  /**
   * Constructor
   * @param value instance of WFSelect
   */
  function WFieldSelectView(value) {
    var _this$initialState;

    (0, _classCallCheck3.default)(this, WFieldSelectView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFieldSelectView.__proto__ || (0, _getPrototypeOf2.default)(WFieldSelectView)).call(this, value));

    _this.baobabOptMgr = null;
    _this.isMonkey = false;
    _this.isLoaded = false;
    _this.initialState = (_this$initialState = {}, (0, _defineProperty3.default)(_this$initialState, value.key, value.get()), (0, _defineProperty3.default)(_this$initialState, 'min', 0), (0, _defineProperty3.default)(_this$initialState, 'max', 0), (0, _defineProperty3.default)(_this$initialState, 'focus', ""), (0, _defineProperty3.default)(_this$initialState, 'searchValue', ""), (0, _defineProperty3.default)(_this$initialState, 'resultData', []), (0, _defineProperty3.default)(_this$initialState, 'isLoading', false), (0, _defineProperty3.default)(_this$initialState, 'isOpen', false), _this$initialState);
    return _this;
  }

  /**
   * Call method by Eventype
   * @param evenType string 
   * @param args object params
   */


  (0, _createClass3.default)(WFieldSelectView, [{
    key: 'on',
    value: function on(evenType) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ctx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _args$eventArgs = args.eventArgs,
          eventArgs = _args$eventArgs === undefined ? {} : _args$eventArgs;


      switch (evenType) {

        case _WFEventTypes.WF_EVENT_ONINIT:
          this.init(args);
          break;

        case _WFEventTypes.WF_EVENT_ONSELECT:
          this.select(eventArgs);
          break;

        case _WFEventTypes.WF_EVENT_ONTOGGLE:
          this.toggle(eventArgs);
          break;

        case _WFEventTypes.WF_EVENT_ONOPEN:
          this.open(eventArgs);
          break;

        case _WFEventTypes.WF_EVENT_ONCLOSE:
          this.close();
          break;

        case _WFEventTypes.WF_EVENT_ONFIND:
          this.find(eventArgs);
          break;

        case _WFEventTypes.WF_EVENT_ONSEARCH:
          this.search(eventArgs);
          break;

        case _WFEventTypes.WF_EVENT_ONDIDMOUNT:
          var _ctx$isEditEntry = ctx.isEditEntry,
              isEditEntry = _ctx$isEditEntry === undefined ? false : _ctx$isEditEntry;

          //console.error("SELECT STATUS")
          //console.log("this.isLoaded", this.isLoaded)
          //console.log("isEditEntry", isEditEntry)

          if (isEditEntry) {
            /*!this.isLoaded && */
            this.isLoaded = true;
            (0, _get3.default)(WFieldSelectView.prototype.__proto__ || (0, _getPrototypeOf2.default)(WFieldSelectView.prototype), 'on', this).call(this, evenType, args, ctx);
          } else {
            if (this.isInit && this.field.hasValue()) {
              var prevValue = this.value.getValue();
              if (!(0, _Lodash.isNull)(prevValue) && (0, _Lodash.isArray)(prevValue) && prevValue.length > 0) {
                this.change({ eventArgs: (0, _defineProperty3.default)({}, this.value.getKey(), prevValue) });
                this.validate(true, true);
              }
            }
            this.ready(_WFEventTypes.WF_EVENT_ONDIDMOUNT);
          }
          break;

        default:
          (0, _get3.default)(WFieldSelectView.prototype.__proto__ || (0, _getPrototypeOf2.default)(WFieldSelectView.prototype), 'on', this).call(this, evenType, args);
      }
    }

    /**
     * When the component initialize
     * Set value manager
     * @args {schema}
     */

  }, {
    key: 'init',
    value: function init(args) {
      if (this.isInit) {
        return;
      } else {
        var field = args.field,
            _args$schema = args.schema,
            schema = _args$schema === undefined ? {} : _args$schema;
        var required = schema.required,
            _schema$data = schema.data,
            data = _schema$data === undefined ? [] : _schema$data,
            _schema$labelBy = schema.labelBy,
            labelBy = _schema$labelBy === undefined ? "label" : _schema$labelBy,
            _schema$minItems = schema.minItems,
            minItems = _schema$minItems === undefined ? 1 : _schema$minItems,
            _schema$maxItems = schema.maxItems,
            maxItems = _schema$maxItems === undefined ? 0 : _schema$maxItems,
            _schema$isBaobab = schema.isBaobab,
            isBaobab = _schema$isBaobab === undefined ? false : _schema$isBaobab,
            _schema$isMonkey = schema.isMonkey,
            isMonkey = _schema$isMonkey === undefined ? false : _schema$isMonkey,
            _schema$isMultiple = schema.isMultiple,
            isMultiple = _schema$isMultiple === undefined ? false : _schema$isMultiple,
            _schema$optionType = schema.optionType,
            optionType = _schema$optionType === undefined ? null : _schema$optionType,
            _schema$wf_optiongrou = schema.wf_optiongroup_id,
            wf_optiongroup_id = _schema$wf_optiongrou === undefined ? 0 : _schema$wf_optiongrou,
            _schema$wf_optiongrou2 = schema.wf_optiongroup,
            wf_optiongroup = _schema$wf_optiongrou2 === undefined ? null : _schema$wf_optiongrou2,
            _schema$monkeyBranch = schema.monkeyBranch,
            monkeyBranch = _schema$monkeyBranch === undefined ? null : _schema$monkeyBranch,
            _schema$monkeyFilterB = schema.monkeyFilterBy,
            monkeyFilterBy = _schema$monkeyFilterB === undefined ? "option" : _schema$monkeyFilterB,
            _schema$monkeyGroup = schema.monkeyGroup,
            monkeyGroup = _schema$monkeyGroup === undefined ? null : _schema$monkeyGroup,
            _schema$monkeyObserve = schema.monkeyObserve,
            monkeyObserve = _schema$monkeyObserve === undefined ? null : _schema$monkeyObserve;

        this.setState({ data: data });
        this.value.labelBy = labelBy;
        //this.value.canBeEmpty = (required === false);
        this.value.min = parseInt(minItems);
        this.value.max = parseInt(maxItems);
        this.value.multiple = isMultiple == true;
        this.value.labelBy = labelBy;
        this.value.canBeEmpty = true;
        if (wf_optiongroup_id && isBaobab && optionType) {
          var optiongroup = wf_optiongroup;
          if (!wf_optiongroup) {
            optiongroup = {
              id: parseInt(wf_optiongroup_id)
            };
          }
          this.setBaobabOptionMgr(optionType, optiongroup);
        } else if (isMonkey && monkeyGroup !== "") {
          if (monkeyFilterBy === "option") {
            this.setBaobabOptionMgr(_Constants.WF_BAOBAB_OPTION, { id: 0 });
          } else if (monkeyFilterBy === "branch" && monkeyBranch) {
            this.setBaobabOptionMgr(_Constants.WF_BAOBAB_BRANCH, {
              id: monkeyBranch
            });
          }
          this.isMonkey = true;
          this.setData([], true);
          this.setState({
            disabled: true
          });
        }
        (0, _get3.default)(WFieldSelectView.prototype.__proto__ || (0, _getPrototypeOf2.default)(WFieldSelectView.prototype), 'init', this).call(this, args);
      }
    }

    /**
     * create new Baobab Option 
     */

  }, {
    key: 'setBaobabOptionMgr',
    value: function setBaobabOptionMgr(optionType, optiongroup) {
      var _this2 = this;

      this.baobabOptMgr = new _WFBaobabOption2.default(optionType, optiongroup, null, {
        treeLimitOption: 200,
        branchLimitOption: 200
      });
      this.baobabOptMgr.observer = {
        change: function change() {
          _this2.setState({
            isLoading: true
          });
        },
        ready: function ready() {
          var _getState = _this2.getState(),
              _getState$data = _getState.data,
              data = _getState$data === undefined ? [] : _getState$data;

          if (data.length === 0) {
            _this2.setState({
              isLoading: false,
              data: _this2.baobabOptMgr.getOptionMgr().getValue()
            });
          } else {
            _this2.setState({
              isLoading: false,
              resultData: _this2.baobabOptMgr.getOptionMgr().getValue()
            });
          }
        }
      };
    }

    /**
     * Toggle the component loader
     * Update the component
     * Save new values
     * @param selectState is object values
     */

  }, {
    key: 'change',
    value: function change(values, state) {

      //console.error("SELECT CHANGE")
      //console.log(values)

      if (this.isInit) {
        this.setState(state);
        this.setState(values);
        this.setState({ focus: "" });
      }
      (0, _get3.default)(WFieldSelectView.prototype.__proto__ || (0, _getPrototypeOf2.default)(WFieldSelectView.prototype), 'change', this).call(this, {
        eventArgs: values
      });
    }

    /**
     * Select/Unselect value
     */

  }, {
    key: 'select',
    value: function select(id) {
      var _this3 = this;

      var _getState2 = this.getState(),
          data = _getState2.data;

      this.value.setData(data);
      this.value.select(id, {
        select: function select(values, state) {
          return _this3.change(values, state);
        },
        unselect: function unselect(values, state) {
          return _this3.change(values, state);
        }
      });
    }

    /**
     * Toggle the component
     */

  }, {
    key: 'toggle',
    value: function toggle() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (this.isInit) {
        var _getState3 = this.getState(),
            isOpen = _getState3.isOpen,
            isUnfold = _getState3.isUnfold,
            disabled = _getState3.disabled;

        if (disabled) {
          return;
        }
        if (isOpen === false) {
          this.open(focus);
          this.find();
        } else {
          this.close();
        }
      }
    }

    /**
     * Open the component
     */

  }, {
    key: 'open',
    value: function open() {
      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      if (this.isInit) {
        this.setState({
          focus: focus,
          isOpen: true
        });
      }
    }

    /**
     * Close the component
     */

  }, {
    key: 'close',
    value: function close() {
      if (this.isInit) {
        this.setState({
          focus: "",
          isOpen: false,
          searchValue: "",
          resultData: []
        });
      }
    }

    /**
     * Search options
     */

  }, {
    key: 'search',
    value: function search() {
      var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "label";


      //console.log("SEARCH", string, this.isInit )

      if (this.isInit) {
        var length = string.length;

        var _getState4 = this.getState(),
            _getState4$data = _getState4.data,
            data = _getState4$data === undefined ? [] : _getState4$data;

        //console.log("searchValue", string)

        this.setState({
          searchValue: string
        });
        //window.input = this;
        //console.log("searchValue", string)

        if (length === 0) {
          this.setState({
            searchValue: "",
            resultData: []
          });
        } else if (this.baobabOptMgr) {
          if (length < 2) {
            return;
          } else {
            this.baobabOptMgr.search(string);
          }
        } else {
          var resultData = data.filter(function (elem) {
            if (elem.hasOwnProperty(key)) {
              var k = elem[key].toLowerCase(),
                  v = string.toLowerCase();
              if (k.includes(v)) {
                return elem;
              }
            }
          });
          this.setState({
            resultData: resultData
          });
        }
      }
    }

    /**
     * Find options in db
     */

  }, {
    key: 'find',
    value: function find() {
      if (this.baobabOptMgr) {
        var _getState5 = this.getState(),
            _getState5$data = _getState5.data,
            data = _getState5$data === undefined ? [] : _getState5$data;

        if (data.length === 0) {
          this.baobabOptMgr.find();
        }
      }
    }
  }]);
  return WFieldSelectView;
}(_WFieldView3.default);

// ------------------- //


exports.default = WFieldSelectView;
// ------------------- //

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(71);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Lodash = __webpack_require__(6);

var _WFieldView2 = __webpack_require__(59);

var _WFieldView3 = _interopRequireDefault(_WFieldView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS STRING FIELD VIEW ------------------- //

// ------------------- //

var WFieldStringView = function (_WFieldView) {
  (0, _inherits3.default)(WFieldStringView, _WFieldView);

  /**
   * Constructor
   * @param value instance of WFString
   */
  function WFieldStringView(value) {
    (0, _classCallCheck3.default)(this, WFieldStringView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFieldStringView.__proto__ || (0, _getPrototypeOf2.default)(WFieldStringView)).call(this, value));

    _this.initialState = (0, _defineProperty3.default)({}, value.key, value.get());
    return _this;
  }

  /**
   * Before init set default value
   * @next super.init()
   */


  (0, _createClass3.default)(WFieldStringView, [{
    key: 'init',
    value: function init(args) {
      var field = args.field,
          _args$schema = args.schema,
          schema = _args$schema === undefined ? {} : _args$schema;

      if (!this.isInit && !field.hasValue() && schema.hasOwnProperty(this.value.getKey())) {
        this.value.set(schema[this.value.getKey()]);
        this.change({ eventArgs: (0, _defineProperty3.default)({}, this.value.getKey(), this.value.get()) });
      }
      (0, _get3.default)(WFieldStringView.prototype.__proto__ || (0, _getPrototypeOf2.default)(WFieldStringView.prototype), 'init', this).call(this, args);
    }
  }]);
  return WFieldStringView;
}(_WFieldView3.default);
// ------------------- //


exports.default = WFieldStringView;
// ------------------- //

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _concat = __webpack_require__(124);

var _concat2 = _interopRequireDefault(_concat);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFConsole = __webpack_require__(61);

var _WFConsole2 = _interopRequireDefault(_WFConsole);

var _WFEvents = __webpack_require__(237);

var _WFEvents2 = _interopRequireDefault(_WFEvents);

var _WFViewMgr = __webpack_require__(91);

var _WFViewMgr2 = _interopRequireDefault(_WFViewMgr);

var _WFNumber = __webpack_require__(60);

var _WFNumber2 = _interopRequireDefault(_WFNumber);

var _WFString = __webpack_require__(48);

var _WFString2 = _interopRequireDefault(_WFString);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _WFormState = __webpack_require__(26);

var _WFormState2 = _interopRequireDefault(_WFormState);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormViewClient = __webpack_require__(224);

var _WFormViewClient2 = _interopRequireDefault(_WFormViewClient);

var _WFormViewAction = __webpack_require__(223);

var _WFormViewAction2 = _interopRequireDefault(_WFormViewAction);

var _WFormViewHelpers = __webpack_require__(226);

var _WFormViewHelpers2 = _interopRequireDefault(_WFormViewHelpers);

var _Lodash = __webpack_require__(6);

var _WFInitialState = __webpack_require__(216);

var _WFInitialState2 = _interopRequireDefault(_WFInitialState);

var _WFEventTypes = __webpack_require__(9);

var _WFConstants = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDemo = false;
if (__WF__.hasOwnProperty("DEMO")) {
  isDemo = __WF__.DEMO;
}

/**
 * Holds form view 
 */

var WFormView = function () {
  /**
   * Constructor
   * this.formState instance of WFormState
   * this.events is the mediator events
   * this.viewMgr manage state and components
   * this.currentFields contain all display field state
   * this.defaultConfig contains {settingConfig, stepConfig, contentConfig}
   * this.isValid check if values is valid
   * this.isInit when this instance is init is true
   * this.isAdmin if env is wfadmin
   * this.isDemo if env is demo
   */
  function WFormView(formState) {
    var _context;

    var isAdmin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var defaultConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck3.default)(this, WFormView);

    this.name = formState.getName();
    this.formState = formState;
    this.events = new _WFEvents2.default('formView');
    this.viewMrg = new _WFViewMgr2.default(_WFInitialState2.default);
    this.defaultConfig = defaultConfig;
    // CONDITION
    this.isValid = true;
    this.isInit = false;
    this.isAdmin = isAdmin;
    this.isDemo = isDemo;
    this.ignoreValidator = false;
    // Fields
    this.currentFields = new _WFObject2.default();
    this.fieldsHidden = new _WFArray2.default();
    this.fieldsDisable = new _WFArray2.default();
    this.fieldsValid = new _WFObject2.default();
    this.fieldsCondition = {};
    this.fieldsMonkey = {};
    // Status
    this.status = new _WFNumber2.default({
      value: _WFConstants.WF_STATUS_LOADING
    });
    // Actions
    this.actions = new _WFormViewAction2.default(formState.getActions());
    // Settings Managers
    this.settings = null;
    this.steps = null;
    this.contents = null;
    this.analytics = null;
    /**
     * Subscribe to an evenType (Listner)
     * Set callback in evenType's queue
     * exemple : this.sub("say_msg",(msg) => alert(msg)) 
     * @param evenType string 
     * @param fn callback
     */
    this.sub = (_context = this.events).sub.bind(_context);
    /**
     * Publish an evenType (Emiter)
     * exemple : this.pub("say_msg","Hello world...") 
     * @param evenType string 
     */
    this.pub = (_context = this.events).pub.bind(_context);
    // Use by editor
    this.editorObserver = null;
    // Init formView
    _WFormViewHelpers2.default.init(this);
  }

  // ACTION ------------- //

  /**
   * Change status to loading
   */


  (0, _createClass3.default)(WFormView, [{
    key: 'onLoad',
    value: function onLoad() {
      this.setStatus(_WFConstants.WF_STATUS_LOADING);
    }

    /**
     * Change status to loading then to edit
     * @param delay
     * @param step
     */

  }, {
    key: 'onReload',
    value: function onReload() {
      var _this = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var stepIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (delay > 0) {
        this.onLoad();
      }
      this.fieldsValid.clear();
      this.changeResults();
      _WFormViewHelpers2.default.createFieldMonkey(this);
      setTimeout(function () {
        _this.onSelectByIndex(stepIndex);
        _this.onEdit();
      }, delay);
    }

    /**
     * Select prev step
     */

  }, {
    key: 'onPrev',
    value: function onPrev() {
      this.getStepMgr().prev();
      this.validatorClear();
      this.changeStepStatus();
    }

    /**
     * Select next step
     */

  }, {
    key: 'onNext',
    value: function onNext() {
      this.getStepMgr().next();
      this.validatorClear();
      this.changeStepStatus();
    }

    /**
     * Select step by id
     * @param id
     */

  }, {
    key: 'onSelect',
    value: function onSelect(id) {
      this.getStepMgr().select(id);
      this.validatorClear();
      this.changeStepStatus();
    }

    /**
     * Select step by index
     * @param id
     */

  }, {
    key: 'onSelectByIndex',
    value: function onSelectByIndex(index) {
      if ((0, _Lodash.isNumber)(index)) {
        this.getStepMgr().selectByIndex(index);
        this.validatorClear();
        this.changeStepStatus();
      }
    }

    /**
     * Change status to edit
     */

  }, {
    key: 'onEdit',
    value: function onEdit() {
      this.changeResults();
      this.setStatus(_WFConstants.WF_STATUS_EDITING);
      this.pub(_WFEventTypes.WF_EVENT_ONEDIT);
    }

    /**
     * Submit values
     * @param next callback {onError, onSuccess} is optional for external manager
     */

  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var _this2 = this;

      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.formState.getPublished()) {
        if (next) {
          _WFormViewClient2.default.save(this.formState, this.isAdmin, next);
        } else {
          if (!this.isAdmin && !_WFormState2.default.hasLicense(this.getFormState())) {
            this.onError(this.getActionMgr().getMessage("error403"));
          } else if (this.isDemo) {
            this.onLoad();
            setTimeout(function () {
              _this2.onPublish({ id: 9999 }, _this2.getValues());
            }, 1000);
          } else {
            var values = this.getValues();
            this.onLoad();
            this.pub(_WFEventTypes.WF_EVENT_ONSUBMIT, values);
            _WFormViewClient2.default.save(this.formState, this.isAdmin, {
              onError: function onError(error) {
                return _this2.onPublish(null, null, error);
              },
              onSuccess: function onSuccess(entry) {
                return _this2.onPublish(entry, values);
              }
            });
          }
        }
      } else {
        console.error("Published your form before...");
        this.onNext();
      }
    }

    /**
     * Execute actions and dispatch results 
     * @param entry
     * @param values
     */

  }, {
    key: 'onPublish',
    value: function onPublish(entry, values) {
      var _this3 = this;

      var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      this.pub(_WFEventTypes.WF_EVENT_ONPUBLISH, entry);
      this.actions.execute(this, entry, values, error, {
        onError: function onError(errorRes) {
          return _this3.onError(errorRes);
        },
        onSuccess: function onSuccess(successRes) {
          return _this3.onSuccess(successRes);
        }
      });
    }

    /**
     * Change status to error and manage error
     * @param error
     */

  }, {
    key: 'onSuccess',
    value: function onSuccess(successRes) {
      this.changeResults(successRes);
      this.setStatus(_WFConstants.WF_STATUS_SUCCESS);
      this.pub(_WFEventTypes.WF_EVENT_ONSUCCESS, successRes);
    }

    /**
     * Change status to error and manage error
     * @param errorRes 
     */

  }, {
    key: 'onError',
    value: function onError(errorRes) {
      this.changeResults(errorRes);
      this.setStatus(_WFConstants.WF_STATUS_ERROR);
      this.pub(_WFEventTypes.WF_EVENT_ONERROR, errorRes);
    }

    /**
     * Reset formState values and status
     */

  }, {
    key: 'onClear',
    value: function onClear() {
      this.formState.clearValues();
      this.formState.setEntryId(0);
      this.onReload(0);
    }

    // COMPONENTS EVENTS ------------- //


    /**
     * Called each time an event occrured in the form component
     * main entry point for components
     * @param evenType the event type
     * @param eventArgs the event args
     */

  }, {
    key: 'on',
    value: function on(evenType) {
      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


      // todo remove
      // WFConsole.valDir(`${this.name}`, `on.${evenType}`, eventArgs);

      if (evenType) {
        switch (evenType) {

          case _WFEventTypes.WF_EVENT_ONCHANGE:
            this.change(eventArgs);
            break;

          case _WFEventTypes.WF_EVENT_ONREADY:
            this.ready();
            break;

          case _WFEventTypes.WF_EVENT_ONLOAD:
            this.onLoad();
            break;

          case _WFEventTypes.WF_EVENT_ONWILLMOUNT:
            this.viewMrg.willMount(eventArgs);
            break;

          case _WFEventTypes.WF_EVENT_ONDIDMOUNT:
            this.setStatus(_WFConstants.WF_STATUS_EDITING);
            break;

          case _WFEventTypes.WF_EVENT_ONWILLUNMOUNT:
            this.viewMrg.willUnMount(eventArgs);
            break;

          default:
            this.pub(evenType, eventArgs);
        }
      }
    }

    /**
     * Called each time an event occrured in the field component
     * main entry point for field components
     * @param fieldName
     * @param evenType the event type
     * @param eventArgs the event args
     */

  }, {
    key: 'onField',
    value: function onField(fieldName, evenType, eventArgs) {
      var ctx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};


      // todo remove
      // WFConsole.valDir(`${fieldName}`, `on.${evenType}`, eventArgs);

      var fld = this.getField(fieldName);
      if (fld) {
        fld.on(evenType, eventArgs, ctx);
      }
    }

    // MANAGER ------------- //


  }, {
    key: 'getSettingMgr',
    value: function getSettingMgr() {
      return this.settings;
    }
  }, {
    key: 'getStepMgr',
    value: function getStepMgr() {
      return this.steps;
    }
  }, {
    key: 'getContentMgr',
    value: function getContentMgr() {
      return this.contents;
    }
  }, {
    key: 'getActionMgr',
    value: function getActionMgr() {
      return this.actions;
    }

    // MANAGE STATE ------------- //


    /**
     * Call Change to set value in state
     * @param newVal object
     */

  }, {
    key: 'change',
    value: function change() {
      var newVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.viewMrg.change(newVal);
    }

    /**
     * Call Ready to force update state if in form editor
     */

  }, {
    key: 'ready',
    value: function ready() {
      this.viewMrg.ready();
    }

    /**
     * load/Change Setting in state
     */

  }, {
    key: 'changeSetting',
    value: function changeSetting() {
      this.change(this.getSettingMgr().get());
    }

    /**
     * load/Change current status in state
     */

  }, {
    key: 'changeStatus',
    value: function changeStatus() {
      this.change({
        status: this.getStatus()
      });
    }

    /**
     * load/Change current results in state
     */

  }, {
    key: 'changeResults',
    value: function changeResults() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.change((0, _defineProperty3.default)({}, _WFConstants.WF_RESULTS, context));
    }

    /**
     * load/Change current results in state
     */

  }, {
    key: 'changeCustomResults',
    value: function changeCustomResults() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.change((0, _defineProperty3.default)({}, _WFConstants.WF_CUSTOM_RESULTS, context));
    }

    /**
     * load/Change current validator status in state
     */

  }, {
    key: 'changeIsValid',
    value: function changeIsValid() {
      this.change({
        isValid: this.isValid
      });
      this.pub(_WFEventTypes.WF_EVENT_ONVALIDATE, this.isValid);
    }

    /**
     * Change current step in state
     */

  }, {
    key: 'changeStepStatus',
    value: function changeStepStatus() {
      this.change({
        stepOrder: this.getStepMgr().getOrder(),
        currentStep: this.getStepMgr().getCurrent(),
        currentStepValue: this.getStepMgr().get(),
        currentStepIndex: this.getStepMgr().getCurrentIndex()
      });
    }

    /**
     * Change Steps details in state
     */

  }, {
    key: 'changeSteps',
    value: function changeSteps() {
      this.change({
        steps: this.getStepMgr().getSchema()
      });
    }

    /**
     * Change Contents in state
     */

  }, {
    key: 'changeContent',
    value: function changeContent() {
      this.change({
        contents: this.getContentMgr().getValue()
      });
    }

    /**
     * Change Fields details in state
     */

  }, {
    key: 'changeFields',
    value: function changeFields() {
      this.change({
        fieldSchema: this.getFormState().getFieldSchema(),
        display_fields: this.getDisplayFields()
      });
    }

    /**
     * Change Fields status in state
     */

  }, {
    key: 'changeFieldStatus',
    value: function changeFieldStatus() {
      this.change({
        fieldsHidden: this.getFieldsHidden(),
        fieldsDisable: this.getFieldsDisable()
      });
    }

    /**
     * Set the state 
     * @param args object
     */

  }, {
    key: 'setState',
    value: function setState(args) {
      this.viewMrg.setState(args);
    }

    // MANAGE THEME ------------- //


    /**
     * Set current theme 
     */

  }, {
    key: 'setTheme',
    value: function setTheme(theme, setting) {
      this.getSettingMgr().select(theme, setting);
      this.changeSetting();
    }

    // MANAGE STATUS ------------- //


    /**
     * Set current status 
     * @param status string
     */

  }, {
    key: 'setStatus',
    value: function setStatus(status) {
      if ((0, _Lodash.isNumber)(status) && [_WFConstants.WF_STATUS_ERROR, _WFConstants.WF_STATUS_LOADING, _WFConstants.WF_STATUS_EDITING, _WFConstants.WF_STATUS_SUCCESS, _WFConstants.WF_STATUS_CUSTOM].includes(status)) {
        this.status.set(status);
        this.changeStatus();
      }
    }

    /**
     * Get current status 
     */

  }, {
    key: 'getStatus',
    value: function getStatus() {
      return this.status.get();
    }

    // MANAGE VALIDITON ------------- //


    /**
     * Get the form status (valid || not)
     * @param next callback
     * return boolean in callback(status)
     */

  }, {
    key: 'validate',
    value: function validate() {
      var _this4 = this;

      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.ignoreValidator) {
        this.isValid = true;
        this.changeIsValid();
      } else {
        var count = 0;
        this.fieldsValid.each(function (k, v, i, l) {
          if (v === true) {
            count++;
          }
          if (i === l) {
            _this4.isValid = count === l;
            _this4.changeIsValid();
          }
        });
      }
    }

    /**
     * Reset valid status by default
     */

  }, {
    key: 'validatorClear',
    value: function validatorClear() {
      this.isValid = true;
      this.changeIsValid();
    }

    // MANAGE FIELDS ------------- //


    /**
     * Check field is valid by name
     * @param fieldName string
     * @return boolean
     */

  }, {
    key: 'fieldIsValid',
    value: function fieldIsValid(fieldName) {
      return this.fieldsValid.get(fieldName);
    }

    /**
     * Check field is hidden by name
     * @param fieldName string
     * @return boolean
     */

  }, {
    key: 'fieldIsHidden',
    value: function fieldIsHidden(fieldName) {
      return this.fieldsHidden.has(fieldName);
    }

    /**
     * Check field is disable by name
     * @param fieldName string
     * @return boolean
     */

  }, {
    key: 'fieldIsDisable',
    value: function fieldIsDisable(fieldName) {
      return this.fieldsDisable.has(fieldName);
    }

    /**
     * Get current field by name
     * @param fieldName string
     * @return fieldInput object
     */

  }, {
    key: 'hasCurrentField',
    value: function hasCurrentField(fieldName) {
      return this.currentFields.has(fieldName);
    }

    /**
     * Get current field by name
     * @param fieldName string
     * @return fieldInput object
     */

  }, {
    key: 'getCurrentField',
    value: function getCurrentField(fieldName) {
      if (this.hasCurrentField(fieldName)) {
        return this.currentFields.get(fieldName);
      }
    }

    /**
     * Get hidden fields
     * @return object
     */

  }, {
    key: 'getCurrentFields',
    value: function getCurrentFields() {
      return this.currentFields.getValue();
    }

    /**
     * Get hidden fields
     * @return array
     */

  }, {
    key: 'getFieldsHidden',
    value: function getFieldsHidden() {
      return this.fieldsHidden.getValue();
    }

    /**
     * Get disable fields
     * @return array
     */

  }, {
    key: 'getFieldsDisable',
    value: function getFieldsDisable() {
      return this.fieldsDisable.getValue();
    }

    /**
     * Set fieldInput
     * @param fieldName string
     * @param fieldState object
     */

  }, {
    key: 'setCurrentField',
    value: function setCurrentField(fieldName, fieldInput) {
      this.currentFields.set((0, _defineProperty3.default)({}, fieldName, fieldInput));
    }

    /**
     * Unset fieldInput by fieldName
     * @param fieldName string
     */

  }, {
    key: 'unsetCurrentField',
    value: function unsetCurrentField(fieldName) {
      this.currentFields.unset(fieldName);
    }

    /**
     * Active field disable by name
     * @param fieldName string
     */

  }, {
    key: 'fieldActive',
    value: function fieldActive(fieldNames) {
      var _this5 = this;

      this.fieldsDisable.delete(fieldNames, function () {
        return _this5.changeFieldStatus();
      });
    }

    /**
     * Disable field active by name
     * @param fieldName string
     */

  }, {
    key: 'fieldDisable',
    value: function fieldDisable(fieldNames) {
      var _this6 = this;

      this.fieldsDisable.insert(fieldNames, function () {
        return _this6.changeFieldStatus();
      });
    }

    /**
     * Display field hidden by name
     * @param fieldName string
     */

  }, {
    key: 'fieldDisplay',
    value: function fieldDisplay(fieldNames) {
      var _this7 = this;

      this.fieldsHidden.delete(fieldNames, function () {
        return _this7.changeFieldStatus();
      });
    }

    /**
     * Hidden field display by name
     * @param fieldName string
     */

  }, {
    key: 'fieldHidden',
    value: function fieldHidden(fieldNames) {
      var _this8 = this;

      this.fieldsHidden.insert(fieldNames, function () {
        return _this8.changeFieldStatus();
      });
    }

    // FIELD VALIDATION ------------- //


    /**
     * Set field status (valid || not)
     * @param fieldName string
     * @param fieldInput object
     */

  }, {
    key: 'setValidField',
    value: function setValidField(fieldName) {
      var isValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var onChecked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if ((0, _Lodash.isBoolean)(isValid)) {
        this.fieldsValid.set((0, _defineProperty3.default)({}, fieldName, isValid));
      } else {
        this.fieldsValid.set((0, _defineProperty3.default)({}, fieldName, false));
      }
      if (onChecked) {
        this.validate();
      }
    }
  }, {
    key: 'unsetValidField',
    value: function unsetValidField(fieldName) {
      this.fieldsValid.unset(fieldName);
    }

    // FIELD CONDITION ------------- //


    /**
     * Set field condition if exist
     * @param fieldName string
     * @param fieldInput 
     */

  }, {
    key: 'setFieldCondition',
    value: function setFieldCondition(fieldName, fieldInput) {
      var _this9 = this;

      if (fieldInput.condition && !this.fieldsCondition.hasOwnProperty(fieldName)) {
        this.fieldsCondition[fieldName] = true;
        this.sub(_WFConstants.WF_VALUES_CHANGE, function (values) {
          fieldInput.condition.watch(values, function (action, args) {
            _this9.pub(_WFConstants.WF_FIELD_CONDITION, { fieldName: fieldName, action: action, args: args });
            var event = _WFormViewHelpers2.default.getFieldAction({
              fieldName: fieldName,
              fieldInput: fieldInput,
              action: action,
              values: values,
              args: args
            });
            if (event) {
              event(_this9);
            }
          });
        });
        this.pub(_WFConstants.WF_VALUES_CHANGE);
      }
    }

    // VALUES NOTIFICATION ------------- //


    /**
     * Publish all fields values mapped by name
     * @notify object values
     */

  }, {
    key: 'valuesChange',
    value: function valuesChange() {
      var values = {};
      var fields = this.formState.getFields();
      for (var key in fields) {
        var fld = fields[key];
        var fldName = fld.getName();
        values[fldName] = fld.getValue();
      }
      this.pub(_WFConstants.WF_VALUES_CHANGE, values);
    }

    // FORM STATE ------------- //


    /**
     * Get the form state
     */

  }, {
    key: 'getFormState',
    value: function getFormState() {
      return this.formState;
    }

    /**
     * Set all fields values
     */

  }, {
    key: 'setValues',
    value: function setValues(val) {
      this.getFormState().setValues(val);
    }

    /**
     * Get all fields values
     */

  }, {
    key: 'getValues',
    value: function getValues() {
      return this.getFormState().getValues();
    }

    /**
     * Get all fields mapped by name
     */

  }, {
    key: 'getFields',
    value: function getFields() {
      return this.getFormState().getFields();
    }

    /**
     * Get field by name
     * @param name the field name
     * @return WFormField if found else return null
     */

  }, {
    key: 'getField',
    value: function getField(fieldName) {
      return this.getFormState().getField(fieldName);
    }

    /**
     * Add fields
     * @param fields the array of fields to add
     * ex 
     * fields = [{
     * "name": "subject",
     * "type": "string",
     * "input_type": "",
     * "len": 32,
     * "label": "Name",
     * "required": true,
     * "searchable": true,
     * "create_column": true
     * },{
     *  "name": "message",
     *  "type": "text",
     *  "input_type": "",
     *  "len": 65555,
     *  "label": "Attributes",
     *  "required": false,
     *  "searchable": false,
     *  "create_column": true
     * }]
     * 
     */

  }, {
    key: 'addFields',
    value: function addFields(fields) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if ((0, _Lodash.isArray)(fields)) {
        var l = fields.length;
        for (var i = 0; i < l; i++) {
          this.createOrUpdateField(fields[i]);
          if (i === l - 1) {
            if ((0, _Lodash.isFunction)(next)) {
              next();
            }
          }
        }
      }
    }

    /**
     * Delete field
     * @param name the field name
     */

  }, {
    key: 'deleteField',
    value: function deleteField(name) {
      this.getFormState().deleteField(name);
    }

    /**
     * Delete field
     * @param name the field name
     */

  }, {
    key: 'clearField',
    value: function clearField(name) {
      var fld = this.getFormState().getField(name);
      if (fld) {
        fld.clearValue();
      }
    }

    /**
     * Create or update form field
     * config should contains a valid name, label, type and
     * len when creating new field
     * @param config the field schema
     * @return the created/updated field or null
     */

  }, {
    key: 'createOrUpdateField',
    value: function createOrUpdateField(config) {
      var isNewFld = false;
      var fld = this.getFormState().createOrUpdateField(config);
      if (!this.getFormState().getField()) {
        isNewFld = true;
      }
      if (isNewFld) {
        _WFormViewHelpers2.default.observeField(this, fld);
      }
    }

    /**
     * Get display fields
     */

  }, {
    key: 'getDisplayFields',
    value: function getDisplayFields() {
      return this.getFormState().getDisplayFields();
    }

    /**
     * Create displayfield by step.schema
     */

  }, {
    key: 'generateDisplayFields',
    value: function generateDisplayFields() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var schema = this.getStepMgr().getSchema();
      var displayFields = schema.reduce(function (memo, step) {
        var _step$order = step.order,
            order = _step$order === undefined ? [] : _step$order;

        return (0, _concat2.default)(memo, order.filter(function (c) {
          return !parseInt(c);
        }));
      }, []);
      this.setDisplayFields(displayFields);
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    /**
     * Set display fields
     * @param displayFields the ordered list of fields to display in views
     */

  }, {
    key: 'setDisplayFields',
    value: function setDisplayFields(displayFields) {
      if ((0, _Lodash.isArray)(displayFields)) {
        this.getFormState().setDisplayFields(displayFields);
        this.displayFieldsChange();
      }
    }

    /**
     * Set display fields
     * @param displayFields the ordered list of fields to display in views
     */

  }, {
    key: 'displayFieldsChange',
    value: function displayFieldsChange() {
      this.change((0, _defineProperty3.default)({}, _WFConstants.WF_DISPLAY_FIELDS, this.getDisplayFields()));
      this.changeFields();
    }

    /**
     * Set Editor observer whend the state is ready
     * @param callback(state)
     */

  }, {
    key: 'setEditorObserver',
    value: function setEditorObserver(callback) {
      this.editorObserver = callback;
    }
  }]);
  return WFormView;
}();

exports.default = WFormView;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFormResultsAnalytic = __webpack_require__(169);

var _WFormResultsAnalytic2 = _interopRequireDefault(_WFormResultsAnalytic);

var _wfanalytics = __webpack_require__(207);

var _wfanalytics2 = _interopRequireDefault(_wfanalytics);

var _WFUrl = __webpack_require__(41);

var _WFUrl2 = _interopRequireDefault(_WFUrl);

var _WFValue = __webpack_require__(32);

var _WFValue2 = _interopRequireDefault(_WFValue);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _WFActionConstants = __webpack_require__(205);

var _WFActionConstants2 = _interopRequireDefault(_WFActionConstants);

var _Lodash = __webpack_require__(6);

var _WFConstants = __webpack_require__(30);

var _WFProductType = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getConstants = (0, _WFActionConstants2.default)(),
    WF_PUBLISH_ENTRY_ID = _getConstants.WF_PUBLISH_ENTRY_ID,
    WF_SUCCESS_MESSAGE_ID = _getConstants.WF_SUCCESS_MESSAGE_ID,
    WF_ERROR_MESSAGE_ID = _getConstants.WF_ERROR_MESSAGE_ID,
    WF_MAIL_NOTIFICATION_ID = _getConstants.WF_MAIL_NOTIFICATION_ID,
    WF_REDIRECT_ID = _getConstants.WF_REDIRECT_ID,
    WF_FILE_DOWNLOAD_ID = _getConstants.WF_FILE_DOWNLOAD_ID,
    WF_NEXUS_STRATEGY_ID = _getConstants.WF_NEXUS_STRATEGY_ID,
    WF_FORM_ANALYTICS_ID = _getConstants.WF_FORM_ANALYTICS_ID,
    WF_FIELDS_ANALYTICS_ID = _getConstants.WF_FIELDS_ANALYTICS_ID,
    WF_PUBLISH_ENTRY_NAME = _getConstants.WF_PUBLISH_ENTRY_NAME,
    WF_SUCCESS_MESSAGE_NAME = _getConstants.WF_SUCCESS_MESSAGE_NAME,
    WF_ERROR_MESSAGE_NAME = _getConstants.WF_ERROR_MESSAGE_NAME,
    WF_MAIL_NOTIFICATION_NAME = _getConstants.WF_MAIL_NOTIFICATION_NAME,
    WF_REDIRECT_NAME = _getConstants.WF_REDIRECT_NAME,
    WF_FILE_DOWNLOAD_NAME = _getConstants.WF_FILE_DOWNLOAD_NAME,
    WF_NEXUS_STRATEGY_NAME = _getConstants.WF_NEXUS_STRATEGY_NAME,
    WF_FORM_ANALYTICS_NAME = _getConstants.WF_FORM_ANALYTICS_NAME,
    WF_FIELDS_ANALYTICS_NAME = _getConstants.WF_FIELDS_ANALYTICS_NAME;

var SUCCESS = "success";
var ERROR_404 = "error404";
var ERROR_403 = "error403";
var FIELD_ANALYTICS_SINGLE = "fieldAnalyticsSingle";
var FIELD_ANALYTICS_GLOBAL = "fieldAnalyticsGlobal";

var WFormViewAction = function () {
  /**
   * Constructor
   * this.messages is object contains all success and all error message 
   * this.values is object contains all actions
   */
  function WFormViewAction() {
    var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    (0, _classCallCheck3.default)(this, WFormViewAction);


    this.messages = new _WFObject2.default();
    this.context = new _WFObject2.default();
    this.init(actions);
  }

  /**
   * Add actions
   * @param actions the array of action to add
   */


  (0, _createClass3.default)(WFormViewAction, [{
    key: 'init',
    value: function init(actions) {
      if ((0, _Lodash.isArray)(actions)) {
        var l = actions.length;
        for (var i = 0; i < l; i++) {
          this.createOrUpdate(actions[i]);
        }
      }
    }

    /**
     * Create or update form action
     * @param config the action schema
     */

  }, {
    key: 'createOrUpdate',
    value: function createOrUpdate(config) {
      var configValues = _WFValue2.default.getValues(config);
      var action_id = configValues.action_id,
          _configValues$message = configValues.message,
          message = _configValues$message === undefined ? "" : _configValues$message,
          _configValues$btnLabe = configValues.btnLabel,
          btnLabel = _configValues$btnLabe === undefined ? "" : _configValues$btnLabe;

      switch (config.action_id) {

        case WF_SUCCESS_MESSAGE_ID:
          var success_title = configValues.success_title,
              success_message = configValues.success_message;

          this.setMessage(SUCCESS, {
            title: success_title,
            message: success_message
          });
          break;

        case WF_ERROR_MESSAGE_ID:
          var err404_title = configValues.err404_title,
              err404_message = configValues.err404_message,
              maintenance_title = configValues.maintenance_title,
              maintenance_message = configValues.maintenance_message;

          this.setMessage(ERROR_404, {
            title: err404_title,
            message: err404_message
          });
          this.setMessage(ERROR_403, {
            title: maintenance_title,
            message: maintenance_message
          });
          break;

        case WF_FIELDS_ANALYTICS_ID:
          var _configValues$btnLabe2 = configValues.btnLabelSingle,
              btnLabelSingle = _configValues$btnLabe2 === undefined ? "" : _configValues$btnLabe2,
              _configValues$btnLabe3 = configValues.btnLabelGlobal,
              btnLabelGlobal = _configValues$btnLabe3 === undefined ? "" : _configValues$btnLabe3,
              _configValues$globalR = configValues.globalResultsTitle,
              globalResultsTitle = _configValues$globalR === undefined ? "" : _configValues$globalR,
              _configValues$globalR2 = configValues.globalResultsMessage,
              globalResultsMessage = _configValues$globalR2 === undefined ? "" : _configValues$globalR2,
              _configValues$singleR = configValues.singleResultIsPublic,
              singleResultIsPublic = _configValues$singleR === undefined ? false : _configValues$singleR,
              _configValues$globalR3 = configValues.globalResultIsPublic,
              globalResultIsPublic = _configValues$globalR3 === undefined ? false : _configValues$globalR3;

          if (globalResultIsPublic) {
            this.setContext(FIELD_ANALYTICS_GLOBAL, {
              btnLabel: btnLabelGlobal,
              title: globalResultsTitle,
              message: globalResultsMessage
            });
          }
          break;

        case WF_REDIRECT_ID:
          var to = configValues.to,
              delay = configValues.delay;

          this.setMessage(WF_REDIRECT_ID, message);
          this.setContext(WF_REDIRECT_ID, { delay: delay, to: to });
          break;

        case WF_FILE_DOWNLOAD_ID:
          var files = configValues.files;

          this.setMessage(WF_FILE_DOWNLOAD_ID, message);
          this.setContext(WF_FILE_DOWNLOAD_ID, { fileURL: files, btnLabel: btnLabel });
          break;

        case WF_NEXUS_STRATEGY_ID:
          break;
      }
    }

    /**
     * Create new message
     * @param msgKey is message key 
     * @param msgValues is object contains {title, message}
     */

  }, {
    key: 'setMessage',
    value: function setMessage(msgKey, msgValues) {
      this.messages.set((0, _defineProperty3.default)({}, msgKey, msgValues));
    }

    /**
     * Get message
     * @param msgKey is message key 
     * @return msgValues is object contains {title, message}
     */

  }, {
    key: 'getMessage',
    value: function getMessage(msgKey) {
      return this.messages.get(msgKey);
    }

    /**
     * Create new context
     * @param key is context key 
     * @param ctx is object contains {...args}
     */

  }, {
    key: 'setContext',
    value: function setContext(key, ctx) {
      this.context.set((0, _defineProperty3.default)({}, key, ctx));
    }

    /**
     * Get context
     * @param key is context key 
     * @return ctx is object contains {...args}
     */

  }, {
    key: 'getContext',
    value: function getContext(key) {
      return this.context.get(key);
    }

    /**
     * Execute the mass actions
     * @param formView 
     * @param entry 
     * @param values
     * @param err
     * @param next callback {onSuccess, onError}
     */

  }, {
    key: 'execute',
    value: function execute(formView, entry, values, err) {
      var next = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var onError = next.onError,
          onSuccess = next.onSuccess;

      var context = {};
      if ((0, _Lodash.isObject)(err)) {

        // ERRORS ACTIONS --------- //

        var hasErr = err.hasErr,
            _err$res = err.res,
            res = _err$res === undefined ? [] : _err$res;
        // 1/ Entry Errors

        if ((0, _Lodash.isArray)(res) && res.length > 0) {
          WFormViewAction.getEntryErrors(context, formView, err);
        }
        // 2/ Maintenance Mode
        /*
        else if () {
          context = this.getMessage(ERROR_403);
        }
        */
        // 3/ Error 404
        else {
            context = this.getMessage(ERROR_404);
          }

        //results = this.getMessage(ERROR_403);
        onError(context);
      } else {

        // SUCCESS ACTIONS --------- //

        context = this.getMessage(SUCCESS);
        var messages = [];
        var actions = [];

        // 1/ Redirect
        if (this.context.has(WF_FILE_DOWNLOAD_ID)) {
          var _getContext = this.getContext(WF_FILE_DOWNLOAD_ID),
              fileURL = _getContext.fileURL,
              btnLabel = _getContext.btnLabel;

          messages.push(this.getMessage(WF_FILE_DOWNLOAD_ID));
          actions.push({
            label: btnLabel,
            onClick: function onClick() {
              WFormViewAction.onFileDownload(fileURL);
            }
          });
        }

        // 2/ File Upload
        if (this.context.has(WF_REDIRECT_ID)) {
          var _getContext2 = this.getContext(WF_REDIRECT_ID),
              delay = _getContext2.delay,
              to = _getContext2.to;

          if (!delay) {
            WFormViewAction.onRedirect(to);
            return;
          } else {
            WFormViewAction.onRedirect(to, delay);
            messages.push(this.getMessage(WF_REDIRECT_ID));
          }
        }

        // 3/ Fields Analytics 
        /*
        if (this.context.has(FIELD_ANALYTICS_SINGLE)) {
          const {
            btnLabel = ""
          } = this.getContext(FIELD_ANALYTICS_SINGLE);
          actions.push({
            label: btnLabel,
            onClick: () => {
              console.error(btnLabel);
               // formView
            }
          });
        }*/
        if (this.context.has(FIELD_ANALYTICS_GLOBAL)) {
          var _entry$opt_count = entry.opt_count,
              opt_count = _entry$opt_count === undefined ? [] : _entry$opt_count;

          var _getContext3 = this.getContext(FIELD_ANALYTICS_GLOBAL),
              title = _getContext3.title,
              message = _getContext3.message,
              _btnLabel = _getContext3.btnLabel;

          actions.push({
            label: _btnLabel,
            onClick: function onClick() {
              WFormViewAction.onCustomResults(formView, {
                title: title,
                message: message,
                className: "wf-results-analytics",
                icon: "piechart",
                getCustomComponent: function getCustomComponent(component) {
                  return WFormViewAction.onAnalyticsResults(formView, component, opt_count);
                }
              });
            }
          });
        }

        if (formView.isAdmin || formView.isDemo) {
          actions.push({
            label: "Edit form",
            onClick: function onClick() {
              return formView.onEdit();
            }
          });
        }

        // 4/ ...

        context["messages"] = messages;
        context["actions"] = actions;

        // DEBUG

        console.warn("SUCCESS.... test");
        console.dir(context);
        console.dir(entry);
        console.error(values);
        onSuccess(context);
      }
    }

    /**
     * Get entry errors
     */

  }], [{
    key: 'getEntryErrors',
    value: function getEntryErrors(context, formView, err) {
      var _err$res2 = err.res,
          res = _err$res2 === undefined ? [] : _err$res2;
      var _res$0$messages = res[0].messages,
          messages = _res$0$messages === undefined ? {} : _res$0$messages;

      context['title'] = "Error";
      context['message'] = "Field(s) is required";
      context['btnLabel'] = "Edit form";
      context['onEdit'] = function () {
        return formView.onEdit();
      };
      context['errors'] = (0, _keys2.default)(messages).map(function (key) {
        return messages[key]["msg"];
      });
    }

    /**
     * Redirect to url
     */

  }, {
    key: 'onRedirect',
    value: function onRedirect(to) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (!delay) {
        _WFUrl2.default.redirect(to);
      } else {
        setTimeout(function () {
          return _WFUrl2.default.redirect(to);
        }, parseInt(delay));
      }
    }

    /**
     * File download
     */

  }, {
    key: 'onFileDownload',
    value: function onFileDownload(fileURL) {
      if (fileURL) {
        _WFUrl2.default.download(fileURL);
      }
    }

    /**
     * Custom ResultComponent with custom component
     */

  }, {
    key: 'onCustomResults',
    value: function onCustomResults(formView) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      formView.changeCustomResults((0, _assign2.default)({
        onClose: function onClose() {
          formView.changeCustomResults({});
          formView.setStatus(_WFConstants.WF_STATUS_SUCCESS);
        }
      }, context));
      formView.setStatus(_WFConstants.WF_STATUS_CUSTOM);
    }

    /**
     * Analytics Results
     */

  }, {
    key: 'onAnalyticsResults',
    value: function onAnalyticsResults(formView, parentComponent) {
      var opt_count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];


      var onLoad = function onLoad() {
        var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        parentComponent.setState({
          loader: flag
        });
      };

      var setLabel = function setLabel() {
        var _WFAnalytics$mgr$getC = _wfanalytics2.default.mgr.getCurrentField(),
            _WFAnalytics$mgr$getC2 = _WFAnalytics$mgr$getC.label,
            label = _WFAnalytics$mgr$getC2 === undefined ? "" : _WFAnalytics$mgr$getC2;

        if (label) {
          parentComponent.setState({
            message: label
          });
        }
      };

      return _react2.default.createElement(_WFormResultsAnalytic2.default, {
        willMount: function willMount(c) {
          _wfanalytics2.default.mgr.init(formView.getFormState());
          _wfanalytics2.default.viewMgr.willMount(c);
          _wfanalytics2.default.mgr.mapOptionEntries(opt_count, function () {
            onLoad(false);
            setLabel();
          });
        },
        didMount: function didMount(c) {
          _wfanalytics2.default.viewMgr.didMount(c);
          c.props.onSelect(_wfanalytics2.default.mgr.getCurrentField());
        },
        willUnMount: function willUnMount(c) {
          _wfanalytics2.default.mgr.clear();
          _wfanalytics2.default.viewMgr.willUnMount(c);
        },
        onSelect: function onSelect(fieldSchema) {
          var _WFAnalytics$mgr$getS = _wfanalytics2.default.mgr.getState(),
              _WFAnalytics$mgr$getS2 = _WFAnalytics$mgr$getS.optionResults,
              optionResults = _WFAnalytics$mgr$getS2 === undefined ? [] : _WFAnalytics$mgr$getS2;

          var entry_id = fieldSchema.entry_id;

          _wfanalytics2.default.mgr.change({
            currentField: entry_id,
            currentFieldValue: fieldSchema
          });
          _wfanalytics2.default.mgr.setFieldOptions();
          setLabel();
          /*
          if (optionResults.length === 0) {
            onLoad();
            WFAnalytics.mgr.countOptionEntries({
              onError: (err) => {
                onLoad(false)
                console.error(err)
              }, 
              onSuccess: () => {
                onLoad(false)
                setLabel()
              }
            })
          } else {
           
            WFAnalytics.mgr.setFieldOptions();
            setLabel()
          }*/
        }
      });
    }
  }]);
  return WFormViewAction;
}();

exports.default = WFormViewAction;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFResponse = __webpack_require__(46);

var _WFResponse2 = _interopRequireDefault(_WFResponse);

var _WFUrl = __webpack_require__(41);

var _WFUrl2 = _interopRequireDefault(_WFUrl);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormViewClient = function () {
  function WFormViewClient() {
    (0, _classCallCheck3.default)(this, WFormViewClient);
  }

  (0, _createClass3.default)(WFormViewClient, null, [{
    key: "save",

    /**   
    * Save formState's values in db. Create it if not exists
    * @param formState
    * @param next {onSuccess, onError}
    **/
    value: function save(formState, isAppAdmin) {
      var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var urlArgs = {
        isAppAdmin: isAppAdmin,
        apiBaseUrl: _WFUrl2.default.getBaseUrl()
      };
      var _next$onError = next.onError,
          onError = _next$onError === undefined ? null : _next$onError,
          _next$onSuccess = next.onSuccess,
          onSuccess = _next$onSuccess === undefined ? null : _next$onSuccess;

      formState.save(urlArgs).then(function (res) {
        var wfRes = _WFResponse2.default.getSaveResponse(res);
        if (wfRes.getHasLogicErrors()) {
          if ((0, _Lodash.isFunction)(onError)) {
            onError({
              hasErr: wfRes.getHasLogicErrors(),
              err: wfRes.getLogicErrors(),
              res: wfRes.getResultset()
            });
          }
        } else {
          formState.setValues(wfRes.getResultset()[0]);
          if ((0, _Lodash.isFunction)(onSuccess)) {
            onSuccess(wfRes.getResultset()[0]);
          }
        }
      }).catch(function (error) {
        //Pub(WF_LOADER, false);
        console.error(error);
      });
    }
  }]);
  return WFormViewClient;
}();

exports.default = WFormViewClient;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

var _Constants = __webpack_require__(79);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormViewContent = function () {
  function WFormViewContent() {
    var contents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFormViewContent);

    this.key = "contentConfig";
    this.value = new _WFObject2.default({ value: contents });
  }

  (0, _createClass3.default)(WFormViewContent, [{
    key: 'getKey',
    value: function getKey() {
      return this.key;
    }

    /**
     * Get content by name
     * @param name
     * @return object
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.value.get(name);
    }

    /**
     * Create new content
     * @param args is object {name,cols}
     * @param attributes is object {...} 
     */

  }, {
    key: 'create',
    value: function create() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _args$name = args.name,
          name = _args$name === undefined ? null : _args$name,
          _args$cols = args.cols,
          cols = _args$cols === undefined ? _Constants.DEFAULT_COL_CONFIG : _args$cols,
          _args$isField = args.isField,
          isField = _args$isField === undefined ? false : _args$isField,
          _args$isIgnored = args.isIgnored,
          isIgnored = _args$isIgnored === undefined ? false : _args$isIgnored;

      var content = {
        name: name,
        cols: cols,
        isField: isField,
        isIgnored: isIgnored,
        attributes: attributes
      };
      if (!name) {
        content.name = (0, _Lodash.now)().toString();
      }
      this.value.set((0, _defineProperty3.default)({}, content.name, content));
      return content;
    }

    /**
     * Update new values or new attributes
     * @param name
     * @param obj is object
     * @param attributes is object {...} 
     */

  }, {
    key: 'assign',
    value: function assign(name) {
      var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.value.has(name)) {
        this.value.assign(name, obj);
      }
    }

    /**
     * Toggle content.isIgnored by name
     * @param name
     */

  }, {
    key: 'ignore',
    value: function ignore(name) {
      var _get = this.get(name),
          _get$isIgnored = _get.isIgnored,
          isIgnored = _get$isIgnored === undefined ? false : _get$isIgnored;

      this.assign(name, {
        isIgnored: !isIgnored
      });
    }

    /**
     * Delete content by name
     * @param name
     */

  }, {
    key: 'del',
    value: function del(name) {
      this.value.unset(name);
    }

    /**
     * Get all content
     * @return object
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.value.getValue();
    }

    /**
     * Export config
     * @return object
     */

  }, {
    key: 'toConfig',
    value: function toConfig() {
      return this.value.getValue();
    }
  }]);
  return WFormViewContent;
}();

exports.default = WFormViewContent;

/*

/*
CLASSIC_FIELD
EXTRA_FIELD
CLASSIC_CONTENT
EXTRA_CONTENT
*/

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFBaobabMonkey = __webpack_require__(202);

var _WFBaobabMonkey2 = _interopRequireDefault(_WFBaobabMonkey);

var _WFormField = __webpack_require__(20);

var _WFormField2 = _interopRequireDefault(_WFormField);

var _WFormViewSetting = __webpack_require__(227);

var _WFormViewSetting2 = _interopRequireDefault(_WFormViewSetting);

var _WFormViewStep = __webpack_require__(228);

var _WFormViewStep2 = _interopRequireDefault(_WFormViewStep);

var _WFormViewContent = __webpack_require__(225);

var _WFormViewContent2 = _interopRequireDefault(_WFormViewContent);

var _WFieldStringView = __webpack_require__(221);

var _WFieldStringView2 = _interopRequireDefault(_WFieldStringView);

var _WFieldNumberView = __webpack_require__(219);

var _WFieldNumberView2 = _interopRequireDefault(_WFieldNumberView);

var _WFieldBooleanView = __webpack_require__(217);

var _WFieldBooleanView2 = _interopRequireDefault(_WFieldBooleanView);

var _WFieldDateView = __webpack_require__(218);

var _WFieldDateView2 = _interopRequireDefault(_WFieldDateView);

var _WFieldSelectView = __webpack_require__(220);

var _WFieldSelectView2 = _interopRequireDefault(_WFieldSelectView);

var _Lodash = __webpack_require__(6);

var _WFConstants = __webpack_require__(30);

var _WFEventTypes = __webpack_require__(9);

var _WFDataTypes = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormViewHelpers = function () {
  function WFormViewHelpers() {
    (0, _classCallCheck3.default)(this, WFormViewHelpers);
  }

  (0, _createClass3.default)(WFormViewHelpers, null, [{
    key: "init",


    /**
     * Init the formView  changeErrors
     * set fld observer
     * load fieldsDisable
     * load fieldsHidden
     * load settings
     * load current theme
     * view manager define observer
     * view manager init
     * set status to edit formState's values
     * @param formView
     */
    value: function init(formView) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var formState = formView.getFormState();
      // Set field's observer
      var flds = formView.getFields();
      for (var name in flds) {
        WFormViewHelpers.observeField(formView, flds[name]);
      }
      // Extract prev configs for manager
      //let attributes = this.getFormState().getAttributes();
      var attributes = formState.getSettings();
      formView.defaultConfig = (0, _assign2.default)({}, formView.defaultConfig, attributes);

      var _formView$defaultConf = formView.defaultConfig,
          _formView$defaultConf2 = _formView$defaultConf.settingConfig,
          settingConfig = _formView$defaultConf2 === undefined ? {} : _formView$defaultConf2,
          _formView$defaultConf3 = _formView$defaultConf.contentConfig,
          contentConfig = _formView$defaultConf3 === undefined ? {} : _formView$defaultConf3,
          _formView$defaultConf4 = _formView$defaultConf.stepConfig,
          stepConfig = _formView$defaultConf4 === undefined ? {} : _formView$defaultConf4;

      // Create Manager

      formView.settings = new _WFormViewSetting2.default(settingConfig);
      formView.steps = new _WFormViewStep2.default(stepConfig);
      formView.contents = new _WFormViewContent2.default(contentConfig);

      // Create monkey fields
      WFormViewHelpers.createFieldMonkey(formView);

      // Create observer 
      WFormViewHelpers.createObserver(formView);

      // Publish Ready
      formView.viewMrg.init();
      formView.isInit = true;

      if (formView.isAdmin) {
        formView.setStatus(_WFConstants.WF_STATUS_EDITING);
      }
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    /**
     * Create monkey fields
     * @param callback(state)
     */

  }, {
    key: "createFieldMonkey",
    value: function createFieldMonkey(formView) {
      _WFBaobabMonkey2.default.create(formView);
    }

    /**
     * Set ViewMgr's Observer
     * @param callback(state)
     */

  }, {
    key: "createObserver",
    value: function createObserver(formView) {
      formView.viewMrg.setObserver({
        init: function init() {
          formView.changeStatus();
          formView.changeResults();
          formView.changeStepStatus();
          formView.changeIsValid();
          formView.changeSteps();
          formView.changeStepStatus();
          formView.changeContent();
          formView.changeFields();
          formView.changeFieldStatus();
          formView.changeSetting();
        },
        change: function change(newVal) {

          // todo charly remove
          //console.warn("LOAD/CHANGE ...");
          //console.log(newVal);

          if ((0, _Lodash.isObject)(newVal)) {
            formView.viewMrg.setState(newVal);
            formView.pub(_WFEventTypes.WF_EVENT_ONCHANGE, newVal);
            if (formView.editorObserver) {
              formView.editorObserver(formView.viewMrg.getState());
            }
          }
        },
        ready: function ready() {

          // todo charly remove
          //console.warn("READY ...");

          if (formView.editorObserver) {
            formView.changeStatus();
            formView.changeIsValid();
            formView.changeStepStatus();
            formView.changeFieldStatus();
            formView.changeSteps();
            formView.changeFields();
            formView.changeSetting();
            formView.editorObserver(formView.viewMrg.getState());
          }
          formView.pub(_WFEventTypes.WF_EVENT_ONREADY, formView.viewMrg.getState());
        }
      });
    }

    // FIELD ------------- //

    /**
     * All field action events
     * @param params is object
     */

  }, {
    key: "getFieldAction",
    value: function getFieldAction(params) {
      //console.dir(params)
      var fieldName = params.fieldName,
          fieldInput = params.fieldInput,
          action = params.action,
          values = params.values,
          _params$args = params.args,
          args = _params$args === undefined ? {} : _params$args;

      var events = {
        'visible': function visible(formView) {
          if (formView.fieldIsHidden(fieldName)) {
            formView.fieldDisplay(fieldName);
          }
        },
        'hidden': function hidden(formView) {
          if (!formView.fieldIsHidden(fieldName)) {
            formView.fieldHidden(fieldName);
          }
        },
        'active': function active(formView) {
          if (formView.fieldIsDisable(fieldName)) {
            formView.fieldActive(fieldName);
          }
        },
        'disable': function disable(formView) {
          if (!formView.fieldIsDisable(fieldName)) {
            formView.fieldDisable(fieldName);
          }
        },
        'change_data': function change_data(formView) {
          var _args$getBy = args.getBy,
              getBy = _args$getBy === undefined ? "name" : _args$getBy,
              _args$valueKey = args.valueKey,
              valueKey = _args$valueKey === undefined ? null : _args$valueKey;

          if (values && values.hasOwnProperty(valueKey)) {
            var key = values[valueKey];
            var fld = formView.getField(valueKey);
            if (key && args.hasOwnProperty(key)) {
              var data = args[key];
              fieldInput.setData(data);
            }
          }
        }
      };
      if (events.hasOwnProperty(action)) {
        return events[action];
      } else {
        return null;
      }
    }

    /**
     * Subscribe to fields events
     */

  }, {
    key: "observeField",
    value: function observeField(formView, fld) {
      if (fld instanceof _WFormField2.default) {
        fld.getType();
        var inputMgr = null;
        var valueMgr = fld.getValueMgr();
        var type = fld.getType();
        switch (type) {

          case _WFDataTypes.WF_TYPE_NUMBER:
          case _WFDataTypes.WF_TYPE_INTEGER:
          case _WFDataTypes.WF_TYPE_FLOAT:
            inputMgr = new _WFieldNumberView2.default(valueMgr);
            break;

          case _WFDataTypes.WF_TYPE_BOOLEAN:
            inputMgr = new _WFieldBooleanView2.default(valueMgr);
            break;

          case _WFDataTypes.WF_TYPE_SELECT:
          case _WFDataTypes.WF_TYPE_SELECT_SINGLE:
          case _WFDataTypes.WF_TYPE_SELECT_MULTIPLE:
            inputMgr = new _WFieldSelectView2.default(valueMgr);
            break;

          /*
          case WF_TYPE_DATE:
            inputMgr = new WFieldDateView(valueMgr);
            break;
          */

          default:
            inputMgr = new _WFieldStringView2.default(valueMgr);
            break;
        }
        if (inputMgr) {
          fld.setInputMgr(inputMgr);
          fld.getInputMgr().setObserver(WFormViewHelpers.createFieldObserver(formView, fld));
        }
      }
    }

    /**
     * Hook field's events with WFormView
     * @param WFormView is instance 
     * @param fld instance of WFormField 
     * @return observer object contains some events
     */

  }, {
    key: "createFieldObserver",
    value: function createFieldObserver(formView, fld) {
      if (fld instanceof _WFormField2.default) {
        var _observer;

        var fldName = fld.getName();
        var fldType = fld.getType();
        var observer = (_observer = {
          call: function call(evenType, eventArgs) {
            if (observer.hasOwnProperty(evenType)) {
              var event = observer[evenType];
              event(eventArgs);
            }
          }

        }, (0, _defineProperty3.default)(_observer, _WFEventTypes.WF_EVENT_ONWILLMOUNT, function (fieldInput) {
          formView.setCurrentField(fldName, fieldInput);
          formView.setFieldCondition(fldName, fieldInput);
          if (fld.getRequired()) {
            formView.setValidField(fldName);
          }
        }), (0, _defineProperty3.default)(_observer, _WFEventTypes.WF_EVENT_ONWILLUNMOUNT, function () {
          formView.unsetCurrentField(fldName);
          if (fld.getRequired()) {
            formView.unsetValidField(fldName);
          }
        }), (0, _defineProperty3.default)(_observer, _WFEventTypes.WF_EVENT_ONCHANGE, function (fieldStatus) {
          formView.setCurrentField(fldName, fieldStatus);
          formView.valuesChange();
        }), (0, _defineProperty3.default)(_observer, _WFEventTypes.WF_EVENT_ONVALIDATE, function (fieldInput) {
          formView.setValidField(fldName, fieldInput);
        }), (0, _defineProperty3.default)(_observer, _WFEventTypes.WF_EVENT_ONCLEAR, function (fieldInput) {}), _observer);
        return observer;
      } else {
        return null;
      }
    }

    // ERRROR ------------- //


    /**
     * Set field error with entry error 
     * @param formState is instance 
     * @param errors is object {messages}
     */

  }, {
    key: "setError",
    value: function setError(formState, errors) {
      var _errors$messages = errors.messages,
          messages = _errors$messages === undefined ? {} : _errors$messages;

      for (var x in messages) {
        var _messages$x = messages[x],
            _messages$x$name = _messages$x.name,
            name = _messages$x$name === undefined ? "" : _messages$x$name,
            _messages$x$msg = _messages$x.msg,
            msg = _messages$x$msg === undefined ? "" : _messages$x$msg;

        var fld = formState.getField(name);
        if (fld) {
          fld.getInputMgr().setState({
            valid: true,
            errors: msg
          });
        }
      }
    }

    /**
     * Set field error with entry error 
     * @param formState is instance 
     * @param callback 
     */

  }, {
    key: "mapError",
    value: function mapError(errors, callback) {
      var _errors$messages2 = errors.messages,
          messages = _errors$messages2 === undefined ? {} : _errors$messages2;

      for (var x in messages) {
        var _messages$x2 = messages[x],
            _messages$x2$name = _messages$x2.name,
            name = _messages$x2$name === undefined ? "" : _messages$x2$name,
            _messages$x2$msg = _messages$x2.msg,
            msg = _messages$x2$msg === undefined ? "" : _messages$x2$msg;

        callback(msg);
      }
    }
  }]);
  return WFormViewHelpers;
}();

exports.default = WFormViewHelpers;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFString = __webpack_require__(48);

var _WFString2 = _interopRequireDefault(_WFString);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormViewSetting = function () {
  /**
   * Constructor
   * this.values is object contains all settings
   * this.current is setting key alias theme
   */
  function WFormViewSetting() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFormViewSetting);
    var _config$theme = config.theme,
        theme = _config$theme === undefined ? null : _config$theme,
        _config$settings = config.settings,
        settings = _config$settings === undefined ? {} : _config$settings;

    this.key = "settingConfig";
    this.values = new _WFObject2.default({ value: settings });
    this.current = new _WFString2.default();
    this.cache = {};
    if (theme) {
      this.select(theme);
    }
  }

  (0, _createClass3.default)(WFormViewSetting, [{
    key: "getKey",
    value: function getKey() {
      return this.key;
    }

    /**
     * Get current setting
     * @return object
     */

  }, {
    key: "get",
    value: function get() {
      return this.values.get(this.getCurrent());
    }

    /**
     * Select
     * Check if has not setting assign
     * Set Current theme
     * @param string
     */

  }, {
    key: "select",
    value: function select(theme) {
      var setting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.setCurrent(theme);
      if (!this.values.has(theme)) {
        this.assign(setting);
      }
    }

    /**
     * Get all settings
     * @return object
     */

  }, {
    key: "getValues",
    value: function getValues() {
      return this.values.getValue();
    }

    /**
     * Get current theme
     * @return string
     */

  }, {
    key: "getCurrent",
    value: function getCurrent() {
      return this.current.get();
    }

    /**
     * Set current theme
     * @param string
     */

  }, {
    key: "setCurrent",
    value: function setCurrent(theme) {
      this.current.set(theme);
    }

    /**
     * Set/Update current theme
     * @param string
     */

  }, {
    key: "assign",
    value: function assign() {
      var setting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.values.assign(this.getCurrent(), setting);
    }

    /**
     * Export config
     * @return object
     */

  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        theme: this.getCurrent(),
        settings: this.getValues()
      };
    }
  }]);
  return WFormViewSetting;
}();

exports.default = WFormViewSetting;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _concat = __webpack_require__(124);

var _concat2 = _interopRequireDefault(_concat);

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFString = __webpack_require__(48);

var _WFString2 = _interopRequireDefault(_WFString);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFormViewStep = function () {
  /**
   * Constructor
   * this.value is object contains all steps
   * this.current is current step.id
   * this.order is steps order
   */
  function WFormViewStep() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFormViewStep);
    var _config$current = config.current,
        current = _config$current === undefined ? '0' : _config$current,
        _config$steps = config.steps,
        steps = _config$steps === undefined ? (0, _defineProperty3.default)({}, '0', { id: '0' }) : _config$steps,
        _config$order = config.order,
        order = _config$order === undefined ? ['0'] : _config$order;

    this.key = "stepConfig";
    this.value = new _WFObject2.default({ value: steps });
    this.current = new _WFString2.default({ value: current });
    this.order = new _WFArray2.default({ value: order });
  }

  (0, _createClass3.default)(WFormViewStep, [{
    key: "getKey",
    value: function getKey() {
      return this.key;
    }

    // STEP ------------ //

    /**
     * Create new step
     * @return object
     */

  }, {
    key: "create",
    value: function create() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var step = {
        id: (0, _Lodash.now)().toString(),
        type: null,
        order: []
      };
      this.value.set((0, _defineProperty3.default)({}, step.id, step));
      this.order.insert(step.id);
      this.select(step.id, next);
    }

    /**
     * Update current step
     * @return object
     */

  }, {
    key: "assign",
    value: function assign(obj) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.value.assign(this.getCurrent(), obj);
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    /**
     * Delete step
     * @param stepId
     */

  }, {
    key: "del",
    value: function del() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var id = this.getCurrent();
      this.prev();
      this.value.unset(id);
      this.order.delete(id);
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    // NAVIGATION ------------ //

    /**
     * Select step by id
     * Check if has not setting assign
     * Set Current theme
     * @param stepId string
     */

  }, {
    key: "select",
    value: function select(stepId) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.value.has(stepId)) {
        this.setCurrent(stepId);
        if ((0, _Lodash.isFunction)(next)) {
          next();
        }
      }
    }

    /**
     * Select step by index
     * Check if has not setting assign
     * Set Current theme
     * @param stepIndex number
     */

  }, {
    key: "selectByIndex",
    value: function selectByIndex(stepIndex) {
      var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var stepId = this.order.get(stepIndex);
      if (stepId) {
        this.select(stepId, next);
      } else {
        var firstStepId = this.order.get(0);
        this.select(firstStepId, next);
      }
    }

    /**
     * Get next step
     * @param next is callback
     */

  }, {
    key: "next",
    value: function next() {
      var _next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var stepId = this.order.getNext(this.getCurrent());
      this.select(stepId, _next);
    }

    /**
     * Get next step
     * @param next is callback
     */

  }, {
    key: "prev",
    value: function prev() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var stepId = this.order.getPrev(this.getCurrent());
      this.select(stepId, next);
    }

    // EDIT STEP ------------ //

    /**
     * Set Step type
     * @param type string
     */

  }, {
    key: "setCurrentType",
    value: function setCurrentType() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      this.assign({
        type: type
      });
    }

    /**
     * Get Step type
     * @param type string
     */

  }, {
    key: "getCurrentType",
    value: function getCurrentType() {
      return this.get().type || null;
    }

    /**
     * Set Step order
     * if empty reset type
     * @param order array
     */

  }, {
    key: "setCurrentOrder",
    value: function setCurrentOrder(order) {
      this.assign({
        order: order
      });
      if (order.length === 0) {
        this.setCurrentType();
      }
    }

    /**
     * Get Step order
     * @param order array
     */

  }, {
    key: "getCurrentOrder",
    value: function getCurrentOrder() {
      return this.get().order || [];
    }

    /**
     * Current Step has elem
     * @param order array
     */

  }, {
    key: "currentIsEmpty",
    value: function currentIsEmpty() {
      var _get = this.get(),
          _get$order = _get.order,
          order = _get$order === undefined ? [] : _get$order;

      return order.length === 0;
    }

    /**
     * Add new content
     * @param name string
     */

  }, {
    key: "addElem",
    value: function addElem(name) {
      if (!name) {
        return false;
      }
      var order = this.getCurrentOrder();
      var newValue = (0, _concat2.default)([], order);
      newValue.push(name);
      this.setCurrentOrder(newValue);
    }

    /**
     * Delete new content
     * @param name string
     */

  }, {
    key: "delElem",
    value: function delElem(name) {
      if (!name) {
        return false;
      }
      var order = this.getCurrentOrder();
      var newValue = (0, _concat2.default)([], order);
      newValue = newValue.filter(function (n) {
        return n !== name;
      });
      this.setCurrentOrder(newValue);
    }

    // UTILS ------------ //

    /**
     * Get collection values
     * @return array
     */

  }, {
    key: "getSchema",
    value: function getSchema() {
      var _this = this;

      var schema = this.order.map(function (id) {
        return _this.value.get(id);
      });
      return schema;
    }

    /**
     * Get the steps order
     * @return array
     */

  }, {
    key: "getOrder",
    value: function getOrder() {
      return this.order.getValue();
    }

    /**
     * Set the steps order
     * @param array
     */

  }, {
    key: "setOrder",
    value: function setOrder(order) {
      return this.order.set(order);
    }

    /**
     * Get current step value
     * @return object
     */

  }, {
    key: "get",
    value: function get() {
      return this.value.get(this.getCurrent());
    }

    /**
     * Get current step 
     * @return string
     */

  }, {
    key: "getCurrent",
    value: function getCurrent() {
      return this.current.get();
    }

    /**
     * Get current step index
     * @return number
     */

  }, {
    key: "getCurrentIndex",
    value: function getCurrentIndex() {
      return this.order.indexOf(this.current.get());
    }
    /**
     * Set current step
     * @param stepId string
     */

  }, {
    key: "setCurrent",
    value: function setCurrent(stepId) {
      this.current.set(stepId);
    }

    /**
     * Get all steps
     * @return object
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value.getValue();
    }

    /**
     * Export config
     * @return object
     */

  }, {
    key: "toConfig",
    value: function toConfig() {
      return {
        current: this.getCurrent(),
        steps: this.getValue(),
        order: this.getOrder()
      };
    }
  }]);
  return WFormViewStep;
}();

exports.default = WFormViewStep;

/*

  // STEPS ------------- //

  getSteps() {
    return this.steps.getValue();
  }
  
  getStepsOrder() {
    return this.stepsOrder.getValue();
  }
  
  getCurrentStep() {
    return this.currentStep.getValue();
  }

  setCurrentStep() {}

  static addStep(formView) {}
  static editStep(formView) {}
  static deleteStep(formView) {}

*/

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SCHEMA CONDITION ------------------- //
// ------------------- //

var WFSchemaCondition = function () {
  /**
   * Constructor
   * @param Object schema
   * @code
   * let condition = {
   *   action : ["visible","hidden"],
   *   rules  : [
   *     ["title", "===", ["mickey","mario"]],
   *     ["name", "!==", ["",0]]
   *   ]
   * }
   * let fieldCondition = new WFSchemaCondition(condition);
   * fieldCondition.watch(
   *   {...values}, 
   *   (action) => ...
   * )
   * @code
   */
  function WFSchemaCondition(schema) {
    (0, _classCallCheck3.default)(this, WFSchemaCondition);

    if (!(0, _Lodash.isObject)(schema) && schema.hasOwnProperty("action") && schema.hasOwnProperty("rules")) {
      throw new Error('WFSchemaCondition => schema is not valid');
    }
    if (!(0, _Lodash.isArray)(schema.rules)) {
      throw new Error('WFSchemaCondition => rules is not an array');
    }
    if (schema.rules.length === 0) {
      throw new Error('WFSchemaCondition => rules is empty');
    }
    var action = schema.action,
        rules = schema.rules,
        _schema$args = schema.args,
        args = _schema$args === undefined ? {} : _schema$args;

    this.args = args;
    this.action = action;
    this.checker = WFSchemaCondition.compile(rules);
  }

  /**
   * Check values and return action
   * @param values is object
   * @param callback
   * return callback(action)
   */


  (0, _createClass3.default)(WFSchemaCondition, [{
    key: "watch",
    value: function watch(values, callback) {
      var action = this.checker(values, this.action);
      callback(action, this.args);
    }

    /**
     * Create function validator
     * @param schema array 
     * Exemple : [] || [...array]
     */

  }], [{
    key: "compile",
    value: function compile(schema) {
      var rules = [];
      if ((0, _Lodash.isArray)(schema[0])) {
        schema.forEach(function (rule) {
          rules.push(WFSchemaCondition.buildRule(rule));
        });
      } else {
        rules.push(WFSchemaCondition.buildRule(schema));
      }
      return WFSchemaCondition.buildChecker(rules);
    }

    /**
     * Build rules 
     * @param array [entry, operator, value]
     * Exemple : ['fieldName', "!==", ""]
     */

  }, {
    key: "buildRule",
    value: function buildRule(arr) {
      if (arr.length === 3) {
        var rule = [];
        var entry = arr[0];
        var operator = arr[1];
        var values = arr[2];
        if ((0, _Lodash.isBoolean)(values) || (0, _Lodash.isNumber)(values) || (0, _Lodash.isString)(values)) {
          var callback = WFSchemaCondition.getRule(entry, operator, values);
          if (rule) {
            rule.push(callback);
          }
        } else if ((0, _Lodash.isArray)(values)) {
          values.forEach(function (value) {
            var callback = WFSchemaCondition.getRule(entry, operator, value);
            if (rule) {
              rule.push(callback);
            }
          });
        }
        return rule;
      }
    }

    /**
     * Get Rule by 
     * schema => object.key + operator + object.value
     * @param k is string 
     * @param operator string
     * @param data value
     * @return function
     */

  }, {
    key: "getRule",
    value: function getRule(k, operator) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


      var has = function has(obj) {
        return obj && obj.hasOwnProperty(k);
      };

      switch (operator) {

        case '!=':
          return function (obj) {
            return has(obj) && obj[k] != data;
          };
        case '!==':
          return function (obj) {
            return has(obj) && obj[k] !== data;
          };
        case '===':
          return function (obj) {
            return has(obj) && obj[k] === data;
          };
        case '==':
          return function (obj) {
            return has(obj) && obj[k] == data;
          };
        case '>':
          return function (obj) {
            return has(obj) && obj[k] > data;
          };
        case '<':
          return function (obj) {
            return has(obj) && obj[k] < data;
          };
        case '<=':
          return function (obj) {
            return has(obj) && obj[k] <= data;
          };
        case '>=':
          return function (obj) {
            return has(obj) && obj[k] >= data;
          };
        case 'change':
          return function (obj) {
            return has(obj) && obj[k] !== "";
          };
        /**
         * for array value
         **/
        case 'min':
          return function (obj) {
            return has(obj) && obj[k].length >= data;
          };
        case 'max':
          return function (obj) {
            return has(obj) && obj[k].length <= data;
          };
        /**
         * for string and array value
         **/
        case 'includes':
          return function (obj) {
            return has(obj) && obj[k].includes(data);
          };
        default:
          return false;
      }
    }

    /**
     * Build Checker
     * @param rules arrays
     * @return function
     */

  }, {
    key: "buildChecker",
    value: function buildChecker(rules) {
      // Check if (rule isArray || function)
      var checker = function checker(values, action) {
        var l = rules.length;
        var flag = l;
        rules.forEach(function (rule) {
          if ((0, _Lodash.isFunction)(rule)) {
            if (rule(values)) {
              flag--;
            }
          } else if ((0, _Lodash.isArray)(rule)) {
            for (var i = 0; i < rule.length; i++) {
              if (rule[i](values)) {
                flag--;
                break;
              }
            }
          }
        });
        if ((0, _Lodash.isArray)(action) && action.length === 2) {
          if (flag === 0) {
            return action[0];
          } else {
            return action[1];
          }
        } else {
          return action[0];
        }
      };
      return checker;
    }
  }]);
  return WFSchemaCondition;
}();

// ------------------- //


exports.default = WFSchemaCondition;
// ------------------- //

/*
// hidden, visible, copy, clear,
var condition = {
  action : ["visible","hidden"],
  rules  : [
    ["title", "===", ["titi","toto","tata"]],
    ["name", "!==", ["",0]]
  ]
}
var test = new WFSchemaCondition(condition)
test.watch({title:"titi", name:0}, (action) => { console.log(action) }) // hidden
test.watch({title:"titi", name:1}, (action) => { console.log(action) }) // visible
test.watch({title:"titi"}, (action) => { console.log(action) }) // hidden
// test includes --------- //
var condition = {
  action : ["hidden","visible"],
  rules  : [
    ["title", "includes", ["titi","toto","tata"]],
  ]
}
var test = new WFSchemaCondition(condition)
test.watch({title:["titi"]}, (action) => { console.log(action) }) // null
*/

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFValueTypes = __webpack_require__(11);

var _WFInputTypes = __webpack_require__(24);

var _WFAjv = __webpack_require__(121);

var _WFAjv2 = _interopRequireDefault(_WFAjv);

var _WFValueResult = __webpack_require__(231);

var _WFValueResult2 = _interopRequireDefault(_WFValueResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF SCHEMA VALIDATOR ------------------- //
// ------------------- //

var WFSchemaValidator = function () {
  /**
   * Constructor
   * @param JSON schema
   */
  function WFSchemaValidator() {
    var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFSchemaValidator);

    if (!(0, _Lodash.isObject)(schema)) {
      throw new Error('WFSchemaValidator => schema is not valid');
    }
    this.schema = schema;
    this.validator = _WFAjv2.default.compile(schema);
  }

  /**
   * Get prop in this schema
   * @param value
   */


  (0, _createClass3.default)(WFSchemaValidator, [{
    key: "get",
    value: function get(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.schema.hasOwnProperty(key)) {
        return this.schema[key];
      } else {
        return defaultValue;
      }
    }

    /**
     * Validate
     * @param value
     */

  }, {
    key: "validate",
    value: function validate(value) {
      return new _WFValueResult2.default(this.validator, value);
    }

    /**
     * Get Shema by value type
     * @param value
     */

  }], [{
    key: "getDefaultSchema",
    value: function getDefaultSchema(valueType) {
      var inputType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      switch (valueType) {

        case _WFValueTypes.WF_STRING_VALUE:
          return WFSchemaValidator.getStringSchema(inputType, args);

        case _WFValueTypes.WF_NUMBER_VALUE:
          return WFSchemaValidator.getNumberSchema();

        case _WFValueTypes.WF_BOOLEAN_VALUE:
          return WFSchemaValidator.getBooleanSchema();

        case _WFValueTypes.WF_SELECT_VALUE:
          return WFSchemaValidator.getSelectSchema();

        default:
          return false;
      }
    }

    /**
     * Get string schema
     */

  }, {
    key: "getStringSchema",
    value: function getStringSchema() {
      var inputType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _args$len = args.len,
          len = _args$len === undefined ? 0 : _args$len;


      var schema = {};
      switch (inputType) {

        case _WFInputTypes.INPUT_EMAIL:
          schema = {
            "type": "string",
            "format": "email"
          };
          break;

        case _WFInputTypes.INPUT_TEL:
          schema = {
            "type": "string",
            "format": "phone"
          };
          break;

        case _WFInputTypes.INPUT_URL:
          schema = {
            "type": "string",
            "format": "url"
          };

        case _WFInputTypes.INPUT_FILE:
        case _WFInputTypes.INPUT_MEDIA:
          schema = {
            "type": "string",
            "format": "uri"
          };
          break;

        case _WFInputTypes.INPUT_SELECT:
          schema = {
            "type": "string",
            "minLength": 1
          };
          break;

        case _WFInputTypes.INPUT_TEXT:
        case _WFInputTypes.INPUT_TEXTAREA:
        default:
          schema = {
            "type": "string",
            "minLength": 1
          };
      }

      if (len && !schema.hasOwnProperty('maxLength')) {
        schema['maxLength'] = len;
      }

      return schema;
    }

    /**
     * Get number schema
     */

  }, {
    key: "getNumberSchema",
    value: function getNumberSchema() {
      return {
        "type": "number",
        "minimum": 0
      };
    }

    /**
     * Get boolean schema
     */

  }, {
    key: "getBooleanSchema",
    value: function getBooleanSchema() {
      return {
        "type": "boolean",
        "enum": [true]
      };
    }

    /**
     * Get select schema
     */

  }, {
    key: "getSelectSchema",
    value: function getSelectSchema() {
      return {
        "type": "array",
        "minItems": 1
      };
    }
  }]);
  return WFSchemaValidator;
}();

// ------------------- //


exports.default = WFSchemaValidator;
// ------------------- //

/*

  https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#type

  NUMBER 

  { 
    "type": "number",
    "minLength": 1,
    "minimum": 2,
    "maximum": 5,
  }

  STRING

  { 
    "type": "string",
    "minLength": 1,
    "maxLength": 32,
  }

  { 
    "type": "string",
    "format": "email"
  }
  { 
    "type": "string",
    "format": "phone"
  }
  { 
    "type": "string",
    "format": "uri"
  }

  ARRAY

  { 
    "type": "array",
    "minItems": 1,
    "maxItems": 3,
  }


  "date", "time" and `"date-time".
  
  DATE 
  {
      "format": "date",
      "formatMaximum": "2016-02-06",
      "formatExclusiveMaximum": true
  }

*/

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Lodash = __webpack_require__(6);

var _WFAjv = __webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //
// WF VALIDATE VALUE ------------------- //
// ------------------- //

var WFValueResult = function () {
  /**
   * Constructor
   * @param validator instance of WFSchemaValidator
   * @param value 
   */
  function WFValueResult(validator, value) {
    (0, _classCallCheck3.default)(this, WFValueResult);

    this.validator = validator;
    this.test = this.validator(value);
  }

  /**
   * Check test is valid
   * @return boolean
   */


  (0, _createClass3.default)(WFValueResult, [{
    key: "isValid",
    value: function isValid() {
      return this.test === true;
    }

    /**
     * Check test has error
     * @return boolean
     */

  }, {
    key: "hasErr",
    value: function hasErr() {
      return this.test === false;
    }

    /**
     * Get error collection
     * @return array || null
     */

  }, {
    key: "getErr",
    value: function getErr() {
      var errors = this.validator.errors;
      if ((0, _Lodash.isArray)(errors) && errors.length > 0) {
        return errors;
      } else {
        return null;
      }
    }

    /**
     * Get all messages in error collection
     * @return array 
     */

  }, {
    key: "getErrMsg",
    value: function getErrMsg() {
      var errors = this.getErr();
      if (errors) {
        return (0, _WFAjv.toLocaleErr)(errors);
      } else {
        return [];
      }
    }
  }]);
  return WFValueResult;
}();

// ------------------- //


exports.default = WFValueResult;
// ------------------- //

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFMoment = __webpack_require__(27);

var _WFMoment2 = _interopRequireDefault(_WFMoment);

var _Lodash = __webpack_require__(6);

var _WFValueTypes = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS NUMBER ------------------- //

// ------------------- //

var WFDate = function () {

  /**
   * Constructor
   */
  function WFDate() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFDate);
    var _config$format = config.format,
        format = _config$format === undefined ? 'YYYY/MM/DD' : _config$format,
        _config$value = config.value,
        value = _config$value === undefined ? null : _config$value;


    this.format = format;
    this.key = _WFValueTypes.WF_DATE_VALUE;

    this.dateObject = null;
    this.dateValue = "";

    this.set(value);
  }

  /**
   * Test if obj is instance Of this class
   * @param obj the object to test
   * @return boolean
   */


  (0, _createClass3.default)(WFDate, [{
    key: "on",


    /**
     * Forward call
     * @param evenType string 
     * @param args object params
     */
    value: function on(evenType) {
      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.input) {
        this.input.on(evenType, eventArgs);
      }
    }

    /**
     * Get this.key
     * @return string
     */

  }, {
    key: "getKey",
    value: function getKey() {
      return this.key;
    }

    /**
     * Get value
     * @return this.dateValue
     */

  }, {
    key: "get",
    value: function get() {
      return this.dateValue;
    }

    /**
     * Set value 
     * @param val the value to set
     */

  }, {
    key: "set",
    value: function set(val) {
      if ((0, _Lodash.isString)(val)) {
        this.dateObject = (0, _WFMoment2.default)(val, this.format);
      } else {
        this.dateObject = (0, _WFMoment2.default)(val);
      }

      if (this.dateObject.isValid()) {
        this.dateValue = this.dateObject.format(this.format);
      } else {
        this.dateValue = "";
      }
    }

    /**
     * Check if n is null
     * @return boolean
     */

  }, {
    key: "isNull",
    value: function isNull() {
      return this.get() === "";
    }

    /**
     * clear value
     */

  }, {
    key: "clear",
    value: function clear() {
      this.dateObject = null;
      this.dateValue = "";
      if (this.input) {
        this.input.setState((0, _defineProperty3.default)({}, this.getKey(), this.get()));
      }
    }

    /**
     * Show current value in console
     */

  }, {
    key: "toConsole",
    value: function toConsole() {
      console.log("");
      console.warn("WFDate");
      console.log("value =>", this.dateValue);
      if (this.dateValue !== "") {
        console.log("string =>", this.dateValue);
      }
      console.log("");
    }
  }], [{
    key: "instanceOf",
    value: function instanceOf(obj) {
      return obj instanceof WFDate;
    }
  }]);
  return WFDate;
}();
// ------------------- //


exports.default = WFDate;
// ------------------- //

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _WFArray = __webpack_require__(31);

var _WFArray2 = _interopRequireDefault(_WFArray);

var _WFType2 = __webpack_require__(49);

var _WFType3 = _interopRequireDefault(_WFType2);

var _Lodash = __webpack_require__(6);

var _JSON = __webpack_require__(21);

var _WFEventTypes = __webpack_require__(9);

var _WFValueTypes = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS SELECT MANAGER ------------------- //

// ------------------- //

var WFSelect = function (_WFType) {
  (0, _inherits3.default)(WFSelect, _WFType);

  /** 
   * Constructor
   */
  function WFSelect() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, WFSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WFSelect.__proto__ || (0, _getPrototypeOf2.default)(WFSelect)).call(this, _WFValueTypes.WF_SELECT_VALUE));

    var _config$zipBy = config.zipBy,
        zipBy = _config$zipBy === undefined ? "id" : _config$zipBy,
        _config$labelBy = config.labelBy,
        labelBy = _config$labelBy === undefined ? "name" : _config$labelBy,
        _config$data = config.data,
        data = _config$data === undefined ? [] : _config$data,
        _config$value = config.value,
        value = _config$value === undefined ? [] : _config$value,
        _config$min = config.min,
        min = _config$min === undefined ? 0 : _config$min,
        _config$max = config.max,
        max = _config$max === undefined ? 0 : _config$max,
        _config$multiple = config.multiple,
        multiple = _config$multiple === undefined ? false : _config$multiple,
        _config$canBeEmpty = config.canBeEmpty,
        canBeEmpty = _config$canBeEmpty === undefined ? false : _config$canBeEmpty;
    // source

    _this.data = data;
    // values
    _this.selectValue = new _WFArray2.default();
    _this.arrayValue = [];
    _this.objectValue = {};
    // setting
    _this.zipBy = zipBy;
    _this.labelBy = labelBy;
    _this.multiple = multiple;
    _this.min = parseInt(min);
    _this.max = parseInt(max);
    _this.canBeEmpty = canBeEmpty;
    // caching extra select/unselect method 
    _this.callbacks = null;
    // Set value
    _this.setValue(value);
    return _this;
  }

  /**
   * Test if obj is instance Of this class
   * @param obj the object to test
   * @return boolean
   */


  (0, _createClass3.default)(WFSelect, [{
    key: 'setData',


    /**
     * Refresh this.data by nex data
     * @param data array
     */
    value: function setData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if ((0, _Lodash.isArray)(data)) {
        this.data = data;
      }
    }

    /**
     * Set new selection
     * @param arrayValue [...id]
     */

  }, {
    key: 'setValue',
    value: function setValue() {
      var selectValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if ((0, _Lodash.isArray)(selectValue)) {
        this.selectValue.set(selectValue);
        this.zip();
      }
    }

    /**
     * Set prev data and value
     * @param values {selectValue, arrayValue}
     */

  }, {
    key: 'setValues',
    value: function setValues() {
      var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!(0, _Lodash.isObject)(values) || !values.hasOwnProperty("selectValue") || !values.hasOwnProperty("arrayValue") || !values.hasOwnProperty("objectValue")) {
        return;
      }
      var _values$selectValue = values.selectValue,
          selectValue = _values$selectValue === undefined ? [] : _values$selectValue,
          _values$arrayValue = values.arrayValue,
          arrayValue = _values$arrayValue === undefined ? [] : _values$arrayValue,
          _values$objectValue = values.objectValue,
          objectValue = _values$objectValue === undefined ? {} : _values$objectValue;

      var countSelectValue = selectValue.length;
      var countsArrayValue = arrayValue.length;
      if (this.selectValue.isEmpty() && countSelectValue > 0 && countsArrayValue > 0 && countSelectValue === countsArrayValue) {
        this.selectValue.set(selectValue);
        this.arrayValue = arrayValue;
        this.objectValue = objectValue;
        if (this.input) {
          this.input.setState({
            selectValue: selectValue, arrayValue: arrayValue
          });
        }
      }
    }

    /**
     * Get selection
     * @return array
     */

  }, {
    key: 'getValue',
    value: function getValue() {
      return this.selectValue.getValue();
    }
  }, {
    key: 'getObjectValue',
    value: function getObjectValue() {
      var toJson = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (toJson) {
        return (0, _JSON.stringify)(this.objectValue);
      } else {
        return this.objectValue;
      }
    }
  }, {
    key: 'getArrayValue',
    value: function getArrayValue() {
      return this.arrayValue;
    }

    /**
     * Get selection
     * @return array
     */

  }, {
    key: 'get',
    value: function get() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!(0, _Lodash.isNumber)(index)) {
        return null;
      } else {
        return this.selectValue.get(index);
      }
    }

    /**
     * Select value
     * Check if value not null
     * Caching callbacks in this.callbacks
     * Check is single select
     * if single select update uniq selection
     * if multiple update selection
     * @param value
     * @param callbacks object with select & unselect extra method
     */

  }, {
    key: 'select',
    value: function select(value) {
      var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var target = value;
      if (callbacks) {
        this.callbacks = callbacks;
      }
      if (!value || value === null) {
        return;
      } else {
        !this.isSingle() ? this.update(target) : this.toggle(target);
      }
    }

    /**
     * Only for Select Single
     * Select/Unselect target
     * @param target value
     */

  }, {
    key: 'toggle',
    value: function toggle(target) {
      var _this2 = this;

      var _callbacks = this.callbacks,
          _callbacks$select = _callbacks.select,
          select = _callbacks$select === undefined ? null : _callbacks$select,
          _callbacks$unselect = _callbacks.unselect,
          unselect = _callbacks$unselect === undefined ? null : _callbacks$unselect;

      if (this.canBeEmpty && this.has(target)) {
        this.clear();
        this.zip(function () {
          return _this2.call(unselect);
        });
      } else {
        this.setValue([target]);
        this.zip(function () {
          return _this2.call(select);
        });
      }
    }

    /**
     * Only for Select Multiple
     * Select/Unselect target
     * @param target value
     */

  }, {
    key: 'update',
    value: function update(target) {
      var _this3 = this;

      var _callbacks2 = this.callbacks,
          _callbacks2$select = _callbacks2.select,
          select = _callbacks2$select === undefined ? false : _callbacks2$select,
          _callbacks2$unselect = _callbacks2.unselect,
          unselect = _callbacks2$unselect === undefined ? false : _callbacks2$unselect;

      if (!this.has(target)) {
        if (!this.isMax()) {
          this.selectValue.insert(target);
          this.zip(function () {
            return _this3.call(select);
          });
        }
      } else {
        this.selectValue.delete(target);
        this.zip(function () {
          return _this3.call(unselect);
        });
      }
    }

    /**
     * Get object selected in this.data
     * Save and Map object in this.arrayValue
     * Save and Map object in this.objectValue
     */

  }, {
    key: 'zip',
    value: function zip() {
      var _this4 = this;

      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.data.length > 0) {
        this.objectValue = {};
        this.arrayValue = this.data.filter(function (row) {
          var target = row[_this4.zipBy];
          return _this4.has(target);
        });
        this.arrayValue.map(function (row, i) {
          if (row.hasOwnProperty(_this4.labelBy)) {
            var k = row[_this4.zipBy];
            var v = row[_this4.labelBy];
            _this4.objectValue[k] = v;
          }
        });
      }
      if ((0, _Lodash.isFunction)(next)) {
        next();
      }
    }

    /**
     * Restore initial state
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.selectValue.clear();
      this.arrayValue = [];
      this.objectValue = {};
      if (this.input) {
        var _input$setState;

        this.input.setState((_input$setState = {}, (0, _defineProperty3.default)(_input$setState, _WFValueTypes.WF_SELECT_VALUE, []), (0, _defineProperty3.default)(_input$setState, _WFValueTypes.WF_ARRAY_VALUE, []), _input$setState));
      }
    }

    /**
     * Get and Remove First value
     * @param next callback(value)
     * @return value
     */

  }, {
    key: 'shift',
    value: function shift() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var first = this.selectValue.shift();
      if ((0, _Lodash.isFunction)(next)) {
        next(first);
      } else {
        return first;
      }
    }

    /**
     * Get and Remove Last value
     * @param next callback(value)
     * @return value
     */

  }, {
    key: 'pop',
    value: function pop() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var last = this.selectValue.pop();
      if ((0, _Lodash.isFunction)(next)) {
        next(last);
      } else {
        return last;
      }
    }

    /**
     * Count values selected
     * @return integer
     */

  }, {
    key: 'getCounter',
    value: function getCounter() {
      return this.selectValue.getCounter();
    }

    /**
     * Apply callback if exist 
     * return in callback selectValue, arrayValue, objectValue
     * @param next callback
     */

  }, {
    key: 'call',
    value: function call(next) {
      if ((0, _Lodash.isFunction)(next)) {
        var _next;

        next((_next = {}, (0, _defineProperty3.default)(_next, _WFValueTypes.WF_SELECT_VALUE, this.getValue()), (0, _defineProperty3.default)(_next, _WFValueTypes.WF_ARRAY_VALUE, this.getArrayValue()), (0, _defineProperty3.default)(_next, _WFValueTypes.WF_OBJECT_VALUE, this.getObjectValue()), _next), {
          isMin: this.isMin(),
          isMax: this.isMax(),
          isMultiple: this.isMultiple(),
          counter: this.getCounter()
        });
      }
    }

    /**
     * Check if select has value
     * @return boolean
     */

  }, {
    key: 'has',
    value: function has(value) {
      return this.selectValue.has(value);
    }

    /**
     * Only for single select mode
     * Check if value is selected
     * @param value
     * @return boolean
     */

  }, {
    key: 'is',
    value: function is() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.isEmpty() || !this.isSingle()) {
        return null;
      } else {
        var current = this.get();
        return current[0] === value;
      }
    }

    /**
     * Check if selection equal min
     * @return boolean
     */

  }, {
    key: 'isMin',
    value: function isMin() {
      if (this.min === 0) {
        return true;
      } else {
        return this.getCounter() >= this.min;
      }
    }

    /**
     * Check if selection equal max
     * @return boolean
     */

  }, {
    key: 'isMax',
    value: function isMax() {
      if (this.max === 0) {
        return false;
      } else {
        return this.getCounter() === this.max;
      }
    }

    /**
     * Check if select is single
     * @return boolean
     */

  }, {
    key: 'isSingle',
    value: function isSingle() {
      return this.min === 1 && this.max === 1 || this.min === 0 && this.max === 1 || this.multiple === false;
    }

    /**
     * Check if data is empty
     * @return boolean
     */

  }, {
    key: 'isMultiple',
    value: function isMultiple() {
      return !this.isSingle();
    }

    /**
     * Check if data is empty
     * @return boolean
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.getCounter() === 0;
    }

    /**
     * Export to JSON
     * @return json
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.selectValue.toJSON();
    }

    /**
     * Parse json to object
     * Set this.objectValue
     * @param json string
     */
    /*
    fromJSON (json) {
     let data = parse(json);
     if (data!==""
       ||isObject(data) 
       && Object.keys(data).length>0) {
       this.setValueByObjValue(data);
     }
    }
    /**
    * Show current value in console
    */

  }, {
    key: 'toConsole',
    value: function toConsole() {
      console.log("");
      console.warn('WFSelect');
      console.log('counter =>', this.getCounter());
      console.log("");
      console.log('value =>', (0, _JSON.stringify)(this.get()));
      console.log("");
      console.log('array =>', (0, _JSON.stringify)(this.arrayValue));
      console.log("");
      console.log('object =>', (0, _JSON.stringify)(this.objectValue));
      console.log("");
    }
  }], [{
    key: 'instanceOf',
    value: function instanceOf(obj) {
      return obj instanceof WFSelect;
    }
  }]);
  return WFSelect;
}(_WFType3.default);
// ------------------- //


exports.default = WFSelect;
// ------------------- //

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Slugify = __webpack_require__(122);

var _Slugify2 = _interopRequireDefault(_Slugify);

var _MaxStr = __webpack_require__(89);

var _MaxStr2 = _interopRequireDefault(_MaxStr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NAMIFY ---------------- //

exports.default = function () {
	var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var _args$sep = args.sep,
	    sep = _args$sep === undefined ? "_" : _args$sep,
	    _args$prefix = args.prefix,
	    prefix = _args$prefix === undefined ? "wf_" : _args$prefix,
	    _args$sufix = args.sufix,
	    sufix = _args$sufix === undefined ? "" : _args$sufix,
	    _args$limit = args.limit,
	    limit = _args$limit === undefined ? 32 : _args$limit;

	var priv = "wf_";
	var length = string.length;
	var str = length > 0 ? string.replace(priv, "") : "";
	if (str === "") return "";
	var slug = (0, _Slugify2.default)((0, _MaxStr2.default)(str, limit), sep);
	var count = slug.length;
	var last = slug[count - 1];
	var name = last === sep ? slug.substring(0, count - 1) : slug;
	return ("" + priv + name + sufix).replace(/\-/g, "_");
};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

// SCREEN ---------------- //

// ------------------- //

var scrollTop = exports.scrollTop = function scrollTop() {
	return window.scrollTo(0, 0);
},


// ----------------- //

VerticalAlign = exports.VerticalAlign = function VerticalAlign(_ref) {
	var _ref$content = _ref.content,
	    content = _ref$content === undefined ? 600 : _ref$content,
	    _ref$minHeight = _ref.minHeight,
	    minHeight = _ref$minHeight === undefined ? 780 : _ref$minHeight,
	    _ref$top = _ref.top,
	    top = _ref$top === undefined ? 100 : _ref$top,
	    _ref$down = _ref.down,
	    down = _ref$down === undefined ? 100 : _ref$down;

	var maxHeight = minHeight - (top + down);
	if (content < maxHeight) {
		return minHeight;
	} else {
		return content + top + down;
	}
}

// ----------------- //

;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

// STRING TO ARRAY ---------------- //

exports.default = function () {
	var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

	if (string === "") return [];else return string.replace(/\r\n/g, "\n").replace(/^\s+|\s+$/g, "").split("\n").filter(function (line) {
		return line != "";
	});
};

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(28);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFConsole = __webpack_require__(61);

var _WFConsole2 = _interopRequireDefault(_WFConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// CLASS WF EVENTS ------------------- //

// ------------------- //

var WFEvents = function () {
  /**
   * Constructor
   */
  function WFEvents() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    (0, _classCallCheck3.default)(this, WFEvents);

    this.name = name;
    this.channels = {};
  }

  /**
   * Subscribe to channel and set callback
   * If channel exist
   * add new callback
   * Else create new channel
   * @param channel string
   * @param event callback
   */


  (0, _createClass3.default)(WFEvents, [{
    key: "sub",
    value: function sub(channel, callback) {

      // WFConsole.val(`${this.name} subscribe`, channel)

      if (!this.channels[channel]) this.channels[channel] = [];
      this.channels[channel].push({ context: this, callback: callback });
      return this;
    }

    /**
     * Publish channel by name
     * If channel not exist cancel
     * Else Get channel and fire the channel's callbacks 
     * @param channel string
     */

  }, {
    key: "pub",
    value: function pub(channel) {

      //WFConsole.val(`${this.name} publish`, channel)

      if (!this.channels[channel]) return false;
      var args = Array.prototype.slice.call(arguments, 1);
      for (var i = 0, l = this.channels[channel].length; i < l; i++) {
        var subscription = this.channels[channel][i];
        subscription.callback.apply(subscription.context, args);
      }
      return this;
    }

    /**
     * Install mediator in object
     * @param obj object
     */

  }, {
    key: "installTo",
    value: function installTo(obj) {

      obj.sub = this.sub;
      obj.pub = this.pub;
    }

    /**
     * Show current state in console
     */

  }, {
    key: "toConsole",
    value: function toConsole() {
      var keys = (0, _keys2.default)(this.channels);
      console.log("count => " + keys.length);
      console.dir(keys);
      console.dir(this.channels);
    }
  }]);
  return WFEvents;
}();

// ---------------------- //


exports.default = WFEvents;
// ---------------------- //

/*
( Mediator + Facade ) -> 
https://addyosmani.com/largescalejavascript/
*/

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var count = 0;

var WFReactMgr = function () {
  function WFReactMgr(config) {
    (0, _classCallCheck3.default)(this, WFReactMgr);
    var _config$app = config.app,
        app = _config$app === undefined ? {} : _config$app,
        DOMNode = config.DOMNode,
        displayName = config.displayName,
        componentClass = config.componentClass;

    count++;
    this.key = count;
    this.app = app;
    this.displayName = displayName;
    this.componentClass = componentClass;
    this.DOMNode = document.querySelector(DOMNode);
  }

  /**
   * Display component
   */


  (0, _createClass3.default)(WFReactMgr, [{
    key: 'display',
    value: function display() {
      var View = this.componentClass;
      if (this.displayName) {
        View.prototype.displayName = this.displayName;
      }
      (0, _reactDom.render)(_react2.default.createElement(View, { key: this.key, app: this.app }), this.DOMNode);
    }

    /**
     * Hidden component
     */

  }, {
    key: 'hidden',
    value: function hidden() {
      (0, _reactDom.render)(_react2.default.createElement('div', null), this.DOMNode);
    }

    /**
     * Get the DOMNode
     */

  }, {
    key: 'getDOMNode',
    value: function getDOMNode() {
      return this.DOMNode;
    }
  }]);
  return WFReactMgr;
}();

exports.default = WFReactMgr;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(129);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(126);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// WFRessources.getFields().then(fields => ...);
var getFields = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 402));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getFields() {
    return _ref.apply(this, arguments);
  };
}();
exports.default = {
  getFields: getFields
};

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(7);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _windowWatcher = __webpack_require__(149);

var _windowWatcher2 = _interopRequireDefault(_windowWatcher);

var _Mobile = __webpack_require__(90);

var _WFReactMgr = __webpack_require__(238);

var _WFReactMgr2 = _interopRequireDefault(_WFReactMgr);

var _WFObject = __webpack_require__(18);

var _WFObject2 = _interopRequireDefault(_WFObject);

var _WFormView = __webpack_require__(222);

var _WFormView2 = _interopRequireDefault(_WFormView);

var _WFPlayerClient = __webpack_require__(123);

var _WFPlayerClient2 = _interopRequireDefault(_WFPlayerClient);

var _WFPlayerAnalytics = __webpack_require__(241);

var _WFPlayerAnalytics2 = _interopRequireDefault(_WFPlayerAnalytics);

var _WFPlayerComponent = __webpack_require__(242);

var _WFPlayerComponent2 = _interopRequireDefault(_WFPlayerComponent);

var _Lodash = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WF_PLAYER = 'wf-player';
var store = new _WFObject2.default();

// ------------------- //

// WF PLAYER ------------------- //

// ------------------- //

var WFPlayer = function () {

  /**
   * Constructor
   * this.id
   * this.formView
   * this.reactMgr
   */
  function WFPlayer(id) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, WFPlayer);

    this.id = id;
    this.formView = null;
    this.theme = null;
    this.reactMgr = new _WFReactMgr2.default({
      app: WFPlayer.getPublicMethod(this),
      DOMNode: "#wf-" + id,
      displayName: WF_PLAYER + "-" + id,
      componentClass: _WFPlayerComponent2.default
    });
    WFPlayer.init(this, config);
  }

  /**
   * Get the id
   */


  (0, _createClass3.default)(WFPlayer, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }

    /**
     * Start the player form
     * @param delay for loader
     * @param stepIndex
     */

  }, {
    key: "onStart",
    value: function onStart() {
      var stepIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this.reactMgr.display();
      this.onReload(delay, stepIndex);
    }

    /**
     * Stop the player form
     */

  }, {
    key: "onStop",
    value: function onStop() {
      this.reactMgr.hidden();
    }

    /**
     * Load the player
     */

  }, {
    key: "onLoad",
    value: function onLoad() {
      if (this.formView) {
        this.formView.onLoad();
      }
    }

    /**
     * Reset the player
     * @param delay for loader
     * @param toStepIndex
     */

  }, {
    key: "onReload",
    value: function onReload() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var toStepIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var stepIndex = 0;
      if ((0, _Lodash.isNumber)(toStepIndex)) {
        stepIndex = toStepIndex;
      }
      if (this.formView) {
        this.formView.onReload(delay, stepIndex);
      }
    }

    /**
     * Select prev step
     */

  }, {
    key: "onPrev",
    value: function onPrev() {
      if (this.formView) {
        this.formView.onPrev();
      }
    }

    /**
     * Select next step
     */

  }, {
    key: "onNext",
    value: function onNext() {
      if (this.formView) {
        this.formView.onNext();
      }
    }

    /**
     * Select step by index
     * @param stepIndex
     */

  }, {
    key: "onSelect",
    value: function onSelect() {
      var stepIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.formView) {
        this.formView.onSelectByIndex(stepIndex);
      }
    }

    /**
     * Change status to edit
     */

  }, {
    key: "onEdit",
    value: function onEdit() {
      if (this.formView) {
        this.formView.onEdit();
      }
    }

    /**
     * Submit values
     * @param next callback {onError, onSuccess} is optional for external manager
     */

  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (this.formView) {
        this.formView.onSubmit(next);
      }
    }

    /**
     * Clear the player values
     */

  }, {
    key: "onClear",
    value: function onClear() {
      if (this.formView) {
        this.formView.onClear();
      }
    }

    /**
     * Forward call
     */

  }, {
    key: "on",
    value: function on(evenType) {
      var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.formView) {
        this.formView.on(evenType, eventArgs);
      }
    }

    /**
     * Forward call
     */

  }, {
    key: "onField",
    value: function onField(fieldName, evenType) {
      var eventArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.formView) {
        this.formView.onField(fieldName, evenType, eventArgs);
      }
    }

    /**
     * Caching new player instance
     * @param player instance of WFPlayer
     */

  }], [{
    key: "set",
    value: function set(player) {
      return store.set((0, _defineProperty3.default)({}, player.getId(), player));
    }

    /**
     * Get player instance by id
     */

  }, {
    key: "get",
    value: function get(id) {
      return store.get(id);
    }

    /**
     * Get all player
     * @return object contains all player instance
     */

  }, {
    key: "getAll",
    value: function getAll() {
      return store.getValue();
    }

    /**
     * Find all dom element with className {.wf-player} and create player instance with.
     */

  }, {
    key: "onSearchAndDeploy",
    value: function onSearchAndDeploy() {
      var i = 0;
      var elems = document.querySelectorAll("." + WF_PLAYER);
      var l = elems.length;
      if (l > 0) {
        for (; i < l; i++) {
          var elem = elems[i];
          WFPlayer.create(elem);
        }
      }
    }

    /**
     * Create new player instance by dom element and caching in store
     * the dom element contains {id, ...params}
     * @param elem 
     * @code
     * <div 
     * id="@entry_id" 
     * className="wf-player" 
     * data-start="@boolean" 
     * data-step="@index" 
     * data-entry="@entry_id"
     * >
     * @/code
     */

  }, {
    key: "create",
    value: function create(elem) {
      var id = parseInt(elem.id.match(/\d+/)[0]);
      var params = elem.dataset;
      var start = true;
      var step = null;
      var entry = null;
      if (params.hasOwnProperty("start")) {
        start = params.start == true;
      }
      if (params.hasOwnProperty("step")) {
        step = parseInt(params.step);
      }
      if (params.hasOwnProperty("entry")) {
        entry = parseInt(params.entry);
      }
      if ((0, _Lodash.isNumber)(id)) {
        var player = new WFPlayer(id, { start: start, step: step, entry: entry });
        WFPlayer.set(player);
      }
    }

    /**
     * Check if wfc exist by id
     * @param id of player
     * @return id || wfc
     */

  }, {
    key: "itLoaded",
    value: function itLoaded(id) {
      var target = "wfc_" + id;
      if (window.hasOwnProperty(target) && window[target].hasOwnProperty("wfc")) {
        return window[target]["wfc"];
      } else {
        return id;
      }
    }

    /**
     * For Mobile devise 
     * Upgrade custom theme by minimalist theme
     */

  }, {
    key: "mobileMinimalistSetting",
    value: function mobileMinimalistSetting(player) {
      var settingMgr = player.formView.getSettingMgr();
      if (player.theme === "WFTheme") {
        if ((0, _Mobile.isMobileSize)()) {
          settingMgr.select("WFCorporateTheme");
          player.formView.changeSetting();
        } else {
          if (player.theme !== settingMgr.getCurrent()) {
            settingMgr.select(player.theme);
            player.formView.changeSetting();
          }
        }
      }
    }

    /**
     * Initialize new player instance
     * @param player instance of WFPlayer
     * @param config {step, start, entry}
     */

  }, {
    key: "init",
    value: function init(player) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _config$step = config.step,
          step = _config$step === undefined ? 0 : _config$step,
          _config$start = config.start,
          start = _config$start === undefined ? true : _config$start,
          _config$entry = config.entry,
          entry = _config$entry === undefined ? 0 : _config$entry;

      _WFPlayerClient2.default.findFormById(WFPlayer.itLoaded(player.getId()), {
        onError: function onError(err) {
          return console.error(err);
        },
        onSuccess: function onSuccess(formConfig, formConfigState, formEntryState) {
          var _context;

          var formView = new _WFormView2.default(formEntryState, false);
          player.formView = formView;
          player.sub = (_context = player.formView).sub.bind(_context);
          player.pub = (_context = player.formView).pub.bind(_context);
          player.theme = player.formView.getSettingMgr().getCurrent();
          WFPlayer.mobileMinimalistSetting(player);
          _windowWatcher2.default.on('resize', function () {
            return WFPlayer.mobileMinimalistSetting(player);
          });
          if (!formEntryState.hasEntryId() && formEntryState.getPublished()) {
            new _WFPlayerAnalytics2.default(player);
          }
          if (start) {
            player.onStart(step);
          }
        }
      });
    }

    /**
     * Create public api for high order component
     * @param player is instance
     * @return object contain player's public method
     */

  }, {
    key: "getPublicMethod",
    value: function getPublicMethod(player) {
      return {
        on: player.on.bind(player),
        onField: player.onField.bind(player),
        onPrev: player.onPrev.bind(player),
        onNext: player.onNext.bind(player),
        onSubmit: player.onSubmit.bind(player)
      };
    }
  }]);
  return WFPlayer;
}();

exports.default = WFPlayer;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _WFBoolean = __webpack_require__(88);

var _WFBoolean2 = _interopRequireDefault(_WFBoolean);

var _WFPlayerClient = __webpack_require__(123);

var _WFPlayerClient2 = _interopRequireDefault(_WFPlayerClient);

var _WFConstants = __webpack_require__(30);

var _WFEventTypes = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WFPlayerAnalytics = function () {

  /**
   * Constructor
   * this.view is flag check if the form is mounted
   * this.uncompleted is flag check if the form is uncompleted
   * this.completed is flag check if the form is success
   * this.formName is current form's name
   * @param player instance of WFPlayer
   */
  function WFPlayerAnalytics(player) {
    (0, _classCallCheck3.default)(this, WFPlayerAnalytics);

    this.view = new _WFBoolean2.default();
    this.uncompleted = new _WFBoolean2.default();
    this.completed = new _WFBoolean2.default();
    this.isObservable = new _WFBoolean2.default();
    this.formName = player.formView.getFormState().getName();
    // Fire events
    this.observe(player);
  }

  /**
   * Observe player's events to fire action
   * @param player instance of WFPlayer
   */


  (0, _createClass3.default)(WFPlayerAnalytics, [{
    key: "observe",
    value: function observe(player) {
      var _this = this;

      /**
       * Action view
       */
      player.sub(_WFEventTypes.WF_EVENT_ONEDIT, function () {
        if (_this.view.isFalse()) {
          _WFPlayerClient2.default.incrViewCount(_this.formName, function () {
            _this.view.toggle();
            setTimeout(function () {
              return _this.isObservable.toggle();
            }, 1000);
          });
        }
      });

      /**
       * Action uncompleted
       */
      player.sub(_WFConstants.WF_VALUES_CHANGE, function () {
        if (_this.uncompleted.isFalse() && _this.isObservable.isTrue()) {
          _WFPlayerClient2.default.incrUncompletedCount(_this.formName, function () {
            return _this.uncompleted.toggle();
          });
        }
      });

      /**
       * Action completed
       */
      player.sub(_WFEventTypes.WF_EVENT_ONSUCCESS, function () {
        if (_this.completed.isFalse() && _this.isObservable.isTrue()) {
          _WFPlayerClient2.default.incrCompletedCount(_this.formName, function () {
            return _this.completed.toggle();
          });
        }
      });
    }
  }]);
  return WFPlayerAnalytics;
}();

exports.default = WFPlayerAnalytics;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _WFormComponent = __webpack_require__(165);

var _WFormComponent2 = _interopRequireDefault(_WFormComponent);

var _WFInputFactory = __webpack_require__(162);

var _WFInputFactory2 = _interopRequireDefault(_WFInputFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------- //

// WF PLAYER COMPONENT ------------------- //

// ------------------- //

var WFPlayerComponent = function (_Component) {
  (0, _inherits3.default)(WFPlayerComponent, _Component);

  function WFPlayerComponent() {
    (0, _classCallCheck3.default)(this, WFPlayerComponent);
    return (0, _possibleConstructorReturn3.default)(this, (WFPlayerComponent.__proto__ || (0, _getPrototypeOf2.default)(WFPlayerComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(WFPlayerComponent, [{
    key: "render",
    value: function render() {
      var app = this.props.app; // => the formView

      return _react2.default.createElement(
        "wf-player",
        null,
        _react2.default.createElement(_WFormComponent2.default, {
          isEditable: false,
          navigation: true,
          onPrev: function onPrev() {
            return app.onPrev();
          },
          onNext: function onNext() {
            return app.onNext();
          },
          onSubmit: function onSubmit() {
            return app.onSubmit();
          },
          on: function on(evenType) {
            var eventArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            app.on(evenType, eventArgs);
          },
          onField: function onField(name, evenType) {
            var eventArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            app.onField(name, evenType, eventArgs);
          },
          onGetInput: function onGetInput(type, input_type, isAdminForm) {
            return _WFInputFactory2.default.get(type, input_type, isAdminForm);
          }
        })
      );
    }
  }]);
  return WFPlayerComponent;
}(_react.Component);

// ------------------- //


exports.default = WFPlayerComponent;
// ------------------- /

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WFPlayer = __webpack_require__(240);

var _WFPlayer2 = _interopRequireDefault(_WFPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_WFPlayer2.default.onSearchAndDeploy();

window.WFPlayer = _WFPlayer2.default;

/***/ }),
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */
/***/ (function(module, exports) {

module.exports = Ajv;

/***/ }),
/* 387 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
module.exports = __webpack_require__(150);


/***/ })
],[388]);