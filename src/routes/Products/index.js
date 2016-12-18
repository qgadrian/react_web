export default (store) => ({
  path : 'products',
  getComponent (nextState, callback) {
    require.ensure([], (require) => {
      const ProductsContainer = require('./containers/ProductsContainer').default

      callback(null, ProductsContainer)
    }, 'products')
  }
})
