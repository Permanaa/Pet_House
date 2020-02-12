/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React from 'react';
import { View, Image, TextInput, Alert, ToastAndroid } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
import Button from '../../components/elements/Button';
import IMAGES from '../../configs/images';
// import { ENDPOINT } from '../../configs';
import { STORAGE_KEY } from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      whatsapp: '',
      phone: '',
      password: '',
      isHidden: true,
      isLoading: false
    };
    this._showPass = this._showPass.bind(this);
  }

  _showPass = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  _signUp = async () => {
    const { username, email, whatsapp, phone, password } = this.state;
    const params = { username, email, whatsapp, phone, password };
    if (email === '' && password === '' && whatsapp === '' && phone === '' && username === '') {
      Alert.alert('Mohon Di isi!');
    } else {
      try {
        const result = await axios.post('http://3.92.245.121:9000/api/users/v1/register', params);
        if (result.data.code === 200) {
          this.props.navigation.navigate('Home');
          await storage.set(STORAGE_KEY.TOKEN_LOGIN, result.data.token);
        } else {
          ToastAndroid.show('Failed to Register', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
      }
    }
  };

  _signIn = () => {
    const { navigation } = this.props;
    navigation.navigate('SignIn');
  };

  render() {
    const { isLoading, email, password, isHidden } = this.state;
    return (
      <MainScreen isLoading={isLoading} style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.appLogo} resizeMode="contain" style={styles.logo} />
        </View>
        <View style={styles.margin2} />
        <View style={styles.row}>
          <Button
            customText={styles.outlinedText}
            customContainer={styles.btn2}
            title={I18n.t('login')}
            onPress={this._signIn}
          />
          <Button
            customText={styles.outlinedText}
            title={I18n.t('signUp')}
            customContainer={styles.btn}
            onPress={this._signUp}
          />
        </View>
        <View style={styles.margin} />
        <View style={styles.inputText}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            textContentType="username"
            placeholder={I18n.t('username')}
            editable
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
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
            keyboardType="phone-pad"
            placeholder={I18n.t('EnterTelp')}
            editable
            autoCapitalize="none"
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={styles.inputText}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            keyboardType="phone-pad"
            placeholder={I18n.t('enterWa')}
            editable
            autoCapitalize="none"
            onChangeText={whatsapp => this.setState({ whatsapp })}
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
        <View style={styles.margin} />
        <Button
          type="raised-ripple"
          customText={styles.login}
          customContainer={styles.outlined}
          title={I18n.t('signUp')}
          onPress={this._signUp}
        />
        <View style={styles.margin} />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
