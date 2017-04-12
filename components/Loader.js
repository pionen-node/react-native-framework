import { Spinner, View } from 'native-base';
import React, { Component, PropTypes } from 'react';

export default class Loader extends Component {
  static propTypes = {
    isReady: PropTypes.bool,
    renderLoader: PropTypes.func,
  };
  render() {
    if (! this.props.isReady) {
      return this.renderLoader();
    }

    return this.renderContent();
  }
  renderLoader() {
    if (this.props.renderLoader) {
      return this.props.renderLoader();
    }

    const {style} = this;

    return (
      <View padder style={style.loaderView}>
        <Spinner color={style.loaderSpinner.color}/>
      </View>
    );
  }
  renderContent() {
    return this.props.children || null;
  }
  get style() {
    return {
      loaderView: _.merge(
        {
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        },
        this.props.style,
      ),
      loaderSpinner: {
        color: '#000',
      },
    };
  }
}