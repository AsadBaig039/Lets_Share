import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import HorizontalFlatListItem from './HorizontalFlatListItem';
import FlatListItem from '../../GeneralComponents/HorizontalFlatList/FlatListItem';
import {useNavigation} from '@react-navigation/native';
import {FlatListData} from 'res/constants/dummyData.js';
import {HeadingText, GroupLabelText} from 'res/UniversalComponents/Text.js';
import LoadingIndicator from '../../GeneralComponents/LoadingIndicator';
import IllustrationContainer from '../IllustrationContainer';
import {ButtonTextLightGrey} from 'res/UniversalComponents/Text.js';
import Illustration from 'res/images/ModulesImages/GeneralImages/empty.png';

import styles from './style';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({
  data,
  isRecentlyShared,
  navigation,
  screen,
  onPress,
  refreshAction,
}) => {
  const listEmptyComponent = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <IllustrationContainer
          style={{width: 300, height: 300}}
          illustration={Illustration}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
          }}></View>
      </View>
    );
  };
  if (!data) {
    return <LoadingIndicator />;
  }

  return (
    <View>
      <TouchableOpacity onPress={refreshAction}>
        <Text>Refresh</Text>
      </TouchableOpacity>
      <FlatList
        ListEmptyComponent={listEmptyComponent}
        data={data ? data : FlatListData}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => (
          <FlatListItem
            id={item._id}
            item={item}
            onPress={() => {
              onPress ? onPress : navigation.navigate(screen, {item: item});
            }}
          />
        )}
        style={styles.FlatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Component;
