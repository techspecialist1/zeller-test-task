import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';

import {styles} from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
