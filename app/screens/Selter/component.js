import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
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
        <Header title="Shelters" back />
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.text3}>{I18n.t('selName')}</Text>
            <Text style={styles.text2}>{I18n.t('adres')}</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.WaCon}>
                <Text style={styles.textWa}>{I18n.t('wa')}</Text>
                <Image source={IMAGES.wa} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CallCon}>
                <Text style={styles.textCall}>{I18n.t('call')}</Text>
                <Image source={IMAGES.call} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.text3}>{I18n.t('selName')}</Text>
            <Text style={styles.text2}>{I18n.t('adres')}</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.WaCon}>
                <Text style={styles.textWa}>{I18n.t('wa')}</Text>
                <Image source={IMAGES.wa} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CallCon}>
                <Text style={styles.textCall}>{I18n.t('call')}</Text>
                <Image source={IMAGES.call} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.text3}>{I18n.t('selName')}</Text>
            <Text style={styles.text2}>{I18n.t('adres')}</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.WaCon}>
                <Text style={styles.textWa}>{I18n.t('wa')}</Text>
                <Image source={IMAGES.wa} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CallCon}>
                <Text style={styles.textCall}>{I18n.t('call')}</Text>
                <Image source={IMAGES.call} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container3}>
          <View style={styles.container4}>
            <Text style={styles.text3}>{I18n.t('selName')}</Text>
            <Text style={styles.text2}>{I18n.t('adres')}</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.WaCon}>
                <Text style={styles.textWa}>{I18n.t('wa')}</Text>
                <Image source={IMAGES.wa} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CallCon}>
                <Text style={styles.textCall}>{I18n.t('call')}</Text>
                <Image source={IMAGES.call} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
