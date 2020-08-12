import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Switch} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NotificationBanner} from '../components/Banner';
import actions from '../store/action';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const isBannerVisible = useSelector(
    (state) => state.loginReducer.isBannerVisible,
  );

  return (
    <SafeAreaView style={styles.container}>
      <NotificationBanner />
      <View style={styles.contentContainer}>
        <View style={styles.bannerContainer}>
          <Text>Banner Notification</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isBannerVisible ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => dispatch(actions.bannerNotification())}
            value={isBannerVisible}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
  },
  bannerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
