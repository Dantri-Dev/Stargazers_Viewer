import { Appbar } from 'react-native-paper';
import styles from "../styles";

export const AppBarComponent = () => (
    <Appbar.Header style={styles.headerBg} mode="center-aligned">
        <Appbar.Content title='Stargazers Viewer' titleStyle={styles.title}/>
    </Appbar.Header>
);