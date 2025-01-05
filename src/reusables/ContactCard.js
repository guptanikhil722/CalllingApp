import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ContactCard = ({item}) => {
    const navigation = useNavigation();

    return(
        <View style={styles.callContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={{ uri: `https://i.pravatar.cc/200?u=${item.userName}` }}
                    style={ styles.avatar }
                />
                
                <View style={{ marginLeft: 15, width:'40%' }}>
                    <Text style={styles.name} numberOfLines={1}>{ item.userName }</Text>
                    <Text style={styles.username}>@{item.userID}</Text>
                    <Text style={styles.time}>1 hour ago</Text>
                </View>
            </View>
           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity 
                onPress={() => {navigation.navigate('CallScreen', { username: item.userName, callType: 'audio' })}}
                style={styles.callBtn}
            >
                <Image
                    source={require('../assets/images/phone.png')}
                    style={{ width: 20, height: 30 }}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => {navigation.navigate('CallScreen', { username: item.userName, callType: 'video' })}}
                style={styles.callBtn}
            >
                  <Icon name="videocam-outline" size={20} color="#fff" />
            </TouchableOpacity>
            </View>
        </View>
    )
}
export default ContactCard;

const styles = StyleSheet.create({
callContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.07)'
},
avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
},
name: {
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
},
username: {
    fontSize: 12,
    marginTop: 0,
    color: '#dadada'
},
time: {
    fontSize: 9,
    marginTop: 6,
    color: '#bababa'

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
})