module.exports = exports = (schema, { index = null, name = 'updated_at' } = {}) => {
  let fieldProperties = {};
  fieldProperties[name] = Date;
  schema.add(fieldProperties);

  schema.pre('save', function (next) {
    this[name] = new Date;
    next();
  });

  if (index) {
    schema.path(name).index(index);
  }
};
