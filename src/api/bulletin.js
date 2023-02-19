export const getBulletin = () => ({
  type: 'get-bulletin',
});

export const updateBulletin = (text) => ({
  type: 'update-bulletin',
  data: { text },
});
