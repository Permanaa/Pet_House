import React from 'react';
import { View } from 'react-native';
import MainScreen from '../../components/layouts/MainScreen';
import Header from '../../components/elements/Header';
import Button from '../../components/elements/Button';
import Account from '../../../assets/svgs/Account';
import styles from './styles';
import { STORAGE_KEY } from '../../constants';
import storage from '../../utils/storage';

export default class Component extends React.Component {
  _onPress = async () => {
    await storage.remove(STORAGE_KEY.TOKEN_LOGIN)
    const { navigation } = this.props;
      navigation.navigate('SignIn');
  };

  render() {
    return (
      <MainScreen style={styles.container}>
        <Header title="Account" back={false} />
        <View style={styles.container}>
          <Button title="Log out" disabled={false} onPress={this._onPress} type="raised-ripple" />
          <Account />
        </View>
      </MainScreen>
    );
  }
}
