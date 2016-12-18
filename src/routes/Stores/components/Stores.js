import React from 'react'
import { Filters } from './Filters'
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps'
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'
import { getMockedStores } from '../interfaces/Store'
import './Stores.scss'

const AsyncStoresGoogleMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 43.374744, lng: -8.4293898 }}>
      {props.markers.map(marker => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(marker)}
        />
      ))}
    </GoogleMap>
  ))
)

export default class Stores extends React.Component {
  constructor (props) {
    super(props)

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  getStoreGoogleMapMarkers () {
    const self = this

    const filteredStored = getMockedStores().filter((store, index) => (
      store.properties.some((property) => (
        self.props.stores.filters.length === 0 || self.props.stores.filters.includes(property)
      ))
    ))

    return filteredStored.map((store) =>
      store.maker
    )
  }

  handleFilterChange (event) {
    const filter = event.target.getAttribute('data-store-property')
    const enabled = event.target.checked
    if (enabled) {
      this.props.addStoreFilter(filter)
    } else {
      this.props.removeStoreFilter(filter)
    }
  }

  render () {
    return (
      <div className='stores'>
        <Filters onFilterClick={this.handleFilterChange} filters={this.props.stores.filters} />

        <AsyncStoresGoogleMap
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp'
          loadingElement={
            <div className='loading'>
              <span>Loading...</span>
            </div>
          }
          containerElement={
            <div style={{ height: `600px` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          markers={this.getStoreGoogleMapMarkers()}
        />
      </div>
    )
  }
}

Stores.propTypes = {
  addStoreFilter: React.PropTypes.func.isRequired,
  removeStoreFilter: React.PropTypes.func.isRequired,
  stores: React.PropTypes.shape({
    filters: React.PropTypes.array
  }).isRequired
}
