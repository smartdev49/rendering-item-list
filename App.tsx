import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
const data = new Array(100)
  .fill(null)
  .map((value, index) => ({
    key: index.toString(), value: `Item $(index)`
  }));
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}>
      </FlatList> 
    </View>
  );
}
