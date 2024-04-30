import React from 'react';
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '../screens/Home/HomeScreen';
import StargazersScreen from '../screens/Stargazers/StargazersScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#4493f8",
  },
};

const Stack = createStackNavigator();

const App = () => {

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator 
              screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
              }}
          >
          <Stack.Screen name='Homepage' component={HomeScreen}/>
          <Stack.Screen name='Stargazers' component={StargazersScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;