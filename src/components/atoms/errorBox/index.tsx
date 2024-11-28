import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './style';

type ErrorBoxProps = {
  text: string;
};

const ErrorBox: React.FC<ErrorBoxProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ErrorBox;
