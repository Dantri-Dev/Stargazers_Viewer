import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from "../styles";

export const TextInputGroup = ({ owner, setOwner, repo, setRepo }) => (
  <View style={styles.containerTextGroup}>
    <TextInput
      label="Owner"
      accessibilityLabel="Owner"
      mode="flat"
      value={owner}
      onChangeText={setOwner}
      textColor={'white'}
      style={styles.textInput}
      right={
        <TextInput.Icon
          icon="account"
        />
      }
    />
    <TextInput
      label="Repository"
      accessibilityLabel="Repository"
      mode="flat"
      value={repo}
      onChangeText={setRepo}
      textColor={'white'}
      style={[styles.textInput, { marginBottom: 30 }]}
      right={
        <TextInput.Icon
          icon="source-repository"
        />
      }
    />
  </View>
);