import React, { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { firestoreMutationHook } from '../lib/firestoreHook';

export const Form = () =>  {
    const {postDocument} = firestoreMutationHook('messages');
    const [content, setContent] = useState("");
    const [username, setUsername] = useState("");

    const postMessage = () => {
        postDocument({content, username});
    }

    return (
        <View>
            <Text>Username</Text>
            <TextInput value={username} onChangeText={setUsername} />
            <Text>Message</Text>
            <TextInput value={content} onChangeText={setContent} />
            <Button onPress={postMessage} title="Send message"></Button>
        </View>
    );
}