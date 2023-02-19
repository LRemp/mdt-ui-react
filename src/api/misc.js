export const getNewEventId = (query) => ({
  type: 'get-new-event-id',
  data: query,
});

export const hideUI = (query) => ({
  type: 'hide-ui',
  data: query,
});