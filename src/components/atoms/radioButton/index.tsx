import React from 'react';
import {View, TouchableOpacity, ViewStyle, Text, TextStyle} from 'react-native';

import {styles} from './style';
import {RADIO_BUTTON_DIMENSIONS} from '../../../utils/constants';

type RadioButtonProps = {
  label: string;
  onChange: Function;
  customButtonStyle?: ViewStyle;
  activeButton: string;
  labelStyle?: TextStyle;
  radioSize?: number;
};

const RadioButton: React.FC<RadioButtonProps> = props => {
  const {onChange, label, customButtonStyle, radioSize, activeButton} =
    props || {};

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onChange(label)}
      style={[
        activeButton === label ? styles.activeButton : styles.inActiveButton,
        customButtonStyle,
      ]}>
      <View
        style={[
          styles.radio,
          radioSize
            ? {
                width: radioSize,
                height: radioSize,
                borderRadius: radioSize,
              }
            : null,
        ]}>
        {activeButton === label ? (
          <View
            style={[
              styles.fill,
              radioSize
                ? {
                    width: radioSize / RADIO_BUTTON_DIMENSIONS,
                    height: radioSize / RADIO_BUTTON_DIMENSIONS,
                    borderRadius: radioSize,
                  }
                : null,
            ]}
          />
        ) : null}
      </View>
      <View style={styles.labelView}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
