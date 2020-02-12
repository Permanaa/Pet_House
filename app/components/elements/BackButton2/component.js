import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import IMAGES from '../../../configs/images';

export default class Component extends React.Component {
  _onPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <Image source={IMAGES.back} style={styles.button} />
      </TouchableOpacity>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
