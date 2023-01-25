import React from 'react';
import { render } from '@testing-library/react-native';

import InfoBar from './InfoBar';

describe('Info Bar', () => {
  it('renders the info', () => {
    const screen = render(<InfoBar itemCount="9" />);
    const info = screen.queryByText('9 ITEMS IN YOUR BASKET');
    expect(info).toBeOnTheScreen();
  });
});
