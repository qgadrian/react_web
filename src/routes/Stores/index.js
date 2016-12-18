import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'stores',
  getComponent (nextState, callback) {
    require.ensure([
      './containers/StoreContainer',
      './modules/storesFilter'
    ], (require) => {
      const StoreContainer = require('./containers/StoreContainer').default
      const reducer = require('./modules/storesFilter').default

      injectReducer(store, { key: 'stores', reducer })

      callback(null, StoreContainer)
    }, 'stores')
  }
})
