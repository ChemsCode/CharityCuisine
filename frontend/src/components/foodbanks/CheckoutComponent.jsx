import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CheckoutComponent = () => {
  const dataForList1 = [
    { id: 1, title: 'Item 1 - List 1' },
    { id: 2, title: 'Item 2 - List 1' },
    { id: 3, title: 'Item 3 - List 1' },
  ];

  const dataForList2 = [
    { id: 4, title: 'Item 1 - List 2' },
    { id: 5, title: 'Item 2 - List 2' },
    { id: 6, title: 'Item 3 - List 2' },
  ];

  const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={[styles.listContainer, { flex: 1 }]}>
        <Text style={styles.listTitle}>Current pickups</Text>
        <FlatList
          data={dataForList1}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={[styles.listContainer, { flex: 2 }]}>
        <Text style={styles.listTitle}>History</Text>
        <FlatList
          data={dataForList2}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    paddingTop: 20,
  },
  listContainer: {
    flex: 1,
    margin: 10,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default CheckoutComponent;
