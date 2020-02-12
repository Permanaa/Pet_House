import { StyleSheet } from 'react-native';
import { COLOR_WHITE, FONT_HEADLINE6_PRIMARY, COLOR_BLACK, COLOR_GREY_LIGHT } from '../../styles';
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
    flexDirection: 'row'
  },
  text: {
    marginLeft: METRICS.doubleBaseMargin,
    fontSize: 20,
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
  container4: {
    marginTop: scale(30),
    flexDirection: 'row',
    alignContent: 'center',
    height: scale(100),
    width: scale(280),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginLeft: METRICS.doubleBaseMargin
  },
  column2: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: METRICS.baseMargin
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
    color: COLOR_BLACK,
    fontSize: scale(20)
  },
  title: {
    marginTop: scale(2),
    marginLeft: METRICS.baseMargin,
    marginBottom: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_BLACK,
    fontSize: scale(13)
  },
  ket: {
    marginTop: scale(2),
    marginLeft: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_GREY_LIGHT,
    fontSize: scale(12)
  }
});

export default styles;
