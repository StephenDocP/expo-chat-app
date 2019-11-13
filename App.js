import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Form} from './components/Form';

import {firestoreQueryHook} from "./lib/firestoreHook";

export default function App() {
    const {data: messages, loading} = firestoreQueryHook("messages");

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>

            {
                messages ? messages.map(message =>
                    <View key={message.id}>
                        <Text>{message.content}</Text>
                        <Text>{message.username}</Text>
                    </View>
                ) : null
            }

            <Form/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
