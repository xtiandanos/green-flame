import { getHttpConfig, fetch } from '../utils';

type Props = {
  path: any;
  method: string;
  data?: any;
  token?: string;
};

const consumerApiService = (props: Props) => fetch(
  `${process.env.REACT_APP_CONSUMER_API_URL}${props.path}`,
  getHttpConfig(props.method, props.data, props.token),
  (response: any) => response,
);

const orderApiService = (props: Props) => fetch(
  `${process.env.REACT_APP_ORDER_API_URL}${props.path}`,
  getHttpConfig(props.method, props.data, props.token),
  (response: any) => response,
);

const coreApiService = (props: Props) => fetch(
  `${process.env.REACT_APP_CORE_API_URL}${props.path}`,
  getHttpConfig(props.method, props.data, props.token),
  (response: any) => response,
);

export { consumerApiService, orderApiService, coreApiService };
