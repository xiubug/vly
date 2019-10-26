const base = require('../../jest.config')

module.exports = {
  ...base,
  name: 'Vly',
  displayName: 'Vly',
  setupFiles: [
    'jest-canvas-mock'
  ]
}
