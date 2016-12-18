// ------------------------------------
// Constants
// ------------------------------------
export const SET_LOCALE = 'SET_LOCALE'

// ------------------------------------
// Actions
// ------------------------------------
export function setLocale (locale) {
  return {
    type: SET_LOCALE,
    locale
  }
}

export const actions = {
  setLocale
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_LOCALE]: (state, action) => (
    { ...state,
      locale: action.locale
    }
  )
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  locale: 'en'
}
export default function locales (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
