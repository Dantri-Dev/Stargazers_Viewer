import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { FooterComponent } from '../../src/screens/Home/Components/FooterComponent';

// Defines a test suite for FooterComponent
describe('FooterComponent Component Test Suite', () => {
  // Test case: FooterComponent should render correctly and trigger fetchStargazers on button press
  it('FooterComponent renders correctly and calls fetchStargazers on button press', () => {
    // Mock function to replace the actual fetchStargazers function
    const fetchStargazers = jest.fn();
    // Render the FooterComponent with the mock function and destructure getByTestId from the returned queries
    const { getByTestId } = render(<FooterComponent fetchStargazers={fetchStargazers} />);
    // Simulate a press event on the button with testID 'fetch-button'
    fireEvent.press(getByTestId('fetch-stargazers-button'));
    // Assert that the mock function fetchStargazers was called after button press
    expect(fetchStargazers).toHaveBeenCalled();
  });
});

// Clean up the DOM after each test is executed
afterEach(cleanup);
