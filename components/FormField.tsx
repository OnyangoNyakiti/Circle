import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FormField = () => {
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    return (
        <View style={styles.formField}>
            <TextInput
                style={[styles.input, emailFocused && styles.inputFocused]}
                placeholder="Email"
                placeholderTextColor="#9BA1A6"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
            />
            <TextInput
                style={[styles.input, passwordFocused && styles.inputFocused]}
                placeholder="Password"
                placeholderTextColor="#9BA1A6"
                secureTextEntry
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    formField: {
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#ECEDEE',
        borderColor: '#9BA1A6',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
        color: '#11181C',
    },
    inputFocused: {
        borderColor: '#0a7ea4',
    },
});

export default FormField;
