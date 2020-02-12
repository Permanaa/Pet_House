/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  FONT_HEADLINE6_PRIMARY,
  FONT_BODY2_PRIMARY,
  FONT_BUTTON_PRIMARY,
  COLOR_BLACK
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  container2: {
    position: 'absolute',
    alignItems: 'center',
    height: '55%',
    width: scale(350),
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
    backgroundColor: '#41AEEC'
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(200),
    width: scale(350)
  },
  logoContainer: { 
    width: scale(100),
    height: scale(100),
    marginTop: scale(70)
  },
  logo: {
    width: scale(100),
    height: scale(100)
  },
  appTitle: { ...FONT_HEADLINE6_PRIMARY, color: COLOR_WHITE },
  inputContainer: {
    justifyContent: 'flex-end',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: scale(16),
    width: scale(300),
    height: '87%',
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15)
  },
  inputText: {
    marginTop: scale(16),
    width: scale(275),
    height: scale(40),
    paddingLeft: scale(6),
    paddingRight: scale(6),
    borderRadius: scale(5),
    borderColor: '#c4c4c4',
    borderWidth: scale(1),
    backgroundColor: COLOR_WHITE
  },
  row: {
    marginBottom: scale(24),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  container: { flexDirection: 'column', alignContent: 'flex-start' },
  input: { ...FONT_BODY2_PRIMARY },
  inputLogo: { width: scale(20), height: scale(20), position: 'absolute', margin: scale(8) },
  showPassLogo: {
    width: scale(20),
    height: scale(20),
    position: 'absolute',
    marginLeft: METRICS.marginHide,
    top: METRICS.topHide
  },
  margin: { marginBottom: METRICS.baseMargin },
  margin2: { marginBottom: scale(80) },
  outlined: {
    marginTop: scale(32),
    width: scale(275),
    height: scale(40),
    backgroundColor: '#41AEEC'
  },
  outlinedText: { color: COLOR_BLACK, ...FONT_BUTTON_PRIMARY },
  login: { color: COLOR_WHITE, ...FONT_BUTTON_PRIMARY },
  btn: {
    width: scale(130),
    height: scale(30),
    backgroundColor: COLOR_WHITE
  },
  btn2: {
    width: scale(130),
    height: scale(30)
  },
  Image: {
    width: scale(80),
    height: scale(80),
    marginBottom: scale(42)
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 36,
    height: '60%'
  }
});

export default styles;
