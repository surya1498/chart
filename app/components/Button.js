import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({onPress, title, buttonStyle, textStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, buttonStyle]}>
    <Text style={[styles.appButtonText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
});

export default Button;
