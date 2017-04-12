import { Body, Button, Container, Content, Header, Icon, Left, Right, StyleProvider, Title, View } from 'native-base';
import React, { Component, PropTypes } from 'react';

export default class AppContainer extends Component {
  static contextTypes = {
    config: PropTypes.shape({
      container: PropTypes.shape({
        theme: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    drawer: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    navigationScene: PropTypes.object.isRequired,
  };
  static defaultProps = {
    isScrollable: false,
  };
  static propTypes = {
    isScrollable: PropTypes.bool,
    title: PropTypes.string,
  };
  render() {
    const {theme} = this.context.config.container;

    return (
      <StyleProvider style={theme}>
        <Container>
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter()}
        </Container>
      </StyleProvider>
    );
  }
  renderHeader() {
    const {drawer, navigation, navigationScene} = this.context;
    const {sceneState} = navigationScene.props;
    const {scene} = sceneState;
    const {route} = scene;

    return (
      <Header>
        <Left>
          {! scene.index ? (
            <Button onPress={() => drawer.open()}>
              <Icon name="menu" />
            </Button>
          ) : (
            <Button onPress={() => navigation.navigate('back')}>
              <Icon name="arrow-back" />
            </Button>
          )}
        </Left>
        <Body>
          <Title>{route.title || this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
  renderContent() {
    const DynamicContent = this.props.isScrollable ? Content : View;
    const style = _.merge(
      {
        flex: 1,
      },
      this.props.style,
    );

    return (
      <DynamicContent padder {...{style}}>
        {this.props.children || null}
      </DynamicContent>
    );
  }
  renderFooter() {
    return null;
  }
}