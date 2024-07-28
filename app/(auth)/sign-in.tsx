import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const navigation = useNavigation();

    const handleSignIn = () => {
        // Replace with actual sign-in logic
        navigation.navigate('home'); // Navigate to the homepage after successful sign-in
    };

    const handleSignUpRedirect = () => {
        navigation.navigate('sign-up'); // Navigate to the sign-up page
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.backgroundCircles}>
                    <View style={styles.circle} />
                    <View style={styles.circle} />
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.header}>Log In to Cycle</Text>
                    <View style={styles.formField}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#9BA1A6"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#9BA1A6"
                            secureTextEntry
                        />
                    </View>
                    <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={styles.footerText}>
                        Don't have an account?{' '}
                        <Text style={styles.signUpLink} onPress={handleSignUpRedirect}>
                            Sign Up
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
    signInButton: {
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
    signUpLink: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
});

export default SignIn;
