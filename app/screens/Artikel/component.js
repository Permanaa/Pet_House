import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import styles from './styles';
import Header from '../../components/elements/Header2';
import I18n from '../../i18n';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.navigate('Home');
  };
  _detail = () => {
    const { navigation } = this.props;
    navigation.navigate('DetailArtikel');
  };

  render() {
    return (
      <ScrollView>
        <Header title="Artikel" back />
        <View style={styles.container3}>
          <TouchableOpacity style={styles.container5} onPress={this._detail}>
            <Image source={IMAGES.anjing} style={styles.imgContainer2} />
            <View style={styles.column2}>
              <Text style={styles.title}>{I18n.t('title2')}</Text>
              <Text style={styles.date}>{I18n.t('date')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container5} onPress={this._detail}>
            <Image source={IMAGES.anjing} style={styles.imgContainer2} />
            <View style={styles.column2}>
              <Text style={styles.title}>{I18n.t('title2')}</Text>
              <Text style={styles.date}>{I18n.t('date')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container5} onPress={this._detail}>
            <Image source={IMAGES.anjing} style={styles.imgContainer2} />
            <View style={styles.column2}>
              <Text style={styles.title}>{I18n.t('title2')}</Text>
              <Text style={styles.date}>{I18n.t('date')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container5} onPress={this._detail}>
            <Image source={IMAGES.anjing} style={styles.imgContainer2} />
            <View style={styles.column2}>
              <Text style={styles.title}>{I18n.t('title2')}</Text>
              <Text style={styles.date}>{I18n.t('date')}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container5} onPress={this._detail}>
            <Image source={IMAGES.anjing} style={styles.imgContainer2} />
            <View style={styles.column2}>
              <Text style={styles.title}>{I18n.t('title2')}</Text>
              <Text style={styles.date}>{I18n.t('date')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
