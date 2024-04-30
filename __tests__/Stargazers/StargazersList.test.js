import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import { StargazersList } from '../../src/screens/Stargazers/Components/StargazersList';

// Group tests for StargazersList Component
describe('StargazersList Component Test Suite', () => {
  // Mock data to simulate a list of stargazers
  const mockData = [
    { id: 1, login: 'user1', avatar_url: 'http://example.com/avatar1.png' },
    { id: 2, login: 'user2', avatar_url: 'http://example.com/avatar2.png' },
  ];

  // Test case to verify if the StargazersList renders the list correctly
  it('renders the list correctly', () => {
    // Rendering the StargazersList component with mock data
    const { getByText } = render(<StargazersList data={mockData} />);
    // Assertions to check if the usernames are displayed in the list
    expect(getByText('user1')).toBeTruthy();
    expect(getByText('user2')).toBeTruthy();
  });
});

// Cleanup function to unmount components after each test case
afterEach(cleanup);
