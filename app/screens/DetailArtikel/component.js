import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../components/elements/Header2';
import IMAGES from '../../configs/images';
import styles from './styles';
import I18n from '../../i18n';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ScrollView>
        <Header title="Artikel" back />
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Image source={IMAGES.anjing} style={styles.imgContainer} />
            <Text style={styles.text}>{I18n.t('title')}</Text>
            <Text style={styles.text2}>{I18n.t('date')}</Text>
            <Text style={styles.text2}>{I18n.t('content')}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
