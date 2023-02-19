export const getActiveWarrants = () => ({
  type: 'active-warrants',
});

export const getWarrants = (query) => ({
  type: 'get-warrants',
  data: query,
})

export const createWarrant = (query) => ({
  type: 'create-warrant',
  data: query,
})

export const deleteWarrant = (query) => ({
  type: 'delete-warrant',
  data: query,
})
