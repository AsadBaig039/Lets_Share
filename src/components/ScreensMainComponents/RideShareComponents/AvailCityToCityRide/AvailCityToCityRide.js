import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import AvailRidesList from '../../../GeneralComponents/AvailRidesList';
import {doGet, doPost, doPostWithoutBody} from '../../../../utils/AxiosMethods';
import {useSelector} from 'react-redux';

const Component = ({navigation}) => {
  const userId = useSelector((state) => state.userInformation.user._id);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchCityToCityRides();
  }, []);

  const fetchCityToCityRides = async () => {
    let data = {
      userId: userId,
    };
    const result = await doPost(
      'v1/cityToCityRideShares/getAllCityToCityRides',
      data,
    );
    setData(result.data);
  };
  return <AvailRidesList data={data} navigation={navigation} />;
};
export default Component;
