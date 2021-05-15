
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./platinium-sdk.cjs.production.min.js')
} else {
  module.exports = require('./platinium-sdk.cjs.development.js')
}
