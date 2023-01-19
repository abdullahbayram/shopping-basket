import React from 'react';
import { render } from '@testing-library/react-native';

import Input from './Input';

describe('<Input />', () => {
  it('renders the placeholder', () => {
    const screen = render(<Input placeholder="Email" />);
    const input = screen.queryByPlaceholderText('Email');
    expect(input).toBeOnTheScreen();
  });
});
