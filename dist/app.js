"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _services = require('./lib/services'); var _services2 = _interopRequireDefault(_services);
const data = _services2.default.call(void 0, 1);

data.then((response) => console.log(response))

// getData(1).then((response) => { console.log(response); })