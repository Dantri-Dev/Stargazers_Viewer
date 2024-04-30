import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AppBarComponent, StargazersList } from './Components';
import styles from "./styles";

const StargazersScreen = ({ route }) => {
  const { data } = route.params;
  const numberOfStargazers = data.length;
  
  const navigation = useNavigation();

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#25292e');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AppBarComponent navigation={navigation} numberOfStargazers={numberOfStargazers} />
      <StargazersList data={data} />
    </SafeAreaView>
  );
};

export default StargazersScreen;