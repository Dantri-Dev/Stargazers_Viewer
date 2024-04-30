import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { CardComponent } from '../../src/screens/Home/Components/CardComponent';

// Defines a test suite for CardComponent
describe('CardComponent Component Test Suite', () => {
  // Test case: CardComponent should render correctly
  it('CardComponent renders correctly', () => {
    // Render CardComponent and destructure getByText from the returned queries
    const { getByText } = render(<CardComponent />);
    // Assert that 'View Stargazers' text is found within the component
    expect(getByText('View Stargazers')).toBeTruthy();
    // Assert that the descriptive text is found within the component
    expect(getByText('By entering the owner and the repository below, you will be able to view the list of users who have added the repository to their favorites.')).toBeTruthy();
  });
});

// Clean up the DOM after each test is executed
afterEach(cleanup);
