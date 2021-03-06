import React from 'react';
import {
  HeadingText,
  GroupLabelText,
  ShareActionAreaHeadingText,
  TextButton,
} from 'res/UniversalComponents/Text.js';
import {OutlinedActionIconButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import image from 'res/images/DummyImages/shareRide.png';

const Component = ({navigation}) => {
  return (
    <View style={styles.shareSpaceComponentArea}>
      <View style={styles.shareSpaceTitleText}>
        <ShareActionAreaHeadingText>
          Got a space to share ?
        </ShareActionAreaHeadingText>
      </View>

      <View style={styles.shareSpaceButtonView}>
        <OutlinedActionIconButton
          onPress={() => navigation.navigate('CreateSpaceShare')}
          iconName="add-outline">
          Share your space
        </OutlinedActionIconButton>
      </View>
    </View>
  );
};

export default Component;
