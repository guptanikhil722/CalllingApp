import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RNCamera } from 'react-native-camera';

const CallScreen = ({ navigation, route }) => {
  const { username = 'John Doe', callType = 'video' } = route.params || {};
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.front);
  const [callTime, setCallTime] = useState(0); // Time in seconds
  const [timerActive, setTimerActive] = useState(true);
  const [mute, setMute] = useState(false);
  const [speaker, setSpeaker] = useState(false);
  const [callStatus, setCallStatus] = useState('connecting');

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  useEffect(() => {
    if (callType === 'audio' || callType === 'video') {
      const timer = setTimeout(() => {
        setCallStatus('ringing');
      }, 2000); // Change to "ringing" after 2 seconds
      return () => clearTimeout(timer);
    }else{
       
            setCallStatus('started');
           // Change to "ringing" after 2 seconds
          
    }
  }, [callType]);

  // Start the timer when the component mounts
  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setCallTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Cleanup the interval on unmount or when timer stops
    return () => clearInterval(timer);
  }, [timerActive]);

  const handleEndCall = () => {
    console.log('Call Ended');
    setTimerActive(false); // Stop the timer
    navigation.goBack();
  };

  const toggleMic = () => {
    setMute(!mute)
    console.log('Mic toggled');
  };

  const toggleCamera = () => {
    setCameraType((prevType) =>
      prevType === RNCamera.Constants.Type.front
        ? RNCamera.Constants.Type.back
        : RNCamera.Constants.Type.front
    );
  };

  const toggleSpeaker = () => {
    setSpeaker(!speaker);
    console.log('Speaker toggled');
  };

  return (
    <View style={styles.container}>
      {/* Caller's Name and Status */}
      <View style={styles.headerContainer}>
        <Text style={[styles.userName, { color: callType === 'video' ? 'black' : 'white' }]}>
          {username}
        </Text>
        <Text style={[styles.callStatus, { color: callType === 'video' ? 'black' : 'white' }]}>
          {callType === 'video' ? 'Video Calling' : 'Audio Calling'}
        </Text>
        <Text style={[styles.callStatus, { color: callType === 'video' ? 'black' : 'white' }]}>
          {callStatus === 'ringing'
            ? 'Ringing...'
            : callStatus === 'started'
            ? 'In Call'
            : 'Connecting...'}
        </Text>
        {/* Timer */}
        {callType === 'started' && <Text style={[styles.callTimer, { color: callType === 'video' ? 'black' : 'white' }]}>
          {formatTime(callTime)}
        </Text>}
      </View>

      {/* Camera Preview for Video Call */}
      {callType === 'video' && (
        <RNCamera
          style={styles.cameraPreview}
          type={cameraType}
          flashMode={RNCamera.Constants.FlashMode.off}
        />
      )}

      {/* Call Action Buttons */}
      <View style={styles.actionContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.actionButton} onPress={toggleMic}>
            <Icon name={!mute?"mic-outline":"mic-off-outline"} size={30} color="#fff" />
          </TouchableOpacity>

          {/* Toggle Camera */}
          {callType === 'video' && (
            <TouchableOpacity style={styles.actionButton} onPress={toggleCamera}>
              <Icon name="camera-reverse-outline" size={30} color="#fff" />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.actionButton} onPress={toggleSpeaker}>
            <Icon name={speaker?"volume-mute-outline":"volume-high-outline"} size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.endCallButton} onPress={handleEndCall}>
          <Icon name="call-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '20%',
    zIndex: 20,
  },
  cameraPreview: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '1%',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  callStatus: {
    fontSize: 18,
  },
  callTimer: {
    fontSize: 18,
    marginTop: 10,
  },
  actionContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginBottom: 40,
  },
  actionButton: {
    backgroundColor: '#444',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  endCallButton: {
    backgroundColor: 'red',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '3%',
  },
});
