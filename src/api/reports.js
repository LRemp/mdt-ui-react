export const getReports = (query) => ({
  type: 'get-reports',
  data: query,
});

export const createReport = (query) => ({
  type: 'create-report',
  data: query,
});

export const updateReport = (query) => ({
  type: 'update-report',
  data: query,
})

export const deleteReport = (query) => ({
  type: 'delete-report',
  data: query,
})


