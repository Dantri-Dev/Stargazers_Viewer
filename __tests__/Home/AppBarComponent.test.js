import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { AppBarComponent } from '../../src/screens/Home/Components/AppBarComponent';

// Group tests for AppBarComponent
describe('AppBarComponent Component Test Suite', () => {
  // Test case: AppBarComponent should render correctly
  it('AppBarComponent renders correctly', () => {
    // Render AppBarComponent and destructure getByText from the returned queries
    const { getByText } = render(<AppBarComponent />);
    // Assert that 'Stargazers Viewer' text is found within the component
    expect(getByText('Stargazers Viewer')).toBeTruthy();
  });
});

// Clean up the DOM after each test is executed
afterEach(cleanup);
