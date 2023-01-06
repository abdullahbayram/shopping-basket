import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

describe('<App />', () => {
  it('renders the description', () => {
    const screen = render(<App />);
    const description = screen.queryByText('Open up App.js to start working on your app!');
    expect(description).toBeOnTheScreen();
  });
});
