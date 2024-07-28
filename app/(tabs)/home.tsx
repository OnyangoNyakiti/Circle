import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { launchImageLibrary } from 'react-native-image-picker';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const bikes = [
    { location: 'Chiromo', timesRented: 12, imageUrl: require('./downtown.jpg'), rented: true },
    { location: 'Chiromo', timesRented: 7, imageUrl: require('./downtown.jpg'), rented: false },
    { location: 'Chiromo', timesRented: 5, imageUrl: require('./downtown.jpg'), rented: true },
    { location: 'Chiromo', timesRented: 15, imageUrl: require('./downtown.jpg'), rented: false },
    { location: 'Chiromo', timesRented: 8, imageUrl: require('./downtown.jpg'), rented: true },
    { location: 'Chiromo', timesRented: 2, imageUrl: require('./downtown.jpg'), rented: false },
    { location: 'Chiromo', timesRented: 3, imageUrl: require('./downtown.jpg'), rented: true },
    { location: 'Chiromo', timesRented: 6, imageUrl: require('./downtown.jpg'), rented: false },
    { location: 'Chiromo', timesRented: 4, imageUrl: require('./downtown.jpg'), rented: true },
];

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const [name, setName] = useState('Malcolm Onyango');
    const [email, setEmail] = useState('malcolmonyango@gmail.com');
    const [mobile, setMobile] = useState('0795200996');
    const [selectedMenuItem, setSelectedMenuItem] = useState('');
    const navigation = useNavigation();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleEditProfile = () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 300,
            quality: 1,
        };

        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else {
                const source = { uri: response.assets[0].uri };
                setProfilePic(source.uri);
            }
        });
    };

    const renderMenuItemContent = () => {
        switch (selectedMenuItem) {
            case 'Account':
                return (
                    <View>
                        <Text style={styles.menuItemHeader}>Account Details</Text>
                        <TextInput style={styles.profileText} value={name} onChangeText={setName} placeholder="Name" />
                        <TextInput style={styles.profileText} value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
                        <TextInput style={styles.profileText} value={mobile} onChangeText={setMobile} placeholder="Phone Number" keyboardType="phone-pad" />
                    </View>
                );
            case 'Payment':
                return (
                    <View>
                        <Text style={styles.menuItemHeader}>Payment</Text>
                        <Button title="Set up Payment" onPress={() => {}} />
                    </View>
                );
            case 'How it works':
                return (
                    <View>
                        <Text style={styles.menuItemHeader}>How it Works</Text>
                        <Text>This is a bicycle renting mobile application for on campus</Text>
                    </View>
                );
            case 'FAQ':
                return (
                    <View>
                        <Text style={styles.menuItemHeader}>FAQ</Text>
                        <Text>FAQ content goes here...</Text>
                    </View>
                );
            case 'Contact Us':
                return (
                    <View>
                        <Text style={styles.menuItemHeader}>Contact Us</Text>
                        <Text>Contact information goes here...</Text>
                    </View>
                );
            default:
                return null;
        }
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Cycle</ThemedText>
            </ThemedView>
            <View style={styles.searchBarContainer}>
                <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
                <TextInput style={styles.searchBar} placeholder="Rent Now..." />
            </View>
            <ScrollView contentContainerStyle={styles.cardContainer}>
                {bikes.map((bike, index) => (
                    <View key={index} style={styles.card}>
                        <View style={styles.imagePlaceholder}>
                            <Image source={bike.imageUrl} style={styles.image} />
                            <View style={[styles.radioButton, bike.rented ? styles.rented : styles.notRented]} />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>DownTown</Text>
                            <View style={styles.locationContainer}>
                                <Ionicons name="location-outline" size={16} color="black" />
                                <Text style={styles.cardLocation}> {bike.location}</Text>
                            </View>
                            <Text style={styles.cardText}>Rented {bike.timesRented} times</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <TouchableWithoutFeedback onPress={toggleModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalView}>
                            <View style={styles.profileHeader}>
                                <TouchableOpacity onPress={handleEditProfile}>
                                    {profilePic ? (
                                        <Image source={{ uri: profilePic }} style={styles.profilePic} />
                                    ) : (
                                        <Ionicons name="person-circle" size={100} color="black" />
                                    )}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuItems}>
                                <TouchableOpacity style={styles.menuItem} onPress={() => setSelectedMenuItem('Account')}>
                                    <Text>Account</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuItem} onPress={() => setSelectedMenuItem('Payment')}>
                                    <Text>Payment</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuItem} onPress={() => setSelectedMenuItem('How it works')}>
                                    <Text>How it works</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuItem} onPress={() => setSelectedMenuItem('FAQ')}>
                                    <Text>FAQ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuItem} onPress={() => setSelectedMenuItem('Contact Us')}>
                                    <Text>Contact Us</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
                                    <Text>Logout</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={styles.menuContent}>
                                {renderMenuItemContent()}
                            </ScrollView>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleContainer: {
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        backgroundColor: '#40E0D0',
        padding: 10,
    },
    titleText: {
        fontSize: 24,
        color: '#fff',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        paddingLeft: 10,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        height: '100%',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        width: width * 0.4,
        margin: 10,
    },
    imagePlaceholder: {
        height: 100,
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    radioButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
    },
    rented: {
        backgroundColor: 'green',
    },
    notRented: {
        backgroundColor: 'red',
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardLocation: {
        marginLeft: 5,
    },
    cardText: {
        marginTop: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    profileHeader: {
        marginBottom: 20,
        alignItems: 'center',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    menuItems: {
        width: '100%',
        marginBottom: 20,
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuItemHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileText: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 20,
        width: '100%',
        fontSize: 16,
    },
    menuContent: {
        width: '100%',
    },
});

export default HomeScreen;
