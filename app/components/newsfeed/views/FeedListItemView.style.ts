import { StyleSheet } from 'react-native';
import Color from 'app/utilities/Color';

const HEIGHT = 50;

export default StyleSheet.create({
  mainContainerView: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 12,
    borderColor: Color.border,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    backgroundColor: Color.white,
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 5,
    shadowOpacity: 0.1
  },
  userName: {
    color: Color.orange,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1.5,
    marginHorizontal: 16,
    marginTop: 16
  },
  title: {
    color: Color.darkText,
    fontSize: 16,
    fontWeight: 'normal',
    letterSpacing: 1.5,
    marginHorizontal: 16,
    marginVertical: 8
  },
  timeStamp: {
    color: Color.greyText,
    fontSize: 12,
    fontWeight: 'normal',
    letterSpacing: 1.5,
    marginHorizontal: 16,
    marginBottom: 8
  },
  horizontalContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonView: {
    flex: 1,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  verticalSeparatorView: {
    height: HEIGHT
  }
});
