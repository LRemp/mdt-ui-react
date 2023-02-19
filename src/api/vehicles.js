export const getVehicles = (query) => ({
  type: 'get-vehicles',
  data: query,
});

export const updateVehicleState = (query) => ({
  type: 'update-vehicle-state',
  data: query,
});
  