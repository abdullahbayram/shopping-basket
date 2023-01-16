import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button';

const mockFunc = jest.fn();

describe('<Button />', () => {
  it('calls onPress when pressed', () => {
    const screen = render(<Button title="Basic Button" onPress={mockFunc} />);
    const button = screen.queryByText('Basic Button');
    fireEvent.press(button);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
