import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { productOperations, productSelectors } from '../../../state/ducks/product';
import { cartOperations } from '../../../state/ducks/cart';
import * as ProductTypes from '../../../state/ducks/product/actions-types'


type localProps = {
  products: Array<ProductTypes.ProductItem>;
  fetchProducts: () => void;
  addToCart: (data: ProductTypes.ProductItem) => void;
}

const HomePage = (props: localProps) => {

  useEffect(() => {
    props.fetchProducts();
  }, []);

  const addToCart = (item: ProductTypes.ProductItem) => {
    props.addToCart(item);
  }

  const displayProduct = (products: Array<ProductTypes.ProductItem>) => {


    return (
      <Row gutter={16}>
        {
          products.map((item: ProductTypes.ProductItem, index: number) => {
            return (
              <Col key={index} className="gutter-row" span={8}>
                <Card>
                  <p>name: {item.name}</p>
                  <p>description: {item.description}</p>
                  <p>price: {`${process.env.CURRENCY_SYMBOL} ${item.price}`}</p>
                  <div onClick={(e: any) => addToCart(item)}>
                    <PlusOutlined />
                  </div>
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
    products: productSelectors.getProducts(state),
  }),
  {
    fetchProducts: productOperations.fetchProducts,
    addToCart: cartOperations.addProductToCart
  }
)(HomePage);