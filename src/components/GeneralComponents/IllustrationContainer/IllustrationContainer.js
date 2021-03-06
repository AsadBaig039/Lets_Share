import React, {useState} from 'react';
import {View, Image} from 'react-native';
import styles from './style';

import {Colors} from 'res/constants/Colors';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation, illustration, style}) => {
  return (
    <View style={styles.illustrationContainer}>
      <Image
        style={[styles.imageStyle, style]}
        resizeMode="cover"
        source={illustration}
      />
    </View>
  );
};

export default Component;
