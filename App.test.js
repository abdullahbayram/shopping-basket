import React from 'react';
import { render } from '@testing-library/react-native';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import App from './App';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

describe('<App />', () => {
  it('renders the description', () => {
    const screen = render(<App />);
    const description = screen.queryByText('Open up App.js to start working on your app!');
    expect(description).toBeOnTheScreen();
  });
});
