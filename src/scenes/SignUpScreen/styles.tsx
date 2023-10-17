import {StyleSheet, ViewStyle} from 'react-native';

interface StylesProps {
  mainContainer: ViewStyle;
  container: ViewStyle;
}

const styles = StyleSheet.create<StylesProps>({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
