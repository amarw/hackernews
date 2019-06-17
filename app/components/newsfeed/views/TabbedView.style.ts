import { StyleSheet } from 'react-native';
import Color from '../../../utilities/Color';

export default StyleSheet.create({
  tabbar: {
    backgroundColor: Color.white,
    borderBottomColor: Color.border,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  tabLabelText: {
    color: Color.orange,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2
  },
  tabLabel: {
    flex: 1,
    backgroundColor: Color.white
  }
});
