import { Button, Text, Dialog } from 'react-native-paper';
import styles from '../styles';

export const DialogComponent = ({ visibleDialog, errorMessage, setVisibleDialog }) => (
  <Dialog visible={visibleDialog} style={styles.dialogBg}>
    <Dialog.Title>Request response</Dialog.Title>
    <Dialog.Content>
      <Text variant="bodyMedium" style={styles.dialogContentText}>{errorMessage}</Text>
    </Dialog.Content>
    <Dialog.Actions>
      <Button labelStyle={styles.dialogContentText} onPress={() => setVisibleDialog(false)}>ok</Button>
    </Dialog.Actions>
  </Dialog>
);