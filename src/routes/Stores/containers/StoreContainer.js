import { connect } from 'react-redux'
import { addStoreFilter, removeStoreFilter } from '../modules/storesFilter'
import Stores from '../components/Stores'

const mapDispatchToProps = {
  addStoreFilter : (filter) => addStoreFilter(filter),
  removeStoreFilter: (filter) => removeStoreFilter(filter)
}

const mapStateToProps = (state) => ({
  stores : state.stores
})

export default connect(mapStateToProps, mapDispatchToProps)(Stores)
