import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Cycle</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        paddingTop: 10, // Adjust this value to fit the top space for the time and battery
        alignItems: 'flex-start',
        paddingLeft: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CustomHeader;
