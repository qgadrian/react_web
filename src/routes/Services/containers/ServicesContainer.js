import { connect } from 'react-redux'

import Services from '../components/Services'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  stores : state.stores
})

export default connect(mapStateToProps, mapDispatchToProps)(Services)
