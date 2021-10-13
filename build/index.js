"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("hi");
});
app.get("/hello/:person?", function (req, res) {
  if (req.params.person) {
    res.send("Hello person ".concat(req.params.person));
  }
});
app.listen(5000, function () {
  console.log("Server started on port 5000");
});