import React, {useState, useEffect} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import * as Yup from 'yup';

import styles from './style';
import {
  FormByFormik as Form,
  BaselineFormField as FormField,
  FormPicker,
  SubmitButton as SubmitForm,
  FormImagePicker,
} from 'res/UniversalComponents/Forms';
import {useSelector} from 'react-redux';
import {doPost} from '../../../../utils/AxiosMethods';

//Third Party Exports Ends

const validationSchema = Yup.object().shape({
  rideName: Yup.string().required().min(5).max(15).label('Ride Name'),
  registrationNo: Yup.string()
    .required()
    .min(4)
    .max(10)
    .label('Registration No'),
  contactNo: Yup.string().required().min(11).label('Contact No'),
});

const categories = [
  {label: 'Car', value: 1},
  {label: 'Bike', value: 2},
];

const Component = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const state = useSelector((state) => state);
  const user = state.userInformation.user;

  const submitForm = (values) => {
    const newRideData = {
      ridePictures: values.image,
      ownerId: user._id,
      rideName: values.rideName,
      registrationNumber: values.registrationNo,
      rideType: values.rideType.label,
      ownerContactNumber: values.contactNo,
    };
    createRide(newRideData);
  };

  const createRide = async (newRideData) => {
    setIsLoading(true);

    const result = await doPost('v1/userRides/createRide', newRideData);
    console.log('Data from Ride Api', result);
    setIsLoading(false);
    navigation.navigate('CreateRideScreen', newRideData);
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.createRideComponentArea}>
        <Form
          initialValues={{
            rideName: '',
            registrationNo: '',
            contactNo: '',
            rideType: '',
            image: '',
          }}
          onSubmit={(values) => {
            submitForm(values);
          }}
          validationSchema={validationSchema}>
          {/* Input image */}
          <FormImagePicker name="image" />

          {/* Input Ride Name */}
          <FormField
            title="Ride Name"
            maxLength={20}
            name="rideName"
            placeholder="Enter your ride name. e.g; Honda City"
          />

          {/* Input Ride Registartion No */}
          <FormField
            title="Registration No"
            maxLength={10}
            name="registrationNo"
            placeholder="Enter Ride Registration No. e.g; LES-1020"
          />

          {/* Input Ride Owner Contact No */}
          <FormField
            title="Contact"
            maxLength={13}
            keyboardType="numeric"
            name="contactNo"
            placeholder="Enter Contact No. e.g; 03367676767"
          />

          <FormPicker
            heading="Choose Ride Type"
            name="rideType"
            icon="keypad-outline"
            items={categories}
            placeholder="Choose Ride Type"
          />

          {/* Submit Form */}
          <View style={styles.submitButtonArea}>
            <SubmitForm title="Add Ride" loading={isLoading}></SubmitForm>
          </View>
        </Form>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Component;
