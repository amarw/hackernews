import { StyleSheet } from 'react-native';
import Color from 'app/utilities/Color';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 12,
    borderColor: Color.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonView: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    marginVertical: 12,
    marginHorizontal: 32
  }
});
