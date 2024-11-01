webpackJsonp([0],{

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fields = undefined;

var _wfEnv = __webpack_require__(152);

var _wfEnv2 = _interopRequireDefault(_wfEnv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sampleUrl = __WF__.ASSETS + "/img/sample/";

var image1 = sampleUrl + "1.jpg";
var image2 = sampleUrl + "2.jpg";
var image3 = sampleUrl + "3.jpg";
var image4 = sampleUrl + "4.jpg";

var shortLegend = "The standard Lorem Ipsum passage, used since the 1500s";
var mediumLegend = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
var largeLegend = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";

var fields = exports.fields = {

  select2: _wfEnv2.default ? [{
    "id": "001",
    "label": "Option 1",
    "name": "option-1-001",
    "legend": mediumLegend,
    "image": image1
  }, {
    "id": "002",
    "label": "Option 2",
    "name": "option-1-002",
    "legend": mediumLegend,
    "image": image2
  }, {
    "id": "003",
    "label": "Option 3",
    "name": "option-1-003",
    "legend": mediumLegend,
    "image": image3
  }] : [],

  selectWord: _wfEnv2.default ? [{
    "id": "519",
    "label": "Option 1",
    "name": "2-519"
  }, {
    "id": "520",
    "label": "Option 2",
    "name": "3-520"
  }, {
    "id": "521",
    "label": "Option 3",
    "name": "4-521"
  }, {
    "id": "522",
    "label": "Option 4",
    "name": "5-522"
  }, {
    "id": "523",
    "label": "Option 5",
    "name": "6-523"
  }, {
    "id": "524",
    "label": "Option 6",
    "name": "7-524"
  }] : [],

  selectBubble: _wfEnv2.default ? [{
    "id": "518",
    "label": "1",
    "name": "1-518"
  }, {
    "id": "519",
    "label": "2",
    "name": "2-519"
  }, {
    "id": "520",
    "label": "3",
    "name": "3-520"
  }, {
    "id": "521",
    "label": "4",
    "name": "4-521"
  }, {
    "id": "522",
    "label": "5",
    "name": "5-522"
  }] : [],

  selectLine: _wfEnv2.default ? [{
    "id": "001",
    "label": "Option 1",
    "name": "option-1-001",
    "legend": largeLegend,
    "image": image1
  }, {
    "id": "002",
    "label": "Option 2",
    "name": "option-1-002",
    "legend": largeLegend,
    "image": image2
  }] : [],

  selectImage: _wfEnv2.default ? [{
    "id": "001",
    "label": "Option 1",
    "name": "option-1-001",
    "legend": shortLegend,
    "image": image1
  }, {
    "id": "002",
    "label": "Option 2",
    "name": "option-1-002",
    "legend": shortLegend,
    "image": image2
  }, {
    "id": "003",
    "label": "Option 3",
    "name": "option-1-003",
    "legend": shortLegend,
    "image": image3
  }, {
    "id": "004",
    "label": "Option 4",
    "name": "option-1-004",
    "legend": shortLegend,
    "image": image4
  }] : []
};

//export fields;

/***/ })

});