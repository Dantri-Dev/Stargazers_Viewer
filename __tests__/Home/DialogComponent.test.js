import React from 'react';
import { render, fireEvent, waitFor, act, cleanup } from '@testing-library/react-native';
import { DialogComponent } from '../../src/screens/Home/Components/DialogComponent';

// Test suite for DialogComponent
describe('DialogComponent Component Test Suite', () => {
  // Test to verify if setVisibleDialog is called when 'ok' button is pressed
  it('calls setVisibleDialog when ok button is pressed', async () => {
    // Mock function to replace the actual setVisibleDialog function
    const setVisibleDialog = jest.fn();
    // Render the DialogComponent with props and destructure getByText and unmount from the returned queries
    const { getByText, unmount } = render(<DialogComponent visibleDialog={true} errorMessage="Error message" setVisibleDialog={setVisibleDialog} />);
    
    // Use act to ensure all state transitions and updates related to the fireEvent are executed
    await act(async () => {
      // Simulate press event on 'ok' button
      fireEvent.press(getByText('ok'));
    });

    // Use waitFor to assert that setVisibleDialog has been called with the expected argument
    await waitFor(() => expect(setVisibleDialog).toHaveBeenCalledWith(false));

    // Unmount the component after the test
    unmount();
  });
});

// Clean up the DOM after each test is executed
afterEach(cleanup);
