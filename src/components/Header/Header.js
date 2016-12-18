import React from 'react'
import { IndexLink, Link } from 'react-router'
import Translate from 'react-translate-component'
import cookie from 'react-cookie'

const counterpart = require('counterpart')

const LocaleSwitcher = React.createClass({
  propTypes: {
    setLocale: React.PropTypes.func.isRequired
  },

  handleChange: function (e) {
    const locale = e.target.value
    this.props.setLocale(locale)
    cookie.save('locale', locale, { path: '/' })
    counterpart.setLocale(locale)
  },

  render: function () {
    return (
      <div className='locale_switch'>
        <Translate className='switch_locale' content='header.locale.switch' />

        <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
          <option>en</option>
          <option>es</option>
        </select>
      </div>
    )
  }
})

export default class Header extends React.Component {
  componentWillMount () {
    counterpart.setLocale(cookie.load('locale'))
  }

  render () {
    return (
      <div id='header'>
        <IndexLink to='/' activeClassName='route--active'>
          <Translate content='header.menu.home' />
        </IndexLink>
        {' · '}
        <Link to='/services' activeClassName='route--active'>
          <Translate content='header.menu.services' />
        </Link>
        {' · '}
        <Link to='/products' activeClassName='route--active'>
          <Translate content='header.menu.products' />
        </Link>
        {' · '}
        <Link to='/stores' activeClassName='route--active'>
          <Translate content='header.menu.stores' />
        </Link>
        <LocaleSwitcher setLocale={this.props.setLocale} />
      </div>
    )
  }
}

Header.propTypes = {
  setLocale: React.PropTypes.func.isRequired
}
