import React, {useState} from 'react';
import {Banner} from 'react-native-paper';
import {runningOn} from '../constants';
import {useSelector} from 'react-redux';

export const NotificationBanner = () => {
  const [visible, setVisible] = useState(true);
  const isBannerVisible = useSelector(
    (state) => state.loginReducer.isBannerVisible,
  );
  return (
    <Banner
      visible={visible && isBannerVisible}
      actions={[
        {
          label: 'Ok',
          onPress: () => setVisible(false),
        },
      ]}>
      App is running on {runningOn}
    </Banner>
  );
};
