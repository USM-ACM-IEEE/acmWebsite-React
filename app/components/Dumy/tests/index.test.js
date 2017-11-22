import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Dumy from '../index';
import messages from '../messages';

describe('<Dumy />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <Dumy />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
