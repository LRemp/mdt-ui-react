export const getIncidentReports = (query) => ({
  type: 'get-incident-reports',
  data: query,
});

export const createIncidentReport = (query) => ({
  type: 'create-incident-report',
  data: query,
});

export const updateIncidentReport = (query) => ({
  type: 'update-incident-report',
  data: query,
});

export const deleteIncidentReport = (query) => ({
  type: 'delete-incident-report',
  data: query,
});
  
  