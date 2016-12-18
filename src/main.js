import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'

const counterpart = require('counterpart')

counterpart.registerTranslations('en', {
  header: {
    locale: {
      switch: 'Switch language: '
    },
    menu: {
      home: 'Home',
      services: 'Services',
      products: 'Products',
      stores: 'Stores'
    }
  },
  footer: {
    address: 'C/ Lorem ipsum',
    phone: '+34 666 666 666',
    email: 'contact@company.com'
  },
  home: {
    title: 'We sell quality meat'
  },
  services: {
    service: {
      title: 'Service %(serviceNumber)s title',
      description: 'Service %(serviceNumber)s description'
    }
  },
  stores: {
    filters: {
      title: 'Search stores...',
      type: {
        sell_type: 'Sells...'
      },
      STORE_PROP_SELLS_COW: 'Cow meat',
      STORE_PROP_SELLS_LAMB: 'Lamb meat'
    }
  }
})

counterpart.registerTranslations('es', {
  header: {
    locale: {
      switch: 'Cambiar idioma: '
    },
    menu: {
      home: 'Inicio',
      services: 'Servicios',
      products: 'Productos',
      stores: 'Tiendas'
    }
  },
  footer: {
    address: 'C/ Lorem ipsum',
    phone: '+34 666 666 666',
    email: 'contact@company.com'
  },
  home: {
    title: 'Vendemos carne de calidad'
  },
  services: {
    service: {
      title: 'Nombre del servicio %(serviceNumber)s',
      description: 'Descripcion del servicio %(serviceNumber)s'
    }
  },
  stores: {
    filters: {
      title: 'Buscar tiendas...',
      type: {
        sell_type: 'Venta...'
      },
      STORE_PROP_SELLS_COW: 'Carne de ternera',
      STORE_PROP_SELLS_LAMB: 'Carne de cordero'
    }
  }
})

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render()
