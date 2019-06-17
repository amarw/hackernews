import { StyleSheet } from 'react-native';
import Color from 'app/utilities/Color';

export default StyleSheet.create({
  horizontalContainerView: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  accessoryButton: {
    height: 44,
    width: 40,
    marginHorizontal: 8
  },
  navigationTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 28,
    color: Color.orange,
    fontWeight: '800',
    letterSpacing: 2,
    textShadowColor: Color.navigationTitleShadow,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 1
  }
});
