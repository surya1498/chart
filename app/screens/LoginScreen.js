
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../components/Button';
import {
  validateEmailAddress,
  validatePassword,
} from '../utils/LoginFormValidation';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../store/store';
import Loader from '../components/Loader';
import {NotificationBanner} from '../components/Banner';
import {TextInput} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [error, setErrors] = useState({
    email: '',
    password: '',
  });

  const isLoading = useSelector((state) => state.loginReducer.isLoading);
  const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('HomeScreen');
    }
  }, [isLoggedIn]);

   const handleChange = (field) => (value) =>
    setInputs((inputs) => ({...inputs, [field]: value}));

  const dispatch = useDispatch();
  const onSubmit = () => {
    if (
      (error.email == '' || error.password == '') &&
      inputs.email != '' &&
      inputs.password != ''
    ) {
      return dispatch(login({email: inputs.email, password: inputs.password}));
    }
  };

  const validateEmail = () => {
    return setErrors((error) => ({
      ...error,
      email: validateEmailAddress(inputs.email),
    }));
  };

  const passwordValidate = () => {
    return setErrors((error) => ({
      ...error,
      email: validatePassword(inputs.password),
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <NotificationBanner />
      <Loader loading={isLoading} />
      <View style={styles.contentContainer}>
        <TextInput
          placeholder="Enter username"
          value={inputs.email}
          onChangeText={handleChange('email')}
          onBlur={() => validateEmail()}
        />
        <Text style={{color: 'red'}}>{error.email}</Text>
        <TextInput
          placeholder="Enter password"
          value={inputs.password}
          onChangeText={handleChange('password')}
          onBlur={() => passwordValidate()}
        />
        <Text style={{color: 'red'}}>{error.password}</Text>

        <Button title="Sign In" onPress={() => onSubmit()} />
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
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
