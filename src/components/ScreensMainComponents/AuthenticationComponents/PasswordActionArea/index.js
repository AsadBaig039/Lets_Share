import React, {useState, useContext} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {
  FormByFormik as Form,
  FormField as Field,
  SubmitButton as Submit,
} from 'res/UniversalComponents/Forms.js';
import {
  ShareActionAreaHeadingText,
  TextInputErrorMessage,
  BodyTextBold,
} from 'res/UniversalComponents/Text.js';

import * as Yup from 'yup';
import {useRoute} from '@react-navigation/native';
import useDidMountEffect from '../../../../services/CustomHooks/useDidMountEffect';
import {useNavigation} from '@react-navigation/native';

//For Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginRequest} from '../../../../ducks/actions';
// Import Ends

const Component = ({loginRequest, userInfo}) => {
  const route = useRoute();
  const navigation = useNavigation();
  // console.log('Checking route.params in password Screen', route.params);
  const {email} = route.params;
  const [password, setPassword] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  //useEffects for life cycles

  useDidMountEffect(() => {
    try {
      if (password.length > 0) {
        const credentials = {email: email, password: password};
        // console.log(credentials);
        setAuthLoading(true);
        loginRequest(credentials);
      }
    } catch (err) {
      console.log('Password Screen Error', err.message);
    }
  }, [password]);

  useDidMountEffect(() => {
    setAuthLoading(false);
    try {
      // console.log('User Object After Login Password Screen-> ', userInfo.user);
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (err) {}
  }, [userInfo.user]);

  useDidMountEffect(() => {
    setAuthLoading(false);

    try {
      // console.log('Error After Login Password Screen-> ', userInfo.error);
      setShowPasswordError(true);
    } catch (err) {}
  }, [userInfo.error]);

  //useEffects Ends

  const validationSchema = Yup.object().shape({
    password: Yup.string().required().min(4).label('Password'),
  });

  const submitHandler = (values) => {
    // console.log('Checking Values', values);
    setShowPasswordError(false);
    setPassword(values.password);
    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'Home'}],
    // });
  };

  return (
    <View style={styles.emailLoginComponentArea}>
      <ShareActionAreaHeadingText>Enter Password </ShareActionAreaHeadingText>

      <View style={styles.emailInputArea}>
        <Form
          initialValues={{password: ''}}
          onSubmit={submitHandler}
          validationSchema={validationSchema}>
          <Field
            autoCapitalize="none"
            autoCorrect={false}
            icon="key-outline"
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          {showPasswordError && (
            <TextInputErrorMessage>Invalid password !</TextInputErrorMessage>
          )}
          <View style={styles.continueButton}>
            <Submit title="Login" loading={authLoading} />
          </View>
        </Form>
      </View>
    </View>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
