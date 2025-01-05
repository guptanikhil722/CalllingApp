import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import ContactCard from '../reusables/ContactCard';
import CallNotificationModal from '../modals/CallNotificationModal';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


const ContactList = ({ navigation }) => {
    const contacts = [  
        {id: 1, userID: 'auxStream', userName: 'CodeWithAuxStream'},
        {id: 2, userID: 'jDoe', userName: 'John Doe'},
        {id: 3, userID: 'james001', userName: 'James Smith'},
        {id: 4, userID: 'and_rew', userName: 'Andrew Jonas'},
        {id: 5, userID: 'robb_', userName: 'Robb Stark'},
        {id: 6, userID: 'musk__', userName: 'Elon Musk'},
        {id: 7, userID: 'jsnow', userName: 'John Snow'},
        {id: 8, userID: 'hberg', userName: 'Heisenberg'},
        {id: 9, userID: 'john', userName: 'Jonathan'},
    ];
    const [isCallVisible, setIsCallVisible] = useState(false);

  const handleAccept = () => {
    setIsCallVisible(false);
   navigation.navigate('CallScreen', { userName: 'John Doe', callType: 'started' });
    // Navigate to the call screen or handle the logic here.
  };

  const handleDecline = () => {
    setIsCallVisible(false);
    console.log('Call Declined');
    // Handle call rejection logic.
  };

    return(
       <View style={styles.container}>

            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.heading}>Contacts</Text>
                <TouchableOpacity 
                            onPress={() => {setIsCallVisible(!isCallVisible)}}
                            style={styles.callBtn}
                        >
                            <Icon name="arrow-downward" size={24} color="#fff" />
                        </TouchableOpacity>
            </View>


            <FlatList
                data={contacts}
                keyExtractor={(item, index) => item.id}
                style={{ flex: 1, marginTop: 20 }}
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={{ paddingHorizontal: 20 }}
                renderItem={({item}) => <ContactCard item={item} />}
            />
            <CallNotificationModal visible={isCallVisible} onAccept={handleAccept} onDecline={handleDecline} />
       </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    callBtn: {
        width: 42,
        height: 42,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginHorizontal:'5%',
        borderColor: '#ababab'
    }
    
   
});

export default ContactList;