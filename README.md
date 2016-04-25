Mongoose plugin updatedat [![NPM version][npm-image]][npm-url]
============================

Simple mongoose plugin to add a updated_at property to your schema, that automatically update with timestamp on change.

## Install

```
npm install --save mongoose-plugin-updatedat
```

## Usage

```
const Schema = require('mongoose').Schema;
const mongoosePluginUpdatedAt = require('mongoose-plugin-updatedat');

let MySchema = new Schema({ ... });
MySchema.plugin(mongoosePluginUpdatedAt);
```

## Options

Available options:
- ```index```: if you want to index the property
- ```name```: the name of the field - default is updated_at

### Example

```
const Schema = require('mongoose').Schema;
const mongoosePluginUpdatedAt = require('mongoose-plugin-updatedat');

let MySchema = new Schema({ ... });
MySchema.plugin(mongoosePluginUpdatedAt, {
  index: true,
  name: 'updated_at_custome_name',
});
```

## License

MIT


[npm-image]: https://img.shields.io/npm/v/mongoose-plugin-updatedat.svg?style=flat
[npm-url]: https://npmjs.org/package/mongoose-plugin-updatedat
