import { connect } from 'react-redux'
import Header from './Header'
import { setLocale } from './modules/locales'

const mapDispatchToProps = {
  setLocale : (locale) => setLocale(locale)
}

const mapStateToProps = (state) => ({
  locale : state.locale
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

// import Header from './Header'
//
// export default Header
