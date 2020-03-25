import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class HomePage extends Component<{}, {}> {
  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {

    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/welcome">Home</Link>
        </Menu.Item>
        <Menu.Item key="alipay">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      </Menu>
    );
  }

}

export default HomePage;