import {
  StyleSheet,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {COLORS, SPACING} from '../../styles';

interface StylesProp {
  mainComponent: ViewStyle;
  container: ViewStyle;
  textInput: TextInputProps;
  button: TouchableOpacityProps;
  loginText: TextProps;
}

const styles = StyleSheet.create<StylesProp>({
  mainComponent: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: SPACING.SCALE_1,
    borderColor: COLORS.GRAY_MEDIUM,
    height: SPACING.SCALE_40,
    marginHorizontal: SPACING.SCALE_20,
    borderRadius: SPACING.SCALE_7,
    marginVertical: SPACING.SCALE_20,
  },
  button: {
    borderWidth: SPACING.SCALE_1,
    borderColor: COLORS.SECONDARY,
    backgroundColor: COLORS.SECONDARY,
    height: SPACING.SCALE_50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING.SCALE_20,
    borderRadius: SPACING.SCALE_8,
    marginTop: SPACING.SCALE_25,
  },
  loginText: {
    color: COLORS.WHITE,
    fontSize: SPACING.SCALE_16,
    textAlign: 'center',
  },
});
export default styles;
