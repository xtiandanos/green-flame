type configuration = {
  method: string;
  headers: Object;
  body?: any;
};

const config = (
  method: string,
  data?: Object,
  token?: string
): configuration => {
  const options = {
    method,
    headers: !token ? requestHeaders() : requestHeadersWithToken(token),
    body: method !== 'GET' ? JSON.stringify(data) : null,
  };
  return options;
};

function requestHeaders(): Object {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
}

function requestHeadersWithToken(token: string): Object {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
}

export default config;
