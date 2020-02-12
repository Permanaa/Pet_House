/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { View, Image, TextInput, Alert, ToastAndroid } from 'react-native';
// import axios from 'axios';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import IMAGES from '../../configs/images';
import { ENDPOINT } from '../../configs';
import { STORAGE_KEY } from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isHidden: true,
      isLoading: false
    };
    this._showPass = this._showPass.bind(this);
  }

  _showPass = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  _signUp = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };
  _signin = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };
  _signIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    if (email === '' && password === '') {
      Alert.alert('Mohon Di isi!');
    } else {
      try {
        const result = await ENDPOINT.login(params);
        console.log(result.data);
        if (result.code === 200) {
          await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data.token);
          Alert.alert(JSON.stringify(result.data.code), 'Succses');
          this.props.navigation.navigate('Home');
        } else {
          ToastAndroid.show('Failed to Login', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };

  render() {
    const { isLoading, email, password, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <View style={styles.container2}>
          <View style={styles.logoContainer}>
            <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
          </View>
          <View style={styles.margin2} />
          <View style={styles.row}>
            <Button
              customText={styles.outlinedText}
              customContainer={styles.btn}
              title={I18n.t('login')}
              onPress={this._signUp}
            />
            <Button
              customText={styles.outlinedText}
              title={I18n.t('signUp')}
              customContainer={styles.btn2}
              onPress={this._signUp}
            />
          </View>
        </View>
        <View>
          <View style={styles.inputContainer}>
            <View style={styles.ImgCon}>
              <Image source={IMAGES.img} resizeMode="contain" style={styles.Image} />
            </View>
            <View style={styles.inputText}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                textContentType="emailAddress"
                placeholder={I18n.t('email')}
                editable
                autoCapitalize="none"
                value={email}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View style={styles.inputText}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                secureTextEntry={isHidden}
                placeholder={I18n.t('password')}
                editable
                autoCapitalize="none"
                value={password}
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <Button
              type="raised-ripple"
              customText={styles.login}
              customContainer={styles.outlined}
              title={I18n.t('login')}
              onPress={this._signIn}
            />
          </View>
        </View>
        <View style={styles.margin} />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
