import {StyleSheet} from 'react-native';
import {Colors} from 'res/constants/Colors';
import {s, vs, ms, mvs} from 'react-native-size-matters';

export default StyleSheet.create({
  shareFoodComponentArea: {
    width: '100%',
    height: mvs(120, 0.7),
    backgroundColor: Colors.BackGroundGrey,
    marginBottom: mvs(15, 0.6),
    alignItems: 'center',
  },
  shareFoodTitleText: {
    width: '100%',
    marginBottom: mvs(5, 0.6),
    marginTop: mvs(5, 0.6),
    alignItems: 'center',
  },
  shareFoodButtonView: {
    width: '100%',
    alignItems: 'center',
    marginTop: mvs(10, 0.6),
  },
});
