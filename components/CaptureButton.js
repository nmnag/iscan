import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default CaptureButton = ({ snap }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={styles.cameraIcon}
      onPress={snap}>
      <Text style={styles.text}><Icon name="circle" size={48} color="white"/></Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  cameraIcon: {
    display: "flex",
    height: "100%",
    alignItems: "center",
  },
  text: {
    height: "auto",
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#000"
  }
})