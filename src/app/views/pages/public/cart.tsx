import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { cartOperations, cartSelectors } from '../../../state/ducks/cart';
import * as ProductTypes from '../../../state/ducks/product/actions-types';

const CartPage = (props: any) => {
  const deleteItem = (item: ProductTypes.ProductItem) => {
    props.deleteProduct(item);
  }


  return (
    <Row gutter={16}>
      {props.cartProducts && props.cartProducts.length && props.cartProducts.map((item: ProductTypes.ProductItem, index: number) => {
        return (
          <Col key={index} className="gutter-row" span={8} offset={8}>
            <Card>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <div onClick={(e: any) => { deleteItem(item) }}>
                <CloseOutlined />
              </div>
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
    deleteProduct: cartOperations.deleteProductInCart
  }
)(CartPage);