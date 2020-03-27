import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { cartOperations, cartSelectors } from '../../../state/ducks/cart';

const CartPage = (props: any) => {
  return (
    <Row gutter={16}>
      {props.cartProducts && props.cartProducts.length && props.cartProducts.map((item: any, index: any) => {
        return (
          <Col key={index} className="gutter-row" span={8} offset={8}>
            <Card>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <CloseOutlined />
            </Card>
          </Col>
        )
      })}

      {
        (!props.cartProducts || props.cartProducts.length == 0) && (
          <Col span={10} offset={7}>
            <h3>No items found</h3>
          </Col>
        )
      }
    </Row>

  )
}

export default connect(
  state => ({
    cartProducts: cartSelectors.getProducts(state)
  }),
  {
    deleteProduct: cartOperations.addProductToCart
  }
)(CartPage);