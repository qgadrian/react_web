export default (store) => ({
  path : 'services',
  getComponent (nextState, callback) {
    require.ensure([], (require) => {
      const ServicesContainer = require('./containers/ServicesContainer').default

      callback(null, ServicesContainer)
    }, 'services')
  }
})
