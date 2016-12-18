import React from 'react'
import Translate from 'react-translate-component'
import {
  STORE_PROP_SELLS_COW,
  STORE_PROP_SELLS_LAMB
} from '../interfaces/Store'

function checkFilter (filters, filterName) {
  if (filters) {
    return filters.includes(filterName)
  }

  return false
}

const Filter = (props) => (
  <div className='filter'>
    <label htmlFor={props.storeProperty}>
      <Translate content={'stores.filters.' + props.storeProperty} />
    </label>
    <input id={props.storeProperty} type='checkbox'
      data-store-property={props.storeProperty}
      onChange={props.onFilterClick}
      checked={checkFilter(props.filters, props.storeProperty)}
    />
  </div>
)

Filter.propTypes = {
  onFilterClick: React.PropTypes.func,
  storeProperty: React.PropTypes.string.isRequired,
  filters: React.PropTypes.array
}

export const Filters = (props) => (
  <div className='filters'>
    <Translate className='title' content={'stores.filters.title'} />
    <div className='group'>
      <div className='title'>
        <Translate content={'stores.filters.type.sell_type'} />
      </div>
      <div className='wrapper'>
        <Filter
          className='button'
          storeProperty={STORE_PROP_SELLS_COW}
          onFilterClick={props.onFilterClick}
          filters={props.filters}
        />
        <Filter
          storeProperty={STORE_PROP_SELLS_LAMB}
          onFilterClick={props.onFilterClick}
          filters={props.filters}
        />
      </div>
    </div>
  </div>
)

Filters.propTypes = {
  onFilterClick: React.PropTypes.func,
  filters: React.PropTypes.array
}
