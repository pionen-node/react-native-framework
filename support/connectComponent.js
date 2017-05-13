import { connectStyle } from '@shoutem/theme';
import * as _ from 'lodash';
import React, { PropTypes } from 'react';
import { compose, getContext, isClassComponent, mapProps, toClass, withProps } from 'recompose';

const connectComponent = (options = {}) => {
  return (BaseComponent) => {
    if (isClassComponent(BaseComponent.MainComponent)) {
      BaseComponent = BaseComponent.MainComponent;
    }

    _.defaultsDeep(
      options, _.pick(BaseComponent, _.union(
        ['config', 'namespace', 'navigationOptions', 'style'], Reflect.ownKeys(options)),
      ),
    );

    const MainComponent = _.merge(class extends BaseComponent {}, options);
    const HighComponent = _.merge(
      toClass(
        compose(
          getContext({
            app: PropTypes.object,
          }),
          connectStyle(options.namespace, options.style)
        )(MainComponent),
      ),
      options,
      {
        BaseComponent,
        MainComponent, class: MainComponent,
      },
    );

    return HighComponent;
  }
};

export default connectComponent;
export {
  connectComponent,
  connectStyle,
};