'use strict';

module.exports = exports = function exports(schema) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$index = _ref.index;
  var index = _ref$index === undefined ? null : _ref$index;
  var _ref$name = _ref.name;
  var name = _ref$name === undefined ? 'updated_at' : _ref$name;

  var fieldProperties = {};
  fieldProperties[name] = Date;
  schema.add(fieldProperties);

  schema.pre('save', function (next) {
    this[name] = new Date();
    next();
  });

  if (index) {
    schema.path(name).index(index);
  }
};