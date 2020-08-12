import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {NotificationBanner} from '../components/Banner';

const Homescreen = () => {
  const email = useSelector((state) => state.loginReducer.email);

  return (
    <SafeAreaView style={styles.container}>
      <NotificationBanner />
      <View style={styles.contentContainer}>
        <Text>{email}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default Homescreen;
