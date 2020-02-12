import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  FONT_HEADLINE6_PRIMARY,
  COLOR_BLACK,
  COLOR_BASE_PRIMARY_LIGHT,
  COLOR_GREY_LIGHT,
  COLOR_BASE_PRIMARY_GREEN,
  COLOR_BASE_PRIMARY_RED,
  COLOR_BASE_RED
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  button: {
    width: scale(30),
    height: scale(30),
    marginLeft: METRICS.baseMargin
  },
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    height: scale(160),
    width: scale(320),
    justifyContent: 'center',
    marginTop: METRICS.doubleBaseMargin
  },
  text: {
    marginLeft: METRICS.doubleBaseMargin,
    fontSize: 20,
    fontWeight: 'bold',
    color: COLOR_BLACK
  },
  text3: {
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.doubleBaseMargin,
    fontSize: scale(23),
    fontWeight: 'bold',
    color: COLOR_BLACK
  },
  container2: {
    marginLeft: METRICS.baseMargin,
    marginTop: METRICS.doubleBaseMargin,
    backgroundColor: COLOR_WHITE,
    justifyContent: 'center',
    borderRadius: scale(15),
    height: scale(60),
    width: scale(330)
  },
  container3: {
    marginTop: scale(20),
    flexDirection: 'column',
    alignContent: 'center',
    height: scale(160),
    width: scale(320),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginLeft: scale(15)
  },
  container4: {
    flexDirection: 'column',
    alignContent: 'center',
    height: scale(160),
    width: scale(320),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15)
  },
  icon: {
    width: scale(38),
    height: scale(38),
    marginLeft: METRICS.baseMargin,
    marginTop: METRICS.baseMargin
  },
  column: { flexDirection: 'column' },
  WaCon: {
    width: scale(141),
    height: scale(56),
    alignContent: 'center',
    backgroundColor: COLOR_BASE_PRIMARY_LIGHT,
    flexDirection: 'row',
    borderRadius: scale(10)
  },
  CallCon: {
    width: scale(141),
    height: scale(56),
    alignContent: 'center',
    backgroundColor: COLOR_BASE_PRIMARY_RED,
    flexDirection: 'row',
    borderRadius: scale(10),
    marginLeft: METRICS.doubleBaseMargin
  },
  imgContainer2: {
    width: scale(140),
    height: scale(103),
    alignContent: 'center',
    borderRadius: scale(15)
  },
  text2: {
    marginTop: METRICS.baseMargin,
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_GREY_LIGHT,
    fontSize: scale(20)
  },
  textWa: {
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.doubleBaseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BASE_PRIMARY_GREEN,
    fontSize: scale(14)
  },
  textCall: {
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.doubleBaseMargin,
    marginRight: METRICS.doubleSection,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BASE_RED,
    fontSize: scale(14)
  }
});

export default styles;
