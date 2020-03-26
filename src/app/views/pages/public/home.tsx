import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';

import { productOperations, productSelectors } from '../../../state/ducks/product';
import { getProducts } from '../../../state/ducks/product/selectors';

type productItem = {
  name: string;
  description: string;
  price: number;
}

type localProps = {
  products: Array<productItem>;
  fetchProducts: () => void;
}

const HomePage = (props: localProps) => {

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const displayProduct = (products: Array<productItem>) => {

    return (
      <Row gutter={16}>
        {
          products.map((item: productItem, index: number) => {
            return (
              <Col key={index} className="gutter-row" span={8}>
                <Card>
                  <p>name: {item.name}</p>
                  <p>description: {item.description}</p>
                  <p>price: {item.price}</p>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    )
  };

  return (
    <div>
      {props.products && displayProduct(props.products)}
    </div>
  )


}

export default connect(
  state => ({
    products: productSelectors.getProducts(state)
  }),
  {
    fetchProducts: productOperations.fetchProducts
  }
)(HomePage);