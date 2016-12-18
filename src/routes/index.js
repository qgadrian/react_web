import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import StoresRoute from './Stores'
import ProductsRoute from './Products'
import ServicesRoute from './Services'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    StoresRoute(store),
    ProductsRoute(store),
    ServicesRoute(store)
  ]
})

export default createRoutes
