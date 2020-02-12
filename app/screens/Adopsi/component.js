/* eslint-disable camelcase */
/* eslint-disable react/jsx-key */
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import styles from './styles';
import Header from '../../components/elements/Header2';
import Loading from '../../components/elements/Loading';
import storage from '../../utils/storage';
import { STORAGE_KEY } from '../../constants';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      adoptions: []
    };
  }

  UNSAFE_componentWillMount() {
    this._getAdoption();
  }

  _onPress = () => {
    this.props.navigation.navigate('Home');
  };
  _detail = () => {
    const { navigation } = this.props;
    navigation.navigate('DetailAdopsi');
  };

  _getAdoption = async () => {
    this.setState({
      isLoading: true
    });
    const token = await storage.get(STORAGE_KEY.TOKEN_LOGIN);
    axios
      .get('http://3.92.245.121:9000/api/adoption/v1', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        this.setState({
          adoptions: res.data.data.data,
          isLoading: false
        });
      });
  };

  render() {
    return this.state.isLoading === true ? (
      <Loading />
    ) : (
      <ScrollView>
        <Header title="Adopsi" back />
        <View style={styles.container3}>
          {this.state.adoptions.map(adoption => (
            <TouchableOpacity style={styles.container4} onPress={this._detail}>
              <Image source={IMAGES.anjing} style={styles.imgContainer2} />
              <View style={styles.column2}>
                <Text style={styles.title}>{adoption.name}</Text>
                <Text style={styles.ket}>{adoption.age}</Text>
                <Text style={styles.ket}>{adoption.gender}</Text>
                <Text style={styles.ket}>{adoption.regency}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
