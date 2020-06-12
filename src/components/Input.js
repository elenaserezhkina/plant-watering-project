import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const Inputs = ({ onPress }) => {
  const [textInput, setTextInput] = useState("");
  const handleInput = (text) => {
    setTextInput(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Type your plant's name"
        placeholderTextColor="#620000"
        autoCapitalize="none"
        onChangeText={handleInput}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => onPress(textInput)}
      >
        <Text style={styles.submitButtonText}> Find it </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Inputs;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  input: {
    padding: 10,
    marginBottom: 10,
    height: 60,
    width: 260,
    borderColor: "#AB8C59",
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#82D9B9",
    padding: 10,
    height: 50,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
