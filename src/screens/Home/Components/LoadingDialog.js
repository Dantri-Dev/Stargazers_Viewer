import { Text, Dialog, ActivityIndicator } from 'react-native-paper';
import { View } from 'react-native';
import styles from "../styles";

export const LoadingDialog = ({ visibleprogress }) => (
  <Dialog visible={visibleprogress} style={styles.dialogBg}>
    <Dialog.Content>
      <View style={styles.dialogContent}>
        <ActivityIndicator animating={true} size="large" />
        <Text variant="bodyMedium" style={styles.dialogText}>Loading...</Text>
      </View>
    </Dialog.Content>
  </Dialog>
);