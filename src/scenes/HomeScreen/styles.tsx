import {StyleSheet, ViewStyle} from 'react-native';

interface StylesProps {
  mainComponent: ViewStyle;
  container: ViewStyle;
}

const styles = StyleSheet.create<StylesProps>({
  mainComponent: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
