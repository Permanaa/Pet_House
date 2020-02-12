import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  FONT_HEADLINE6_PRIMARY,
  COLOR_BLACK,
  COLOR_GREY_DARK,
  COLOR_GREY_LIGHT,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_TITLE1
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  containerHeader: {
    position: 'absolute',
    width: '100%',
    height: scale(150),
    padding: 16,
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  titleHeader: {
    color: COLOR_WHITE,
    fontSize: 32,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  container2: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scale(130),
    width: scale(320),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginTop: scale(80),
    paddingLeft: scale(36),
    paddingRight: scale(36)
  },
  container3: {
    marginTop: scale(24),
    flexDirection: 'column',
    alignContent: 'center',
    height: scale(190),
    width: scale(120),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginRight: scale(16)
  },
  container4: {
    marginTop: scale(24),
    padding: scale(16),
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'center',
    width: scale(320),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginBottom: METRICS.doubleBaseMargin
  },
  container5: {
    marginTop: scale(16),
    flexDirection: 'row',
    alignContent: 'center',
    height: scale(100),
    width: scale(270),
    borderRadius: scale(15)
  },
  container6: {
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: COLOR_WHITE
  },
  row: {
    marginLeft: scale(16),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center'
  },
  column2: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: METRICS.baseMargin
  },
  btnContainer: {
    width: scale(100),
    height: scale(70),
    backgroundColor: COLOR_GREY_DARK,
    borderBottomLeftRadius: scale(15),
    borderBottomRightRadius: scale(15)
  },
  menuImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(57),
    height: scale(57),
    borderRadius: 100,
    backgroundColor: '#FFDAA4'
  },
  imgContainer: {
    width: scale(120),
    height: scale(90),
    alignContent: 'center',
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15)
  },
  imgContainer2: {
    width: scale(140),
    height: scale(103),
    alignContent: 'center',
    borderRadius: scale(15)
  },
  imgContainer3: {
    width: scale(30),
    height: scale(30),
    alignContent: 'center'
  },
  text: {
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BLACK,
    fontSize: scale(20)
  },
  text2: {
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BLACK,
    fontSize: scale(30),
    marginTop: scale(5),
    fontWeight: 'bold'
  },
  text3: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_TITLE1,
    fontWeight: '500',
    fontSize: scale(16)
  },
  title: {
    fontWeight: '500',
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_TITLE1,
    marginBottom: scale(6),
    fontSize: scale(13)
  },
  date: {
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_GREY_LIGHT,
    fontSize: scale(12)
  },
  ket: {
    marginLeft: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_GREY_LIGHT,
    fontSize: scale(12)
  },
  text4: {
    fontWeight: '500',
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_TITLE1,
    marginTop: METRICS.baseMargin,
    alignItems: 'center',
    fontSize: scale(14)
  }
});

export default styles;
