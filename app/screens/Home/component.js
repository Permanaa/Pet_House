import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
// import axios from 'axios';
import MainScreen from '../../components/layouts/MainScreen';
import IMAGES from '../../configs/images';
import styles from './styles';
import I18n from '../../i18n';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: false,
      // title: ''
    };
  }
  // componentWillMount() {
  //   this._loadData();
  // }

  // _loadData = () => {
  //   axios.get('http://3.92.245.121:9000/api/article/v1').then(res => {
  //     this.setState({ title: res.data.data.title });
  //   });
  // };

  _artikel = () => {
    const { navigation } = this.props;
    navigation.navigate('Artikel');
  };
  _detail = () => {
    const { navigation } = this.props;
    navigation.navigate('DetailArtikel');
  };
  _adop = () => {
    const { navigation } = this.props;
    navigation.navigate('Adopsi');
  };
  _sel = () => {
    const { navigation } = this.props;
    navigation.navigate('Selter');
  };

  render() {
    return (
      <MainScreen>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHeader}>
            <Text style={styles.titleHeader}>Pet House</Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPress={this._adop} style={styles.container6}>
              <View style={styles.menuImageWrapper}>
                <Image source={IMAGES.adop} style={styles.imgContainer3} />
              </View>
              <Text style={styles.text4}>{I18n.t('adop')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._artikel} style={styles.container6}>
              <View style={styles.menuImageWrapper}>
                <Image source={IMAGES.artikel} style={styles.imgContainer3} />
              </View>
              <Text style={styles.text4}>{I18n.t('artikel')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._sel} style={styles.container6}>
              <View style={styles.menuImageWrapper}>
                <Image source={IMAGES.sel} style={styles.imgContainer3} />
              </View>
              <Text style={styles.text4}>{I18n.t('sel')}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              <TouchableOpacity onPress={this._detail} style={styles.container3}>
                <Image source={IMAGES.anjing} style={styles.imgContainer} />
                <Text style={styles.title}>{I18n.t('dog')}</Text>
                <Text style={styles.ket}>{I18n.t('umur')}</Text>
                <Text style={styles.ket}>{I18n.t('kelamin')}</Text>
                <Text style={styles.ket}>{I18n.t('lok')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._detail} style={styles.container3}>
                <Image source={IMAGES.anjing} style={styles.imgContainer} />
                <Text style={styles.title}>{I18n.t('dog')}</Text>
                <Text style={styles.ket}>{I18n.t('umur')}</Text>
                <Text style={styles.ket}>{I18n.t('kelamin')}</Text>
                <Text style={styles.ket}>{I18n.t('lok')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this._detail} style={styles.container3}>
                <Image source={IMAGES.anjing} style={styles.imgContainer} />
                <Text style={styles.title}>{I18n.t('dog')}</Text>
                <Text style={styles.ket}>{I18n.t('umur')}</Text>
                <Text style={styles.ket}>{I18n.t('kelamin')}</Text>
                <Text style={styles.ket}>{I18n.t('lok')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.container4}>
            <Text style={styles.text3}>{I18n.t('artikel')}</Text>
            <View style={styles.column}>
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
          </View>
        </ScrollView>
      </MainScreen>
    );
  }
}

Component.defaultProps = {
  listUsers: []
};
