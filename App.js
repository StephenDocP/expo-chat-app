import React from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import {Form } from  './components/Form';

import { firestoreQueryHook } from "./lib/firestoreHook";

export default function App() {
  const { data: messages, loading } = firestoreQueryHook("messages");


  return (
    <View style={styles.container}>
    <Form></Form>
     <ScrollView style={{height: 100, width: 200}}>
      {!messages ? (
        <Text>Loading...</Text>
      ) : (
        messages.map(message => {
          return (
            <View key={message.id}>
              <Text>{message.username}</Text>
              <Text>{message.content}</Text>
            </View>
          );
        })
      )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
