export type Store = {
  id: number,
  name: string,
  maker: {
    position: {
      lat: number,
      lng: number
    },
    key: string,
    defaultAnimation: number
  },
  properties: Array<String>
}

export const STORE_PROP_SELLS_COW = 'STORE_PROP_SELLS_COW'
export const STORE_PROP_SELLS_LAMB = 'STORE_PROP_SELLS_LAMB'

export function getMockedStores () {
  const store1 = {
    id: 'store1',
    name: 'Store 1',
    maker: {
      position: {
        lat: 43.374744,
        lng: -8.4293898
      },
      key: 'store1',
      defaultAnimation: 2
    },
    properties: [STORE_PROP_SELLS_COW, STORE_PROP_SELLS_LAMB]
  }

  const store2 = {
    id: 'store1',
    name: 'Store 1',
    maker: {
      position: {
        lat: 43.3712183,
        lng: -8.42967570000001
      },
      key: 'store2',
      defaultAnimation: 2
    },
    properties: [STORE_PROP_SELLS_COW]
  }

  return [
    store1,
    store2
  ]
}
