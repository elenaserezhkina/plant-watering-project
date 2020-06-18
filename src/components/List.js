import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const List = ({ listItems }) => {
  function alertItemName(item) {
    alert(item.description);
  }
  return (
    <View>
      {listItems.map((item, index) => (
        <TouchableOpacity
          key={item.name}
          style={styles.container}
          onPress={() => alertItemName(item)}
        >
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#82D9B9",
  },
  text: {
    color: "white",
  },
});
export default List;
