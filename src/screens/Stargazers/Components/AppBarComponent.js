import { Appbar } from 'react-native-paper';
import styles from "../styles";

export const AppBarComponent = ({ navigation, numberOfStargazers }) => (
  <Appbar.Header style={styles.headerBg} mode="center-aligned">
    <Appbar.BackAction color="white" onPress={() => navigation.goBack()} testID="back-button"/>
    <Appbar.Content title={`Stargazers ${numberOfStargazers}`} titleStyle={styles.title}/>
  </Appbar.Header>
);