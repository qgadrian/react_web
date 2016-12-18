// ------------------------------------
// Constants
// ------------------------------------
export const ADD_STORE_FILTER = 'ADD_STORE_FILTER'
export const REMOVE_STORE_FILTER = 'REMOVE_STORE_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export function addStoreFilter (filter) {
  return {
    type: ADD_STORE_FILTER,
    filter
  }
}

export function removeStoreFilter (filter) {
  return {
    type: REMOVE_STORE_FILTER,
    filter
  }
}

export const actions = {
  addStoreFilter,
  removeStoreFilter
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_STORE_FILTER]: (state, action) => (
    { ...state,
      filters: [...state.filters, action.filter]
    }
  ),
  [REMOVE_STORE_FILTER]: (state, action) => (
    { ...state,
      filters: [...state.filters.filter((item, index) => item !== action.filter)]
    }
  )
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  filters: []
}
export default function storesFilter (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
