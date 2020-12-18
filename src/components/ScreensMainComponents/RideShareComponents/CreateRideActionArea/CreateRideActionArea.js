import React from 'react';
import {
  HeadingText,
  GroupLabelText,
  TextButton,
  ShareActionAreaHeadingText,
  SectionHeadingText,
} from 'res/UniversalComponents/Text.js';

import {CategoryOutlinedButton} from 'res/UniversalComponents/Button.js';

import styles from './style';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import CreateMyAssetList from '../../../GeneralComponents/CreateMyAssetList';
import ShareRide from 'res/images/ModulesImages/RideSharingImages/ShareRide.png';

//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  // console.log('RideShareActionArea', navigation);
  //to use styles -> {styles.propertyName}
  return (
    <View style={styles.createRideComponentArea}>
      <View style={styles.createdRidesArea}>
        <View style={styles.myRidesTitleText}>
          <ShareActionAreaHeadingText>Select Ride</ShareActionAreaHeadingText>
        </View>

        <View style={styles.myRidesListArea}>
          <CreateMyAssetList navigation={navigation} />
        </View>
      </View>
      <View style={styles.selectRideTypeArea}>
        <View style={styles.myRidesTitleText}>
          <SectionHeadingText>Select Ride Type</SectionHeadingText>
        </View>
        <View style={styles.categoryButtonsArea}>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            Nearby Ride
          </CategoryOutlinedButton>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            City to City Ride
          </CategoryOutlinedButton>
          <CategoryOutlinedButton iconName="arrow-forward-outline">
            Tour Ride
          </CategoryOutlinedButton>
        </View>
        <View style={styles.pngImageArea}>
          <Image
            resizeMode="contain"
            source={ShareRide}
            style={styles.imageContainer}
          />
        </View>
      </View>
    </View>
  );
};

export default Component;
