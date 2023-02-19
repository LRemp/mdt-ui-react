export const getPersons = (query) => ({
  type: 'get-persons',
  data: query,
});

export const registerPerson = (query) => ({
  type: 'register-citizen',
  data: query
})

export const updatePerson = (query) => ({
  type: 'update-citizen',
  data: query
})

export const saveNotes = (query) => ({
  type: 'save-notes',
  data: query
})
  