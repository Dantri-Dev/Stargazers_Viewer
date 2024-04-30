import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { AppBarComponent } from '../../src/screens/Stargazers/Components/AppBarComponent';

// Group tests for AppBarComponent
describe('AppBarComponent Component Test Suite', () => {
  // Test case: AppBarComponent should render correctly and display the number of stargazers
  it('AppBarComponent renders correctly', () => {
    // Mocking the navigation object with a goBack function
    const navigationMock = { goBack: jest.fn() };
    // Rendering AppBarComponent with mock navigation and a specific number of stargazers
    const { getByText } = render(
      <AppBarComponent navigation={navigationMock} numberOfStargazers={5} />
    );

    // Asserting that the text 'Stargazers 5' is part of the component, indicating correct rendering
    expect(getByText('Stargazers 5')).toBeTruthy();
  });

  // Test case: AppBarComponent should navigate back when the back button is pressed
  it('navigates back on press', () => {
    // Mocking the navigation object with a goBack function
    const navigationMock = { goBack: jest.fn() };
    // Rendering AppBarComponent with mock navigation and a specific number of stargazers
    const { getByTestId } = render(
      <AppBarComponent navigation={navigationMock} numberOfStargazers={5} />
    );

    // Simulating a press event on the back button
    fireEvent.press(getByTestId('back-button'));
    // Asserting that the navigation's goBack function was called as a result of the button press
    expect(navigationMock.goBack).toHaveBeenCalled();
  });
});

// Clean up the DOM after each test case to prevent tests from affecting each other
afterEach(cleanup);
