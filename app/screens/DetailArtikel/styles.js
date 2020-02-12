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
    marginTop: METRICS.doubleBaseMargin,
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
    alignItems: 'center',
    height: scale(600),
    width: scale(320),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(15),
    marginLeft: scale(15),
    marginBottom: METRICS.doubleBaseMargin
  },
  container4: {
    marginTop: METRICS.doubleBaseMargin,
    flexDirection: 'column',
    height: scale(400),
    width: scale(295)
  },
  imgContainer: {
    width: scale(295),
    height: scale(205),
    borderRadius: scale(15)
  },
  text2: {
    marginTop: METRICS.baseMargin,
    ...FONT_HEADLINE6_PRIMARY,
    color: COLOR_GREY_LIGHT,
    fontSize: scale(14)
  }
});

export default styles;
