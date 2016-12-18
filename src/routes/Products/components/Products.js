import React from 'react'
import Product from './Product'
import './Products.scss'
const counterpart = require('counterpart')

const fetch = require('node-fetch')

export default class Products extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      dataLocale: counterpart.getLocale(),
      products: null
    }
  }

  componentWillMount () {
    this.refreshProducts()
  }

  componentWillUpdate () {
    this.refreshProducts()
  }

  shouldComponentUpdate (newProps, newState) {
    const localeWasUpdated = newProps.locale.locale !== newState.dataLocale
    const isFirstView = !this.state.products

    if (localeWasUpdated) {
      this.setState({ dataLocale: this.props.locale.locale })
    }

    return localeWasUpdated || isFirstView
  }

  refreshProducts () {
    const self = this

    fetch(window.location.origin + '/api/products')
      .then(function (res) {
        return res.text()
      }).then(function (body) {
        self.setState({ products: JSON.parse(body) })
      })
  }

  getProducts () {
    if (this.state.products) {
      return this.state.products.map((product) =>
        <Product
          key={product.id}
          productNumber={product.id}
          title={product.title}
          description={product.description}
          imageUrl={product.image} />
      )
    } else {
      return <p>Loading product...</p>
    }
  }

  render () {
    return (
      <div className='products'>
        {this.getProducts()}
      </div>
    )
  }
}

Products.propTypes = {
  locale: React.PropTypes.object.isRequired
}
