const parseJSON = (response: any) => {
  return response.method.text().then((text: any) => {
    return text ? JSON.parse(text) : {};
  });
};

export default parseJSON;
