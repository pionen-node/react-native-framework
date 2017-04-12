import { Drawer as BaseDrawer, View } from 'native-base';
import React, { Component, PropTypes } from 'react';

export default class Drawer extends Component {
  static propTypes = {
    renderSidebar: PropTypes.func,
    style: PropTypes.object,
  };
  render() {
    return (
      <BaseDrawer
        content={this.renderSidebar()}
      >
        {this.renderContent()}
      </BaseDrawer>
    );
  }
  renderSidebar() {
    const style = _.merge(
      {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 20
      },
      this.props.style
    );

    return (
      <View {...{style}}>
        {this.props.renderSidebar && this.props.renderSidebar()}
      </View>
    );
  }
  renderContent() {
    return this.props.children || null;
  }
}