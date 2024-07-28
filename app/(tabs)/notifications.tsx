import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';

const notifications = [
  { id: '1', title: 'New Feature Released', description: 'Check out our latest feature...', date: '2024-07-07' },
  { id: '2', title: 'Maintenance Scheduled', description: 'Scheduled maintenance on...', date: '2024-07-06' },
  { id: '3', title: 'Welcome to the App', description: 'Thank you for joining us...', date: '2024-07-05' },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
      <View style={styles.notificationCard}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationDescription}>{item.description}</Text>
          <Text style={styles.notificationDate}>{item.date}</Text>
        </View>
      </View>
  );

  return (
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <View style={styles.backgroundCircles}>
            <View style={styles.circle} />
            <View style={styles.circle} />
          </View>
          <FlatList
              data={notifications}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListHeaderComponent={
                <View style={styles.headerContainer}>
                  <ThemedText type="title">Notifications</ThemedText>
                </View>
              }
          />
        </ThemedView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a7ea4', // Background color
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent', // Make sure the background is transparent to see the circles
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
  headerContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  notificationContent: {
    marginLeft: 16,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDescription: {
    fontSize: 14,
    color: 'gray',
  },
  notificationDate: {
    fontSize: 12,
    color: 'lightgray',
    marginTop: 4,
  },
});
