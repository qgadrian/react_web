import { connect } from 'react-redux'
import Products from '../components/Products'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  stores : state.stores,
  locale: state.locale
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
