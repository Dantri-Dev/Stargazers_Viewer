import { FlatList } from 'react-native';
import { List } from 'react-native-paper';
import styles from '../styles';

export const StargazersList = ({ data }) => (
  <List.Section style={styles.listSection}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <List.Item
          title={item.login}
          left={() => <List.Icon style={styles.listItemIcon} icon={{ uri: item.avatar_url }} />}
          titleStyle={styles.listItemTitle}
          style={styles.listItem}
        />
      )}
      contentContainerStyle={{ paddingBottom: 50 }}
    />
  </List.Section>
);