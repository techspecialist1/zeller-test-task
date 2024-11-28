import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './style';

type ListViewProps = {
  item: {
    name: string;
    role: string;
  };
  onPress: () => void;
};

const ListView: React.FC<ListViewProps> = props => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.userList}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>{item?.name?.slice(0, 1)}</Text>
        </View>
        <View style={styles.listName}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.role}>{item?.role}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListView;
