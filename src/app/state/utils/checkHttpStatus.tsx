type responseTypes = {
  json: any;
  status: number;
  statusText: string;
};

const checkHttpStatus = (response: responseTypes): any => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then((json: any) =>
    Promise.reject({
      status: response.status,
      ok: false,
      statusText: response.statusText,
      body: json,
      rand: Math.random(),
    })
  );
};

export default checkHttpStatus;
