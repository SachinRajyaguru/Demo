import { fontSize, fontFamily, colors } from '@theme';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { ms, vs } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import {
  authenticateUserStart,
  authenticateUserSuccess,
} from '../../redux/slices/authSlice';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      dispatch(authenticateUserStart());
      setTimeout(() => {
        dispatch(authenticateUserSuccess());
      }, 500);
    } else {
      // display error message or do something else
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subTitle}>Login account quickly using</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        autoCapitalize={'none'}
        autoComplete={'off'}
        autoCorrect={false}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: fontSize.f22,
    fontFamily: fontFamily.Bold,
    marginHorizontal: '10%',
    marginBottom: ms(16),
    textAlign: 'center',
  },
  subTitle: {
    fontSize: fontSize.f14,
    fontFamily: fontFamily.Regular,
    color: '#939DA6',
    marginHorizontal: '10%',
    marginBottom: ms(16),
    textAlign: 'center',
  },
  input: {
    height: vs(50),
    marginHorizontal: ms(25),
    paddingHorizontal: ms(16),
    marginBottom: ms(16),
    borderRadius: ms(6),
    fontSize: fontSize.f18,
    fontFamily: fontFamily.Regular,
    color: colors.black,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.cDADBE7,
  },
  button: {
    borderRadius: ms(5),
    height: vs(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ms(25),
    backgroundColor: colors.c3DD598,
  },
  buttonText: {
    fontSize: fontSize.f18,
    fontFamily: fontFamily.Regular,
    color: colors.white,
    textTransform: 'uppercase',
  },
});

export default Login;
