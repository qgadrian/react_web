// ------------------------------------
// Constants
// ------------------------------------
export const ADD_STORE_FILTER = 'ADD_STORE_FILTER'

// ------------------------------------
// Actions
// ------------------------------------
export function addStoreFilter (filter) {
  return {
    type    : ADD_STORE_FILTER,
    filter
  }
}

export const actions = {
  addStoreFilter
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_STORE_FILTER]    : (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  filters: []
}
export default function storesFilterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
