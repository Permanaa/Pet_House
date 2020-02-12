import { StyleSheet } from 'react-native';
import { scale } from '../../../utils/scaling';
import METRICS from '../../../constants/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: scale(30),
    height: scale(30),
    marginLeft: METRICS.baseMargin
  }
});
