import React from 'react';
import { render } from '@testing-library/react-native';

import Text from './Text';

describe('<Text />', () => {
  it('renders the text', () => {
    const screen = render(<Text>For more info:</Text>);
    const description = screen.queryByText('For more info:');
    expect(description).toBeOnTheScreen();
  });
});
