import { connectComponent } from '@pionen-node/react-native-framework/support';
import { Container as NativeContainer, Content, View } from 'native-base';
import React, { Component, PropTypes } from 'react';

class Container extends Component {
  static defaultProps = {
    isScrollable: false,
  };
  static propTypes = {
    isScrollable: PropTypes.bool,
  };
  render() {
    return (
      <NativeContainer>
        {this.renderContent()}
      </NativeContainer>
    );
  }
  renderContent() {
    const DynamicContent = this.props.isScrollable ? Content : View;
    const {style} = this.props;

    return (
      <DynamicContent padder {...{style}}>
        {this.props.children || null}
      </DynamicContent>
    );
  }
}

export default connectComponent({
  namespace: 'App.Container',
  style: {
    flex: 1,
  },
})(Container);