import { Text, Card } from 'react-native-paper';
import styles from "../styles";

export const CardComponent = () => (
  <Card style={styles.card}>
    <Card.Content>
      <Text variant="titleLarge" style={styles.cardText}>View Stargazers</Text>
      <Text variant="bodyMedium" style={[styles.cardText, { marginBottom: 10 }]}>By entering the owner and the repository below, you will be able to view the list of users who have added the repository to their favorites.</Text>
    </Card.Content>
  </Card>
);