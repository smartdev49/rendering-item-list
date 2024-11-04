import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import ListContainer from './components/ListContainer';

export default function App() {
  return (
    <View style={styles.container}>
      <ListContainer />
    </View>
  );
}
