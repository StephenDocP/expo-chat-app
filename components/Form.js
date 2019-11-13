import React, {useState} from 'react';
import {Text, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import {firestoreMutationHook} from "../lib/firestoreHook";

export const Form = () => {
    const {postDocument, loading} = firestoreMutationHook('messages');

    const [
        message,
        setMessage,
    ] = useState('');

    const [
        username,
        setUsername,
    ] = useState('');

    const post = (data) => {
        postDocument(data);
        setMessage('');
    }

    return (
        <KeyboardAvoidingView enabled behavior="padding" keyboardVerticalOffset={230}>
            <Text>Message</Text>
            <TextInput
                style={{backgroundColor: 'magenta', width: 300}}
                onChangeText={setMessage}
                value={message}
            />

            <Text>User name</Text>
            <TextInput
                style={{backgroundColor: 'cyan', width: 300}}
                onChangeText={setUsername}
            />

            <TouchableOpacity
                style={{ borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', marginTop: 10, padding: 4 }}
                onPress={() => post({content: message, username})}
            >
                <Text>{loading ? 'Posting message' : 'Post message'}</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
