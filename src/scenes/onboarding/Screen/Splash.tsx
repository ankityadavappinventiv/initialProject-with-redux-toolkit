import {View, Text, StyleSheet, Image, ImageProps} from 'react-native';
import React from 'react';
import {Screen} from '_components';
import {useColors} from '_hooks';
import {IMAGES} from '_styles';

const Splash = () => {
  const Color = useColors();
  return (
    <View style={styles.mainContainer}>
      <Screen
        statusBarColor={Color.WHITE}
        backgroundColor={Color.WHITE}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        preset="fixed"
        style={{flex: 1}}>
        <Image resizeMode={'contain'} source={IMAGES.splashLogo} />
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default Splash;
