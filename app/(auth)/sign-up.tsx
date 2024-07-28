import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();

    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

    const handleSignUp = () => {
        // Replace with actual sign-up logic
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('home'); // Navigate to the homepage after successful sign-up
    };

    const handleSignInRedirect = () => {
        navigation.navigate('sign-in'); // Navigate to the sign-in page
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.backgroundCircles}>
                    <View style={styles.circle} />
                    <View style={styles.circle} />
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.header}>Sign Up for Cycle</Text>
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
                        <TextInput
                            style={[styles.input, confirmPasswordFocused && styles.inputFocused]}
                            placeholder="Confirm Password"
                            placeholderTextColor="#9BA1A6"
                            secureTextEntry
                            onFocus={() => setConfirmPasswordFocused(true)}
                            onBlur={() => setConfirmPasswordFocused(false)}
                        />
                    </View>
                    <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={styles.footerText}>
                        Already have an account?{' '}
                        <Text style={styles.signInLink} onPress={handleSignInRedirect}>
                            Sign In
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0a7ea4',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    backgroundCircles: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        top: '20%',
        left: '15%',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24,
        textAlign: 'center',
    },
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
    signUpButton: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#0a7ea4',
        fontSize: 16,
        fontWeight: '500',
    },
    footerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    signInLink: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
});

export default SignUp;
