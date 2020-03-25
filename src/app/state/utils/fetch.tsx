import isomorphicFetch from 'isomorphic-fetch';
import { checkHttpStatus, parseJSON } from './index';

const fetchWrapper = (url: string, config: any, handleResult: any) =>
  isomorphicFetch(`${url}`, config)
    // @ts-ignore
    .then(checkHttpStatus)
    .then(parseJSON)
    .then((result: any) => handleResult(result))
    .catch((err: any) => {
      console.log(err, 'raw error');
      const defaultError = {
        status: 401,
        parameters: [],
        description: '',
        message: '',
        // @ts-ignore
        rand: Math.random(10),
      };
      const body = err && err.body ? err.body : defaultError;
      throw Object.assign({}, defaultError, body);
    });

export default fetchWrapper;
