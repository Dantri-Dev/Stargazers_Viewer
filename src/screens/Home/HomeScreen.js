import React, { useState, useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Portal } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppBarComponent, CardComponent, TextInputGroup, FooterComponent, DialogComponent, LoadingDialog } from './Components';
import styles from "./styles";

const HomeScreen = () => {
  const [visibleDialog, setVisibleDialog] = React.useState(false);
  const [visibleprogress, setVisibleProgress] = useState(false);
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#25292e');
    }
  }, []);

  const fetchStargazers = async () => {
    setVisibleProgress(true);

    // Set the number of results per page for the GitHub API request
    const perPage = 100;

    // Initialize the page counter
    let page = 1;

    // Flag to determine if there are more pages of results
    let hasMorePages = true;

    // Array to accumulate all stargazers
    let allStargazers = [];

    try {
      // Continue fetching pages of stargazers as long as there are more pages
      while (hasMorePages) {
        // Make a GET request to the GitHub API for stargazers of the given repository
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/stargazers`, {
          params: {
            page: page,
            per_page: perPage,
          },
        });

        // Append the new stargazers
        allStargazers = [...allStargazers, ...response.data];

        // Check if the current page has less than the perPage amount, indicating the last page
        if (response.data.length < perPage) {
          // If it's the last page, set hasMorePages to false and hide the progress indicator
          hasMorePages = false;
          setVisibleProgress(false);
        } else {
          // If not the last page, increment the page counter to fetch the next page
          page++;
        }
      }

      // After fetching all stargazers, navigate to the 'Stargazers' screen with data
      navigation.navigate('Stargazers', {
        data: allStargazers
      });

    } catch (error) {
      // Handle errors during the API request
      if (error.response && error.response.status === 404) {
        // If the repository is not found, set the error message accordingly
        setErrorMessage('Repository not found.');
        // Hide the progress indicator and show the error dialog
        setVisibleProgress(false);
        setVisibleDialog(true);
      } else {
        // For other errors, set a generic error message
        setErrorMessage('An error occurred, please try again later.');
        setVisibleDialog(true);
        console.log('Error while retrieving stargazers:', error);
      }
      setVisibleProgress(false);
    }
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Portal>
        <DialogComponent visibleDialog={visibleDialog} errorMessage={errorMessage} setVisibleDialog={setVisibleDialog} />
        <LoadingDialog visibleprogress={visibleprogress} />
      </Portal>
      <AppBarComponent />
      <CardComponent />
      <TextInputGroup owner={owner} setOwner={setOwner} repo={repo} setRepo={setRepo} />
      <FooterComponent fetchStargazers={fetchStargazers} />
    </SafeAreaView>
  );
};

export default HomeScreen;
