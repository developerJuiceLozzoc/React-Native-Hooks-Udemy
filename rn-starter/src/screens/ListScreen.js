import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function ListScreen() {
  const friends = [
    { name: "Name 1" },
    { name: "Name 2 " },
    { name: "Name 4" },
    { name: "Name 4" },
    { name: "Name 5" },
    { name: "Name 6" },
    { name: "Name 7 " },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(el) => el.name}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
