import { useCallback } from 'react';
import { TEST_DATA } from '../mocks/api';
import { GetParentResourceName } from '../fivem';

const useApi = () => {
  const request = useCallback(({ type, ...rest }) => {
    if(process.env.NODE_ENV === 'development') return TEST_DATA[type];

    return fetch(`https://${GetParentResourceName()}/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(rest),
    })
      .then((resp) => resp.json())
      .catch(() => TEST_DATA[type]);
  }, []);

  return request;
};

export default useApi;
