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
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c4c4c4'
  },
  container2: {
    alignItems: 'center',
    height: scale(300),
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
  logoContainer: { width: scale(100), height: scale(100), marginBottom: METRICS.doubleSection },
  logo: {
    width: scale(100),
    height: scale(100),
    marginBottom: METRICS.baseMargin,
    marginTop: METRICS.doubleSection
  },
  appTitle: { ...FONT_HEADLINE6_PRIMARY, color: COLOR_WHITE },
  inputContainer: {
    alignContent: 'center',
    width: scale(300),
    height: scale(340),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15)
  },
  inputText: {
    marginTop: METRICS.baseMargin,
    marginLeft: scale(10),
    width: scale(275),
    height: scale(40),
    borderRadius: scale(5),
    borderColor: '#c4c4c4',
    borderWidth: scale(1),
    backgroundColor: COLOR_WHITE
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  container: { flexDirection: 'column', alignContent: 'flex-start' },
  input: { marginLeft: scale(30), ...FONT_BODY2_PRIMARY },
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
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: scale(10),
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
    height: scale(30),
    backgroundColor: '#41AEEC'
  },
  Image: {
    width: scale(60),
    height: scale(60)
  },
  ImgCon: {
    width: scale(300),
    height: scale(60),
    alignItems: 'center',
    marginTop: METRICS.doubleBaseMargin
  }
});

export default styles;
