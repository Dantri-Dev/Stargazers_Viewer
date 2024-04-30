import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fetchButton: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  containerTextGroup: {
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerBg: {
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: '#fff',
    letterSpacing: 2,
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  dialogContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dialogText: {
    marginLeft: 16,
    color: 'gray'
  },
  card: {
    marginHorizontal: 20, 
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#171b21'
  },
  cardText: {
    color: 'white',
  },
  dialogBg: {
    backgroundColor: 'white'
  },
  dialogContentText: {
    color: 'black'
  },
  textInput: {
    backgroundColor: '#171b21'
  }
});

export default styles;
