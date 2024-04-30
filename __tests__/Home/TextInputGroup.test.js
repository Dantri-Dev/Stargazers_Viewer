import React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react-native';
import { TextInputGroup } from '../../src/screens/Home/Components';

// Use fake timers for controlling setTimeout and setInterval
jest.useFakeTimers();

// Test case: TextInputGroup displays initial owner and repo values and updates them when changed
it('TextInputGroup Component Test Suite', async () => {

  // Define initial values for owner and repo
  const initialOwner = 'owner';
  const initialRepo = 'repo';

  // Create mock functions for setOwner and setRepo
  const setOwner = jest.fn();
  const setRepo = jest.fn();

  // Render TextInputGroup with initial props and destructure getByLabelText from the returned queries
  const { getByLabelText } = render(
    <TextInputGroup owner={initialOwner} setOwner={setOwner} repo={initialRepo} setRepo={setRepo} />
  );

  // Get input fields by their label text
  const ownerInput = getByLabelText('Owner');
  const repoInput = getByLabelText('Repository');
  
  // Assert that the input fields display the initial values
  expect(ownerInput.props.value).toBe(initialOwner);
  expect(repoInput.props.value).toBe(initialRepo);

  // Define new values to update the input fields
  const newOwner = 'nuovoOwner';
  const newRepo = 'nuovoRepo';

  // Use act to perform state updates
  await act(async () => {
    // Change text of owner and repo input fields
    fireEvent.changeText(ownerInput, newOwner);
    fireEvent.changeText(repoInput, newRepo);
  });

  // Assert that setOwner and setRepo have been called with the new values
  expect(setOwner).toHaveBeenCalledWith(newOwner);
  expect(setRepo).toHaveBeenCalledWith(newRepo);
});
  
// Clean up the DOM after each test is executed
afterEach(cleanup);