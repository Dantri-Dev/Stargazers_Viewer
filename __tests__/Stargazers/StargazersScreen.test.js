import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { render, waitFor, cleanup } from '@testing-library/react-native';
import StargazersScreen from '../../src/screens/Stargazers/StargazersScreen';

// Mocking StatusBar functions
jest.spyOn(StatusBar, 'setBarStyle').mockImplementation(jest.fn());
jest.spyOn(StatusBar, 'setBackgroundColor').mockImplementation(jest.fn());

// Mocking navigation functions from react-navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

// Group tests for StargazersScreen
describe('StargazersScreen', () => {
  // Route object with params containing mock data for stargazers
  const route = {
    params: {
      data: [
        { id: 1, login: 'user1', avatar_url: 'http://example.com/avatar1.png' },
        { id: 2, login: 'user2', avatar_url: 'http://example.com/avatar2.png' },
      ],
    },
  };

  // Clear all mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case: StargazersScreen should render with AppBarComponent and StargazersList
  it('renders the screen with AppBarComponent and StargazersList', async () => {
    // Wait for the asynchronous tasks to finish
    await waitFor(() => {
      // Render the StargazersScreen with the mock route and destructure getByText and unmount from the returned queries
      const { getByText, unmount } = render(<StargazersScreen route={route} />);
      // Check if 'Stargazers 2' text is rendered, indicating the correct number of stargazers
      expect(getByText('Stargazers 2')).toBeTruthy();
      // Check if the usernames are rendered in the list
      expect(getByText('user1')).toBeTruthy();
      expect(getByText('user2')).toBeTruthy();
      // Ensure to call unmount at the end of the test to clean up
      unmount();
    });
  });

  // Test case: StargazersScreen should correctly set the status bar state
  it('correctly sets the status bar state', async () => {
    // Wait for the asynchronous tasks to finish
    await waitFor(() => {
      // Render the StargazersScreen with the mock route
      render(<StargazersScreen route={route} />);
    });
    // Assert that StatusBar.setBarStyle was called with 'light-content'
    expect(StatusBar.setBarStyle).toHaveBeenCalledWith('light-content');
    // If the platform is Android, check if StatusBar.setBackgroundColor was called with the correct color
    if (Platform.OS === 'android') {
      expect(StatusBar.setBackgroundColor).toHaveBeenCalledWith('#25292e');
    }
  });  
  
  // Test case: StargazersScreen should correctly pass the number of stargazers to AppBarComponent
  it('correctly passes the number of stargazers to AppBarComponent', async () => {
    // Wait for the asynchronous tasks to finish
    await waitFor(() => {
      // Render the StargazersScreen with the mock route and destructure getByText and unmount from the returned queries
      const { getByText, unmount } = render(<StargazersScreen route={route} />);
      // Verify that the number of stargazers is correct
      expect(getByText('Stargazers 2')).toBeTruthy();
      // Ensure to call unmount at the end of the test to clean up
      unmount();
    });
  });
});

// Clean up the DOM after each test is executed
afterEach(cleanup);
