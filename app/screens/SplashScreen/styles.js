import { StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41AEEC'
  },
  logoContainer: { width: scale(100), height: scale(100) },
  logo: { flex: 1, width: undefined, height: undefined, marginBottom: METRICS.baseMargin },
  appTitle: { fontSize: 18, color: COLOR_WHITE },
  appVersion: { fontSize: 14 }
});

export default styles;
