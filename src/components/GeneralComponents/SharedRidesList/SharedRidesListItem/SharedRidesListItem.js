import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from './style';
import {
  SubtitleText,
  CaptionText,
  CaptionTextPrimary,
  FormText,
  BodyTextLight,
  BodyTextBold,
  BodyText,
  RecentlySharedTitleText,
  RecentlySharedSubtitleText,
} from 'res/UniversalComponents/Text';
import {TextIcon, Icon} from 'res/UniversalComponents/TextIcon.js';
import RidesIcon from '../../../../res/images/ModulesImages/RideSharingImages/ShareRide.png';
import {Colors} from 'res/constants/Colors.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Component = ({
  item,
  startLocation,
  destinationLocation,
  rideCategory,
  onPress,
  image,
  rideName,
  registrationNo,
  fare,
  seatsAvailable,
  renderRightAction,
}) => {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.mainContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {rideCategory && (
              <View
                style={{width: '80%', alignItems: 'center', paddingTop: 10}}>
                <RecentlySharedTitleText>
                  {rideCategory + ' Ride'}
                </RecentlySharedTitleText>
              </View>
            )}
            {item.bookings.length === 0 ? (
              <View />
            ) : (
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 15,
                  backgroundColor: Colors.Primary,
                }}
              />
            )}
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rideDetails}>
              <View style={styles.imageContainer}>
                <Image source={RidesIcon} style={styles.image} />
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {rideName && (
                  <CaptionTextPrimary>{rideName}</CaptionTextPrimary>
                )}
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {registrationNo && <CaptionText>{registrationNo}</CaptionText>}
              </View>
            </View>
            <View style={styles.locationDetails}>
              {startLocation && (
                <CaptionText>{startLocation.address}</CaptionText>
              )}

              <Icon flexDirection="column" iconName={'pin-outline'}></Icon>
              {destinationLocation && (
                <CaptionText>{destinationLocation.address}</CaptionText>
              )}
            </View>
            <View style={styles.otherDetail}>
              {seatsAvailable && (
                <TextIcon flexDirection="column" iconName={'people-outline'}>
                  {seatsAvailable}
                </TextIcon>
              )}

              <View style={styles.horizontalSeparator} />

              {fare && (
                <TextIcon flexDirection="column" iconName={'cash-outline'}>
                  {fare}
                </TextIcon>
              )}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default Component;
