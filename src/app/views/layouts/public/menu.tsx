import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class MenuNav extends Component<{}, {}> {
  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="welcome">
          <Link to="/welcome">Home</Link>
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      </Menu>
    )
  }

}

export default MenuNav;