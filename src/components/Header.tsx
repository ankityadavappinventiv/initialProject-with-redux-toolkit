import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TYPOGRAPHY, vw} from '_styles';
import {useColors} from '_hooks';

interface StyleProps {
  safeView: ViewStyle;
  mainView: ViewStyle;
  titleView: ViewStyle;
  noIcon: ViewStyle;
  titleStyle: TextProps;
}

interface HeaderProps {
  title: string;
  leftIcon?: string;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  leftIconDisabled?: boolean;
  rightIconDisabled?: boolean;
  _onLeftAction?: () => void;
  _onRightAction?: () => void;
}

const Header: FC<HeaderProps> = ({
  title,
  leftIcon,
  isLeftIcon = true,
  isRightIcon,
  _onLeftAction,
  _onRightAction,
  rightIconDisabled,
  leftIconDisabled,
}) => {
  const Color = useColors();
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={[
        styles.safeView,
        {paddingTop: insets.top, backgroundColor: Color.GRAY_LIGHT},
      ]}>
      <View style={[styles.mainView, {backgroundColor: Color.GRAY_LIGHT}]}>
        {isLeftIcon ? (
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={leftIconDisabled ?? false}
            onPress={_onLeftAction}>
            <Icon
              name={leftIcon ? leftIcon : 'arrow-back-ios'}
              size={20}
              color={Color.BLACK}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.noIcon} />
        )}
        <View style={styles.titleView}>
          <Text style={[styles.titleStyle, {color: Color.BLACK}]}>{title}</Text>
        </View>
        {isRightIcon ? (
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={rightIconDisabled ?? true}
            onPress={_onRightAction}>
            <Icon
              name={leftIcon ? leftIcon : 'arrow-back-ios'}
              size={20}
              color={Color.BLACK}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.noIcon} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create<StyleProps>({
  safeView: {
    width: '100%',
  },
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: vw(16),
    height: vw(44),
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: vw(16),
    fontWeight: TYPOGRAPHY.FONT_WEIGHT_BOLD,
  },
  noIcon: {
    height: vw(44),
    width: vw(20),
  },
});
