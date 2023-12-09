import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.paragraph}>Testing</Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  paragraph: {
    color: 'black',
    fontWeight: '800',
    fontSize: 20,
  }
});