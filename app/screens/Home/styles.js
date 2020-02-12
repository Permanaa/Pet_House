import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  FONT_HEADLINE6_PRIMARY,
  COLOR_BLACK,
  COLOR_GREY_DARK,
  COLOR_GREY_LIGHT
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: scale(130),
    width: scale(320),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginTop: METRICS.baseMargin,
    marginLeft: scale(15)
  },
  container3: {
    marginTop: METRICS.doubleBaseMargin,
    flexDirection: 'column',
    alignContent: 'center',
    height: scale(180),
    width: scale(120),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginLeft: METRICS.baseMargin
  },
  container4: {
    marginTop: scale(30),
    flexDirection: 'column',
    alignContent: 'center',
    height: scale(600),
    width: scale(320),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginLeft: scale(15),
    marginBottom: METRICS.doubleBaseMargin
  },
  container5: {
    marginTop: scale(30),
    flexDirection: 'row',
    alignContent: 'center',
    height: scale(100),
    width: scale(270),
    borderRadius: scale(15),
    marginLeft: METRICS.baseMargin
  },
  container6: {
    marginTop: scale(30),
    flexDirection: 'column',
    alignContent: 'center',
    height: scale(80),
    width: scale(60),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginLeft: METRICS.section
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  column: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: METRICS.baseMargin
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
    width: scale(50),
    height: scale(50),
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
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BLACK,
    fontSize: scale(20)
  },
  title: {
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BLACK,
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
    marginTop: scale(2),
    marginLeft: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_GREY_LIGHT,
    fontSize: scale(12)
  },
  text4: {
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BLACK,
    marginTop: METRICS.baseMargin,
    alignItems: 'center',
    fontSize: scale(12)
  }
});

export default styles;
