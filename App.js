import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const groceryItems = [
    { id: '1', name: 'Aloo (Potato)' },
    { id: '2', name: 'Pyaz (Onion)' },
    { id: '3', name: 'Doodh (Milk)' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Grocery App</Text>
      <FlatList
        data={groceryItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.item}>• {item.name}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'green' },
  item: { fontSize: 18, marginVertical: 5 }
});
          
