import { View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import styles from "../styles";

export const FooterComponent = ({ fetchStargazers }) => {
  const theme = useTheme();

  return (
    <View style={styles.fetchButton}>
      <Button
        onPress={fetchStargazers}
        mode="elevated"
        buttonColor={theme.colors.primary}
        textColor="#ffffff"
        testID="fetch-stargazers-button">
        Fetch Stargazers
      </Button>
    </View>
  );
};