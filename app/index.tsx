import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ThemedView style={styles.container}>
                <View style={styles.headerContainer}>
                    <ThemedText type="title" style={styles.title}>Cycle</ThemedText>
                </View>
                <LottieView
                    source={require('../assets/animations/cycling-animation.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                />
                <ThemedText type="description" style={styles.description}>
                    Cycle with ease and convenience.
                </ThemedText>
                <TouchableOpacity style={styles.button}>
                    <Link href="/(auth)/sign-in" style={styles.linkText}>
                        <Text style={styles.buttonText}>Continue with Email</Text>
                    </Link>
                </TouchableOpacity>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    headerContainer: {
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0a7ea4',
    },
    animation: {
        width: 300,
        height: 200,
        marginVertical: 20,
    },
    description: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
        color: '#343a40',
    },
    button: {
        backgroundColor: '#0a7ea4',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    linkText: {
        textDecorationLine: 'none',
    },
});
